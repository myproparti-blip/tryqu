'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function SecurityTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Security & Compliance"
                groupSubtitle="Implementing enterprise-grade security measures and compliance frameworks to protect data and maintain regulatory standards"
                businessValue="Enterprise Security & Governance"
                technologies={[
                    { name: "OAuth 2.0", path: "/technologies/oauth" },
                    { name: "JWT", path: "/technologies/jwt" },
                    { name: "SSL/TLS", path: "/technologies/ssl-tls" },
                    { name: "OWASP", path: "/technologies/owasp" },
                    { name: "HIPAA", path: "/technologies/hipaa" },
                    { name: "SOC 2", path: "/technologies/soc2" },
                    { name: "ISO 27001", path: "/technologies/iso27001" },
                    { name: "Encryption", path: "/technologies/encryption" },
                ]}
                keyBenefits={[
                    "Protect sensitive data with industry-standard encryption, secure authentication, and authorization controls.",
                    "Achieve regulatory compliance with frameworks supporting HIPAA, SOC2, GDPR, ISO27001, and other standards.",
                    "Reduce security risks through vulnerability assessments, penetration testing, and continuous security monitoring.",
                    "Build customer trust with transparent security practices and comprehensive data protection policies.",
                    "Minimize compliance costs with pre-configured security infrastructure and automated compliance reporting.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
