import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Chat } from "@/lib/models/Chat"
import { Message } from "@/lib/models/Message"

/**
 * Get detailed info about a specific conversation
 * Shows: user info, message count, admin assigned, read status
 */
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase()

    const visitorId = request.nextUrl.searchParams.get("visitorId")
    const adminId = request.nextUrl.searchParams.get("adminId")
    const adminToken = request.nextUrl.searchParams.get("adminToken")

    if (!visitorId) {
      return NextResponse.json(
        { error: "visitorId is required" },
        { status: 400 }
      )
    }

    // Verify admin token
    if (adminToken) {
      const tokenData = verifyAdminToken(adminToken)
      if (!tokenData || (adminId && tokenData.adminId !== adminId)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
    }

    // Get chat info
    const chat = await Chat.findOne({ visitorId }).populate("messages").lean()

    if (!chat) {
      return NextResponse.json({
        visitorId,
        exists: false,
        messageCount: 0,
      })
    }

    // Count messages by type
    const messages = chat.messages as any[]
    const messageStats = {
      total: messages.length,
      userMessages: messages.filter((m) => m.sender === "user").length,
      adminMessages: messages.filter((m) => m.sender === "admin").length,
      botMessages: messages.filter((m) => m.sender === "bot").length,
    }

    return NextResponse.json({
      visitorId: chat.visitorId,
      visitorName: chat.visitorName || "Anonymous",
      visitorEmail: chat.visitorEmail || "Not provided",
      exists: true,
      status: chat.status,
      createdAt: chat.createdAt,
      lastMessageTime: chat.lastMessageTime,
      readAt: chat.readAt,
      assignedTo: chat.assignedTo || "Unassigned",
      unreadCount: chat.unreadCount || 0,
      messageStats,
      lastMessage: chat.lastMessage,
    })
  } catch (error) {
    console.error("Chat info error:", error)
    return NextResponse.json(
      { error: "Failed to fetch chat info" },
      { status: 500 }
    )
  }
}

// Token verification
function verifyAdminToken(token: string): { adminId: string } | null {
  try {
    if (!token) return null
    const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"))

    if (decoded.exp && decoded.exp < Date.now()) {
      return null
    }

    return { adminId: decoded.adminId }
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}
