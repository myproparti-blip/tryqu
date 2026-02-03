'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function DevOpsTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="DevOps & Automation"
                groupSubtitle="Streamlining deployment pipelines and infrastructure automation to enable continuous delivery and operational excellence"
                businessValue="Automation, Deployment & Scalability"
                technologies={[
                    { name: "Docker", path: "/technologies/docker" },
                    { name: "Kubernetes", path: "/technologies/kubernetes" },
                    { name: "Jenkins", path: "/technologies/jenkins" },
                    { name: "GitHub Actions", path: "/technologies/github-actions" },
                    { name: "GitLab CI", path: "/technologies/gitlab-ci" },
                    { name: "Terraform", path: "/technologies/terraform" },
                    { name: "Microservices", path: "/technologies/microservices" },
                    { name: "Cloud Infrastructure", path: "/technologies/aws" },
                ]}
                keyBenefits={[
                    "Reduce deployment time from months to minutes with fully automated CI/CD pipelines and infrastructure-as-code practices.",
                    "Improve system reliability with continuous monitoring, automated rollbacks, and zero-downtime deployments.",
                    "Decrease operational overhead by automating repetitive tasks, reducing human error and freeing teams for strategic work.",
                    "Enable faster feedback loops and iterative development with automated testing and immediate deployment validation.",
                    "Achieve consistent environments across development, staging, and production for reliable, predictable releases.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
