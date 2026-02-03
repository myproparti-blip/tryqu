'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function AngularTechPage() {
    const techData = {
        name: 'Angular',
        emoji: '🅰️',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build enterprise-grade applications with Angular. Our Angular development services deliver scalable, maintainable solutions with nearshore expertise.',
        heroTitle: 'Enterprise-Grade Angular Development with Nearshore Expertise',
        heroSubtitle:
            'Angular powers mission-critical applications at enterprise scale. We deliver expert Angular development services with TypeScript mastery, RxJS proficiency, and architectural excellence. From building complex SPAs to modernizing legacy applications, we provide comprehensive Angular expertise across the full spectrum of enterprise web development.',
        heroImage: '/images/tech-angular-rich.svg',
        heroImageAlt: 'Angular - Enterprise-Grade Framework',
        services: [
            {
                title: 'Custom Angular Application Development',
                description:
                    'Build robust, scalable Angular applications tailored to your enterprise needs with component-based architecture and SOLID principles.',
                details:
                    'Using Angular best practices, we create maintainable applications with proper dependency injection, reactive programming patterns, and comprehensive testing.',
            },
            {
                title: 'Angular Architecture & Design',
                description:
                    'Expert guidance on application architecture, module organization, and design patterns for enterprise-scale Angular projects.',
                details:
                    'Strategic planning for scalable architectures, lazy loading, feature modules, and state management implementation.',
            },
            {
                title: 'RxJS & Reactive Programming',
                description:
                    'Master reactive programming with RxJS for complex asynchronous operations, data streams, and event handling in Angular.',
                details:
                    'Advanced observables, operators, state management, and reactive forms implementation for sophisticated applications.',
            },
            {
                title: 'Angular Performance Optimization',
                description:
                    'Optimize Angular applications for speed and efficiency, reducing bundle sizes and improving runtime performance.',
                details:
                    'Code splitting, lazy loading, change detection optimization, tree-shaking, and production build tuning.',
            },
            {
                title: 'Angular to Modern Migration',
                description:
                    'Modernize legacy AngularJS or Angular applications with latest versions and best practices.',
                details:
                    'Strategic migration planning, incremental upgrades, and compatibility management for smooth transitions.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Comprehensive testing strategy with unit tests, integration tests, and e2e testing for Angular applications.',
                details:
                    'Jasmine, Karma, Protractor, and Cypress expertise for robust, maintainable test suites.',
            },
            {
                title: 'Mobile App Development (Ionic)',
                description:
                    'Extend Angular expertise to mobile platforms with Ionic framework for iOS and Android applications.',
                details:
                    'Build cross-platform mobile apps using Angular components and skills, leveraging Cordova/Capacitor for native features.',
            },
            {
                title: 'Progressive Web Apps (PWA)',
                description:
                    'Create progressive web applications with offline capabilities, push notifications, and app-like experiences.',
                details:
                    'Service workers, manifest files, and Angular CLI PWA integration for installable web applications.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Angular & Frameworks',
                tools: [
                    'Angular',
                    'Angular CLI',
                    'TypeScript',
                    'RxJS',
                    'NgRx',
                    'Angular Material',
                    'Angular Universal',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'NgRx',
                    'Akita',
                    'NgXS',
                    'Store Dev Tools',
                    'Effects',
                    'Selectors',
                    'Entities',
                ],
            },
            {
                title: 'UI & Component Libraries',
                tools: [
                    'Angular Material',
                    'ng-bootstrap',
                    'PrimeNG',
                    'NgZorro',
                    'Clarity Design',
                    'Ionic',
                ],
            },
            {
                title: 'Forms & Validation',
                tools: [
                    'Reactive Forms',
                    'Template-driven Forms',
                    'Angular Forms',
                    'Custom Validators',
                    'Form Builder',
                    'Async Validators',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Jasmine',
                    'Karma',
                    'Protractor',
                    'Cypress',
                    'Jest',
                    'Playwright',
                    'Testing Library',
                ],
            },
            {
                title: 'HTTP & API Integration',
                tools: [
                    'HttpClient',
                    'Interceptors',
                    'GraphQL',
                    'Apollo Angular',
                    'REST APIs',
                    'gRPC',
                    'WebSockets',
                ],
            },
            {
                title: 'Build & Development Tools',
                tools: [
                    'Angular CLI',
                    'Webpack',
                    'Ivy Compiler',
                    'Schematic',
                    'Nx',
                    'Lerna',
                    'Vite',
                ],
            },
            {
                title: 'Deployment & DevOps',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'AWS',
                    'Azure DevOps',
                ],
            },
            {
                title: 'Mobile Development',
                tools: [
                    'Ionic',
                    'Cordova',
                    'Capacitor',
                    'React Native',
                    'Flutter',
                    'iOS',
                    'Android',
                ],
            },
            {
                title: 'Progressive Web Apps (PWA)',
                tools: [
                    'Service Workers',
                    'Web App Manifest',
                    'Push Notifications',
                    'Offline Storage',
                    'IndexedDB',
                    'Cache API',
                    'Workbox',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Angular Certification & Expertise',
                description:
                    'Our team includes certified Angular developers with extensive production experience on enterprise applications.',
            },
            {
                title: 'Enterprise Architecture Knowledge',
                description:
                    'Deep understanding of scalable architectures, design patterns, and enterprise-grade development practices.',
            },
            {
                title: 'RxJS Mastery',
                description:
                    'Expert reactive programming implementation for complex asynchronous operations and data flows.',
            },
            {
                title: 'TypeScript Excellence',
                description:
                    'Strong type safety practices leveraging TypeScript for maintainable, error-free codebases.',
            },
            {
                title: 'End-to-End Development',
                description:
                    'From Angular frontend to Node.js backend integration, we handle complete application development.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Angular is Google\'s enterprise-grade framework used by millions of developers worldwide',
            'Built-in TypeScript support ensures type safety from the ground up',
            'Powerful dependency injection and modular architecture for scalable applications',
            'RxJS integration enables sophisticated reactive programming patterns',
            'Comprehensive CLI tools streamline development, testing, and deployment',
            'Large ecosystem with Angular Material, NgRx, and numerous third-party libraries',
            'Server-side rendering support with Angular Universal for SEO optimization',
            'Two-way data binding and reactive forms for efficient form handling',
            'Excellent performance with ivy compilation and ahead-of-time (AOT) compilation',
            'Strong community support and extensive official documentation',
        ],
        faqs: [
            {
                question: 'What is Angular and why choose it for enterprise applications?',
                answer:
                    'Angular is a comprehensive TypeScript framework developed by Google for building scalable, maintainable web applications. It\'s ideal for enterprise applications because of its opinionated structure, built-in testing tools, strong typing, and excellent performance. Large organizations like Microsoft, IBM, and Netflix rely on Angular for mission-critical applications.',
            },
            {
                question: 'What is the difference between Angular and React?',
                answer:
                    'Angular is a full-featured framework with built-in solutions for routing, state management, and HTTP, while React is a library focused on UI components. Angular suits large enterprise teams needing structure and conventions, while React offers more flexibility. React has a gentler learning curve, while Angular provides more out-of-the-box functionality.',
            },
            {
                question: 'What is RxJS and how does it work in Angular?',
                answer:
                    'RxJS is a library for reactive programming using Observables. In Angular, RxJS handles asynchronous operations, event streams, and data flow. It enables elegant handling of complex scenarios like HTTP requests, form changes, and user interactions through composable observable operators.',
            },
            {
                question: 'How does Angular handle state management?',
                answer:
                    'Angular uses NgRx (built on Redux patterns) for managing complex application state. NgRx provides actions, reducers, effects, and selectors to manage state predictably and enable time-traveling debugging. For smaller applications, Angular\'s services and BehaviorSubjects work well.',
            },
            {
                question: 'What are Angular modules and why are they important?',
                answer:
                    'Angular modules (NgModules) are containers for a cohesive block of code dedicated to an application domain. They enable lazy loading, encapsulation, and organization of features. Proper module structure is crucial for scalable applications and team collaboration.',
            },
            {
                question: 'How long does it take to build an Angular application?',
                answer:
                    'Timeline depends on complexity. Simple applications: 2-4 weeks. Medium applications: 2-3 months. Complex enterprise applications: 3-12+ months. Our experienced team typically onboards within 1-2 weeks to accelerate development.',
            },
            {
                question: 'What is Nx and how does it improve Angular development?',
                answer:
                    'Nx is a monorepo framework that improves scalability, code sharing, and developer experience in large Angular projects. It provides powerful tools for managing multiple libraries, applications, and dependencies in a single workspace.',
            },
            {
                question: 'How does Angular handle change detection?',
                answer:
                    'Angular uses a change detection mechanism to synchronize the view with component state. The OnPush strategy optimizes performance by only checking components when input properties change or events occur.',
            },
            ],
            caseStudies: [
            {
                title: 'Enterprise Dashboard Modernization',
                description:
                    'Rebuilt legacy AngularJS dashboard with modern Angular architecture, improving performance and user experience.',
                link: '#',
            },
            {
                title: 'High-Performance SPA Development',
                description:
                    'Developed complex single-page application with NgRx state management, handling 100K+ concurrent users.',
                link: '#',
            },
            {
                title: 'Ionic Mobile App Launch',
                description:
                    'Extended Angular expertise to mobile platforms with Ionic, launching iOS and Android apps simultaneously.',
                link: '#',
            },
            ],
        relatedTechs: [
            'TypeScript',
            'RxJS',
            'Node.js',
            'Express',
            'GraphQL',
            'Angular Material',
            'NgRx',
            'Ionic',
            'React Native',
            'Flutter',
            'Mobile Development',
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
