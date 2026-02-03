"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useGeolocation, LOCATION_WHATSAPP_MAP } from "@/hooks/useGeolocation"
import { ChevronDown } from "lucide-react"

interface HybridWhatsAppSelectorProps {
  buttonText?: string
  onOpenWhatsApp?: (country: string, phone: string) => void
  showCountrySelector?: boolean
}

export function HybridWhatsAppSelector({
  buttonText = "Chat With Us",
  onOpenWhatsApp,
  showCountrySelector = false,
}: HybridWhatsAppSelectorProps) {
  const { whatsappConfig } = useGeolocation()
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isAutoDetected, setIsAutoDetected] = useState(false)

  // Set initial country from IP detection
  useEffect(() => {
    if (whatsappConfig) {
      const countryCode = whatsappConfig.countryCode
      console.log("[HYBRID] 📍 Auto-detected country:", countryCode)
      setSelectedCountry(countryCode)
      setIsAutoDetected(countryCode !== "IN")
    }
  }, [whatsappConfig])

  const handleSelectCountry = (countryCode: string) => {
    console.log("[HYBRID] 🔀 Country manually selected:", countryCode)
    setSelectedCountry(countryCode)
    setShowDropdown(false)
    setIsAutoDetected(false)
  }

  const handleOpenWhatsApp = () => {
    if (!selectedCountry || !LOCATION_WHATSAPP_MAP[selectedCountry]) {
      console.warn("[HYBRID] ⚠️ Invalid country selected")
      alert("Please select a valid country")
      return
    }

    const config = LOCATION_WHATSAPP_MAP[selectedCountry]
    console.log("[HYBRID] 💬 Opening WhatsApp")
    console.log(`[HYBRID] Country: ${config.country}`)
    console.log(`[HYBRID] Number: ${config.phone}`)
    console.log(`[HYBRID] Auto-detected: ${isAutoDetected}`)
    
    const whatsappUrl = `https://wa.me/${config.phone}`
    window.open(whatsappUrl, "_blank")

    if (onOpenWhatsApp) {
      onOpenWhatsApp(config.country, config.phone)
    }
  }

  const currentConfig = selectedCountry
    ? LOCATION_WHATSAPP_MAP[selectedCountry]
    : null

  const countries = Object.entries(LOCATION_WHATSAPP_MAP)
    .filter(([key]) => key !== "default")
    .map(([key, value]) => ({ code: key, ...value }))

  return (
    <div className="flex flex-col gap-4 max-w-md w-full">
      {/* Auto-detected Banner */}
      {isAutoDetected && currentConfig && (
        <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
          <p className="text-sm text-green-300">
            ✅ Auto-detected: <span className="font-semibold">{currentConfig.country}</span>
          </p>
          <p className="text-xs text-green-200 mt-1">
            Click below to connect directly, or select a different country
          </p>
        </div>
      )}

      {/* Country Selector */}
      {showCountrySelector && (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {isAutoDetected ? "Change Country (Optional)" : "Select Your Country"}
          </label>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white text-left flex items-center justify-between hover:border-purple-500 focus:outline-none transition-colors"
          >
            <span>
              {currentConfig
                ? `${currentConfig.country} (${currentConfig.phone})`
                : "Select a country..."}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleSelectCountry(country.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-800 border-b border-gray-800 last:border-b-0 transition-colors ${
                    selectedCountry === country.code
                      ? "bg-purple-900/50 text-purple-300"
                      : "text-gray-300"
                  }`}
                >
                  <div className="font-medium">{country.country}</div>
                  <div className="text-xs text-gray-400">+{country.phone}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CTA Button */}
      <Button
        onClick={handleOpenWhatsApp}
        disabled={!selectedCountry}
        className="w-full bg-lime-400 text-black font-semibold rounded-lg px-6 py-3 hover:bg-lime-300 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all"
      >
        {buttonText}
      </Button>

      {/* Optional: Show all countries if no selector */}
      {!showCountrySelector && (
        <button
          onClick={() => console.log("[HYBRID] Toggle country selector")}
          className="text-xs text-gray-400 hover:text-gray-300 transition-colors text-center py-2"
        >
          Choose a different country?
        </button>
      )}
    </div>
  )
}
