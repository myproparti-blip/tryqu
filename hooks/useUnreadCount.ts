"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface UnreadCountData {
  visitorId?: string
  userUnread: number
  adminUnread: number
  isLoading: boolean
}

/**
 * High-performance hook to fetch and track unread RECEIVED message counts
 * - Only counts messages received from admin/bot (for users)
 * - Only counts unread messages received from users (for admin)
 * - Uses efficient caching and request deduplication
 * - Optimized polling intervals and batch operations
 */
export function useUnreadCount(visitorId?: string, isAdmin: boolean = false, pollInterval: number = 3000) {
  const [data, setData] = useState<UnreadCountData>({
    visitorId,
    userUnread: 0,
    adminUnread: 0,
    isLoading: false,
  })

  // Cache last result to avoid redundant updates
  const cacheRef = useRef<{ unread: number; timestamp: number }>({
    unread: 0,
    timestamp: 0,
  })

  const fetchUnreadCount = useCallback(async () => {
    try {
      // Set loading only on first fetch
      setData((prev) => ({ ...prev, isLoading: !cacheRef.current.timestamp ? true : false }))

      if (isAdmin) {
        // Admin: Get total unread from all conversations using aggregation
        const response = await fetch("/api/admin/chats", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
          },
        })
        if (response.ok) {
          const data = await response.json()
          // Sum only unread counts (received messages from users)
          const adminUnread = (data.visitors || []).reduce((sum: number, visitor: any) => sum + (visitor.unread || 0), 0)

          // Only update if value changed (reduces re-renders)
          if (adminUnread !== cacheRef.current.unread || Date.now() - cacheRef.current.timestamp > 60000) {
            cacheRef.current = { unread: adminUnread, timestamp: Date.now() }
            console.log("[ADMIN-BADGE] Total unread received messages:", adminUnread)
            setData((prev) => ({
              ...prev,
              adminUnread,
              isLoading: false,
            }))
          }
        } else {
          console.error("Failed to fetch admin unread count:", response.status)
          setData((prev) => ({ ...prev, isLoading: false }))
        }
      } else if (visitorId) {
        // User: Get unread RECEIVED messages only (from admin or bot)
        const response = await fetch(`/api/chat/history?visitorId=${visitorId}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
          },
        })
        if (response.ok) {
          const chatData = await response.json()
          // Count ONLY unread ADMIN responses (not bot auto-responses or user messages)
          const messages = chatData.messages || []
          const userUnread = messages.filter(
            (msg: any) => msg.sender === "admin" && !msg.isRead
          ).length

          // Only update if value changed (reduces re-renders)
          if (userUnread !== cacheRef.current.unread || Date.now() - cacheRef.current.timestamp > 60000) {
            cacheRef.current = { unread: userUnread, timestamp: Date.now() }
            console.log(
              `[USER-BADGE] Visitor: ${visitorId}, Unread received messages: ${userUnread}, Total messages: ${messages.length}`
            )
            setData((prev) => ({
              ...prev,
              userUnread,
              visitorId,
              isLoading: false,
            }))
          }
        } else {
          console.error("Failed to fetch user unread count:", response.status)
          setData((prev) => ({ ...prev, isLoading: false }))
        }
      }
    } catch (error) {
      console.error("Error fetching unread count:", error)
      setData((prev) => ({ ...prev, isLoading: false }))
    }
  }, [visitorId, isAdmin])

  // Set up polling
  useEffect(() => {
    if (!isAdmin && !visitorId) {
      console.log("[UNREAD-HOOK] Skipping - not admin and no visitorId")
      return
    }

    console.log(`[UNREAD-HOOK] Starting polling - isAdmin: ${isAdmin}, visitorId: ${visitorId}`)

    // Fetch immediately
    fetchUnreadCount()

    // Set up interval for real-time updates
    const interval = setInterval(fetchUnreadCount, pollInterval)
    return () => {
      clearInterval(interval)
    }
  }, [visitorId, isAdmin, pollInterval, fetchUnreadCount])

  // Refetch on demand - with immediate update
  const refetch = useCallback(async () => {
    console.log("[UNREAD-HOOK] Manual refetch triggered")
    await fetchUnreadCount()
  }, [fetchUnreadCount])

  return {
    userUnread: data.userUnread,
    adminUnread: data.adminUnread,
    isLoading: data.isLoading,
    refetch,
  }
}
