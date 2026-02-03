'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function NuxtJSTechPage() {
    const techData = {
        name: 'Nuxt.js',
        emoji: '🟢',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build full-stack Vue applications with Nuxt.js. Our Nuxt experts deliver production-grade web applications with nearshore expertise.',
        heroTitle: 'Full-Stack Vue Development with Nuxt.js',
        heroSubtitle:
            'Nuxt.js is the intuitive Vue framework for production enabling server-side rendering, static generation, and API routes. Our expert developers leverage Nuxt to build performant, SEO-optimized full-stack applications. From startups to enterprises, we deliver scalable solutions using Nuxt.js.',
        heroImage: '/images/tech-nuxtjs-rich.svg',
        heroImageAlt: 'Nuxt.js - Vue Framework for Production',
        services: [
            {
                title: 'Nuxt Application Development',
                description:
                    'Build full-stack applications with Nuxt, combining Vue frontend with Node.js backend.',
                details:
                    'Server middleware, API routes, and file-based routing for rapid development.',
            },
            {
                title: 'Server-Side Rendering (SSR)',
                description:
                    'Implement server-side rendering for SEO optimization and enhanced performance.',
                details:
                    'Dynamic rendering, cache control, and production-grade SSR setup.',
            },
            {
                title: 'Static Site Generation (SSG)',
                description:
                    'Generate static HTML pages for maximum performance with Nuxt generate.',
                details:
                    'Pre-rendering, incremental updates, and deployment optimization.',
            },
            {
                title: 'API Route Development',
                description:
                    'Build RESTful APIs using Nuxt server routes for backend functionality.',
                details:
                    'Request handling, middleware, database integration, and authentication.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Nuxt applications for speed and Core Web Vitals.',
                details:
                    'Code splitting, lazy loading, image optimization, and monitoring.',
            },
            {
                title: 'Progressive Web Apps (PWA)',
                description:
                    'Convert Nuxt applications to PWAs with offline capabilities.',
                details:
                    'Service workers, manifest, push notifications, and installation support.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Nuxt Ecosystem',
                tools: [
                    'Nuxt 3',
                    'Vue 3',
                    'TypeScript',
                    'Nitro Engine',
                    'UnJS Utils',
                    'Nuxt Modules',
                ],
            },
            {
                title: 'Data & ORM',
                tools: [
                    'Prisma',
                    'Sequelize',
                    'MongoDB',
                    'PostgreSQL',
                    'Firebase',
                    'Supabase',
                ],
            },
            {
                title: 'Styling & UI',
                tools: [
                    'Tailwind CSS',
                    'Bootstrap Vue',
                    'Vuetify',
                    'Element Plus',
                    'Pinia UI',
                    'shadcn/ui',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Pinia',
                    'Vuex',
                    'Composition API',
                    'Context',
                    'Zustand',
                    'TanStack Query',
                ],
            },
            {
                title: 'Authentication',
                tools: [
                    'NuxtAuth',
                    'Auth0',
                    'Clerk',
                    'Firebase Auth',
                    'Supabase Auth',
                    'Custom Auth',
                ],
            },
            {
                title: 'Content & CMS',
                tools: [
                    'Nuxt Content',
                    'Contentful',
                    'Strapi',
                    'Sanity',
                    'Notion',
                    'Markdown',
                ],
            },
            {
                title: 'Deployment & Hosting',
                tools: [
                    'Vercel',
                    'Netlify',
                    'AWS',
                    'Docker',
                    'Self-hosted',
                    'GitHub Pages',
                ],
            },
            {
                title: 'Developer Tools',
                tools: [
                    'VS Code',
                    'ESLint',
                    'Prettier',
                    'Nuxt DevTools',
                    'Git',
                    'npm/pnpm',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Nuxt Expertise',
                description:
                    'Our team includes experienced Nuxt developers with production applications at scale.',
            },
            {
                title: 'Full-Stack Capability',
                description:
                    'Build both frontend and backend with Nuxt server routes and middleware.',
            },
            {
                title: 'Vue Community',
                description:
                    'Leverage Vue\'s friendly community and ecosystem for rapid development.',
            },
            {
                title: 'Intuitive Framework',
                description:
                    'Nuxt\'s convention-over-configuration approach reduces decision fatigue.',
            },
            {
                title: 'Performance-First',
                description:
                    'Built-in optimization features ensure excellent Core Web Vitals.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration.',
            },
        ],
        keyFacts: [
            'Nuxt is used by 100K+ developers building with Vue',
            'Nuxt 3 brings modern Vue 3 features with excellent DX',
            'Server-side rendering improves SEO and initial load time',
            'Static generation enables deploying to CDNs for maximum performance',
            'Nitro Engine powers fast API development',
            'File-based routing provides excellent developer experience',
            'Unified stack: frontend, backend, and deployment all in one',
            'Large ecosystem with official modules and community packages',
        ],
        faqs: [
            {
                question: 'What is Nuxt.js and why use it?',
                answer:
                    'Nuxt.js is a Vue framework for production enabling SSR, SSG, and API routes. It\'s chosen for rapid development, excellent DX, SEO optimization, and full-stack capability.',
            },
            {
                question: 'Can we build APIs with Nuxt?',
                answer:
                    'Yes, using Nitro server routes. You can build complete REST and GraphQL APIs within Nuxt application.',
            },
            {
                question: 'How does Nuxt compare to Next.js?',
                answer:
                    'Nuxt is for Vue developers, Next.js is for React developers. Both provide SSR, SSG, and full-stack capability. Choose based on frontend framework preference.',
            },
            {
                question: 'Can we migrate from Vue 2 to Nuxt 3?',
                answer:
                    'Yes, though it involves upgrading to Vue 3. Nuxt provides migration guides and tools to assist the process.',
            },
            {
                question: 'How do we deploy Nuxt applications?',
                answer:
                    'Deploy to Vercel, Netlify, AWS, Azure, Docker, or any Node.js host. Vercel provides optimal Nuxt deployment experience.',
            },
            {
                question: 'Is Nuxt suitable for real-time applications?',
                answer:
                    'Yes, with WebSockets or server-sent events. Nuxt handles real-time features alongside traditional rendering.',
            },
            {
                question: 'How long does Nuxt development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 2-4 weeks. Medium apps: 2-3 months. Complex apps: 3-12 months.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Platform with Nuxt',
                description:
                    'Built e-commerce platform with Nuxt SSG for maximum performance, 85+ Lighthouse scores.',
                link: '#',
            },
            {
                title: 'Content Marketing Site',
                description:
                    'Created dynamic content platform with Nuxt Content and Markdown, optimized for SEO.',
                link: '#',
            },
            {
                title: 'SaaS Application',
                description:
                    'Developed SaaS with Nuxt full-stack, authentication, and real-time features.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Vue.js',
            'TypeScript',
            'Prisma',
            'Tailwind CSS',
            'Vercel',
            'Pinia',
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
