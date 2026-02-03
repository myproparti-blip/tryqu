"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
    id: string
    content: string
    sender: "user" | "bot"
    timestamp: Date
    visitorId?: string
}

interface ChatbotModalProps {
    isOpen: boolean
    onClose: () => void
}

export function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [visitorId, setVisitorId] = useState<string>("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Initialize visitor ID
    useEffect(() => {
        if (!visitorId) {
            const id = localStorage.getItem("visitorId") || `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            localStorage.setItem("visitorId", id)
            setVisitorId(id)
        }
    }, [visitorId])

    // Load chat history
    useEffect(() => {
        if (isOpen && visitorId) {
            fetchChatHistory()
        }
    }, [isOpen, visitorId])

    // Auto scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const fetchChatHistory = async () => {
        try {
            const response = await fetch(`/api/chat/history?visitorId=${visitorId}`)
            if (response.ok) {
                const data = await response.json()
                setMessages(
                    data.messages.map((msg: any) => ({
                        ...msg,
                        timestamp: new Date(msg.timestamp),
                    }))
                )
            }
        } catch (error) {
            console.error("Failed to fetch chat history:", error)
        }
    }

    const suggestedQuestions = [
        "What solutions does TryQu offer?",
        "How can TryQu help my business grow?",
        "What are TryQu's pricing plans?",
        "How do I get started with TryQu?",
        "What features are included in TryQu?",
        "Does TryQu offer customer support?",
        "Can I integrate TryQu with my existing tools?",
        "How secure is TryQu?",
    ]

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const messageContent = inputValue

        // Add user message to UI
        const userMessage: Message = {
            id: `user_${Date.now()}`,
            content: messageContent,
            sender: "user",
            timestamp: new Date(),
            visitorId,
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: messageContent,
                    visitorId,
                    isAdmin: false,
                }),
            })

            if (response.ok) {
                const data = await response.json()

                // If there's a bot response, add it
                if (data.botResponse) {
                    const botMessage: Message = {
                        id: `bot_${Date.now()}`,
                        content: data.botResponse,
                        sender: "bot",
                        timestamp: new Date(),
                    }
                    setMessages((prev) => [...prev, botMessage])
                }
            }
        } catch (error) {
            console.error("Failed to send message:", error)
            const errorMessage: Message = {
                id: `error_${Date.now()}`,
                content: "Failed to send message. Please try again.",
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const handleQuestionClick = (question: string) => {
        setInputValue(question)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6">
            {/* Modal Backdrop */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

            {/* Chat Modal */}
            <div className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-lime-500 to-lime-400 p-4 rounded-t-2xl flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-black">Chat Support</h2>
                        <p className="text-sm text-black/70">Ask us anything</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-black/70 hover:text-black transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900">
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                            <div className="w-full">
                                <p className="text-gray-400 text-sm mb-4 font-semibold">How can we help you today?</p>
                                <p className="text-gray-500 text-xs mb-6">Select a question or type your own</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuestionClick(question)}
                                            className="text-left px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-lime-400 text-gray-300 text-xs transition-all hover:text-lime-300 cursor-pointer"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-center"
                                    }`}
                            >
                                <div
                                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${message.sender === "bot"
                                            ? "bg-gray-800 text-gray-300 text-center w-full"
                                            : "bg-lime-500/20 text-lime-200 border border-lime-500/30"
                                        }`}
                                >
                                    <p>{message.content}</p>
                                    <p className="text-xs opacity-60 mt-1">
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area - Search Bar */}
                <form
                    onSubmit={handleSendMessage}
                    className="border-t border-gray-700 p-4 bg-gray-800/50 rounded-b-2xl flex gap-2"
                >
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask us anything..."
                        disabled={isLoading}
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white text-sm focus:outline-none focus:border-lime-400 disabled:opacity-50 placeholder-gray-400"
                    />
                    <Button
                        type="submit"
                        disabled={isLoading || !inputValue.trim()}
                        className="bg-lime-400 text-black hover:bg-lime-300 disabled:bg-gray-600 px-4"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
