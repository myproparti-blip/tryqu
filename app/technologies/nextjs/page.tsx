'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function NextJSTechPage() {
    const techData = {
        name: 'Next.js',
        emoji: '⚡',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build full-stack React applications with Next.js. Our Next.js developers deliver production-grade web applications with nearshore expertise.',
        heroTitle: 'Full-Stack React Development with Next.js',
        heroSubtitle:
            'Next.js is the React framework for production enabling server-side rendering, static generation, and API routes. Our expert developers leverage Next.js to build performant, SEO-optimized full-stack applications. From startups to Fortune 500 companies, we deliver scalable web solutions using Next.js.',
        heroImage: '/images/tech-nextjs-rich.svg',
        heroImageAlt: 'Next.js - React Framework for Production',
        services: [
            {
                title: 'Next.js Application Development',
                description:
                    'Build full-stack applications with Next.js, combining React frontend with Node.js backend in unified framework.',
                details:
                    'Leveraging server components, API routes, and file-based routing for rapid development and optimal performance.',
            },
            {
                title: 'Server-Side Rendering (SSR)',
                description:
                    'Implement server-side rendering for enhanced SEO and improved initial page load performance.',
                details:
                    'Dynamic rendering, cache control, and optimization strategies for production-grade SSR.',
            },
            {
                title: 'Static Site Generation (SSG)',
                description:
                    'Generate static HTML pages at build time for maximum performance and reduced server load.',
                details:
                    'Incremental Static Regeneration (ISR), fallbacks, and revalidation strategies.',
            },
            {
                title: 'API Route Development',
                description:
                    'Build RESTful and GraphQL APIs using Next.js API routes for backend functionality.',
                details:
                    'Request handling, authentication, database integration, and middleware configuration.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Next.js applications for speed, bundle size, and Core Web Vitals.',
                details:
                    'Image optimization, code splitting, lazy loading, and monitoring with Web Vitals.',
            },
            {
                title: 'Database & ORM Integration',
                description:
                    'Integrate databases with ORMs like Prisma for type-safe database access.',
                details:
                    'Database schema design, migrations, and optimized queries for performance.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Next.js Framework',
                tools: [
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Vercel CLI',
                    'Image Optimization',
                    'Font Optimization',
                ],
            },
            {
                title: 'Data & ORM',
                tools: [
                    'Prisma',
                    'Sequelize',
                    'TypeORM',
                    'MongoDB',
                    'PostgreSQL',
                    'Firebase',
                ],
            },
            {
                title: 'Styling & UI',
                tools: [
                    'Tailwind CSS',
                    'Styled Components',
                    'CSS Modules',
                    'shadcn/ui',
                    'Radix UI',
                    'Headless UI',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Zustand',
                    'Redux',
                    'Recoil',
                    'Context API',
                    'SWR',
                    'TanStack Query',
                ],
            },
            {
                title: 'Authentication',
                tools: [
                    'NextAuth.js',
                    'Auth0',
                    'Clerk',
                    'Firebase Auth',
                    'Supabase Auth',
                    'JWT',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Jest',
                    'Vitest',
                    'React Testing Library',
                    'Cypress',
                    'Playwright',
                    'Lighthouse',
                ],
            },
            {
                title: 'Deployment & Hosting',
                tools: [
                    'Vercel',
                    'Netlify',
                    'AWS',
                    'Docker',
                    'GitHub Pages',
                    'Self-hosted',
                ],
            },
            {
                title: 'Developer Tools',
                tools: [
                    'VS Code',
                    'ESLint',
                    'Prettier',
                    'Git',
                    'GitHub',
                    'npm/yarn',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Next.js Expertise',
                description:
                    'Our team includes experienced Next.js developers with production applications deployed on Vercel and major cloud platforms.',
            },
            {
                title: 'Full-Stack Capability',
                description:
                    'Build both frontend and backend with Next.js, eliminating need for separate API server in many cases.',
            },
            {
                title: 'SEO Optimization',
                description:
                    'Leverage SSR and SSG for excellent SEO performance, critical for marketing and visibility.',
            },
            {
                title: 'Performance-First',
                description:
                    'Built-in optimization features ensure applications meet Core Web Vitals and performance benchmarks.',
            },
            {
                title: 'Rapid Development',
                description:
                    'File-based routing, API routes, and hot reloading enable rapid development cycles.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Next.js is the most popular React framework with 2M+ weekly npm downloads',
            'Powers websites for Netflix, TikTok, Hulu, and other major companies',
            'Server Components (React 18) enable server-side data fetching without client overhead',
            'Image Optimization automatically serves optimized images for different devices',
            'Built-in TypeScript support with excellent DX',
            'Vercel Platform provides seamless deployment with Git integration',
            'App Router provides modern file-based routing with better performance',
            'Middleware support enables custom request handling and authentication',
        ],
        faqs: [
            {
                question: 'What is Next.js and why use it?',
                answer:
                    'Next.js is a React framework for production enabling server-side rendering, static generation, and API routes. It\'s chosen for SEO optimization, performance, full-stack capability, and excellent developer experience.',
            },
            {
                question: 'Can we build APIs with Next.js?',
                answer:
                    'Yes, using API routes. You can build complete REST and GraphQL APIs within Next.js application, eliminating need for separate backend server.',
            },
            {
                question: 'What\'s the difference between SSR and SSG?',
                answer:
                    'SSR (Server-Side Rendering) generates pages on each request. SSG (Static Site Generation) generates pages at build time. SSG is faster; use SSR when content changes frequently.',
            },
            {
                question: 'How does Next.js optimize performance?',
                answer:
                    'Through Image Optimization, automatic code splitting, lazy loading, and font optimization. Built-in features make Core Web Vitals optimization straightforward.',
            },
            {
                question: 'Can we deploy Next.js anywhere?',
                answer:
                    'Yes. While Vercel is optimized for Next.js, you can deploy to AWS, Azure, Google Cloud, Docker, or any Node.js server with proper configuration.',
            },
            {
                question: 'Is Next.js suitable for real-time applications?',
                answer:
                    'Yes, with WebSockets or server-sent events. Next.js can handle real-time features alongside traditional page rendering.',
            },
            {
                question: 'How long does Next.js development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 2-4 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Platform with Next.js',
                description:
                    'Built high-performance e-commerce platform using Next.js, achieving 90+ Lighthouse scores and 40% faster page loads.',
                link: '#',
            },
            {
                title: 'SaaS Application Full-Stack',
                description:
                    'Developed SaaS application with Next.js backend API routes, Prisma ORM, and React frontend for 50K+ users.',
                link: '#',
            },
            {
                title: 'Content-Heavy Marketing Site',
                description:
                    'Created dynamic content platform using Next.js SSG and ISR, optimizing for SEO and performance.',
                link: '#',
            },
        ],
        relatedTechs: [
            'React',
            'TypeScript',
            'Prisma',
            'Tailwind CSS',
            'Vercel',
            'GraphQL',
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
