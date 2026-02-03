'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

interface ConsultationData {
    type: string
    data?: any
}

export function useConsultationRealtime(onNewConsultation?: (data: any) => void) {
    const [isConnected, setIsConnected] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const eventSourceRef = useRef<EventSource | null>(null)

    // Connect to real-time stream
    const connect = useCallback(() => {
        if (eventSourceRef.current) {
            return // Already connected
        }

        try {
            const eventSource = new EventSource('/api/consultations-realtime')

            eventSource.onopen = () => {
                setIsConnected(true)
                setError(null)
            }

            eventSource.onmessage = (event) => {
                try {
                    const data: ConsultationData = JSON.parse(event.data)

                    if (data.type === 'connected') {
                        console.log('Connected to real-time stream:', data.message)
                    } else if (data.type === 'heartbeat') {
                        // Keep connection alive
                    } else if (data.type === 'new_consultation' && onNewConsultation) {
                        onNewConsultation(data.data)
                    }
                } catch (err) {
                    console.error('Error parsing real-time data:', err)
                }
            }

            eventSource.onerror = () => {
                setIsConnected(false)
                setError('Real-time connection lost. Attempting to reconnect...')
                eventSource.close()
                eventSourceRef.current = null

                // Attempt reconnection after 5 seconds
                setTimeout(() => {
                    connect()
                }, 5000)
            }

            eventSourceRef.current = eventSource
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to connect'
            setError(message)
            console.error('Connection error:', err)
        }
    }, [onNewConsultation])

    // Disconnect from real-time stream
    const disconnect = useCallback(() => {
        if (eventSourceRef.current) {
            eventSourceRef.current.close()
            eventSourceRef.current = null
            setIsConnected(false)
        }
    }, [])

    // Auto-connect on mount
    useEffect(() => {
        connect()

        return () => {
            disconnect()
        }
    }, [connect, disconnect])

    return { isConnected, error }
}
