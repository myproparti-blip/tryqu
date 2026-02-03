'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Cloud } from 'lucide-react';

export default function AWSTechPage() {
    const techData = {
        name: 'AWS',
        emoji: '☁️',
        icon: <Cloud className="w-6 h-6" />,
        shortDescription:
            'Accelerate your AWS infrastructure with nearshore cloud experts. Our AWS architects and engineers deliver enterprise-scale solutions.',
        heroTitle: 'Scale Your AWS Infrastructure with Expert Cloud Architects',
        heroSubtitle:
            'Our AWS expertise powers enterprise applications, data platforms, and serverless solutions for Fortune 500 companies. We typically land certified teams within 2 weeks, enabling you to optimize costs, improve performance, and accelerate your cloud migration journey.',
        heroImage: '/images/tech-aws-rich.svg',
        heroImageAlt: 'AWS - Cloud Infrastructure & Services',
        services: [
            {
                title: 'Cloud Architecture & Design',
                description:
                    'Design scalable, resilient, and cost-optimized cloud architectures on AWS aligned with your business goals.',
                details:
                    'Multi-region deployments, high availability, disaster recovery, and infrastructure as code using Terraform and CloudFormation.',
            },
            {
                title: 'AWS Migration & Modernization',
                description:
                    'Migrate legacy applications to AWS with minimal downtime and maximum efficiency.',
                details:
                    'Application re-platforming, database migration, lift-and-shift strategies, and comprehensive testing frameworks.',
            },
            {
                title: 'DevOps & Infrastructure Automation',
                description:
                    'Implement CI/CD pipelines, infrastructure automation, and deployment strategies on AWS.',
                details:
                    'AWS CloudFormation, Terraform, CodePipeline, CodeDeploy, and container orchestration with ECS/EKS.',
            },
            {
                title: 'Serverless Application Development',
                description:
                    'Build cost-effective, auto-scaling serverless applications using Lambda, API Gateway, and managed services.',
                details:
                    'Event-driven architecture, microservices with Lambda, DynamoDB optimization, and SAM framework.',
            },
            {
                title: 'Data & Analytics Solutions',
                description:
                    'Build data pipelines, data warehouses, and analytics platforms on AWS for enterprise insights.',
                details:
                    'Redshift, Glue, Kinesis, QuickSight, and data lake architecture for real-time and batch analytics.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement robust security controls, compliance frameworks, and monitoring across AWS infrastructure.',
                details:
                    'IAM policies, VPC security, encryption, AWS KMS, CloudTrail auditing, and HIPAA/SOC2 compliance.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Compute Services',
                tools: [
                    'EC2',
                    'Lambda',
                    'ECS',
                    'EKS',
                    'Elastic Beanstalk',
                    'AppRunner',
                    'Lightsail',
                ],
            },
            {
                title: 'Database & Storage',
                tools: [
                    'RDS (MySQL, PostgreSQL)',
                    'DynamoDB',
                    'ElastiCache',
                    'S3',
                    'EBS',
                    'Aurora',
                    'Redshift',
                ],
            },
            {
                title: 'Networking & Content Delivery',
                tools: [
                    'VPC',
                    'CloudFront',
                    'Route 53',
                    'ELB',
                    'ALB',
                    'VPN',
                    'DirectConnect',
                ],
            },
            {
                title: 'Analytics & Data',
                tools: [
                    'Kinesis',
                    'Glue',
                    'Athena',
                    'QuickSight',
                    'EMR',
                    'MSK',
                    'DataBrew',
                ],
            },
            {
                title: 'Integration & Messaging',
                tools: ['SQS', 'SNS', 'API Gateway', 'EventBridge', 'Step Functions'],
            },
            {
                title: 'DevOps & Management',
                tools: [
                    'CodePipeline',
                    'CodeBuild',
                    'CodeDeploy',
                    'CloudFormation',
                    'OpsWorks',
                    'Systems Manager',
                ],
            },
            {
                title: 'Security & Monitoring',
                tools: [
                    'IAM',
                    'KMS',
                    'Secrets Manager',
                    'CloudWatch',
                    'X-Ray',
                    'GuardDuty',
                    'Security Hub',
                ],
            },
            {
                title: 'Infrastructure as Code',
                tools: [
                    'CloudFormation',
                    'Terraform',
                    'AWS CDK',
                    'SAM',
                    'Ansible',
                    'Pulumi',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'AWS Certified Architects',
                description:
                    'Team includes Solutions Architects, DevOps engineers, and specialists with AWS certifications.',
            },
            {
                title: 'Cost Optimization Expertise',
                description:
                    'Proven strategies to optimize AWS spending, reduce waste, and maximize ROI on cloud infrastructure.',
            },
            {
                title: 'Enterprise-Scale Experience',
                description:
                    'Deployed solutions handling millions of requests, managing petabytes of data, and supporting global operations.',
            },
            {
                title: 'Compliance & Security Focus',
                description:
                    'Deep expertise in AWS security best practices, compliance frameworks (HIPAA, PCI-DSS, SOC2), and governance.',
            },
            {
                title: 'Well-Architected Reviews',
                description:
                    'Leverage AWS Well-Architected Framework pillars: operational excellence, security, reliability, performance, cost optimization.',
            },
            {
                title: 'Multi-Service Mastery',
                description:
                    'Expertise across 20+ AWS services with knowledge of service integrations and best practices.',
            },
        ],
        keyFacts: [
            'AWS is the global leader in cloud computing with 32% market share',
            'Over 200 AWS services available with constant innovation and feature releases',
            'Used by 90% of Fortune 500 companies for mission-critical workloads',
            'Serverless architecture (Lambda) enables auto-scaling without managing servers',
            'Global infrastructure with 33 regions enables low-latency, compliant deployments',
            'AWS Free Tier allows testing with $300 annual free usage credits',
            'Managed services reduce operational overhead and security burden',
            'Strong community support with AWS certifications and training programs',
        ],
        faqs: [
            {
                question: 'What are AWS development and infrastructure services?',
                answer:
                    'AWS services encompass compute (EC2, Lambda), databases (RDS, DynamoDB), storage (S3), networking, analytics, and more. Our services include architecture design, migration, DevOps automation, and ongoing optimization.',
            },
            {
                question: 'How can AWS help reduce infrastructure costs?',
                answer:
                    'Through right-sizing instances, using serverless where appropriate, Reserved Instances, Savings Plans, S3 Intelligent-Tiering, and eliminating unused resources. We perform cost analysis and optimization as part of our engagement.',
            },
            {
                question: 'Is AWS suitable for enterprise applications?',
                answer:
                    'Absolutely. AWS serves Fortune 500 companies with high availability, disaster recovery, compliance certifications (HIPAA, PCI-DSS, SOC2), and security controls required for enterprise-grade systems.',
            },
            {
                question: 'What\'s the difference between EC2 and Lambda?',
                answer:
                    'EC2 provides virtual servers with full control and responsibility. Lambda is serverless - pay only for code execution time without managing infrastructure. Choose based on your workload characteristics.',
            },
            {
                question: 'How long does AWS migration take?',
                answer:
                    'Timeline depends on application complexity and data volume. Simple applications: weeks. Complex enterprise migrations: months. Our team accelerates migrations through parallel workstreams and proven methodologies.',
            },
            {
                question: 'What AWS certifications do your team hold?',
                answer:
                    'Our team includes AWS Certified Solutions Architects (Professional), DevOps Engineers, Security Specialists, and Advanced Networking Specialists with regular certification renewals.',
            },
            {
                question: 'How does AWS help with disaster recovery and business continuity?',
                answer:
                    'AWS enables multi-region deployments, automated backups, RTO/RPO planning, and disaster recovery as a service. We implement backup strategies, failover mechanisms, and automated recovery procedures.',
            },
            {
                question: 'What is the AWS Well-Architected Framework?',
                answer:
                    'A set of best practices across 6 pillars: operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. We align all architectures with these principles.',
            },
            ],
            caseStudies: [
            {
                title: 'Global E-Commerce Infrastructure',
                description:
                    'Designed multi-region AWS infrastructure supporting 100M+ transactions annually with 99.99% uptime.',
                link: '#',
            },
            {
                title: 'Data Lake Migration',
                description:
                    'Migrated 50TB data warehouse to AWS, implementing Redshift and Glue for 10x performance improvement.',
                link: '#',
            },
            {
                title: 'Cost Optimization Program',
                description:
                    'Optimized AWS infrastructure reducing monthly cloud costs by 45% through right-sizing and reserved instances.',
                link: '#',
            },
            ],
        relatedTechs: [
            'Kubernetes',
            'Terraform',
            'Docker',
            'Python',
            'Node.js',
            'PostgreSQL',
            'DevOps',
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
