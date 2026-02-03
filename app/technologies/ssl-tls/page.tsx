'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Shield } from 'lucide-react';

export default function SSLTLSTechPage() {
    const techData = {
        name: 'SSL/TLS',
        emoji: '🔒',
        icon: <Shield className="w-6 h-6" />,
        shortDescription:
            'Encryption protocols for secure communication. Our SSL/TLS experts deliver secure network solutions with nearshore expertise.',
        heroTitle: 'Secure Communication with SSL/TLS Protocols',
        heroSubtitle:
            'SSL/TLS protocols provide cryptographic encryption securing data transmission over networks. Our expert security engineers implement SSL/TLS for secure web applications, APIs, and services protecting sensitive data. From HTTPS implementation to certificate management, we deliver comprehensive SSL/TLS expertise.',
        heroImage: '/images/tech-ssl-tls-rich.svg',
        heroImageAlt: 'SSL/TLS - Encryption Protocol',
        services: [
            {
                title: 'HTTPS Implementation',
                description:
                    'Implement HTTPS for web applications.',
                details:
                    'Certificate acquisition, server configuration, and HTTPS redirection.',
            },
            {
                title: 'SSL/TLS Certificate Management',
                description:
                    'Manage SSL/TLS certificates throughout lifecycle.',
                details:
                    'Certificate issuance, renewal, rotation, and revocation.',
            },
            {
                title: 'Certificate Authority Setup',
                description:
                    'Establish certificate authority infrastructure.',
                details:
                    'Internal CA setup, certificate signing requests, and validation.',
            },
            {
                title: 'Protocol Configuration',
                description:
                    'Configure optimal SSL/TLS versions and cipher suites.',
                details:
                    'TLS 1.2/1.3 configuration, cipher suite selection, and weakness removal.',
            },
            {
                title: 'Client Certificate Authentication',
                description:
                    'Implement mutual TLS (mTLS) for client authentication.',
                details:
                    'Client certificate generation, validation, and revocation.',
            },
            {
                title: 'Security Hardening',
                description:
                    'Harden SSL/TLS configuration following security best practices.',
                details:
                    'HSTS headers, perfect forward secrecy, and vulnerability patching.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Protocol Versions',
                tools: [
                    'TLS 1.3',
                    'TLS 1.2',
                    'TLS 1.1 (Deprecated)',
                    'SSL 3.0 (Deprecated)',
                    'Protocol Negotiation',
                    'Version Enforcement',
                ],
            },
            {
                title: 'Cipher Suites',
                tools: [
                    'AEAD Ciphers',
                    'AES-GCM',
                    'ChaCha20-Poly1305',
                    'ECDHE Key Exchange',
                    'Perfect Forward Secrecy',
                    'Weak Cipher Removal',
                ],
            },
            {
                title: 'Certificate Types',
                tools: [
                    'Domain Validated (DV)',
                    'Organization Validated (OV)',
                    'Extended Validation (EV)',
                    'Wildcard Certificates',
                    'Multi-Domain (SAN)',
                    'Self-Signed',
                ],
            },
            {
                title: 'Certificate Authority',
                tools: [
                    'Let\'s Encrypt',
                    'DigiCert',
                    'Sectigo',
                    'GlobalSign',
                    'Internal CA',
                    'Root CA Management',
                ],
            },
            {
                title: 'Tools & Utilities',
                tools: [
                    'OpenSSL',
                    'Certbot',
                    'acme.sh',
                    'keytool',
                    'nginx',
                    'Apache mod_ssl',
                ],
            },
            {
                title: 'Certificate Management',
                tools: [
                    'ACME Protocol',
                    'Automatic Renewal',
                    'Certificate Pinning',
                    'OCSP Stapling',
                    'CRL Management',
                    'Certificate Transparency',
                ],
            },
            {
                title: 'Security Headers',
                tools: [
                    'HSTS',
                    'Content Security Policy',
                    'X-Frame-Options',
                    'X-Content-Type-Options',
                    'Referrer-Policy',
                    'Permissions-Policy',
                ],
            },
            {
                title: 'Monitoring & Testing',
                tools: [
                    'SSL Labs',
                    'Certificate Validation',
                    'Expiration Monitoring',
                    'Vulnerability Scanning',
                    'Protocol Testing',
                    'Cipher Analysis',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Data Protection',
                description:
                    'Encryption protects sensitive data from eavesdropping.',
            },
            {
                title: 'Authentication',
                description:
                    'Certificates verify server identity preventing man-in-the-middle attacks.',
            },
            {
                title: 'Regulatory Compliance',
                description:
                    'HTTPS required for GDPR, PCI-DSS, HIPAA compliance.',
            },
            {
                title: 'SEO Benefits',
                description:
                    'HTTPS is a ranking factor for search engine optimization.',
            },
            {
                title: 'Browser Trust',
                description:
                    'Users trust and expect HTTPS indicated by padlock icon.',
            },
            {
                title: 'Performance',
                description:
                    'Modern TLS 1.3 provides faster handshakes and better performance.',
            },
        ],
        keyFacts: [
            '99%+ of websites use HTTPS/TLS for secure communication',
            'TLS 1.3 is 38% faster than TLS 1.2 with better security',
            'Let\'s Encrypt provides free certificates enabling HTTPS for all',
            'Perfect Forward Secrecy ensures past traffic remains secure',
            'SSL/TLS required for PCI-DSS, GDPR, HIPAA compliance',
            'Modern browsers show security warnings for non-HTTPS sites',
            'Certificate pinning provides additional protection against CA compromise',
            'OCSP stapling reduces certificate validation overhead',
        ],
        faqs: [
            {
                question: 'What\'s the difference between SSL and TLS?',
                answer:
                    'SSL is deprecated legacy protocol. TLS is modern secure protocol. All modern implementations use TLS. TLS 1.2/1.3 should be enforced.',
            },
            {
                question: 'How do we get SSL/TLS certificates?',
                answer:
                    'Use Let\'s Encrypt for free certificates. Purchase from DigiCert, Sectigo for commercial. Generate self-signed for development/internal use.',
            },
            {
                question: 'What\'s HSTS and why is it important?',
                answer:
                    'HTTP Strict-Transport-Security enforces HTTPS. Prevents downgrade attacks. Include in preload list for maximum protection.',
            },
            {
                question: 'How often should we renew certificates?',
                answer:
                    'Modern certificates are valid 1 year. Automate renewal before expiration using ACME protocol and Let\'s Encrypt.',
            },
            {
                question: 'What\'s the difference between wildcard and SAN certificates?',
                answer:
                    'Wildcard covers all subdomains (*.example.com). SAN covers multiple specific domains. Wildcard simpler, SAN more flexible.',
            },
            {
                question: 'Is self-signed certificate safe?',
                answer:
                    'For development/internal only. Browsers warn about self-signed. Use proper CA-signed certificates for production.',
            },
        ],
        caseStudies: [
            {
                title: 'Organization-Wide HTTPS Migration',
                description:
                    'Migrated 50+ applications to HTTPS with Let\'s Encrypt.',
                link: '#',
            },
            {
                title: 'Certificate Automation Implementation',
                description:
                    'Implemented automated certificate renewal for 200+ domains.',
                link: '#',
            },
            {
                title: 'Mutual TLS (mTLS) for Microservices',
                description:
                    'Deployed mTLS securing communication between microservices.',
                link: '#',
            },
        ],
        relatedTechs: [
            'HTTPS',
            'Let\'s Encrypt',
            'Certificates',
            'Network Security',
            'OAuth 2.0',
            'API Gateway',
            'Kubernetes',
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
