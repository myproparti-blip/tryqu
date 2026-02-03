"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"

export function Hero() {
    const [chatModalOpen, setChatModalOpen] = useState(false)
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)



    return (
        <>
            <section className="relative isolate overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-14 sm:py-20">
                        <div className="mb-5 flex items-center gap-2">
                            <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} className="h-8 w-8" />
                            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
                        </div>
                        <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="block text-white">Enterprise IT Solutions That <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Scale Your Business</span></span>
                        </h1>
                        <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">Accelerate time-to-market while reducing operational complexity</p>
                        <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">We help startups and enterprises streamline infrastructure, cloud, and DevOps to reduce costs and increase performance.</p>

                        {/* Chips Section */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {["SMEs", "Enterprises", "Product Companies", "Global IT Teams", "Startups"].map((chip) => (
                                <div
                                    key={chip}
                                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-400/10 to-lime-300/5 border border-lime-400/30 px-4 py-2 backdrop-blur-sm hover:border-lime-300/50 hover:from-lime-400/15 hover:to-lime-300/10 transition-all duration-200"
                                >
                                    <span className="text-lime-300">✓</span>
                                    <span className="text-sm font-medium text-gray-200">{chip}</span>
                                </div>
                            ))}
                        </div>

                        {/* Phone grid mimic */}
                        <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                            {phoneData.map((p, i) => {
                                const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"
                                const isHovered = hoveredCardIndex === i

                                return (
                                    <Link key={i} href={p.href} className={visibility}>
                                        <PhoneCard
                                            title={p.title}
                                            sub={p.sub}
                                            tone={p.tone}
                                            gradient={p.gradient}
                                            emoji={p.emoji}
                                            isHovered={isHovered}
                                            onMouseEnter={() => setHoveredCardIndex(i)}
                                            onMouseLeave={() => setHoveredCardIndex(null)}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <ChatWithUsModal isOpen={chatModalOpen} onClose={() => setChatModalOpen(false)} />
        </>
    )
}

function PhoneCard({
    title = "8°",
    sub = "Clear night. Great for render farm runs.",
    tone = "calm",
    gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
    emoji = "📱",
    isHovered = false,
    onMouseEnter,
    onMouseLeave,
}: {
    title?: string
    sub?: string
    tone?: string
    gradient?: string
    emoji?: string
    isHovered?: boolean
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}) {
    return (
        <div
            className={`group relative rounded-xl border transition-all duration-500 overflow-hidden p-6 cursor-pointer flex flex-col h-56 ${isHovered
                ? "border-lime-400/60 bg-gradient-to-br from-lime-400/15 to-blue-400/10 shadow-lg shadow-lime-400/25"
                : "border-white/15 bg-white/[0.02] hover:border-white/25"
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Background Emoji Icon - Hidden by default, visible on hover */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-20" : "opacity-0"
                }`}>
                <div className="text-9xl">{emoji}</div>
            </div>

            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-lime-500/0 to-blue-500/0 transition-all duration-500 ${isHovered ? "from-lime-500/5 to-blue-500/5" : ""
                }`} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 line-clamp-2 ${isHovered ? "text-lime-100" : "text-white"
                    }`}>
                    {title}
                </h3>

                {/* Subtitle/Description */}
                <p className={`text-sm transition-colors duration-300 mb-3 line-clamp-3 flex-grow ${isHovered ? "text-white/90" : "text-white/70"
                    }`}>
                    {sub}
                </p>

                {/* Badge - stays at bottom */}
                <div className="inline-flex items-center rounded-full bg-lime-400/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-lime-300 font-semibold mt-auto">
                    {tone === "calm" ? "tryqu tech platform" : tone}
                </div>
            </div>

            {/* Hover glow */}
            <div className={`absolute -bottom-1 -right-1 h-24 w-24 rounded-full bg-lime-400/20 blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                }`} />
        </div>
    )
}

const phoneData = [
    {
        title: "Enterprise-Ready Architecture",
        sub: "Supports high traffic, complex workloads, and long-term growth",
        tone: "results",
        gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
        href: "/solutions/scalability",
        emoji: "🏗️",
    },
    {
        title: "Faster Go-Live",
        sub: "Automated CI/CD pipelines reduce deployment time significantly",
        tone: "speed",
        gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
        href: "/solutions/speed",
        emoji: "⚙️",
    },
    {
        title: "Easy System Integration",
        sub: "Works seamlessly with existing tools, APIs, and platforms",
        tone: "social",
        gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
        href: "/solutions/integration",
        emoji: "🔗",
    },
    {
        title: "High Availability & Reliability",
        sub: "Redundant setup with monitoring to minimize downtime",
        tone: "standout",
        gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
        href: "/solutions/reliability",
        emoji: "📡",
    },
    {
        title: "Security & Compliance Ready",
        sub: "Aligned with SOC 2 / ISO security best practices",
        tone: "premium",
        gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
        href: "/solutions/security",
        emoji: "🛡️",
    },
]
