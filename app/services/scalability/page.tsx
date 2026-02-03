import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import ScalabilityDetail from "@/components/services/pillars/scalability-detail"

export const metadata: Metadata = {
  title: "Scalability Services | Enterprise Growth Solutions",
  description: "Infrastructure that grows with your business. Support millions of users with 99.99% uptime SLA.",
}

export default function ScalabilityPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <ScalabilityDetail />
      <CTAExpertSection />
      <AppverseFooter />
    </main>
  )
}
