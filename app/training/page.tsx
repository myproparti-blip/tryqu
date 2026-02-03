'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { CTAExpertSection } from '@/components/cta-expert-section';
import { PremiumTrainingHero } from '@/components/about/premium-training-hero';
import { FeaturedCoursesCarousel } from '@/components/about/featured-courses-carousel';
import { PremiumTrainingCarouselSection } from '@/components/about/premium-training-carousel';
import { MobileAppDevSection } from '@/components/training/mobile-app-dev-section';
import { MobileSpecializations } from '@/components/training/mobile-specializations';
import { MobileToolsStack } from '@/components/training/mobile-tools-stack';
import { MobileProjects } from '@/components/training/mobile-projects';
import { MobileCareerPaths } from '@/components/training/mobile-career-paths';
import { RelatedTechnologies } from '@/components/services/related-technologies';

export default function TrainingPage() {
    const trainingTechnologies = [
        'React 19',
        'Next.js 15',
        'TypeScript 5.9',
        'Node.js',
        'Swift 5.9',
        'Kotlin 1.9',
        'Flutter',
        'React Native',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'AWS',
        'GraphQL',
        'Python',
        'Django',
        'Tailwind CSS 4',
        'Jest & Testing',
    ];

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Premium Training Hero */}
                <PremiumTrainingHero />

                {/* Featured Courses Horizontal Carousel */}
                <FeaturedCoursesCarousel />

                {/* Premium Training Courses Section with Image Carousel */}
                <PremiumTrainingCarouselSection />

                {/* Mobile App Development Section */}
                <MobileAppDevSection />

                {/* Mobile Specializations */}
                <MobileSpecializations />

                {/* Mobile Tools & Stack */}
                <MobileToolsStack />

                {/* Mobile Projects */}
                <MobileProjects />

                {/* Mobile Career Paths */}
                <MobileCareerPaths />

                {/* Related Technologies */}
                <RelatedTechnologies 
                    technologies={trainingTechnologies}
                    title="Technologies Covered in Our Training"
                    description="Master the most in-demand technologies with hands-on courses and expert instruction"
                />
            </main>
            <CTAExpertSection />
            <AppverseFooter />
        </>
    );
}
