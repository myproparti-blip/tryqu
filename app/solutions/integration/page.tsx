import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import IntegrationDetail from "@/components/services/pillars/integration-detail"

export const metadata: Metadata = {
  title: "Integration Solutions | Seamless Connectivity",
  description: "Connect with your existing systems seamlessly. 30+ API integrations available.",
}

export default function IntegrationPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <IntegrationDetail />
      <AppverseFooter />
    </main>
  )
}
