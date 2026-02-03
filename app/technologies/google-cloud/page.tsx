'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Cloud } from 'lucide-react';

export default function GoogleCloudTechPage() {
    const techData = {
        name: 'Google Cloud',
        emoji: '☁️',
        icon: <Cloud className="w-6 h-6" />,
        shortDescription:
            'Scale your infrastructure with Google Cloud Platform. Our GCP experts deliver enterprise-grade cloud solutions with nearshore expertise.',
        heroTitle: 'Enterprise-Grade Cloud Solutions with Google Cloud Platform',
        heroSubtitle:
            'Google Cloud Platform powers globally distributed applications with cutting-edge infrastructure, AI/ML capabilities, and data analytics. Our expert developers leverage GCP services for scalable, secure, and innovative cloud solutions. From startups to Fortune 500 companies, we deliver GCP expertise across the full spectrum of cloud computing.',
        heroImage: '/images/tech-gcp-rich.svg',
        heroImageAlt: 'Google Cloud Platform - Enterprise Cloud Infrastructure',
        services: [
            {
                title: 'GCP Infrastructure Setup & Management',
                description:
                    'Design and implement scalable infrastructure on Google Cloud with optimal resource configuration.',
                details:
                    'Compute Engine, App Engine, Cloud Run, and VPC networking for enterprise-grade deployments.',
            },
            {
                title: 'Data Analytics & BigQuery',
                description:
                    'Implement large-scale data warehousing and analytics using BigQuery for actionable insights.',
                details:
                    'Data pipeline design, ETL processes, analytics dashboards, and real-time data processing.',
            },
            {
                title: 'Kubernetes & Container Orchestration',
                description:
                    'Deploy and manage containerized applications using Google Kubernetes Engine (GKE).',
                details:
                    'Container orchestration, microservices management, auto-scaling, and service mesh implementation.',
            },
            {
                title: 'AI & Machine Learning Solutions',
                description:
                    'Build AI-powered applications using Vertex AI, TensorFlow, and Google Cloud ML services.',
                details:
                    'Model training, deployment, prediction services, and custom ML pipelines.',
            },
            {
                title: 'Database & Firestore',
                description:
                    'Implement NoSQL databases with Firestore and Cloud Spanner for consistent, scalable data.',
                details:
                    'Database design, replication, consistency models, and query optimization.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement GCP security best practices for data protection and regulatory compliance.',
                details:
                    'Identity & Access Management, encryption, VPC security, and compliance monitoring.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Compute Services',
                tools: [
                    'Compute Engine',
                    'App Engine',
                    'Cloud Run',
                    'Kubernetes Engine (GKE)',
                    'Cloud Functions',
                    'Vertex AI',
                ],
            },
            {
                title: 'Data & Analytics',
                tools: [
                    'BigQuery',
                    'Cloud Dataflow',
                    'Cloud Pub/Sub',
                    'Datastore',
                    'Firestore',
                    'Cloud Spanner',
                ],
            },
            {
                title: 'Storage & Databases',
                tools: [
                    'Cloud Storage',
                    'Firestore',
                    'Cloud SQL',
                    'Cloud Spanner',
                    'Datastore',
                    'Memorystore',
                ],
            },
            {
                title: 'AI & Machine Learning',
                tools: [
                    'Vertex AI',
                    'TensorFlow',
                    'AutoML',
                    'Vision AI',
                    'Natural Language AI',
                    'Recommendation AI',
                ],
            },
            {
                title: 'Developer Tools',
                tools: [
                    'Cloud SDK',
                    'gcloud CLI',
                    'Cloud Console',
                    'Cloud Shell',
                    'Cloud Deployment Manager',
                    'Cloud Build',
                ],
            },
            {
                title: 'Networking & Security',
                tools: [
                    'Virtual Private Cloud (VPC)',
                    'Cloud Load Balancing',
                    'Cloud Armor',
                    'VPN',
                    'Interconnect',
                    'Cloud DNS',
                ],
            },
            {
                title: 'Monitoring & Operations',
                tools: [
                    'Cloud Monitoring',
                    'Cloud Logging',
                    'Cloud Trace',
                    'Cloud Profiler',
                    'Error Reporting',
                    'Debugger',
                ],
            },
            {
                title: 'Integration & APIs',
                tools: [
                    'Cloud APIs',
                    'API Gateway',
                    'Apigee',
                    'Cloud Tasks',
                    'Cloud Scheduler',
                    'Cloud Endpoints',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'AI & ML Leadership',
                description:
                    'Google Cloud provides cutting-edge AI and machine learning services that are industry-leading.',
            },
            {
                title: 'Global Infrastructure',
                description:
                    'Deploy applications globally with Google\'s extensive network of data centers and CDN.',
            },
            {
                title: 'Data Analytics Excellence',
                description:
                    'BigQuery enables lightning-fast analytics on massive datasets for data-driven decisions.',
            },
            {
                title: 'Kubernetes & Containers',
                description:
                    'Google created Kubernetes. GKE provides the most advanced container orchestration platform.',
            },
            {
                title: 'Cost Optimization',
                description:
                    'GCP\'s pricing model and resource management help optimize cloud spending efficiently.',
            },
            {
                title: 'Enterprise Security',
                description:
                    'Enterprise-grade security features and compliance certifications for regulated industries.',
            },
        ],
        keyFacts: [
            'Google Cloud serves millions of customers with 200+ countries and territories coverage',
            'BigQuery processes petabytes of data in seconds for instant analytics',
            'Vertex AI provides pre-trained models and AutoML for rapid AI implementation',
            'GKE (Google Kubernetes Engine) is the most mature Kubernetes platform',
            'Google Cloud leads in data analytics and machine learning capabilities',
            'Multi-cloud and hybrid cloud support for flexibility',
            'Strong free tier and credits for startups and development',
            'Trusted by enterprises including LinkedIn, Spotify, and Twitter',
        ],
        faqs: [
            {
                question: 'What are the key differences between Google Cloud and AWS?',
                answer:
                    'Google Cloud excels in data analytics (BigQuery), machine learning (Vertex AI), and Kubernetes. AWS has broader service offerings and larger market share. Choice depends on your specific needs: GCP for analytics/AI, AWS for comprehensive services.',
            },
            {
                question: 'How does BigQuery improve analytics?',
                answer:
                    'BigQuery uses columnar storage and SQL queries to analyze petabytes of data in seconds. It requires no infrastructure management and scales automatically, making it ideal for business intelligence and data-driven applications.',
            },
            {
                question: 'Should we use GKE or managed App Engine?',
                answer:
                    'GKE provides more control and is ideal for microservices. App Engine is better for simple applications and rapid deployment. For complex containerized systems, GKE is the better choice.',
            },
            {
                question: 'How does Google Cloud handle security?',
                answer:
                    'Google Cloud provides identity management, encryption, VPC security, DDoS protection, and compliance certifications (SOC 2, ISO 27001, HIPAA, GDPR). It uses Google\'s internal security infrastructure.',
            },
            {
                question: 'What\'s the cost comparison with other cloud providers?',
                answer:
                    'GCP often offers competitive pricing, especially for data analytics and AI services. Detailed cost calculators and committed-use discounts can reduce expenses. Many startups use GCP\'s free credits for development.',
            },
            {
                question: 'Can we migrate existing applications to GCP?',
                answer:
                    'Yes. Google Cloud provides migration tools and services for moving workloads from on-premise or other clouds. We help with migration planning, execution, and optimization.',
            },
        ],
        caseStudies: [
            {
                title: 'Data Analytics Platform Migration',
                description:
                    'Migrated legacy data warehouse to BigQuery, reducing query time from hours to seconds.',
                link: '#',
            },
            {
                title: 'Microservices on GKE',
                description:
                    'Deployed microservices architecture on GKE with 99.99% uptime and auto-scaling.',
                link: '#',
            },
            {
                title: 'AI-Powered Recommendation Engine',
                description:
                    'Built machine learning recommendation system using Vertex AI and BigQuery for retail platform.',
                link: '#',
            },
        ],
        relatedTechs: [
            'AWS',
            'Kubernetes',
            'BigQuery',
            'Terraform',
            'Cloud Run',
            'Firestore',
            'Vertex AI',
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
