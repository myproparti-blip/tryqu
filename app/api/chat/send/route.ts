import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

// Import the broadcast function - if file doesn't exist, this will be a no-op
let broadcastUpdate: (visitorId: string, update: any) => void = () => {}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { content, visitorId, adminId, isAdmin, adminToken } = body

    if (!content?.trim()) {
      return NextResponse.json({ error: "Message content is required" }, { status: 400 })
    }

    if (!visitorId) {
      return NextResponse.json({ error: "Visitor ID is required" }, { status: 400 })
    }

    // Verify admin token if admin is sending
    if (isAdmin && adminToken) {
      const tokenData = verifyAdminToken(adminToken)
      if (!tokenData) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
      // Verify adminId matches
      if (tokenData.adminId !== adminId) {
        return NextResponse.json({ error: "Admin ID mismatch" }, { status: 401 })
      }
    }

    // Create message
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const newMessage = await Message.create({
      id: messageId,
      content,
      sender: isAdmin ? "admin" : "user",
      visitorId,
      adminId: isAdmin ? adminId : undefined,
      timestamp: new Date(),
      isRead: false, // New messages are unread by default
      readBy: undefined,
    })

    // Update or create chat
    let chat = await Chat.findOne({ visitorId })

    if (!chat) {
      // Create new chat
      // unreadCount = 0 always on creation because:
      // - If user sends first message: admin hasn't replied yet (nothing to read)
      // - If admin sends first message: it will be marked unread by user's hook
      chat = await Chat.create({
        visitorId,
        messages: [newMessage._id],
        lastMessage: content.substring(0, 100),
        lastMessageTime: new Date(),
        lastMessageSender: isAdmin ? "admin" : "user",
        unreadCount: 0, // Always 0 on creation - only increments when admin receives user message
      })
    } else {
      // Update existing chat
      chat.messages.push(newMessage._id)
      chat.lastMessage = content.substring(0, 100)
      chat.lastMessageTime = new Date()
      chat.lastMessageSender = isAdmin ? "admin" : "user"

      // Update chat metadata
      if (isAdmin) {
        // Admin sending message - assign to this admin
        chat.assignedTo = adminId
      }
      // IMPORTANT: Do NOT modify unreadCount here!
      // unreadCount is only tracked via the useUnreadCount hook
      // which counts actual unread messages in the database

      await chat.save()
    }

    // Send auto-response for user messages (skip if admin)
    let botResponse = ""

    if (!isAdmin) {
      // Only send auto-response if user is not admin
      botResponse = "Thank you for your message. Our team will get back to you shortly."

      const botMessage = await Message.create({
        id: `bot_${Date.now()}`,
        content: botResponse,
        sender: "bot",
        visitorId,
        timestamp: new Date(),
      })

      // Add bot message to chat
      chat.messages.push(botMessage._id)
      chat.lastMessage = botResponse.substring(0, 100)
      chat.lastMessageTime = new Date()
      chat.lastMessageSender = "bot"
      await chat.save()

      console.log(`[CHAT] New user message from ${visitorId}: ${content}`)
    } else {
      console.log(`[CHAT] Admin message from ${adminId}: ${content}`)
    }

    // Broadcast real-time update to subscribers
    // User sends message -> notify admin (and all listeners for this conversation)
    // Admin sends message -> notify user (and all listeners for this conversation)
    broadcastUpdate(visitorId, {
      type: "new_message",
      visitorId,
      sender: isAdmin ? "admin" : "user",
      content: content.substring(0, 100),
      timestamp: new Date().toISOString(),
      adminId: isAdmin ? adminId : undefined,
    })

    return NextResponse.json({
      success: true,
      messageId: newMessage.id,
      botResponse,
    })
  } catch (error) {
    console.error("Chat send error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}

// Token verification
function verifyAdminToken(token: string): { adminId: string } | null {
  try {
    if (!token) return null
    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"))
    
    // Check token expiration
    if (decoded.exp && decoded.exp < Date.now()) {
      return null
    }
    
    return { adminId: decoded.adminId }
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}
