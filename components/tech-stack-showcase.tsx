"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TechStackItem {
    src: string
    alt: string
    title: string
    subtitle: string
    description: string
    icon?: React.ReactNode
    features?: string[]
}

interface TechStackShowcaseProps {
    items: TechStackItem[]
}

export function TechStackShowcase({ items }: TechStackShowcaseProps) {
     const [current, setCurrent] = useState(0)
     const [isAutoPlay, setIsAutoPlay] = useState(true)

     useEffect(() => {
         if (!isAutoPlay) return

         const timer = setInterval(() => {
             setCurrent((prev) => (prev + 1) % items.length)
         }, 3000)

         return () => clearInterval(timer)
     }, [isAutoPlay, items.length])

     const prev = () => {
         setCurrent((prev) => (prev - 1 + items.length) % items.length)
         setIsAutoPlay(false)
     }

     const next = () => {
         setCurrent((prev) => (prev + 1) % items.length)
         setIsAutoPlay(false)
     }

    const currentItem = items[current]

    return (
        <div className="w-full space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Left Side - Image */}
                <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-lime-400/20 group">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={currentItem.src}
                            alt={currentItem.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Image Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-5" />

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group/btn"
                        aria-label="Previous"
                    >
                        <div className="p-3 rounded-full bg-lime-400/10 border border-lime-400/40 backdrop-blur-sm group-hover/btn:bg-lime-400/20 group-hover/btn:border-lime-400/70 group-hover/btn:shadow-lg group-hover/btn:shadow-lime-400/30 transition-all">
                            <ChevronLeft className="h-6 w-6 text-lime-300" />
                        </div>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group/btn"
                        aria-label="Next"
                    >
                        <div className="p-3 rounded-full bg-lime-400/10 border border-lime-400/40 backdrop-blur-sm group-hover/btn:bg-lime-400/20 group-hover/btn:border-lime-400/70 group-hover/btn:shadow-lg group-hover/btn:shadow-lime-400/30 transition-all">
                            <ChevronRight className="h-6 w-6 text-lime-300" />
                        </div>
                    </button>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            {currentItem.icon && (
                                <div className="w-12 h-12 rounded-lg bg-lime-400/20 flex items-center justify-center border border-lime-400/40 backdrop-blur-sm">
                                    {currentItem.icon}
                                </div>
                            )}
                            <span className="text-sm font-semibold text-lime-300 tracking-widest uppercase">
                                {currentItem.subtitle}
                            </span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {currentItem.title}
                        </h3>

                        <p className="text-lg text-white/70 leading-relaxed">
                            {currentItem.description}
                        </p>
                    </div>

                    {/* Features List */}
                    {currentItem.features && currentItem.features.length > 0 && (
                        <div className="space-y-3">
                            {currentItem.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 group/item">
                                    <div className="w-5 h-5 rounded-full bg-lime-400/30 border border-lime-400/60 flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:bg-lime-400/50 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-lime-300" />
                                    </div>
                                    <span className="text-white/80 group-hover/item:text-white transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center items-center gap-2">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`group relative transition-all duration-300 ${
                            idx === current ? "scale-125" : "scale-100"
                        }`}
                        aria-label={`Go to item ${idx + 1}`}
                    >
                        <div
                            className={`rounded-full transition-all duration-300 ${
                                idx === current
                                    ? "h-3 w-8 bg-gradient-to-r from-lime-400 to-lime-300 shadow-lg shadow-lime-400/50"
                                    : "h-2.5 w-2.5 bg-white/30 group-hover:bg-white/50"
                            }`}
                        />
                    </button>
                ))}
            </div>

            {/* Counter */}
            <div className="flex justify-center items-center gap-2 text-sm text-white/60">
                <span className="font-mono font-bold text-lime-400">{String(current + 1).padStart(2, "0")}</span>
                <span className="text-white/40">/</span>
                <span className="font-mono">{String(items.length).padStart(2, "0")}</span>
            </div>
        </div>
    )
}
