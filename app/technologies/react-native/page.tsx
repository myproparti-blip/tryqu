'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Smartphone } from 'lucide-react';

export default function ReactNativeTechPage() {
    const techData = {
        name: 'React Native',
        emoji: '📱',
        icon: <Smartphone className="w-6 h-6" />,
        shortDescription:
            'Build native mobile apps with React. Our React Native developers deliver iOS and Android applications with shared codebase and nearshore expertise.',
        heroTitle: 'Cross-Platform Mobile Development with React Native',
        heroSubtitle:
            'React Native enables building native iOS and Android applications with JavaScript and React. Our expert developers leverage JavaScript code reuse, native performance, and rich ecosystem to deliver production-grade mobile apps. From startups to Fortune 500 companies, we deliver scalable mobile solutions using React Native.',
        heroImage: '/images/tech-react-native-rich.svg',
        heroImageAlt: 'React Native - Cross-Platform Mobile Development',
        services: [
            {
                title: 'iOS & Android App Development',
                description:
                    'Build native iOS and Android applications with React Native, leveraging shared codebase and native performance.',
                details:
                    'Using React Native best practices, we create responsive, performant applications that work seamlessly across platforms.',
            },
            {
                title: 'React Native Architecture & Design',
                description:
                    'Expert guidance on application architecture, navigation patterns, and native module integration.',
                details:
                    'Strategic planning for scalable architectures, navigation management, and native bridge implementation.',
            },
            {
                title: 'Native Module Development',
                description:
                    'Build custom native modules for platform-specific features requiring native code integration.',
                details:
                    'Objective-C/Swift for iOS and Java/Kotlin for Android native module development and integration.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize React Native applications for speed and efficiency, reducing memory usage and improving responsiveness.',
                details:
                    'Code splitting, lazy loading, native module optimization, and profiling for peak performance.',
            },
            {
                title: 'Testing & Quality Assurance',
                description:
                    'Comprehensive testing strategy with unit tests, integration tests, and e2e testing for mobile apps.',
                details:
                    'Jest, React Native Testing Library, Detox, and device testing for robust mobile applications.',
            },
            {
                title: 'App Store & Play Store Deployment',
                description:
                    'Handle app store submission, release management, and continuous deployment pipelines.',
                details:
                    'Build signing, app store optimization, release management, and automated deployment workflows.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Mobile Frameworks',
                tools: [
                    'React Native',
                    'Expo',
                    'React Navigation',
                    'NativeBase',
                    'React Native Paper',
                    'Ignite',
                ],
            },
            {
                title: 'State Management',
                tools: [
                    'Redux',
                    'Redux Toolkit',
                    'Zustand',
                    'MobX',
                    'Context API',
                    'Recoil',
                ],
            },
            {
                title: 'UI Components & Styling',
                tools: [
                    'React Native Paper',
                    'NativeBase',
                    'UI Kitten',
                    'React Native Elements',
                    'Tailwind CSS',
                    'Styled Components',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'Jest',
                    'Detox',
                    'React Native Testing Library',
                    'Cypress',
                    'Appium',
                    'BrowserStack',
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
                title: 'Native Development',
                tools: [
                    'Xcode',
                    'Android Studio',
                    'Swift',
                    'Kotlin',
                    'Objective-C',
                    'Gradle',
                ],
            },
            {
                title: 'Deployment & Distribution',
                tools: [
                    'App Store',
                    'Google Play Store',
                    'TestFlight',
                    'Firebase Distribution',
                    'CodePush',
                    'EAS',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'React Native CLI',
                    'Expo CLI',
                    'Metro Bundler',
                    'React DevTools',
                    'Flipper',
                    'Reactotron',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'React Native Expertise',
                description:
                    'Our team includes experienced React Native developers with production apps deployed on App Store and Play Store.',
            },
            {
                title: 'Code Reuse',
                description:
                    'Leverage JavaScript code sharing between iOS and Android, reducing development time and improving consistency.',
            },
            {
                title: 'Native Performance',
                description:
                    'React Native compiles to native code, delivering performance comparable to pure native development.',
            },
            {
                title: 'Full-Stack Mobile',
                description:
                    'From mobile app development to backend integration with Node.js, we handle complete mobile solutions.',
            },
            {
                title: 'Rapid Development',
                description:
                    'Develop for both platforms simultaneously with shared codebase, reducing development time and costs.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'React Native powers apps with 100M+ downloads including Instagram, Facebook, Skype, and Walmart',
            'Write once, deploy to iOS and Android with 70-90% code sharing',
            'Native performance with JavaScript flexibility and React programming model',
            'Massive ecosystem with 100,000+ npm packages compatible with React Native',
            'Hot reload and fast refresh enable rapid development cycles',
            'Expo provides managed hosting and simplified development workflow',
            'Strong community support with extensive third-party libraries and modules',
            'OTA updates (CodePush) enable pushing updates without app store review',
        ],
        faqs: [
            {
                question: 'What is React Native and why use it?',
                answer:
                    'React Native is a framework for building native iOS and Android apps using JavaScript and React. It\'s chosen for code reuse across platforms, native performance, rapid development, and access to platform-specific features.',
            },
            {
                question: 'Can we build one app for iOS and Android?',
                answer:
                    'Yes! React Native is designed for cross-platform development. While some platform-specific code is needed, 70-90% of code can be shared between iOS and Android applications.',
            },
            {
                question: 'Is React Native performance acceptable?',
                answer:
                    'Yes. React Native compiles to native code, delivering performance comparable to pure native development. Many high-performance apps like Instagram and Skype use React Native successfully.',
            },
            {
                question: 'How do we access native features?',
                answer:
                    'React Native provides native modules allowing integration with platform-specific APIs. For complex features, we can write custom native modules in Objective-C/Swift for iOS and Java/Kotlin for Android.',
            },
            {
                question: 'What\'s the difference between React Native and Flutter?',
                answer:
                    'React Native uses JavaScript and React, while Flutter uses Dart. React Native has larger ecosystem and JavaScript familiarity, while Flutter has better performance and tooling. Choose based on team skills and requirements.',
            },
            {
                question: 'Can we push updates without app store review?',
                answer:
                    'Yes, through CodePush (Microsoft) or EAS Updates (Expo). You can push JavaScript and asset updates without going through app store review, enabling rapid bug fixes.',
            },
            {
                question: 'How long does React Native app development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 4-8 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
        ],
        caseStudies: [
            {
                title: 'Cross-Platform E-Commerce App',
                description:
                    'Developed iOS and Android e-commerce app with React Native, achieving 80% code sharing and 50% faster development.',
                link: '#',
            },
            {
                title: 'Real-Time Social App',
                description:
                    'Built feature-rich social networking app with React Native, Redux state management, and real-time messaging.',
                link: '#',
            },
            {
                title: 'Enterprise Mobile Solution',
                description:
                    'Delivered enterprise mobile app with native module integration, reaching 1M+ downloads across iOS and Android.',
                link: '#',
            },
        ],
        relatedTechs: [
            'React',
            'TypeScript',
            'Node.js',
            'Redux',
            'Expo',
            'Firebase',
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
