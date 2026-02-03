import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

/**
 * Mark all messages as read for a visitor
 * POST /api/chat/mark-read
 * Body: { visitorId, isAdmin? }
 */
export async function POST(request: NextRequest) {
  try {
    await connectToDatabase()

    const body = await request.json()
    const { visitorId, isAdmin } = body

    if (!visitorId) {
      return NextResponse.json(
        { error: "visitorId is required" },
        { status: 400 }
      )
    }

    if (isAdmin) {
      // Admin: Mark all user messages as read by admin
      const result = await Message.updateMany(
        {
          visitorId,
          sender: "user",
          isRead: false,
        },
        {
          $set: {
            isRead: true,
            readAt: new Date(),
            readBy: "admin",
          },
        }
      )

      // Reset chat unread count
      await Chat.updateOne(
        { visitorId },
        {
          $set: {
            unreadCount: 0,
            readAt: new Date(),
          },
        }
      )

      console.log(
        `[MARK-READ] Admin marked ${result.modifiedCount} user messages as read for visitor: ${visitorId}`
      )

      return NextResponse.json({
        success: true,
        markedCount: result.modifiedCount,
        visitorId,
        readBy: "admin",
      })
    } else {
      // User: Mark all ADMIN messages as read by user (not bot auto-responses)
      const result = await Message.updateMany(
        {
          visitorId,
          sender: "admin",
          isRead: false,
        },
        {
          $set: {
            isRead: true,
            readAt: new Date(),
            readBy: "user",
          },
        }
      )

      console.log(
        `[MARK-READ] User marked ${result.modifiedCount} admin messages as read for visitor: ${visitorId}`
      )

      return NextResponse.json({
        success: true,
        markedCount: result.modifiedCount,
        visitorId,
        readBy: "user",
      })
    }
  } catch (error) {
    console.error("Mark read error:", error)
    return NextResponse.json(
      { error: "Failed to mark messages as read" },
      { status: 500 }
    )
  }
}
