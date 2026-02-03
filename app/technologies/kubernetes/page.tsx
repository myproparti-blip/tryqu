'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function KubernetesTechPage() {
    const techData = {
        name: 'Kubernetes',
        emoji: '☸️',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Master container orchestration with Kubernetes. Our K8s experts deliver scalable, resilient infrastructure for enterprise applications.',
        heroTitle: 'Enterprise Kubernetes & Container Orchestration',
        heroSubtitle:
            'Kubernetes is the industry standard for orchestrating containerized applications at scale. Our experienced team designs and manages Kubernetes clusters that handle millions of requests reliably. From GKE to EKS to on-premises deployments, we ensure your containers scale automatically, recover from failures, and optimize costs.',
        heroImage: '/images/tech-kubernetes-rich.svg',
        heroImageAlt: 'Kubernetes - Container Orchestration Platform',
        services: [
            {
                title: 'Kubernetes Cluster Design & Architecture',
                description:
                    'Design highly available, scalable Kubernetes clusters optimized for your workloads and infrastructure.',
                details:
                    'Multi-node clusters, networking design, storage architecture, and disaster recovery planning.',
            },
            {
                title: 'Application Deployment & Migration',
                description:
                    'Deploy and migrate applications to Kubernetes with zero downtime and proper testing.',
                details:
                    'Containerization, manifest creation, deployment strategies, and gradual migration planning.',
            },
            {
                title: 'StatefulSets & Storage Management',
                description:
                    'Manage stateful applications with persistent data on Kubernetes using StatefulSets and volumes.',
                details:
                    'Database deployment, persistent volume management, backup strategies, and data consistency.',
            },
            {
                title: 'Networking & Service Mesh',
                description:
                    'Implement advanced networking with service mesh for traffic management, security, and observability.',
                details:
                    'Istio, Linkerd, or other service mesh implementation for production-grade microservices.',
            },
            {
                title: 'Security & RBAC',
                description:
                    'Implement Kubernetes security best practices including RBAC, network policies, and compliance.',
                details:
                    'Authentication, authorization, secrets management, and security compliance implementation.',
            },
            {
                title: 'Monitoring, Logging & Observability',
                description:
                    'Implement comprehensive monitoring, logging, and observability for Kubernetes clusters.',
                details:
                    'Prometheus, Grafana, ELK Stack, distributed tracing, and alerting configuration.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Kubernetes Core',
                tools: [
                    'Kubernetes',
                    'kubectl',
                    'kubeadm',
                    'minikube',
                    'kind',
                    'Helm',
                ],
            },
            {
                title: 'Managed Kubernetes',
                tools: [
                    'Amazon EKS',
                    'Google GKE',
                    'Azure AKS',
                    'DigitalOcean K8s',
                    'Linode K8s',
                    'IBM Cloud K8s',
                ],
            },
            {
                title: 'Container Registries',
                tools: [
                    'Docker Registry',
                    'Amazon ECR',
                    'Google Container Registry',
                    'Azure Container Registry',
                    'GitLab Registry',
                    'Quay',
                ],
            },
            {
                title: 'Networking & Service Mesh',
                tools: [
                    'Istio',
                    'Linkerd',
                    'Calico',
                    'Flannel',
                    'Weave',
                    'Cilium',
                ],
            },
            {
                title: 'Storage & Databases',
                tools: [
                    'Persistent Volumes',
                    'Storage Classes',
                    'StatefulSets',
                    'Operators',
                    'PostgreSQL Operator',
                    'MongoDB Operator',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Prometheus',
                    'Grafana',
                    'ELK Stack',
                    'Loki',
                    'Jaeger',
                    'Datadog',
                ],
            },
            {
                title: 'CI/CD & GitOps',
                tools: [
                    'ArgoCD',
                    'Flux',
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'CircleCI',
                ],
            },
            {
                title: 'Package Management',
                tools: [
                    'Helm',
                    'Kustomize',
                    'Carvel',
                    'Skaffold',
                    'Tilt',
                    'Draft',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Kubernetes Certification & Expertise',
                description:
                    'Our team includes CKA and CKAD certified engineers with production Kubernetes experience at enterprise scale.',
            },
            {
                title: 'Cloud Provider Expertise',
                description:
                    'Deep expertise with EKS, GKE, AKS, and on-premises Kubernetes deployments across all major platforms.',
            },
            {
                title: 'Production Excellence',
                description:
                    'All Kubernetes implementations follow production-grade standards with high availability, monitoring, and disaster recovery.',
            },
            {
                title: 'Cost Optimization',
                description:
                    'Implement strategies for right-sizing nodes, using spot instances, and optimizing cluster costs.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement Kubernetes security best practices, network policies, RBAC, and compliance requirements.',
            },
            {
                title: 'Migration Expertise',
                description:
                    'Proven experience migrating legacy applications to Kubernetes with minimal downtime.',
            },
        ],
        keyFacts: [
            'Kubernetes powers 70%+ of containerized workloads globally',
            'Used by 90% of Fortune 500 companies for orchestrating critical applications',
            'Automatic scaling handles traffic spikes without manual intervention',
            'Self-healing capabilities automatically restart failed containers and services',
            'Rolling updates enable zero-downtime deployments and rollbacks',
            'Decouples applications from infrastructure for true portability',
            'Rich ecosystem with 100+ tools and integrations',
            'CNCF-backed with strong community and continuous evolution',
        ],
        faqs: [
            {
                question: 'What is Kubernetes and why use it?',
                answer:
                    'Kubernetes is a container orchestration platform that automates deployment, scaling, and management of containerized applications. It\'s chosen for high availability, automatic scaling, self-healing, and portability across cloud providers.',
            },
            {
                question: 'Do we need Kubernetes for our application?',
                answer:
                    'Kubernetes is ideal for scaling applications, running multiple services, and managing complex deployments. For simple single-service applications, Kubernetes might be overkill. We assess your needs and recommend the right solution.',
            },
            {
                question: 'How does Kubernetes achieve high availability?',
                answer:
                    'Through replication, health checks, automatic restarts, load balancing, and multi-node deployments. If a node fails, Kubernetes automatically reschedules pods on healthy nodes.',
            },
            {
                question: 'What is a Pod in Kubernetes?',
                answer:
                    'A Pod is the smallest deployable unit in Kubernetes. It typically contains one container but can contain multiple tightly coupled containers sharing storage and network resources.',
            },
            {
                question: 'What is the difference between Deployment and StatefulSet?',
                answer:
                    'Deployments manage stateless applications with dynamic identity and scaling. StatefulSets manage stateful applications requiring stable identity, stable storage, and ordered deployment/scaling.',
            },
            {
                question: 'How does Kubernetes manage secrets and configuration?',
                answer:
                    'ConfigMaps store configuration data, while Secrets store sensitive data. Both are injected into containers as environment variables or volumes at runtime.',
            },
            {
                question: 'How long does Kubernetes implementation take?',
                answer:
                    'Timeline depends on complexity. Simple setup: 2-4 weeks. Complex multi-service architecture: 2-3 months. Our team typically accelerates implementation through proven methodologies.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise Migration to EKS',
                description:
                    'Migrated 50+ microservices to Amazon EKS, achieving 99.99% uptime with automated scaling and cost optimization.',
                link: '#',
            },
            {
                title: 'Multi-Cloud Kubernetes Strategy',
                description:
                    'Designed multi-cloud Kubernetes architecture spanning GKE and EKS for vendor independence and redundancy.',
                link: '#',
            },
            {
                title: 'Production-Grade Service Mesh',
                description:
                    'Implemented Istio service mesh for traffic management, security policies, and observability across 100+ pods.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Docker',
            'AWS',
            'Google Cloud',
            'Azure',
            'Helm',
            'Istio',
            'DevOps',
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
