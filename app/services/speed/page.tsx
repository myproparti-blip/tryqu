import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import SpeedDetail from "@/components/services/pillars/speed-detail"

export const metadata: Metadata = {
  title: "Speed & Performance Services | Ultra-Fast Delivery",
  description: "Blazing-fast applications optimized for every millisecond. Sub-50ms latency with 95+ Lighthouse scores.",
}

export default function SpeedPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <SpeedDetail />
      <CTAExpertSection />
      <AppverseFooter />
    </main>
  )
}
