'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Database } from 'lucide-react';

export default function MongoDBTechPage() {
    const techData = {
        name: 'MongoDB',
        emoji: '🍃',
        icon: <Database className="w-6 h-6" />,
        shortDescription:
            'Build scalable applications with MongoDB. Our MongoDB experts deliver flexible NoSQL database solutions with nearshore expertise.',
        heroTitle: 'Flexible NoSQL Database with MongoDB',
        heroSubtitle:
            'MongoDB is a document database enabling flexible schemas and rapid development. Our expert developers design scalable MongoDB databases, implement aggregation pipelines, and optimize performance. From startups to enterprises, we deliver MongoDB solutions for modern applications.',
        heroImage: '/images/tech-mongodb-rich.svg',
        heroImageAlt: 'MongoDB - Document Database',
        services: [
            {
                title: 'MongoDB Schema Design',
                description:
                    'Design flexible document schemas optimized for your application requirements.',
                details:
                    'Document structure, embedding vs. referencing, and schema validation.',
            },
            {
                title: 'Index Optimization',
                description:
                    'Design and optimize indexes for fast query performance.',
                details:
                    'Index strategy, compound indexes, and performance profiling.',
            },
            {
                title: 'Aggregation Pipeline',
                description:
                    'Implement complex data transformations using MongoDB aggregation framework.',
                details:
                    'Pipeline stages, grouping, filtering, and advanced transformations.',
            },
            {
                title: 'Replication & High Availability',
                description:
                    'Design MongoDB replica sets for high availability and disaster recovery.',
                details:
                    'Replica configuration, failover, and backup strategies.',
            },
            {
                title: 'Sharding & Scaling',
                description:
                    'Implement horizontal scaling through MongoDB sharding.',
                details:
                    'Shard key selection, balancing, and shard cluster management.',
            },
            {
                title: 'Transactions & Consistency',
                description:
                    'Implement ACID transactions for data consistency across documents.',
                details:
                    'Multi-document transactions and consistency guarantees.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'MongoDB Core',
                tools: [
                    'MongoDB',
                    'MongoDB Atlas',
                    'MongoDB Compass',
                    'mongosh',
                    'MongoDB Tools',
                    'Ops Manager',
                ],
            },
            {
                title: 'ODM & Drivers',
                tools: [
                    'Mongoose',
                    'Typegoose',
                    'Motor (Python)',
                    'PyMongo',
                    'MongoDB Java Driver',
                    'MongoDB Node.js Driver',
                ],
            },
            {
                title: 'Frontend Frameworks',
                tools: [
                    'React',
                    'Vue.js',
                    'Angular',
                    'Next.js',
                    'Express',
                    'Node.js',
                ],
            },
            {
                title: 'Performance & Monitoring',
                tools: [
                    'MongoDB Profiler',
                    'Query Analyzer',
                    'Atlas Performance Advisor',
                    'Prometheus',
                    'Grafana',
                    'DataDog',
                ],
            },
            {
                title: 'Replication & High Availability',
                tools: [
                    'Replica Sets',
                    'Failover',
                    'Backup & Restore',
                    'Ops Manager',
                    'Cloud Backup',
                    'Cross-region Replication',
                ],
            },
            {
                title: 'Deployment & Infrastructure',
                tools: [
                    'MongoDB Atlas',
                    'Docker',
                    'Kubernetes',
                    'AWS',
                    'Google Cloud',
                    'Azure',
                ],
            },
            {
                title: 'Data Analysis & BI',
                tools: [
                    'MongoDB Atlas Charts',
                    'Tableau',
                    'Power BI',
                    'Metabase',
                    'Data Lake',
                    'Data Warehouse',
                ],
            },
            {
                title: 'Security & Compliance',
                tools: [
                    'Authentication',
                    'Authorization',
                    'Encryption',
                    'Auditing',
                    'HIPAA',
                    'SOC2',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'MongoDB Expertise',
                description:
                    'Our team includes experienced MongoDB developers with production databases at scale.',
            },
            {
                title: 'Flexible Data Model',
                description:
                    'Leverage MongoDB\'s flexible document model for rapid development and evolution.',
            },
            {
                title: 'Scalability',
                description:
                    'Design scalable databases using replication, sharding, and MongoDB Atlas.',
            },
            {
                title: 'Developer-Friendly',
                description:
                    'Natural JSON document structure aligns well with JavaScript applications.',
            },
            {
                title: 'High Availability',
                description:
                    'Implement replica sets and automatic failover for mission-critical applications.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on projects.',
            },
        ],
        keyFacts: [
            'MongoDB is used by 45%+ of enterprises for new development',
            'Document-oriented design aligns naturally with object-oriented programming',
            'Flexible schema enables rapid iteration without migrations',
            'Built-in replication and sharding for horizontal scaling',
            'ACID transactions enable consistent data across documents',
            'MongoDB Atlas provides managed hosting with automatic backups',
            'Rich query language enables complex data retrieval',
            'Large ecosystem with extensive driver and tool support',
        ],
        faqs: [
            {
                question: 'What is MongoDB and why use it?',
                answer:
                    'MongoDB is a document-oriented NoSQL database providing flexible schemas and horizontal scaling. It\'s chosen for rapid development, flexible data models, and excellent scaling capabilities.',
            },
            {
                question: 'When should we use MongoDB vs. relational databases?',
                answer:
                    'Use MongoDB for flexible schemas, rapid iteration, and horizontal scaling needs. Use relational databases for structured data with complex relationships and strong ACID guarantees.',
            },
            {
                question: 'How does MongoDB ensure data consistency?',
                answer:
                    'Through ACID transactions, replication with majority writes, and configurable write concern. Choose consistency level based on requirements.',
            },
            {
                question: 'Can we embed vs. reference documents?',
                answer:
                    'Yes, both approaches are valid. Embed related data for denormalization and performance. Reference for shared data and to avoid duplication.',
            },
            {
                question: 'How do we optimize MongoDB query performance?',
                answer:
                    'Through proper indexing, aggregation pipeline optimization, and query analysis. Use MongoDB Compass and Performance Advisor tools.',
            },
            {
                question: 'Can MongoDB handle large datasets?',
                answer:
                    'Yes, through sharding across multiple nodes. MongoDB scales horizontally for petabyte-scale datasets.',
            },
            {
                question: 'How long does MongoDB implementation take?',
                answer:
                    'Timeline depends on complexity. Simple databases: 1-2 weeks. Complex schemas: 3-4 weeks. Optimization and tuning: ongoing.',
            },
        ],
        caseStudies: [
            {
                title: 'High-Scale User Database',
                description:
                    'Designed MongoDB database handling 100M+ user documents with sharding for horizontal scaling.',
                link: '#',
            },
            {
                title: 'Real-Time Analytics Platform',
                description:
                    'Built analytics platform with MongoDB aggregation pipeline processing millions of events daily.',
                link: '#',
            },
            {
                title: 'Multi-Tenant SaaS Database',
                description:
                    'Implemented MongoDB database for SaaS supporting 10K+ tenants with data isolation and performance.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Node.js',
            'Express',
            'Mongoose',
            'React',
            'Next.js',
            'Docker',
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
