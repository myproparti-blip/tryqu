import { ChatSupportDashboard } from "@/components/admin/chat-support-dashboard"
import { FloatingChatIcon } from "@/components/floating-chat-icon"

export default function AdminChatsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Floating Chat Icon with Badge for Admin */}
      <FloatingChatIcon isAdmin={true} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Chat Support Dashboard</h1>
        <p className="text-gray-400">Manage and respond to user conversations</p>
      </div>

      {/* Chat Dashboard */}
      <ChatSupportDashboard />

      {/* Info Box */}
      <div className="mt-8 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
        <p className="text-sm text-blue-300">
          💡 <span className="font-semibold">Tip:</span> Messages are auto-saved. Click on a visitor to view their conversation and send replies. Visitors will see your responses in real-time.
        </p>
      </div>
    </div>
  )
}
