import { Metadata } from "next"
import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { CTAExpertSection } from '@/components/cta-expert-section';
import { EnhancedHeroSection } from '@/components/about/enhanced-hero-section';
import { EnhancedMissionSection } from '@/components/about/enhanced-mission-section';
import { StorySection } from '@/components/about/story-section';
import { TechnologiesPanel } from '@/components/about/technologies-panel';
import { EnhancedImageCarousel } from '@/components/about/enhanced-image-carousel';
import { EnhancedLeadershipSection } from '@/components/about/enhanced-leadership-section';
import { TeamShowcase } from '@/components/team-showcase';
import Script from "next/script"

export const metadata: Metadata = {
  title: "About TryQu Tech | Expert Development & Testing Services",
  description:
    "Learn about TryQu Tech - a leading provider of full-stack development, quality assurance, and DevOps services. Meet our expert team dedicated to delivering scalable solutions.",
  openGraph: {
    title: "About Us | TryQu Tech",
    description:
      "Discover our mission, values, and the expert team behind TryQu Tech's innovative development and testing solutions.",
    url: "https://theskitbit.com/about",
  },
}

export const dynamic = "force-static"

export default function AboutPage() {
    const aboutStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://theskitbit.com/about",
      name: "TryQu Tech",
      description:
        "Expert provider of full-stack development, quality assurance, testing, and DevOps services for enterprise applications",
      url: "https://theskitbit.com",
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

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen text-white overflow-x-hidden">
                {/* Enhanced Hero Section */}
                <EnhancedHeroSection />

                {/* Enhanced Image Carousel */}
                <EnhancedImageCarousel />

                {/* Enhanced Mission Section */}
                <EnhancedMissionSection />

                {/* Story Section */}
                <StorySection />

                {/* Technologies Panel */}
                <div id="technologies">
                  <TechnologiesPanel />
                </div>

                {/* Enhanced Leadership Section */}
                <TeamShowcase />
            </main>
            <CTAExpertSection />
            <AppverseFooter />

            <Script
              id="about-structured-data"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(aboutStructuredData),
              }}
            />
        </>
    );
}
