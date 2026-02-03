"use client"

import { useState, useEffect } from "react"
import { MessageCircle, LogOut, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatMessage {
    id: string
    content: string
    isAdmin: boolean
    timestamp: string
}

interface Visitor {
    visitorId: string
    lastMessage: string
    lastMessageTime: string
    unread: number
    messages: ChatMessage[]
    messageCount?: number
}

export function ChatSupportDashboard() {
    const [visitors, setVisitors] = useState<Visitor[]>([])
    const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null)
    const [replyText, setReplyText] = useState("")
    const [loading, setLoading] = useState(true)
    const [isSending, setIsSending] = useState(false)
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [deleting, setDeleting] = useState(false)

    // Calculate total unread messages (like WhatsApp - only show unread count)
    const totalUnreadMessages = visitors.reduce((sum, v) => sum + (v.unread || 0), 0)

    useEffect(() => {
        // Load visitors and their chats
        loadVisitors()
        // Poll for new messages every 2 seconds for real-time updates
        const interval = setInterval(() => {
            loadVisitors()
            setLastUpdate(new Date())
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const loadVisitors = async () => {
        try {
            const response = await fetch("/api/admin/chats", {
                method: "GET",
                headers: {
                    "Cache-Control": "no-cache",
                    "Pragma": "no-cache",
                },
            })
            if (response.ok) {
                const data = await response.json()
                setVisitors(data.visitors || [])
                // If selected visitor is updated, refresh their data
                if (selectedVisitor) {
                    const updatedVisitor = (data.visitors || []).find((v: any) => v.visitorId === selectedVisitor.visitorId)
                    if (updatedVisitor) {
                        setSelectedVisitor(updatedVisitor)
                    }
                }
            }
        } catch (error) {
            console.error("Failed to load visitors:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleSendReply = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!replyText.trim() || !selectedVisitor) return

        setIsSending(true)
        try {
            const response = await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: replyText,
                    visitorId: selectedVisitor.visitorId,
                    isAdmin: true,
                    adminToken: localStorage.getItem("adminToken"),
                }),
            })

            if (response.ok) {
                setReplyText("")
                // Reload conversation
                loadVisitors()
            }
        } catch (error) {
            console.error("Failed to send reply:", error)
        } finally {
            setIsSending(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        localStorage.removeItem("adminId")
        window.location.href = "/admin/login"
    }

    const handleDeleteChat = async (visitorId: string) => {
        setDeleting(true)
        try {
            const response = await fetch("/api/admin/chats", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ visitorId }),
            })

            if (response.ok) {
                // Remove from visitors list
                setVisitors(visitors.filter((v) => v.visitorId !== visitorId))
                setSelectedVisitor(null)
                setDeleteConfirm(null)
            } else {
                console.error("Failed to delete chat")
            }
        } catch (error) {
            console.error("Delete error:", error)
        } finally {
            setDeleting(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center">
                    <MessageCircle className="h-8 w-8 text-lime-400 mx-auto mb-4 animate-bounce" />
                    <p className="text-gray-400">Loading chats...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Visitors List */}
            <div className="lg:col-span-1 bg-gray-900 border border-gray-700 rounded-lg">
                <div className="p-4 border-b border-gray-700">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-bold text-white">Conversations</h2>
                        <Button
                            onClick={handleLogout}
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="bg-gray-800 p-3 rounded border border-gray-600 mb-3">
                        <p className="text-gray-400 text-xs mb-2">Unread Messages</p>
                        <p className={`font-bold text-2xl ${totalUnreadMessages > 0 ? "text-red-500" : "text-gray-400"}`}>
                            {totalUnreadMessages}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p>Live Updates • Last: {lastUpdate.toLocaleTimeString()}</p>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[600px]">
                    {visitors.length === 0 ? (
                        <div className="p-4 text-center text-gray-400">
                            <p className="text-sm">No conversations yet</p>
                        </div>
                    ) : (
                        visitors.map((visitor) => (
                            <button
                                key={visitor.visitorId}
                                onClick={() => setSelectedVisitor(visitor)}
                                className={`w-full p-4 border-b border-gray-700 text-left transition-colors hover:bg-gray-800 ${selectedVisitor?.visitorId === visitor.visitorId
                                    ? "bg-gray-800 border-l-4 border-l-lime-400"
                                    : ""
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-semibold text-white text-sm truncate">
                                        {visitor.visitorId.substring(0, 20)}
                                    </p>
                                    {visitor.unread > 0 && (
                                        <span className="bg-lime-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                                            {visitor.unread}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-400 text-xs truncate mb-1">
                                    {visitor.lastMessage}
                                </p>
                                <p className="text-gray-500 text-xs">{visitor.lastMessageTime}</p>
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 bg-gray-900 border border-gray-700 rounded-lg flex flex-col">
                {selectedVisitor ? (
                    <>
                        {/* Chat Header */}
                        <div className="p-4 border-b border-gray-700 bg-gray-800/50">
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <h3 className="font-bold text-white text-base">
                                        Visitor: {selectedVisitor.visitorId.substring(0, 30)}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setDeleteConfirm(selectedVisitor.visitorId)}
                                    title="Delete this chat"
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 transition-all border border-red-500/30 hover:border-red-500/60"
                                >
                                    <Trash2 className="h-5 w-5" />
                                    <span className="text-sm font-medium">Delete</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4 mt-2">
                                <p className="text-xs text-gray-400">Chat Session</p>
                                <div className="flex gap-4 text-xs">
                                    {selectedVisitor.unread > 0 && (
                                        <span className="text-red-400 bg-red-500/20 px-2 py-1 rounded-full border border-red-500/30">
                                            <span className="font-semibold">Unread:</span> {selectedVisitor.unread}
                                        </span>
                                    )}
                                    <span className="text-gray-400">
                                        <span className="font-semibold">Total Messages:</span> {selectedVisitor.messages.length}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {selectedVisitor.messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.isAdmin ? "justify-start" : "justify-end"
                                        }`}
                                >
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${message.isAdmin
                                            ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                                            : "bg-lime-500/20 text-lime-200 border border-lime-500/30"
                                            }`}
                                    >
                                        {message.isAdmin && (
                                            <p className="text-xs font-semibold text-orange-400 mb-1">
                                                You:
                                            </p>
                                        )}
                                        <p>{message.content}</p>
                                        <p className="text-xs opacity-60 mt-1">
                                            {new Date(message.timestamp).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reply Input */}
                        <form
                            onSubmit={handleSendReply}
                            className="p-4 border-t border-gray-700 flex gap-2"
                        >
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Type your response..."
                                disabled={isSending}
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-lime-400 disabled:opacity-50"
                            />
                            <Button
                                type="submit"
                                disabled={isSending || !replyText.trim()}
                                className="bg-lime-400 text-black hover:bg-lime-300 disabled:bg-gray-600"
                            >
                                Send
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-96">
                        <div className="text-center text-gray-400">
                            <MessageCircle className="h-8 w-8 mx-auto mb-4 opacity-50" />
                            <p className="text-sm">Select a conversation to reply</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
                    <div className="bg-gray-900 border-2 border-red-500/50 rounded-xl p-7 max-w-sm w-full mx-4 shadow-2xl shadow-red-500/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Trash2 className="h-6 w-6 text-red-400" />
                            <h3 className="text-xl font-bold text-white">
                                Delete Chat
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                            Are you sure you want to delete this entire chat conversation?
                        </p>
                        <p className="text-gray-400 text-xs mb-6 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                            ⚠️ <span className="font-semibold">Warning:</span> All messages and chat history will be permanently removed. This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <Button
                                onClick={() => setDeleteConfirm(null)}
                                disabled={deleting}
                                className="flex-1 border border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => handleDeleteChat(deleteConfirm)}
                                disabled={deleting}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-lg shadow-red-600/30"
                            >
                                {deleting ? (
                                    <>
                                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                                        Deleting...
                                    </>
                                ) : (
                                    <>
                                        <Trash2 className="h-4 w-4 inline mr-2" />
                                        Delete Chat
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
