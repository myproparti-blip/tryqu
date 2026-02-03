'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function KotlinTechPage() {
    const techData = {
        name: 'Kotlin',
        emoji: '🚀',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build native Android applications with Kotlin. Our Kotlin developers deliver high-performance, feature-rich apps with nearshore expertise.',
        heroTitle: 'Native Android Development with Kotlin',
        heroSubtitle:
            'Kotlin is Google\'s officially supported language for Android development, offering modern syntax, safety features, and seamless Java interoperability. Our expert developers leverage Kotlin to build performant, intuitive applications that users love. From startups to Fortune 500 companies, we deliver scalable Android solutions using Kotlin.',
        heroImage: '/images/tech-kotlin-rich.svg',
        heroImageAlt: 'Kotlin - Modern Android Programming Language',
        services: [
            {
                title: 'Native Android App Development',
                description:
                    'Build native Android applications with Kotlin using the latest frameworks and best practices.',
                details:
                    'Leveraging Jetpack Compose for modern UI, Coroutines for asynchronous operations, and MVVM architecture.',
            },
            {
                title: 'Jetpack Compose Development',
                description:
                    'Create modern, declarative user interfaces with Jetpack Compose for Android.',
                details:
                    'Composable functions, state management, animations, and responsive layouts for exceptional UX.',
            },
            {
                title: 'Android Backend Integration',
                description:
                    'Integrate your Android app with cloud services, databases, and third-party APIs.',
                details:
                    'Firebase integration, REST/GraphQL APIs, push notifications, and cloud storage solutions.',
            },
            {
                title: 'Play Store Optimization',
                description:
                    'Prepare and optimize your Kotlin app for Google Play Store submission and maximum visibility.',
                details:
                    'Build signing, release management, store listing optimization, and performance monitoring.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Kotlin applications for speed, memory efficiency, and battery life.',
                details:
                    'Profiling, memory management, ANR prevention, and runtime performance tuning.',
            },
            {
                title: 'Material Design Implementation',
                description:
                    'Implement Material Design 3 for consistent, modern UI across all Android devices.',
                details:
                    'Dynamic theming, responsive layouts, and accessibility best practices.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Kotlin Framework',
                tools: [
                    'Kotlin',
                    'Jetpack Compose',
                    'Android Framework',
                    'Coroutines',
                    'Flow',
                    'Async/Await',
                ],
            },
            {
                title: 'UI & Design',
                tools: [
                    'Jetpack Compose',
                    'Material Design 3',
                    'XML Layouts',
                    'View Binding',
                    'Data Binding',
                    'Accessibility',
                ],
            },
            {
                title: 'Architecture Patterns',
                tools: [
                    'MVVM',
                    'MVI',
                    'Clean Architecture',
                    'Repository Pattern',
                    'Dependency Injection',
                    'Hilt',
                ],
            },
            {
                title: 'Data & Networking',
                tools: [
                    'Retrofit',
                    'OkHttp',
                    'Room Database',
                    'DataStore',
                    'GraphQL',
                    'Firebase Firestore',
                ],
            },
            {
                title: 'Reactive Programming',
                tools: [
                    'Coroutines',
                    'Flow',
                    'RxJava',
                    'LiveData',
                    'StateFlow',
                    'Async Operations',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'JUnit',
                    'Espresso',
                    'Robolectric',
                    'Mockito',
                    'Truth',
                    'Crashlytics',
                ],
            },
            {
                title: 'Backend Services',
                tools: [
                    'Firebase',
                    'Google Cloud',
                    'AWS Amplify',
                    'Parse',
                    'Supabase',
                    'REST APIs',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Android Studio',
                    'Gradle',
                    'Maven',
                    'ProGuard/R8',
                    'Git',
                    'Android Emulator',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Native Performance',
                description:
                    'Kotlin delivers native performance optimized for Android hardware, ensuring smooth, responsive applications.',
            },
            {
                title: 'Kotlin Expertise',
                description:
                    'Our team includes experienced Kotlin developers with published apps on Google Play Store across various categories.',
            },
            {
                title: 'Google Supported',
                description:
                    'Kotlin is Google\'s officially recommended language for Android with continuous framework improvements.',
            },
            {
                title: 'Modern Language',
                description:
                    'Kotlin provides safety features, null safety, extension functions, and excellent developer experience.',
            },
            {
                title: 'Java Interoperability',
                description:
                    'Seamless interoperability with existing Java codebases and libraries enables gradual migration.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Kotlin is Google\'s officially recommended language for Android development',
            'Jetpack Compose enables building modern UI with declarative syntax',
            'Coroutines provide lightweight concurrency for asynchronous programming',
            'Null safety eliminates entire classes of runtime errors',
            'Full interoperability with Java libraries and existing Android code',
            'Significantly reduces boilerplate compared to Java',
            'Extension functions and DSLs enable expressive, readable code',
            'Active community with millions of Android developers using Kotlin',
        ],
        faqs: [
            {
                question: 'What is Kotlin and why use it?',
                answer:
                    'Kotlin is Google\'s officially supported language for Android development. It\'s chosen for safety features, modern syntax, null safety, and superior developer experience compared to Java. Google officially recommended it in 2019 and made it the preferred language in 2021.',
            },
            {
                question: 'What\'s the difference between Jetpack Compose and XML Layouts?',
                answer:
                    'Jetpack Compose is Google\'s modern declarative UI framework. XML Layouts are the traditional way of defining Android UIs. Compose is recommended for new projects and offers better code reusability and state management.',
            },
            {
                question: 'Can we use Kotlin with existing Java code?',
                answer:
                    'Yes! Kotlin has seamless interoperability with Java. You can use Java libraries and gradually migrate existing Java code to Kotlin without rewriting entire projects.',
            },
            {
                question: 'What are Coroutines and why are they important?',
                answer:
                    'Coroutines enable lightweight asynchronous programming in Kotlin. They simplify asynchronous code, prevent callback hell, and provide better performance than traditional threading.',
            },
            {
                question: 'How long does Android app development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 2-4 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
            {
                question: 'How do we access device features in Kotlin?',
                answer:
                    'Kotlin provides access to Android APIs for camera, location, contacts, notifications, sensors, and more. Permissions are handled through AndroidManifest.xml and runtime permission requests.',
            },
            {
                question: 'What testing frameworks are available for Kotlin?',
                answer:
                    'JUnit is the standard unit testing framework. Espresso handles UI testing. Robolectric enables testing without emulator. Mockito helps with mocking dependencies.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Android App',
                description:
                    'Built feature-rich e-commerce app with Jetpack Compose, handling 500K+ downloads with excellent user ratings.',
                link: '#',
            },
            {
                title: 'Real-Time Data App',
                description:
                    'Developed real-time data visualization app using Kotlin Coroutines and Firebase for 50K+ active users.',
                link: '#',
            },
            {
                title: 'Java to Kotlin Migration',
                description:
                    'Successfully migrated legacy Java Android app to Kotlin, improving code quality and reducing bugs by 60%.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Android',
            'Jetpack Compose',
            'Firebase',
            'Room Database',
            'Coroutines',
            'Material Design',
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
