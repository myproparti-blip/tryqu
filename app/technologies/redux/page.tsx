'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function ReduxTechPage() {
    const techData = {
        name: 'Redux',
        emoji: '🔄',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription: 'Predictable state management for JavaScript applications. Expert Redux development for complex enterprise applications.',
        heroTitle: 'Build Scalable Applications with Redux State Management',
        heroSubtitle: 'Redux provides a predictable, centralized approach to managing application state. Our experts implement Redux patterns for React, Vue, and Angular applications, handling complex state management challenges with clean, maintainable code.',
        heroImage: '/images/tech-redux-rich.svg',
        heroImageAlt: 'Redux - State Management',
        services: [
            {
                title: 'Redux Store Architecture',
                description: 'Design and implement Redux stores with proper reducers, actions, and selectors for scalable state management.',
                details: 'Expert architecture for Redux stores, normalization strategies, and middleware configuration for enterprise applications.',
            },
            {
                title: 'Actions & Reducers',
                description: 'Create pure, predictable reducers and well-typed action creators for reliable state mutations.',
                details: 'Implement actions with payloads, async actions with thunk middleware, and test-friendly reducer patterns.',
            },
            {
                title: 'Redux Selectors & Memoization',
                description: 'Optimize Redux applications using reselect and memoization for efficient component re-renders.',
                details: 'Build selectors that derive state efficiently, preventing unnecessary re-renders and improving application performance.',
            },
            {
                title: 'Async State Management',
                description: 'Handle async operations with Redux Thunk, Redux Saga, or Redux Observable for API calls and side effects.',
                details: 'Implement loading states, error handling, and complex async workflows in your Redux applications.',
            },
            {
                title: 'Redux DevTools Integration',
                description: 'Leverage Redux DevTools for time-travel debugging, action inspection, and state monitoring.',
                details: 'Setup Redux DevTools integration for development productivity and advanced debugging capabilities.',
            },
            {
                title: 'TypeScript & Redux Typing',
                description: 'Implement strongly-typed Redux with TypeScript for improved type safety and developer experience.',
                details: 'Setup proper TypeScript types for store, reducers, selectors, and dispatch to prevent runtime errors.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Redux',
                tools: ['Redux', 'Redux Thunk', 'Redux Middleware', 'Redux DevTools', 'Redux Persist'],
            },
            {
                title: 'State Management Libraries',
                tools: ['Redux Saga', 'Redux Observable', 'Redux Toolkit', 'Immer', 'normalizr'],
            },
            {
                title: 'Selectors & Utilities',
                tools: ['Reselect', 'Redux Selector', 'redux-actions', 'redux-immutable', 'deep-freeze'],
            },
            {
                title: 'React Integration',
                tools: ['React-Redux', 'Connect', 'useSelector Hook', 'useDispatch Hook', 'Redux Provider'],
            },
            {
                title: 'Testing Libraries',
                tools: ['Jest', 'React Testing Library', 'Enzyme', 'Mock Store', 'Redux Test Utilities'],
            },
            {
                title: 'Developer Tools',
                tools: ['Redux DevTools Extension', 'Redux Logger', 'Redux Diff Logger', 'Redux Witness'],
            },
            {
                title: 'Async Patterns',
                tools: ['Thunk', 'Saga', 'Observable', 'Promise Middleware', 'Async Actions'],
            },
            {
                title: 'Alternative Solutions',
                tools: ['Zustand', 'Jotai', 'Recoil', 'MobX', 'Context API'],
            },
        ],
        whyChoose: [
            {
                title: 'Predictable State Management',
                description: 'Redux provides a single source of truth and predictable state mutations, making applications easier to reason about.',
            },
            {
                title: 'Enterprise-Grade Solutions',
                description: 'Our team handles complex state management for large-scale applications with hundreds of features.',
            },
            {
                title: 'Performance Optimization',
                description: 'Expert implementation of selectors, memoization, and normalization for optimal application performance.',
            },
            {
                title: 'Debugging & DevTools Expertise',
                description: 'Deep knowledge of Redux DevTools for efficient debugging and development productivity.',
            },
            {
                title: 'Middleware & Side Effects',
                description: 'Expert handling of async operations, API calls, and side effects using Redux Thunk, Saga, or Observable.',
            },
            {
                title: 'Testing & Maintainability',
                description: 'Implement patterns that make Redux applications easy to test and maintain over time.',
            },
        ],
        keyFacts: [
            'Redux provides a single immutable state tree for entire application state',
            'Unidirectional data flow ensures predictable state changes and easier debugging',
            'Time-travel debugging with Redux DevTools allows inspecting and replaying state changes',
            'Middleware architecture enables custom logic for handling actions before reaching reducers',
            'Selector memoization prevents unnecessary component re-renders by returning cached values',
            'Redux Toolkit simplifies boilerplate with createSlice and thunk utilities',
            'Redux is framework-agnostic and can be used with React, Vue, Angular, or vanilla JavaScript',
            'Normalization patterns optimize complex nested state structures for better performance',
        ],
        faqs: [
            {
                question: 'When should I use Redux vs Context API?',
                answer: 'Use Redux for complex applications with lots of state and interactions. Use Context API for simpler state sharing. Redux provides better DevTools, middleware, and performance optimization for large apps.',
            },
            {
                question: 'What is Redux Toolkit and should I use it?',
                answer: 'Redux Toolkit is the official recommended way to use Redux. It reduces boilerplate with createSlice, includes Immer for immutable updates, and provides better DevTools integration. We recommend using it for new projects.',
            },
            {
                question: 'How do I handle async operations in Redux?',
                answer: 'Use Redux Thunk for simple async operations, Redux Saga for complex side effect management, or Redux Observable for RxJS-based reactive patterns. Each has tradeoffs in complexity and power.',
            },
            {
                question: 'Is Redux overkill for small applications?',
                answer: 'Yes, for small applications Context API or simpler state management (Zustand, Jotai) is often better. Redux shines when state complexity grows and multiple features need to interact.',
            },
            {
                question: 'Can Redux work with TypeScript?',
                answer: 'Absolutely! Redux works great with TypeScript. Redux Toolkit with TypeScript provides excellent type safety. Proper typing of state, reducers, and selectors prevents runtime errors.',
            },
        ],
        relatedTechs: ['React', 'Redux Saga', 'Redux Observable', 'RxJS', 'TypeScript', 'Zustand', 'Context API'],
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
