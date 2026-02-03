'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Zap } from 'lucide-react';

export default function RxJSTechPage() {
    const techData = {
        name: 'RxJS',
        emoji: '📡',
        icon: <Zap className="w-6 h-6" />,
        shortDescription: 'Expert RxJS development services for building reactive, event-driven applications with functional programming patterns.',
        heroTitle: 'Master Reactive Programming with RxJS',
        heroSubtitle: 'Build scalable, event-driven applications using RxJS observables and functional reactive programming. Our experts handle complex async operations, real-time data streams, and reactive architecture patterns for Angular and Node.js applications.',
        heroImage: '/images/tech-rxjs-rich.svg',
        heroImageAlt: 'RxJS - Reactive Programming',
        services: [
            {
                title: 'Observable Streams & Operators',
                description: 'Design and implement complex data streams using RxJS observables and operators for real-time applications.',
                details: 'Expert composition of observables with map, filter, reduce, switchMap, and other operators to handle complex async workflows efficiently.',
            },
            {
                title: 'State Management with RxJS',
                description: 'Build reactive state management solutions using RxJS as the foundation for your application state.',
                details: 'Implement subjects, behavior subjects, and replay subjects for managing application state with reactive patterns.',
            },
            {
                title: 'Angular Integration & Optimization',
                description: 'Seamlessly integrate RxJS with Angular applications for reactive component communication and data handling.',
                details: 'Unsubscription management, async pipe usage, and performance optimization for Angular applications using RxJS.',
            },
            {
                title: 'Error Handling & Retry Logic',
                description: 'Implement robust error handling and retry strategies for reliable observable chains.',
                details: 'Using catchError, retry, timeout, and error boundary patterns to build resilient streaming applications.',
            },
            {
                title: 'Real-time Data Processing',
                description: 'Process real-time data streams from APIs, WebSockets, and event sources with RxJS.',
                details: 'Debouncing, throttling, and batching patterns for handling high-frequency data streams efficiently.',
            },
            {
                title: 'Testing & Debugging Observables',
                description: 'Comprehensive testing strategies for observable-based code using marble testing and TestScheduler.',
                details: 'Test observable chains, timing, and side effects using RxJS testing utilities and best practices.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Operators',
                tools: ['map', 'filter', 'switchMap', 'mergeMap', 'concatMap', 'flatMap', 'reduce', 'scan'],
            },
            {
                title: 'Subject Types',
                tools: ['Subject', 'BehaviorSubject', 'ReplaySubject', 'AsyncSubject', 'PublishSubject', 'MulticastSubject'],
            },
            {
                title: 'Error Handling',
                tools: ['catchError', 'retry', 'timeout', 'throwError', 'finalize', 'onErrorResumeNext'],
            },
            {
                title: 'Timing Operators',
                tools: ['debounceTime', 'throttleTime', 'delay', 'interval', 'timer', 'timeout'],
            },
            {
                title: 'Combination Operators',
                tools: ['combineLatest', 'merge', 'concat', 'race', 'zip', 'withLatestFrom'],
            },
            {
                title: 'Framework Integration',
                tools: ['Angular', 'Node.js', 'React', 'Vue', 'NestJS', 'Express'],
            },
            {
                title: 'Testing Tools',
                tools: ['TestScheduler', 'marbleTesting', 'jest', 'karma', 'jasmine', 'vitest'],
            },
            {
                title: 'Related Libraries',
                tools: ['Redux Observable', 'NgRx', 'Akita', 'MobX-State-Tree', 'Redux-Observable'],
            },
        ],
        whyChoose: [
            {
                title: 'Expert Reactive Programmers',
                description: 'Our team includes specialists who deeply understand reactive programming patterns and RxJS best practices.',
            },
            {
                title: 'Production-Proven Patterns',
                description: 'We implement patterns that have been tested in real-world, high-traffic applications.',
            },
            {
                title: 'Performance Optimization',
                description: 'Expert knowledge of subscription management and memory leak prevention in complex RxJS applications.',
            },
            {
                title: 'Angular Integration Expertise',
                description: 'Deep integration with Angular, leveraging RxJS for component communication, HTTP services, and async operations.',
            },
            {
                title: 'Comprehensive Training',
                description: 'We educate your team on reactive programming patterns to build sustainable, maintainable code.',
            },
            {
                title: 'Real-time Systems Specialization',
                description: 'Experience building real-time applications with WebSockets, streaming data, and event-driven architectures.',
            },
        ],
        keyFacts: [
            'RxJS enables composable, functional reactive programming patterns for handling async operations',
            'Observables provide a unified abstraction for events, async operations, and streams',
            'RxJS is the foundation of Angular\'s reactive architecture and async handling',
            'Operators allow declarative transformation and combination of multiple data streams',
            'Subject classes enable multicast communication between multiple subscribers',
            'Marble diagrams provide a visual representation of observable behavior over time',
            'RxJS 7+ includes improved type safety and tree-shaking capabilities',
            'Memory management and unsubscription handling are critical for production RxJS applications',
        ],
        faqs: [
            {
                question: 'What is the difference between Observable and Promise?',
                answer: 'Observables can emit multiple values over time, support cancellation, and provide operators for composition. Promises return a single value or error. Observables are more powerful for handling streams and complex async scenarios.',
            },
            {
                question: 'When should I use switchMap vs mergeMap?',
                answer: 'Use switchMap when you want to cancel previous inner observables when a new value arrives (ideal for search/autocomplete). Use mergeMap when all inner observables should run concurrently (ideal for parallel operations).',
            },
            {
                question: 'How do I prevent memory leaks in RxJS?',
                answer: 'Always unsubscribe from observables or use the async pipe in Angular templates. Use takeUntil pattern with a destruction subject, or use finite observables that complete automatically.',
            },
            {
                question: 'Can RxJS be used outside of Angular?',
                answer: 'Yes! RxJS is framework-agnostic and can be used in Node.js backends, React applications, Vue applications, or any JavaScript environment for handling async operations and streams.',
            },
            {
                question: 'What is the learning curve for RxJS?',
                answer: 'RxJS has a steep learning curve initially due to functional programming concepts. Once you understand observables and basic operators, most concepts follow logical patterns. Our team can accelerate this learning process.',
            },
        ],
        relatedTechs: ['Angular', 'NestJS', 'TypeScript', 'NgRx', 'Node.js', 'Redux Observable', 'Reactive Programming'],
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
