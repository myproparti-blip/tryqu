import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const visitorId = request.nextUrl.searchParams.get("visitorId")

    if (!visitorId || typeof visitorId !== "string" || visitorId.trim() === "") {
      return NextResponse.json({ error: "visitorId is required" }, { status: 400 })
    }

    // Get chat with populated messages
    const chat = await Chat.findOne({ visitorId }).populate("messages").lean()

    if (!chat) {
      return NextResponse.json({
        visitorId,
        messages: [],
      })
    }

    // Format messages for frontend
    // IMPORTANT: Filter messages to ensure they belong to this visitorId
    const messages = (chat.messages as any[])
      .filter((msg) => msg.visitorId === visitorId) // Only messages for this visitor
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()) // Sort by time
      .map((msg) => ({
        id: msg.id,
        content: msg.content,
        sender: msg.sender,
        timestamp: msg.timestamp,
        visitorId: msg.visitorId,
        adminId: msg.adminId,
        isRead: msg.isRead || false,
        readAt: msg.readAt,
        readBy: msg.readBy,
      }))

    console.log(`[CHAT-HISTORY] Fetched ${messages.length} messages for visitor: ${visitorId}`)

    return NextResponse.json({
      visitorId,
      messages,
    })
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error("Chat history fetch error:", errorMsg)
    console.error("Full error:", error)
    return NextResponse.json({ error: "Failed to fetch history", details: errorMsg }, { status: 500 })
  }
}
