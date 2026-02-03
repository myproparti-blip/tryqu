"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, TrendingUp, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Enterprise Digital Transformation at Scale",
  subtitle: "Proven solutions for IT modernization, systems integration, cloud architecture, and business process optimization across Fortune 500 enterprises",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mb-12">
        <h2 className="mb-2 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {content.title}
        </h2>
        <p className="text-center text-base font-semibold text-lime-300/80">
          Reduce time-to-market while minimizing operational risk
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Enterprise Excellence Card - Hidden on mobile */}
         <Card className="hidden md:block liquid-glass border border-white/20">
           <CardHeader>
             <div className="flex items-start justify-between mb-2">
               <p className="text-[11px] tracking-widest text-white/80">IT MODERNIZATION</p>
               <TrendingUp className="h-5 w-5 text-lime-300 opacity-60" />
             </div>
             <CardTitle className="mt-1 text-xl text-white">Multi-cloud architecture with unified management and governance</CardTitle>
             <p className="text-sm text-lime-300/70 mt-2">Operational efficiency through unified control plane</p>
           </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-1.svg"
                  alt="Cloud computing infrastructure and server setup"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/intuitive-2.svg"
                  alt="Development team collaborating on code"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enterprise Transformation Card - Always visible */}
         <Card className="liquid-glass border border-white/20">
           <CardHeader>
             <div className="flex items-start justify-between mb-2">
               <p className="text-[11px] tracking-widest text-white/80">ENTERPRISE TRACK RECORD</p>
               <Shield className="h-5 w-5 text-lime-300 opacity-60" />
             </div>
             <CardTitle className="mt-1 text-xl text-white">
               4+ years delivering mission-critical solutions with 99.99% uptime, SOC 2 compliance, and zero-trust architecture.
             </CardTitle>
             <p className="text-sm text-lime-300/70 mt-2">Proven reliability at enterprise scale</p>
           </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={"/images/top-rated-1.svg"}
                width={280}
                height={160}
                alt="IT team in collaborative development environment"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src={"/images/top-rated-2.svg"}
                width={280}
                height={160}
                alt="Successful system deployment dashboard"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
