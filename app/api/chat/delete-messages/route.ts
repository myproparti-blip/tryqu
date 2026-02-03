import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"

/**
 * Delete specific messages for a visitor
 * Ensures only messages belonging to the specified visitor are deleted
 */
export async function DELETE(request: NextRequest) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { messageIds, visitorId } = body

    if (!messageIds || !Array.isArray(messageIds) || messageIds.length === 0) {
      return NextResponse.json(
        { error: "messageIds array is required and must not be empty" },
        { status: 400 }
      )
    }

    if (!visitorId || typeof visitorId !== "string" || visitorId.trim() === "") {
      return NextResponse.json(
        { error: "visitorId is required" },
        { status: 400 }
      )
    }

    // Delete messages only if they belong to the specified visitorId
    const result = await Message.deleteMany({
      id: { $in: messageIds },
      visitorId: visitorId,
    })

    console.log(
      `[DELETE-MESSAGES] Deleted ${result.deletedCount} messages for visitor: ${visitorId}`
    )

    return NextResponse.json({
      success: true,
      deletedCount: result.deletedCount,
      visitorId,
    })
  } catch (error) {
    console.error("Delete messages error:", error)
    return NextResponse.json(
      { error: "Failed to delete messages" },
      { status: 500 }
    )
  }
}
