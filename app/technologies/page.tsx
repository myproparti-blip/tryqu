'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { CTAExpertSection } from '@/components/cta-expert-section';
import { EnhancedTechnologiesPage } from '@/components/about/enhanced-technologies-page';
import { BusinessTransformHero } from '@/components/technologies/business-transform-hero';
import { TechPageHeader } from '@/components/technologies/tech-page-header';

export default function TechnologiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen text-white overflow-x-hidden">
        <TechPageHeader 
          title="Enterprise IT Solutions That Scale Your Business"
          subtitle="Accelerate time-to-market while reducing operational complexity"
          description="We help startups and enterprises streamline infrastructure, cloud, and DevOps to reduce costs and increase performance."
        />
        <EnhancedTechnologiesPage />
        <BusinessTransformHero />
      </main>
      <AppverseFooter />
    </>
  );
}
