import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, Menu, User } from "lucide-react"

interface AdminHeaderProps {
  selectedPage: string
  searchQuery: string
  notifications: number
  onSearchChange: (value: string) => void
  onSearch: () => void
  onMenuClick: () => void
  onClearNotifications: () => void
}

export function AdminHeader({
  selectedPage,
  searchQuery,
  notifications,
  onSearchChange,
  onSearch,
  onMenuClick,
  onClearNotifications,
}: AdminHeaderProps) {
  return (
    <div className="h-16 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 flex items-center justify-between px-4 lg:px-6 fixed top-0 right-0 left-0 lg:left-64 z-30 backdrop-blur">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="lg:hidden text-slate-300 hover:text-white" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold text-white capitalize">{selectedPage}</h1>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 border border-slate-700 focus-within:border-cyan-400 transition-colors">
          <Search className="h-4 w-4 text-slate-500" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
            className="w-32 lg:w-48 bg-transparent border-0 text-white text-sm placeholder-slate-500 focus:outline-none"
          />
        </div>
        <Button variant="ghost" size="sm" className="lg:hidden text-slate-400 hover:text-white">
          <Search className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearNotifications}
          className="text-slate-400 hover:text-white relative"
        >
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
              {notifications}
            </span>
          )}
        </Button>
        <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </div>
  )
}
