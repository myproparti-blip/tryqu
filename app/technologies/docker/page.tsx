'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function DockerTechPage() {
    const techData = {
        name: 'Docker',
        emoji: '🐳',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Master containerization with Docker. Our experts deliver consistent, scalable deployments across development and production.',
        heroTitle: 'Enterprise Docker & Container Solutions',
        heroSubtitle:
            'Docker revolutionizes application deployment by ensuring consistency across development, testing, and production environments. Our experienced team designs containerized architectures that scale reliably. From Dockerizing legacy applications to building cloud-native systems, we ensure your containers are optimized, secure, and production-ready.',
        heroImage: '/images/tech-docker-rich.svg',
        heroImageAlt: 'Docker - Container & Deployment Platform',
        services: [
            {
                title: 'Docker Image Creation & Optimization',
                description:
                    'Build efficient Docker images with minimal size and security vulnerabilities. Implement best practices for layer caching and image composition.',
                details:
                    'Multi-stage builds, layer optimization, security scanning, vulnerability patching, and image registry management.',
            },
            {
                title: 'Containerization of Existing Applications',
                description:
                    'Transform existing applications into Docker containers with minimal disruption. Support for various frameworks and architectures.',
                details:
                    'Legacy application containerization, dependency analysis, environment variable management, and smooth migration.',
            },
            {
                title: 'Docker Compose & Orchestration',
                description:
                    'Define and manage multi-container applications with Docker Compose for local development and Kubernetes for production.',
                details:
                    'Service composition, networking, volume management, and orchestration patterns for complex applications.',
            },
            {
                title: 'Container Security & Compliance',
                description:
                    'Implement security best practices including image scanning, access control, secret management, and compliance auditing.',
                details:
                    'Vulnerability scanning, least privilege principles, security policies, and regulatory compliance implementation.',
            },
            {
                title: 'CI/CD Pipeline Integration',
                description:
                    'Automate Docker image building, testing, and deployment through continuous integration and deployment pipelines.',
                details:
                    'GitHub Actions, GitLab CI, Jenkins integration, automated testing, and deployment orchestration.',
            },
            {
                title: 'Monitoring & Container Management',
                description:
                    'Monitor containerized applications with comprehensive logging, metrics collection, and health checks.',
                details:
                    'Container monitoring, log aggregation, performance metrics, health checks, and incident alerting.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Containerization',
                tools: [
                    'Docker',
                    'Docker Compose',
                    'Podman',
                    'Containerd',
                    'Buildah',
                    'Skopeo',
                ],
            },
            {
                title: 'Orchestration Platforms',
                tools: [
                    'Kubernetes',
                    'Docker Swarm',
                    'Amazon ECS',
                    'Google Cloud Run',
                    'Azure Container Instances',
                    'HashiCorp Nomad',
                ],
            },
            {
                title: 'Container Registries',
                tools: [
                    'Docker Hub',
                    'Amazon ECR',
                    'Google Container Registry',
                    'Azure Container Registry',
                    'GitLab Registry',
                    'Nexus',
                ],
            },
            {
                title: 'Security & Scanning',
                tools: [
                    'Trivy',
                    'Grype',
                    'Anchore',
                    'Snyk',
                    'Docker Scout',
                    'Aqua',
                ],
            },
            {
                title: 'CI/CD Integration',
                tools: [
                    'GitHub Actions',
                    'GitLab CI/CD',
                    'Jenkins',
                    'CircleCI',
                    'Travis CI',
                    'ArgoCD',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Prometheus',
                    'Grafana',
                    'ELK Stack',
                    'Datadog',
                    'New Relic',
                    'Splunk',
                ],
            },
            {
                title: 'Networking & Storage',
                tools: [
                    'Docker Network',
                    'Overlay Networks',
                    'Persistent Volumes',
                    'Storage Plugins',
                    'Calico',
                    'Flannel',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Docker Desktop',
                    'VS Code Remote',
                    'Visual Studio',
                    'Docker CLI',
                    'Docker API',
                    'Docker SDK',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Container Architecture Expertise',
                description:
                    'Our team designs containerized systems that are scalable, maintainable, and follow cloud-native best practices.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'We implement container security at every level, from image scanning to runtime protection and compliance management.',
            },
            {
                title: 'Production Excellence',
                description:
                    'All containerized applications are production-hardened with monitoring, logging, health checks, and disaster recovery.',
            },
            {
                title: 'Platform Agnostic',
                description:
                    'Docker expertise across all major cloud platforms: AWS, Google Cloud, Azure, and on-premises deployments.',
            },
            {
                title: 'Migration Expertise',
                description:
                    'Proven experience containerizing legacy applications and migrating workloads with minimal downtime.',
            },
            {
                title: 'Optimization Focus',
                description:
                    'We optimize container images for size, performance, and resource efficiency, reducing infrastructure costs.',
            },
        ],
        keyFacts: [
            '80%+ of cloud deployments use containerization as of 2024',
            'Docker reduces deployment time from hours to minutes',
            'Containers provide consistent "write once, run anywhere" deployment',
            'Docker eliminates "works on my machine" problems',
            'Industry standard adopted by all major cloud providers',
            'Dramatically reduces infrastructure costs through better resource utilization',
            'Enables rapid scaling and zero-downtime deployments',
            'Strong ecosystem with millions of pre-built images available',
        ],
        faqs: [
            {
                question: 'What is Docker and why should we use it?',
                answer:
                    'Docker is containerization technology that packages applications with all dependencies, ensuring consistency across environments. It eliminates deployment issues, enables rapid scaling, improves resource efficiency, and is industry standard for modern application deployment.',
            },
            {
                question: 'Can we containerize our existing application?',
                answer:
                    'Yes. We can containerize almost any application regardless of programming language or framework. We analyze dependencies, create appropriate Dockerfiles, set up environment management, and test thoroughly before deploying containerized versions.',
            },
            {
                question: 'How does Docker affect application performance?',
                answer:
                    'Docker has minimal performance overhead. Containers share the host OS kernel, making them lightweight compared to virtual machines. In many cases, containerized applications perform better due to improved resource isolation and scalability.',
            },
            {
                question: 'Is Docker secure?',
                answer:
                    'Docker is secure when implemented correctly. We follow security best practices including: minimal base images, regular vulnerability scanning, non-root user execution, secrets management, and network isolation. Proper configuration ensures production-grade security.',
            },
            {
                question: 'Do we need Kubernetes with Docker?',
                answer:
                    'Not necessarily. Docker Compose works well for development and smaller deployments. Kubernetes is recommended for large-scale production deployments requiring high availability, auto-scaling, and advanced orchestration capabilities.',
            },
            {
                question: 'How do we manage secrets and sensitive data in Docker?',
                answer:
                    'Use Docker Secrets for swarm mode, Kubernetes Secrets, or cloud provider secret managers (AWS Secrets Manager). Never embed secrets in images or environment variables. Always use runtime injection and encryption.',
            },
            {
                question: 'What is the difference between Docker and virtual machines?',
                answer:
                    'Containers share the host OS kernel, making them lightweight and fast to start. VMs emulate entire OS, consuming more resources. Containers are ideal for modern cloud deployments, while VMs offer stronger isolation.',
            },
            ],
            caseStudies: [
            {
                title: 'Legacy Application Containerization',
                description:
                    'Successfully containerized 50-year-old monolithic application with zero downtime migration to Kubernetes.',
                link: '#',
            },
            {
                title: 'Multi-Container Microservices',
                description:
                    'Designed Docker-based microservices architecture with 20+ services, achieving 99.99% uptime in production.',
                link: '#',
            },
            {
                title: 'CI/CD Pipeline Automation',
                description:
                    'Implemented automated Docker build, test, and deployment pipeline, reducing deployment time from 2 hours to 15 minutes.',
                link: '#',
            },
            ],
        relatedTechs: [
            'Kubernetes',
            'Docker Compose',
            'CI/CD Pipeline',
            'AWS',
            'DevOps',
            'Microservices',
            'Cloud Infrastructure',
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
