"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useGeolocation, LOCATION_WHATSAPP_MAP } from "@/hooks/useGeolocation"
import { X } from "lucide-react"

interface ChatWithUsModalProps {
  isOpen: boolean
  onClose: () => void
}

// Detect country from phone number
function detectCountryFromPhone(phoneNumber: string): string | null {
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, "")

  // Detect by country code prefix
  if (cleanPhone.startsWith("+1") || cleanPhone.startsWith("1")) return "US"
  if (cleanPhone.startsWith("+44") || cleanPhone.startsWith("44")) return "GB"
  if (cleanPhone.startsWith("+91") || cleanPhone.startsWith("91")) return "IN"
  if (cleanPhone.startsWith("+1") || cleanPhone.startsWith("1")) return "CA"

  return null
}

export function ChatWithUsModal({ isOpen, onClose }: ChatWithUsModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null)
  const [error, setError] = useState("")

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value
    setPhoneNumber(phone)
    setError("")

    if (phone.trim()) {
      const country = detectCountryFromPhone(phone)
      if (country) {
        setDetectedCountry(country)
      } else {
        setDetectedCountry(null)
      }
    } else {
      setDetectedCountry(null)
    }
  }

  const handleConnect = () => {
    if (!phoneNumber.trim()) {
      setError("Please enter your phone number")
      return
    }

    if (!detectedCountry) {
      setError("Phone number format not recognized. Please check and try again.")
      return
    }

    const config = LOCATION_WHATSAPP_MAP[detectedCountry]
    if (!config) {
      setError("Country not supported yet")
      return
    }

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${config.phone}`
    window.open(whatsappUrl, "_blank")

    // Reset and close
    setPhoneNumber("")
    setDetectedCountry(null)
    onClose()
  }

  const getCountryDisplay = () => {
    if (!detectedCountry) return null
    const config = LOCATION_WHATSAPP_MAP[detectedCountry]
    return config
  }

  if (!isOpen) return null

  const countryConfig = getCountryDisplay()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Chat With Us</h2>
          <p className="text-gray-400 text-sm">
            Enter your phone number and we'll connect you to our team
          </p>
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="e.g., +1-548-333-2844 or +91-90334-52895"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            autoFocus
          />
        </div>

        {/* Detection Result */}
        {phoneNumber && (
          <div className="mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700">
            {detectedCountry && countryConfig ? (
              <div>
                <p className="text-sm text-green-400 font-medium">
                  ✓ Detected: {countryConfig.country}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  WhatsApp: +{countryConfig.phone}
                </p>
              </div>
            ) : (
              <p className="text-sm text-yellow-400">
                ⚠ Country not detected. Please check your phone number format.
              </p>
            )}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-900/30 border border-red-700/50">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Supported Countries */}
        <div className="mb-6 p-3 rounded-lg bg-blue-900/20 border border-blue-700/30">
          <p className="text-xs font-medium text-blue-300 mb-2">Supported Countries:</p>
          <div className="space-y-1">
            <p className="text-xs text-blue-200">🇺🇸 USA: +1 (XXX) XXX-XXXX</p>
            <p className="text-xs text-blue-200">🇨🇦 Canada: +1 (XXX) XXX-XXXX</p>
            <p className="text-xs text-blue-200">🇬🇧 UK: +44 XXXX XXXXXX</p>
            <p className="text-xs text-blue-200">🇮🇳 India: +91 XXXXX XXXXX</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button
            onClick={handleConnect}
            disabled={!detectedCountry}
            className="flex-1 bg-lime-400 text-black font-semibold hover:bg-lime-300 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all"
          >
            Connect Now
          </Button>
        </div>
      </div>
    </div>
  )
}
