"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface CarouselImage {
    src: string
    alt: string
    title?: string
    subtitle?: string
    icon?: React.ReactNode
}

interface PremiumCarouselProps {
    images: CarouselImage[]
    autoPlay?: boolean
    interval?: number
    height?: string
}

export function PremiumCarousel({
    images,
    autoPlay = true,
    interval = 6000,
    height = "h-[600px]"
}: PremiumCarouselProps) {
    const [current, setCurrent] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)
    const [direction, setDirection] = useState<"left" | "right">("right")

    useEffect(() => {
        if (!isAutoPlay) return

        const timer = setInterval(() => {
            setDirection("right")
            setCurrent((prev) => (prev + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [isAutoPlay, interval, images.length])

    const prev = () => {
        setDirection("left")
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
        setIsAutoPlay(false)
    }

    const next = () => {
        setDirection("right")
        setCurrent((prev) => (prev + 1) % images.length)
        setIsAutoPlay(false)
    }

    return (
        <div className="w-full space-y-6">
            {/* Main Carousel */}
            <div
                className={`relative w-full ${height} overflow-hidden rounded-3xl shadow-2xl shadow-lime-400/20`}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(autoPlay)}
            >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
                </div>

                {/* Images with Slide Animation */}
                {images.map((img, idx) => {
                    const isActive = idx === current

                    return (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                isActive ? "opacity-100 z-20" : "opacity-0 z-0"
                            }`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    priority={idx === 0}
                                    sizes="100vw"
                                    quality={90}
                                />
                            </div>

                            {/* Premium Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-10" />

                            {/* Content Section */}
                            {(img.title || img.subtitle) && (
                                <div className="absolute inset-0 flex flex-col justify-end p-12 z-10">
                                    <div className={`space-y-4 transition-all duration-1000 ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                                        <div className="flex items-center gap-3">
                                            {img.icon && (
                                                <div className="w-12 h-12 rounded-lg bg-lime-400/20 flex items-center justify-center border border-lime-400/40 backdrop-blur-sm">
                                                    {img.icon}
                                                </div>
                                            )}
                                            {img.title && (
                                                <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                                                    {img.title}
                                                </h3>
                                            )}
                                        </div>
                                        {img.subtitle && (
                                            <p className="text-lg md:text-xl text-white/90 drop-shadow-xl max-w-2xl leading-relaxed">
                                                {img.subtitle}
                                            </p>
                                        )}

                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}

                {/* Left Navigation Button */}
                <button
                    onClick={prev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 group"
                    aria-label="Previous slide"
                >
                    <div className="p-4 rounded-full bg-lime-400/10 border border-lime-400/40 backdrop-blur-sm group-hover:bg-lime-400/20 group-hover:border-lime-400/70 group-hover:shadow-2xl group-hover:shadow-lime-400/30 transition-all duration-300">
                        <ChevronLeft className="h-8 w-8 text-lime-300 group-hover:text-lime-200 transition-colors" />
                    </div>
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={next}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 group"
                    aria-label="Next slide"
                >
                    <div className="p-4 rounded-full bg-lime-400/10 border border-lime-400/40 backdrop-blur-sm group-hover:bg-lime-400/20 group-hover:border-lime-400/70 group-hover:shadow-2xl group-hover:shadow-lime-400/30 transition-all duration-300">
                        <ChevronRight className="h-8 w-8 text-lime-300 group-hover:text-lime-200 transition-colors" />
                    </div>
                </button>

                {/* Play/Pause Button */}
                <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="absolute top-6 right-6 z-20 p-3 rounded-full bg-lime-400/10 border border-lime-400/40 backdrop-blur-sm hover:bg-lime-400/20 hover:border-lime-400/70 transition-all duration-300"
                    aria-label="Toggle autoplay"
                >
                    {isAutoPlay ? (
                        <Pause className="h-5 w-5 text-lime-300" />
                    ) : (
                        <Play className="h-5 w-5 text-lime-300" />
                    )}
                </button>
            </div>

            {/* Enhanced Indicator Dots */}
            <div className="flex justify-center items-center gap-3">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setCurrent(idx)
                            setIsAutoPlay(false)
                        }}
                        className={`group relative transition-all duration-300 ${
                            idx === current ? "scale-125" : "scale-100"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
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

            {/* Slide Counter */}
            <div className="flex justify-center items-center gap-2 text-sm text-white/60">
                <span className="font-mono font-bold text-lime-400">{String(current + 1).padStart(2, "0")}</span>
                <span className="text-white/40">/</span>
                <span className="font-mono">{String(images.length).padStart(2, "0")}</span>
            </div>
        </div>
    )
}
