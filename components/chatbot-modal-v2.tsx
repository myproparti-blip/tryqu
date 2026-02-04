"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send, LogOut, Lock, User, MessageCircle, CheckCircle, Trash2, Mail, Zap, TrendingUp, Rocket, Sparkles, Headphones, Plug, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/useGeolocation"

interface Message {
    id: string
    content: string
    sender: "user" | "admin" | "bot"
    timestamp: string
    visitorId?: string
    adminId?: string
}

interface ChatbotModalProps {
    isOpen: boolean
    onClose: () => void
    onOpenChatWithUs?: () => void
    onOpenScheduleConsultation?: () => void
    onMarkAsRead?: () => void
}

export function ChatbotModalV2({
    isOpen,
    onClose,
    onOpenChatWithUs,
    onOpenScheduleConsultation,
    onMarkAsRead
}: ChatbotModalProps) {
    const { whatsappConfig } = useGeolocation()
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [visitorId, setVisitorId] = useState<string>("")

    // Admin state
    const [isAdmin, setIsAdmin] = useState(false)
    const [adminId, setAdminId] = useState("")
    const [showAdminLogin, setShowAdminLogin] = useState(false)
    const [adminEmail, setAdminEmail] = useState("")
    const [adminPassword, setAdminPassword] = useState("")
    const [loginError, setLoginError] = useState("")

    // Admin conversation viewing
    const [conversations, setConversations] = useState<any[]>([])
    const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

    // Delete chat state
    const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    // Selected messages state
    const [selectedMessageIds, setSelectedMessageIds] = useState<Set<string>>(new Set())
    const [deleteSelectedConfirm, setDeleteSelectedConfirm] = useState(false)

    const pollIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const messagesContainerRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (messagesContainerRef.current) {
            // Use requestAnimationFrame for smooth scroll
            requestAnimationFrame(() => {
                if (messagesContainerRef.current) {
                    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
                }
            })
        }
    }, [messages])

    // Mark messages as read
    const markMessagesAsRead = async (isAdminMode: boolean) => {
        try {
            const id = isAdminMode ? selectedConversation : visitorId
            if (!id) return

            const response = await fetch("/api/chat/mark-read", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    visitorId: id,
                    isAdmin: isAdminMode,
                }),
            })

            if (response.ok) {
                const data = await response.json()
                console.log(`[MARK-READ] Marked ${data.markedCount} messages as read by ${data.readBy}`)
                // Trigger parent to refetch badge count
                if (onMarkAsRead) {
                    onMarkAsRead()
                }
            }
        } catch (error) {
            console.error("Error marking messages as read:", error)
        }
    }

    // Initialize visitor ID
    useEffect(() => {
        if (!visitorId) {
            const id = localStorage.getItem("visitorId") || `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            localStorage.setItem("visitorId", id)
            setVisitorId(id)
        }
    }, [visitorId])

    // Check for admin session on mount
    useEffect(() => {
        const adminToken = localStorage.getItem("adminToken")
        const storedAdminId = localStorage.getItem("adminId")
        if (adminToken && storedAdminId) {
            setIsAdmin(true)
            setAdminId(storedAdminId)
        }
    }, [])

    // Load messages - real-time polling
    useEffect(() => {
        if (!isOpen) return

        const loadMessages = async () => {
            try {
                if (isAdmin && selectedConversation) {
                    // Admin viewing specific conversation
                    console.log(`[ADMIN-CHAT] Loading conversation for: ${selectedConversation}`)
                    const response = await fetch(`/api/chat/history?visitorId=${selectedConversation}`)
                    if (response.ok) {
                        const data = await response.json()
                        // Verify we got the correct conversation
                        if (data.visitorId === selectedConversation) {
                            setMessages(data.messages || [])
                        } else {
                            console.error(`[ERROR] Conversation mismatch! Expected ${selectedConversation}, got ${data.visitorId}`)
                        }
                    } else {
                        console.error("[ERROR] Failed to fetch admin conversation:", response.status)
                    }
                } else if (!isAdmin && visitorId) {
                    // User viewing their own chat - ISOLATED
                    console.log(`[USER-CHAT] Loading chat for visitor: ${visitorId}`)
                    const response = await fetch(`/api/chat/history?visitorId=${visitorId}`)
                    if (response.ok) {
                        const data = await response.json()
                        // Verify we got OUR messages only
                        if (data.visitorId === visitorId) {
                            setMessages(data.messages || [])
                        } else {
                            console.error(`[ERROR] Chat mismatch! Expected ${visitorId}, got ${data.visitorId}`)
                        }
                    } else {
                        console.error("[ERROR] Failed to fetch user chat:", response.status)
                    }
                }
            } catch (error) {
                console.error("Failed to fetch messages:", error)
            }
        }

        loadMessages()

        // Mark messages as read when chat is opened
        if (isAdmin && selectedConversation) {
            markMessagesAsRead(true)
        } else if (!isAdmin && visitorId) {
            markMessagesAsRead(false)
        }

        // Real-time polling every 2 seconds
        pollIntervalRef.current = setInterval(loadMessages, 2000)
        return () => {
            if (pollIntervalRef.current) clearInterval(pollIntervalRef.current)
        }
    }, [isOpen, visitorId, isAdmin, selectedConversation])

    // Load all conversations for admin
    useEffect(() => {
        if (!isOpen || !isAdmin) return

        const loadConversations = async () => {
            try {
                const response = await fetch("/api/admin/chats")
                if (response.ok) {
                    const data = await response.json()
                    setConversations(data.visitors || [])
                }
            } catch (error) {
                console.error("Failed to load conversations:", error)
            }
        }

        loadConversations()
        const interval = setInterval(loadConversations, 3000)
        return () => clearInterval(interval)
    }, [isOpen, isAdmin])

    const handleAdminLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoginError("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/auth/admin-login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: adminEmail, password: adminPassword }),
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem("adminToken", data.token)
                localStorage.setItem("adminId", data.adminId)
                setIsAdmin(true)
                setAdminId(data.adminId)
                setShowAdminLogin(false)
                setAdminEmail("")
                setAdminPassword("")
            } else {
                const error = await response.json()
                setLoginError(error.message || "Invalid credentials")
            }
        } catch (error) {
            setLoginError("Login failed. Please try again.")
            console.error("Login error:", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleAdminLogout = () => {
        localStorage.removeItem("adminToken")
        localStorage.removeItem("adminId")
        setIsAdmin(false)
        setAdminId("")
        setSelectedConversation(null)
        setMessages([])
    }

    const handleDeleteChat = async (chatId: string) => {
        setIsDeleting(true)
        try {
            const response = await fetch("/api/admin/chats", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ visitorId: chatId }),
            })

            if (response.ok) {
                // Remove from conversations list
                setConversations(conversations.filter((c) => c.visitorId !== chatId))
                setSelectedConversation(null)
                setMessages([])
                setDeleteConfirm(null)
            } else {
                console.error("Failed to delete chat")
            }
        } catch (error) {
            console.error("Delete error:", error)
        } finally {
            setIsDeleting(false)
        }
    }

    const handleToggleMessageSelection = (messageId: string) => {
        setSelectedMessageIds((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(messageId)) {
                newSet.delete(messageId)
            } else {
                newSet.add(messageId)
            }
            return newSet
        })
    }

    const handleDeleteSelectedMessages = async () => {
        setIsDeleting(true)
        try {
            const messageIds = Array.from(selectedMessageIds)
            const response = await fetch("/api/chat/delete-messages", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messageIds,
                    visitorId: isAdmin ? selectedConversation : visitorId,
                }),
            })

            if (response.ok) {
                // Remove deleted messages from the list
                setMessages((prev) => prev.filter((msg) => !selectedMessageIds.has(msg.id)))
                setSelectedMessageIds(new Set())
                setDeleteSelectedConfirm(false)
            } else {
                console.error("Failed to delete messages")
            }
        } catch (error) {
            console.error("Delete messages error:", error)
        } finally {
            setIsDeleting(false)
        }
    }

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const messageContent = inputValue
        const currentVisitorId = isAdmin && selectedConversation ? selectedConversation : visitorId

        // Optimistic UI update
        const newMessage: Message = {
            id: `msg_${Date.now()}`,
            content: messageContent,
            sender: isAdmin ? "admin" : "user",
            timestamp: new Date().toISOString(),
            visitorId: !isAdmin ? currentVisitorId : undefined,
            adminId: isAdmin ? adminId : undefined,
        }

        setMessages((prev) => [...prev, newMessage])
        setInputValue("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: messageContent,
                    visitorId: !isAdmin ? currentVisitorId : selectedConversation,
                    adminId: isAdmin ? adminId : undefined,
                    isAdmin,
                    adminToken: isAdmin ? localStorage.getItem("adminToken") : undefined,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to send message")
            }

            const data = await response.json()

            // Add bot response if user sent message and there's a response
            if (!isAdmin && data.botResponse) {
                setTimeout(() => {
                    const botMessage: Message = {
                        id: `bot_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                        content: data.botResponse,
                        sender: "bot",
                        timestamp: new Date().toISOString(),
                    }
                    setMessages((prev) => [...prev, botMessage])
                }, 300)
            }
        } catch (error) {
            console.error("Failed to send message:", error)
            // Remove the optimistic message on error
            setMessages((prev) => prev.filter((m) => m.id !== newMessage.id))
        } finally {
            setIsLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:items-end md:justify-end md:p-6">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-600/40 rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-sm md:max-w-5xl h-[92vh] md:h-[800px] flex flex-col overflow-hidden">
                {/* Header - TryQu Tech Brand Colors */}
                <div className="bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 rounded-t-2xl shadow-lg border-b border-lime-300/50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)" }}></div>
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)" }}></div>
                    </div>

                    <div className="relative z-10 px-4 md:px-6 py-4 md:py-5">
                        {/* Single Row - Title, Icons, and Controls - Stacks on mobile */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-3">
                            {/* Left: Title Section with Logout for Admin */}
                            <div className="flex items-center gap-4">
                                {isAdmin ? (
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-xl bg-lime-600/20 backdrop-blur-sm border border-lime-600/40">
                                                <CheckCircle className="h-5 w-5 text-lime-700" />
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-bold text-lime-900 leading-tight">Admin Dashboard</h2>
                                                <p className="text-xs text-lime-700 font-medium">Logged in successfully</p>
                                            </div>
                                        </div>
                                        {/* Logout Button beside Admin Title */}
                                        <Button
                                            onClick={handleAdminLogout}
                                            size="sm"
                                            className="bg-rose-500/90 backdrop-blur-sm text-white hover:bg-rose-600 text-xs font-semibold shadow-lg transition-all duration-200 rounded-lg px-3 py-2 whitespace-nowrap"
                                        >
                                            <LogOut className="h-3.5 w-3.5 mr-1.5" />
                                            Logout
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-lime-700/20 backdrop-blur-sm border border-lime-700/30">
                                            <User className="h-5 w-5 text-lime-800" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-lime-900 leading-tight">Chat Support</h2>
                                            <p className="text-xs text-lime-800 font-medium">We're here to help</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Middle: Contact Icons with Text and Location (User Only) */}
                            {!isAdmin && (
                                <div className="flex flex-col w-full md:w-auto justify-start gap-2 md:gap-1.5">
                                    {whatsappConfig && (
                                        <div className="text-[10px] md:text-xs text-lime-800 whitespace-nowrap">
                                            📍 {whatsappConfig.country} • {whatsappConfig.displayPhone}
                                        </div>
                                    )}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <a
                                            href={`https://wa.me/${whatsappConfig?.phone}?text=Hi%20TryQu%20Tech%2C%20I%20would%20like%20to%20get%20more%20information.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Contact via WhatsApp"
                                            className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-2 rounded-lg bg-lime-600/20 hover:bg-lime-600/30 border border-lime-600/40 hover:border-lime-600/60 transition-all duration-200 group text-[10px] md:text-xs whitespace-nowrap"
                                        >
                                            <svg className="h-3.5 md:h-4 w-3.5 md:w-4 text-lime-700 group-hover:text-lime-800 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.982 1.313c-1.557.83-2.982 2.119-4.058 3.724-1.058 1.589-1.648 3.423-1.628 5.318.037 3.924 3.232 7.12 7.158 7.12h.009c1.44 0 2.84-.352 4.116-1.021l5.35 1.401-.001-5.404c.755-1.159 1.171-2.515 1.171-3.907 0-5.34-4.359-9.68-9.73-9.68m8.81 18.108l-.854 2.846c-1.948.881-4.084 1.368-6.312 1.368-6.656 0-12.08-5.424-12.08-12.08 0-2.227.484-4.357 1.357-6.299L2.255.015h2.846c1.948-.881 4.084-1.368 6.312-1.368 6.656 0 12.08 5.424 12.08 12.08 0 2.227-.484 4.357-1.357 6.299l1.127 6.09z" />
                                            </svg>
                                            <span className="hidden sm:inline font-medium text-lime-800 group-hover:text-lime-900">WhatsApp</span>
                                        </a>
                                        <a
                                            href="mailto:info@tryqu.com"
                                            title="Contact via Email"
                                            className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-2 rounded-lg bg-lime-600/20 hover:bg-lime-600/30 border border-lime-600/40 hover:border-lime-600/60 transition-all duration-200 group text-[10px] md:text-xs whitespace-nowrap"
                                        >
                                            <Mail className="h-3.5 md:h-4 w-3.5 md:w-4 text-lime-700 group-hover:text-lime-800 flex-shrink-0" />
                                            <span className="hidden sm:inline font-medium text-lime-800 group-hover:text-lime-900">Email</span>
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Right: Control Buttons */}
                            <div className="flex items-center gap-2 md:gap-2.5 w-full md:w-auto justify-end md:justify-start">
                                {/* Select Messages Button */}
                                {((isAdmin && selectedConversation) || (!isAdmin && messages.length > 0)) && (
                                    <button
                                        onClick={() => {
                                            if (selectedMessageIds.size > 0) {
                                                setSelectedMessageIds(new Set())
                                            } else {
                                                // Select first message to show checkboxes
                                                if (messages.length > 0) {
                                                    setSelectedMessageIds(new Set([messages[0].id]))
                                                }
                                            }
                                        }}
                                        title={selectedMessageIds.size > 0 ? "Clear selection" : "Select messages"}
                                        className={`text-xs font-semibold border transition-all duration-200 rounded-lg px-3 py-2 flex items-center gap-2 ${selectedMessageIds.size > 0
                                            ? "bg-lime-600/30 hover:bg-lime-600/50 text-lime-900 hover:text-lime-950 border-lime-600/40 hover:border-lime-600/60"
                                            : "bg-lime-100/60 hover:bg-lime-200/70 text-lime-900 hover:text-lime-950 border-lime-300/50 hover:border-lime-400/60"
                                            }`}
                                    >
                                        <span className="hidden sm:inline">{selectedMessageIds.size > 0 ? "Clear" : "Select"}</span>
                                        {selectedMessageIds.size > 0 && <span className="text-xs">({selectedMessageIds.size})</span>}
                                    </button>
                                )}

                                {/* Delete Selected Messages Button */}
                                {selectedMessageIds.size > 0 && (
                                    <button
                                        onClick={() => setDeleteSelectedConfirm(true)}
                                        title="Delete selected messages"
                                        className="bg-red-500/30 hover:bg-red-600/40 text-red-900 hover:text-red-950 text-xs font-semibold border border-red-500/50 hover:border-red-600/60 transition-all duration-200 rounded-lg px-3 py-2 flex items-center gap-2"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                        <span className="hidden sm:inline">Delete</span>
                                    </button>
                                )}

                                {/* Delete Chat Button */}
                                {selectedMessageIds.size === 0 && ((isAdmin && selectedConversation) || (!isAdmin && messages.length > 0)) && (
                                    <button
                                        onClick={() => setDeleteConfirm(isAdmin ? selectedConversation : visitorId)}
                                        title="Delete this chat"
                                        className="bg-red-500/30 hover:bg-red-600/40 text-red-900 hover:text-red-950 text-xs font-semibold border border-red-500/50 hover:border-red-600/60 transition-all duration-200 rounded-lg px-3 py-2 flex items-center gap-2"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" />
                                        <span className="hidden sm:inline">Delete All</span>
                                    </button>
                                )}

                                {/* Admin Button for Non-Admin */}
                                {!isAdmin && (
                                    <Button
                                        onClick={() => setShowAdminLogin(!showAdminLogin)}
                                        size="sm"
                                        className="bg-lime-100/60 backdrop-blur-sm text-lime-900 hover:bg-lime-200/70 text-xs font-semibold border border-lime-300/50 hover:border-lime-400 transition-all duration-200 rounded-lg px-3 py-2"
                                    >
                                        <Lock className="h-3.5 w-3.5 mr-1.5" />
                                        Admin
                                    </Button>
                                )}

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="text-lime-900/60 hover:text-lime-950 transition-all duration-200 p-2 hover:bg-lime-500/20 rounded-lg flex-shrink-0"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Admin Login Form */}
                {showAdminLogin && !isAdmin && (
                    <div className="p-5 border-b border-slate-600 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur">
                        <form onSubmit={handleAdminLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-lime-400 mb-2 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={adminEmail}
                                    onChange={(e) => setAdminEmail(e.target.value)}
                                    placeholder="admin@tryqu.tech"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-700/50 border border-slate-600 text-white text-sm focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-lime-400 mb-2 uppercase tracking-wider">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-700/50 border border-slate-600 text-white text-sm focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all"
                                    required
                                />
                            </div>
                            {loginError && (
                                <p className="text-xs text-rose-400 bg-rose-900/30 border border-rose-700/50 p-3 rounded-lg">{loginError}</p>
                            )}
                            <div className="flex gap-2 pt-2">
                                <Button
                                    type="submit"
                                    size="sm"
                                    disabled={isLoading}
                                    className="flex-1 bg-gradient-to-r from-lime-500 to-emerald-500 text-white hover:from-lime-600 hover:to-emerald-600 text-xs font-semibold shadow-lg disabled:opacity-50 transition-all"
                                >
                                    Login
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        setShowAdminLogin(false)
                                        setLoginError("")
                                    }}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 border-slate-600 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300 transition-all"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Main Content Area */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Admin Conversations List */}
                    {isAdmin && (
                        <div className="w-80 border-r border-slate-700 overflow-y-auto bg-gradient-to-b from-slate-800 to-slate-900">
                            <div className="p-5 border-b border-slate-700 sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 z-10 backdrop-blur">
                                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                                    Conversations ({conversations.length})
                                </h3>
                            </div>

                            {conversations.length === 0 ? (
                                <div className="p-8 text-center">
                                    <User className="h-8 w-8 mx-auto text-slate-600 mb-2 opacity-50" />
                                    <p className="text-slate-400 text-sm">No conversations yet</p>
                                </div>
                            ) : (
                                conversations.map((conversation, index) => (
                                    <div
                                        key={conversation.visitorId}
                                        className={`border-b border-slate-700/50 transition-all hover:bg-slate-700/50 ${selectedConversation === conversation.visitorId
                                            ? "bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-l-4 border-l-emerald-400"
                                            : ""
                                            }`}
                                    >
                                        <button
                                            onClick={() => setSelectedConversation(conversation.visitorId)}
                                            className="w-full p-4 text-left"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <p className="font-semibold text-white text-sm truncate">
                                                    User {index + 1}
                                                </p>
                                                {conversation.unread > 0 && (
                                                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full ml-2 shadow-lg">
                                                        {conversation.unread}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-300 text-xs truncate mb-2 leading-relaxed">
                                                {conversation.lastMessage}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-slate-500">
                                                <span>{conversation.lastMessageTime}</span>
                                                {conversation.assignedTo && conversation.assignedTo !== "Unassigned" && (
                                                    <span className="text-lime-400 font-semibold">Assigned</span>
                                                )}
                                            </div>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setDeleteConfirm(conversation.visitorId)
                                            }}
                                            className="px-3 py-2 m-2 text-xs rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 hover:text-red-300 transition-all border border-red-500/30 hover:border-red-500/60 w-[calc(100%-1rem)] flex items-center gap-2 justify-center"
                                        >
                                            <Trash2 className="h-3.5 w-3.5" />
                                            Delete
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {isAdmin && !selectedConversation ? (
                            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                                <div className="text-center">
                                    <User className="h-16 w-16 mx-auto mb-4 text-slate-600 opacity-40" />
                                    <p className="text-slate-400 text-sm font-medium">Select a conversation to view messages</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Messages */}
                                <div
                                    ref={messagesContainerRef}
                                    className="flex-1 overflow-y-auto p-5 space-y-3 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
                                >
                                    {messages.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center p-4">
                                            {!isAdmin ? (
                                                <div className="w-full">
                                                    <p className="text-center text-gray-400 text-sm mb-2 font-semibold">👋 Hi! Welcome to TryQu Tech.</p>
                                                    <p className="text-center text-gray-300 text-xs mb-6">How can we help you today — cloud solutions, DevOps, pricing, or something else?</p>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "What solutions does TryQu offer?"
                                                                const msg = "🎯 TryQu Solutions:\n\n✅ 3D Product Rendering\n   High-quality 3D visualization & product design\n\n✅ 3D Architecture Visualization\n   Professional ArchViz & building visualizations\n\n✅ IT Training & Certification\n   Comprehensive training courses & certifications\n\n✅ Technical Consulting\n   Expert guidance for your projects\n\nNeed more details? Just ask!"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Zap className="h-4 w-4 flex-shrink-0" />
                                                            <span>What solutions does TryQu offer?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "How can TryQu help my business grow?"
                                                                const msg = "📈 How TryQu Helps Your Business:\n\n💡 Enhanced Visuals\n   Stunning 3D renders increase product appeal & conversions\n\n📊 Professional Presence\n   Architecture visualization builds client confidence\n\n🎓 Skilled Team\n   IT training creates competent workforce\n\n🚀 Technical Excellence\n   Expert consulting solves complex challenges\n\n💰 ROI Growth\n   Quality solutions lead to better business outcomes\n\nLet's grow together! 🌟"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <TrendingUp className="h-4 w-4 flex-shrink-0" />
                                                            <span>How can TryQu help my business grow?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "What are TryQu's pricing plans?"
                                                                const msg = "💰 TryQu Pricing Tiers:\n\n🎨 3D RENDERING PACKAGES\n📦 Basic 3D - $500-1,500\n   Single product visualization\n📦 Pro 3D - $2,000-5,000\n   Complex product renderings\n📦 Enterprise 3D - Custom pricing\n   Full product line visualization\n\n🏗️ ARCHITECTURE VISUALIZATION\n📦 Standard ArchViz - $1,500-3,000\n📦 Premium ArchViz - $3,500-8,000\n📦 Complete Project - Custom quote\n\n🎓 IT TRAINING\n📦 Individual Courses - $200-500\n📦 Certification Programs - $1,000-3,000\n📦 Corporate Training - Custom pricing\n\nClick calendar to book consultation! 📅"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Zap className="h-4 w-4 flex-shrink-0" />
                                                            <span>What are TryQu's pricing plans?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "How do I get started with TryQu?"
                                                                const msg = "🚀 Getting Started with TryQu:\n\n📋 SIMPLE 3-STEP PROCESS\n\n1️⃣ CONSULTATION\n   Discuss your project needs & goals\n   Use chat or book meeting above\n\n2️⃣ PROPOSAL\n   Receive detailed quote & timeline\n   50% upfront, 50% on completion\n\n3️⃣ DELIVERY\n   Professional execution & revisions\n   Fast turnaround guaranteed\n\n✨ Ready to start?\n   👉 Book Consultation (Calendar button)\n   👉 Chat with us (message now)\n   👉 Email: tryq@gmail.com\n\nLet's bring your vision to life! 🎯"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Rocket className="h-4 w-4 flex-shrink-0" />
                                                            <span>How do I get started with TryQu?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "What features are included in TryQu?"
                                                                const msg = "✨ TryQu Features:\n\n🎨 3D RENDERING\n   ✓ Photorealistic product visualization\n   ✓ Multiple angle renderings\n   ✓ Custom lighting & materials\n   ✓ Quick revisions & iterations\n\n🏗️ ARCHITECTURE VISUALIZATION\n   ✓ Building design visualization\n   ✓ Interior space planning\n   ✓ Landscape integration\n   ✓ Client presentations\n\n🎓 IT TRAINING\n   ✓ Certified instructors\n   ✓ Hands-on learning\n   ✓ Industry-standard courses\n   ✓ Job placement support\n\n💼 CONSULTING\n   ✓ Technical expertise\n   ✓ Project guidance\n   ✓ Problem solving\n   ✓ Strategy planning\n\nAll backed by quality & support! 🌟"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Sparkles className="h-4 w-4 flex-shrink-0" />
                                                            <span>What features are included in TryQu?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "Does TryQu offer customer support?"
                                                                const msg = "🤝 TryQu Customer Support:\n\n📞 SUPPORT CHANNELS\n   ✓ Live Chat Support (this window)\n   ✓ WhatsApp Messaging\n   ✓ Email: tryq@gmail.com\n   ✓ Scheduled Consultations\n\n🕐 SUPPORT HOURS\n   Monday - Friday: 9 AM - 6 PM IST\n   Weekend: Limited support available\n   Urgent requests: Available on demand\n\n✅ WHAT WE OFFER\n   ✓ Quick response times\n   ✓ Project updates & progress\n   ✓ Technical assistance\n   ✓ Unlimited revisions\n   ✓ Post-delivery support\n\n🌟 YOUR SUCCESS IS OUR PRIORITY\n   We're here to help every step of the way!\n\nAny questions? Ask away! 💬"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Headphones className="h-4 w-4 flex-shrink-0" />
                                                            <span>Does TryQu offer customer support?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "Can I integrate TryQu with my existing tools?"
                                                                const msg = "🔗 TryQu Integration Capabilities:\n\n✅ COMPATIBLE WITH\n   ✓ Major design software (Adobe, AutoCAD)\n   ✓ Project management tools\n   ✓ CRM systems\n   ✓ Email & collaboration platforms\n   ✓ Cloud storage services\n   ✓ Custom API integrations\n\n🔄 WORKFLOW INTEGRATION\n   ✓ Seamless file transfers\n   ✓ Automated reporting\n   ✓ Real-time project updates\n   ✓ Team collaboration features\n\n💡 FLEXIBLE SOLUTIONS\n   ✓ Custom integration setup\n   ✓ Technical support included\n   ✓ Smooth transition process\n   ✓ Minimal workflow disruption\n\n📋 NEED CUSTOM INTEGRATION?\n   Contact us for technical consultation\n   👉 Book a meeting above or chat now\n\nWe work with YOUR tools! 🎯"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Plug className="h-4 w-4 flex-shrink-0" />
                                                            <span>Can I integrate TryQu with my existing tools?</span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                const questionText = "How secure is TryQu?"
                                                                const msg = "🔒 TryQu Security & Protection:\n\n🛡️ DATA SECURITY\n   ✓ End-to-end encryption\n   ✓ Secure file transfers\n   ✓ Regular security audits\n   ✓ Compliance with industry standards\n\n🔐 PRIVACY PROTECTION\n   ✓ Data privacy policy\n   ✓ No unauthorized access\n   ✓ Secure storage systems\n   ✓ GDPR & legal compliance\n\n✅ PROFESSIONAL STANDARDS\n   ✓ NDA agreements available\n   ✓ Confidentiality guaranteed\n   ✓ Secure communication channels\n   ✓ Professional conduct\n\n💼 BUSINESS SECURITY\n   ✓ Reliable infrastructure\n   ✓ Backup & recovery systems\n   ✓ Uptime guarantee\n   ✓ Enterprise-grade security\n\nYour trust is our foundation! 🌟\nQuestions about security? Ask us!"
                                                                setInputValue(questionText)
                                                                setTimeout(() => {
                                                                    const form = document.querySelector('form')
                                                                    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                                }, 100)
                                                            }}
                                                            className="flex items-center gap-3 text-left px-4 py-3 rounded-lg bg-lime-500/20 hover:bg-lime-500/30 border border-lime-500/40 hover:border-lime-400 text-lime-100 text-xs transition-all hover:text-lime-50 cursor-pointer font-medium shadow-sm hover:shadow-lime-500/20 hover:shadow-md"
                                                        >
                                                            <Shield className="h-4 w-4 flex-shrink-0" />
                                                            <span>How secure is TryQu?</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400">
                                                    <p className="text-sm">No messages in this conversation</p>
                                                    <p className="text-xs text-gray-500 mt-2">Messages will appear here</p>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                                    } animate-in fade-in slide-in-from-bottom-2 duration-300 gap-2 items-end`}
                                            >
                                                {selectedMessageIds.size > 0 && (
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedMessageIds.has(message.id)}
                                                        onChange={() => handleToggleMessageSelection(message.id)}
                                                        className="w-4 h-4 rounded border-lime-400/50 bg-slate-700 cursor-pointer accent-lime-500 mb-2"
                                                    />
                                                )}
                                                <div
                                                    className={`max-w-xs px-4 py-3 rounded-2xl text-sm break-words shadow-lg ${message.sender === "bot"
                                                        ? "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-200 border border-slate-600/50 text-center w-3/4"
                                                        : message.sender === "admin"
                                                            ? "bg-gradient-to-br from-lime-600/80 to-emerald-600/80 text-white border border-lime-500/30 font-medium"
                                                            : "bg-gradient-to-br from-lime-500 to-emerald-600 text-white font-medium"
                                                        }`}
                                                >
                                                    {message.sender === "admin" && (
                                                        <p className="text-xs font-bold text-lime-100 mb-2 flex items-center gap-2">
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-lime-400/80 text-lime-950 text-xs font-semibold">
                                                                🏢 TryQu Team
                                                            </span>
                                                        </p>
                                                    )}
                                                    {message.sender === "bot" && (
                                                        <p className="text-xs font-semibold text-slate-400 mb-2">🤖 Bot</p>
                                                    )}
                                                    <p className="leading-relaxed">{message.content}</p>
                                                    <p className="text-xs opacity-70 mt-2">
                                                        {new Date(message.timestamp).toLocaleTimeString([], {
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Quick Service Chips (User Only) */}
                                {!isAdmin && (
                                    <div className="border-t border-slate-600/40 px-3 md:px-5 py-3 md:py-4 bg-gradient-to-b from-slate-750/50 to-slate-750/30 backdrop-blur overflow-y-auto max-h-[100px]">
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            <button
                                                onClick={() => {
                                                    const serviceMsg = "Services"
                                                    setInputValue(serviceMsg)
                                                    setTimeout(() => {
                                                        const form = document.querySelector('form')
                                                        if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                    }, 100)
                                                }}
                                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-lime-500/20 text-lime-200 border border-lime-500/40 hover:bg-lime-500/35 hover:border-lime-500/70 transition-all duration-200 whitespace-nowrap"
                                            >
                                                🎯 Services
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const aboutMsg = "About"
                                                    setInputValue(aboutMsg)
                                                    setTimeout(() => {
                                                        const form = document.querySelector('form')
                                                        if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                    }, 100)
                                                }}
                                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-lime-500/20 text-lime-200 border border-lime-500/40 hover:bg-lime-500/35 hover:border-lime-500/70 transition-all duration-200 whitespace-nowrap"
                                            >
                                                ℹ️ About
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const faqMsg = "FAQ"
                                                    setInputValue(faqMsg)
                                                    setTimeout(() => {
                                                        const form = document.querySelector('form')
                                                        if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                    }, 100)
                                                }}
                                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-lime-500/20 text-lime-200 border border-lime-500/40 hover:bg-lime-500/35 hover:border-lime-500/70 transition-all duration-200 whitespace-nowrap"
                                            >
                                                ❓ FAQ
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const pricingMsg = "Pricing"
                                                    setInputValue(pricingMsg)
                                                    setTimeout(() => {
                                                        const form = document.querySelector('form')
                                                        if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                    }, 100)
                                                }}
                                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-lime-500/20 text-lime-200 border border-lime-500/40 hover:bg-lime-500/35 hover:border-lime-500/70 transition-all duration-200 whitespace-nowrap"
                                            >
                                                💰 Pricing
                                            </button>
                                            <button
                                                onClick={() => {
                                                    const contactMsg = "Contact"
                                                    setInputValue(contactMsg)
                                                    setTimeout(() => {
                                                        const form = document.querySelector('form')
                                                        if (form) form.dispatchEvent(new Event('submit', { bubbles: true }))
                                                    }, 100)
                                                }}
                                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-lime-500/20 text-lime-200 border border-lime-500/40 hover:bg-lime-500/35 hover:border-lime-500/70 transition-all duration-200 whitespace-nowrap"
                                            >
                                                📞 Contact
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <form
                                    onSubmit={handleSendMessage}
                                    className="border-t border-slate-600/40 p-3 md:p-5 bg-gradient-to-t from-slate-800 to-slate-750/80 backdrop-blur flex gap-2 md:gap-3"
                                >
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder={isAdmin ? "Type response..." : "Ask us anything..."}
                                        disabled={isLoading}
                                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-slate-700/40 border border-slate-600/60 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 disabled:opacity-50 transition-all"
                                    />
                                    <Button
                                        type="submit"
                                        disabled={isLoading || !inputValue.trim()}
                                        className="bg-gradient-to-r from-lime-500 to-lime-600 text-white hover:from-lime-600 hover:to-lime-700 disabled:from-slate-600 disabled:to-slate-700 px-3 md:px-5 py-2 md:py-3 rounded-lg font-medium shadow-lg transition-all disabled:shadow-none flex-shrink-0"
                                    >
                                        <Send className="h-4 md:h-5 w-4 md:w-5" />
                                    </Button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Delete Selected Messages Confirmation Modal */}
            {deleteSelectedConfirm && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">
                    <div className="bg-gray-900 border-2 border-red-500/50 rounded-xl p-7 max-w-sm w-full mx-4 shadow-2xl shadow-red-500/20 animate-in fade-in scale-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Trash2 className="h-6 w-6 text-red-400" />
                            <h3 className="text-xl font-bold text-white">
                                Delete Selected Messages
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                            Delete {selectedMessageIds.size} message{selectedMessageIds.size !== 1 ? 's' : ''}?
                        </p>
                        <p className="text-gray-400 text-xs mb-6 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                            ⚠️ <span className="font-semibold">Warning:</span> Selected messages will be permanently removed. This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteSelectedConfirm(false)}
                                disabled={isDeleting}
                                className="flex-1 border border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all rounded-lg py-2.5 font-medium disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteSelectedMessages}
                                disabled={isDeleting}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-lg shadow-red-600/30 rounded-lg py-2.5 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isDeleting ? (
                                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <Trash2 className="h-4 w-4" />
                                        Delete Messages
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">
                    <div className="bg-gray-900 border-2 border-red-500/50 rounded-xl p-7 max-w-sm w-full mx-4 shadow-2xl shadow-red-500/20 animate-in fade-in scale-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Trash2 className="h-6 w-6 text-red-400" />
                            <h3 className="text-xl font-bold text-white">
                                Delete Chat
                            </h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                            {isAdmin ? "Delete this entire conversation?" : "Are you sure you want to delete your chat?"}
                        </p>
                        <p className="text-gray-400 text-xs mb-6 p-3 bg-red-900/20 rounded-lg border border-red-500/20">
                            ⚠️ <span className="font-semibold">Warning:</span> All messages and chat history will be permanently removed. This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                disabled={isDeleting}
                                className="flex-1 border border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all rounded-lg py-2.5 font-medium disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDeleteChat(deleteConfirm)}
                                disabled={isDeleting}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold transition-all shadow-lg shadow-red-600/30 rounded-lg py-2.5 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isDeleting ? (
                                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <Trash2 className="h-4 w-4" />
                                        Delete Chat
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}