'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { GitBranch } from 'lucide-react';

export default function JenkinsTechPage() {
    const techData = {
        name: 'Jenkins',
        emoji: '🔄',
        icon: <GitBranch className="w-6 h-6" />,
        shortDescription:
            'Enterprise CI/CD automation with Jenkins. Our experts build scalable, automated deployment pipelines with nearshore expertise.',
        heroTitle: 'Enterprise CI/CD Automation with Jenkins',
        heroSubtitle:
            'Jenkins is the industry-leading open-source automation server enabling continuous integration and continuous deployment. Our expert team leverages Jenkins to build robust, scalable CI/CD pipelines that automate testing, building, and deploying applications. From startups to Fortune 500 companies, we deliver production-grade Jenkins solutions.',
        heroImage: '/images/tech-jenkins-rich.svg',
        heroImageAlt: 'Jenkins - Continuous Integration/Deployment',
        services: [
            {
                title: 'CI/CD Pipeline Development',
                description:
                    'Build comprehensive CI/CD pipelines automating build, test, and deployment workflows.',
                details:
                    'Pipeline as Code (Jenkinsfile), declarative and scripted pipelines, and workflow automation.',
            },
            {
                title: 'Jenkins Infrastructure Setup',
                description:
                    'Design and deploy scalable Jenkins infrastructure with master-agent architecture.',
                details:
                    'High-availability setup, distributed builds, containerized Jenkins, and cloud scaling.',
            },
            {
                title: 'Plugin Development & Integration',
                description:
                    'Integrate Jenkins with development tools, repositories, and deployment platforms.',
                details:
                    'GitHub/GitLab integration, Docker, Kubernetes, AWS, artifact repositories, and notifications.',
            },
            {
                title: 'Security & Access Control',
                description:
                    'Implement Jenkins security with authentication, authorization, and secret management.',
                details:
                    'LDAP/AD integration, role-based access, Vault integration, and audit logging.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Jenkins performance with caching, parallel execution, and resource management.',
                details:
                    'Build acceleration, distributed builds, agent optimization, and pipeline tuning.',
            },
            {
                title: 'Monitoring & Observability',
                description:
                    'Implement comprehensive monitoring, logging, and alerting for Jenkins infrastructure.',
                details:
                    'Prometheus metrics, ELK stack integration, alerts, and health monitoring.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Jenkins',
                tools: [
                    'Jenkins Server',
                    'Jenkins Pipeline',
                    'Jenkinsfile',
                    'Agents/Slaves',
                    'Shared Libraries',
                    'Controller',
                ],
            },
            {
                title: 'Source Control',
                tools: [
                    'GitHub',
                    'GitLab',
                    'Bitbucket',
                    'Git',
                    'SVN',
                    'Mercurial',
                ],
            },
            {
                title: 'Build & Testing',
                tools: [
                    'Maven',
                    'Gradle',
                    'npm',
                    'Docker',
                    'SonarQube',
                    'JUnit',
                ],
            },
            {
                title: 'Deployment',
                tools: [
                    'Kubernetes',
                    'Docker',
                    'AWS CodeDeploy',
                    'Terraform',
                    'Ansible',
                    'ArgoCD',
                ],
            },
            {
                title: 'Artifact Management',
                tools: [
                    'Nexus Repository',
                    'Artifactory',
                    'Docker Registry',
                    'S3',
                    'npm Registry',
                    'Maven Central',
                ],
            },
            {
                title: 'Monitoring & Analytics',
                tools: [
                    'Prometheus',
                    'Grafana',
                    'ELK Stack',
                    'CloudWatch',
                    'Datadog',
                    'New Relic',
                ],
            },
            {
                title: 'Security & Compliance',
                tools: [
                    'HashiCorp Vault',
                    'LDAP/Active Directory',
                    'OAuth/SAML',
                    'OWASP Dependency-Check',
                    'Trivy',
                    'Falco',
                ],
            },
            {
                title: 'Infrastructure',
                tools: [
                    'Jenkins on Cloud',
                    'Docker Containers',
                    'Kubernetes',
                    'AWS/Azure/GCP',
                    'On-Premises',
                    'Hybrid Setup',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Industry Standard',
                description:
                    'Jenkins is the most popular open-source automation server with proven reliability in Fortune 500 companies.',
            },
            {
                title: 'Extensible Architecture',
                description:
                    'Thousands of plugins extend Jenkins capabilities for any tool, platform, or workflow.',
            },
            {
                title: 'Pipeline as Code',
                description:
                    'Define CI/CD pipelines in version-controlled code (Jenkinsfile) for consistency and auditability.',
            },
            {
                title: 'Distributed Builds',
                description:
                    'Scale CI/CD with distributed agent architecture enabling parallel builds and faster feedback.',
            },
            {
                title: 'Open Source',
                description:
                    'Free, open-source with active community, regular updates, and commercial support options.',
            },
            {
                title: 'Nearshore Expertise',
                description:
                    'LATAM-based teams with deep Jenkins expertise and timezone overlap for seamless collaboration.',
            },
        ],
        keyFacts: [
            'Jenkins powers CI/CD for 400,000+ organizations worldwide',
            'Over 1,800 plugins available extending Jenkins functionality',
            'Pipeline as Code enables version-controlled, reproducible builds',
            'Distributed architecture scales from small to enterprise deployments',
            'Free, open-source with active community and commercial support',
            'Master-agent architecture enables parallel builds and resource optimization',
            'Blue Ocean provides modern UI for pipeline visualization and management',
            'Webhook integration enables event-driven automation and webhooks',
        ],
        faqs: [
            {
                question: 'What is Jenkins and what does it do?',
                answer:
                    'Jenkins is an open-source automation server for continuous integration and deployment. It automates parts of software development like building, testing, and deploying, enabling rapid feedback and faster releases.',
            },
            {
                question: 'What is the difference between Jenkins Declarative and Scripted pipelines?',
                answer:
                    'Declarative pipelines offer simpler syntax with predefined structure. Scripted pipelines provide more flexibility using Groovy code. Start with declarative; use scripted for complex workflows.',
            },
            {
                question: 'How do I integrate Jenkins with GitHub?',
                answer:
                    'Use GitHub webhook to trigger Jenkins builds on code push. The GitHub plugin integrates Jenkins with GitHub for pull request builds, status checks, and automatic deployments.',
            },
            {
                question: 'What is a Jenkins agent/slave?',
                answer:
                    'Jenkins agents are machines that execute build jobs triggered by the controller. Master-agent architecture enables distributed builds, parallel execution, and resource optimization.',
            },
            {
                question: 'How do I manage secrets in Jenkins?',
                answer:
                    'Use Jenkins Credentials plugin to store secrets securely. Integrate with HashiCorp Vault, AWS Secrets Manager, or use Jenkins built-in credential storage with encryption.',
            },
            {
                question: 'Can Jenkins run in containers?',
                answer:
                    'Yes! Jenkins runs in Docker containers and Kubernetes. Containerized Jenkins enables easy scaling, version management, and cloud deployment.',
            },
            {
                question: 'What plugins do I need for basic CI/CD?',
                answer:
                    'Start with Git, GitHub/GitLab, Docker, pipeline, and notification plugins. Add SonarQube for code quality, JUnit for testing, and deployment plugins based on your infrastructure.',
            },
        ],
        caseStudies: [
            {
                title: 'Microservices CI/CD Pipeline',
                description:
                    'Built Jenkins pipeline automating build, test, and deployment for 30+ microservices with parallel execution.',
                link: '#',
            },
            {
                title: 'Infrastructure as Code Automation',
                description:
                    'Implemented Jenkins pipelines for Terraform and Ansible automation, reducing infrastructure deployment time by 80%.',
                link: '#',
            },
            {
                title: 'Multi-Environment Deployments',
                description:
                    'Created Jenkins infrastructure supporting dev, staging, and production deployments with approval gates and monitoring.',
                link: '#',
            },
        ],
        relatedTechs: [
            'GitLab CI',
            'GitHub Actions',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Ansible',
            'Prometheus',
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
