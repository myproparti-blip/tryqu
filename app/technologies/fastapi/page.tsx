'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Zap } from 'lucide-react';

export default function FastAPITechPage() {
    const techData = {
        name: 'FastAPI',
        emoji: '⚙️',
        icon: <Zap className="w-6 h-6" />,
        shortDescription: 'Modern, high-performance Python framework for building APIs. Expert FastAPI development for scalable microservices.',
        heroTitle: 'Build High-Performance APIs with FastAPI',
        heroSubtitle: 'FastAPI is a modern Python web framework designed for speed and ease of use. Built on Starlette and Pydantic, it provides automatic API documentation, type safety, and excellent performance. Perfect for microservices, real-time applications, and data APIs.',
        heroImage: '/images/tech-fastapi-rich.svg',
        heroImageAlt: 'FastAPI - Python API Framework',
        services: [
            {
                title: 'RESTful API Development',
                description: 'Build fast, scalable REST APIs with automatic OpenAPI documentation and type validation.',
                details: 'Leverage Pydantic models for validation, async/await for performance, and automatic Swagger/OpenAPI documentation.',
            },
            {
                title: 'GraphQL APIs',
                description: 'Develop GraphQL APIs with FastAPI and Strawberry or Graphene for flexible data querying.',
                details: 'Setup GraphQL schema, resolvers, subscriptions, and authentication for modern API architectures.',
            },
            {
                title: 'Async & Real-time Applications',
                description: 'Build real-time applications with WebSockets and async streaming for live data updates.',
                details: 'Implement WebSocket connections, async generators, and Server-Sent Events for real-time communication.',
            },
            {
                title: 'Authentication & Authorization',
                description: 'Implement secure authentication with JWT, OAuth2, and custom security schemes.',
                details: 'Setup user authentication, token management, role-based access control, and API key validation.',
            },
            {
                title: 'Database Integration',
                description: 'Integrate databases with SQLAlchemy ORM, MongoDB, or other data stores for persistence.',
                details: 'Design efficient data models, implement relationships, optimize queries, and manage migrations.',
            },
            {
                title: 'Testing & Deployment',
                description: 'Comprehensive testing strategies and containerized deployment for production FastAPI applications.',
                details: 'Setup pytest, test client, Docker containerization, Kubernetes deployment, and CI/CD pipelines.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Framework',
                tools: ['FastAPI', 'Starlette', 'Pydantic', 'Uvicorn', 'ASGI'],
            },
            {
                title: 'Data Validation',
                tools: ['Pydantic', 'Pydantic Settings', 'Pydantic Validators', 'marshmallow', 'cerberus'],
            },
            {
                title: 'Database ORM',
                tools: ['SQLAlchemy', 'Tortoise ORM', 'Piccolo', 'Databases', 'Motor'],
            },
            {
                title: 'Authentication & Security',
                tools: ['FastAPI Security', 'PyJWT', 'python-jose', 'passlib', 'oauth2-provider'],
            },
            {
                title: 'API Documentation',
                tools: ['Swagger UI', 'ReDoc', 'OpenAPI', 'Pydantic Docs', 'FastAPI Docs'],
            },
            {
                title: 'Async & Concurrency',
                tools: ['asyncio', 'httpx', 'aioredis', 'Celery', 'APScheduler'],
            },
            {
                title: 'Testing & Quality',
                tools: ['pytest', 'pytest-asyncio', 'Coverage', 'Black', 'Flake8', 'mypy'],
            },
            {
                title: 'Deployment & DevOps',
                tools: ['Docker', 'Kubernetes', 'AWS', 'Heroku', 'Railway', 'Fly.io'],
            },
        ],
        whyChoose: [
            {
                title: 'Exceptional Performance',
                description: 'FastAPI delivers performance comparable to Node.js and Go, with async support built-in.',
            },
            {
                title: 'Developer Experience',
                description: 'Automatic API documentation, type checking, and validation reduce development time significantly.',
            },
            {
                title: 'Modern Python Framework',
                description: 'Built on modern async/await syntax and leverages the latest Python features and best practices.',
            },
            {
                title: 'Type Safety',
                description: 'Pydantic and Python type hints provide compile-time error detection and IDE autocomplete.',
            },
            {
                title: 'Microservices Ready',
                description: 'Lightweight, fast, and easy to containerize. Perfect for microservices and serverless architectures.',
            },
            {
                title: 'Production Expertise',
                description: 'Our team has extensive experience deploying FastAPI applications to production with high performance.',
            },
        ],
        keyFacts: [
            'FastAPI is built on Starlette (ASGI framework) and Pydantic (data validation), combining their power',
            'Automatic OpenAPI (Swagger) and ReDoc documentation reduces documentation maintenance overhead',
            'Built-in support for async/await enables handling thousands of concurrent connections efficiently',
            'Type hints enable IDE autocomplete, type checking with mypy, and automatic request/response validation',
            'Pydantic models provide JSON schema validation, serialization, and documentation generation',
            'Dependency injection system enables clean, testable code with automatic request dependency resolution',
            'CORS, HTTPS, cookies, and other HTTP features are built-in and easy to configure',
            'FastAPI is growing rapidly with strong community support and enterprise adoption',
        ],
        faqs: [
            {
                question: 'How does FastAPI performance compare to Django?',
                answer: 'FastAPI is significantly faster than Django due to async/await support and lighter-weight architecture. FastAPI performance is comparable to Node.js and Go frameworks. Django is better for traditional web apps with templates.',
            },
            {
                question: 'Should I use FastAPI or Django?',
                answer: 'Use FastAPI for modern API development, microservices, and real-time applications. Use Django for traditional web applications with server-rendered templates and built-in admin interfaces.',
            },
            {
                question: 'Can FastAPI handle databases?',
                answer: 'Yes, FastAPI works with SQLAlchemy, Tortoise ORM, and other database libraries. FastAPI focuses on the API layer; combine it with your favorite database ORM.',
            },
            {
                question: 'Is FastAPI suitable for production?',
                answer: 'Absolutely! FastAPI is used in production by many companies. Run it with Uvicorn or Gunicorn, containerize with Docker, and deploy to cloud platforms. Use appropriate production settings.',
            },
            {
                question: 'How do I validate request data in FastAPI?',
                answer: 'Use Pydantic models to define request schemas. FastAPI automatically validates requests against the schema, providing detailed error messages and OpenAPI documentation.',
            },
        ],
        relatedTechs: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Django', 'Docker', 'Kubernetes', 'GraphQL'],
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
