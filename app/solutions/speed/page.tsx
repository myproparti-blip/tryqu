import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import SpeedDetail from "@/components/services/pillars/speed-detail"

export const metadata: Metadata = {
  title: "Speed Solutions | Go Live Faster",
  description: "Go live in days, not months. Blazing-fast delivery optimized for every millisecond.",
}

export default function SpeedPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <SpeedDetail />
      <AppverseFooter />
    </main>
  )
}
