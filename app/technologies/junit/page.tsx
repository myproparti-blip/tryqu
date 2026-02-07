'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckSquare } from 'lucide-react';

export default function JUnitTechPage() {
    const techData = {
        name: 'JUnit',
        emoji: '🧪',
        icon: <CheckSquare className="w-6 h-6" />,
        shortDescription:
            'Java unit testing framework. Our JUnit experts deliver comprehensive Java testing solutions with nearshore expertise.',
        heroTitle: 'Enterprise Java Testing with JUnit',
        heroSubtitle:
            'JUnit is the most popular unit testing framework for Java enabling developers to write and run repeatable tests. Our expert Java developers leverage JUnit for comprehensive test coverage ensuring code quality and reliability. From unit tests to integration testing, we deliver comprehensive JUnit expertise for Java applications.',
        heroImage: '/images/tech-junit-rich.svg',
        heroImageAlt: 'JUnit - Java Unit Testing Framework',
        services: [
            {
                title: 'Unit Test Development',
                description:
                    'Write comprehensive unit tests for Java code.',
                details:
                    'Test case design, assertions, test organization, and best practices.',
            },
            {
                title: 'Integration Testing',
                description:
                    'Test component interactions and module integration.',
                details:
                    'Multi-component testing, database testing, and integration scenarios.',
            },
            {
                title: 'Mocking & Stubbing',
                description:
                    'Mock dependencies for isolated unit testing.',
                details:
                    'Mockito integration, spy setup, and complex mock scenarios.',
            },
            {
                title: 'Parameterized Testing',
                description:
                    'Run same test with multiple input parameters.',
                details:
                    'Data-driven testing, CSV sources, and value sources.',
            },
            {
                title: 'Test Fixtures & Setup',
                description:
                    'Manage test setup and teardown efficiently.',
                details:
                    'Before/After annotations, test lifecycle management, and extensions.',
            },
            {
                title: 'Code Coverage Analysis',
                description:
                    'Measure test coverage and identify gaps.',
                details:
                    'JaCoCo integration, coverage reports, and coverage thresholds.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'JUnit Versions',
                tools: [
                    'JUnit 5',
                    'JUnit 4',
                    'Jupiter',
                    'Vintage',
                    'Platform',
                    'JUnit Lambda',
                ],
            },
            {
                title: 'Mocking & Assertions',
                tools: [
                    'Mockito',
                    'AssertJ',
                    'Hamcrest',
                    'MockitoBDD',
                    'PowerMock',
                    'EasyMock',
                ],
            },
            {
                title: 'Test Fixtures',
                tools: [
                    '@Before/@After',
                    '@BeforeEach/@AfterEach',
                    '@BeforeClass/@AfterClass',
                    '@BeforeAll/@AfterAll',
                    '@Setup/@Teardown',
                    'TestFixture',
                ],
            },
            {
                title: 'Testing Patterns',
                tools: [
                    'Test Method Naming',
                    'Arrange-Act-Assert',
                    'Given-When-Then',
                    'AAA Pattern',
                    'BDD Style',
                    'Page Object Model',
                ],
            },
            {
                title: 'Code Coverage',
                tools: [
                    'JaCoCo',
                    'Cobertura',
                    'OpenClover',
                    'EMMA',
                    'Code Coverage Analysis',
                    'SonarQube',
                ],
            },
            {
                title: 'Build Integration',
                tools: [
                    'Maven Surefire',
                    'Gradle Test',
                    'Ant JUnit',
                    'Maven Failsafe',
                    'CI Integration',
                    'IDE Plugins',
                ],
            },
            {
                title: 'Spring Testing',
                tools: [
                    'Spring Test',
                    'Spring Boot Test',
                    'TestContext',
                    '@SpringBootTest',
                    '@WebMvcTest',
                    '@DataJpaTest',
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
        ],
        whyChoose: [
            {
                title: 'Industry Standard',
                description:
                    'Most widely used Java testing framework with massive community.',
            },
            {
                title: 'Framework Agnostic',
                description:
                    'Works with any Java framework: Spring, Jakarta EE, Hibernate, etc.',
            },
            {
                title: 'Modern Features',
                description:
                    'JUnit 5 provides powerful features: parameterized tests, custom extensions.',
            },
            {
                title: 'IDE Support',
                description:
                    'Built-in support in all major IDEs: IntelliJ, Eclipse, NetBeans.',
            },
            {
                title: 'Easy Integration',
                description:
                    'Seamless integration with build tools and CI/CD pipelines.',
            },
            {
                title: 'Active Community',
                description:
                    'Large community with extensive libraries and best practices.',
            },
        ],
        keyFacts: [
            'JUnit powers 90%+ of Java unit testing in enterprises',
            'JUnit 5 supports parameterized tests, custom extensions, and modern Java features',
            'Compatible with all major IDEs and build tools',
            'Used by major companies: Google, Netflix, Uber, and Microsoft',
            'Open-source project with active development and support',
            'Mockito is the most popular mocking framework for JUnit',
            'JaCoCo integration enables comprehensive code coverage reporting',
            'Spring Boot Test provides powerful testing capabilities for Spring applications',
        ],
        faqs: [
            {
                question: 'What\'s the difference between JUnit 4 and JUnit 5?',
                answer:
                    'JUnit 5 (Jupiter) is modern with better architecture. JUnit 4 is legacy. Use JUnit 5 for new projects. JUnit 5 supports parameterized tests, custom extensions, and dynamic tests.',
            },
            {
                question: 'How do we mock dependencies in JUnit?',
                answer:
                    'Use Mockito: @Mock for creating mocks, @InjectMocks for injection, when/thenReturn for stubbing, verify for assertions.',
            },
            {
                question: 'What\'s the Arrange-Act-Assert pattern?',
                answer:
                    'Test structure: Arrange (setup), Act (execute), Assert (verify). Clear and readable test method structure.',
            },
            {
                question: 'Can we run JUnit tests in parallel?',
                answer:
                    'Yes, JUnit 5 supports parallel execution. Configure parallel mode in junit-platform.properties. Useful for large test suites.',
            },
            {
                question: 'How do we test databases with JUnit?',
                answer:
                    'Use @DataJpaTest for JPA, TestContainers for databases, H2 in-memory database, or mocks. Spring Boot Test provides annotations for testing.',
            },
            {
                question: 'What\'s code coverage and why does it matter?',
                answer:
                    'Percentage of code executed by tests. JaCoCo provides coverage reports. Aim for 80%+ coverage but focus on critical paths, not arbitrary percentages.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise Test Suite',
                description:
                    'Built comprehensive test suite with 5000+ JUnit tests for Spring Boot application.',
                link: '#',
            },
            {
                title: 'Test-Driven Development',
                description:
                    'Implemented TDD approach achieving 95% code coverage with JUnit and Mockito.',
                link: '#',
            },
            {
                title: 'CI/CD Test Automation',
                description:
                    'Integrated JUnit tests in Jenkins pipeline running 1000+ tests per deployment.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Mockito',
            'Spring Boot Test',
            'TestNG',
            'AssertJ',
            'Maven',
            'Gradle',
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
