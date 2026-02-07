'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function DjangoTechPage() {
    const techData = {
        name: 'Django',
        emoji: '🎸',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription: 'Full-featured Python web framework for rapid development. Expert Django development for scalable web applications.',
        heroTitle: 'Build Robust Web Applications with Django',
        heroSubtitle: 'Django is a powerful, batteries-included Python web framework that enables rapid development of secure, scalable applications. Our experts leverage Django\'s ORM, admin interface, and comprehensive tooling to deliver enterprise-grade web solutions.',
        heroImage: '/images/tech-django-rich.svg',
        heroImageAlt: 'Django - Python Web Framework',
        services: [
            {
                title: 'Django REST APIs',
                description: 'Build fast, secure REST APIs with Django REST Framework for modern frontend applications.',
                details: 'Expert implementation of serializers, viewsets, authentication, permissions, and pagination for production-ready APIs.',
            },
            {
                title: 'Database Design & ORM',
                description: 'Model complex data relationships using Django ORM with migrations, relationships, and optimization.',
                details: 'Design efficient database schemas, implement complex queries, and optimize database performance with Django ORM.',
            },
            {
                title: 'Authentication & Authorization',
                description: 'Implement robust authentication and authorization with Django built-in systems and third-party integrations.',
                details: 'User management, JWT tokens, OAuth integration, role-based access control, and security best practices.',
            },
            {
                title: 'Admin Interface Customization',
                description: 'Leverage and customize Django\'s powerful admin interface for managing application data efficiently.',
                details: 'Create custom admin views, filters, actions, and dashboards for streamlined data management.',
            },
            {
                title: 'Celery & Async Tasks',
                description: 'Implement asynchronous task processing with Celery for background jobs and scheduled tasks.',
                details: 'Setup task queues, handle long-running operations, implement retries, and monitor task execution.',
            },
            {
                title: 'Testing & Deployment',
                description: 'Comprehensive testing strategies and production-ready deployment configurations for Django applications.',
                details: 'Unit testing, integration testing, Docker containerization, and deployment to cloud platforms.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Framework',
                tools: ['Django', 'Django REST Framework', 'Django ORM', 'Django Signals', 'Django Middleware'],
            },
            {
                title: 'Database Tools',
                tools: ['PostgreSQL', 'Django Migrations', 'psycopg2', 'SQLAlchemy', 'django-extensions'],
            },
            {
                title: 'Authentication & Security',
                tools: ['Django Auth', 'Django-allauth', 'djangorestframework-simplejwt', 'django-cors-headers', 'django-defender'],
            },
            {
                title: 'Async & Background Jobs',
                tools: ['Celery', 'Redis', 'RQ', 'APScheduler', 'django-celery-beat'],
            },
            {
                title: 'Frontend Integration',
                tools: ['Django Templates', 'Webpack', 'React Integration', 'Vue Integration', 'GraphQL-core-next'],
            },
            {
                title: 'Testing & Quality',
                tools: ['pytest', 'pytest-django', 'Coverage', 'Black', 'Flake8', 'isort'],
            },
            {
                title: 'Caching & Performance',
                tools: ['Redis', 'Memcached', 'django-debug-toolbar', 'django-cachalot', 'django-ratelimit'],
            },
            {
                title: 'Deployment & DevOps',
                tools: ['Docker', 'Gunicorn', 'Nginx', 'AWS', 'Heroku', 'CI/CD Pipelines'],
            },
        ],
        whyChoose: [
            {
                title: 'Batteries-Included Framework',
                description: 'Django includes everything needed for web development: ORM, admin, authentication, and more out of the box.',
            },
            {
                title: 'Rapid Development',
                description: 'Built for speed, Django enables rapid development without sacrificing security or best practices.',
            },
            {
                title: 'Enterprise Security',
                description: 'Built-in protections against common web vulnerabilities: CSRF, SQL injection, XSS, and more.',
            },
            {
                title: 'Scalability Expertise',
                description: 'Our team has experience scaling Django applications to handle millions of requests and large datasets.',
            },
            {
                title: 'Comprehensive ORM',
                description: 'Django ORM abstracts database complexity while allowing raw queries when needed for optimization.',
            },
            {
                title: 'Administrator Interface',
                description: 'Leverage Django\'s powerful admin panel for data management, reducing the need for custom UI.',
            },
        ],
        keyFacts: [
            'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design',
            'Django ORM provides an abstraction layer for database operations, supporting multiple databases without code changes',
            'Built-in authentication system handles user management, permissions, and sessions securely',
            'Django admin interface provides automatically generated CRUD interface for database models',
            'Middleware system provides hooks for request/response processing at multiple points in the application lifecycle',
            'Template system with context processors enables dynamic content generation and template reusability',
            'URL routing system provides clean, RESTful URL patterns with named reversible URLs',
            'Django community is one of the largest in Python with extensive packages and documentation',
        ],
        faqs: [
            {
                question: 'Should I use Django for REST APIs or Django REST Framework?',
                answer: 'Use Django REST Framework (DRF) when building pure APIs. DRF provides serializers, viewsets, authentication, and pagination specifically optimized for API development. Use Django if you need server-rendered templates.',
            },
            {
                question: 'Is Django good for microservices?',
                answer: 'Django is better suited for monolithic applications. For microservices, consider FastAPI which is lighter-weight. However, you can build Django microservices if you prefer the framework\'s features.',
            },
            {
                question: 'How does Django handle database migrations?',
                answer: 'Django migrations track schema changes as Python code. Run makemigrations to detect model changes, review the generated migration file, then run migrate to apply changes. This enables version control and automated deployments.',
            },
            {
                question: 'Can Django scale to handle high traffic?',
                answer: 'Yes, Django can scale. Use caching (Redis), CDNs, database optimization, async tasks (Celery), and proper deployment (load balancing, containers). Many high-traffic sites use Django.',
            },
            {
                question: 'What is the Django admin interface?',
                answer: 'The Django admin is an automatically-generated web interface for database management. Define your models, register them with the admin, and get a full CRUD interface. Customize it for custom workflows.',
            },
        ],
        relatedTechs: ['Python', 'PostgreSQL', 'FastAPI', 'Celery', 'Docker', 'React', 'Vue', 'GraphQL'],
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
