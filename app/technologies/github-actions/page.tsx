'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code } from 'lucide-react';

export default function GitHubActionsTechPage() {
    const techData = {
        name: 'GitHub Actions',
        emoji: '⚡',
        icon: <Code className="w-6 h-6" />,
        shortDescription:
            'Automate your GitHub workflow with GitHub Actions. Our experts build fast, reliable CI/CD pipelines directly in GitHub.',
        heroTitle: 'Fast CI/CD with GitHub Actions',
        heroSubtitle:
            'GitHub Actions is a powerful automation platform built directly into GitHub. Our experienced engineers design and implement efficient CI/CD workflows, automating testing, building, and deployment processes. From simple actions to complex multi-job workflows, we deliver solutions that boost productivity and maintain code quality.',
        heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        heroImageAlt: 'GitHub Actions Workflow',
        services: [
            {
                title: 'Workflow Design & Setup',
                description:
                    'Design efficient GitHub Actions workflows following best practices.',
                details:
                    'Multi-job workflows, conditional execution, reusable workflows, matrix builds.',
            },
            {
                title: 'Automated Testing Pipeline',
                description:
                    'Implement comprehensive automated testing in GitHub Actions.',
                details:
                    'Unit tests, integration tests, E2E tests, code coverage reports, quality checks.',
            },
            {
                title: 'Custom Actions Development',
                description:
                    'Create reusable custom actions for your specific workflows.',
                details:
                    'JavaScript actions, Docker container actions, composite actions, action publishing.',
            },
            {
                title: 'Container Registry Integration',
                description:
                    'Automate Docker image building and deployment to registries.',
                details:
                    'GitHub Container Registry, Docker Hub, ECR, image tagging, artifact management.',
            },
            {
                title: 'Deployment Workflows',
                description:
                    'Automate deployments to various platforms and cloud providers.',
                details:
                    'AWS, Azure, Google Cloud, Vercel, Netlify, Kubernetes, custom servers.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement security checks and compliance scanning in workflows.',
                details:
                    'Dependency scanning, code scanning, secret scanning, SBOM generation.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'GitHub Features',
                tools: [
                    'GitHub Actions',
                    'GitHub Container Registry',
                    'GitHub Packages',
                    'GitHub Environments',
                    'GitHub Secrets',
                    'GitHub Runners',
                ],
            },
            {
                title: 'Testing Frameworks',
                tools: [
                    'Jest',
                    'Vitest',
                    'Cypress',
                    'Playwright',
                    'Mocha',
                    'RSpec',
                ],
            },
            {
                title: 'Code Quality Tools',
                tools: [
                    'CodeQL',
                    'SonarCloud',
                    'ESLint',
                    'Prettier',
                    'Codecov',
                    'Codacy',
                ],
            },
            {
                title: 'Deployment Targets',
                tools: [
                    'AWS',
                    'Azure',
                    'Google Cloud',
                    'Vercel',
                    'Netlify',
                    'Heroku',
                ],
            },
            {
                title: 'Container & Orchestration',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'Helm',
                    'Docker Compose',
                    'Skaffold',
                    'Buildpacks',
                ],
            },
            {
                title: 'Monitoring & Alerting',
                tools: [
                    'Slack',
                    'Discord',
                    'PagerDuty',
                    'DataDog',
                    'New Relic',
                    'Custom Webhooks',
                ],
            },
            {
                title: 'Infrastructure as Code',
                tools: [
                    'Terraform',
                    'CloudFormation',
                    'Pulumi',
                    'Ansible',
                    'Bicep',
                    'ARM Templates',
                ],
            },
            {
                title: 'Related Technologies',
                tools: [
                    'GitLab CI',
                    'Jenkins',
                    'CircleCI',
                    'Travis CI',
                    'ArgoCD',
                    'Flux',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'GitHub-Native Integration',
                description:
                    'No external tools needed. Workflows live in your repository with version control.',
            },
            {
                title: 'Fast Setup & Deployment',
                description:
                    'Get CI/CD running in minutes. Use pre-built actions from marketplace.',
            },
            {
                title: 'Cost Effective',
                description:
                    'Free minutes for public repos. Generous limits for private repos at reasonable costs.',
            },
            {
                title: 'Powerful Automation',
                description:
                    'Matrix builds, reusable workflows, conditional execution, and custom logic.',
            },
            {
                title: 'Extensive Marketplace',
                description:
                    'Thousands of pre-built actions available for common tasks and integrations.',
            },
            {
                title: 'Nearshore Expertise',
                description:
                    'LATAM-based engineers optimizing your workflows for speed and reliability.',
            },
        ],
        keyFacts: [
            'GitHub Actions runs directly on GitHub with no external service integration',
            'Free for public repositories with unlimited minutes',
            'Supports Linux, Windows, and macOS runners',
            'Can use self-hosted runners for custom requirements',
            'Matrix strategy enables testing across multiple versions',
            'Reusable workflows reduce duplication and improve maintainability',
            'Extensive marketplace with 10,000+ community actions',
            'Full audit logs and security analysis built-in',
        ],
        faqs: [
            {
                question: 'What is GitHub Actions?',
                answer:
                    'GitHub Actions is a CI/CD platform that automates software workflows. Define workflows in YAML files to automatically test, build, and deploy code when events occur in your repository.',
            },
            {
                question: 'How much does GitHub Actions cost?',
                answer:
                    'Free for public repos with unlimited minutes. Private repos get monthly free minutes (2,000 minutes for free tier). Additional minutes charged per plan. Self-hosted runners are free.',
            },
            {
                question: 'Can you use custom runners with GitHub Actions?',
                answer:
                    'Yes. Self-hosted runners enable running jobs on your own infrastructure. Perfect for security requirements, dependencies, or cost optimization.',
            },
            {
                question: 'What\'s the difference between GitHub Actions and GitLab CI?',
                answer:
                    'GitHub Actions is simpler and integrated with GitHub. GitLab CI is more powerful for complex enterprise pipelines. Both are cloud-hosted. Choose based on your repository platform.',
            },
            {
                question: 'Can GitHub Actions deploy to Kubernetes?',
                answer:
                    'Yes. Use kubectl commands directly or use the official Kubernetes action. Deploy to any Kubernetes cluster with proper authentication setup.',
            },
            {
                question: 'How do you manage secrets in GitHub Actions?',
                answer:
                    'Use GitHub Secrets (encrypted and masked in logs). Set at repository or organization level. Secrets cannot be accessed or printed, ensuring security.',
            },
            {
                question: 'Can you create custom GitHub Actions?',
                answer:
                    'Yes. Create JavaScript actions, Docker container actions, or composite actions. Publish to marketplace for team or community use.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Platform Testing Workflow',
                description:
                    'Built GitHub Actions workflow testing Node.js app across Linux, Windows, macOS with matrix strategy.',
                link: '#',
            },
            {
                title: 'Automated Deployment Pipeline',
                description:
                    'Implemented workflow for continuous deployment to AWS with automated testing, security scanning, and rollback capability.',
                link: '#',
            },
            {
                title: 'Custom Actions for Enterprise',
                description:
                    'Developed custom GitHub Actions for internal tools, reducing deployment time and standardizing workflows.',
                link: '#',
            },
        ],
        relatedTechs: [
            'GitLab CI',
            'Jenkins',
            'Docker',
            'Kubernetes',
            'Node.js',
            'AWS',
        ],
    };

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                                <TechDetailTemplate {...techData} />
                
            </main>
            <AppverseFooter />
        </>
    );
}
