'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckSquare } from 'lucide-react';

export default function VitestTechPage() {
    const techData = {
        name: 'Vitest',
        emoji: '⚡',
        icon: <CheckSquare className="w-6 h-6" />,
        shortDescription:
            'Fast unit testing for modern JavaScript. Our Vitest experts deliver comprehensive testing solutions with nearshore expertise.',
        heroTitle: 'Lightning-Fast JavaScript Testing with Vitest',
        heroSubtitle:
            'Vitest is a modern, blazing-fast unit testing framework built on Vite enabling instant feedback and HMR for JavaScript and TypeScript projects. Our expert developers leverage Vitest for comprehensive test coverage with exceptional speed. From unit tests to integration tests, we deliver Vitest expertise for modern JavaScript development.',
        heroImage: '/images/tech-vitest-rich.svg',
        heroImageAlt: 'Vitest - Unit Testing Framework',
        services: [
            {
                title: 'Unit Test Development',
                description:
                    'Write comprehensive unit tests for JavaScript and TypeScript code.',
                details:
                    'Test case design, assertions, mocking, and test organization.',
            },
            {
                title: 'Integration Testing',
                description:
                    'Test component interactions and module integration.',
                details:
                    'Multi-module testing, external dependency mocking, and integration scenarios.',
            },
            {
                title: 'Code Coverage Analysis',
                description:
                    'Measure and improve code coverage with detailed reports.',
                details:
                    'Coverage tracking, coverage thresholds, and gap analysis.',
            },
            {
                title: 'Test Infrastructure Setup',
                description:
                    'Configure Vitest for optimal test execution and CI/CD.',
                details:
                    'Vitest configuration, test environment setup, and optimization.',
            },
            {
                title: 'Migration to Vitest',
                description:
                    'Migrate existing Jest or other test suites to Vitest.',
                details:
                    'Jest compatibility mode, test refactoring, and validation.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize test execution speed and resource usage.',
                details:
                    'Parallel execution, test isolation, and performance monitoring.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Vitest Core',
                tools: [
                    'Vitest',
                    'Vite',
                    'Node Test Runner',
                    'HMR',
                    'Watch Mode',
                    'REPL',
                ],
            },
            {
                title: 'Testing Tools',
                tools: [
                    'Chai (assertions)',
                    'Happy DOM',
                    'JSDOM',
                    'Node Primitives',
                    'Stub/Spy',
                    'Mocking',
                ],
            },
            {
                title: 'Test Runners & Assertions',
                tools: [
                    'Jest Compatible',
                    'Chai Assertions',
                    'Expect',
                    'Assert',
                    'TDD Interface',
                    'Snapshot Testing',
                ],
            },
            {
                title: 'Framework Integration',
                tools: [
                    'React Testing Library',
                    'Vue Test Utils',
                    'Svelte Testing',
                    '@testing-library/vue',
                    'Pinia (Vue Store)',
                    'Zustand (State)',
                ],
            },
            {
                title: 'Mocking & Spying',
                tools: [
                    'vi.mock()',
                    'vi.spyOn()',
                    'Manual Mocks',
                    'Module Mocks',
                    'MSW (Mock Service Worker)',
                    'nock',
                ],
            },
            {
                title: 'Configuration & Setup',
                tools: [
                    'vitest.config.ts',
                    'Environment Configuration',
                    'Setup Files',
                    'Globals',
                    'Reporter Configuration',
                    'Coverage Config',
                ],
            },
            {
                title: 'CI/CD Integration',
                tools: [
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'CircleCI',
                    'Travis CI',
                    'Azure Pipelines',
                ],
            },
            {
                title: 'IDE & Developer Tools',
                tools: [
                    'VS Code Extension',
                    'WebStorm Support',
                    'Watch Mode',
                    'REPL',
                    'Debug Support',
                    'Coverage Reports',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Blazing Fast',
                description:
                    'Built on Vite with HMR, Vitest executes tests instantly with hot reloading.',
            },
            {
                title: 'Jest Compatible',
                description:
                    'Drop-in Jest replacement with minimal migration effort.',
            },
            {
                title: 'Modern Development',
                description:
                    'Perfect for Vite projects, ESM-first, and TypeScript projects.',
            },
            {
                title: 'Developer Experience',
                description:
                    'Instant feedback, HMR, interactive watch mode, and REPL support.',
            },
            {
                title: 'Type Safety',
                description:
                    'Excellent TypeScript support with intellisense and type checking.',
            },
            {
                title: 'Small & Fast',
                description:
                    'Lightweight with minimal dependencies compared to Jest.',
            },
        ],
        keyFacts: [
            'Vitest is 20-30x faster than Jest for modern project structures',
            'Built on Vite, the next-generation JavaScript build tool',
            'Jest API compatible for easy migration and adoption',
            'Supports both ESM and CommonJS modules',
            'HMR (Hot Module Reloading) for instant feedback during development',
            'TypeScript native support without additional configuration',
            'Growing adoption by companies using Vite (Vue, Nuxt, SvelteKit, etc.)',
            'Active open-source project with rapid development',
        ],
        faqs: [
            {
                question: 'Should we migrate from Jest to Vitest?',
                answer:
                    'If using Vite, yes. Vitest offers better performance and DX. If on Webpack/CRA, Jest is still solid. Vitest is ideal for modern projects with ESM.',
            },
            {
                question: 'Is Vitest compatible with existing Jest tests?',
                answer:
                    'Mostly yes. Jest API is compatible. Some plugins may need adjustment. Migration is usually straightforward.',
            },
            {
                question: 'What\'s the performance difference between Vitest and Jest?',
                answer:
                    'Vitest is 20-30x faster due to Vite\'s architecture and HMR. For small projects difference is minimal. For larger projects, Vitest is significantly faster.',
            },
            {
                question: 'Can we use Vitest for React/Vue/Svelte projects?',
                answer:
                    'Yes, with respective testing libraries. Vitest works perfectly with React Testing Library, Vue Test Utils, and Svelte testing utilities.',
            },
            {
                question: 'How do we run Vitest in CI/CD?',
                answer:
                    'Similar to Jest: `vitest run` for CI mode, coverage reporting, and CI service integration (GitHub Actions, etc.) work out-of-the-box.',
            },
            {
                question: 'Does Vitest support snapshot testing?',
                answer:
                    'Yes, Vitest supports Jest-compatible snapshots. Snapshot testing, snapshot updates, and snapshot management work the same.',
            },
        ],
        caseStudies: [
            {
                title: 'Vite Project Test Suite',
                description:
                    'Built comprehensive test suite with 500+ tests executing in 2 seconds.',
                link: '#',
            },
            {
                title: 'Jest Migration Success',
                description:
                    'Migrated 1000+ Jest tests to Vitest reducing CI time from 5 minutes to 30 seconds.',
                link: '#',
            },
            {
                title: 'React Component Testing',
                description:
                    'Implemented comprehensive React component tests with Vitest and RTL.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Vite',
            'Jest',
            'React Testing Library',
            'TypeScript',
            'Vue Test Utils',
            'Vitest UI',
            'GitHub Actions',
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
