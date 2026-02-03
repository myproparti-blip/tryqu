'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckCircle } from 'lucide-react';

export default function ISO27001TechPage() {
    const techData = {
        name: 'ISO 27001',
        emoji: '🔐',
        icon: <CheckCircle className="w-6 h-6" />,
        shortDescription:
            'Information security management standards. Our ISO 27001 experts deliver certified security systems with nearshore expertise.',
        heroTitle: 'Enterprise Information Security with ISO 27001',
        heroSubtitle:
            'ISO 27001 is the international standard for Information Security Management Systems (ISMS) providing comprehensive security framework. Our expert security engineers implement ISO 27001-compliant ISMS ensuring organizational information security. From risk assessment to security controls, we deliver comprehensive ISO 27001 expertise.',
        heroImage: '/images/tech-iso27001-rich.svg',
        heroImageAlt: 'ISO 27001 - Information Security Management',
        services: [
            {
                title: 'ISMS Planning & Design',
                description:
                    'Design comprehensive Information Security Management System.',
                details:
                    'Scope definition, context analysis, leadership alignment, and planning.',
            },
            {
                title: 'Risk Assessment & Treatment',
                description:
                    'Identify and mitigate information security risks.',
                details:
                    'Risk identification, analysis, treatment planning, and residual risk.',
            },
            {
                title: 'Control Implementation',
                description:
                    'Implement ISO 27001 Annex A controls.',
                details:
                    'Control selection, implementation, and effectiveness verification.',
            },
            {
                title: 'Information Classification',
                description:
                    'Classify information assets and define protection levels.',
                details:
                    'Classification scheme, asset inventory, and protection requirements.',
            },
            {
                title: 'Monitoring & Measurement',
                description:
                    'Monitor ISMS performance and effectiveness.',
                details:
                    'KPI definition, measurement, reporting, and continuous improvement.',
            },
            {
                title: 'Certification Audit Preparation',
                description:
                    'Prepare for ISO 27001 certification audit.',
                details:
                    'Audit readiness, evidence preparation, and audit coordination.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'ISO 27001 Core',
                tools: [
                    'ISMS Framework',
                    'Organizational Context',
                    'Leadership & Governance',
                    'Risk Management',
                    'Control Framework',
                    'Continuous Improvement',
                ],
            },
            {
                title: 'Annex A Control Areas',
                tools: [
                    'Organization Controls',
                    'Personnel Controls',
                    'Asset Management',
                    'Access Control',
                    'Cryptography',
                    'Physical & Environmental',
                ],
            },
            {
                title: 'Control Areas (continued)',
                tools: [
                    'Operations',
                    'Communications Security',
                    'System Acquisition',
                    'Supplier Relationships',
                    'Information Security Events',
                    'Business Continuity',
                ],
            },
            {
                title: 'Risk Management',
                tools: [
                    'Risk Assessment',
                    'Risk Treatment',
                    'Risk Register',
                    'Control Risk Matrix',
                    'Residual Risk',
                    'Risk Appetite',
                ],
            },
            {
                title: 'Policies & Procedures',
                tools: [
                    'Information Security Policy',
                    'Access Control Policy',
                    'Incident Response',
                    'Change Management',
                    'Business Continuity',
                    'Supplier Management',
                ],
            },
            {
                title: 'Monitoring & Audit',
                tools: [
                    'Internal Audits',
                    'KPI Tracking',
                    'Compliance Monitoring',
                    'Security Metrics',
                    'Management Review',
                    'External Audits',
                ],
            },
            {
                title: 'Training & Awareness',
                tools: [
                    'Security Training',
                    'Awareness Programs',
                    'Competency Assessment',
                    'Role-Specific Training',
                    'Incident Simulations',
                    'Certification Programs',
                ],
            },
            {
                title: 'Tools & Resources',
                tools: [
                    'Risk Assessment Tools',
                    'ISMS Software',
                    'Document Management',
                    'Audit Tools',
                    'Incident Tracking',
                    'Analytics Dashboards',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'International Standard',
                description:
                    'Globally recognized and accepted security framework.',
            },
            {
                title: 'Comprehensive Approach',
                description:
                    'Covers entire information security lifecycle.',
            },
            {
                title: 'Business Enabler',
                description:
                    'Required by many enterprise contracts and partners.',
            },
            {
                title: 'Risk-Based Framework',
                description:
                    'Focuses on organization-specific risks and controls.',
            },
            {
                title: 'Continuous Improvement',
                description:
                    'Built-in improvement cycle based on Plan-Do-Check-Act.',
            },
            {
                title: 'Board Confidence',
                description:
                    'Demonstrates governance and control to stakeholders.',
            },
        ],
        keyFacts: [
            'ISO 27001 is used by 50%+ of enterprises globally for ISMS',
            'International standard updated every 5-7 years (currently 2022)',
            'Requires risk-based approach to information security',
            'Includes 93 controls in Annex A covering all security aspects',
            'Certification valid for 3 years with annual surveillance audits',
            'Certification audit typically 2-5 days depending on organization size',
            'Implementation timeline 6-18 months depending on current maturity',
            'Third-party certification adds credibility to security posture',
        ],
        faqs: [
            {
                question: 'What\'s the difference between ISO 27001 and ISO 27002?',
                answer:
                    'ISO 27001 is for implementing ISMS and certification. ISO 27002 provides implementation guidance. 27001 is mandatory for certification, 27002 is advisory.',
            },
            {
                question: 'How long does ISO 27001 certification take?',
                answer:
                    'Implementation: 6-18 months. Certification audit: 2-5 days. Ongoing: annual surveillance audits. Recertification every 3 years.',
            },
            {
                question: 'What are the Annex A controls?',
                answer:
                    '93 controls across 14 areas: organizational, people, asset management, access control, cryptography, operations, communications, systems, suppliers, incident management, business continuity, compliance.',
            },
            {
                question: 'Is ISO 27001 mandatory?',
                answer:
                    'Not legally mandatory, but many enterprise contracts require it. Increasingly expected for regulated industries.',
            },
            {
                question: 'Can we implement ISO 27001 without external help?',
                answer:
                    'Possible but challenging. External auditors must conduct certification audit. Internal expertise and consulting typically accelerates implementation.',
            },
            {
                question: 'How does ISO 27001 align with other standards?',
                answer:
                    'Aligns with GDPR (data protection), HIPAA (healthcare), SOC 2. Can achieve multiple certifications with integrated approach.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise ISMS Implementation',
                description:
                    'Implemented ISO 27001 ISMS for 1000+ employee organization.',
                link: '#',
            },
            {
                title: 'Multi-Standard Certification',
                description:
                    'Achieved ISO 27001, SOC 2, and GDPR simultaneously.',
                link: '#',
            },
            {
                title: 'Rapid Risk-Based Assessment',
                description:
                    'Completed risk assessment and control mapping in 3 months.',
                link: '#',
            },
        ],
        relatedTechs: [
            'HIPAA',
            'SOC 2',
            'GDPR',
            'Risk Management',
            'Security Controls',
            'Access Control',
            'Compliance',
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
