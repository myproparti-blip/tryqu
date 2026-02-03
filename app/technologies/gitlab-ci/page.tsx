'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { GitBranch } from 'lucide-react';

export default function GitLabCiTechPage() {
    const techData = {
        name: 'GitLab CI',
        emoji: '🔄',
        icon: <GitBranch className="w-6 h-6" />,
        shortDescription:
            'Build powerful CI/CD pipelines with GitLab CI. Our experts deliver complete automation solutions for continuous integration, testing, and deployment.',
        heroTitle: 'Enterprise CI/CD with GitLab CI',
        heroSubtitle:
            'GitLab CI is a powerful continuous integration and deployment platform built into GitLab. Our experienced DevOps engineers design and implement comprehensive CI/CD pipelines, automating testing, building, and deployment processes. From simple workflows to complex multi-stage deployments, we deliver solutions that accelerate development velocity and ensure code quality.',
        heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        heroImageAlt: 'GitLab CI/CD Pipeline',
        services: [
            {
                title: 'Pipeline Design & Architecture',
                description:
                    'Design robust CI/CD pipelines following GitLab best practices and industry standards.',
                details:
                    'Multi-stage pipelines, job dependencies, parallel execution, and pipeline optimization.',
            },
            {
                title: 'Automated Testing Setup',
                description:
                    'Implement comprehensive automated testing in your CI pipeline.',
                details:
                    'Unit tests, integration tests, E2E tests, code coverage, and quality gates.',
            },
            {
                title: 'Build & Artifact Management',
                description:
                    'Automate build processes and manage artifacts efficiently.',
                details:
                    'Docker image building, artifact storage, container registry integration, versioning.',
            },
            {
                title: 'Deployment Automation',
                description:
                    'Automate deployment to various environments with zero-downtime strategies.',
                details:
                    'Staging, production deployment, Kubernetes integration, blue-green deployments.',
            },
            {
                title: 'Security & Code Quality',
                description:
                    'Implement security scanning and code quality checks in your pipeline.',
                details:
                    'SAST, DAST, dependency scanning, secret detection, SonarQube integration.',
            },
            {
                title: 'Monitoring & Observability',
                description:
                    'Set up comprehensive monitoring and alerting for pipeline health.',
                details:
                    'Pipeline metrics, failure notifications, performance tracking, incident alerts.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'GitLab Features',
                tools: [
                    'GitLab CI/CD',
                    'GitLab Runner',
                    'Container Registry',
                    'Package Registry',
                    'Artifact Repository',
                    'Auto DevOps',
                ],
            },
            {
                title: 'Testing Tools',
                tools: [
                    'Jest',
                    'Mocha',
                    'Cypress',
                    'Selenium',
                    'JUnit',
                    'RSpec',
                ],
            },
            {
                title: 'Security & Quality',
                tools: [
                    'SonarQube',
                    'Snyk',
                    'OWASP Dependency Check',
                    'Trivy',
                    'GitLab SAST',
                    'GitLab Secret Detection',
                ],
            },
            {
                title: 'Deployment Tools',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'Helm',
                    'Terraform',
                    'Ansible',
                    'GitOps',
                ],
            },
            {
                title: 'Cloud Providers',
                tools: [
                    'AWS',
                    'Google Cloud',
                    'Azure',
                    'DigitalOcean',
                    'Heroku',
                    'Custom Servers',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Prometheus',
                    'Grafana',
                    'DataDog',
                    'New Relic',
                    'ELK Stack',
                    'Sentry',
                ],
            },
            {
                title: 'Integration Tools',
                tools: [
                    'Slack',
                    'Jira',
                    'GitHub',
                    'Bitbucket',
                    'PagerDuty',
                    'Webhooks',
                ],
            },
            {
                title: 'Related Technologies',
                tools: [
                    'GitHub Actions',
                    'Jenkins',
                    'CircleCI',
                    'Travis CI',
                    'AWS CodePipeline',
                    'ArgoCD',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'GitLab CI Expertise',
                description:
                    'Experienced DevOps engineers with proven success implementing enterprise GitLab CI/CD pipelines.',
            },
            {
                title: 'End-to-End Automation',
                description:
                    'From code commit to production deployment, fully automated with proper safeguards.',
            },
            {
                title: 'Security Integrated',
                description:
                    'Security scanning, secret detection, and compliance checks built into every pipeline.',
            },
            {
                title: 'Scalable Infrastructure',
                description:
                    'Setup GitLab Runners on Kubernetes or cloud infrastructure for unlimited scalability.',
            },
            {
                title: 'Cost Optimization',
                description:
                    'Efficient pipeline configuration reduces build times and cloud infrastructure costs.',
            },
            {
                title: 'Nearshore Support',
                description:
                    'LATAM-based teams providing continuous support and optimization of your pipelines.',
            },
        ],
        keyFacts: [
            'GitLab CI/CD is built natively into GitLab, eliminating tool switching',
            'Supports unlimited pipeline stages and parallel jobs',
            'Container-based runners enable flexible, isolated build environments',
            'Built-in security scanning (SAST, DAST, dependency, container)',
            'Native Kubernetes integration with auto-deployments',
            'Artifact management with automatic cleanup and retention policies',
            'GitOps capabilities with infrastructure as code support',
            'Free tier available with generous CI/CD minutes',
        ],
        faqs: [
            {
                question: 'What is GitLab CI and how does it work?',
                answer:
                    'GitLab CI is a continuous integration service built into GitLab. It automatically runs scripts defined in .gitlab-ci.yml when code is pushed. Pipelines can test, build, and deploy code automatically with no external tool integration needed.',
            },
            {
                question: 'How is GitLab CI different from GitHub Actions?',
                answer:
                    'GitLab CI is natively integrated and more powerful for complex pipelines. GitHub Actions is simpler but newer. Both are cloud-hosted. Choose GitLab CI for enterprise needs, GitHub Actions for simplicity.',
            },
            {
                question: 'What are GitLab Runners?',
                answer:
                    'GitLab Runners are agents that execute jobs defined in your CI/CD pipeline. They can run on Linux, Windows, or macOS. Deploy on Kubernetes, cloud providers, or on-premises for complete control.',
            },
            {
                question: 'How do you manage secrets in GitLab CI?',
                answer:
                    'Use GitLab CI/CD variables (protected and masked) for secrets. Enable secret detection in pipelines to prevent accidental commits. Integrate with HashiCorp Vault for advanced secret management.',
            },
            {
                question: 'Can GitLab CI deploy to Kubernetes?',
                answer:
                    'Yes. GitLab has native Kubernetes integration. Deploy via kubectl, Helm, or use auto-deploy features. Kubernetes agents enable bi-directional integration with automatic deployments.',
            },
            {
                question: 'How do you optimize GitLab CI pipeline performance?',
                answer:
                    'Use parallel execution, cache dependencies, only run necessary jobs, optimize Docker images, use fast runners. Merge pipelines, schedule pipelines, and use DAG for dependency optimization.',
            },
            {
                question: 'What\'s the cost of GitLab CI/CD?',
                answer:
                    'GitLab includes free CI/CD minutes. Pricing based on compute minutes used. Self-hosted GitLab is free. SaaS plans include increasing CI minutes. Cost-effective compared to other platforms.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise Multi-Stage Pipeline',
                description:
                    'Implemented GitLab CI pipeline for enterprise application with automated testing, security scanning, and multi-environment deployment.',
                link: '#',
            },
            {
                title: 'Microservices Deployment Automation',
                description:
                    'Built automated CI/CD for 50+ microservices with parallel testing, container building, and Kubernetes deployment.',
                link: '#',
            },
            {
                title: 'Zero-Downtime Deployment System',
                description:
                    'Designed GitLab CI pipeline implementing blue-green deployments with automatic rollback and health checks.',
                link: '#',
            },
        ],
        relatedTechs: [
            'GitHub Actions',
            'Jenkins',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Node.js',
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
