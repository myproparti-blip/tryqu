"use client"

import { useState, useEffect } from "react"
import { usePageContext } from "@/hooks/use-page-context"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Shield, TrendingUp, Zap, Lock, Activity } from "lucide-react"

export function PremiumFeaturesGrid() {
    const { page } = usePageContext()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [animatedIndices, setAnimatedIndices] = useState<Set<number>>(new Set())

    const allFeatures = [
        {
            title: "Enterprise-Ready Architecture",
            description: "Supports high traffic, complex workloads, and long-term growth",
            businessValue: "Scale operations without infrastructure constraints",
            category: "RESULTS",
            badge: "RESULTS",
            emoji: "🏗️",
            icon: TrendingUp,
        },
        {
            title: "Faster Go-Live",
            description: "Automated CI/CD pipelines reduce deployment time significantly",
            businessValue: "Accelerate time-to-market by 50%",
            category: "SPEED",
            badge: "SPEED",
            emoji: "⚡",
            icon: Zap,
        },
        {
            title: "Easy System Integration",
            description: "Works seamlessly with existing tools, APIs, and platforms",
            businessValue: "Reduce integration complexity and costs",
            category: "SOCIAL",
            badge: "SOCIAL",
            emoji: "🔗",
            icon: Activity,
        },
        {
            title: "High Availability & Reliability",
            description: "Redundant setup with monitoring to minimize downtime",
            businessValue: "Ensure 99.99% uptime SLA compliance",
            category: "STANDOUT",
            badge: "STANDOUT",
            emoji: "📈",
            icon: Shield,
        },
        {
            title: "Security & Compliance Ready",
            description: "Aligned with SOC 2 / ISO security best practices",
            businessValue: "Protect enterprise data with zero-trust architecture",
            category: "PREMIUM",
            badge: "PREMIUM",
            emoji: "🔐",
            icon: Lock,
        },
    ]

    // Show all features on home page, or first 3 on other pages
    const features = page === 'home' ? allFeatures : allFeatures.slice(0, 3)

    // Trigger emoji animations on mount with staggered delay
    useEffect(() => {
        const timers: NodeJS.Timeout[] = []
        features.forEach((_, idx) => {
            const timer = setTimeout(() => {
                setAnimatedIndices(prev => new Set(prev).add(idx))
            }, idx * 150)
            timers.push(timer)
        })
        return () => {
            timers.forEach(timer => clearTimeout(timer))
        }
    }, [features.length])

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16 text-center">
                <p className="text-lime-300 font-semibold mb-4">PREMIUM FEATURES</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2">
                    Enterprise-Grade Capabilities
                </h2>
                <p className="text-base font-semibold text-lime-300/80 mb-4">
                    Purpose-built for operational excellence and measurable ROI
                </p>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Comprehensive solutions for mission-critical infrastructure and business resilience
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                {features.map((feature, idx) => {
                    const IconComponent = feature.icon || Shield
                    const isAnimated = animatedIndices.has(idx)
                    return (
                        <Card
                            key={idx}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative p-6 rounded-xl border transition-all duration-500 overflow-hidden flex flex-col cursor-pointer ${hoveredIndex === idx
                                ? "border-lime-400/60 bg-gradient-to-br from-lime-400/15 to-blue-400/10 shadow-lg shadow-lime-400/25"
                                : "border-white/15 bg-white/[0.02] hover:border-white/25"
                                }`}
                        >
                            {/* Animated Background Emoji Icon - visible on mount with stagger */}
                            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${isAnimated ? "opacity-15" : "opacity-0"
                                } ${hoveredIndex === idx ? "opacity-25 scale-110" : "scale-100"}`}>
                                <div className={`text-9xl transition-all duration-500 ${isAnimated ? "animate-pulse" : ""}`}>
                                    {feature.emoji}
                                </div>
                            </div>

                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-blue-500/0 group-hover:from-lime-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                            <div className="relative z-10">
                                <CardHeader className="pb-4 pt-0">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-lime-300 tracking-wider bg-lime-400/20 px-2 py-1 rounded">
                                            {feature.badge}
                                        </span>
                                        <IconComponent className="h-4 w-4 text-lime-300/70 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-lime-100 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-lime-300/70 mt-1 font-semibold">
                                        {feature.businessValue}
                                    </p>
                                </CardHeader>

                                <CardContent className="pb-6 flex-grow px-0">
                                    <p className="text-white/70 group-hover:text-white/90 transition-colors leading-relaxed text-sm duration-300">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute -bottom-1 -right-1 h-24 w-24 rounded-full bg-lime-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
