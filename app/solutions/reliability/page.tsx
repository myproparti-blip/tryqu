import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import ReliabilityDetail from "@/components/services/pillars/reliability-detail"

export const metadata: Metadata = {
  title: "Reliability Solutions | Always Available",
  description: "Enterprise-grade reliability & uptime guaranteed. 99.95%+ SLA with automatic failover.",
}

export default function ReliabilityPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <ReliabilityDetail />
      <AppverseFooter />
    </main>
  )
}
