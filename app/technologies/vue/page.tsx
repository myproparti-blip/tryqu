'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function VueTechPage() {
    const techData = {
        name: 'Vue.js',
        emoji: '💚',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build progressive web applications with Vue.js. Our Vue developers deliver responsive, maintainable solutions with nearshore expertise.',
        heroTitle: 'Progressive Vue.js Development with Nearshore Expertise',
        heroSubtitle:
            'Vue.js powers innovative web applications with its progressive framework approach. We deliver expert Vue development services with composition API mastery, state management excellence, and architectural expertise. From building scalable SPAs to progressive web apps, we provide comprehensive Vue expertise across the full spectrum of modern web development.',
        heroImage: '/images/tech-vue-rich.svg',
        heroImageAlt: 'Vue.js - Progressive JavaScript Framework',
        services: [
            {
                title: 'Custom Vue.js Application Development',
                description:
                    'Build modern, responsive Vue applications tailored to your needs with component-based architecture and best practices.',
                details:
                    'Using Vue 3 Composition API, we create maintainable applications with proper state management and comprehensive testing.',
            },
            {
                title: 'Nuxt.js Full-Stack Development',
                description:
                    'Develop full-stack applications with Nuxt.js combining frontend and backend in a unified Vue framework.',
                details:
                    'Leveraging server-side rendering, static generation, and API routes for production-ready applications with SEO optimization.',
            },
            {
                title: 'Vue State Management',
                description:
                    'Implement robust state management solutions with Pinia or Vuex for complex application requirements.',
                details:
                    'Expert guidance on architectural decisions, store organization, and testing strategies for scalable applications.',
            },
            {
                title: 'Vue Performance Optimization',
                description:
                    'Optimize Vue applications for speed and efficiency, reducing load times and improving user experience.',
                details:
                    'Code splitting, lazy loading, component optimization, and performance profiling for peak efficiency.',
            },
            {
                title: 'Component Library Development',
                description:
                    'Create reusable Vue component libraries using Storybook and design system principles.',
                details:
                    'Build scalable design systems with comprehensive documentation, testing, and version management.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Implement comprehensive testing strategies with Vitest, Vue Test Utils, and Cypress.',
                details:
                    'Unit testing, integration testing, and e2e testing for robust, maintainable applications.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Vue & Frameworks',
                tools: [
                    'Vue 3',
                    'Nuxt.js',
                    'Vue Router',
                    'Pinia',
                    'Composition API',
                    'Vite',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Pinia',
                    'Vuex',
                    'VueX Store',
                    'Composition API',
                    'ref',
                    'reactive',
                ],
            },
            {
                title: 'UI & Styling',
                tools: [
                    'Tailwind CSS',
                    'Vuetify',
                    'Element Plus',
                    'Bootstrap Vue',
                    'Ant Design Vue',
                    'Vue Material',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Vitest',
                    'Jest',
                    'Vue Test Utils',
                    'Cypress',
                    'Playwright',
                    'Testing Library',
                ],
            },
            {
                title: 'Data & APIs',
                tools: [
                    'GraphQL',
                    'Apollo Client',
                    'Axios',
                    'Fetch API',
                    'REST APIs',
                    'TanStack Query',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Vite',
                    'Webpack',
                    'Eslint',
                    'Prettier',
                    'Vue DevTools',
                    'Storybook',
                ],
            },
            {
                title: 'Deployment & Hosting',
                tools: [
                    'Vercel',
                    'Netlify',
                    'AWS S3',
                    'Docker',
                    'Kubernetes',
                    'GitHub Pages',
                ],
            },
            {
                title: 'Version Control & CI/CD',
                tools: [
                    'Git',
                    'GitHub',
                    'GitLab',
                    'GitHub Actions',
                    'GitLab CI',
                    'CircleCI',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Vue Expertise & Certification',
                description:
                    'Our team includes expert Vue developers with extensive production experience across diverse projects.',
            },
            {
                title: 'Progressive Approach',
                description:
                    'Leverage Vue\'s progressive framework design for flexible, scalable applications from simple to complex.',
            },
            {
                title: 'Performance-First Development',
                description:
                    'We optimize for speed and efficiency from the start, leveraging Vite and modern build tools.',
            },
            {
                title: 'Full-Stack Capability',
                description:
                    'From Vue frontend to Nuxt full-stack development, we handle complete application development.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
            {
                title: 'Modern Best Practices',
                description:
                    'Stay current with Vue 3, Composition API, and latest ecosystem tools for cutting-edge development.',
            },
        ],
        keyFacts: [
            'Vue.js is the most loved frontend framework by developers according to surveys',
            'Progressive framework allows incremental adoption from simple enhancements to full SPAs',
            'Composition API provides better code organization and reusability compared to Options API',
            'Nuxt.js extends Vue with server-side rendering and full-stack capabilities',
            'Excellent documentation and gentle learning curve compared to React and Angular',
            'Thriving ecosystem with Pinia for state management and Vite for blazing-fast builds',
            'Used by companies like Alibaba, Xiaomi, GitLab, and WordPress.com',
            'Strong community support with growing popularity in the JavaScript ecosystem',
        ],
        faqs: [
            {
                question: 'What is Vue.js and why choose it?',
                answer:
                    'Vue.js is a progressive JavaScript framework for building user interfaces. It\'s chosen for its gentle learning curve, excellent documentation, perfect balance between power and simplicity, and rapidly growing ecosystem.',
            },
            {
                question: 'What\'s the difference between Vue, React, and Angular?',
                answer:
                    'Vue offers a middle ground: easier than Angular with more flexibility than React. Vue uses single-file components with integrated HTML/CSS/JS. It\'s perfect for teams wanting productivity without sacrificing flexibility.',
            },
            {
                question: 'What is the Vue Composition API?',
                answer:
                    'The Composition API (Vue 3) provides a function-based way to organize component logic. It\'s superior to Options API for code reuse, type safety, and complex components, bringing Vue closer to React Hooks.',
            },
            {
                question: 'Can Vue handle large-scale applications?',
                answer:
                    'Absolutely. With Nuxt.js, Pinia state management, proper architecture, and testing, Vue scales effectively. Companies like Alibaba and GitLab run large applications on Vue.',
            },
            {
                question: 'Is Vue suitable for enterprise applications?',
                answer:
                    'Yes. Modern Vue with TypeScript support, comprehensive testing, state management, and mature tooling supports enterprise-grade applications with proper architecture and governance.',
            },
            {
                question: 'What is Nuxt.js and how does it improve Vue?',
                answer:
                    'Nuxt.js is a full-stack framework for Vue providing server-side rendering, static generation, API routes, and built-in optimization. It enables full-stack development and significantly improves performance and SEO.',
            },
            {
                question: 'How long does Vue development take?',
                answer:
                    'Timeline depends on complexity. Simple applications: 2-4 weeks. Medium applications: 2-3 months. Complex enterprise applications: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Platform with Nuxt.js',
                description:
                    'Built high-performance e-commerce platform using Nuxt.js with server-side rendering, improving SEO and load times by 50%.',
                link: '#',
            },
            {
                title: 'Real-Time Dashboard Application',
                description:
                    'Developed interactive dashboard with Vue 3 Composition API and WebSocket integration for real-time data updates.',
                link: '#',
            },
            {
                title: 'Component Library at Scale',
                description:
                    'Created comprehensive Vue component library with Storybook, used across 30+ internal projects with consistent design system.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Nuxt.js',
            'TypeScript',
            'Node.js',
            'Pinia',
            'Tailwind CSS',
            'GraphQL',
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
