import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceSlider } from "@/components/services/service-slider"
import { ServicePillars } from "@/components/services/service-pillars"
import { ServiceGrid } from "@/components/services/service-grid"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { RelatedTechnologies } from "@/components/services/related-technologies"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import Script from "next/script"

export const metadata: Metadata = {
  title: "IT Development & Testing Services | TryQu Tech",
  description:
    "Full-stack development, quality assurance, testing, and DevOps services. Expert teams delivering scalable, reliable applications for enterprises.",
  openGraph: {
    title: "Development & Testing Services | TryQu Tech",
    description:
      "Comprehensive IT services: full-stack development, QA testing, CI/CD, DevOps, and performance optimization solutions.",
    url: "https://theskitbit.com/services",
  },
}

export const dynamic = "force-static"

export default function ServicesPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theskitbit.com/services",
    name: "TryQu Tech Services | Development, Testing & DevOps",
    description:
      "Full-stack development, quality assurance, testing, and DevOps services for enterprise applications",
    url: "https://theskitbit.com/services",
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "Europe",
      },
    ],
    sameAs: [
      "https://twitter.com/trqtech",
      "https://www.youtube.com/@trqtech",
      "https://instagram.com/trqtech",
    ],
  }

  const relatedTechnologies = [
    'React',
    'Node.js',
    'TypeScript',
    'Jest',
    'Cypress',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'REST APIs',
  ]

  return (
    <>
      <main className="min-h-screen text-white">
        <SiteHeader />
        <ServicesHero />
        <ServiceSlider />
        <ServicePillars />
        <ServiceGrid />
        <ServiceBenefits />
        <RelatedTechnologies 
          technologies={relatedTechnologies}
          title="Technology Stack We Master"
          description="Comprehensive expertise across the leading platforms and frameworks"
        />
        <CTAExpertSection />
        <AppverseFooter />
      </main>

      <Script
        id="services-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
    </>
  )
}
