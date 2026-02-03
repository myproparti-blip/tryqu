'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Database } from 'lucide-react';

export default function PostgreSQLTechPage() {
    const techData = {
        name: 'PostgreSQL',
        emoji: '🐘',
        icon: <Database className="w-6 h-6" />,
        shortDescription:
            'Scale your data with PostgreSQL. Our PostgreSQL experts deliver reliable, performant database solutions for enterprise applications.',
        heroTitle: 'Enterprise PostgreSQL Database Solutions',
        heroSubtitle:
            'PostgreSQL is a powerful open-source relational database trusted by millions for mission-critical applications. Our expert team designs, optimizes, and manages PostgreSQL databases handling massive scale. From database design to performance tuning, we ensure your data infrastructure is reliable, secure, and efficient.',
        heroImage: '/images/tech-postgresql-rich.svg',
        heroImageAlt: 'PostgreSQL - Advanced Open Source Database',
        services: [
            {
                title: 'Database Design & Architecture',
                description:
                    'Design normalized, scalable PostgreSQL schemas optimized for your application requirements.',
                details:
                    'Schema modeling, normalization, indexing strategy, partitioning, and performance optimization.',
            },
            {
                title: 'Migration to PostgreSQL',
                description:
                    'Migrate data from other databases to PostgreSQL with minimal downtime and data integrity.',
                details:
                    'Assessment, schema conversion, data migration, validation, and post-migration optimization.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize PostgreSQL performance through query optimization, indexing, and infrastructure tuning.',
                details:
                    'Query analysis, index design, execution plan optimization, and connection pooling.',
            },
            {
                title: 'High Availability & Replication',
                description:
                    'Implement high availability with replication, failover, and backup strategies.',
                details:
                    'Streaming replication, logical replication, hot standby, and automated failover setup.',
            },
            {
                title: 'Backup & Disaster Recovery',
                description:
                    'Design and implement comprehensive backup and disaster recovery strategies.',
                details:
                    'Incremental backups, point-in-time recovery, automated backup management, and testing.',
            },
            {
                title: 'Advanced Features & Extensions',
                description:
                    'Implement advanced PostgreSQL features including JSON support, full-text search, and custom extensions.',
                details:
                    'PostGIS for geospatial data, JSONB operations, text search, and custom development.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'PostgreSQL Core',
                tools: [
                    'PostgreSQL',
                    'pgAdmin',
                    'DBeaver',
                    'psql',
                    'Extensions',
                    'pg_upgrade',
                ],
            },
            {
                title: 'High Availability',
                tools: [
                    'Streaming Replication',
                    'Logical Replication',
                    'pg_basebackup',
                    'WAL archiving',
                    'Hot standby',
                    'Patroni',
                ],
            },
            {
                title: 'Performance & Monitoring',
                tools: [
                    'pg_stat_statements',
                    'EXPLAIN ANALYZE',
                    'Prometheus',
                    'Grafana',
                    'pg_stat_monitor',
                    'New Relic',
                ],
            },
            {
                title: 'Advanced Extensions',
                tools: [
                    'PostGIS',
                    'UUID',
                    'Hstore',
                    'JSON/JSONB',
                    'Full-Text Search',
                    'pg_trgm',
                ],
            },
            {
                title: 'Connection Pooling',
                tools: [
                    'PgBouncer',
                    'pgpool-II',
                    'Odyssey',
                    'Connection Pooling',
                    'Load Balancing',
                    'HA-Proxy',
                ],
            },
            {
                title: 'Backup & Recovery',
                tools: [
                    'pg_dump',
                    'pg_restore',
                    'WAL archiving',
                    'PITR',
                    'Barman',
                    'pgBackRest',
                ],
            },
            {
                title: 'Development & Testing',
                tools: [
                    'Docker',
                    'Kubernetes',
                    'pg_test_timing',
                    'sqlalchemy',
                    'Liquibase',
                    'Flyway',
                ],
            },
            {
                title: 'Cloud & Managed Services',
                tools: [
                    'AWS RDS',
                    'Google Cloud SQL',
                    'Azure Database',
                    'Heroku Postgres',
                    'Digital Ocean',
                    'Supabase',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'PostgreSQL Expertise',
                description:
                    'Our team includes PostgreSQL experts with deep knowledge of advanced features and performance tuning.',
            },
            {
                title: 'Enterprise Experience',
                description:
                    'Proven experience managing PostgreSQL instances handling petabytes of data and millions of requests.',
            },
            {
                title: 'Performance Excellence',
                description:
                    'Optimize PostgreSQL performance through advanced indexing, query optimization, and infrastructure tuning.',
            },
            {
                title: 'High Availability Design',
                description:
                    'Design redundant architectures with replication, failover, and automated recovery.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement security best practices including encryption, access control, and audit logging.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration and quick response.',
            },
        ],
        keyFacts: [
            'PostgreSQL is used by 90% of database-backed applications according to surveys',
            'Open source with no licensing costs, unlike commercial databases',
            'ACID compliance ensures data reliability and consistency',
            'Advanced data types including JSON, arrays, and geometric types',
            'Full-text search capabilities built-in without separate search engines',
            'PostGIS extension enables powerful geospatial queries',
            'Horizontal scalability through sharding and replication',
            'Trusted by companies like Spotify, Netflix, Instagram, and Uber',
        ],
        faqs: [
            {
                question: 'Why choose PostgreSQL over other databases?',
                answer:
                    'PostgreSQL offers ACID compliance, advanced data types, excellent performance, open-source cost savings, and reliability. It handles both traditional relational data and modern needs like JSON, geospatial data, and full-text search.',
            },
            {
                question: 'How does PostgreSQL ensure high availability?',
                answer:
                    'Through streaming replication creating synchronous/asynchronous replicas, automatic failover, and recovery. Combine with connection pooling and load balancing for production-grade availability.',
            },
            {
                question: 'Can PostgreSQL handle large datasets?',
                answer:
                    'Yes. PostgreSQL scales horizontally through sharding and vertically through powerful hardware. Companies run petabyte-scale databases on PostgreSQL with proper optimization.',
            },
            {
                question: 'How do we optimize PostgreSQL query performance?',
                answer:
                    'Through proper indexing, query optimization, analyzing execution plans with EXPLAIN, connection pooling, and infrastructure tuning. We use monitoring tools to identify bottlenecks.',
            },
            {
                question: 'What is JSONB and when should we use it?',
                answer:
                    'JSONB is PostgreSQL\'s native JSON type with efficient storage and indexing. Use it for semi-structured data, avoiding separate NoSQL databases when relational data is also needed.',
            },
            {
                question: 'How does PostgreSQL compare to NoSQL databases?',
                answer:
                    'PostgreSQL handles relational data excellently with ACID guarantees. NoSQL suits unstructured data and extreme scale. Modern PostgreSQL with JSON support bridges the gap.',
            },
            {
                question: 'What are the best practices for PostgreSQL backups?',
                answer:
                    'Use continuous WAL archiving for point-in-time recovery, automated pg_basebackup for full backups, and pgBackRest for advanced features. Test recovery procedures regularly.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Petabyte Data Warehouse',
                description:
                    'Designed PostgreSQL-based data warehouse handling 50 petabytes with partitioning and advanced indexing.',
                link: '#',
            },
            {
                title: 'High-Availability Replication Setup',
                description:
                    'Implemented streaming replication with automatic failover, achieving 99.99% uptime for mission-critical database.',
                link: '#',
            },
            {
                title: 'Performance Optimization Program',
                description:
                    'Optimized slow queries and indexes, improving database performance by 300% for 2M+ daily transactions.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Docker',
            'Kubernetes',
            'Node.js',
            'Python',
            'AWS',
            'Cloud Infrastructure',
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
