'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function NodeJsTechPage() {
    const techData = {
        name: 'Node.js',
        emoji: '✓',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Scale your backend with Node.js. Our nearshore team delivers high-performance, event-driven server applications.',
        heroTitle: 'High-Performance Node.js Backend Development',
        heroSubtitle:
            'Node.js powers some of the world\'s most demanding real-time applications. Our expert developers leverage JavaScript\'s unified language model to build scalable APIs, microservices, and full-stack applications. From startups to Fortune 500 companies, we deliver production-grade Node.js solutions with proven reliability.',
        heroImage: '/images/tech-nodejs-rich.svg',
        heroImageAlt: 'Node.js - Server-Side JavaScript Runtime',
        services: [
            {
                title: 'REST API Development',
                description:
                    'Build robust, scalable REST APIs with Node.js and Express. Implement best practices for authentication, validation, and error handling.',
                details:
                    'Express, Fastify, or NestJS frameworks, implementing RESTful principles with proper middleware, routing, and controller patterns.',
            },
            {
                title: 'GraphQL API Development',
                description:
                    'Develop flexible GraphQL APIs enabling clients to query exactly what they need. Perfect for complex data requirements.',
                details:
                    'Apollo Server, TypeGraphQL, or Hasura implementation with subscriptions, real-time features, and efficient data loading.',
            },
            {
                title: 'Microservices Architecture',
                description:
                    'Design and implement distributed microservices architectures with Node.js for scalability and independent deployment.',
                details:
                    'Service discovery, API gateways, message queues, and distributed tracing for reliable microservices systems.',
            },
            {
                title: 'Real-Time Applications',
                description:
                    'Build real-time applications with WebSockets, Server-Sent Events, or message queues for instant data updates.',
                details:
                    'Socket.io, WebSocket libraries, and real-time data streaming for chat, notifications, and live collaboration features.',
            },
            {
                title: 'Database Integration & ORM',
                description:
                    'Expert integration with SQL and NoSQL databases using ORMs and query builders for data persistence.',
                details:
                    'Prisma, Sequelize, TypeORM for relational databases; Mongoose for MongoDB; Redis for caching and sessions.',
            },
            {
                title: 'DevOps & Deployment',
                description:
                    'Deploy Node.js applications to cloud platforms with CI/CD pipelines, containerization, and infrastructure management.',
                details:
                    'Docker, Kubernetes, AWS, GitHub Actions, monitoring, logging, and auto-scaling for production reliability.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Web Frameworks',
                tools: [
                    'Express',
                    'NestJS',
                    'Fastify',
                    'Koa',
                    'Hapi',
                    'Loopback',
                    'Remix',
                ],
            },
            {
                title: 'API & GraphQL',
                tools: [
                    'Apollo Server',
                    'GraphQL',
                    'REST',
                    'tRPC',
                    'gRPC',
                    'OpenAPI',
                ],
            },
            {
                title: 'Databases & ORMs',
                tools: [
                    'Prisma',
                    'Sequelize',
                    'TypeORM',
                    'Mongoose',
                    'Redis',
                    'PostgreSQL',
                    'MongoDB',
                ],
            },
            {
                title: 'Authentication & Security',
                tools: [
                    'Passport.js',
                    'jsonwebtoken',
                    'bcrypt',
                    'OAuth2',
                    'OpenID Connect',
                    'Helmet',
                ],
            },
            {
                title: 'Testing Frameworks',
                tools: [
                    'Jest',
                    'Mocha',
                    'Vitest',
                    'Chai',
                    'Supertest',
                    'Sinon',
                ],
            },
            {
                title: 'Message Queues & Events',
                tools: [
                    'RabbitMQ',
                    'Apache Kafka',
                    'Bull',
                    'BullMQ',
                    'Redis Streams',
                    'AWS SQS',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Winston',
                    'Pino',
                    'Morgan',
                    'Prometheus',
                    'DataDog',
                    'New Relic',
                    'ELK Stack',
                ],
            },
            {
                title: 'Deployment & Infrastructure',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'PM2',
                    'Heroku',
                    'AWS',
                    'Google Cloud',
                    'Vercel',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Proven Backend Expertise',
                description:
                    'Our Node.js developers have built and scaled APIs powering millions of requests across diverse industries.',
            },
            {
                title: 'Full-Stack JavaScript',
                description:
                    'Leverage unified JavaScript/TypeScript across your entire stack for faster development and code reuse.',
            },
            {
                title: 'Scalability First',
                description:
                    'We design Node.js applications to scale horizontally, handling growing traffic and data volumes efficiently.',
            },
            {
                title: 'Security Focus',
                description:
                    'Implement best practices in authentication, authorization, data validation, and protection against common vulnerabilities.',
            },
            {
                title: 'Production Ready',
                description:
                    'All applications include monitoring, logging, error handling, and disaster recovery for enterprise reliability.',
            },
            {
                title: 'Fast Onboarding',
                description:
                    'Our team integrates quickly with your existing Node.js infrastructure and development practices.',
            },
        ],
        keyFacts: [
            'Node.js powers 35%+ of web servers and supports millions of concurrent connections',
            'Event-driven architecture enables handling thousands of concurrent requests with minimal overhead',
            'npm ecosystem contains 2+ million packages, the largest package registry globally',
            'Used by Netflix, LinkedIn, Uber, PayPal, and other high-scale companies',
            'Excellent performance for I/O-heavy operations like APIs and microservices',
            'Built on V8 engine, ensuring consistent performance and constant improvements',
            'Seamless integration with cloud platforms and containerization',
            'Strong community support with extensive documentation and frameworks',
        ],
        faqs: [
            {
                question: 'Why should we choose Node.js for our backend?',
                answer:
                    'Node.js excels at building scalable, event-driven applications. It handles thousands of concurrent connections efficiently, allows code reuse between frontend and backend, offers a rich ecosystem, and provides exceptional performance for APIs and microservices.',
            },
            {
                question: 'Is Node.js suitable for enterprise applications?',
                answer:
                    'Absolutely. Major enterprises use Node.js for critical applications. With proper architecture, monitoring, error handling, and testing, Node.js delivers enterprise-grade reliability, performance, and scalability.',
            },
            {
                question: 'Can Node.js handle CPU-intensive tasks?',
                answer:
                    'Node.js is single-threaded, so CPU-intensive tasks can block the event loop. We use strategies like worker threads, child processes, or offloading to specialized services to handle compute-heavy operations.',
            },
            {
                question: 'What databases work best with Node.js?',
                answer:
                    'Node.js works excellently with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases. We choose the right database based on your data structure, scalability needs, and query patterns.',
            },
            {
                question: 'How do you ensure Node.js application reliability?',
                answer:
                    'We implement comprehensive error handling, monitoring, logging, health checks, graceful shutdown handling, automated testing, and deployment strategies to ensure high availability and reliability.',
            },
            {
                question: 'What is the difference between REST and GraphQL?',
                answer:
                    'REST uses multiple endpoints for different data resources, while GraphQL provides a single endpoint with flexible queries. GraphQL reduces over-fetching, improves developer experience, and is ideal for complex data requirements.',
            },
        ],
        caseStudies: [
            {
                title: 'Real-Time Messaging Platform Scale-Up',
                description:
                    'Migrated Node.js microservices to handle 10x traffic growth with improved latency and reliability.',
                link: '#',
            },
            {
                title: 'GraphQL API Migration Success',
                description:
                    'Transformed legacy REST APIs into modern GraphQL architecture, improving performance by 40%.',
                link: '#',
            },
            {
                title: 'Serverless Lambda Deployment',
                description:
                    'Implemented serverless Node.js functions on AWS Lambda, reducing infrastructure costs by 60%.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Express.js',
            'NestJS',
            'TypeScript',
            'React',
            'MongoDB',
            'PostgreSQL',
            'Docker',
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
