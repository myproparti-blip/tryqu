'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function TestingTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Testing & QA"
                groupSubtitle="Ensuring software quality, stability, and reliability through comprehensive testing strategies and quality assurance practices"
                businessValue="Quality, Stability & Reliability"
                technologies={[
                    { name: "Jest", path: "/technologies/jest" },
                    { name: "Cypress", path: "/technologies/cypress" },
                    { name: "Selenium", path: "/technologies/selenium" },
                    { name: "Vitest", path: "/technologies/vitest" },
                    { name: "Playwright", path: "/technologies/playwright" },
                    { name: "Postman", path: "/technologies/postman" },
                    { name: "JUnit", path: "/technologies/junit" },
                    { name: "LoadTesting", path: "/technologies/load-testing" },
                ]}
                keyBenefits={[
                    "Catch bugs early with comprehensive unit, integration, and end-to-end testing that prevent production issues.",
                    "Accelerate release cycles with automated testing frameworks that validate quality continuously throughout development.",
                    "Reduce risk of critical failures with performance testing, security testing, and compliance validation.",
                    "Lower maintenance costs by identifying and fixing issues before they reach production systems.",
                    "Build confidence in code quality with measurable test coverage and detailed quality metrics.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
