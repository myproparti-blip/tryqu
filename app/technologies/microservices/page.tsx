'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Boxes } from 'lucide-react';

export default function MicroservicesTechPage() {
    const techData = {
        name: 'Microservices',
        emoji: '🔗',
        icon: <Boxes className="w-6 h-6" />,
        shortDescription:
            'Build scalable architectures with microservices. Our experts deliver loosely-coupled, independently deployable systems with nearshore expertise.',
        heroTitle: 'Enterprise Microservices Architecture & Implementation',
        heroSubtitle:
            'Microservices architecture enables building large, complex applications as collections of independent, deployable services. Our expert team designs, implements, and manages microservices architectures that scale reliably. From monolith migration to greenfield microservices design, we provide comprehensive expertise for distributed systems.',
        heroImage: '/images/tech-microservices-rich.svg',
        heroImageAlt: 'Microservices - Distributed Architecture Pattern',
        services: [
            {
                title: 'Microservices Architecture Design',
                description:
                    'Design scalable microservices architectures aligned with business domains and technical requirements.',
                details:
                    'Domain-driven design, service boundaries, API contracts, and distributed system patterns.',
            },
            {
                title: 'Monolith to Microservices Migration',
                description:
                    'Migrate from monolithic architectures to microservices with minimal disruption and continuous delivery.',
                details:
                    'Strangler pattern implementation, gradual extraction, database decomposition, and rolling migration.',
            },
            {
                title: 'Service Development & Integration',
                description:
                    'Develop independent microservices with proper API design, communication patterns, and dependencies.',
                details:
                    'REST APIs, gRPC, message queues, event-driven architecture, and service discovery.',
            },
            {
                title: 'Distributed Data Management',
                description:
                    'Manage data across distributed services using eventual consistency and saga patterns.',
                details:
                    'Database per service pattern, distributed transactions, data synchronization, and consistency.',
            },
            {
                title: 'Observability & Monitoring',
                description:
                    'Implement comprehensive observability across distributed microservices.',
                details:
                    'Distributed tracing, centralized logging, metrics collection, and anomaly detection.',
            },
            {
                title: 'Deployment & Orchestration',
                description:
                    'Deploy and orchestrate microservices using containers and Kubernetes.',
                details:
                    'Docker containerization, Kubernetes orchestration, service mesh, and GitOps workflows.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'API & Communication',
                tools: [
                    'REST APIs',
                    'gRPC',
                    'GraphQL',
                    'Protocol Buffers',
                    'API Gateway',
                    'Service Mesh',
                ],
            },
            {
                title: 'Service Discovery',
                tools: [
                    'Kubernetes Service Discovery',
                    'Consul',
                    'Eureka',
                    'etcd',
                    'ZooKeeper',
                    'Service Registry',
                ],
            },
            {
                title: 'Message Queues & Events',
                tools: [
                    'RabbitMQ',
                    'Apache Kafka',
                    'AWS SQS/SNS',
                    'Redis',
                    'NATS',
                    'Pub/Sub',
                ],
            },
            {
                title: 'Container & Orchestration',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'Docker Compose',
                    'Helm',
                    'Istio',
                    'Linkerd',
                ],
            },
            {
                title: 'Distributed Tracing',
                tools: [
                    'Jaeger',
                    'Zipkin',
                    'DataDog APM',
                    'New Relic',
                    'Elastic APM',
                    'AWS X-Ray',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Prometheus',
                    'Grafana',
                    'ELK Stack',
                    'Loki',
                    'Datadog',
                    'Splunk',
                ],
            },
            {
                title: 'CI/CD & Deployment',
                tools: [
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'ArgoCD',
                    'Flux',
                    'CircleCI',
                ],
            },
            {
                title: 'Frameworks & Libraries',
                tools: [
                    'Spring Boot',
                    'Express.js',
                    'FastAPI',
                    'Django',
                    'NestJS',
                    'Go',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Microservices Expertise',
                description:
                    'Our team has designed and implemented microservices for Fortune 500 companies managing 100+ services in production.',
            },
            {
                title: 'Distributed Systems Knowledge',
                description:
                    'Deep expertise in distributed system challenges: eventual consistency, saga patterns, and resilience.',
            },
            {
                title: 'Architecture Excellence',
                description:
                    'Design scalable architectures using domain-driven design and proven microservices patterns.',
            },
            {
                title: 'Operational Excellence',
                description:
                    'Implement observability, deployment automation, and operational practices for managing distributed systems.',
            },
            {
                title: 'Migration Expertise',
                description:
                    'Proven experience migrating monoliths to microservices using strangler pattern and gradual extraction.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on complex architecture decisions.',
            },
        ],
        keyFacts: [
            'Microservices enable independent deployment, scaling, and evolution of different parts of applications',
            '80% of enterprises are adopting microservices for new applications and cloud migration',
            'Faster iteration and deployment cycles with independent service teams',
            'Granular scaling: scale only services needing capacity instead of entire monolith',
            'Technology diversity: different services can use different languages and databases',
            'Improved fault isolation: failure in one service doesn\'t crash entire application',
            'Better aligned with DevOps practices and containerization technologies',
            'Increased complexity in distributed operations and data management',
        ],
        faqs: [
            {
                question: 'What is microservices architecture?',
                answer:
                    'Microservices is an architectural style where applications are composed of small, independent services communicating via APIs. Each service handles specific business capability, can be developed/deployed independently, and uses its own database.',
            },
            {
                question: 'When should we use microservices?',
                answer:
                    'Consider microservices for large, complex applications with multiple teams, diverse scaling needs, or need for independent deployment. For simple applications, monoliths are simpler and more efficient.',
            },
            {
                question: 'What challenges does microservices solve?',
                answer:
                    'Microservices enable independent deployment, reduce deployment risk, enable technology diversity, improve scalability, and allow different teams to work independently on different services.',
            },
            {
                question: 'How do services communicate in microservices?',
                answer:
                    'Through synchronous APIs (REST, gRPC, GraphQL) for request-response, or asynchronous messaging (event queues, message brokers) for eventual consistency patterns.',
            },
            {
                question: 'How do we manage data consistency across services?',
                answer:
                    'Each service has its own database (database per service pattern). Use eventual consistency through event-driven architecture or implement saga patterns for distributed transactions.',
            },
            {
                question: 'What is the difference between microservices and monoliths?',
                answer:
                    'Monoliths are single codebases deployed together with shared databases. Microservices are independent services with separate databases. Microservices are harder to operate but enable better scalability and independent deployment.',
            },
            {
                question: 'How long does microservices transformation take?',
                answer:
                    'Timeline depends on application complexity and current state. Simple migration: 3-6 months. Large-scale transformation: 12-24+ months. We accelerate through proven methodologies.',
            },
        ],
        caseStudies: [
            {
                title: 'Monolith to Microservices Migration',
                description:
                    'Migrated 10-year-old monolith to 80+ microservices, enabling 50+ teams to deploy independently per day.',
                link: '#',
            },
            {
                title: 'High-Scale Event-Driven Architecture',
                description:
                    'Designed event-driven microservices handling 1M+ events/second with Kafka and eventual consistency patterns.',
                link: '#',
            },
            {
                title: 'Multi-Tenant Microservices Platform',
                description:
                    'Built SaaS platform with 40+ microservices supporting 100K+ concurrent users across multiple tenants.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Docker',
            'Kubernetes',
            'Node.js',
            'Python',
            'Apache Kafka',
            'PostgreSQL',
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
