"use client"

import { useState, useEffect } from "react"

export interface WhatsAppConfig {
  country: string
  phone: string
  countryCode: string
  displayPhone: string
}

export const LOCATION_WHATSAPP_MAP: Record<string, WhatsAppConfig> = {
  US: {
    country: "United States",
    phone: "15512608302",
    countryCode: "US",
    displayPhone: "+1 (551) 260-8302",
  },
  CA: {
    country: "Canada",
    phone: "14313063070",
    countryCode: "CA",
    displayPhone: "+1 (431) 306-3070",
  },
  GB: {
    country: "United Kingdom",
    phone: "447999960900",
    countryCode: "GB",
    displayPhone: "+44 7999 960900",
  },
  DE: {
    country: "Germany",
    phone: "49157582282855",
    countryCode: "DE",
    displayPhone: "+49 1575 8228-2855",
  },
  IN: {
    country: "India",
    phone: "918238177000",
    countryCode: "IN",
    displayPhone: "+91 82381-77000",
  },
  AU: {
    country: "Australia",
    phone: "61XXXXXXXXX",
    countryCode: "AU",
    displayPhone: "+61 X XXXX XXXX",
  },
  MX: {
    country: "Mexico",
    phone: "52XXXXXXXXX",
    countryCode: "MX",
    displayPhone: "+52 XXXX-XXXX",
  },
  default: {
    country: "India",
    phone: "918238177000",
    countryCode: "IN",
    displayPhone: "+91 82381-77000",
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
    
    if (userCountry && LOCATION_WHATSAPP_MAP[userCountry]) {
      // Use the detected country from middleware
      console.log(`[HOOK] ✅ Found country in cookie: ${userCountry}`)
      config = LOCATION_WHATSAPP_MAP[userCountry]
      console.log(`[HOOK] 📍 Region-Specific WhatsApp Config:`)
      console.log(`      Country: ${config.country}`)
      console.log(`      Display: ${config.displayPhone}`)
      console.log(`      Code: ${config.countryCode}`)
    } else {
      // Fallback to default if country not found or not in mapping
      console.log(`[HOOK] ⚠️ Country '${userCountry}' not mapped or cookie not found, using default (India)`)
      console.log(`[HOOK] 📍 WhatsApp Config (Default):`)
      console.log(`      Country: ${LOCATION_WHATSAPP_MAP.default.country}`)
      console.log(`      Display: ${LOCATION_WHATSAPP_MAP.default.displayPhone}`)
      console.log(`      Code: ${LOCATION_WHATSAPP_MAP.default.countryCode}`)
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
