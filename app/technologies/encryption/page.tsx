'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Lock } from 'lucide-react';

export default function EncryptionTechPage() {
    const techData = {
        name: 'Encryption',
        emoji: '🔒',
        icon: <Lock className="w-6 h-6" />,
        shortDescription:
            'Data protection through cryptography. Our encryption experts deliver secure data protection solutions with nearshore expertise.',
        heroTitle: 'Data Protection through Advanced Encryption',
        heroSubtitle:
            'Encryption is fundamental to data security protecting sensitive information from unauthorized access. Our expert security engineers implement encryption strategies across data lifecycle. From encryption at rest to encryption in transit, we deliver comprehensive encryption expertise.',
        heroImage: '/images/tech-encryption-rich.svg',
        heroImageAlt: 'Encryption - Cryptographic Data Protection',
        services: [
            {
                title: 'Encryption Strategy',
                description:
                    'Develop comprehensive encryption strategy for organization.',
                details:
                    'Data classification, encryption requirements, and implementation planning.',
            },
            {
                title: 'Encryption at Rest',
                description:
                    'Implement encryption for stored data.',
                details:
                    'Database encryption, file encryption, and backup encryption.',
            },
            {
                title: 'Encryption in Transit',
                description:
                    'Encrypt data during transmission.',
                details:
                    'TLS/SSL, VPN, and secure communication channels.',
            },
            {
                title: 'Key Management',
                description:
                    'Implement secure key management practices.',
                details:
                    'Key generation, storage, rotation, and revocation.',
            },
            {
                title: 'End-to-End Encryption',
                description:
                    'Implement E2E encryption for applications.',
                details:
                    'Message encryption, file encryption, and secure communication.',
            },
            {
                title: 'Compliance Implementation',
                description:
                    'Implement encryption per compliance requirements.',
                details:
                    'HIPAA encryption, PCI-DSS encryption, and GDPR requirements.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Encryption Types',
                tools: [
                    'Symmetric Encryption',
                    'Asymmetric Encryption',
                    'Hybrid Encryption',
                    'Hashing',
                    'Digital Signatures',
                    'Message Authentication',
                ],
            },
            {
                title: 'Algorithms',
                tools: [
                    'AES (Symmetric)',
                    'RSA (Asymmetric)',
                    'ECDSA (Digital Signatures)',
                    'SHA-256 (Hashing)',
                    'Diffie-Hellman (Key Exchange)',
                    'ChaCha20 (Stream)',
                ],
            },
            {
                title: 'Key Sizes',
                tools: [
                    'AES-128',
                    'AES-192',
                    'AES-256',
                    'RSA-2048',
                    'RSA-4096',
                    'ECDSA P-256/P-384/P-521',
                ],
            },
            {
                title: 'Encryption Scenarios',
                tools: [
                    'Database Encryption',
                    'File Encryption',
                    'Disk Encryption',
                    'Cloud Storage Encryption',
                    'Email Encryption',
                    'Application Encryption',
                ],
            },
            {
                title: 'Key Management',
                tools: [
                    'Hardware Security Modules (HSM)',
                    'Key Management Service (KMS)',
                    'Key Rotation',
                    'Key Storage',
                    'Key Generation',
                    'Key Derivation',
                ],
            },
            {
                title: 'Cloud Services',
                tools: [
                    'AWS KMS',
                    'Azure Key Vault',
                    'Google Cloud KMS',
                    'CloudHSM',
                    'Managed Encryption',
                    'Customer-Managed Keys',
                ],
            },
            {
                title: 'Tools & Libraries',
                tools: [
                    'OpenSSL',
                    'libsodium',
                    'cryptography (Python)',
                    'bcrypt',
                    'Bouncy Castle',
                    'PKCS#11',
                ],
            },
            {
                title: 'Standards & Compliance',
                tools: [
                    'FIPS 140-2',
                    'PCI-DSS',
                    'HIPAA',
                    'GDPR',
                    'NIST Standards',
                    'Common Criteria',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Data Confidentiality',
                description:
                    'Encryption ensures only authorized parties access data.',
            },
            {
                title: 'Compliance Requirement',
                description:
                    'HIPAA, PCI-DSS, GDPR mandate encryption for sensitive data.',
            },
            {
                title: 'Breach Impact Reduction',
                description:
                    'Encrypted data renders breaches less harmful.',
            },
            {
                title: 'User Trust',
                description:
                    'Demonstrates commitment to protecting customer data.',
            },
            {
                title: 'Regulatory Penalties',
                description:
                    'Unencrypted sensitive data results in higher penalties.',
            },
            {
                title: 'Security Best Practice',
                description:
                    'Encryption is fundamental to layered security approach.',
            },
        ],
        keyFacts: [
            'AES-256 is military-grade encryption standard',
            'TLS 1.3 uses modern encryption preventing downgrade attacks',
            'End-to-end encryption protects against service provider access',
            'Unencrypted HIPAA breach penalties up to 5x higher',
            'PCI-DSS requires encryption for cardholder data',
            'GDPR requires encryption as part of data protection',
            'Modern algorithms AES, RSA-2048 considered secure for decades',
            'Key management is more critical than algorithm strength',
        ],
        faqs: [
            {
                question: 'What\'s the difference between encryption and hashing?',
                answer:
                    'Encryption is reversible (can decrypt). Hashing is one-way (cannot reverse). Use encryption for sensitive data, hashing for password verification.',
            },
            {
                question: 'Should we use 128-bit or 256-bit AES?',
                answer:
                    'AES-256 for sensitive data (HIPAA, government). AES-128 sufficient for most commercial use. 256 provides future-proof security.',
            },
            {
                question: 'How often should we rotate encryption keys?',
                answer:
                    'Quarterly or when compromised. HSM-based rotation recommended. Older keys retained for decrypting historical data.',
            },
            {
                question: 'Can compromised encryption keys be recovered?',
                answer:
                    'No, encrypted data is lost without keys. Maintain secure key backups. Never store keys with encrypted data.',
            },
            {
                question: 'Is asymmetric encryption (RSA) better than symmetric (AES)?',
                answer:
                    'Different purposes. Symmetric faster for data encryption. Asymmetric for key exchange and digital signatures. Use both in hybrid approach.',
            },
            {
                question: 'Can we encrypt without impacting performance?',
                answer:
                    'Modern hardware provides encryption acceleration. Transparent encryption (TDE) minimizes performance impact. Cloud providers optimize encryption.',
            },
        ],
        caseStudies: [
            {
                title: 'Database Encryption Implementation',
                description:
                    'Implemented transparent database encryption for HIPAA compliance.',
                link: '#',
            },
            {
                title: 'End-to-End Encryption in App',
                description:
                    'Built E2E encryption in messaging app protecting user communication.',
                link: '#',
            },
            {
                title: 'Key Management Infrastructure',
                description:
                    'Deployed HSM-based key management for cryptographic operations.',
                link: '#',
            },
        ],
        relatedTechs: [
            'SSL/TLS',
            'OAuth 2.0',
            'HIPAA',
            'PCI-DSS',
            'GDPR',
            'HSM',
            'Key Management',
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
