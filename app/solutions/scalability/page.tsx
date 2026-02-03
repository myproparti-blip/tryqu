import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import ScalabilityDetail from "@/components/services/pillars/scalability-detail"

export const metadata: Metadata = {
  title: "Scalability Solutions | Enterprise Growth",
  description: "Handle millions of transactions seamlessly with enterprise-grade infrastructure that grows with your business.",
}

export default function ScalabilityPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <ScalabilityDetail />
      <AppverseFooter />
    </main>
  )
}
