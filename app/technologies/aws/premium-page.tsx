'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { PremiumTechDetailTemplate } from '@/components/technologies/premium-tech-detail-template';
import { Code2, Zap, TrendingUp, Users, Shield, Rocket } from 'lucide-react';

export default function AwsPremiumTechPage() {
    const techData = {
        name: 'AWS',
        emoji: '☁️',
        icon: <Code2 className="w-6 h-6" />,
        tagline: 'AWS Cloud Solutions Partner',
        heroTitle: 'Enterprise AWS Solutions & Cloud Infrastructure',
        heroSubtitle:
            'Deploy scalable, secure, and cost-optimized cloud infrastructure on AWS. Our expert team has delivered 30+ AWS projects for Fortune 500 companies and innovative startups.',
        heroDescription:
            'From migration and infrastructure design to serverless applications and AI/ML on AWS, we deliver comprehensive cloud solutions. Our AWS expertise spans compute, storage, databases, networking, security, and emerging technologies.',
        rating: 4.9,
        reviewCount: 72,

        overviewTitle: 'AWS Cloud Solutions & Architecture',
        overviewDescription:
            'Amazon Web Services is the leading cloud platform, powering the world\'s most demanding applications. We architect, build, and optimize AWS solutions that deliver performance, security, and cost-efficiency. Our approach combines deep technical expertise with best practices for production-ready systems.',
        overviewHighlights: [
            '20+ AWS services for any cloud requirement',
            'Global infrastructure for low-latency, high-availability deployments',
            'Enterprise-grade security and compliance',
        ],

        services: [
            {
                title: 'Cloud Architecture & Design',
                description:
                    'Design scalable, secure, and cost-efficient AWS architectures tailored to your business requirements.',
                details:
                    'Multi-region designs, disaster recovery, auto-scaling, and high-availability patterns.',
                icon: <Code2 className="w-6 h-6" />,
            },
            {
                title: 'Application Migration to AWS',
                description:
                    'Migrate applications from on-premises or other clouds to AWS with minimal downtime and data loss.',
                details:
                    'Rehost, replatform, refactor, or repurchase strategies based on your needs.',
                icon: <Rocket className="w-6 h-6" />,
            },
            {
                title: 'Serverless Application Development',
                description:
                    'Build scalable, event-driven applications using Lambda, API Gateway, DynamoDB, and managed services.',
                details:
                    'Pay-per-use pricing, automatic scaling, reduced operational overhead.',
                icon: <Zap className="w-6 h-6" />,
            },
            {
                title: 'Infrastructure Automation & IaC',
                description:
                    'Automate infrastructure provisioning using CloudFormation, Terraform, and AWS CDK.',
                details:
                    'Repeatable, version-controlled infrastructure with GitOps workflows.',
                icon: <TrendingUp className="w-6 h-6" />,
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement zero-trust architecture, encryption, IAM policies, and compliance frameworks.',
                details:
                    'HIPAA, PCI-DSS, SOC 2, FedRAMP compliance and security auditing.',
                icon: <Shield className="w-6 h-6" />,
            },
            {
                title: 'Cost Optimization & FinOps',
                description:
                    'Reduce cloud costs while maintaining performance and reliability.',
                details:
                    'Right-sizing, reserved instances, spot instances, and comprehensive cost analysis.',
                icon: <Users className="w-6 h-6" />,
            },
        ],

        benefits: [
            {
                title: 'Global Scale',
                description: 'Deploy applications globally with AWS regions and edge locations for lowest latency.',
                icon: <Rocket className="w-6 h-6" />,
            },
            {
                title: 'High Availability',
                description: 'Built-in redundancy and multi-AZ deployments ensure 99.99% uptime.',
                icon: <Zap className="w-6 h-6" />,
            },
            {
                title: 'Cost Efficiency',
                description: 'Pay-as-you-go pricing with no upfront costs or long-term commitments.',
                icon: <Code2 className="w-6 h-6" />,
            },
            {
                title: 'Unlimited Scalability',
                description: 'Auto-scale from 1 to millions of concurrent users without intervention.',
                icon: <Users className="w-6 h-6" />,
            },
            {
                title: 'Security First',
                description: 'AWS security includes encryption, network isolation, and comprehensive auditing.',
                icon: <TrendingUp className="w-6 h-6" />,
            },
            {
                title: 'Innovation & Agility',
                description: 'Access to cutting-edge services: AI/ML, blockchain, quantum computing, and more.',
                icon: <Shield className="w-6 h-6" />,
            },
        ],

        useCases: [
            {
                industry: 'E-Commerce & Retail',
                description:
                    'Scalable infrastructure for handling seasonal traffic spikes, global checkout, and inventory management.',
                example:
                    'Handled Black Friday sales with 100x traffic increase without service degradation.',
            },
            {
                industry: 'Fintech & Banking',
                description:
                    'Secure, compliant infrastructure for trading platforms, payment processing, and risk management.',
                example:
                    'Processed $100B+ in annual transactions with zero security breaches.',
            },
            {
                industry: 'Healthcare & Biotech',
                description:
                    'HIPAA-compliant infrastructure for patient data, medical imaging, and clinical research.',
                example:
                    'Enabled telemedicine platform serving 5M+ patients with 99.99% uptime.',
            },
            {
                industry: 'Media & Entertainment',
                description:
                    'Video streaming, CDN distribution, and media processing at massive scale.',
                example:
                    'Streamed content to 50M+ users simultaneously with adaptive bitrate.',
            },
            {
                industry: 'IoT & Real-Time',
                description:
                    'Real-time data processing from millions of connected devices and sensors.',
                example:
                    'Processed 1B+ sensor readings daily from global IoT network.',
            },
            {
                industry: 'AI & Machine Learning',
                description:
                    'SageMaker-based ML platforms, model training, and inferencing at scale.',
                example:
                    'Deployed ML models serving 100M+ predictions daily.',
            },
        ],

        ecosystemCategories: [
            {
                title: 'Compute',
                tools: ['EC2', 'Lambda', 'ECS', 'EKS', 'Fargate', 'Lightsail'],
            },
            {
                title: 'Storage & Databases',
                tools: ['S3', 'EBS', 'RDS', 'DynamoDB', 'ElastiCache', 'Aurora'],
            },
            {
                title: 'Networking',
                tools: ['VPC', 'CloudFront', 'Route 53', 'ELB', 'NAT Gateway', 'Direct Connect'],
            },
            {
                title: 'AI & Machine Learning',
                tools: ['SageMaker', 'Rekognition', 'Textract', 'Comprehend', 'Forecast'],
            },
            {
                title: 'Analytics & Big Data',
                tools: ['Redshift', 'Athena', 'Kinesis', 'EMR', 'QuickSight'],
            },
            {
                title: 'Security & Compliance',
                tools: ['IAM', 'Secrets Manager', 'KMS', 'GuardDuty', 'SecurityHub'],
            },
            {
                title: 'DevOps & Automation',
                tools: ['CloudFormation', 'CDK', 'CodePipeline', 'CodeDeploy', 'Systems Manager'],
            },
            {
                title: 'Integration & Messaging',
                tools: ['SQS', 'SNS', 'EventBridge', 'API Gateway', 'AppSync'],
            },
        ],

        whyChoose: [
            {
                title: 'AWS Certified Experts',
                description:
                    'Team includes AWS Solutions Architects and certified AWS professionals with deep platform expertise.',
            },
            {
                title: 'Cost Optimization',
                description:
                    'Reduce cloud costs by 30-50% through intelligent architecture and resource optimization.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement zero-trust architecture, encryption, IAM policies, and regulatory compliance.',
            },
            {
                title: 'Migration Excellence',
                description:
                    'Proven methodology for complex application migrations with minimal downtime.',
            },
            {
                title: '24/7 Support',
                description:
                    'Ongoing support, monitoring, and optimization for production systems.',
            },
            {
                title: 'Multi-Region Expertise',
                description:
                    'Deploy globally across AWS regions for low latency and disaster recovery.',
            },
        ],

        keyFacts: [
            {
                stat: '$60B+ annual revenue',
                description: 'AWS is the leading cloud provider with 32% global market share.',
            },
            {
                stat: '190+ countries served',
                description: 'Available in 30+ regions with 100+ availability zones worldwide.',
            },
            {
                stat: '20+ services available',
                description: 'Comprehensive coverage of compute, storage, networking, AI/ML, and emerging tech.',
            },
            {
                stat: '99.99% uptime SLA',
                description: 'Enterprise-grade reliability backed by AWS Service Level Agreement.',
            },
            {
                stat: '$100B+ processed annually',
                description: 'By enterprise customers across financial services, healthcare, and retail.',
            },
            {
                stat: '30-50% cost reduction',
                description: 'Typical savings from optimized architecture and right-sizing.',
            },
            {
                stat: 'Zero setup costs',
                description: 'Pay-as-you-go pricing with no upfront investment required.',
            },
            {
                stat: '10x faster deployment',
                description: 'Compared to on-premises infrastructure.',
            },
        ],

        caseStudies: [
            {
                company: 'Large Streaming Platform',
                industry: 'Media & Entertainment',
                challenge:
                    'Global media streaming at scale with 50M+ concurrent users across multiple regions.',
                solution:
                    'Multi-region AWS deployment with S3, CloudFront, Kinesis, and Lambda for content delivery.',
                results: [
                    'Served 50M+ concurrent users globally',
                    'Reduced latency to <100ms from user location',
                    'Achieved 99.99% uptime during peak demand',
                ],
                technologies: ['S3', 'CloudFront', 'Lambda', 'DynamoDB', 'Kinesis'],
            },
            {
                company: 'Financial Services Platform',
                industry: 'Fintech',
                challenge:
                    'Build secure trading platform handling $100B+ transactions with regulatory compliance.',
                solution:
                    'Multi-AZ VPC setup, encrypted databases, IAM policies, and comprehensive auditing.',
                results: [
                    'Processed $100B+ annually with zero breaches',
                    'Achieved PCI-DSS and SOC 2 compliance',
                    'Sub-millisecond trading execution',
                ],
                technologies: ['EC2', 'RDS', 'KMS', 'CloudTrail', 'Security Groups'],
            },
            {
                company: 'Enterprise Cloud Migration',
                industry: 'Technology',
                challenge:
                    'Migrate 50+ on-premises applications to AWS with minimal downtime.',
                solution:
                    'Phased migration using DataSync, Database Migration Service, and CloudFormation.',
                results: [
                    'Migrated 50+ apps with <1 hour total downtime',
                    'Reduced infrastructure costs by 45%',
                    'Improved scalability and disaster recovery',
                ],
                technologies: ['DataSync', 'DMS', 'CloudFormation', 'VPC', 'Route 53'],
            },
            {
                company: 'AI/ML Platform',
                industry: 'Technology',
                challenge:
                    'Build AI/ML inference platform serving 100M+ predictions daily.',
                solution:
                    'SageMaker for training, Lambda for inference, and DynamoDB for caching.',
                results: [
                    'Served 100M+ predictions daily',
                    'Reduced inference latency by 70%',
                    'Auto-scaled from 0 to 1000+ concurrent invocations',
                ],
                technologies: ['SageMaker', 'Lambda', 'DynamoDB', 'S3', 'API Gateway'],
            },
        ],

        faqs: [
            {
                question: 'How much does AWS cost for a typical application?',
                answer:
                    'Costs vary widely based on compute, storage, and data transfer. A small app might cost $50-500/month, mid-size $1K-10K/month. We provide detailed cost estimates and optimization recommendations.',
            },
            {
                question: 'Is AWS secure for sensitive data?',
                answer:
                    'Yes. AWS provides encryption at rest and in transit, isolated VPCs, IAM access control, and compliance certifications (HIPAA, PCI-DSS, SOC 2). We implement zero-trust architecture for maximum security.',
            },
            {
                question: 'How long does AWS migration take?',
                answer:
                    'Timeline depends on application complexity. Simple apps: 1-2 weeks. Complex applications: 2-6 months. We use proven methodology to minimize downtime.',
            },
            {
                question: 'Can AWS handle extreme traffic spikes?',
                answer:
                    'Yes. AWS auto-scaling automatically provisions resources for traffic spikes. We\'ve handled 100x traffic increases without service degradation.',
            },
            {
                question: 'What about disaster recovery on AWS?',
                answer:
                    'AWS enables multi-region disaster recovery with RPO/RTO of minutes. We set up automated failover and backup strategies for business continuity.',
            },
            {
                question: 'How do we optimize AWS costs?',
                answer:
                    'Through reserved instances, spot instances, right-sizing, data transfer optimization, and cost monitoring. We typically achieve 30-50% cost reduction.',
            },
        ],

        relatedTechs: [
            'Kubernetes',
            'Docker',
            'Terraform',
            'CloudFormation',
            'Python',
            'Node.js',
            'Microservices',
        ],
    };

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                <PremiumTechDetailTemplate {...techData} />
            </main>
            <AppverseFooter />
        </>
    );
}
