'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function TypeScriptTechPage() {
    const techData = {
        name: 'TypeScript',
        emoji: '📘',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Master TypeScript development with our expert nearshore team. We deliver type-safe, scalable enterprise applications.',
        heroTitle: 'Enterprise-Grade TypeScript Development Services',
        heroSubtitle:
            'TypeScript brings type safety and powerful tooling to JavaScript development. Our expert developers leverage advanced TypeScript patterns to build scalable, maintainable applications. From greenfield projects to complex migrations, we accelerate your TypeScript development with proven expertise across enterprise-scale applications.',
        heroImage: '/images/tech-typescript-rich.svg',
        heroImageAlt: 'TypeScript - Type-Safe JavaScript Development',
        services: [
            {
                title: 'Full-Stack TypeScript Development',
                description:
                    'Build end-to-end applications with TypeScript on both frontend and backend, ensuring type consistency across your entire stack.',
                details:
                    'Leveraging Node.js, Express, NestJS on backend and React, Angular on frontend, we create unified, type-safe applications.',
            },
            {
                title: 'TypeScript Migration & Modernization',
                description:
                    'Migrate JavaScript projects to TypeScript incrementally while maintaining production stability and developer velocity.',
                details:
                    'Expert guidance on gradual adoption, legacy code refactoring, and establishing TypeScript best practices organization-wide.',
            },
            {
                title: 'Advanced Type System Implementation',
                description:
                    'Implement sophisticated type definitions, generics, and utility types to ensure maximum type safety and developer experience.',
                details:
                    'Creating reusable type libraries, complex generic patterns, and custom type utilities for application-specific needs.',
            },
            {
                title: 'TypeScript Architecture & Patterns',
                description:
                    'Design robust application architectures following SOLID principles with TypeScript\'s type system as a design tool.',
                details:
                    'Domain-driven design, dependency injection, factory patterns, and architectural decision guidance for scalable systems.',
            },
            {
                title: 'Performance & Optimization',
                description:
                    'Optimize TypeScript compilation, bundle sizes, and runtime performance for production-ready applications.',
                details:
                    'Build configuration optimization, tree-shaking, code splitting, and performance profiling for enterprise applications.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Implement comprehensive testing strategies with TypeScript, ensuring code quality and maintainability.',
                details:
                    'Unit testing, integration testing, E2E testing with Jest, Vitest, and Cypress, plus TypeScript-specific quality tools.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Language & Runtime',
                tools: [
                    'TypeScript',
                    'Node.js',
                    'Deno',
                    'Bun',
                    'V8 Engine',
                    'ECMAScript',
                ],
            },
            {
                title: 'Backend Frameworks',
                tools: [
                    'Express',
                    'NestJS',
                    'Fastify',
                    'Koa',
                    'Hapi',
                    'Loopback',
                ],
            },
            {
                title: 'Frontend Frameworks',
                tools: [
                    'React',
                    'Angular',
                    'Vue.js',
                    'Svelte',
                    'Next.js',
                    'Nuxt.js',
                ],
            },
            {
                title: 'Type Safety & Validation',
                tools: [
                    'Zod',
                    'io-ts',
                    'TypeBox',
                    'Joi',
                    'Yup',
                    'TypeORM',
                ],
            },
            {
                title: 'Build Tools & Bundlers',
                tools: [
                    'webpack',
                    'Vite',
                    'Turbopack',
                    'esbuild',
                    'Rollup',
                    'tsc',
                ],
            },
            {
                title: 'Testing Frameworks',
                tools: [
                    'Jest',
                    'Vitest',
                    'Mocha',
                    'Chai',
                    'Cypress',
                    'Playwright',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'tslint',
                    'ESLint',
                    'Prettier',
                    'ts-node',
                    'Nodemon',
                    'ts-jest',
                ],
            },
            {
                title: 'Databases & ORM',
                tools: [
                    'Prisma',
                    'Sequelize',
                    'Typegoose',
                    'MongoDB',
                    'PostgreSQL',
                    'MySQL',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Type Safety Expertise',
                description:
                    'Our developers leverage TypeScript\'s advanced type system to prevent bugs and improve code quality from day one.',
            },
            {
                title: 'Scalable Architecture',
                description:
                    'We design TypeScript applications with long-term scalability, maintainability, and team collaboration in mind.',
            },
            {
                title: 'Enterprise Experience',
                description:
                    'Proven track record managing large-scale TypeScript codebases at enterprise organizations with thousands of developers.',
            },
            {
                title: 'Performance Optimized',
                description:
                    'From compilation to runtime, we optimize TypeScript applications for speed, bundle size, and resource efficiency.',
            },
            {
                title: 'Modern Best Practices',
                description:
                    'Staying current with latest TypeScript features, patterns, and ecosystem tools for cutting-edge development.',
            },
            {
                title: 'Full-Stack Capability',
                description:
                    'Expert in both TypeScript backend (Node.js, NestJS) and frontend (React, Angular, Vue) development stacks.',
            },
        ],
        keyFacts: [
            'TypeScript is used by 87% of developers according to StackOverflow surveys',
            'Reduces production bugs by up to 38% through static type checking',
            'Major tech companies (Microsoft, Google, Airbnb, Slack) rely on TypeScript',
            'Fully compatible with existing JavaScript libraries and frameworks',
            'First-class support from major frameworks and build tools',
            'Powerful IDE support with excellent autocomplete and refactoring',
            'Growing ecosystem with thousands of type-safe packages',
            'Enables confident refactoring in large codebases',
        ],
        faqs: [
            {
                question: 'What is TypeScript and why should we use it?',
                answer:
                    'TypeScript is a superset of JavaScript that adds static typing and advanced language features. It prevents entire categories of bugs, improves IDE tooling, enables confident refactoring, and scales exceptionally well for large teams and codebases. Major companies use TypeScript for critical applications.',
            },
            {
                question: 'Can we migrate our existing JavaScript project to TypeScript?',
                answer:
                    'Yes! TypeScript can be adopted incrementally. We can migrate your codebase gradually while maintaining full functionality and team productivity. The process includes type definition generation, refactoring, and establishing TypeScript best practices.',
            },
            {
                question: 'How much slower is TypeScript compilation compared to JavaScript?',
                answer:
                    'Modern TypeScript compilation is very fast. With proper build optimization, compilation times are minimal. We employ strategies like incremental compilation, parallel builds, and optimized tsconfig to ensure development speed is not impacted.',
            },
            {
                question: 'What is the learning curve for TypeScript?',
                answer:
                    'If your team knows JavaScript, TypeScript learning is quick - usually 1-2 weeks for basic proficiency. Advanced patterns take longer, but our team can fast-track your learning through knowledge transfer and pair programming.',
            },
            {
                question: 'Will TypeScript impact our application performance?',
                answer:
                    'No. TypeScript compiles to JavaScript and has zero runtime overhead. In fact, TypeScript often leads to better performance through improved optimization and smaller bundle sizes due to better tree-shaking.',
            },
            {
                question: 'What are advanced TypeScript patterns?',
                answer:
                    'Advanced patterns include conditional types, mapped types, utility types, generics with constraints, and discriminated unions. These enable sophisticated type-level programming for maximum safety and developer experience.',
            },
            {
                question: 'How does TypeScript integrate with popular frameworks?',
                answer:
                    'TypeScript has first-class support in React, Angular, Vue, Next.js, and Node.js frameworks. Most modern tools provide excellent TypeScript integration with type definitions and IDE support out of the box.',
            },
            ],
            caseStudies: [
            {
                title: 'Large-Scale TypeScript Migration',
                description:
                    'Successfully migrated 500K+ lines of JavaScript to TypeScript, reducing production bugs by 35%.',
                link: '#',
            },
            {
                title: 'Full-Stack TypeScript Architecture',
                description:
                    'Designed unified TypeScript architecture for React frontend, Node.js backend, and shared types across services.',
                link: '#',
            },
            {
                title: 'Enterprise Type System Implementation',
                description:
                    'Built sophisticated type system with generics, conditional types, and utility types for complex business logic.',
                link: '#',
            },
            ],
        relatedTechs: [
            'Node.js',
            'React',
            'Angular',
            'Next.js',
            'NestJS',
            'JavaScript',
            'Web Development',
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
