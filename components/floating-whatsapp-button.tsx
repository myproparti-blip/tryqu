"use client"

import { MessageCircle } from "lucide-react"
import { useGeolocation } from "@/hooks/useGeolocation"
import { useEffect, useState } from "react"

export function FloatingWhatsAppButton() {
  const { whatsappConfig } = useGeolocation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay to ensure smooth page load
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    console.log("[FLOATING] 💬 WhatsApp button clicked")
    console.log(`[FLOATING] Opening WhatsApp for: ${whatsappConfig.country}`)
    console.log(`[FLOATING] Display Number: ${whatsappConfig.displayPhone}`)
    console.log(`[FLOATING] Full URL: https://wa.me/${whatsappConfig.phone}`)
    window.open(`https://wa.me/${whatsappConfig.phone}`, "_blank")
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      {/* Animated background ring */}
      <div className="absolute inset-0 rounded-full bg-lime-400/20 animate-pulse" />
      
      {/* Button container */}
      <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow-lg hover:shadow-2xl hover:shadow-lime-400/50 transition-all duration-300 hover:scale-110 hover:from-lime-300 hover:to-lime-400">
        {/* Icon */}
        <MessageCircle className="h-7 w-7 text-black group-hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black/90 backdrop-blur-md rounded-lg border border-lime-400/30 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
        <div className="absolute top-full right-2 w-2 h-2 bg-black/90 rotate-45 -mt-1" />
      </div>
    </button>
  )
}
