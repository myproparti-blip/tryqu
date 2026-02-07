'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Lock } from 'lucide-react';

export default function JWTTechPage() {
    const techData = {
        name: 'JWT',
        emoji: '🎟️',
        icon: <Lock className="w-6 h-6" />,
        shortDescription:
            'JSON Web Tokens for stateless authentication. Our JWT experts deliver secure token solutions with nearshore expertise.',
        heroTitle: 'Stateless Authentication with JSON Web Tokens',
        heroSubtitle:
            'JWT (JSON Web Tokens) is a stateless authentication standard enabling secure transmission of claims between parties. Our expert security engineers leverage JWT for implementing modern authentication systems without server-side sessions. From API authentication to microservices, we deliver comprehensive JWT expertise.',
        heroImage: '/images/tech-jwt-rich.svg',
        heroImageAlt: 'JWT - JSON Web Token Authentication',
        services: [
            {
                title: 'JWT Implementation',
                description:
                    'Implement secure JWT-based authentication.',
                details:
                    'Token generation, signing, validation, and best practices.',
            },
            {
                title: 'Token Generation & Signing',
                description:
                    'Create signed tokens with cryptographic integrity.',
                details:
                    'Algorithm selection, secret management, and key rotation.',
            },
            {
                title: 'Claims Management',
                description:
                    'Define and validate custom claims in tokens.',
                details:
                    'Standard claims (iss, sub, aud), custom claims, and claim validation.',
            },
            {
                title: 'Token Expiration',
                description:
                    'Implement token expiration and refresh mechanisms.',
                details:
                    'Short-lived tokens, refresh token patterns, and token rotation.',
            },
            {
                title: 'Verification & Validation',
                description:
                    'Validate token signatures and claims.',
                details:
                    'Signature verification, expiration check, and claim validation.',
            },
            {
                title: 'Integration with APIs',
                description:
                    'Integrate JWT with REST APIs and microservices.',
                details:
                    'Bearer token pattern, Authorization headers, and middleware.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'JWT Structure',
                tools: [
                    'Header',
                    'Payload',
                    'Signature',
                    'Base64URL Encoding',
                    'HMAC',
                    'RSA/ECDSA',
                ],
            },
            {
                title: 'Token Types',
                tools: [
                    'Access Tokens',
                    'Refresh Tokens',
                    'ID Tokens',
                    'API Tokens',
                    'Bearer Tokens',
                    'Service Tokens',
                ],
            },
            {
                title: 'Algorithm Support',
                tools: [
                    'HS256 (HMAC)',
                    'RS256 (RSA)',
                    'ES256 (ECDSA)',
                    'PS256',
                    'EdDSA',
                    'Algorithm Selection',
                ],
            },
            {
                title: 'JWT Libraries',
                tools: [
                    'jsonwebtoken (Node.js)',
                    'PyJWT (Python)',
                    'jjwt (Java)',
                    'java-jwt',
                    'golang-jwt',
                    'ruby-jwt',
                ],
            },
            {
                title: 'Standard Claims',
                tools: [
                    'iss (Issuer)',
                    'sub (Subject)',
                    'aud (Audience)',
                    'exp (Expiration)',
                    'iat (Issued At)',
                    'nbf (Not Before)',
                ],
            },
            {
                title: 'Security Features',
                tools: [
                    'Digital Signature',
                    'Token Expiration',
                    'Claim Validation',
                    'Key Rotation',
                    'Revocation Lists',
                    'Encryption (JWE)',
                ],
            },
            {
                title: 'Integration Frameworks',
                tools: [
                    'Express Middleware',
                    'Spring Security',
                    'FastAPI',
                    'Django REST',
                    'NestJS Guards',
                    'API Gateway',
                ],
            },
            {
                title: 'Best Practices',
                tools: [
                    'Short Expiration',
                    'Refresh Tokens',
                    'Secret Management',
                    'HTTPS Requirement',
                    'CORS Configuration',
                    'Blacklist Tokens',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Stateless Authentication',
                description:
                    'No server-side session storage reduces infrastructure complexity.',
            },
            {
                title: 'Scalability',
                description:
                    'Scales horizontally across multiple servers without session sharing.',
            },
            {
                title: 'Mobile & API Friendly',
                description:
                    'Perfect for mobile apps and REST APIs enabling HTTP header auth.',
            },
            {
                title: 'Self-Contained',
                description:
                    'Token contains all information needed for validation.',
            },
            {
                title: 'Cross-Domain Support',
                description:
                    'Works seamlessly across domains and subdomains.',
            },
            {
                title: 'Modern Standard',
                description:
                    'Industry standard with extensive library support.',
            },
        ],
        keyFacts: [
            'JWT is used by 60%+ of modern APIs and microservices',
            'RFC 7519 is the official JWT specification',
            'Supports multiple algorithms: HS256, RS256, ES256, and more',
            'Tokens are digitally signed but not encrypted by default',
            'JWE (JWT Encryption) available for sensitive claims',
            'Tokens can be revoked using blacklists or token introspection',
            'exp claim limits exposure of compromised tokens',
            'OpenID Connect and OAuth 2.0 use JWT tokens',
        ],
        faqs: [
            {
                question: 'Is JWT secure?',
                answer:
                    'Yes, when implemented correctly. Use HTTPS, strong secrets, short expiration, and algorithm validation. Never store sensitive data without JWE encryption.',
            },
            {
                question: 'What\'s the difference between JWT and session tokens?',
                answer:
                    'JWT is stateless and self-contained. Sessions require server storage. JWT scales better. Sessions provide better revocation control.',
            },
            {
                question: 'How do we handle token expiration?',
                answer:
                    'Use short expiration times (15-60 minutes). Implement refresh tokens for long-term sessions. Validate exp claim on every request.',
            },
            {
                question: 'Can tokens be revoked?',
                answer:
                    'Limited revocation by tokens themselves. Implement token blacklists or introspection endpoints for immediate revocation.',
            },
            {
                question: 'Should we encrypt tokens?',
                answer:
                    'Encrypt if storing sensitive data (JWE). Otherwise, signing (JWS) is sufficient. Always use HTTPS to protect token transmission.',
            },
            {
                question: 'What algorithm should we use?',
                answer:
                    'RS256/ES256 for asymmetric signing (servers can verify). HS256 for symmetric (shared secret). RS256 recommended for public verification.',
            },
        ],
        caseStudies: [
            {
                title: 'Microservices Authentication',
                description:
                    'Implemented JWT across microservices enabling stateless authentication.',
                link: '#',
            },
            {
                title: 'Mobile App API Security',
                description:
                    'Secured REST APIs with JWT tokens and refresh mechanism for mobile app.',
                link: '#',
            },
            {
                title: 'Cross-Domain SSO',
                description:
                    'Implemented single sign-on across multiple domains using JWT.',
                link: '#',
            },
        ],
        relatedTechs: [
            'OAuth 2.0',
            'OpenID Connect',
            'API Gateway',
            'Node.js',
            'Spring Security',
            'Microservices',
            'Redis',
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
