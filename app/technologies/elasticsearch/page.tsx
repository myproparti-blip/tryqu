'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Search } from 'lucide-react';

export default function ElasticsearchTechPage() {
    const techData = {
        name: 'Elasticsearch',
        emoji: '🔍',
        icon: <Search className="w-6 h-6" />,
        shortDescription:
            'Powerful full-text search and analytics. Our Elasticsearch experts deliver scalable search solutions with nearshore expertise.',
        heroTitle: 'Enterprise Search and Analytics with Elasticsearch',
        heroSubtitle:
            'Elasticsearch is the world\'s most popular search and analytics engine powering real-time insights and intelligent search. Our expert developers leverage Elasticsearch for full-text search, analytics, and data visualization. From product search to log analysis and security monitoring, we deliver comprehensive Elasticsearch expertise across modern data-intensive applications.',
        heroImage: '/images/tech-elasticsearch-rich.svg',
        heroImageAlt: 'Elasticsearch - Search and Analytics Engine',
        services: [
            {
                title: 'Full-Text Search Implementation',
                description:
                    'Build powerful search features with relevance ranking and filtering.',
                details:
                    'Tokenization, stemming, fuzzy search, and advanced query syntax.',
            },
            {
                title: 'Index Design & Optimization',
                description:
                    'Design optimal index structures for performance and scalability.',
                details:
                    'Mapping design, analyzer selection, shard allocation, and index tuning.',
            },
            {
                title: 'Log and Event Analytics',
                description:
                    'Collect, analyze, and visualize logs and events in real-time.',
                details:
                    'Log ingestion pipelines, parsing, aggregation, and alerting.',
            },
            {
                title: 'Metrics & Performance Monitoring',
                description:
                    'Monitor application and infrastructure metrics with Elasticsearch.',
                details:
                    'Metrics collection, time-series analysis, and anomaly detection.',
            },
            {
                title: 'Security Information & Event Management (SIEM)',
                description:
                    'Implement security monitoring and threat detection systems.',
                details:
                    'Security log analysis, threat detection, and compliance reporting.',
            },
            {
                title: 'Visualization & Dashboards',
                description:
                    'Create interactive dashboards with Kibana for data exploration.',
                details:
                    'Dashboard design, visualization types, and drill-down analytics.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Elastic Stack',
                tools: [
                    'Elasticsearch',
                    'Kibana',
                    'Beats',
                    'Logstash',
                    'Elastic Cloud',
                    'Elastic Agent',
                ],
            },
            {
                title: 'Data Collection',
                tools: [
                    'Beats (Filebeat, Metricbeat, etc.)',
                    'Logstash',
                    'Elastic Agent',
                    'Custom collectors',
                    'Fluentd',
                    'Fluent Bit',
                ],
            },
            {
                title: 'Client Libraries',
                tools: [
                    'JavaScript Client',
                    'Python Client',
                    'Java Client',
                    'Go Client',
                    'Rust Client',
                    'Ruby Client',
                ],
            },
            {
                title: 'Indexing & Processing',
                tools: [
                    'Elasticsearch Mappings',
                    'Index Templates',
                    'Ingest Pipelines',
                    'Transforms',
                    'ILM (Index Lifecycle Management)',
                    'Rollover',
                ],
            },
            {
                title: 'Query & Analysis',
                tools: [
                    'Query DSL',
                    'Aggregations',
                    'KQL (Kibana Query Language)',
                    'EQL (Event Query Language)',
                    'SQL Support',
                    'Painless Scripting',
                ],
            },
            {
                title: 'Visualization & BI',
                tools: [
                    'Kibana Dashboards',
                    'Kibana Canvas',
                    'Kibana Lens',
                    'Elasticsearch SQL Workbench',
                    'Tableau Integration',
                    'Grafana Integration',
                ],
            },
            {
                title: 'Machine Learning',
                tools: [
                    'Anomaly Detection',
                    'Forecast',
                    'Outlier Detection',
                    'Classification',
                    'Regression',
                    'Text Classification',
                ],
            },
            {
                title: 'Deployment & Management',
                tools: [
                    'Elastic Cloud',
                    'AWS Elasticsearch',
                    'Docker',
                    'Kubernetes',
                    'Terraform',
                    'Cloud Formation',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Full-Text Search Excellence',
                description:
                    'Industry-leading search relevance and performance for product and content search.',
            },
            {
                title: 'Real-Time Analytics',
                description:
                    'Instant insights on massive data volumes enabling data-driven decisions.',
            },
            {
                title: 'Scalability',
                description:
                    'Distributed architecture scales to petabytes of data across clusters.',
            },
            {
                title: 'Rich Visualization',
                description:
                    'Kibana provides powerful interactive dashboards without coding.',
            },
            {
                title: 'Comprehensive Stack',
                description:
                    'Elastic Stack provides end-to-end solution for collection, processing, and visualization.',
            },
            {
                title: 'Flexible Deployment',
                description:
                    'Deploy on-premise, cloud, or hybrid with Elastic Cloud managed service.',
            },
        ],
        keyFacts: [
            'Elasticsearch is used by 45%+ of companies with 1000+ employees',
            'Powers search for Netflix, Slack, Uber, and GitHub',
            'Scales to petabytes of data with distributed architecture',
            'Sub-second search response times even on massive datasets',
            'RESTful API makes integration straightforward',
            'Kibana dashboards require no coding for visualization',
            'Built-in security with encryption and role-based access',
            'Active community with extensive plugins and integrations',
        ],
        faqs: [
            {
                question: 'What\'s the difference between Elasticsearch and SQL databases?',
                answer:
                    'Elasticsearch excels at full-text search and analytics. SQL databases are for transactional data. Use databases for primary storage, Elasticsearch for search and analytics.',
            },
            {
                question: 'How does Elasticsearch handle large datasets?',
                answer:
                    'Through sharding (horizontal partitioning) and replication. Data is split across nodes enabling massive scale. Proper indexing ensures fast queries.',
            },
            {
                question: 'What\'s the best way to structure data in Elasticsearch?',
                answer:
                    'Design mappings based on query patterns. Use appropriate field types (keyword vs text). Implement index templates for consistency. Time-series data uses date-based indices.',
            },
            {
                question: 'Can Elasticsearch handle real-time data?',
                answer:
                    'Yes, with sub-second indexing latency. Elasticsearch can ingest thousands of documents per second and make them searchable almost immediately.',
            },
            {
                question: 'Is Elasticsearch suitable for transactional applications?',
                answer:
                    'Not recommended. Elasticsearch is for search and analytics. Use databases for transactions. Combine them: database for transactional consistency, Elasticsearch for search.',
            },
            {
                question: 'How do we secure Elasticsearch?',
                answer:
                    'Enable authentication, use RBAC for access control, encrypt data in transit and at rest, use VPC security, and enable audit logging.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Product Search',
                description:
                    'Implemented Elasticsearch-powered product search handling 10M+ SKUs with sub-second response times.',
                link: '#',
            },
            {
                title: 'Log & Event Analytics Platform',
                description:
                    'Built centralized logging solution processing 100B+ events daily with anomaly detection.',
                link: '#',
            },
            {
                title: 'Security Threat Detection System',
                description:
                    'Deployed SIEM solution detecting security threats across infrastructure.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Kibana',
            'Logstash',
            'Beats',
            'PostgreSQL',
            'MongoDB',
            'Kafka',
            'AWS OpenSearch',
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
