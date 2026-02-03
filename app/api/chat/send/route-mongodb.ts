import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

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
      const isValidAdmin = verifyAdminToken(adminToken)
      if (!isValidAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
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
    })

    // Update or create chat
    let chat = await Chat.findOne({ visitorId })

    if (!chat) {
      // Create new chat
      chat = await Chat.create({
        visitorId,
        messages: [newMessage._id],
        lastMessage: content.substring(0, 100),
        lastMessageTime: new Date(),
        lastMessageSender: isAdmin ? "admin" : "user",
        unreadCount: isAdmin ? 0 : 1,
      })
    } else {
      // Update existing chat
      chat.messages.push(newMessage._id)
      chat.lastMessage = content.substring(0, 100)
      chat.lastMessageTime = new Date()
      chat.lastMessageSender = isAdmin ? "admin" : "user"

      // Update unread count
      if (isAdmin) {
        // Admin sending message - reset unread
        chat.unreadCount = 0
      } else {
        // User sending message - increment unread
        chat.unreadCount += 1
      }

      await chat.save()
    }

    // Send auto-response for user messages
    let botResponse = ""

    if (!isAdmin) {
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
    }

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

// Simple token verification
function verifyAdminToken(token: string): boolean {
  return token && token.length > 10
}
