'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Smartphone } from 'lucide-react';

export default function FlutterTechPage() {
    const techData = {
        name: 'Flutter',
        emoji: '🦋',
        icon: <Smartphone className="w-6 h-6" />,
        shortDescription:
            'Build beautiful native apps with Flutter. Our Flutter developers deliver high-performance iOS and Android applications with nearshore expertise.',
        heroTitle: 'High-Performance Mobile Development with Flutter',
        heroSubtitle:
            'Flutter is Google\'s mobile UI framework for building natively compiled applications from a single codebase. Our expert developers leverage Dart and Flutter\'s reactive framework to deliver beautiful, performant iOS and Android apps. From startups to enterprise applications, we provide comprehensive Flutter expertise.',
        heroImage: '/images/tech-flutter-rich.svg',
        heroImageAlt: 'Flutter - Cross-Platform Mobile Framework',
        services: [
            {
                title: 'iOS & Android App Development',
                description:
                    'Build native iOS and Android applications with Flutter, achieving superior performance and beautiful UI.',
                details:
                    'Using Material Design and Cupertino widgets, we create responsive, visually stunning applications across platforms.',
            },
            {
                title: 'Flutter Architecture & Design',
                description:
                    'Expert guidance on application architecture, state management, and best practices for scalable apps.',
                details:
                    'Strategic planning for architecture patterns, navigation, and integration with backend services.',
            },
            {
                title: 'State Management Implementation',
                description:
                    'Implement robust state management solutions with Provider, GetX, or BLoC pattern.',
                details:
                    'Expert guidance on choosing right state management approach for application complexity and team skills.',
            },
            {
                title: 'Custom Native Integration',
                description:
                    'Integrate platform-specific features requiring native code in Kotlin, Java, Swift, or Objective-C.',
                details:
                    'Building platform channels for seamless integration with native iOS and Android functionality.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Flutter applications for speed, memory usage, and battery efficiency.',
                details:
                    'Performance profiling, rendering optimization, and efficient state management for peak performance.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Comprehensive testing strategy with unit, widget, and integration tests for Flutter apps.',
                details:
                    'Using Mockito, integration_test, and testing best practices for robust applications.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Flutter & Dart',
                tools: [
                    'Flutter',
                    'Dart',
                    'Flutter SDK',
                    'Pub.dev',
                    'Material Design',
                    'Cupertino',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Provider',
                    'GetX',
                    'BLoC',
                    'Riverpod',
                    'MobX',
                    'Stateful Widgets',
                ],
            },
            {
                title: 'UI & Design',
                tools: [
                    'Material Design',
                    'Cupertino Widgets',
                    'GetX UI',
                    'Flutter Hooks',
                    'Custom Painters',
                    'Animations',
                ],
            },
            {
                title: 'Database & Storage',
                tools: [
                    'Hive',
                    'SQLite',
                    'Drift',
                    'Firebase Firestore',
                    'Realm',
                    'SharedPreferences',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Flutter Test',
                    'Mockito',
                    'integration_test',
                    'Patrol',
                    'Codemagic CI',
                    'Very Good Cli',
                ],
            },
            {
                title: 'APIs & Backend',
                tools: [
                    'REST APIs',
                    'GraphQL',
                    'Firebase',
                    'Dio',
                    'http package',
                    'WebSocket',
                ],
            },
            {
                title: 'Deployment & Distribution',
                tools: [
                    'App Store',
                    'Google Play Store',
                    'TestFlight',
                    'Firebase App Distribution',
                    'Codemagic',
                    'GitHub Actions',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Android Studio',
                    'VS Code',
                    'Flutter DevTools',
                    'Dart DevTools',
                    'Hot Reload',
                    'Dart Analyzer',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Flutter Expertise',
                description:
                    'Our team includes experienced Flutter developers with production apps deployed on App Store and Play Store.',
            },
            {
                title: 'Superior Performance',
                description:
                    'Flutter compiles to native code with excellent performance, often outperforming other cross-platform frameworks.',
            },
            {
                title: 'Beautiful UI',
                description:
                    'Flutter\'s widget system and Material Design enable creating stunning, native-looking user interfaces.',
            },
            {
                title: 'Single Codebase',
                description:
                    'Write once for iOS and Android with minimal platform-specific code, reducing development time.',
            },
            {
                title: 'Rapid Development',
                description:
                    'Hot reload enables seeing changes instantly, significantly speeding up development cycles.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Flutter powers apps with 100M+ downloads including Google Ads, Alibaba, and BMW',
            'Single codebase for iOS, Android, web, and desktop platforms',
            'Superior performance with native compilation and 60-120 FPS rendering',
            'Dart language offers excellent tooling, null-safety, and fast compilation',
            'Hot reload enables seeing code changes in milliseconds during development',
            'Rich widget library enables building beautiful UIs without platform-specific code',
            'Growing ecosystem with 20,000+ packages on pub.dev',
            'Strong community support with backing from Google and rapid evolution',
        ],
        faqs: [
            {
                question: 'What is Flutter and why use it?',
                answer:
                    'Flutter is Google\'s mobile framework for building natively compiled iOS and Android apps from a single codebase. It\'s chosen for superior performance, beautiful UIs, rapid development with hot reload, and excellent developer experience.',
            },
            {
                question: 'Can we build one app for iOS, Android, Web, and Desktop?',
                answer:
                    'Yes! Flutter supports iOS, Android, web, Windows, and macOS from a single codebase. This single-codebase approach significantly reduces development time and improves consistency across platforms.',
            },
            {
                question: 'How does Flutter performance compare to native development?',
                answer:
                    'Flutter compiles to native code and often performs as well as or better than native apps. Many high-performance apps like Google Ads and Alibaba use Flutter successfully.',
            },
            {
                question: 'What is Dart and is it hard to learn?',
                answer:
                    'Dart is Google\'s programming language designed for building fast apps. If you know JavaScript, Java, or C++, learning Dart is straightforward. It\'s expressive and powerful while remaining approachable.',
            },
            {
                question: 'How do we handle platform-specific features?',
                answer:
                    'Flutter provides platform channels for communicating between Dart and native code. For iOS, you can use Swift/Objective-C, and for Android, you can use Kotlin/Java.',
            },
            {
                question: 'What\'s the difference between Flutter and React Native?',
                answer:
                    'Flutter uses Dart and compiles to native code directly, while React Native uses JavaScript and an intermediate runtime. Flutter typically has better performance and UI consistency, while React Native has larger community.',
            },
            {
                question: 'How long does Flutter app development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 4-8 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Platform Enterprise App',
                description:
                    'Developed Flutter app for iOS, Android, and web, achieving 95% code reuse and 40% faster development.',
                link: '#',
            },
            {
                title: 'High-Performance Finance App',
                description:
                    'Built real-time trading app with Flutter, delivering superior performance with smooth animations and instant UI updates.',
                link: '#',
            },
            {
                title: 'Startup MVP Launch',
                description:
                    'Delivered MVP in 6 weeks using Flutter, covering iOS and Android simultaneously with beautiful Material Design UI.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Dart',
            'Firebase',
            'Kotlin',
            'Swift',
            'Node.js',
            'PostgreSQL',
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
