"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  icon: string
  gradient: string
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Enterprise Architecture Design",
    description: "Strategic technology roadmaps aligned with business objectives and operational needs",
    features: ["Solution design", "Reference architecture", "Technology stack selection", "Risk assessment"],
    icon: "🏗️",
    gradient: "from-pink-500 to-rose-500",
    image: "/images/intuitive-1.png",
  },
  {
    id: 2,
    title: "System Integration & Modernization",
    description: "Seamless integration of legacy and modern systems with minimal business disruption",
    features: ["API-first integration", "Legacy system bridging", "Data migration", "Middleware implementation"],
    icon: "🔗",
    gradient: "from-orange-500 to-red-500",
    image: "/images/intuitive-2.png",
  },
  {
    id: 3,
    title: "Cloud Infrastructure & DevOps",
    description: "Multi-cloud deployment with automated management, monitoring, and optimization",
    features: ["Infrastructure as Code", "CI/CD automation", "Container orchestration", "Cost optimization"],
    icon: "☁️",
    gradient: "from-indigo-500 to-blue-500",
    image: "/images/top-rated-1.png",
  },
  {
    id: 4,
    title: "Digital Transformation Strategy",
    description: "Comprehensive business process optimization and digital capability development",
    features: ["Process mapping", "Change management", "Organizational alignment", "Capability development"],
    icon: "📊",
    gradient: "from-violet-500 to-purple-500",
    image: "/images/top-rated-2.png",
  },
]

export function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % services.length)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const prev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const current = services[currentIndex]
  const nextIndex = (currentIndex + 1) % services.length
  const prevIndex = (currentIndex - 1 + services.length) % services.length

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-blue-950/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Enterprise Service Portfolio</h2>
          <p className="text-lg text-gray-400">Comprehensive solutions for IT modernization and digital transformation</p>
        </div>

        <div className="relative">
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
            {/* Slide Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 min-h-[500px]">
              {/* Left: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`text-5xl p-4 rounded-lg bg-gradient-to-br ${current.gradient} bg-clip-text text-transparent`}>
                    {current.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-bold bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>SERVICE #{currentIndex + 1}</p>
                    <h3 className="text-4xl font-bold text-white mt-1">{current.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">{current.description}</p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-cyan-400">KEY FEATURES</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`text-sm font-bold bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent mt-1`}>
                          ✓
                        </span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>


              </div>

              {/* Right: Image/Visual */}
              <div className="relative hidden lg:flex items-center justify-center overflow-hidden rounded-xl min-h-[500px]">
                <div className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-10 blur-3xl`} />
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <div className="relative w-96 h-96 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover rounded-lg shadow-2xl"
                      priority
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    {/* Fallback gradient if image fails */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-20 rounded-lg`} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots Indicator */}
            <div className="flex gap-2 flex-1 justify-center">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    setIsAutoPlay(false)
                    setTimeout(() => setIsAutoPlay(true), 3000)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 ml-8">
              <button
                onClick={prev}
                className="p-3 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-lg border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Mini Preview Strip */}
          <div className="flex gap-3 mt-8 overflow-x-auto pb-4 scroll-smooth">
            {[prevIndex, currentIndex, nextIndex].map((idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setIsAutoPlay(false)
                  setTimeout(() => setIsAutoPlay(true), 3000)
                }}
                className={`min-w-max px-4 py-3 rounded-lg border transition-all duration-300 ${
                  idx === currentIndex
                    ? "border-cyan-400 bg-cyan-400/20 text-white"
                    : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                <p className="text-sm font-semibold">{services[idx].title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
