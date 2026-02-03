/**
 * Efficient Unread Message Counter
 * Only counts RECEIVED messages (from admin/bot for users, from user for admin)
 * Optimized for high performance with proper indexing
 */

import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

/**
 * Count unread RECEIVED messages for a visitor (user)
 * Only counts messages from admin or bot that are unread
 * Uses indexed queries for high efficiency
 *
 * @param visitorId - The visitor ID
 * @returns Number of unread received messages
 */
export async function countUnreadReceivedMessages(visitorId: string): Promise<number> {
  try {
    const count = await Message.countDocuments({
      visitorId,
      sender: { $in: ["admin", "bot"] }, // Only received messages
      isRead: false, // Only unread
    })
    return count
  } catch (error) {
    console.error("[UNREAD-COUNTER] Error counting unread received messages:", error)
    return 0
  }
}

/**
 * Count unread RECEIVED messages for admin (all users)
 * Efficiently sums unread count from all active chats
 *
 * @returns Total unread messages for admin
 */
export async function countAdminUnreadMessages(): Promise<number> {
  try {
    const result = await Chat.aggregate([
      {
        $match: { status: "active" },
      },
      {
        $group: {
          _id: null,
          totalUnread: { $sum: "$unreadCount" },
        },
      },
    ])

    return result[0]?.totalUnread || 0
  } catch (error) {
    console.error("[UNREAD-COUNTER] Error counting admin unread messages:", error)
    return 0
  }
}

/**
 * Get detailed unread statistics
 * Returns breakdown of unread messages by type
 *
 * @param visitorId - Optional visitor ID (if not provided, returns admin stats)
 * @returns Unread statistics
 */
export async function getUnreadStats(visitorId?: string) {
  try {
    if (visitorId) {
      // User stats - count only received unread messages
      const receivedUnread = await Message.countDocuments({
        visitorId,
        sender: { $in: ["admin", "bot"] },
        isRead: false,
      })

      const totalMessages = await Message.countDocuments({ visitorId })

      return {
        visitorId,
        receivedUnread,
        totalMessages,
        percentageRead: totalMessages > 0 ? ((totalMessages - receivedUnread) / totalMessages * 100).toFixed(1) : "0",
      }
    } else {
      // Admin stats - use aggregation for efficiency
      const [activeChats, totalUnread] = await Promise.all([
        Chat.countDocuments({ status: "active" }),
        Chat.aggregate([
          { $match: { status: "active" } },
          { $group: { _id: null, sum: { $sum: "$unreadCount" } } },
        ]),
      ])

      const totalUnreadCount = totalUnread[0]?.sum || 0

      return {
        activeChats,
        totalUnread: totalUnreadCount,
        chatsWithUnread: await Chat.countDocuments({ status: "active", unreadCount: { $gt: 0 } }),
      }
    }
  } catch (error) {
    console.error("[UNREAD-COUNTER] Error getting unread stats:", error)
    return {}
  }
}

/**
 * Batch count unread messages for multiple visitors
 * Optimized for showing multiple conversation previews
 *
 * @param visitorIds - Array of visitor IDs
 * @returns Map of visitorId -> unread count
 */
export async function batchCountUnreadMessages(
  visitorIds: string[]
): Promise<Map<string, number>> {
  try {
    const results = await Message.aggregate([
      {
        $match: {
          visitorId: { $in: visitorIds },
          sender: { $in: ["admin", "bot"] },
          isRead: false,
        },
      },
      {
        $group: {
          _id: "$visitorId",
          count: { $sum: 1 },
        },
      },
    ])

    const map = new Map<string, number>()
    visitorIds.forEach((id) => map.set(id, 0)) // Default to 0
    results.forEach((result) => map.set(result._id, result.count))

    return map
  } catch (error) {
    console.error("[UNREAD-COUNTER] Error batch counting unread messages:", error)
    return new Map()
  }
}

/**
 * Verify unread count accuracy
 * Recalculates unread count from messages and updates Chat.unreadCount if needed
 *
 * @param visitorId - The visitor ID
 * @returns Whether correction was made
 */
export async function verifyAndFixUnreadCount(visitorId: string): Promise<boolean> {
  try {
    // Count actual unread user messages
    const actualUnread = await Message.countDocuments({
      visitorId,
      sender: "user",
      isRead: false,
    })

    // Get stored count
    const chat = await Chat.findOne({ visitorId })
    const storedUnread = chat?.unreadCount || 0

    // If mismatch, update
    if (actualUnread !== storedUnread) {
      await Chat.updateOne(
        { visitorId },
        { $set: { unreadCount: actualUnread } }
      )
      console.log(
        `[UNREAD-COUNTER] Fixed unread count for ${visitorId}: ${storedUnread} -> ${actualUnread}`
      )
      return true
    }

    return false
  } catch (error) {
    console.error("[UNREAD-COUNTER] Error verifying unread count:", error)
    return false
  }
}
