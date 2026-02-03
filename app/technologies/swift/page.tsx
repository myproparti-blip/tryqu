'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function SwiftTechPage() {
    const techData = {
        name: 'Swift',
        emoji: '🍎',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Build native iOS applications with Swift. Our Swift developers deliver high-performance, feature-rich apps with nearshore expertise.',
        heroTitle: 'Native iOS Development with Swift',
        heroSubtitle:
            'Swift is Apple\'s modern programming language for iOS, macOS, watchOS, and tvOS development. Our expert developers leverage Swift to build performant, intuitive applications that users love. From startups to Fortune 500 companies, we deliver scalable iOS solutions using Swift and SwiftUI.',
        heroImage: '/images/tech-swift-rich.svg',
        heroImageAlt: 'Swift - Apple\'s Modern Programming Language',
        services: [
            {
                title: 'Native iOS App Development',
                description:
                    'Build native iOS applications with Swift using the latest frameworks and best practices.',
                details:
                    'Leveraging SwiftUI for modern UI, Combine for reactive programming, and async/await for concurrent operations.',
            },
            {
                title: 'SwiftUI Interface Development',
                description:
                    'Create modern, responsive user interfaces with SwiftUI for iOS and multiplatform support.',
                details:
                    'Declarative UI, animations, state management, and accessibility features for exceptional user experience.',
            },
            {
                title: 'iOS Integration Services',
                description:
                    'Integrate your iOS app with cloud services, databases, and third-party APIs.',
                details:
                    'Firebase integration, REST/GraphQL APIs, push notifications, and cloud storage solutions.',
            },
            {
                title: 'App Store Optimization',
                description:
                    'Prepare and optimize your Swift app for App Store submission and maximum visibility.',
                details:
                    'Code signing, provisioning profiles, review process guidance, and marketing optimization.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize Swift applications for speed, memory efficiency, and battery life.',
                details:
                    'Profiling, memory management, network optimization, and runtime performance tuning.',
            },
            {
                title: 'Multiplatform Development',
                description:
                    'Extend iOS apps to macOS, watchOS, and tvOS using shared Swift code.',
                details:
                    'Code reuse across Apple platforms, platform-specific UI customization, and unified deployment.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Swift Framework',
                tools: [
                    'Swift',
                    'SwiftUI',
                    'UIKit',
                    'Foundation',
                    'Combine',
                    'Async/Await',
                ],
            },
            {
                title: 'UI & Design',
                tools: [
                    'SwiftUI',
                    'UIKit',
                    'StoryBoard',
                    'Core Graphics',
                    'Animation',
                    'Accessibility',
                ],
            },
            {
                title: 'Data & Networking',
                tools: [
                    'URLSession',
                    'Codable',
                    'Core Data',
                    'Firebase Realtime DB',
                    'GraphQL',
                    'REST APIs',
                ],
            },
            {
                title: 'Reactive Programming',
                tools: [
                    'Combine',
                    'RxSwift',
                    'Async/Await',
                    'Publishers',
                    'Subscribers',
                    'ObservedObject',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: [
                    'XCTest',
                    'Quick',
                    'Nimble',
                    'XCUITest',
                    'Mockito',
                    'Instruments',
                ],
            },
            {
                title: 'Backend Services',
                tools: [
                    'Firebase',
                    'AWS Amplify',
                    'CloudKit',
                    'Parse',
                    'Supabase',
                    'REST APIs',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'Xcode',
                    'Swift Package Manager',
                    'CocoaPods',
                    'Carthage',
                    'Git',
                    'TestFlight',
                ],
            },
            {
                title: 'Deployment & Distribution',
                tools: [
                    'App Store',
                    'TestFlight',
                    'Enterprise Distribution',
                    'Xcode Cloud',
                    'Fastlane',
                    'Certificate Management',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Native Performance',
                description:
                    'Swift delivers native performance optimized for iOS hardware, ensuring smooth, responsive applications.',
            },
            {
                title: 'Swift Expertise',
                description:
                    'Our team includes experienced Swift developers with published apps on App Store across various categories.',
            },
            {
                title: 'Modern Language',
                description:
                    'Swift is Apple\'s modern language with safety features, performance, and excellent developer experience.',
            },
            {
                title: 'Latest Frameworks',
                description:
                    'We leverage SwiftUI, Combine, and async/await for building cutting-edge iOS applications.',
            },
            {
                title: 'User Experience Focus',
                description:
                    'We prioritize intuitive interfaces and smooth interactions that make apps users love.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick turnaround.',
            },
        ],
        keyFacts: [
            'Swift is the primary language for iOS, macOS, watchOS, and tvOS development',
            'SwiftUI enables building user interfaces with modern declarative syntax',
            'Swift offers memory safety and excellent performance compared to Objective-C',
            'Open source language backed by Apple with active community contribution',
            'Async/await and Combine provide powerful tools for concurrent and reactive programming',
            'App Store has 2M+ apps with millions built using Swift',
            'XCTest framework provides comprehensive testing capabilities',
            'Swift Package Manager simplifies dependency management',
        ],
        faqs: [
            {
                question: 'What is Swift and why use it?',
                answer:
                    'Swift is Apple\'s modern programming language for iOS, macOS, and other Apple platforms. It\'s chosen for native performance, safety features, modern syntax, and superior developer experience compared to Objective-C.',
            },
            {
                question: 'What\'s the difference between SwiftUI and UIKit?',
                answer:
                    'SwiftUI is Apple\'s modern declarative UI framework. UIKit is the traditional imperative framework. SwiftUI is recommended for new projects, but UIKit remains necessary for complex scenarios.',
            },
            {
                question: 'Can Swift be used for multiplatform development?',
                answer:
                    'Yes! Swift code can be shared across iOS, macOS, watchOS, and tvOS. SwiftUI further enables true cross-platform UI development with native looks on each platform.',
            },
            {
                question: 'How long does iOS app development take?',
                answer:
                    'Timeline depends on complexity. Simple apps: 2-4 weeks. Medium apps: 2-3 months. Complex enterprise apps: 3-12 months. Our team typically onboards within 1-2 weeks.',
            },
            {
                question: 'How do we access device features in Swift?',
                answer:
                    'Swift provides frameworks like AVFoundation for camera, CoreLocation for GPS, HealthKit for health data, and many more. Permission requests are handled through Info.plist and runtime permission dialogs.',
            },
            {
                question: 'What testing frameworks are available for Swift?',
                answer:
                    'XCTest is the built-in testing framework. Additional frameworks like Quick and Nimble provide BDD-style testing. XCUITest handles UI automation testing.',
            },
            {
                question: 'How do we handle networking in Swift?',
                answer:
                    'URLSession is the standard networking API. It supports async/await syntax for modern concurrency. Libraries like Alamofire and Moya provide higher-level abstractions.',
            },
        ],
        caseStudies: [
            {
                title: 'Healthcare App with HealthKit',
                description:
                    'Built HIPAA-compliant healthcare app using SwiftUI with HealthKit integration for patient monitoring.',
                link: '#',
            },
            {
                title: 'Fintech Application',
                description:
                    'Developed secure fintech app with complex state management, biometric authentication, and real-time data sync.',
                link: '#',
            },
            {
                title: 'Cross-Platform Mac & iOS App',
                description:
                    'Created productivity app using shared Swift code for iOS, iPadOS, and macOS with consistent experience.',
                link: '#',
            },
        ],
        relatedTechs: [
            'iOS',
            'SwiftUI',
            'Xcode',
            'Firebase',
            'Core Data',
            'ARKit',
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
