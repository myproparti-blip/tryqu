'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Cloud } from 'lucide-react';

export default function FirebaseTechPage() {
    const techData = {
        name: 'Firebase',
        emoji: '🔥',
        icon: <Cloud className="w-6 h-6" />,
        shortDescription:
            'Build apps faster with Firebase. Our Firebase experts deliver rapid development using Google\'s comprehensive platform with nearshore expertise.',
        heroTitle: 'Rapid Development with Firebase Platform',
        heroSubtitle:
            'Firebase is Google\'s comprehensive platform for building web and mobile applications with built-in backend services. Our expert developers leverage Firestore, Authentication, Cloud Functions, and real-time database for rapid, scalable application development. From MVPs to enterprise applications, we deliver Firebase solutions.',
        heroImage: '/images/tech-firebase-rich.svg',
        heroImageAlt: 'Firebase - Backend-as-a-Service Platform',
        services: [
            {
                title: 'Firestore Database Design',
                description:
                    'Design scalable Firestore databases optimized for your application requirements.',
                details:
                    'Collection structure, document organization, indexing strategy, and query optimization.',
            },
            {
                title: 'Authentication Implementation',
                description:
                    'Implement Firebase Authentication for secure user management and sign-in methods.',
                details:
                    'Email/password, OAuth providers, phone authentication, and multi-factor authentication.',
            },
            {
                title: 'Cloud Functions Development',
                description:
                    'Build serverless backend logic using Cloud Functions triggered by events.',
                details:
                    'HTTP functions, scheduled functions, database triggers, and real-time processing.',
            },
            {
                title: 'Real-Time Data Synchronization',
                description:
                    'Implement real-time data syncing with Firestore for live collaboration.',
                details:
                    'Real-time listeners, data binding, offline persistence, and conflict resolution.',
            },
            {
                title: 'Storage & File Management',
                description:
                    'Implement Firebase Cloud Storage for file uploads and management.',
                details:
                    'File organization, access control, content delivery, and optimization.',
            },
            {
                title: 'Analytics & Monitoring',
                description:
                    'Implement Firebase Analytics for user behavior tracking and performance monitoring.',
                details:
                    'Event tracking, user properties, crash reporting, and performance monitoring.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Firebase Core',
                tools: [
                    'Firestore',
                    'Realtime Database',
                    'Cloud Storage',
                    'Cloud Functions',
                    'Hosting',
                    'Authentication',
                ],
            },
            {
                title: 'Web SDKs',
                tools: [
                    'JavaScript SDK',
                    'React Firebase Hooks',
                    'Vue Fire',
                    'Angular Fire',
                    'Svelte Fire',
                    'React Native Firebase',
                ],
            },
            {
                title: 'Frontend Integration',
                tools: [
                    'React',
                    'Vue.js',
                    'Angular',
                    'Next.js',
                    'Nuxt.js',
                    'Flutter',
                ],
            },
            {
                title: 'Authentication Methods',
                tools: [
                    'Email/Password',
                    'Google Sign-In',
                    'Facebook Login',
                    'GitHub Auth',
                    'Phone Auth',
                    'Custom Claims',
                ],
            },
            {
                title: 'Analytics & Monitoring',
                tools: [
                    'Firebase Analytics',
                    'Crash Reporting',
                    'Performance Monitoring',
                    'Cloud Trace',
                    'Cloud Profiler',
                    'Error Reporting',
                ],
            },
            {
                title: 'Backend Services',
                tools: [
                    'Cloud Functions',
                    'Cloud Tasks',
                    'Pub/Sub',
                    'Cloud Scheduler',
                    'Cloud Run',
                    'App Engine',
                ],
            },
            {
                title: 'Development & Deployment',
                tools: [
                    'Firebase CLI',
                    'Emulator Suite',
                    'GitHub Integration',
                    'Hosting',
                    'Cloud Deployment',
                    'Continuous Deployment',
                ],
            },
            {
                title: 'DevOps & Testing',
                tools: [
                    'Testing Library',
                    'Jest',
                    'Emulator',
                    'Firestore Security Rules Testing',
                    'Cloud Monitoring',
                    'Logging',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Firebase Expertise',
                description:
                    'Our team includes experienced Firebase developers with production applications at scale.',
            },
            {
                title: 'Rapid Development',
                description:
                    'Leverage Firebase to build applications faster with managed backend services.',
            },
            {
                title: 'Scalability',
                description:
                    'Firebase automatically scales to handle millions of concurrent users.',
            },
            {
                title: 'Real-Time Features',
                description:
                    'Build collaborative, real-time features with Firestore real-time synchronization.',
            },
            {
                title: 'Security Focus',
                description:
                    'Implement security best practices with Firebase security rules and authentication.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on projects.',
            },
        ],
        keyFacts: [
            'Firebase is used by 2M+ apps across iOS, Android, and web',
            'Firestore scales automatically from zero to millions of concurrent connections',
            'Real-time database synchronizes data across all connected clients',
            'Authentication supports 10+ authentication methods out-of-the-box',
            'Cloud Functions enable serverless backend logic with automatic scaling',
            'Cloud Storage provides secure file storage with built-in CDN',
            'Comprehensive analytics built-in for user behavior tracking',
            'Generous free tier perfect for MVPs and small applications',
        ],
        faqs: [
            {
                question: 'What is Firebase and why use it?',
                answer:
                    'Firebase is Google\'s backend-as-a-service platform providing database, authentication, hosting, and serverless functions. It\'s chosen for rapid development, automatic scaling, and reduced backend complexity.',
            },
            {
                question: 'Can we use Firebase for enterprise applications?',
                answer:
                    'Yes. Firebase scales to enterprise requirements with security rules, monitoring, and compliance features. Many enterprises use Firebase for critical applications.',
            },
            {
                question: 'What\'s the difference between Firestore and Realtime Database?',
                answer:
                    'Firestore is newer with better querying, scaling, and offline support. Realtime Database is simpler but less powerful. Firestore is recommended for new projects.',
            },
            {
                question: 'How do we secure Firebase data?',
                answer:
                    'Using Firestore Security Rules for fine-grained access control. Rules evaluate requests before database access, enabling secure multi-tenant architectures.',
            },
            {
                question: 'Can we host custom backends with Firebase?',
                answer:
                    'Yes, using Cloud Functions for serverless backend or Cloud Run for containerized applications. Firebase works well with custom backends.',
            },
            {
                question: 'What are the costs of using Firebase?',
                answer:
                    'Firebase is free up to usage limits, then scales with pay-as-you-go pricing. Typically cost-effective compared to managing infrastructure.',
            },
            {
                question: 'How long does Firebase implementation take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 1-2 weeks. Medium apps: 2-3 weeks. Complex apps: 4-8 weeks. Firebase speeds up development significantly.',
            },
        ],
        caseStudies: [
            {
                title: 'Real-Time Collaboration App',
                description:
                    'Built collaborative document editor with Firestore real-time sync for 10K+ concurrent users.',
                link: '#',
            },
            {
                title: 'Mobile App with Backend',
                description:
                    'Developed React Native app with Firebase backend, Cloud Functions, and authentication.',
                link: '#',
            },
            {
                title: 'Scalable SaaS Platform',
                description:
                    'Built multi-tenant SaaS with Firestore, Cloud Functions, and row-level security.',
                link: '#',
            },
        ],
        relatedTechs: [
            'React',
            'React Native',
            'Flutter',
            'Cloud Functions',
            'Cloud Storage',
            'Google Cloud',
            'Backend Services',
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
