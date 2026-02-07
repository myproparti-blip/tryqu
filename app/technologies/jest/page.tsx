'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Zap } from 'lucide-react';

export default function JestTechPage() {
    const techData = {
        name: 'Jest',
        emoji: '🃏',
        icon: <Zap className="w-6 h-6" />,
        shortDescription: 'Comprehensive JavaScript testing framework with zero configuration. Expert Jest implementation for quality code.',
        heroTitle: 'Test JavaScript Code with Jest',
        heroSubtitle: 'Jest is a delightful JavaScript testing framework with a focus on simplicity. It provides a zero-config experience, excellent coverage reporting, and powerful mocking capabilities. Perfect for testing React applications, Node.js code, and any JavaScript project.',
        heroImage: '/images/tech-jest-rich.svg',
        heroImageAlt: 'Jest - JavaScript Testing Framework',
        services: [
            {
                title: 'Unit Testing',
                description: 'Write comprehensive unit tests for JavaScript functions, classes, and modules.',
                details: 'Leverage Jest matchers, assertions, and fixtures for thorough unit test coverage.',
            },
            {
                title: 'React Component Testing',
                description: 'Test React components with Jest and React Testing Library for user-focused testing.',
                details: 'Test component rendering, user interactions, state changes, and effects with best practices.',
            },
            {
                title: 'Mocking & Spying',
                description: 'Master Jest mocking capabilities for isolating code and testing complex interactions.',
                details: 'Mock modules, functions, API calls, and dependencies for controlled unit testing.',
            },
            {
                title: 'Snapshot Testing',
                description: 'Implement snapshot testing to prevent unintended changes in component output.',
                details: 'Use snapshot testing strategically to catch unexpected UI changes automatically.',
            },
            {
                title: 'Coverage Analysis',
                description: 'Achieve high test coverage with Jest\'s built-in coverage reporting tools.',
                details: 'Generate coverage reports, identify untested code paths, and enforce coverage thresholds.',
            },
            {
                title: 'Advanced Testing Patterns',
                description: 'Implement advanced testing patterns for async code, timers, and complex workflows.',
                details: 'Test promises, async/await, timers, and event-driven code with Jest utilities.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Testing Utilities',
                tools: ['Jest', 'Jest CLI', 'expect', 'jest-mock', 'jest-timer-mocks'],
            },
            {
                title: 'React Testing',
                tools: ['React Testing Library', 'Enzyme', 'Jest Snapshots', '@testing-library/react', 'Shallow Rendering'],
            },
            {
                title: 'Mocking Libraries',
                tools: ['jest.mock()', 'jest.fn()', 'jest.spyOn()', 'nock', 'fetch-mock'],
            },
            {
                title: 'Matchers & Assertions',
                tools: ['expect', 'toBe', 'toEqual', 'toHaveBeenCalled', 'Custom Matchers'],
            },
            {
                title: 'Setup & Configuration',
                tools: ['jest.config.js', 'setupFilesAfterEnv', 'moduleNameMapper', 'Babel', 'TypeScript Support'],
            },
            {
                title: 'Coverage Tools',
                tools: ['Istanbul', 'Coverage Reports', 'Coverage Thresholds', 'Codecov', 'Coveralls'],
            },
            {
                title: 'Integration Tools',
                tools: ['GitHub Actions', 'CI/CD Pipelines', 'Pre-commit Hooks', 'Webpack', 'Vite'],
            },
            {
                title: 'Related Frameworks',
                tools: ['Vitest', 'Mocha', 'Jasmine', 'Playwright', 'Cypress'],
            },
        ],
        whyChoose: [
            {
                title: 'Zero Configuration',
                description: 'Jest works out of the box without complex configuration for most projects.',
            },
            {
                title: 'Fast & Isolated',
                description: 'Jest runs tests in parallel and isolates test environments for speed.',
            },
            {
                title: 'React-First Testing',
                description: 'Excellent support for React testing with snapshot testing and component utilities.',
            },
            {
                title: 'Built-in Coverage',
                description: 'Comprehensive coverage reporting built-in without additional tools.',
            },
            {
                title: 'Powerful Mocking',
                description: 'Simple, flexible mocking system for testing complex interactions.',
            },
            {
                title: 'Great Documentation',
                description: 'Excellent documentation and active community with abundant examples.',
            },
        ],
        keyFacts: [
            'Jest is a JavaScript testing framework with a focus on simplicity and developer experience',
            'Zero-config experience - Jest works out of the box for most projects with sensible defaults',
            'Parallel test execution makes Jest faster than traditional test runners',
            'Snapshot testing helps prevent unintended changes to component UI and output',
            'Built-in code coverage reporting without needing Istanbul or other coverage tools',
            'Powerful mocking system allows testing code in isolation without external dependencies',
            'Excellent TypeScript support for type-safe testing in TypeScript projects',
            'Jest is used by major projects including React, Angular, Vue, and thousands of others',
        ],
        faqs: [
            {
                question: 'What is snapshot testing in Jest?',
                answer: 'Snapshot testing captures component output as a string and compares it in future test runs. Great for UI testing but use sparingly to prevent overuse. Update snapshots when intentional changes are made.',
            },
            {
                question: 'How do I test async code in Jest?',
                answer: 'Use async/await in test functions, return promises, or use Jest\'s done callback. Jest handles promise-based code automatically and provides utilities for testing async operations.',
            },
            {
                question: 'Should I test implementation details or user behavior?',
                answer: 'Prefer testing user behavior and observable outputs. React Testing Library encourages testing how users interact with components, not internal implementation. This makes tests more robust.',
            },
            {
                question: 'How do I mock API calls in Jest?',
                answer: 'Use jest.mock() to mock modules, jest.fn() to create mock functions, or libraries like nock or fetch-mock for HTTP calls. Jest automatically mocks dependencies and provides flexible mocking options.',
            },
            {
                question: 'What is the difference between Jest and Vitest?',
                answer: 'Vitest is a newer test runner with faster performance using Vite. Jest is more mature and widely used. Both are excellent; choose based on your project\'s build tool and needs.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Testing Library', 'Vitest', 'Cypress', 'Node.js', 'Web Development'],
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
