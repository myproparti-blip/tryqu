'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Database } from 'lucide-react';

export default function DynamoDBTechPage() {
    const techData = {
        name: 'DynamoDB',
        emoji: '⚙️',
        icon: <Database className="w-6 h-6" />,
        shortDescription:
            'Fully managed NoSQL at scale. Our DynamoDB experts deliver high-performance database solutions with nearshore expertise.',
        heroTitle: 'Serverless NoSQL with AWS DynamoDB',
        heroSubtitle:
            'AWS DynamoDB is the world\'s fastest and most flexible serverless NoSQL database service at scale. Our expert developers leverage DynamoDB for applications requiring predictable performance at any scale. From real-time web applications to IoT data processing, we deliver comprehensive DynamoDB expertise enabling millisecond latency at any throughput.',
        heroImage: '/images/tech-dynamodb-rich.svg',
        heroImageAlt: 'AWS DynamoDB - Fully Managed NoSQL Database',
        services: [
            {
                title: 'Database Design & Schema',
                description:
                    'Design optimal DynamoDB schemas for performance and cost efficiency.',
                details:
                    'Table design, partition key selection, sort keys, and access patterns.',
            },
            {
                title: 'Capacity Management',
                description:
                    'Optimize provisioned vs on-demand capacity based on workload patterns.',
                details:
                    'Auto-scaling configuration, capacity planning, and cost optimization.',
            },
            {
                title: 'Global Tables & Replication',
                description:
                    'Implement multi-region replication for global applications.',
                details:
                    'Global tables setup, cross-region failover, and consistency models.',
            },
            {
                title: 'Streams & Event Processing',
                description:
                    'Implement event-driven architectures using DynamoDB Streams.',
                details:
                    'Stream processing, Lambda triggers, and data replication.',
            },
            {
                title: 'Query Optimization',
                description:
                    'Optimize queries and access patterns for performance.',
                details:
                    'Query optimization, index design, and scan alternatives.',
            },
            {
                title: 'Security & Backup',
                description:
                    'Implement security controls and backup strategies.',
                details:
                    'Encryption, access control, point-in-time recovery, and backups.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'DynamoDB Core',
                tools: [
                    'DynamoDB Tables',
                    'Global Secondary Indexes (GSI)',
                    'Local Secondary Indexes (LSI)',
                    'DynamoDB Streams',
                    'Global Tables',
                    'Point-in-Time Recovery',
                ],
            },
            {
                title: 'Client Libraries',
                tools: [
                    'AWS SDK for JavaScript',
                    'AWS SDK for Python (Boto3)',
                    'AWS SDK for Java',
                    'AWS SDK for Go',
                    'AWS SDK for Ruby',
                    'AWS SDK for .NET',
                ],
            },
            {
                title: 'Query & Indexing',
                tools: [
                    'Query API',
                    'Scan API',
                    'GetItem API',
                    'BatchGetItem API',
                    'Secondary Indexes',
                    'Query Projections',
                ],
            },
            {
                title: 'Data Modeling',
                tools: [
                    'Single Table Design',
                    'Access Pattern Modeling',
                    'Partition Key Selection',
                    'Sort Key Design',
                    'Index Strategy',
                    'Data Denormalization',
                ],
            },
            {
                title: 'ORM & Abstraction',
                tools: [
                    'AWS ORM',
                    'Dynamoose',
                    'DynamoDB Mapper',
                    'Pulumi',
                    'Serverless Framework',
                    'AWS CDK',
                ],
            },
            {
                title: 'Integration & Automation',
                tools: [
                    'AWS Lambda',
                    'DynamoDB Streams',
                    'AWS EventBridge',
                    'API Gateway',
                    'CloudWatch',
                    'SNS/SQS',
                ],
            },
            {
                title: 'Monitoring & Management',
                tools: [
                    'CloudWatch Metrics',
                    'CloudWatch Alarms',
                    'DynamoDB Insights',
                    'AWS X-Ray',
                    'AWS CloudTrail',
                    'Cost Explorer',
                ],
            },
            {
                title: 'Development Tools',
                tools: [
                    'DynamoDB Local',
                    'AWS SAM',
                    'AWS CDK',
                    'Terraform',
                    'CloudFormation',
                    'Serverless Framework',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Fully Managed Service',
                description:
                    'No infrastructure management, automatic scaling, and backups handled by AWS.',
            },
            {
                title: 'Predictable Performance',
                description:
                    'Millisecond latency guaranteed regardless of scale or data volume.',
            },
            {
                title: 'Serverless & Pay-Per-Use',
                description:
                    'Only pay for provisioned capacity or actual requests consumed.',
            },
            {
                title: 'Global Scale',
                description:
                    'Global tables enable low-latency access worldwide with automatic replication.',
            },
            {
                title: 'Built-in Security',
                description:
                    'Encryption at rest/transit, IAM integration, and fine-grained access control.',
            },
            {
                title: 'AWS Ecosystem Integration',
                description:
                    'Seamless integration with Lambda, API Gateway, and other AWS services.',
            },
        ],
        keyFacts: [
            'DynamoDB serves over 20 trillion requests per day globally',
            'Used by companies including AWS itself, Netflix, Uber, and Airbnb',
            'Consistent sub-10ms latency for any scale',
            'Automatic scaling handles traffic spikes without configuration',
            'Global tables provide multi-region replication with millisecond sync',
            'Pay-per-request pricing eliminates over-provisioning costs',
            'Built-in encryption and fine-grained IAM policies',
            'Point-in-time recovery restores tables from any point in the last 35 days',
        ],
        faqs: [
            {
                question: 'When should we use DynamoDB vs RDS?',
                answer:
                    'DynamoDB for flexible schema, high throughput, and serverless simplicity. RDS for relational data, complex queries, and ACID transactions. Use both: RDS for transactional data, DynamoDB for high-traffic operational data.',
            },
            {
                question: 'How do we design optimal DynamoDB schemas?',
                answer:
                    'Start with access patterns, not data structure. Use single-table design where possible. Choose partition keys for distribution. Use GSI/LSI strategically. Denormalize data to reduce queries.',
            },
            {
                question: 'What\'s the difference between provisioned and on-demand?',
                answer:
                    'Provisioned: fixed capacity with cost predictability. On-demand: pay-per-request, best for unpredictable traffic. Use provisioned for steady workloads, on-demand for variable usage.',
            },
            {
                question: 'How do we scale DynamoDB?',
                answer:
                    'DynamoDB scales automatically. Adjust capacity or switch to on-demand pricing. Use auto-scaling for peak management. Implement caching with ElastiCache for read optimization.',
            },
            {
                question: 'Can DynamoDB handle strong consistency?',
                answer:
                    'Yes, with eventual consistency (default) or strong consistency option. Strong consistency costs 2x read capacity but guarantees latest data. Choose based on requirements.',
            },
            {
                question: 'How do we backup DynamoDB tables?',
                answer:
                    'On-demand backups provide point-in-time recovery. Enable PITR for automatic continuous backups. Cross-region replication with global tables. Export to S3 for analysis.',
            },
        ],
        caseStudies: [
            {
                title: 'High-Traffic E-Commerce Platform',
                description:
                    'Scaled DynamoDB to handle 1M requests/second during peak season with auto-scaling.',
                link: '#',
            },
            {
                title: 'IoT Data Processing',
                description:
                    'Processed billions of IoT events daily with DynamoDB Streams and Lambda.',
                link: '#',
            },
            {
                title: 'Global Multiplayer Game',
                description:
                    'Implemented global tables achieving sub-10ms latency worldwide for real-time gameplay.',
                link: '#',
            },
        ],
        relatedTechs: [
            'AWS Lambda',
            'AWS API Gateway',
            'DynamoDB Streams',
            'AWS EventBridge',
            'RDS',
            'ElastiCache',
            'Kinesis',
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
