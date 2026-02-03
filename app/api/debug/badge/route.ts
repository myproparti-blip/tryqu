import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Chat } from "@/lib/models/Chat"
import { Message } from "@/lib/models/Message"

/**
 * DEBUG ENDPOINT - Shows unread counts for testing
 * GET /api/debug/badge?visitorId=xxx
 */
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const visitorId = request.nextUrl.searchParams.get("visitorId")

    if (!visitorId) {
      // Return all chats summary
      const chats = await Chat.find().populate("messages").lean()

      const summary = chats.map((chat: any) => ({
        visitorId: chat.visitorId,
        totalMessages: chat.messages?.length || 0,
        userMessages: (chat.messages || []).filter((m: any) => m.sender === "user").length,
        adminMessages: (chat.messages || []).filter((m: any) => m.sender === "admin").length,
        botMessages: (chat.messages || []).filter((m: any) => m.sender === "bot").length,
        unreadCount: chat.unreadCount || 0,
      }))

      return NextResponse.json({
        status: "debug",
        totalChats: chats.length,
        chats: summary,
      })
    }

    // Get specific visitor
    const chat = await Chat.findOne({ visitorId }).populate("messages").lean()

    if (!chat) {
      return NextResponse.json({
        status: "not_found",
        visitorId,
        messages: [],
      })
    }

    const messages = (chat.messages || []) as any[]
    const adminMessages = messages.filter((m) => m.sender === "admin")
    const userMessages = messages.filter((m) => m.sender === "user")

    return NextResponse.json({
      status: "success",
      visitorId: chat.visitorId,
      totalMessages: messages.length,
      userMessages: userMessages.length,
      adminMessages: adminMessages.length,
      botMessages: messages.filter((m) => m.sender === "bot").length,
      unreadCount: chat.unreadCount || 0,
      lastMessage: chat.lastMessage,
      lastMessageSender: chat.lastMessageSender,
      lastMessageTime: chat.lastMessageTime,
      messages: messages.map((m) => ({
        id: m.id,
        sender: m.sender,
        content: m.content.substring(0, 50) + (m.content.length > 50 ? "..." : ""),
        timestamp: m.timestamp,
        isRead: m.isRead,
        readBy: m.readBy,
        readAt: m.readAt,
      })),
    })
  } catch (error) {
    console.error("Debug endpoint error:", error)
    return NextResponse.json(
      {
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}
