"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Sparkles,
    Package,
    DollarSign,
    User,
    TrendingUp,
    CheckCircle,
    Video,
    BarChart3,
    Settings,
    FileText,
    ArrowRight,
} from "lucide-react"

interface AdminDashboardHomeProps {
    onNavigate?: (page: string) => void
}

export function AdminDashboardHome({ onNavigate }: AdminDashboardHomeProps) {
    const metrics = [
        {
            label: "Active Orders",
            value: "24",
            change: "+12%",
            icon: Package,
            color: "from-cyan-500 to-blue-500",
        },
        {
            label: "Revenue",
            value: "$8,420",
            change: "+23%",
            icon: DollarSign,
            color: "from-green-500 to-emerald-500",
        },
        {
            label: "Site Visitors",
            value: "3.2K",
            change: "+18%",
            icon: User,
            color: "from-blue-500 to-purple-500",
        },
        {
            label: "Project Completion",
            value: "94%",
            change: "+5%",
            icon: CheckCircle,
            color: "from-purple-500 to-pink-500",
        },
    ]

    const quickActions = [
        {
            title: "Manage Content",
            description: "Edit website content and sections",
            icon: FileText,
            action: "content",
            color: "blue",
        },
        {
            title: "Update Pricing",
            description: "Adjust pricing tiers and features",
            icon: DollarSign,
            action: "pricing",
            color: "green",
        },
        {
            title: "View Analytics",
            description: "Check performance metrics",
            icon: BarChart3,
            action: "analytics",
            color: "purple",
        },
        {
            title: "Settings",
            description: "Configure admin preferences",
            icon: Settings,
            action: "settings",
            color: "orange",
        },
    ]

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Welcome back
                </h1>
                <p className="text-slate-400">
                    {new Date().toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>
            </div>

            {/* Status Banner */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-purple-500/80" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">System Status: Active</h3>
                            <p className="text-white/70">Your admin panel is fully operational</p>
                        </div>
                    </div>
                    <Button className="bg-white text-cyan-600 hover:bg-white/90 font-bold px-6">
                        View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                        <Card
                            key={index}
                            className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all"
                        >
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-slate-300 text-sm font-medium">{metric.label}</p>
                                        <div className={`p-2 bg-gradient-to-br ${metric.color} rounded-lg`}>
                                            <Icon className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-3xl font-bold text-white">{metric.value}</p>
                                        <p className="text-sm text-green-400">{metric.change} from last period</p>
                                    </div>
                                    <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div className={`h-full bg-gradient-to-r ${metric.color} w-3/4`} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => {
                        const Icon = action.icon
                        const colorMap: Record<string, string> = {
                            blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
                            green: "from-green-500/20 to-emerald-600/20 border-green-500/30",
                            purple: "from-purple-500/20 to-pink-600/20 border-purple-500/30",
                            orange: "from-orange-500/20 to-red-600/20 border-orange-500/30",
                        }

                        return (
                            <Card
                                key={index}
                                className={`bg-gradient-to-br ${colorMap[action.color]} border cursor-pointer hover:shadow-lg transition-all`}
                                onClick={() => onNavigate?.(action.action)}
                            >
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <Icon className={`h-8 w-8 text-${action.color}-400`} />
                                        <div>
                                            <h3 className="font-semibold text-white">{action.title}</h3>
                                            <p className="text-sm text-slate-300 mt-1">{action.description}</p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-slate-300 hover:text-white p-0"
                                            onClick={() => onNavigate?.(action.action)}
                                        >
                                            Open <ArrowRight className="ml-2 h-3 w-3" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            {/* Recent Activity */}
            <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <Video className="h-5 w-5 text-cyan-400" />
                        Recent Updates
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {[
                            { title: "Pricing Plan Updated", time: "2 hours ago", icon: "💰" },
                            { title: "New Order Received", time: "4 hours ago", icon: "📦" },
                            { title: "Content Published", time: "6 hours ago", icon: "📝" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{item.icon}</span>
                                    <div>
                                        <p className="text-white font-medium text-sm">{item.title}</p>
                                        <p className="text-slate-400 text-xs">{item.time}</p>
                                    </div>
                                </div>
                                <TrendingUp className="h-4 w-4 text-green-400" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
