"use client"

import { MessageCircle, Bell } from "lucide-react"
import { useState, useEffect } from "react"
import { ChatbotModalV2 } from "@/components/chatbot-modal-v2"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"
import { ScheduleConsultationModal } from "@/components/services/schedule-consultation-modal"
import { useRealTimeUnreadCount } from "@/hooks/useRealTimeUnreadCount"

interface FloatingChatIconProps {
    isAdmin?: boolean
}

export function FloatingChatIcon({ isAdmin = false }: FloatingChatIconProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [showChatWithUs, setShowChatWithUs] = useState(false)
    const [showScheduleConsultation, setShowScheduleConsultation] = useState(false)
    const [visitorId, setVisitorId] = useState<string>("")
    const [isClient, setIsClient] = useState(false)

    // Get unread count using real-time hook with SSE fallback to polling
    const { userUnread, adminUnread, isLoading, refetch } = useRealTimeUnreadCount(visitorId, isAdmin, 3000)
    const unreadCount = isAdmin ? adminUnread : userUnread
    
    // Debug logging for admin badge
    useEffect(() => {
        if (isAdmin) {
            console.log("[FLOATING-ICON-ADMIN] isAdmin:", isAdmin, "adminUnread:", adminUnread, "unreadCount:", unreadCount)
        }
    }, [isAdmin, adminUnread, unreadCount])

    // Refetch badge count when chat closes (messages might have been marked as read)
    const handleChatClose = () => {
        setIsChatOpen(false)
        // Refetch to get updated unread count
        refetch()
    }



    const handleOpenChatWithUs = () => {
        setIsChatOpen(false)
        setShowChatWithUs(true)
    }

    const handleOpenScheduleConsultation = () => {
        setIsChatOpen(false)
        setShowScheduleConsultation(true)
    }

    // Set client flag to ensure hydration
    useEffect(() => {
        setIsClient(true)
    }, [])

    // Initialize visitor ID for user-side badge
    useEffect(() => {
        if (!isClient || isAdmin) return

        const id = localStorage.getItem("visitorId") || `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        localStorage.setItem("visitorId", id)
        setVisitorId(id)
        console.log("[FLOATING-ICON] Initialized visitorId:", id)
    }, [isClient, isAdmin])

    const handleChatClick = () => {
        if (isAdmin) {
            window.location.href = "/admin/chats"
        } else {
            setIsChatOpen(true)
        }
    }

    return (
        <>
            <ChatbotModalV2
                isOpen={isChatOpen}
                onClose={handleChatClose}
                onOpenChatWithUs={handleOpenChatWithUs}
                onOpenScheduleConsultation={handleOpenScheduleConsultation}
                onMarkAsRead={() => refetch()}
            />

            <ChatWithUsModal
                isOpen={showChatWithUs}
                onClose={() => setShowChatWithUs(false)}
            />

            <ScheduleConsultationModal
                isOpen={showScheduleConsultation}
                onClose={() => setShowScheduleConsultation(false)}
                serviceOptions={[
                    { value: "3d-rendering", label: "3D Product Rendering" },
                    { value: "archviz", label: "Architecture Visualization" },
                    { value: "it-training", label: "IT Training & Certification" },
                    { value: "technical-consulting", label: "Technical Consulting" },
                ]}
            />

            <button
                onClick={handleChatClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fixed bottom-8 right-8 z-40 group"
                aria-label={isAdmin ? "View admin messages" : "Open chat support"}
                title={isAdmin ? `${unreadCount} unread message${unreadCount > 1 ? "s" : ""}` : "Chat with us"}
            >
                {/* Animated background pulse ring - different for admin notifications */}
                <div className={`absolute inset-0 rounded-full animate-pulse ${isAdmin && unreadCount > 0 ? "bg-red-400/20" : "bg-lime-400/20"}`} />

                {/* Button container with gradient and hover effects */}
                <div className={`relative flex items-center justify-center h-16 w-16 rounded-full shadow-lg transition-all duration-300 ${
                    isAdmin && unreadCount > 0
                        ? `bg-gradient-to-br from-red-500 to-rose-600 ${isHovered ? "shadow-2xl shadow-red-500/50 scale-110 from-red-400 to-rose-500" : "hover:shadow-2xl hover:shadow-red-500/50 hover:scale-110 hover:from-red-400 hover:to-rose-500"}`
                        : `bg-gradient-to-br from-lime-400 to-lime-500 ${isHovered ? "shadow-2xl shadow-lime-400/50 scale-110 from-lime-300 to-lime-400" : "hover:shadow-2xl hover:shadow-lime-400/50 hover:scale-110 hover:from-lime-300 hover:to-lime-400"}`
                }`}>
                    {/* Bell icon for admin with unread messages, Chat icon otherwise */}
                    {isAdmin && unreadCount > 0 ? (
                        <Bell className={`h-7 w-7 text-white transition-transform duration-300 ${isHovered ? "scale-125" : "group-hover:scale-125"}`} />
                    ) : (
                        <MessageCircle className={`h-7 w-7 text-black transition-transform duration-300 ${isHovered ? "scale-125" : "group-hover:scale-125"}`} />
                    )}

                    {/* Unread badge - shows for both admin and user */}
                    {unreadCount > 0 && (
                        <span className={`absolute -top-2 -right-2 w-6 h-6 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse ${isAdmin ? "bg-red-600" : "bg-green-500"
                            }`}>
                            {unreadCount > 99 ? "99+" : unreadCount}
                        </span>
                    )}
                </div>

                {/* Tooltip */}
                <div className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-black/90 backdrop-blur-md rounded-lg border transition-all duration-200 text-white text-sm font-medium whitespace-nowrap transition-opacity duration-300 pointer-events-none ${
                    isAdmin && unreadCount > 0 ? "border-red-400/50" : "border-lime-400/30"
                } ${isHovered ? "opacity-100" : "opacity-0"}`}>
                    {isAdmin
                        ? unreadCount > 0 
                            ? `🔔 ${unreadCount} unread message${unreadCount > 1 ? "s" : ""}`
                            : "No new messages"
                        : (unreadCount > 0
                            ? `${unreadCount} new message${unreadCount > 1 ? "s" : ""}`
                            : "Chat with us")
                    }
                    <div className={`absolute top-full right-2 w-2 h-2 rotate-45 -mt-1 ${isAdmin && unreadCount > 0 ? "bg-red-600" : "bg-black/90"}`} />
                </div>
            </button>
        </>
    )
}
