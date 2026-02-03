import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"

/**
 * Get messages for a specific visitorId
 * Uses direct Message collection query (more reliable than Chat.populate)
 * Ensures complete isolation between users
 */
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const visitorId = request.nextUrl.searchParams.get("visitorId")
    const limit = request.nextUrl.searchParams.get("limit") || "1000"

    if (!visitorId || typeof visitorId !== "string" || visitorId.trim() === "") {
      return NextResponse.json(
        { error: "visitorId is required", status: 400 },
        { status: 400 }
      )
    }

    // Query ONLY messages belonging to this visitorId
    const messages = await Message.find({ visitorId })
      .sort({ timestamp: 1 }) // Oldest first
      .limit(parseInt(limit))
      .lean()

    // Double-check: ensure all messages are for this visitor
    const validatedMessages = messages.filter((msg) => msg.visitorId === visitorId)

    if (validatedMessages.length < messages.length) {
      console.error(
        `[SECURITY] Message mismatch detected! Expected all from ${visitorId}, but got mixed visitors`
      )
    }

    const formattedMessages = validatedMessages.map((msg) => ({
      id: msg.id,
      content: msg.content,
      sender: msg.sender,
      timestamp: msg.timestamp,
      visitorId: msg.visitorId,
      adminId: msg.adminId || null,
    }))

    console.log(
      `[CHAT-MESSAGES] Retrieved ${formattedMessages.length} messages for visitor: ${visitorId}`
    )

    return NextResponse.json({
      visitorId,
      count: formattedMessages.length,
      messages: formattedMessages,
    })
  } catch (error) {
    console.error("Get messages error:", error)
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    )
  }
}
