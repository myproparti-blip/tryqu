'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function BackendTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Backend Technologies"
                groupSubtitle="Powering secure, high-performance business logic and APIs that handle mission-critical operations at scale"
                businessValue="Business Logic & APIs"
                technologies={[
                    { name: "Node.js", path: "/technologies/nodejs" },
                    { name: "Python", path: "/technologies/python" },
                    { name: "Express.js", path: "/technologies/expressjs" },
                    { name: "NestJS", path: "/technologies/nestjs" },
                    { name: "Django", path: "/technologies/django" },
                    { name: "FastAPI", path: "/technologies/fastapi" },
                    { name: "GraphQL", path: "/technologies/graphql" },
                    { name: "REST APIs", path: "/technologies/rest-apis" },
                ]}
                keyBenefits={[
                    "Build robust APIs and business logic that reliably handle millions of transactions with enterprise-grade stability and uptime.",
                    "Accelerate time-to-market with proven frameworks and development patterns that reduce complexity and improve code quality.",
                    "Enable seamless integration with frontend applications and third-party systems through well-designed API architectures.",
                    "Scale horizontally with microservices patterns and distributed systems for unlimited growth capacity.",
                    "Maintain security and compliance through built-in authentication, authorization, and data protection mechanisms.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
