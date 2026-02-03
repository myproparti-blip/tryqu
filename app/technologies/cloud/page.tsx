'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function CloudTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Cloud & Infrastructure"
                groupSubtitle="Leveraging scalable, secure cloud platforms to enable global reach, disaster recovery, and enterprise-grade reliability"
                businessValue="Scalable & Secure Cloud Platforms"
                technologies={[
                    { name: "AWS", path: "/technologies/aws" },
                    { name: "Firebase", path: "/technologies/firebase" },
                    { name: "Google Cloud", path: "/technologies/google-cloud" },
                    { name: "Azure", path: "/technologies/azure" },
                    { name: "Kubernetes", path: "/technologies/kubernetes" },
                    { name: "Docker", path: "/technologies/docker" },
                    { name: "Terraform", path: "/technologies/terraform" },
                    { name: "Microservices", path: "/technologies/microservices" },
                ]}
                keyBenefits={[
                    "Reduce infrastructure costs with cloud-native architectures that optimize resource utilization and eliminate on-premise overhead.",
                    "Achieve global scalability with multi-region deployments and auto-scaling capabilities that grow with demand.",
                    "Enhance reliability and disaster recovery with cloud redundancy, backup systems, and zero-downtime deployments.",
                    "Accelerate innovation with managed services that handle infrastructure complexity, allowing teams to focus on business logic.",
                    "Maintain enterprise security with built-in compliance frameworks, encryption, and monitoring across all cloud services.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
