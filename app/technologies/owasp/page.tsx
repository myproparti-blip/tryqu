'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { AlertTriangle } from 'lucide-react';

export default function OWASPTechPage() {
    const techData = {
        name: 'OWASP',
        emoji: '🛡️',
        icon: <AlertTriangle className="w-6 h-6" />,
        shortDescription:
            'Application security standards and best practices. Our OWASP experts deliver secure development solutions with nearshore expertise.',
        heroTitle: 'Secure Web Applications with OWASP',
        heroSubtitle:
            'OWASP (Open Web Application Security Project) provides security standards, tools, and best practices for web application development. Our expert security engineers implement OWASP guidelines for building secure, resilient applications. From threat modeling to secure coding, we deliver comprehensive OWASP expertise.',
        heroImage: '/images/tech-owasp-rich.svg',
        heroImageAlt: 'OWASP - Web Application Security',
        services: [
            {
                title: 'OWASP Top 10 Mitigation',
                description:
                    'Prevent the most critical web application vulnerabilities.',
                details:
                    'Injection, broken auth, sensitive data exposure, XXE, broken access, misconfiguration, and more.',
            },
            {
                title: 'Secure Code Review',
                description:
                    'Review code for security vulnerabilities following OWASP.',
                details:
                    'Manual code review, static analysis, and vulnerability identification.',
            },
            {
                title: 'Threat Modeling',
                description:
                    'Identify and document security threats in applications.',
                details:
                    'Threat identification, risk assessment, and mitigation planning.',
            },
            {
                title: 'Security Testing',
                description:
                    'Comprehensive security testing and penetration testing.',
                details:
                    'Vulnerability scanning, penetration testing, and security validation.',
            },
            {
                title: 'Secure Development Training',
                description:
                    'Train development teams on secure coding practices.',
                details:
                    'OWASP training, secure development practices, and security awareness.',
            },
            {
                title: 'Security Architecture',
                description:
                    'Design secure application architecture.',
                details:
                    'Security requirements, secure design patterns, and threat mitigation.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'OWASP Top 10',
                tools: [
                    'A01: Broken Access Control',
                    'A02: Cryptographic Failures',
                    'A03: Injection',
                    'A04: Insecure Design',
                    'A05: Security Misconfiguration',
                    'A06: Vulnerable Components',
                ],
            },
            {
                title: 'Top 10 (continued)',
                tools: [
                    'A07: Auth & Session Mgmt',
                    'A08: Data Integrity Failure',
                    'A09: Logging & Monitoring',
                    'A10: SSRF',
                    'Annual Updates',
                    'Risk Assessment',
                ],
            },
            {
                title: 'Security Tools',
                tools: [
                    'OWASP ZAP',
                    'Burp Suite',
                    'Sonarqube',
                    'Checkmarx',
                    'Veracode',
                    'Snyk',
                ],
            },
            {
                title: 'Testing Methodologies',
                tools: [
                    'OWASP Testing Guide',
                    'Penetration Testing',
                    'Vulnerability Scanning',
                    'Code Review',
                    'Security Testing',
                    'Risk Analysis',
                ],
            },
            {
                title: 'Secure Coding',
                tools: [
                    'Input Validation',
                    'Output Encoding',
                    'Parameterized Queries',
                    'Least Privilege',
                    'Defense in Depth',
                    'Error Handling',
                ],
            },
            {
                title: 'Frameworks & Libraries',
                tools: [
                    'Spring Security',
                    'OWASP Dependency Check',
                    'OWASP ModSecurity',
                    'OWASP Securitee',
                    'Secure Headers',
                    'CSP Policies',
                ],
            },
            {
                title: 'Web Application Firewall',
                tools: [
                    'ModSecurity',
                    'Cloudflare WAF',
                    'AWS WAF',
                    'Azure WAF',
                    'F5 WAF',
                    'Imperva WAF',
                ],
            },
            {
                title: 'Training & Resources',
                tools: [
                    'Security Training',
                    'OWASP Juice Shop',
                    'WebGoat',
                    'Security Awareness',
                    'Documentation',
                    'Best Practices',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Industry Standard',
                description:
                    'OWASP Top 10 is recognized security baseline globally.',
            },
            {
                title: 'Comprehensive Coverage',
                description:
                    'Covers entire application security lifecycle.',
            },
            {
                title: 'Practical Guidance',
                description:
                    'Real-world examples and practical mitigation strategies.',
            },
            {
                title: 'Risk-Based Approach',
                description:
                    'Focus on highest-impact vulnerabilities first.',
            },
            {
                title: 'Community-Driven',
                description:
                    'Continuously updated by security experts.',
            },
            {
                title: 'Compliance Alignment',
                description:
                    'Aligns with PCI-DSS, HIPAA, GDPR requirements.',
            },
        ],
        keyFacts: [
            'OWASP Top 10 is the de-facto standard for web app security',
            'Updated every 3 years reflecting current threat landscape',
            'OWASP ZAP is free open-source security scanner',
            'Broken Access Control is the #1 vulnerability',
            'OWASP Testing Guide provides comprehensive testing methodology',
            'OWASP Juice Shop is intentionally vulnerable app for training',
            'Security misconfiguration affects 90%+ of applications',
            'Following OWASP reduces vulnerability discovery costs by 40%+',
        ],
        faqs: [
            {
                question: 'What\'s the OWASP Top 10?',
                answer:
                    'List of 10 most critical web application security risks. Updated every 3 years. Provides awareness, prevention, and testing guidance.',
            },
            {
                question: 'How do we prevent SQL Injection?',
                answer:
                    'Use parameterized queries/prepared statements. Never concatenate user input into SQL. Validate and sanitize input.',
            },
            {
                question: 'What\'s the difference between XSS and CSRF?',
                answer:
                    'XSS: attacker injects malicious scripts. CSRF: tricks user into unwanted actions. Prevent XSS with output encoding. Prevent CSRF with tokens.',
            },
            {
                question: 'How do we implement OWASP guidance?',
                answer:
                    'Code review against OWASP Top 10. Use security scanning tools. Implement secure coding practices. Regular training and awareness.',
            },
            {
                question: 'What\'s Web Application Firewall (WAF)?',
                answer:
                    'Protects against OWASP Top 10 attacks. Monitors HTTP traffic. Blocks malicious requests. ModSecurity is popular open-source WAF.',
            },
            {
                question: 'How do we test for OWASP compliance?',
                answer:
                    'Use OWASP Testing Guide. Manual testing, automated scanning, penetration testing. Use tools like ZAP, Burp Suite.',
            },
        ],
        caseStudies: [
            {
                title: 'OWASP Top 10 Remediation',
                description:
                    'Identified and fixed all OWASP Top 10 vulnerabilities in legacy app.',
                link: '#',
            },
            {
                title: 'Secure Development Training',
                description:
                    'Trained 100+ developers on OWASP secure coding practices.',
                link: '#',
            },
            {
                title: 'Security Testing Program',
                description:
                    'Implemented continuous security testing following OWASP methodologies.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Penetration Testing',
            'Security Testing',
            'SSL/TLS',
            'Web Application Firewall',
            'HTTPS',
            'Authentication',
            'Authorization',
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
