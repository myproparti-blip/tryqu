'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { CheckCircle } from 'lucide-react';

export default function SOC2TechPage() {
    const techData = {
        name: 'SOC 2',
        emoji: '✅',
        icon: <CheckCircle className="w-6 h-6" />,
        shortDescription:
            'Service organization compliance and controls. Our SOC 2 experts deliver compliant service solutions with nearshore expertise.',
        heroTitle: 'SOC 2 Compliance for Service Organizations',
        heroSubtitle:
            'SOC 2 (Service Organization Control) compliance demonstrates that your organization maintains security and operational controls for customer data. Our expert compliance engineers implement SOC 2-compliant systems ensuring customer trust and business credibility. From security controls to operational procedures, we deliver comprehensive SOC 2 expertise.',
        heroImage: '/images/tech-soc2-rich.svg',
        heroImageAlt: 'SOC 2 - Service Organization Compliance',
        services: [
            {
                title: 'SOC 2 Readiness Assessment',
                description:
                    'Assess current controls against SOC 2 requirements.',
                details:
                    'Current state analysis, gap identification, and remediation planning.',
            },
            {
                title: 'Control Implementation',
                description:
                    'Implement required security and operational controls.',
                details:
                    'Security controls, availability controls, and processing integrity.',
            },
            {
                title: 'Documentation & Procedures',
                description:
                    'Create comprehensive documentation and procedures.',
                details:
                    'Policy documentation, procedure manuals, and evidence collection.',
            },
            {
                title: 'Risk Assessment',
                description:
                    'Conduct risk assessments against SOC 2 criteria.',
                details:
                    'Risk identification, assessment, and mitigation planning.',
            },
            {
                title: 'Monitoring & Reporting',
                description:
                    'Establish monitoring and reporting procedures.',
                details:
                    'Continuous monitoring, incident tracking, and management reporting.',
            },
            {
                title: 'Audit Preparation',
                description:
                    'Prepare for SOC 2 audit engagement.',
                details:
                    'Evidence compilation, test documentation, and audit coordination.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'SOC 2 Trust Principles',
                tools: [
                    'Security (CC)',
                    'Availability (A)',
                    'Processing Integrity (PI)',
                    'Confidentiality (C)',
                    'Privacy (P)',
                    'Trust Services Criteria',
                ],
            },
            {
                title: 'Control Categories',
                tools: [
                    'Access Controls',
                    'Logical Security',
                    'Physical Security',
                    'Change Management',
                    'Incident Response',
                    'Business Continuity',
                ],
            },
            {
                title: 'Security Controls',
                tools: [
                    'Multi-Factor Auth',
                    'Encryption',
                    'Vulnerability Scanning',
                    'Penetration Testing',
                    'Patch Management',
                    'Password Policies',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'Activity Logging',
                    'Audit Trails',
                    'SIEM Systems',
                    'Intrusion Detection',
                    'Vulnerability Assessment',
                    'Log Retention',
                ],
            },
            {
                title: 'Operational Controls',
                tools: [
                    'Change Procedures',
                    'Backup & Recovery',
                    'Incident Management',
                    'Disaster Recovery',
                    'Business Continuity',
                    'Service Monitoring',
                ],
            },
            {
                title: 'Personnel Controls',
                tools: [
                    'Background Checks',
                    'Confidentiality Agreements',
                    'Access Provisioning',
                    'Security Training',
                    'Onboarding/Offboarding',
                    'Performance Review',
                ],
            },
            {
                title: 'Documentation',
                tools: [
                    'Policies & Procedures',
                    'Risk Register',
                    'Control Matrix',
                    'Evidence Collection',
                    'Audit Trail',
                    'Management Reports',
                ],
            },
            {
                title: 'Audit & Compliance',
                tools: [
                    'External Auditors',
                    'Type I (6 months)',
                    'Type II (12 months)',
                    'Management Reports',
                    'Control Testing',
                    'Remediation Plans',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Customer Confidence',
                description:
                    'Demonstrates commitment to security and controls.',
            },
            {
                title: 'Competitive Advantage',
                description:
                    'Differentiator for enterprise customers requiring SOC 2.',
            },
            {
                title: 'Business Credibility',
                description:
                    'Third-party attestation enhances organizational reputation.',
            },
            {
                title: 'Risk Mitigation',
                description:
                    'Reduces security and operational risks.',
            },
            {
                title: 'Operational Excellence',
                description:
                    'Drives improvement in security and operations.',
            },
            {
                title: 'Contract Enablement',
                description:
                    'Enables enterprise contracts requiring SOC 2 compliance.',
            },
        ],
        keyFacts: [
            'SOC 2 is required by 70%+ of enterprise contracts',
            'Two types: Type I (point-in-time) and Type II (ongoing 6+ months)',
            'Trust Services Criteria (AICPA) framework used for evaluation',
            'Requires 6-month control operating period minimum for Type II',
            'Management assertion of control effectiveness required',
            'Independent auditor attestation provides credibility',
            'Cost typically $15K-$50K depending on complexity',
            'Annual recertification/renewal recommended for market credibility',
        ],
        faqs: [
            {
                question: 'What\'s the difference between SOC 2 Type I and Type II?',
                answer:
                    'Type I: controls in place at specific point in time. Type II: controls operating for 6+ months. Type II is more comprehensive and valuable.',
            },
            {
                question: 'What are the SOC 2 trust principles?',
                answer:
                    'Security, Availability, Processing Integrity, Confidentiality, and Privacy. Not all companies need all five. Choose based on service.',
            },
            {
                question: 'How long does SOC 2 certification take?',
                answer:
                    'Type I: 2-3 months. Type II: 6-12 months (minimum 6-month control operating period). Planning and remediation: 3-6 months prior.',
            },
            {
                question: 'Can we achieve SOC 2 without an auditor?',
                answer:
                    'No, requires independent auditor attestation. SSAE 18 framework requires third-party audit. Auditor recommendations matter.',
            },
            {
                question: 'Is SOC 2 the same as SOC 1?',
                answer:
                    'No, SOC 1 (SSAE 16) is for financial reporting controls. SOC 2 is for security and operational controls. Different frameworks.',
            },
            {
                question: 'How often must we renew SOC 2?',
                answer:
                    'Annually recommended for market credibility. Type II reports remain valid 12 months. Type I can be repeated annually or used as baseline for Type II transition.',
            },
        ],
        caseStudies: [
            {
                title: 'SaaS Platform SOC 2 Certification',
                description:
                    'Achieved SOC 2 Type II certification for SaaS platform enabling enterprise sales.',
                link: '#',
            },
            {
                title: 'Cloud Services SOC 2 Implementation',
                description:
                    'Implemented SOC 2 controls for cloud infrastructure provider.',
                link: '#',
            },
            {
                title: 'Rapid Compliance Turnaround',
                description:
                    'Achieved SOC 2 Type II in 8 months supporting customer requirements.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Security Controls',
            'HIPAA',
            'ISO 27001',
            'Compliance',
            'Audit Logging',
            'Encryption',
            'Access Control',
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
