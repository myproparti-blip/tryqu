'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckSquare } from 'lucide-react';

export default function PlaywrightTechPage() {
    const techData = {
        name: 'Playwright',
        emoji: '🎭',
        icon: <CheckSquare className="w-6 h-6" />,
        shortDescription:
            'Modern browser automation for testing. Our Playwright experts deliver comprehensive end-to-end testing solutions with nearshore expertise.',
        heroTitle: 'Modern Browser Automation with Playwright',
        heroSubtitle:
            'Playwright is a modern, powerful open-source browser automation framework enabling testing across Chromium, Firefox, and WebKit. Our expert QA engineers leverage Playwright for fast, reliable end-to-end testing with exceptional developer experience. From component testing to complex user workflows, we deliver comprehensive Playwright expertise.',
        heroImage: '/images/tech-playwright-rich.svg',
        heroImageAlt: 'Playwright - Browser Automation Testing Framework',
        services: [
            {
                title: 'End-to-End Test Development',
                description:
                    'Build comprehensive E2E tests for web applications.',
                details:
                    'Test case design, user workflow testing, and assertion strategies.',
            },
            {
                title: 'Component Testing',
                description:
                    'Test individual components in isolation with Playwright.',
                details:
                    'Component interaction testing, props variation, and state management.',
            },
            {
                title: 'Visual Regression Testing',
                description:
                    'Detect visual changes with screenshot comparison.',
                details:
                    'Visual snapshots, regression detection, and baseline management.',
            },
            {
                title: 'Performance Testing',
                description:
                    'Measure performance metrics and identify bottlenecks.',
                details:
                    'Load time measurement, performance profiling, and optimization.',
            },
            {
                title: 'Multi-Browser Testing',
                description:
                    'Test across Chromium, Firefox, and WebKit simultaneously.',
                details:
                    'Cross-browser validation, platform-specific testing, and reporting.',
            },
            {
                title: 'Test Infrastructure Setup',
                description:
                    'Configure Playwright for CI/CD and team collaboration.',
                details:
                    'Configuration management, parallel execution, and environment setup.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Playwright Core',
                tools: [
                    'Playwright',
                    'Playwright Test',
                    'Chromium',
                    'Firefox',
                    'WebKit',
                    'Multiple Contexts',
                ],
            },
            {
                title: 'Test Framework',
                tools: [
                    'Playwright Test',
                    'Test Fixtures',
                    'Page Object Model',
                    'Assertions',
                    'Expect',
                    'Custom Matchers',
                ],
            },
            {
                title: 'Debugging & Inspection',
                tools: [
                    'Playwright Inspector',
                    'VS Code Extension',
                    'Trace Viewer',
                    'Screenshot',
                    'Video Recording',
                    'HAR Recording',
                ],
            },
            {
                title: 'Testing Features',
                tools: [
                    'Auto-wait',
                    'Action Timeout',
                    'Network Interception',
                    'Request/Response Mocking',
                    'Cookie Management',
                    'Storage',
                ],
            },
            {
                title: 'Language Support',
                tools: [
                    'JavaScript',
                    'TypeScript',
                    'Python',
                    'Java',
                    '.NET (C#)',
                    'Go',
                ],
            },
            {
                title: 'Reporting & Monitoring',
                tools: [
                    'HTML Report',
                    'JUnit XML',
                    'JSON Report',
                    'Allure Integration',
                    'Custom Reporters',
                    'Trace Viewer',
                ],
            },
            {
                title: 'CI/CD Integration',
                tools: [
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'CircleCI',
                    'Azure Pipelines',
                    'Travis CI',
                ],
            },
            {
                title: 'Infrastructure',
                tools: [
                    'Docker Support',
                    'Kubernetes',
                    'Cloud Providers',
                    'Docker Compose',
                    'Docker Image',
                    'Headless Mode',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Multi-Browser Support',
                description:
                    'Test across Chromium, Firefox, and WebKit with single codebase.',
            },
            {
                title: 'Modern & Reliable',
                description:
                    'Built with auto-waits and modern practices eliminating flaky tests.',
            },
            {
                title: 'Developer Experience',
                description:
                    'Interactive test inspector, VS Code integration, and debug features.',
            },
            {
                title: 'Speed & Efficiency',
                description:
                    'Parallel test execution and shared test context for fast feedback.',
            },
            {
                title: 'Full Trace Capability',
                description:
                    'Record and replay test execution with full trace visibility.',
            },
            {
                title: 'Network Control',
                description:
                    'Intercept and mock network requests for reliable testing.',
            },
        ],
        keyFacts: [
            'Playwright is used by 35%+ of test automation teams replacing Selenium',
            'Developed by Microsoft, actively maintained and improved',
            'Auto-wait feature eliminates 90% of flaky test issues',
            'Parallel test execution reduces CI time significantly',
            'Multi-browser support across Chromium, Firefox, and WebKit',
            'Trace Viewer provides complete execution visibility',
            'VS Code extension provides interactive test development',
            'Used by companies including Google, Microsoft, and GitHub',
        ],
        faqs: [
            {
                question: 'Should we use Playwright or Selenium?',
                answer:
                    'Playwright is modern, faster, and more reliable. Selenium is more mature with broader adoption. For new projects, Playwright. For existing Selenium tests, gradual migration possible.',
            },
            {
                question: 'What\'s Playwright\'s advantage over Cypress?',
                answer:
                    'Playwright supports multi-browser testing (Chromium, Firefox, WebKit). Cypress is Chromium-only. Playwright better for cross-browser requirements.',
            },
            {
                question: 'How do we reduce test flakiness with Playwright?',
                answer:
                    'Use auto-wait feature (waits for elements automatically). Avoid hardcoded waits. Implement proper selectors. Use network mocking for external dependencies.',
            },
            {
                question: 'Can we test multiple browsers simultaneously?',
                answer:
                    'Yes, Playwright supports testing across Chromium, Firefox, and WebKit in parallel. Configure different browser contexts for comprehensive coverage.',
            },
            {
                question: 'How do we handle authentication in Playwright tests?',
                answer:
                    'Use browser context with saved authentication state. Or implement login flows in test setup. Playwright storage state feature enables fast test execution.',
            },
            {
                question: 'Does Playwright support mobile testing?',
                answer:
                    'Yes, with device emulation for iOS and Android. Test responsive design, touch interactions, and mobile viewports.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Browser Test Suite',
                description:
                    'Built 400+ E2E tests running on Chromium, Firefox, WebKit reducing browser issues by 80%.',
                link: '#',
            },
            {
                title: 'Visual Regression Detection',
                description:
                    'Implemented visual regression testing catching UI changes automatically.',
                link: '#',
            },
            {
                title: 'CI/CD Test Optimization',
                description:
                    'Reduced test execution time from 45 minutes to 8 minutes with parallel execution.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Cypress',
            'Selenium',
            'TestNG',
            'Jest',
            'GitHub Actions',
            'Docker',
            'TypeScript',
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
