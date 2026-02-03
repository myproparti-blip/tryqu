'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function ReactTechPage() {
    const techData = {
        name: 'React',
        emoji: '⚛️',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Scale your React development with nearshore talent. Our React development services power dozens of active engagements.',
        heroTitle: 'Scale Your React Development with Expert Nearshore Talent',
        heroSubtitle:
            "Our React development services already power dozens of active engagements. We typically land our teams within 2 weeks, so you can start shipping top quality software, fast. From frontend applications to complex state management, we deliver React expertise across the full spectrum of modern web development.",
        heroImage: '/images/tech-react-rich.svg',
        heroImageAlt: 'React JavaScript Library - Interactive UI Development',
        services: [
            {
                title: 'Custom React Application Development',
                description:
                    'Build modern, scalable React applications tailored to your business needs with component-driven architecture and best practices.',
                details:
                    'Using React Hooks, Context API, and modern patterns, we create responsive, performant applications that scale with your business.',
            },
            {
                title: 'Next.js Full-Stack Development',
                description:
                    'Develop full-stack applications with Next.js combining frontend and backend in a unified framework for optimal performance.',
                details:
                    'Leveraging server-side rendering, API routes, and static generation for production-ready applications with SEO optimization.',
            },
            {
                title: 'State Management & Architecture',
                description:
                    'Implement robust state management solutions with Redux, Zustand, or Context API for complex application requirements.',
                details:
                    'Expert guidance on architectural decisions, middleware implementation, and testing strategies for maintainable codebases.',
            },
            {
                title: 'React Performance Optimization',
                description:
                    'Optimize React applications for speed and efficiency, reducing load times and improving user experience across all devices.',
                details:
                    'Code splitting, lazy loading, memoization, and profiling to ensure your React apps perform at peak efficiency.',
            },
            {
                title: 'Component Library Development',
                description:
                    'Create reusable, well-documented component libraries using Storybook, TypeScript, and design systems.',
                details:
                    'Build scalable design systems with comprehensive documentation, testing, and version management.',
            },
            {
                title: 'React Native Mobile Development',
                description:
                    'Extend your React expertise to mobile with React Native for iOS and Android applications.',
                details:
                    'Shared codebase, native performance, and seamless integration with platform-specific features.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Frameworks & Libraries',
                tools: [
                    'React',
                    'Next.js',
                    'React Router',
                    'React Query',
                    'React Hook Form',
                    'SWR',
                    'Remix',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Redux',
                    'Redux Toolkit',
                    'Zustand',
                    'Jotai',
                    'Recoil',
                    'MobX',
                    'Context API',
                ],
            },
            {
                title: 'UI & Styling',
                tools: [
                    'Tailwind CSS',
                    'Styled Components',
                    'Emotion',
                    'Material-UI',
                    'Chakra UI',
                    'Ant Design',
                    'shadcn/ui',
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
                    'Enzyme',
                ],
            },
            {
                title: 'Development Tools',
                tools: ['Vite', 'Webpack', 'Turbopack', 'Create React App', 'Storybook'],
            },
            {
                title: 'Data & APIs',
                tools: [
                    'GraphQL',
                    'Apollo Client',
                    'Urql',
                    'Axios',
                    'Fetch API',
                    'REST APIs',
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
                    'Jenkins',
                ],
            },
            {
                title: 'Deployment & Hosting',
                tools: [
                    'Vercel',
                    'Netlify',
                    'AWS S3',
                    'CloudFlare',
                    'Docker',
                    'Kubernetes',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Expert React Developers',
                description:
                    'Our team includes certified React experts with years of production experience across diverse industries and scale.',
            },
            {
                title: 'Performance-First Approach',
                description:
                    'We optimize for speed, scalability, and user experience from day one, not as an afterthought.',
            },
            {
                title: 'Modern Tech Stack',
                description:
                    'We stay current with React ecosystem evolution, using latest tools and best practices.',
            },
            {
                title: 'Full-Stack Capability',
                description:
                    'From frontend to backend integration, we handle complete application development end-to-end.',
            },
            {
                title: 'Timezone Aligned',
                description:
                    'Nearshore teams in LATAM ensure overlap with your business hours for seamless collaboration.',
            },
            {
                title: 'Scalable Engagement',
                description:
                    'Quickly scale teams up or down based on project needs without lengthy hiring processes.',
            },
        ],
        keyFacts: [
            'React is used by 40%+ of web developers and backed by Meta (Facebook)',
            'Component-based architecture enables reusability and maintainability at scale',
            'Virtual DOM provides excellent performance for complex user interfaces',
            'Large ecosystem with thousands of third-party libraries and tools',
            'Strong community support with extensive documentation and resources',
            'Perfect for SPAs, static sites, and progressive web applications',
            'TypeScript integration ensures type safety in large applications',
            'Server components (Next.js) enable hybrid rendering strategies',
        ],
        faqs: [
            {
                question: 'What is React and why is it popular?',
                answer:
                    'React is a JavaScript library for building user interfaces with reusable components. It\'s popular because it simplifies UI development, enables code reuse, has excellent performance with virtual DOM, and has massive community support. React powers applications at scale for companies like Netflix, Airbnb, and Facebook.',
            },
            {
                question: 'What are React development services?',
                answer:
                    'React development services include building custom applications, migrating existing projects to React, optimizing performance, developing component libraries, and providing ongoing maintenance and support.',
            },
            {
                question: 'Can React be used for full-stack development?',
                answer:
                    'Yes, with Next.js. Next.js enables full-stack development combining React frontend with Node.js backend in a unified framework, handling routing, API routes, databases, and more.',
            },
            {
                question: 'What makes React cutting-edge for web development?',
                answer:
                    'React stays cutting-edge through continuous innovation including React Server Components, concurrent rendering, automatic batching, improved developer experience, and seamless integration with modern tools like Vercel and Tailwind CSS.',
            },
            {
                question: 'How long does it take to build a React application?',
                answer:
                    'Timeline depends on complexity. Simple applications: 2-4 weeks. Medium applications: 2-3 months. Complex enterprise applications: 3-12 months. Our team typically onboards within 2 weeks to accelerate development.',
            },
            {
                question: 'What are React Hooks and why are they important?',
                answer:
                    'React Hooks are functions that let you use state and other React features in functional components. They replaced class components for most use cases, enabling cleaner, more reusable code with better separation of concerns.',
            },
            {
                question: 'How does Next.js improve upon vanilla React?',
                answer:
                    'Next.js adds server-side rendering, static generation, API routes, built-in optimization, and file-based routing to React. It enables full-stack development and significantly improves performance and SEO.',
            },
            ],
            caseStudies: [
            {
                title: 'E-Commerce Platform Scale-Up',
                description:
                    'Built high-performance React e-commerce platform with Next.js, handling 1M+ monthly users with 2s load times.',
                link: '#',
            },
            {
                title: 'State Management Architecture',
                description:
                    'Implemented complex Redux store architecture for fintech application with real-time data synchronization.',
                link: '#',
            },
            {
                title: 'Component Library Development',
                description:
                    'Created and published comprehensive React component library with Storybook, used across 50+ projects.',
                link: '#',
            },
            ],
        relatedTechs: [
            'Next.js',
            'TypeScript',
            'Node.js',
            'GraphQL',
            'Tailwind CSS',
            'React Native',
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
