"use client"

import { useState, useEffect } from "react"

export interface WhatsAppConfig {
  country: string
  phone: string
  countryCode: string
}

export const LOCATION_WHATSAPP_MAP: Record<string, WhatsAppConfig> = {
  US: {
    country: "United States",
    phone: "15483332844",
    countryCode: "US",
  },
  CA: {
    country: "Canada",
    phone: "15483332844",
    countryCode: "CA",
  },
  GB: {
    country: "United Kingdom",
    phone: "447999960900",
    countryCode: "GB",
  },
  IN: {
    country: "India",
    phone: "9033452895",
    countryCode: "IN",
  },
  default: {
    country: "India",
    phone: "918238177000",
    countryCode: "IN",
  },
}

// Utility function to get cookie value
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const nameEQ = name + "="
  const cookies = document.cookie.split(";")
  for (let cookie of cookies) {
    cookie = cookie.trim()
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length)
    }
  }
  return null
}

export function useGeolocation() {
  const [whatsappConfig, setWhatsappConfig] = useState<WhatsAppConfig | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get country from Vercel Edge Middleware cookie
    const userCountry = getCookie("user-country")
    
    console.log("[HOOK] 🎣 useGeolocation initialized")
    console.log(`[HOOK] Reading cookie 'user-country'...`)
    
    let config = LOCATION_WHATSAPP_MAP.default
    
    if (userCountry) {
      // Use the detected country from middleware
      console.log(`[HOOK] ✅ Found country in cookie: ${userCountry}`)
      config = LOCATION_WHATSAPP_MAP[userCountry] || LOCATION_WHATSAPP_MAP.default
      console.log(`[HOOK] 📍 WhatsApp Config:`)
      console.log(`      Country: ${config.country}`)
      console.log(`      Number: ${config.phone}`)
      console.log(`      Code: ${config.countryCode}`)
    } else {
      // Fallback to default
      console.log(`[HOOK] ⚠️ Cookie not found, using default (India)`)
      console.log(`[HOOK] 📍 WhatsApp Config (Default):`)
      console.log(`      Country: ${LOCATION_WHATSAPP_MAP.default.country}`)
      console.log(`      Number: ${LOCATION_WHATSAPP_MAP.default.phone}`)
    }
    
    setWhatsappConfig(config)
    setLoading(false)
  }, [])

  return {
    whatsappConfig: whatsappConfig || LOCATION_WHATSAPP_MAP.default,
    loading,
    LOCATION_WHATSAPP_MAP,
  }
}
