'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Lock } from 'lucide-react';

export default function OAuth20TechPage() {
    const techData = {
        name: 'OAuth 2.0',
        emoji: '🔐',
        icon: <Lock className="w-6 h-6" />,
        shortDescription:
            'Standard authorization protocol. Our OAuth 2.0 experts deliver secure authentication solutions with nearshore expertise.',
        heroTitle: 'Modern Authorization with OAuth 2.0',
        heroSubtitle:
            'OAuth 2.0 is the industry standard for delegation of access and authorization enabling secure third-party integrations. Our expert security engineers leverage OAuth 2.0 for implementing secure authorization flows protecting user data. From single sign-on to API integrations, we deliver comprehensive OAuth 2.0 expertise.',
        heroImage: '/images/tech-oauth-rich.svg',
        heroImageAlt: 'OAuth 2.0 - Authorization Protocol',
        services: [
            {
                title: 'OAuth 2.0 Implementation',
                description:
                    'Implement OAuth 2.0 authorization flows securely.',
                details:
                    'Authorization Code flow, PKCE, state parameter, and security best practices.',
            },
            {
                title: 'Provider Setup',
                description:
                    'Configure OAuth providers for third-party integrations.',
                details:
                    'Provider configuration, redirect URIs, and client credentials management.',
            },
            {
                title: 'Token Management',
                description:
                    'Manage access tokens, refresh tokens, and token expiration.',
                details:
                    'Token generation, refresh logic, token validation, and revocation.',
            },
            {
                title: 'Scope Definition',
                description:
                    'Define granular scopes for permission management.',
                details:
                    'Scope design, permission hierarchy, and least privilege principle.',
            },
            {
                title: 'Integration with Identity Providers',
                description:
                    'Integrate with providers: Google, GitHub, Microsoft, etc.',
                details:
                    'Social login, single sign-on, and multi-provider support.',
            },
            {
                title: 'Security Hardening',
                description:
                    'Implement security best practices and protection mechanisms.',
                details:
                    'CSRF protection, code verifier, state validation, and security headers.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'OAuth 2.0 Flows',
                tools: [
                    'Authorization Code',
                    'PKCE',
                    'Client Credentials',
                    'Password Grant',
                    'Implicit Flow',
                    'Device Flow',
                ],
            },
            {
                title: 'Popular Providers',
                tools: [
                    'Google OAuth',
                    'GitHub OAuth',
                    'Microsoft OAuth',
                    'Facebook OAuth',
                    'Amazon OAuth',
                    'Apple OAuth',
                ],
            },
            {
                title: 'Client Libraries',
                tools: [
                    'passport.js',
                    'oauth2orize',
                    'okta-sdk',
                    'Auth0',
                    'Firebase Auth',
                    'Keycloak',
                ],
            },
            {
                title: 'Token Management',
                tools: [
                    'JWT Tokens',
                    'Access Tokens',
                    'Refresh Tokens',
                    'ID Tokens',
                    'Bearer Tokens',
                    'Token Storage',
                ],
            },
            {
                title: 'Security Standards',
                tools: [
                    'PKCE',
                    'State Parameter',
                    'CSRF Protection',
                    'Code Verifier',
                    'Nonce',
                    'HTTPS Required',
                ],
            },
            {
                title: 'Integration Tools',
                tools: [
                    'Express Middleware',
                    'Spring Security',
                    'Django Social',
                    'Laravel Socialite',
                    'Ruby OmniAuth',
                    'API Gateways',
                ],
            },
            {
                title: 'Monitoring & Management',
                tools: [
                    'Token Validation',
                    'Audit Logging',
                    'Consent Management',
                    'Scope Validation',
                    'Rate Limiting',
                    'Analytics',
                ],
            },
            {
                title: 'Compliance & Standards',
                tools: [
                    'RFC 6749',
                    'RFC 6750',
                    'OpenID Connect',
                    'SAML Integration',
                    'GDPR Compliance',
                    'SOC 2',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Industry Standard',
                description:
                    'Widely adopted OAuth 2.0 is the de-facto standard for authorization.',
            },
            {
                title: 'User Privacy',
                description:
                    'Users never share passwords with third parties, enhancing security.',
            },
            {
                title: 'Granular Permissions',
                description:
                    'Scopes enable fine-grained permission control following least privilege.',
            },
            {
                title: 'Third-Party Integration',
                description:
                    'Simplifies integrations with popular identity providers.',
            },
            {
                title: 'Modern Security',
                description:
                    'PKCE and modern flows protect against authorization code interception.',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Extensive libraries and frameworks make implementation straightforward.',
            },
        ],
        keyFacts: [
            'OAuth 2.0 is used by 99%+ of enterprises for authorization',
            'Published in 2012, continuously updated with security enhancements',
            'PKCE (Proof Key for Public Clients) is standard for mobile/SPA apps',
            'Authorization Code flow is most secure for web applications',
            'Token-based approach enables stateless authorization',
            'Works seamlessly with JWT tokens for additional claims',
            'Supports single sign-on (SSO) and multi-provider scenarios',
            'OpenID Connect built on OAuth 2.0 for authentication',
        ],
        faqs: [
            {
                question: 'What\'s the difference between OAuth 2.0 and OpenID Connect?',
                answer:
                    'OAuth 2.0 is for authorization (what you can do). OpenID Connect adds authentication (who you are). Use OpenID Connect for user identity, OAuth 2.0 for API access.',
            },
            {
                question: 'Is OAuth 2.0 secure?',
                answer:
                    'Yes, when implemented correctly with PKCE, state parameter, and HTTPS. Avoid deprecated flows (Implicit). Use Authorization Code + PKCE for best security.',
            },
            {
                question: 'What\'s PKCE and why is it important?',
                answer:
                    'Proof Key for Public Clients protects against authorization code interception attacks. Essential for mobile apps and SPAs.',
            },
            {
                question: 'Can we use OAuth 2.0 for API authentication?',
                answer:
                    'Yes, use Client Credentials flow for service-to-service authentication. Bearer tokens in Authorization header.',
            },
            {
                question: 'How do we securely store tokens?',
                answer:
                    'Access tokens in memory or httpOnly cookies. Never expose in localStorage. Use refresh tokens for token rotation.',
            },
            {
                question: 'What happens if a token is compromised?',
                answer:
                    'Token expiration limits exposure window. Refresh tokens enable rotation. User can revoke access anytime.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Provider SSO Implementation',
                description:
                    'Implemented SSO supporting Google, GitHub, and Azure OAuth providers.',
                link: '#',
            },
            {
                title: 'Secure API Authorization',
                description:
                    'Deployed OAuth 2.0 for API security protecting sensitive data access.',
                link: '#',
            },
            {
                title: 'Mobile App Authentication',
                description:
                    'Implemented PKCE flow for mobile app authentication with token rotation.',
                link: '#',
            },
        ],
        relatedTechs: [
            'JWT',
            'OpenID Connect',
            'SSL/TLS',
            'Auth0',
            'Okta',
            'Keycloak',
            'Session Management',
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
