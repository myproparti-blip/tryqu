'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function NestJSTechPage() {
    const techData = {
        name: 'NestJS',
        emoji: '🐱',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build enterprise backend applications with NestJS. Our NestJS experts deliver scalable, maintainable server solutions with nearshore expertise.',
        heroTitle: 'Enterprise Backend Development with NestJS',
        heroSubtitle:
            'NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Our expert developers leverage NestJS architecture, dependency injection, and extensive ecosystem to build production-grade backends. From startups to enterprises, we deliver scalable NestJS solutions.',
        heroImage: '/images/tech-nestjs-rich.svg',
        heroImageAlt: 'NestJS - Progressive Node.js Framework',
        services: [
            {
                title: 'REST API Development',
                description:
                    'Build robust REST APIs with NestJS following best practices and SOLID principles.',
                details:
                    'Controllers, services, middleware, and comprehensive API design patterns.',
            },
            {
                title: 'GraphQL API Development',
                description:
                    'Develop GraphQL APIs using NestJS with Code-First or Schema-First approach.',
                details:
                    'Resolvers, subscriptions, authentication, and advanced GraphQL patterns.',
            },
            {
                title: 'Microservices Architecture',
                description:
                    'Design and implement microservices architectures using NestJS microservices support.',
                details:
                    'Message queues, service discovery, inter-service communication patterns.',
            },
            {
                title: 'Database Integration & ORM',
                description:
                    'Integrate databases with TypeORM, Sequelize, or Prisma for data persistence.',
                details:
                    'Database schema design, migrations, and optimized queries.',
            },
            {
                title: 'Authentication & Authorization',
                description:
                    'Implement secure authentication and authorization strategies.',
                details:
                    'JWT, OAuth2, role-based access control, and permission management.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Implement comprehensive testing with unit, integration, and e2e tests.',
                details:
                    'Jest, testing utilities, and quality assurance best practices.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'NestJS Framework',
                tools: [
                    'NestJS',
                    'TypeScript',
                    'Node.js',
                    'Express',
                    'Fastify',
                    'CLI',
                ],
            },
            {
                title: 'ORM & Database',
                tools: [
                    'TypeORM',
                    'Prisma',
                    'Sequelize',
                    'MongoDB Driver',
                    'PostgreSQL',
                    'MySQL',
                ],
            },
            {
                title: 'API Development',
                tools: [
                    'REST',
                    'GraphQL',
                    'Apollo Server',
                    'Hasura',
                    'tRPC',
                    'gRPC',
                ],
            },
            {
                title: 'Authentication',
                tools: [
                    'Passport.js',
                    'JWT',
                    'OAuth2',
                    'Auth0',
                    'Clerk',
                    'NextAuth.js',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Jest',
                    'Supertest',
                    'Mocha',
                    'Chai',
                    'Cypress',
                    'K6',
                ],
            },
            {
                title: 'Deployment & DevOps',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'PM2',
                    'GitHub Actions',
                    'AWS',
                    'Heroku',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Winston',
                    'Pino',
                    'Prometheus',
                    'Grafana',
                    'Datadog',
                    'New Relic',
                ],
            },
            {
                title: 'Message Queues & Events',
                tools: [
                    'RabbitMQ',
                    'Apache Kafka',
                    'Bull',
                    'Redis',
                    'AWS SQS',
                    'Event Emitter',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'NestJS Expertise',
                description:
                    'Our team includes experienced NestJS developers with production applications at scale.',
            },
            {
                title: 'Enterprise Architecture',
                description:
                    'Leverage NestJS architecture, dependency injection, and SOLID principles for scalable applications.',
            },
            {
                title: 'Full-Stack TypeScript',
                description:
                    'Type-safe frontend to backend with React/Vue and NestJS using unified TypeScript codebase.',
            },
            {
                title: 'Microservices Ready',
                description:
                    'NestJS microservices support enables building distributed architectures easily.',
            },
            {
                title: 'Production Excellence',
                description:
                    'All applications include monitoring, logging, error handling, and deployment best practices.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'NestJS is used by 45%+ of Node.js enterprise developers',
            'Built on Express (default) or Fastify for flexibility',
            'Strong typing with full TypeScript support from day one',
            'Dependency injection enables testable, maintainable code',
            'Module architecture encourages code organization and reusability',
            'Extensive ecosystem with official packages for databases, APIs, and more',
            'Excellent documentation and large community',
            'Used by companies like Airbnb, Google, and Microsoft',
        ],
        faqs: [
            {
                question: 'What is NestJS and why use it?',
                answer:
                    'NestJS is a progressive Node.js framework for building server-side applications. It\'s chosen for strong typing, architecture enforcement, dependency injection, modularity, and excellent developer experience.',
            },
            {
                question: 'How is NestJS different from Express?',
                answer:
                    'NestJS is built on Express (or Fastify) but adds structure, dependency injection, modules, and decorators. NestJS enforces architecture patterns; Express leaves it to you.',
            },
            {
                question: 'Can we use NestJS for GraphQL APIs?',
                answer:
                    'Yes, excellent support for GraphQL. NestJS provides decorators and utilities for Code-First and Schema-First GraphQL development.',
            },
            {
                question: 'Is NestJS suitable for microservices?',
                answer:
                    'Yes. NestJS has built-in microservices support with message queues, service discovery, and inter-service communication.',
            },
            {
                question: 'How does NestJS handle testing?',
                answer:
                    'NestJS works excellently with Jest for unit and integration testing. Dependency injection makes mocking and testing straightforward.',
            },
            {
                question: 'Can we deploy NestJS anywhere?',
                answer:
                    'Yes. NestJS applications can run on any Node.js server, Docker, Kubernetes, AWS, Azure, Google Cloud, or Heroku.',
            },
            {
                question: 'How long does NestJS development take?',
                answer:
                    'Timeline depends on complexity. Simple APIs: 2-4 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months.',
            },
        ],
        caseStudies: [
            {
                title: 'Microservices Platform',
                description:
                    'Built 20+ NestJS microservices handling 10M+ requests daily with message queue architecture.',
                link: '#',
            },
            {
                title: 'Enterprise API Gateway',
                description:
                    'Developed NestJS API gateway with authentication, rate limiting, and complex business logic.',
                link: '#',
            },
            {
                title: 'Real-Time WebSocket Server',
                description:
                    'Created NestJS server with WebSocket support for real-time collaboration and live features.',
                link: '#',
            },
        ],
        relatedTechs: [
            'TypeScript',
            'Node.js',
            'Express',
            'GraphQL',
            'PostgreSQL',
            'Docker',
            'Microservices',
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
