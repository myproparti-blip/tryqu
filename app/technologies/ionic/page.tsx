'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Smartphone } from 'lucide-react';

export default function IonicTechPage() {
    const techData = {
        name: 'Ionic',
        emoji: '🧩',
        icon: <Smartphone className="w-6 h-6" />,
        shortDescription:
            'Build cross-platform mobile apps with Ionic. Our Ionic developers deliver responsive, native-feeling applications with nearshore expertise.',
        heroTitle: 'Cross-Platform Mobile Development with Ionic',
        heroSubtitle:
            'Ionic enables building iOS and Android applications using web technologies (Angular, React, Vue). Our expert developers leverage your existing web skills to deliver native mobile experiences. From progressive web apps to fully native mobile apps, we provide comprehensive Ionic expertise.',
        heroImage: '/images/tech-ionic-rich.svg',
        heroImageAlt: 'Ionic - Hybrid Mobile Application Framework',
        services: [
            {
                title: 'Ionic App Development',
                description:
                    'Build iOS and Android applications using Ionic framework with your preferred web technology stack.',
                details:
                    'Supporting Angular, React, and Vue with Ionic components and Capacitor for native feature access.',
            },
            {
                title: 'Progressive Web Apps (PWA)',
                description:
                    'Convert Ionic apps to progressive web apps for web browser access with offline capabilities.',
                details:
                    'Service workers, offline support, push notifications, and installable web applications.',
            },
            {
                title: 'Native Feature Integration',
                description:
                    'Integrate native device features including camera, geolocation, contacts, and notifications.',
                details:
                    'Using Capacitor plugins for seamless access to iOS and Android native capabilities.',
            },
            {
                title: 'UI/UX Optimization',
                description:
                    'Optimize user interface and experience for mobile devices with responsive design and touch optimization.',
                details:
                    'Material Design for Android and iOS design patterns for native-feeling applications.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Ionic applications for mobile performance, reducing bundle size and improving responsiveness.',
                details:
                    'Code optimization, lazy loading, and efficient state management for smooth performance.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Comprehensive testing strategy for Ionic applications across platforms.',
                details:
                    'Using Jest, Cypress, and platform-specific testing tools for robust applications.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Ionic Framework',
                tools: [
                    'Ionic',
                    'Capacitor',
                    'Cordova',
                    'Ionic CLI',
                    'Ionic Native',
                    'Stencil',
                ],
            },
            {
                title: 'Frontend Frameworks',
                tools: [
                    'Angular',
                    'React',
                    'Vue.js',
                    'TypeScript',
                    'Sass',
                    'CSS',
                ],
            },
            {
                title: 'UI Components',
                tools: [
                    'Ionic Components',
                    'Material Design',
                    'iOS Design',
                    'Custom Components',
                    'Theming',
                    'Animations',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'NgRx (Angular)',
                    'Redux (React)',
                    'Pinia (Vue)',
                    'Context API',
                    'MobX',
                    'Zustand',
                ],
            },
            {
                title: 'Native Plugins',
                tools: [
                    'Camera',
                    'Geolocation',
                    'File System',
                    'Push Notifications',
                    'LocalNotifications',
                    'Share',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Jest',
                    'Jasmine',
                    'Karma',
                    'Cypress',
                    'Playwright',
                    'Testing Library',
                ],
            },
            {
                title: 'Deployment & Distribution',
                tools: [
                    'App Store',
                    'Google Play Store',
                    'TestFlight',
                    'Firebase Distribution',
                    'GitHub Pages',
                    'Netlify',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Ionic CLI',
                    'VS Code',
                    'Chrome DevTools',
                    'Ionic DevApp',
                    'Live Reload',
                    'Hot Module Reload',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Web to Mobile Leverage',
                description:
                    'Leverage your existing web development skills (HTML, CSS, JavaScript) for mobile app development.',
            },
            {
                title: 'Ionic Expertise',
                description:
                    'Our team includes experienced Ionic developers with deployed apps across App Store and Play Store.',
            },
            {
                title: 'Framework Flexibility',
                description:
                    'Support for Angular, React, and Vue allows choosing the framework your team knows best.',
            },
            {
                title: 'Rapid Development',
                description:
                    'Ionic\'s component library and live reload enable rapid development cycles.',
            },
            {
                title: 'Single Codebase',
                description:
                    'Write once for iOS, Android, and web with a single codebase, reducing development time.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Ionic powers 10M+ apps across iOS, Android, and web platforms',
            'Build mobile apps with web technologies (HTML, CSS, JavaScript)',
            'Capacitor enables access to native device features from web code',
            'Single codebase for iOS, Android, and Progressive Web Apps',
            'Reuse existing web development knowledge and JavaScript frameworks',
            'Component library provides native-looking UI for both iOS and Android',
            'Active community with 1M+ developers and extensive third-party plugins',
            'Backed by Ionic Corporation with continuous framework improvements',
        ],
        faqs: [
            {
                question: 'What is Ionic and why use it?',
                answer:
                    'Ionic is a framework for building cross-platform mobile apps using web technologies (HTML, CSS, JS). It\'s chosen for code reuse across web and mobile, rapid development, and leveraging existing web developer skills.',
            },
            {
                question: 'Can we build iOS and Android from one codebase?',
                answer:
                    'Yes! Ionic is designed for cross-platform development. You write code once and deploy to both iOS and Android, plus web browser, dramatically reducing development time and costs.',
            },
            {
                question: 'How does Ionic access native device features?',
                answer:
                    'Ionic uses Capacitor to create bridges to native code. Capacitor provides plugins for camera, geolocation, notifications, and other native features, allowing web code to access device capabilities.',
            },
            {
                question: 'What\'s the difference between Ionic and React Native/Flutter?',
                answer:
                    'Ionic uses web technologies (HTML/CSS/JS), React Native uses JavaScript/React, and Flutter uses Dart. Ionic is best if you have web developer teams; React Native for JavaScript teams; Flutter for maximum performance.',
            },
            {
                question: 'Can we run Ionic apps on the web?',
                answer:
                    'Yes! Ionic apps can run as Progressive Web Apps (PWAs) in browsers. This enables using the same codebase for iOS, Android, and web platforms.',
            },
            {
                question: 'Is Ionic performance acceptable for complex apps?',
                answer:
                    'Yes. While Ionic is hybrid (not native), modern Ionic with Capacitor delivers excellent performance for most applications. Performance depends more on code quality than framework choice.',
            },
            {
                question: 'How long does Ionic app development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 4-8 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'Cross-Platform Health App',
                description:
                    'Built health tracking app with Ionic/Angular, reaching iOS, Android, and web platforms with 70% code reuse.',
                link: '#',
            },
            {
                title: 'Enterprise Productivity Suite',
                description:
                    'Developed complex productivity app with React and Ionic, deploying to both mobile and web simultaneously.',
                link: '#',
            },
            {
                title: 'Progressive Web App Launch',
                description:
                    'Converted Ionic mobile app to PWA, enabling offline access and installation from browser without app store.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Angular',
            'React',
            'Vue.js',
            'Capacitor',
            'TypeScript',
            'Progressive Web Apps',
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
