'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function SvelteTechPage() {
    const techData = {
        name: 'Svelte',
        emoji: '🔥',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription: 'Compiler-based web framework with minimal runtime overhead. Expert Svelte development for efficient, interactive UIs.',
        heroTitle: 'Build Lightning-Fast Web Apps with Svelte',
        heroSubtitle: 'Svelte is a revolutionary compiler-based framework that eliminates the virtual DOM and produces optimized JavaScript. Unlike traditional frameworks, Svelte shifts work from the browser to the compiler, resulting in smaller bundle sizes, faster performance, and more intuitive reactivity.',
        heroImage: '/images/tech-svelte-rich.svg',
        heroImageAlt: 'Svelte - Compiler Framework',
        services: [
            {
                title: 'Component Development',
                description: 'Build reactive components with Svelte\'s intuitive syntax that compiles to efficient JavaScript.',
                details: 'Create components with built-in reactivity, animations, and transitions without the overhead of a virtual DOM.',
            },
            {
                title: 'SvelteKit Application Development',
                description: 'Develop full-stack applications with SvelteKit for optimal performance and developer experience.',
                details: 'Leverage SvelteKit for routing, server-side rendering, static generation, and API routes.',
            },
            {
                title: 'State Management',
                description: 'Implement reactive state management with Svelte stores and context for application data flow.',
                details: 'Build scalable state management using writable, readable, and derived stores with TypeScript support.',
            },
            {
                title: 'Animation & Interactions',
                description: 'Create smooth animations and interactive experiences with Svelte\'s built-in animation system.',
                details: 'Leverage transition directives, animate directives, and motion stores for fluid user interactions.',
            },
            {
                title: 'TypeScript Integration',
                description: 'Build type-safe Svelte applications with comprehensive TypeScript support.',
                details: 'Use TypeScript for components, stores, and API routes with full IDE autocomplete and error checking.',
            },
            {
                title: 'Deployment & Performance',
                description: 'Optimize and deploy Svelte applications for maximum performance and minimal bundle size.',
                details: 'Implement lazy loading, code splitting, and deploy to various platforms with excellent performance metrics.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Framework',
                tools: ['Svelte', 'SvelteKit', 'Vite', 'Svelte Compiler', 'Component Format'],
            },
            {
                title: 'State Management',
                tools: ['Svelte Stores', 'Context API', 'Pinia', 'Zustand', 'Jotai'],
            },
            {
                title: 'UI Libraries',
                tools: ['Skeleton UI', 'DaisyUI', 'Flowbite Svelte', 'Carbon Components Svelte', 'shadcn-svelte'],
            },
            {
                title: 'Development Tools',
                tools: ['Vite', 'Rollup', 'esbuild', 'VS Code Extensions', 'Svelte DevTools'],
            },
            {
                title: 'Testing & Quality',
                tools: ['Vitest', 'Playwright', 'Testing Library', 'Prettier', 'ESLint'],
            },
            {
                title: 'Forms & Validation',
                tools: ['SvelteKit Forms', 'Zod', 'Yup', 'Felte', 'Formsnap'],
            },
            {
                title: 'Animation Libraries',
                tools: ['Svelte Transitions', 'GSAP', 'Framer Motion', 'React Spring', 'Motion'],
            },
            {
                title: 'Deployment Platforms',
                tools: ['Vercel', 'Netlify', 'AWS', 'Docker', 'Node.js Servers'],
            },
        ],
        whyChoose: [
            {
                title: 'Exceptional Performance',
                description: 'Svelte produces the smallest bundle sizes and fastest applications by moving compilation to build time.',
            },
            {
                title: 'Developer Experience',
                description: 'Intuitive, readable syntax that feels natural. Less boilerplate than traditional frameworks.',
            },
            {
                title: 'True Reactivity',
                description: 'Svelte\'s reactive declarations make state management simple without the complexity of immutability.',
            },
            {
                title: 'Minimal Framework Overhead',
                description: 'No virtual DOM, no runtime overhead. Svelte ships only the code your app actually needs.',
            },
            {
                title: 'Animation & Transitions',
                description: 'Built-in animation and transition directives make creating interactive UIs effortless.',
            },
            {
                title: 'Full-Stack Capability',
                description: 'SvelteKit enables full-stack development with server-side rendering, APIs, and efficient data loading.',
            },
        ],
        keyFacts: [
            'Svelte is a compiler that transforms component code into optimal JavaScript at build time',
            'No virtual DOM means Svelte produces smaller bundle sizes and faster performance than traditional frameworks',
            'Reactive assignments with simple syntax: change a variable and the UI updates automatically',
            'Built-in support for animations, transitions, and two-way data binding without additional libraries',
            'SvelteKit provides server-side rendering, static site generation, and API routes in a unified framework',
            'Svelte stores provide simple, reactive state management without complex boilerplate',
            'Svelte has one of the highest developer satisfaction ratings in web framework surveys',
            'TypeScript support is first-class with excellent IDE integration and type checking',
        ],
        faqs: [
            {
                question: 'How is Svelte different from React or Vue?',
                answer: 'Svelte is a compiler, not a runtime framework. It produces smaller bundles, better performance, and more intuitive reactivity. React and Vue use virtual DOM at runtime. Svelte shifts work to build time.',
            },
            {
                question: 'Is Svelte production-ready?',
                answer: 'Yes, Svelte is production-ready and used by many companies. SvelteKit is the recommended full-stack framework. Both have excellent community support and documentation.',
            },
            {
                question: 'Can I use Svelte for mobile development?',
                answer: 'Svelte itself targets web browsers. For mobile, consider SvelteKit for progressive web apps, or use frameworks like Native Script or Ionic that support Svelte.',
            },
            {
                question: 'What is SvelteKit?',
                answer: 'SvelteKit is the official full-stack framework built on Svelte. It provides routing, SSR, static generation, API routes, and more. It\'s similar to Next.js for React.',
            },
            {
                question: 'Is there a large ecosystem for Svelte?',
                answer: 'Svelte\'s ecosystem is smaller than React\'s but rapidly growing. You\'ll find UI libraries, state management, testing tools, and integrations. Most JavaScript libraries work with Svelte.',
            },
        ],
        relatedTechs: ['SvelteKit', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vue', 'React', 'Web Development'],
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
