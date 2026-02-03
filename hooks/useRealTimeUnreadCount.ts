"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface UnreadCountData {
  visitorId?: string
  userUnread: number
  adminUnread: number
  isLoading: boolean
}

/**
 * Real-time unread count hook with Server-Sent Events (SSE)
 * - Listens for immediate updates via SSE
 * - Falls back to polling if SSE fails
 * - Only counts RECEIVED unread messages
 */
export function useRealTimeUnreadCount(
  visitorId?: string,
  isAdmin: boolean = false,
  fallbackPollInterval: number = 3000
) {
  const [data, setData] = useState<UnreadCountData>({
    visitorId,
    userUnread: 0,
    adminUnread: 0,
    isLoading: false,
  })

  const cacheRef = useRef<{ unread: number; timestamp: number }>({
    unread: 0,
    timestamp: 0,
  })

  const eventSourceRef = useRef<EventSource | null>(null)
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Fetch current unread count from server
  const fetchUnreadCount = useCallback(async () => {
    try {
      setData((prev) => ({
        ...prev,
        isLoading: !cacheRef.current.timestamp ? true : false,
      }))

      if (isAdmin) {
        console.log("[ADMIN-UNREAD] Fetching admin unread count...")
        const response = await fetch("/api/admin/chats", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        })
        if (response.ok) {
          const apiData = await response.json()
          console.log("[ADMIN-UNREAD] API response:", apiData)
          const adminUnread = (apiData.visitors || []).reduce(
            (sum: number, visitor: any) => sum + (visitor.unread || 0),
            0
          )
          console.log("[ADMIN-UNREAD] Calculated total unread:", adminUnread)

          if (
            adminUnread !== cacheRef.current.unread ||
            Date.now() - cacheRef.current.timestamp > 60000
          ) {
            cacheRef.current = { unread: adminUnread, timestamp: Date.now() }
            console.log("[ADMIN-UNREAD] Updating state with count:", adminUnread)
            setData((prev) => ({
              ...prev,
              adminUnread,
              isLoading: false,
            }))
          }
        } else {
          console.error("[ADMIN-UNREAD] API error:", response.status, response.statusText)
        }
      } else if (visitorId) {
        const response = await fetch(`/api/chat/history?visitorId=${visitorId}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        })
        if (response.ok) {
          const chatData = await response.json()
          const messages = chatData.messages || []
          // Count ONLY unread ADMIN responses (not bot auto-responses or user messages)
          const userUnread = messages.filter(
            (msg: any) =>
              msg.sender === "admin" && !msg.isRead
          ).length

          if (
            userUnread !== cacheRef.current.unread ||
            Date.now() - cacheRef.current.timestamp > 60000
          ) {
            cacheRef.current = { unread: userUnread, timestamp: Date.now() }
            console.log(
              `[USER-BADGE] Visitor: ${visitorId}, Unread: ${userUnread}`
            )
            setData((prev) => ({
              ...prev,
              userUnread,
              visitorId,
              isLoading: false,
            }))
          }
        }
      }
    } catch (error) {
      console.error("Error fetching unread count:", error)
      setData((prev) => ({ ...prev, isLoading: false }))
    }
  }, [visitorId, isAdmin])

  // Handle real-time SSE messages
  const handleSSEMessage = useCallback(
    (event: MessageEvent) => {
      try {
        const update = JSON.parse(event.data)

        // Ignore connection/heartbeat messages
        if (update.type === "connected") {
          console.log("[SSE] Connected to real-time updates for:", update.visitorId)
          return
        }

        // On new message, immediately refetch count
        if (update.type === "new_message") {
          console.log("[SSE] New message received, refetching count...")
          fetchUnreadCount()
        }
      } catch (error) {
        // Heartbeat or non-JSON message, ignore
      }
    },
    [fetchUnreadCount]
  )

  // Set up SSE listener
  useEffect(() => {
    if (!isAdmin && !visitorId) {
      console.log("[REALTIME-HOOK] Skipping - not admin and no visitorId")
      return
    }

    console.log(
      `[REALTIME-HOOK] Starting - isAdmin: ${isAdmin}, visitorId: ${visitorId}`
    )

    // Fetch immediately on mount
    console.log("[REALTIME-HOOK] Fetching unread count immediately...")
    fetchUnreadCount()

    // Only set up SSE for user side (not admin, to reduce server load)
    // Admin side uses polling which refreshes the whole conversation list
    if (!isAdmin && visitorId) {
      try {
        const eventSource = new EventSource(
          `/api/chat/subscribe?visitorId=${visitorId}`
        )

        eventSource.addEventListener("message", handleSSEMessage)
        eventSource.addEventListener("error", (error) => {
          console.warn("[SSE] Connection error, falling back to polling", error)
          eventSource.close()
          eventSourceRef.current = null
        })

        eventSourceRef.current = eventSource
      } catch (error) {
        console.warn("[SSE] Failed to establish connection:", error)
      }
    }

    // Set up fallback polling
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current)
    }
    pollIntervalRef.current = setInterval(fetchUnreadCount, fallbackPollInterval)

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close()
      }
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current)
      }
    }
  }, [visitorId, isAdmin, fallbackPollInterval, fetchUnreadCount, handleSSEMessage])

  // Manual refetch
  const refetch = useCallback(async () => {
    console.log("[REALTIME-HOOK] Manual refetch triggered")
    await fetchUnreadCount()
  }, [fetchUnreadCount])

  return {
    userUnread: data.userUnread,
    adminUnread: data.adminUnread,
    isLoading: data.isLoading,
    refetch,
  }
}
