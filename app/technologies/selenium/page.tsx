'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckSquare } from 'lucide-react';

export default function SeleniumTechPage() {
    const techData = {
        name: 'Selenium',
        emoji: '🔍',
        icon: <CheckSquare className="w-6 h-6" />,
        shortDescription:
            'Automate browser testing with Selenium. Our Selenium QA experts deliver comprehensive end-to-end testing solutions with nearshore expertise.',
        heroTitle: 'Browser Automation & Testing with Selenium',
        heroSubtitle:
            'Selenium is the world\'s most popular open-source browser automation framework enabling automated testing across multiple browsers and platforms. Our expert QA engineers leverage Selenium for comprehensive test automation, reducing manual testing effort and improving software quality. From unit tests to complex user workflows, we deliver comprehensive Selenium expertise.',
        heroImage: '/images/tech-selenium-rich.svg',
        heroImageAlt: 'Selenium - Browser Automation Framework',
        services: [
            {
                title: 'Test Automation Strategy',
                description:
                    'Develop comprehensive test automation strategies and frameworks.',
                details:
                    'Test planning, framework selection, test case design, and best practices.',
            },
            {
                title: 'Functional Testing',
                description:
                    'Automate functional tests for web applications across browsers.',
                details:
                    'End-to-end testing, form validation, navigation, and user interactions.',
            },
            {
                title: 'Cross-Browser Testing',
                description:
                    'Ensure application compatibility across multiple browsers and versions.',
                details:
                    'Chrome, Firefox, Safari, Edge testing with grid setup.',
            },
            {
                title: 'Regression Testing',
                description:
                    'Automate regression testing to catch bugs early in development.',
                details:
                    'Test suite maintenance, continuous regression testing, and CI/CD integration.',
            },
            {
                title: 'Performance Testing',
                description:
                    'Measure page load times and browser performance.',
                details:
                    'Performance metrics collection, bottleneck identification, and optimization.',
            },
            {
                title: 'Test Framework Development',
                description:
                    'Build robust, maintainable test frameworks and libraries.',
                details:
                    'Page Object Model, test utilities, custom commands, and reporting.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Selenium Components',
                tools: [
                    'Selenium WebDriver',
                    'Selenium IDE',
                    'Selenium Grid',
                    'Selenium Remote',
                    'Selenium Manager',
                    'WebDriver Protocol',
                ],
            },
            {
                title: 'Browser Drivers',
                tools: [
                    'ChromeDriver',
                    'GeckoDriver (Firefox)',
                    'SafariDriver',
                    'EdgeDriver',
                    'OperaDriver',
                    'WebDriver Manager',
                ],
            },
            {
                title: 'Language Bindings',
                tools: [
                    'Java',
                    'Python',
                    'JavaScript (WebdriverIO)',
                    'Ruby',
                    'C#',
                    'PHP',
                ],
            },
            {
                title: 'Test Frameworks',
                tools: [
                    'TestNG',
                    'JUnit',
                    'pytest',
                    'Mocha',
                    'NUnit',
                    'RSpec',
                ],
            },
            {
                title: 'Test Management',
                tools: [
                    'TestRail',
                    'qTest',
                    'Zephyr',
                    'TestLodge',
                    'Allure Reports',
                    'ExtentReports',
                ],
            },
            {
                title: 'CI/CD Integration',
                tools: [
                    'Jenkins',
                    'GitHub Actions',
                    'GitLab CI',
                    'CircleCI',
                    'Travis CI',
                    'Azure Pipelines',
                ],
            },
            {
                title: 'Cloud Testing Platforms',
                tools: [
                    'BrowserStack',
                    'Sauce Labs',
                    'LambdaTest',
                    'CrossBrowserTesting',
                    'Experitest',
                    'TestProject',
                ],
            },
            {
                title: 'Supporting Tools',
                tools: [
                    'Page Object Model',
                    'WebDriverWait',
                    'Log4j',
                    'AssertJ',
                    'REST Assured',
                    'Apache POI',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Open Source & Free',
                description:
                    'No licensing costs, open-source community, and continuous improvements.',
            },
            {
                title: 'Multi-Browser Support',
                description:
                    'Test across all major browsers with single codebase.',
            },
            {
                title: 'Large Community',
                description:
                    'Extensive documentation, tutorials, and community support.',
            },
            {
                title: 'Flexibility',
                description:
                    'Works with any programming language and testing framework.',
            },
            {
                title: 'Easy Integration',
                description:
                    'Seamless CI/CD integration for automated test execution.',
            },
            {
                title: 'Industry Standard',
                description:
                    'Most widely used browser automation tool in the industry.',
            },
        ],
        keyFacts: [
            'Selenium is used by 50%+ of QA teams for test automation',
            'Supports testing on Windows, Mac, and Linux platforms',
            'Works with all major browsers: Chrome, Firefox, Safari, Edge',
            'WebDriver Protocol is W3C standard enabling cross-browser compatibility',
            'Selenium Grid enables parallel test execution reducing test time',
            'Active open-source community with continuous development',
            'Used by companies including Google, Facebook, and Microsoft',
            'Works with popular frameworks: TestNG, JUnit, pytest, and more',
        ],
        faqs: [
            {
                question: 'What\'s the difference between Selenium and other test frameworks?',
                answer:
                    'Selenium focuses on browser automation. Others like Cypress, Playwright offer newer approaches. Selenium is more mature, widely adopted, and has better cross-browser support.',
            },
            {
                question: 'How do we handle waits in Selenium tests?',
                answer:
                    'Use WebDriverWait with expected conditions. Avoid hardcoded sleep(). Implicit waits can cause issues; prefer explicit waits for reliability.',
            },
            {
                question: 'What\'s Page Object Model in Selenium?',
                answer:
                    'Design pattern separating page elements from test logic. Each page has a class representing elements and actions, improving maintainability and reusability.',
            },
            {
                question: 'How do we run Selenium tests in parallel?',
                answer:
                    'Using Selenium Grid for distributed execution. Cloud platforms like BrowserStack enable parallel testing. TestNG/pytest support parallel execution.',
            },
            {
                question: 'Can Selenium test mobile applications?',
                answer:
                    'Selenium itself is for web browsers. Use Appium (built on Selenium) for mobile app testing on iOS and Android.',
            },
            {
                question: 'How do we handle dynamic content in Selenium?',
                answer:
                    'Use explicit waits with conditions. Implement flake reduction strategies. Wait for elements to be clickable, not just visible.',
            },
        ],
        caseStudies: [
            {
                title: 'Comprehensive Test Suite Implementation',
                description:
                    'Built automated test suite covering 500+ test cases for e-commerce platform.',
                link: '#',
            },
            {
                title: 'Cross-Browser Test Automation',
                description:
                    'Implemented cross-browser testing on 10+ browser versions reducing test time by 80%.',
                link: '#',
            },
            {
                title: 'CI/CD Test Integration',
                description:
                    'Integrated Selenium tests with Jenkins pipeline running 1000+ tests per deployment.',
                link: '#',
            },
        ],
        relatedTechs: [
            'TestNG',
            'Cypress',
            'Playwright',
            'Appium',
            'Jest',
            'Jenkins',
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
