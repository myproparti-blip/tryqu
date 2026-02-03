import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import IntegrationDetail from "@/components/services/pillars/integration-detail"

export const metadata: Metadata = {
  title: "Integration Ready Services | Seamless Connectivity",
  description: "Connect with 30+ APIs and third-party platforms. Real-time data sync with 99.9% uptime.",
}

export default function IntegrationPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <IntegrationDetail />
      <CTAExpertSection />
      <AppverseFooter />
    </main>
  )
}
