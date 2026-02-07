'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function GraphQLTechPage() {
    const techData = {
        name: 'GraphQL',
        emoji: '📊',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build flexible APIs with GraphQL. Our GraphQL experts deliver powerful, type-safe data layer solutions with nearshore expertise.',
        heroTitle: 'Modern API Development with GraphQL',
        heroSubtitle:
            'GraphQL is a query language for APIs enabling clients to request exactly what data they need. Our expert developers build scalable GraphQL servers, implement complex schemas, and leverage Apollo ecosystem. From startups to enterprises, we deliver GraphQL solutions optimizing for performance and developer experience.',
        heroImage: '/images/tech-graphql-rich.svg',
        heroImageAlt: 'GraphQL - Query Language for APIs',
        services: [
            {
                title: 'GraphQL Server Development',
                description:
                    'Build robust GraphQL servers using Apollo Server, Hasura, or other GraphQL frameworks.',
                details:
                    'Schema design, resolvers, subscriptions, and best practices for scalable APIs.',
            },
            {
                title: 'Schema Design & Optimization',
                description:
                    'Design efficient GraphQL schemas that balance flexibility with performance.',
                details:
                    'Entity relationships, field resolution strategies, and optimization for large datasets.',
            },
            {
                title: 'Data Loader & Query Optimization',
                description:
                    'Optimize GraphQL queries using data loaders to prevent N+1 query problems.',
                details:
                    'Batch loading, caching strategies, and performance profiling for production.',
            },
            {
                title: 'Authentication & Authorization',
                description:
                    'Implement secure authentication and authorization in GraphQL APIs.',
                details:
                    'JWT tokens, role-based access control, and field-level authorization.',
            },
            {
                title: 'Real-Time Subscriptions',
                description:
                    'Implement real-time features using GraphQL subscriptions with WebSockets.',
                details:
                    'Live data updates, notifications, and real-time collaboration features.',
            },
            {
                title: 'API Federation & Composition',
                description:
                    'Build federated GraphQL APIs combining multiple GraphQL services.',
                details:
                    'Apollo Federation, subgraph composition, and cross-service queries.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'GraphQL Servers',
                tools: [
                    'Apollo Server',
                    'Hasura',
                    'PostGraphile',
                    'GraphQL Yoga',
                    'Express GraphQL',
                    'Mercurius',
                ],
            },
            {
                title: 'Client Libraries',
                tools: [
                    'Apollo Client',
                    'Urql',
                    'Relay',
                    'TanStack Query',
                    'SWR',
                    'Fetch API',
                ],
            },
            {
                title: 'Tools & DevTools',
                tools: [
                    'GraphQL Playground',
                    'Apollo Studio',
                    'GraphiQL',
                    'Postman',
                    'Insomnia',
                    'Altair',
                ],
            },
            {
                title: 'Schema Management',
                tools: [
                    'Apollo Schema Registry',
                    'GraphQL Inspector',
                    'GraphQL Code Generator',
                    'TypeGraphQL',
                    'Nexus',
                    'Pothos',
                ],
            },
            {
                title: 'Authentication & Security',
                tools: [
                    'JWT',
                    'OAuth2',
                    'Apollo Security Plugin',
                    'Auth0',
                    'Clerk',
                    'NextAuth.js',
                ],
            },
            {
                title: 'Performance & Caching',
                tools: [
                    'Apollo Cache Control',
                    'Redis',
                    'DataLoader',
                    'Query batching',
                    'Persisted queries',
                    'APQ',
                ],
            },
            {
                title: 'Monitoring & Observability',
                tools: [
                    'Apollo Studio',
                    'DataDog',
                    'New Relic',
                    'Sentry',
                    'Prometheus',
                    'Grafana',
                ],
            },
            {
                title: 'Related Technologies',
                tools: [
                    'REST APIs',
                    'gRPC',
                    'Database',
                    'Microservices',
                    'API Gateway',
                    'Load Balancing',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'GraphQL Expertise',
                description:
                    'Our team includes experienced GraphQL developers with production implementations across various scales.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Implement efficient data loading patterns, caching strategies, and query optimization.',
            },
            {
                title: 'Schema Design Excellence',
                description:
                    'Design intuitive, scalable GraphQL schemas that balance flexibility with performance.',
            },
            {
                title: 'Full-Stack Integration',
                description:
                    'Seamless integration with React, Vue, Angular, and mobile clients with type safety.',
            },
            {
                title: 'Real-Time Capabilities',
                description:
                    'Implement subscriptions and real-time features for live collaboration and updates.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on API design.',
            },
        ],
        keyFacts: [
            'GraphQL is used by 80%+ of companies using APIs for data fetching',
            'Developed by Facebook and used by GitHub, Shopify, and Twitter',
            'Strongly typed schema enables code generation and IDE support',
            'Single endpoint eliminates over-fetching and under-fetching of data',
            'Apollo ecosystem provides production-grade tools and services',
            'Real-time subscriptions enable live data updates and collaboration',
            'Federation enables composing multiple GraphQL services together',
            'Excellent documentation and extensive tooling ecosystem',
        ],
        faqs: [
            {
                question: 'What is GraphQL and why use it?',
                answer:
                    'GraphQL is a query language for APIs enabling clients to request exactly what data they need. It\'s chosen for flexibility, efficiency, type safety, and excellent developer experience.',
            },
            {
                question: 'What\'s the difference between GraphQL and REST?',
                answer:
                    'REST uses fixed endpoints returning all associated data. GraphQL uses single endpoint where clients request specific fields. GraphQL prevents over-fetching and under-fetching.',
            },
            {
                question: 'Can we use GraphQL with existing REST APIs?',
                answer:
                    'Yes. GraphQL can wrap existing REST APIs, databases, or microservices. Start with GraphQL layer over existing infrastructure.',
            },
            {
                question: 'How do we prevent N+1 query problems?',
                answer:
                    'Using DataLoader for batch loading, query analysis, and database query optimization. Monitor and profile queries to identify issues.',
            },
            {
                question: 'Is GraphQL suitable for real-time applications?',
                answer:
                    'Yes, through subscriptions. GraphQL subscriptions enable real-time data push for live features and collaboration.',
            },
            {
                question: 'How do we secure GraphQL APIs?',
                answer:
                    'Through authentication (JWT, OAuth), authorization (field-level permissions), rate limiting, and query complexity analysis.',
            },
            {
                question: 'How long does GraphQL implementation take?',
                answer:
                    'Timeline depends on schema complexity. Simple APIs: 2-4 weeks. Complex enterprise APIs: 2-3 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Platform API',
                description:
                    'Built GraphQL API for e-commerce handling complex relationships, real-time inventory, and multiple client platforms.',
                link: '#',
            },
            {
                title: 'API Federation Architecture',
                description:
                    'Implemented Apollo Federation composing 20+ GraphQL services, enabling independent teams.',
                link: '#',
            },
            {
                title: 'Real-Time Collaboration App',
                description:
                    'Developed GraphQL API with subscriptions for real-time document collaboration and live updates.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Apollo Client',
            'Node.js',
            'React',
            'TypeScript',
            'PostgreSQL',
            'Microservices',
            'API Design',
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
