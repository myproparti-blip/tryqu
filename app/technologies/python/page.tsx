'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function PythonTechPage() {
    const techData = {
        name: 'Python',
        emoji: '🐍',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription:
            'Scale your Python development with nearshore talent. Our Python developers deliverTryQu Tech  across AI, data science, and backend systems.',
        heroTitle: 'Scale Your Python Development with Expert Nearshore Talent',
        heroSubtitle:
            'Our Python development services power machine learning platforms, data pipelines, and backend systems for Fortune 500 companies. We typically land our teams within 2 weeks, enabling you to accelerate AI projects, data engineering, and web backends.',
        heroImage: '/images/tech-python-rich.svg',
        heroImageAlt: 'Python Programming - AI & Data Science',
        services: [
            {
                title: 'Machine Learning & AI Development',
                description:
                    'Build production-grade ML models and AI applications using TensorFlow, PyTorch, and scikit-learn.',
                details:
                    'End-to-end ML pipeline development including data preprocessing, model training, evaluation, and deployment with MLOps best practices.',
            },
            {
                title: 'Data Engineering & Analytics',
                description:
                    'Design and implement scalable data pipelines, warehouses, and analytics platforms.',
                details:
                    'Apache Spark, Airflow, SQL optimization, and data infrastructure for big data processing and real-time analytics.',
            },
            {
                title: 'Backend Development (Django/FastAPI)',
                description:
                    'Build scalable, secure backend systems with Django or FastAPI for web and mobile applications.',
                details:
                    'RESTful APIs, microservices, database design, authentication, and production-ready deployments with Docker and Kubernetes.',
            },
            {
                title: 'LLM Integration & Prompt Engineering',
                description:
                    'Integrate Large Language Models into applications with OpenAI, Hugging Face, and LangChain.',
                details:
                    'RAG systems, fine-tuning, prompt optimization, and building AI-powered features at scale.',
            },
            {
                title: 'Computer Vision Solutions',
                description:
                    'Develop image processing, object detection, and computer vision applications.',
                details:
                    'OpenCV, YOLO, detection models, and deployment on edge devices for real-time processing.',
            },
            {
                title: 'NLP & Text Processing',
                description:
                    'Build natural language processing solutions for text analysis, sentiment analysis, and chatbots.',
                details:
                    'spaCy, NLTK, Transformers, and production NLP pipelines with context-aware processing.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Machine Learning & AI',
                tools: [
                    'TensorFlow',
                    'PyTorch',
                    'scikit-learn',
                    'XGBoost',
                    'LightGBM',
                    'Hugging Face',
                    'OpenAI API',
                ],
            },
            {
                title: 'Data Processing & Analytics',
                tools: [
                    'Apache Spark',
                    'Pandas',
                    'NumPy',
                    'Polars',
                    'Dask',
                    'Apache Airflow',
                    'DBT',
                ],
            },
            {
                title: 'Web Frameworks',
                tools: [
                    'Django',
                    'FastAPI',
                    'Flask',
                    'Celery',
                    'SQLAlchemy',
                    'Pydantic',
                ],
            },
            {
                title: 'Data Tools & Warehouses',
                tools: [
                    'PostgreSQL',
                    'MySQL',
                    'BigQuery',
                    'Snowflake',
                    'Elasticsearch',
                    'MongoDB',
                ],
            },
            {
                title: 'Testing & Quality',
                tools: ['pytest', 'unittest', 'Mock', 'Coverage', 'Hypothesis'],
            },
            {
                title: 'NLP & Text Processing',
                tools: [
                    'spaCy',
                    'NLTK',
                    'TextBlob',
                    'Gensim',
                    'Transformers',
                    'LangChain',
                ],
            },
            {
                title: 'Visualization',
                tools: [
                    'Matplotlib',
                    'Seaborn',
                    'Plotly',
                    'Bokeh',
                    'Dash',
                    'Streamlit',
                ],
            },
            {
                title: 'DevOps & Deployment',
                tools: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Heroku'],
            },
        ],
        whyChoose: [
            {
                title: 'ML & AI Expertise',
                description:
                    'Deep expertise in machine learning, computer vision, NLP, and modern AI techniques with production experience.',
            },
            {
                title: 'Data-First Approach',
                description:
                    'We prioritize data quality, optimization, and architecture for scalable analytics and ML platforms.',
            },
            {
                title: 'Full-Stack ML',
                description:
                    'End-to-end ML pipeline expertise: data preparation through deployment and monitoring.',
            },
            {
                title: 'Modern Python Stack',
                description:
                    'Mastery of latest tools: FastAPI, async Python, type hints, and modern best practices.',
            },
            {
                title: 'Enterprise-Grade Code',
                description:
                    'Production-ready code with testing, documentation, and maintainability at scale.',
            },
            {
                title: 'Rapid Scaling',
                description:
                    'Quickly assemble specialized teams (ML engineers, data engineers, backend developers) for your exact needs.',
            },
        ],
        keyFacts: [
            'Python is the #1 language for AI and machine learning development',
            '80%+ of data scientists use Python as their primary language',
            'Rich ecosystem with 450,000+ packages on PyPI for every use case',
            'Excellent performance with libraries like NumPy and Pandas for data processing',
            'Perfect for rapid prototyping and production ML systems',
            'Strong typing support with type hints for enterprise applications',
            'Async Python enables highly concurrent, scalable web backends',
            'Leading choice for data engineering and ETL pipelines',
        ],
        faqs: [
            {
                question: 'Why is Python the top choice for AI and data science?',
                answer:
                    'Python dominates because of its simplicity, vast ML libraries (TensorFlow, PyTorch), active community, and flexibility. It allows data scientists and ML engineers to rapidly prototype and deploy production models.',
            },
            {
                question: 'Can Python be used for web backends?',
                answer:
                    'Absolutely. Django and FastAPI are production-ready frameworks handling millions of requests. FastAPI offers modern async capabilities with built-in API validation and auto-documentation.',
            },
            {
                question: 'What are Python development services?',
                answer:
                    'Python services include ML/AI development, data engineering, backend web development, data analysis, automation, and DevOps. We specialize in full-stack solutions leveraging Python\'s strengths.',
            },
            {
                question: 'How does Python handle large-scale data processing?',
                answer:
                    'Through Apache Spark, Pandas, Dask, and specialized libraries. Spark enables distributed processing across clusters, while async frameworks enable handling millions of concurrent requests.',
            },
            {
                question: 'What\'s the difference between Django and FastAPI?',
                answer:
                    'Django is a full-featured, batteries-included framework ideal for complex applications. FastAPI is modern, lightweight, and optimized for APIs with excellent async support and automatic documentation.',
            },
            {
                question: 'How can Python be used for real-time applications?',
                answer:
                    'Python enables real-time applications through async frameworks (FastAPI, Quart), WebSocket libraries, and message queues (RabbitMQ, Kafka). These technologies handle concurrent connections and instant data delivery.',
            },
            {
                question: 'What makes Python ideal for AI and machine learning?',
                answer:
                    'Python has extensive ML libraries (TensorFlow, PyTorch, scikit-learn), a large community, excellent documentation, and rapid development cycles. It\'s become the de facto standard for ML/AI development.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise ML Pipeline Implementation',
                description:
                    'Built end-to-end machine learning pipeline processing 100M+ records daily for predictive analytics.',
                link: '#',
            },
            {
                title: 'FastAPI Backend Modernization',
                description:
                    'Migrated monolithic Django application to async FastAPI microservices, improving API response time by 60%.',
                link: '#',
            },
            {
                title: 'Data Warehouse & Analytics Platform',
                description:
                    'Implemented Spark-based data warehouse with Python ETL pipelines for Fortune 500 financial services.',
                link: '#',
            },
        ],
        relatedTechs: [
            'TensorFlow',
            'PyTorch',
            'Django',
            'FastAPI',
            'Apache Spark',
            'Kubernetes',
            'Data Engineering',
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
