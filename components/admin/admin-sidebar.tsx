import { Button } from "@/components/ui/button"
import { LogOut, X } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SidebarItem {
  id: string
  name: string
  icon: LucideIcon
}

interface AdminSidebarProps {
  items: SidebarItem[]
  selectedPage: string
  onPageSelect: (pageId: string) => void
  onLogout: () => void
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

export function AdminSidebar({
  items,
  selectedPage,
  onPageSelect,
  onLogout,
  isMobile = false,
  isOpen = false,
  onClose = () => {},
}: AdminSidebarProps) {
  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-white font-bold text-sm">TQ</span>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">TryQu</h1>
            <p className="text-xs text-slate-400">Admin</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">NAVIGATION</p>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onPageSelect(item.id)
                if (isMobile && onClose) onClose()
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                selectedPage === item.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </>
  )

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="absolute left-0 top-0 h-full w-64 bg-slate-950 border-r border-slate-700 flex flex-col">
              <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TQ</span>
                  </div>
                  <span className="text-lg font-semibold text-white">TryQu</span>
                </div>
                <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-white">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">MENU</p>
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onPageSelect(item.id)
                        onClose()
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                        selectedPage === item.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-slate-700">
                <button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="hidden lg:flex w-64 bg-slate-950 border-r border-slate-700 flex-col fixed left-0 top-0 h-full z-40">
      {sidebarContent}
    </div>
  )
}
