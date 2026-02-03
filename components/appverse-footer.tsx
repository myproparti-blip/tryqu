"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"
import { useGeolocation } from "@/hooks/useGeolocation"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Experience Try Qu solutions like never before. We build scalable, secure systems for modern businesses.",
  copyright: "© 2025 — TryQu Tech International",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)
  const { whatsappConfig } = useGeolocation()

  const handleChatClick = () => {
    console.log("[FOOTER] 💬 'Chat With Us' button clicked")
    console.log(`[FOOTER] Opening WhatsApp for: ${whatsappConfig.country}`)
    console.log(`[FOOTER] WhatsApp Number: ${whatsappConfig.phone}`)
    console.log(`[FOOTER] Full URL: https://wa.me/${whatsappConfig.phone}`)
    window.open(`https://wa.me/${whatsappConfig.phone}`, "_blank")
  }

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">STREAMLINE YOUR OPERATIONS</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Monitor &amp; manage your IT infrastructure from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Monitor deployments, track system performance, and manage infrastructure from anywhere. Using our real-time collaboration &amp; monitoring tools
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="TryQu Tech app preview - monitoring made simple"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Monitoring Made Simple</div>
                      <p className="text-xs text-white/80">From alerts to resolution in a single dashboard</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Complete Visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Main footer content - Grid layout */}
          <div className="grid gap-16 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-16">
            {/* Brand Section - Spans 1 column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-lime-400/20 to-lime-400/5 border border-lime-400/30">
                    <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={24} height={24} className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent">TryQu Tech</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">{content.tagline}</p>
              </div>
              <div className="flex gap-3 pt-2">
                <div className="w-1 h-10 bg-gradient-to-b from-lime-400 via-lime-400/50 to-transparent rounded" />
                <div className="w-1 h-10 bg-gradient-to-b from-blue-400 via-blue-400/50 to-transparent rounded" />
              </div>
            </div>

            {/* Connect With Us Section */}
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-lime-300" />
                  Connect With Us
                </h5>
              </div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://twitter.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 group"
                    aria-label="Follow TryQu Tech on Twitter"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-lime-400/15 group-hover:border-lime-400/30 border border-neutral-700 transition-all duration-300">
                      <Twitter className="h-4 w-4" />
                    </div>
                    <span>X/Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 group"
                    aria-label="Subscribe to TryQu Tech on YouTube"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-lime-400/15 group-hover:border-lime-400/30 border border-neutral-700 transition-all duration-300">
                      <Youtube className="h-4 w-4" />
                    </div>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 group"
                    aria-label="Follow TryQu Tech on Instagram"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-lime-400/15 group-hover:border-lime-400/30 border border-neutral-700 transition-all duration-300">
                      <Instagram className="h-4 w-4" />
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://threads.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 group"
                    aria-label="Follow TryQu Tech on Threads"
                  >
                    <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-lime-400/15 group-hover:border-lime-400/30 border border-neutral-700 transition-all duration-300">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <span>Threads</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-lime-300" />
                  Services
                </h5>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-lime-400 transition-all duration-300" />
                    <span>Our Services</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-lime-300" />
                  About
                </h5>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-lime-400 transition-all duration-300" />
                    <span>About Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-lime-300" />
                  Legal
                </h5>
              </div>
              <ul className="space-y-3">
                 <li>
                   <Link href="/privacy-policy" className="text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 inline-flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-2 h-0.5 bg-lime-400 transition-all duration-300" />
                     <span>Privacy Policy</span>
                   </Link>
                 </li>
                 <li>
                   <Link href="/t&c" className="text-sm text-neutral-400 hover:text-lime-300 transition-all duration-300 inline-flex items-center gap-2 group">
                     <span className="w-0 group-hover:w-2 h-0.5 bg-lime-400 transition-all duration-300" />
                     <span>Terms & Conditions</span>
                   </Link>
                 </li>
               </ul>
            </div>
          </div>

          {/* Contact Section - Full width */}
          <div className="grid gap-8 md:gap-12 mb-16 py-12 border-y border-white/5">
            <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-lime-300" />
              Contact
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3 group">
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Email</p>
                <a 
                  href="mailto:tryqutech@gmail.com" 
                  className="text-sm text-neutral-300 hover:text-lime-300 transition-colors break-all font-medium group-hover:translate-x-1 duration-300"
                >
                  tryqutech@gmail.com
                </a>
              </div>
              <div className="space-y-3 group">
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">WhatsApp</p>
                <a 
                  href="https://wa.me/919033452895" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-300 hover:text-lime-300 transition-colors font-medium group-hover:translate-x-1 duration-300"
                >
                  +91 9033452895
                </a>
              </div>
              <div className="space-y-3 group">
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Address</p>
                <p className="text-sm text-neutral-400 font-medium">Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>{content.copyright}</p>
            <p>Built with modern technology for Try Qu solutions</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
