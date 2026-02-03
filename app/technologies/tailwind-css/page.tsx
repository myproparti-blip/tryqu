'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Palette } from 'lucide-react';

export default function TailwindCSSTechPage() {
    const techData = {
        name: 'Tailwind CSS',
        emoji: '🎨',
        icon: <Palette className="w-6 h-6" />,
        shortDescription:
            'Build beautiful UIs with Tailwind CSS. Our Tailwind experts deliver responsive, maintainable designs with utility-first CSS.',
        heroTitle: 'Utility-First CSS for Rapid UI Development',
        heroSubtitle:
            'Tailwind CSS is a utility-first CSS framework enabling rapid UI development without leaving your HTML. Our expert designers and developers leverage Tailwind to build beautiful, responsive interfaces. From component libraries to complete design systems, we deliver Tailwind expertise for modern web applications.',
        heroImage: '/images/tech-tailwind-css-rich.svg',
        heroImageAlt: 'Tailwind CSS - Utility-First CSS Framework',
        services: [
            {
                title: 'UI Component Development',
                description:
                    'Build reusable UI components using Tailwind utility classes with proper abstraction.',
                details:
                    'Component composition, class organization, and maintainable component patterns.',
            },
            {
                title: 'Responsive Design',
                description:
                    'Create responsive layouts that work seamlessly across all device sizes.',
                details:
                    'Mobile-first design, responsive variants, and media query management.',
            },
            {
                title: 'Design System Creation',
                description:
                    'Build comprehensive design systems using Tailwind for consistent branding.',
                details:
                    'Color palettes, typography scales, spacing systems, and custom configuration.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Tailwind CSS output for production with minimal bundle size.',
                details:
                    'PurgeCSS, JIT compilation, and critical CSS extraction.',
            },
            {
                title: 'Custom Plugin Development',
                description:
                    'Create custom Tailwind plugins for project-specific utility classes.',
                details:
                    'Plugin architecture, utility creation, and theme extension.',
            },
            {
                title: 'Animation & Interactivity',
                description:
                    'Implement smooth animations and interactive features using Tailwind.',
                details:
                    'Transitions, transforms, animations, and accessibility considerations.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Tailwind Ecosystem',
                tools: [
                    'Tailwind CSS',
                    'Tailwind CLI',
                    'PostCSS',
                    'PurgeCSS',
                    'JIT Compiler',
                    'Tailwind UI',
                ],
            },
            {
                title: 'UI Component Libraries',
                tools: [
                    'Headless UI',
                    'shadcn/ui',
                    'Daisy UI',
                    'Tailwind UI',
                    'Flowbite',
                    'daisyUI',
                ],
            },
            {
                title: 'Icons & Assets',
                tools: [
                    'Heroicons',
                    'Font Awesome',
                    'Feather Icons',
                    'Tabler Icons',
                    'Material Icons',
                    'Ionicons',
                ],
            },
            {
                title: 'Design Tools Integration',
                tools: [
                    'Figma',
                    'Sketch',
                    'Adobe XD',
                    'Penpot',
                    'Framer',
                    'Webflow',
                ],
            },
            {
                title: 'Framework Integration',
                tools: [
                    'React',
                    'Vue.js',
                    'Next.js',
                    'Nuxt.js',
                    'SvelteKit',
                    'Astro',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'VS Code',
                    'Prettier',
                    'ESLint',
                    'Webpack',
                    'Vite',
                    'PostCSS',
                ],
            },
            {
                title: 'Animation & Interaction',
                tools: [
                    'Framer Motion',
                    'AOS',
                    'GSAP',
                    'Animate.css',
                    'Tailwind Animations',
                    'CSS Transitions',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Playwright',
                    'Cypress',
                    'Percy',
                    'Chromatic',
                    'Visual Regression',
                    'Accessibility Testing',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Tailwind Expertise',
                description:
                    'Our team includes experienced Tailwind developers skilled in utility-first workflow and best practices.',
            },
            {
                title: 'Rapid Development',
                description:
                    'Build responsive UIs faster using Tailwind utilities instead of writing custom CSS.',
            },
            {
                title: 'Consistency',
                description:
                    'Maintain design consistency across projects using Tailwind configuration and design tokens.',
            },
            {
                title: 'Responsive Design',
                description:
                    'Create mobile-first responsive designs with minimal effort using Tailwind breakpoints.',
            },
            {
                title: 'Customization',
                description:
                    'Customize Tailwind configuration for brand colors, fonts, and project-specific utilities.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on design implementation.',
            },
        ],
        keyFacts: [
            'Tailwind CSS is used by 37%+ of web developers globally',
            'Utility-first approach enables rapid styling without writing custom CSS',
            'JIT compiler generates CSS on-demand, reducing output size significantly',
            'Excellent responsive design support with mobile-first approach',
            'Large ecosystem of UI components and plugins',
            'Strong community with thousands of templates and resources',
            'Works with any frontend framework (React, Vue, Angular, etc.)',
            'Trusted by companies like Vercel, GitHub, and Shopify',
        ],
        faqs: [
            {
                question: 'What is Tailwind CSS and why use it?',
                answer:
                    'Tailwind CSS is a utility-first CSS framework providing pre-built utility classes. It\'s chosen for rapid development, consistency, responsive design, and eliminating need to write custom CSS.',
            },
            {
                question: 'How is Tailwind different from Bootstrap?',
                answer:
                    'Bootstrap provides pre-built components. Tailwind provides utility classes for building custom designs. Tailwind offers more flexibility and avoids "same design everywhere" problem.',
            },
            {
                question: 'Can we use Tailwind with React/Vue/Angular?',
                answer:
                    'Yes, absolutely. Tailwind works with any frontend framework. It\'s framework-agnostic and enhances component development.',
            },
            {
                question: 'Does Tailwind increase bundle size?',
                answer:
                    'No. Modern Tailwind with JIT compiler generates only CSS classes you use. Combined with minification, bundle size is minimal.',
            },
            {
                question: 'How do we maintain design consistency?',
                answer:
                    'Using Tailwind configuration for color palettes, typography, spacing, and custom utilities. This ensures consistency across entire project.',
            },
            {
                question: 'Can we create a design system with Tailwind?',
                answer:
                    'Yes. Many companies use Tailwind as foundation for design systems. Configure tokens, create component library, and document patterns.',
            },
            {
                question: 'How long does Tailwind implementation take?',
                answer:
                    'Timeline depends on project scope. Simple UI: 1-2 weeks. Design system: 4-8 weeks. Enterprise system: 2-3 months.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise Design System',
                description:
                    'Built comprehensive design system using Tailwind for 30+ developers, reducing design time by 40%.',
                link: '#',
            },
            {
                title: 'Responsive E-Commerce Platform',
                description:
                    'Developed high-performance e-commerce UI with Tailwind, achieving excellent mobile experience.',
                link: '#',
            },
            {
                title: 'Component Library with Storybook',
                description:
                    'Created documented component library using Tailwind and Storybook for design consistency.',
                link: '#',
            },
        ],
        relatedTechs: [
            'React',
            'Next.js',
            'Vue.js',
            'Nuxt.js',
            'Headless UI',
            'Figma',
            'Web Design',
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
