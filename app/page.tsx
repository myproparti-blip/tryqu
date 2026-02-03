import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import { TechStackShowcase } from "@/components/tech-stack-showcase"
import { CTAExpertSection } from "@/components/cta-expert-section"
import { TeamShowcase } from "@/components/team-showcase"
import { PremiumFeaturesGrid } from "@/components/premium-features-grid"
import { HomeTechnologies } from "@/components/home-technologies"
import Script from "next/script"
import { Server, Database, Brain, BarChart3 } from "lucide-react"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
    // Structured data for main page
    const pageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://theskitbit.com/",
        name: "TryQu Tech | Try Qu Solutions Made Simple, Secure & Scalable",
        description:
            "From cloud infrastructure to comprehensive TryQu Tech, TryQu Tech delivers Try Qu solutions that are reliable, innovative, and built to transform your business.",
        url: "https://theskitbit.com/",
        mainEntity: {
            "@type": "Organization",
            name: "TryQu Tech",
            url: "https://theskitbit.com",
            sameAs: [
                "https://twitter.com/trqtech",
                "https://www.youtube.com/@trqtech",
                "https://instagram.com/trqtech",
                "https://threads.com/trqtech",
            ],
        },
    }

    const techStackItems = [
        {
            src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Enterprise cloud infrastructure",
            title: "Cloud Infrastructure",
            subtitle: "Enterprise Solutions",
            description: "Secure, scalable, and resilient cloud solutions built for enterprise-scale operations. We provide multi-cloud strategies with 99.99% uptime SLA, advanced disaster recovery, and automated scaling capabilities.",
            icon: <Server className="h-6 w-6 text-lime-300" />,
            features: [
                "24/7 NOC monitoring and support",
                "Multi-region failover capabilities",
                "Automated backup and recovery",
                "Compliance with SOC 2, ISO 27001, HIPAA",
                "Cost optimization through resource management",
            ]
        },
        {
            src: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Data centers and infrastructure",
            title: "Data Centers",
            subtitle: "Mission-Critical Infrastructure",
            description: "Enterprise-grade data center infrastructure designed for mission-critical workloads. Our state-of-the-art facilities provide redundant power, cooling systems, and network connectivity with zero-downtime deployment.",
            icon: <Database className="h-6 w-6 text-lime-300" />,
            features: [
                "Tier IV+ certified data centers",
                "Redundant power systems (N+2)",
                "Advanced cooling technologies",
                "Physical security & biometric access",
                "Real-time monitoring & alerting",
            ]
        },
        {
            src: "https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Advanced analytics dashboard",
            title: "Data & Analytics",
            subtitle: "Business Intelligence",
            description: "Transform raw data into actionable insights with our advanced analytics platform. Real-time dashboards, predictive analytics, and machine learning models to drive data-driven decision making.",
            icon: <BarChart3 className="h-6 w-6 text-lime-300" />,
            features: [
                "Real-time data processing",
                "Predictive analytics & ML models",
                "Custom dashboard development",
                "Data visualization & reporting",
                "Advanced security & encryption",
            ]
        },
        {
            src: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "TryQu Tech platform",
            title: "TryQu Tech",
            subtitle: "Transformation Platform",
            description: "Our comprehensive platform streamlines digital transformation initiatives. Combine cloud infrastructure, data analytics, and automation tools in one integrated ecosystem for accelerated business outcomes.",
            icon: <Brain className="h-6 w-6 text-lime-300" />,
            features: [
                "End-to-end automation framework",
                "AI-powered optimization",
                "Unified API & integration hub",
                "No-code/Low-code workflows",
                "Enterprise-grade security",
            ]
        },
    ]

    return (
        <>
            <main className="min-h-[100dvh] text-white">
                <SiteHeader />
                <Hero />

                {/* Team Showcase */}
                <TeamShowcase />

                {/* Premium Features Grid - Shows all features on home page */}
                <PremiumFeaturesGrid />

                {/* Technology Stack Section */}
                <section className="container mx-auto px-4 py-20">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2">
                            Technology Stack
                        </h2>
                        <p className="text-base font-semibold text-lime-300/80 mb-4">Mission-critical infrastructure that drives measurable business outcomes</p>
                        <p className="text-lg text-white/70 max-w-3xl">
                            Discover our comprehensive portfolio of cloud infrastructure, TryQu Tech, and advanced analytics. From mission-critical data centers to business intelligence platforms, we deliver enterprise-grade technology that powers transformation at scale.
                        </p>
                    </div>
                    <TechStackShowcase items={techStackItems} />
                    {/* CTA Section */}
                    <div className="mt-16 flex flex-col items-center gap-4">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
                        <p className="text-white/70 text-center max-w-xl">
                            Ready to modernize your infrastructure?
                        </p>
                    </div>
                </section>

                {/* Home Technologies */}
                <HomeTechnologies />

                <LogoMarquee />

                {/* CTA Expert Section */}
                <CTAExpertSection />

                <AppverseFooter />
            </main>

            <Script
                id="page-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(pageStructuredData),
                }}
            />
        </>
    )
}
