import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"

// Store active subscribers for each visitorId
const subscribers = new Map<string, Set<ReadableStreamDefaultController<Uint8Array>>>()

/**
 * Server-Sent Events (SSE) endpoint for real-time updates
 * GET /api/chat/subscribe?visitorId=xxx
 */
export async function GET(request: NextRequest) {
  const visitorId = request.nextUrl.searchParams.get("visitorId")
  
  if (!visitorId) {
    return NextResponse.json({ error: "visitorId is required" }, { status: 400 })
  }

  // Create a streaming response
  const stream = new ReadableStream({
    start(controller) {
      // Send initial connection message
      const encoder = new TextEncoder()
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "connected", visitorId })}\n\n`))

      // Register this subscriber
      if (!subscribers.has(visitorId)) {
        subscribers.set(visitorId, new Set())
      }
      subscribers.get(visitorId)!.add(controller)

      // Keep-alive heartbeat every 30 seconds
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`:heartbeat\n\n`))
        } catch {
          clearInterval(heartbeat)
        }
      }, 30000)

      // Cleanup on disconnect
      const cleanup = () => {
        clearInterval(heartbeat)
        const controllers = subscribers.get(visitorId)
        if (controllers) {
          controllers.delete(controller)
          if (controllers.size === 0) {
            subscribers.delete(visitorId)
          }
        }
      }

      request.signal.addEventListener("abort", cleanup)
    },
  })

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  })
}

/**
 * Broadcast a real-time update to all subscribers of a visitorId
 */
export function broadcastUpdate(visitorId: string, update: any) {
  const controllers = subscribers.get(visitorId)
  if (!controllers || controllers.size === 0) return

  const encoder = new TextEncoder()
  const message = `data: ${JSON.stringify(update)}\n\n`
  
  controllers.forEach((controller) => {
    try {
      controller.enqueue(encoder.encode(message))
    } catch (error) {
      // Controller is closed, will be removed on next heartbeat
      console.error("Error broadcasting to subscriber:", error)
    }
  })
}
