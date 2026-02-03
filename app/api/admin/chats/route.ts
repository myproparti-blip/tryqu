import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Chat } from "@/lib/models/Chat"
import { Message } from "@/lib/models/Message"

// Helper function to verify admin token
function verifyAdminToken(request: NextRequest): boolean {
  const adminToken = request.headers.get("x-admin-token") || request.nextUrl.searchParams.get("adminToken")
  return adminToken === process.env.ADMIN_TOKEN || adminToken === localStorage?.getItem?.("adminToken")
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    // Get all chats, sorted by most recent first
    const chats = await Chat.find({ status: "active" })
      .populate("messages")
      .sort({ lastMessageTime: -1 })
      .lean()

    // Efficiently count unread messages for all visitors in one query
    // Only counts messages RECEIVED from user (sender: "user", isRead: false)
    const unreadCounts = await Message.aggregate([
      {
        $match: {
          sender: "user",    // Only messages FROM user (what admin receives)
          isRead: false,     // Only unread
        },
      },
      {
        $group: {
          _id: "$visitorId",
          unreadCount: { $sum: 1 },
        },
      },
    ])
    
    const unreadMap = new Map(unreadCounts.map((item: any) => [item._id, item.unreadCount]))

    const visitors = chats.map((chat: any) => ({
      visitorId: chat.visitorId,
      visitorName: chat.visitorName || "Anonymous",
      visitorEmail: chat.visitorEmail || "Not provided",
      lastMessage: (chat.lastMessage || "").substring(0, 50),
      lastMessageTime: new Date(chat.lastMessageTime).toLocaleString(),
      unread: unreadMap.get(chat.visitorId) || 0, // Count actual unread messages from user
      assignedTo: chat.assignedTo || "Unassigned",
      readAt: chat.readAt ? new Date(chat.readAt).toLocaleString() : "Never",
      messages: (chat.messages || []).map((msg: any) => ({
        id: msg.id,
        content: msg.content,
        sender: msg.sender,
        timestamp: msg.timestamp,
        visitorId: msg.visitorId,
        adminId: msg.adminId,
      })),
      status: chat.status,
      createdAt: new Date(chat.createdAt).toLocaleString(),
      messageCount: chat.messages?.length || 0,
    }))

    return NextResponse.json({ visitors })
  } catch (error) {
    console.error("Admin chats error:", error)
    return NextResponse.json({ error: "Failed to fetch chats" }, { status: 500 })
  }
}

// DELETE a chat and its messages
export async function DELETE(request: NextRequest) {
  try {
    const { visitorId } = await request.json()

    if (!visitorId) {
      return NextResponse.json(
        { error: "visitorId is required" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    // Delete all messages for this visitor
    await Message.deleteMany({ visitorId })

    // Delete the chat
    const result = await Chat.deleteOne({ visitorId })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Chat not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Chat with visitor ${visitorId} deleted successfully`,
    })
  } catch (error) {
    console.error("Delete chat error:", error)
    return NextResponse.json(
      { error: "Failed to delete chat" },
      { status: 500 }
    )
  }
}

// GET analytics/stats for admin dashboard
export async function GET_STATS(request: NextRequest) {
  try {
    await connectToDatabase()

    const stats = {
      totalChats: await Chat.countDocuments({ status: "active" }),
      unreadChats: await Chat.countDocuments({ status: "active", unreadCount: { $gt: 0 } }),
      totalMessages: await Message.countDocuments(),
      userMessages: await Message.countDocuments({ sender: "user" }),
      adminMessages: await Message.countDocuments({ sender: "admin" }),
      botMessages: await Message.countDocuments({ sender: "bot" }),
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Stats error:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
