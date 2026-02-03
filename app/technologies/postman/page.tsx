'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Settings } from 'lucide-react';

export default function PostmanTechPage() {
    const techData = {
        name: 'Postman',
        emoji: '🚀',
        icon: <Settings className="w-6 h-6" />,
        shortDescription:
            'Complete API development platform. Our Postman experts deliver comprehensive API testing and collaboration solutions with nearshore expertise.',
        heroTitle: 'Comprehensive API Development with Postman',
        heroSubtitle:
            'Postman is the world\'s leading API development platform used by millions of developers for designing, testing, and documenting APIs. Our expert developers leverage Postman for comprehensive API testing, automation, and collaboration across teams. From REST to GraphQL, we deliver comprehensive Postman expertise for modern API development.',
        heroImage: '/images/tech-postman-rich.svg',
        heroImageAlt: 'Postman - API Development Platform',
        services: [
            {
                title: 'API Testing & Validation',
                description:
                    'Build comprehensive API test suites ensuring correctness.',
                details:
                    'Request/response validation, status code checking, and payload verification.',
            },
            {
                title: 'Collection Development',
                description:
                    'Organize and manage API requests in collections.',
                details:
                    'Collection structure, request organization, and folder management.',
            },
            {
                title: 'Automated Test Execution',
                description:
                    'Run API tests in CI/CD pipelines automatically.',
                details:
                    'Newman integration, scheduled runs, and automation setup.',
            },
            {
                title: 'API Documentation',
                description:
                    'Generate comprehensive API documentation from collections.',
                details:
                    'Auto-generated docs, examples, and stakeholder sharing.',
            },
            {
                title: 'Mock Servers',
                description:
                    'Create mock APIs for development and testing.',
                details:
                    'Mock server setup, response simulation, and dynamic responses.',
            },
            {
                title: 'API Monitoring',
                description:
                    'Monitor API health and performance continuously.',
                details:
                    'Uptime monitoring, performance tracking, and alerting.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Postman Core',
                tools: [
                    'Postman App',
                    'Web Version',
                    'Desktop App',
                    'Collections',
                    'Environments',
                    'Workspaces',
                ],
            },
            {
                title: 'Testing Features',
                tools: [
                    'Tests Tab',
                    'Scripts',
                    'Pre-request Script',
                    'Assertions',
                    'Chai Assertions',
                    'Custom Tests',
                ],
            },
            {
                title: 'API Types',
                tools: [
                    'REST APIs',
                    'GraphQL',
                    'SOAP',
                    'Webhooks',
                    'gRPC',
                    'WebSockets',
                ],
            },
            {
                title: 'Automation & CI/CD',
                tools: [
                    'Newman CLI',
                    'GitHub Actions',
                    'Jenkins',
                    'GitLab CI',
                    'CircleCI',
                    'Azure Pipelines',
                ],
            },
            {
                title: 'Collaboration',
                tools: [
                    'Team Workspaces',
                    'Collection Sharing',
                    'Comments',
                    'Version Control',
                    'Fork & Merge',
                    'Activity Feed',
                ],
            },
            {
                title: 'Documentation',
                tools: [
                    'Generated Docs',
                    'Markdown Support',
                    'Examples',
                    'Public Collections',
                    'API Portal',
                    'Sharing Links',
                ],
            },
            {
                title: 'Monitoring & APIs',
                tools: [
                    'Monitors',
                    'Postman API',
                    'Mock Servers',
                    'API Builder',
                    'API Versioning',
                    'Webhooks',
                ],
            },
            {
                title: 'Integrations',
                tools: [
                    'Slack Integration',
                    'Azure DevOps',
                    'Datadog',
                    'New Relic',
                    'Splunk',
                    'Custom Webhooks',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'All-in-One Platform',
                description:
                    'Testing, documentation, mocking, and monitoring in single platform.',
            },
            {
                title: 'Team Collaboration',
                description:
                    'Real-time collaboration with shared collections and workspaces.',
            },
            {
                title: 'Easy Automation',
                description:
                    'Newman CLI enables seamless CI/CD integration with minimal setup.',
            },
            {
                title: 'Multi-API Support',
                description:
                    'Support for REST, GraphQL, SOAP, gRPC enabling universal API testing.',
            },
            {
                title: 'Learning Resources',
                description:
                    'Postman Learning Center and community resources facilitate adoption.',
            },
            {
                title: 'Enterprise Ready',
                description:
                    'Enterprise features including SSO, team management, and analytics.',
            },
        ],
        keyFacts: [
            'Postman has 20M+ monthly active users globally',
            'Used by 99% of Fortune 100 companies for API testing',
            'Postman Learning Center has 50M+ sessions annually',
            'Newman CLI enables API testing in any CI/CD environment',
            'Mock Servers enable development without backend ready',
            'Postman API enables programmatic collection management',
            'Public API Network provides thousands of public collections',
            'Enterprise versions include advanced security and governance',
        ],
        faqs: [
            {
                question: 'Is Postman only for testing or can it help with API development?',
                answer:
                    'Postman is comprehensive API development platform supporting: API design, testing, mocking, documentation, monitoring, and team collaboration. It covers entire API lifecycle.',
            },
            {
                question: 'Can we run Postman tests in CI/CD automatically?',
                answer:
                    'Yes, using Newman CLI. Run collections, generate reports, and integrate with any CI/CD (GitHub Actions, Jenkins, etc.) for automated API testing.',
            },
            {
                question: 'How do we share collections with team members?',
                answer:
                    'Use Team Workspaces for real-time collaboration. Share collections with granular permissions. Fork and merge collections for distributed development.',
            },
            {
                question: 'Can we test GraphQL APIs with Postman?',
                answer:
                    'Yes, Postman has first-class GraphQL support. Write GraphQL queries, test responses, and manage GraphQL variables.',
            },
            {
                question: 'What\'s the difference between Postman and Insomnia?',
                answer:
                    'Postman is more comprehensive with stronger collaboration. Insomnia is simpler with better offline support. For teams, Postman. For individual developers, both are viable.',
            },
            {
                question: 'How do we handle authentication in Postman?',
                answer:
                    'Postman supports multiple auth types: Basic Auth, Bearer Token, OAuth 1.0/2.0, API Key, Digest Auth, etc. Store credentials in environments for security.',
            },
        ],
        caseStudies: [
            {
                title: 'Comprehensive API Test Suite',
                description:
                    'Created API test suite with 500+ tests covering all endpoints and edge cases.',
                link: '#',
            },
            {
                title: 'CI/CD API Testing Integration',
                description:
                    'Integrated Postman with Jenkins running API tests on every deployment.',
                link: '#',
            },
            {
                title: 'Cross-Team API Collaboration',
                description:
                    'Implemented Postman workspaces enabling 50+ developers to collaborate on APIs.',
                link: '#',
            },
        ],
        relatedTechs: [
            'REST APIs',
            'GraphQL',
            'Newman',
            'Node.js',
            'Jenkins',
            'GitHub Actions',
            'Express.js',
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
