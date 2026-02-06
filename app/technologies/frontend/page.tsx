'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function FrontendTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Frontend Technologies"
                groupSubtitle="Delivering fast, intuitive, and scalable digital experiences that engage users and drive business results"
                businessValue="User Interface & Experience"
                technologies={[
                    { name: "React", path: "/technologies/react" },
                    { name: "Angular", path: "/technologies/angular" },
                    { name: "Vue.js", path: "/technologies/vue" },
                    { name: "Next.js", path: "/technologies/nextjs" },
                    { name: "Nuxt.js", path: "/technologies/nuxtjs" },
                    { name: "TypeScript", path: "/technologies/typescript" },
                    { name: "Tailwind CSS", path: "/technologies/tailwind-css" },
                    { name: "Material UI", path: "/technologies/material-ui" },
                ]}
                keyBenefits={[
                    "Deliver responsive, high-performance user interfaces across all devices and platforms with modern frameworks and best practices.",
                    "Reduce development time and increase maintainability through component-driven architecture and reusable design systems.",
                    "Ensure excellent user experience with accessibility standards, performance optimization, and intuitive interactions.",
                    "Scale frontend applications seamlessly with modular design patterns and state management solutions.",
                    "Stay ahead with cutting-edge UI/UX technologies and continuous innovation in the frontend ecosystem.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
