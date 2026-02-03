'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckCircle } from 'lucide-react';

export default function HIPAATechPage() {
    const techData = {
        name: 'HIPAA',
        emoji: '⚕️',
        icon: <CheckCircle className="w-6 h-6" />,
        shortDescription:
            'Healthcare data compliance and security. Our HIPAA experts deliver compliant healthcare solutions with nearshore expertise.',
        heroTitle: 'HIPAA-Compliant Healthcare Solutions',
        heroSubtitle:
            'HIPAA (Health Insurance Portability and Accountability Act) compliance is mandatory for healthcare organizations handling protected health information. Our expert compliance engineers implement HIPAA-compliant systems ensuring patient data protection. From infrastructure to application design, we deliver comprehensive HIPAA expertise.',
        heroImage: '/images/tech-hipaa-rich.svg',
        heroImageAlt: 'HIPAA - Healthcare Data Compliance',
        services: [
            {
                title: 'Compliance Assessment',
                description:
                    'Audit systems for HIPAA compliance gaps.',
                details:
                    'Current state assessment, gap analysis, and remediation roadmap.',
            },
            {
                title: 'BAA (Business Associate Agreement)',
                description:
                    'Establish proper legal agreements for vendor relationships.',
                details:
                    'BAA negotiation, documentation, and vendor management.',
            },
            {
                title: 'Encryption & Data Protection',
                description:
                    'Implement encryption for PHI at rest and in transit.',
                details:
                    'Data classification, encryption standards, and key management.',
            },
            {
                title: 'Access Control Implementation',
                description:
                    'Implement role-based access control for PHI.',
                details:
                    'User authentication, authorization, and audit logging.',
            },
            {
                title: 'Incident Response Planning',
                description:
                    'Develop breach notification and incident response procedures.',
                details:
                    'Incident procedures, breach notifications, and documentation.',
            },
            {
                title: 'Audit & Monitoring',
                description:
                    'Continuous monitoring and audit trail maintenance.',
                details:
                    'Logging, monitoring, audit trails, and compliance reporting.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'HIPAA Rule Components',
                tools: [
                    'Privacy Rule',
                    'Security Rule',
                    'Breach Notification',
                    'Enforcement Rule',
                    'Transaction Rule',
                    'Omnibus Rule',
                ],
            },
            {
                title: 'Protected Health Information (PHI)',
                tools: [
                    'Patient Records',
                    'Medical History',
                    'Insurance Information',
                    'Billing Data',
                    'Lab Results',
                    'De-Identification',
                ],
            },
            {
                title: 'Security Safeguards',
                tools: [
                    'Administrative',
                    'Physical',
                    'Technical',
                    'Risk Assessment',
                    'Workforce Security',
                    'Information Access',
                ],
            },
            {
                title: 'Encryption & Authentication',
                tools: [
                    'Data Encryption',
                    'TLS/SSL',
                    'Multi-Factor Auth',
                    'Strong Passwords',
                    'Certificate Management',
                    'Key Rotation',
                ],
            },
            {
                title: 'Audit & Logging',
                tools: [
                    'Access Logs',
                    'Audit Trails',
                    'Activity Monitoring',
                    'Breach Detection',
                    'SIEM Systems',
                    'Compliance Reporting',
                ],
            },
            {
                title: 'Cloud Compliance',
                tools: [
                    'HIPAA-Compliant Cloud',
                    'AWS HIPAA',
                    'Azure HIPAA',
                    'Google Cloud HIPAA',
                    'BAA Signatories',
                    'Managed Services',
                ],
            },
            {
                title: 'Documentation',
                tools: [
                    'Policies & Procedures',
                    'Privacy Notices',
                    'Security Plans',
                    'Training Records',
                    'Risk Assessments',
                    'BAAs',
                ],
            },
            {
                title: 'Compliance Tools',
                tools: [
                    'Audit Tools',
                    'Vulnerability Scanners',
                    'Compliance Software',
                    'Risk Assessment Tools',
                    'Monitoring Platforms',
                    'Reporting Tools',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Legal Requirement',
                description:
                    'HIPAA compliance is mandatory for healthcare organizations.',
            },
            {
                title: 'Patient Trust',
                description:
                    'Demonstrates commitment to protecting sensitive health data.',
            },
            {
                title: 'Risk Mitigation',
                description:
                    'Reduces breach risk and associated liabilities.',
            },
            {
                title: 'Competitive Advantage',
                description:
                    'HIPAA compliance enables partnerships with major healthcare entities.',
            },
            {
                title: 'Audit Readiness',
                description:
                    'Proper documentation and controls ensure audit success.',
            },
            {
                title: 'Data Security',
                description:
                    'HIPAA standards ensure robust data protection practices.',
            },
        ],
        keyFacts: [
            'HIPAA applies to covered entities handling Protected Health Information',
            'Violations result in fines up to $50,000 per occurrence',
            'Breach notification required within 60 days',
            'Physical, administrative, and technical safeguards required',
            'Privacy Rule limits use and disclosure of PHI',
            'Security Rule mandates encryption and access controls',
            'Business Associates must sign BAAs and comply with HIPAA',
            'Audit and monitoring required with audit trails retained 6 years minimum',
        ],
        faqs: [
            {
                question: 'Who must comply with HIPAA?',
                answer:
                    'Covered entities: healthcare providers, health plans, health information clearinghouses. Business Associates must also comply after BAA.',
            },
            {
                question: 'What\'s a Business Associate?',
                answer:
                    'Entity handling PHI on behalf of covered entity. Must sign BAA and implement HIPAA safeguards. Examples: cloud providers, IT vendors.',
            },
            {
                question: 'What happens in case of a breach?',
                answer:
                    'Notify affected individuals within 60 days. Report to HHS and media. Maintain breach log. Risk assessment determines notification scope.',
            },
            {
                question: 'Can we use cloud services for HIPAA?',
                answer:
                    'Yes, if cloud provider is BAA-compliant. AWS, Azure, Google Cloud offer HIPAA-compliant services. Ensure BAA is signed.',
            },
            {
                question: 'What encryption standards apply?',
                answer:
                    'AES 128-bit minimum for data at rest. TLS 1.2+ for data in transit. FIPS 140-2 validated encryption modules recommended.',
            },
            {
                question: 'How long must we keep audit logs?',
                answer:
                    'Minimum 6 years per HIPAA requirements. Longer retention may be needed for breach investigations or litigation.',
            },
        ],
        caseStudies: [
            {
                title: 'Healthcare System HIPAA Implementation',
                description:
                    'Implemented HIPAA-compliant infrastructure for 50-hospital health system.',
                link: '#',
            },
            {
                title: 'Telemedicine Platform Compliance',
                description:
                    'Built HIPAA-compliant telemedicine platform for remote patient care.',
                link: '#',
            },
            {
                title: 'Breach Response & Recovery',
                description:
                    'Implemented breach response plan and conducted HHS-compliant notifications.',
                link: '#',
            },
        ],
        relatedTechs: [
            'SSL/TLS',
            'Encryption',
            'Azure',
            'AWS',
            'Access Control',
            'Audit Logging',
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
