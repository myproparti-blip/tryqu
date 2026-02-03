'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Cloud } from 'lucide-react';

export default function AzureTechPage() {
    const techData = {
        name: 'Azure',
        emoji: '🔵',
        icon: <Cloud className="w-6 h-6" />,
        shortDescription:
            'Build and scale with Microsoft Azure. Our Azure specialists deliver enterprise cloud solutions with nearshore expertise.',
        heroTitle: 'Enterprise Cloud Solutions with Microsoft Azure',
        heroSubtitle:
            'Microsoft Azure is the enterprise cloud platform trusted by Fortune 500 companies worldwide. Our expert developers leverage Azure services for scalable, secure, and integrated cloud solutions. From legacy application modernization to cloud-native development, we deliver Azure expertise across the full spectrum of cloud computing.',
        heroImage: '/images/tech-azure-rich.svg',
        heroImageAlt: 'Microsoft Azure - Enterprise Cloud Platform',
        services: [
            {
                title: 'Azure Infrastructure & IaaS',
                description:
                    'Design and deploy virtual machines, networks, and storage solutions on Azure.',
                details:
                    'Virtual Machines, App Service, Azure Container Instances, and networking configuration.',
            },
            {
                title: 'App Modernization & Migration',
                description:
                    'Modernize legacy applications and migrate workloads to Azure cloud.',
                details:
                    'Lift and shift migrations, app service migrations, containerization, and refactoring.',
            },
            {
                title: 'Azure DevOps & CI/CD',
                description:
                    'Implement continuous integration and deployment pipelines using Azure DevOps.',
                details:
                    'Build pipelines, release management, testing automation, and deployment orchestration.',
            },
            {
                title: 'Data & Analytics Solutions',
                description:
                    'Build data warehouses and analytics solutions with Azure Synapse and Data Factory.',
                details:
                    'ETL pipelines, data warehousing, analytics dashboards, and real-time processing.',
            },
            {
                title: 'AI & Cognitive Services',
                description:
                    'Implement AI solutions using Azure Cognitive Services and Machine Learning.',
                details:
                    'Computer vision, natural language processing, speech services, and custom ML models.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement Azure security services for data protection and regulatory compliance.',
                details:
                    'Azure Security Center, Azure Sentinel, encryption, access control, and monitoring.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Compute Services',
                tools: [
                    'App Service',
                    'Virtual Machines',
                    'Container Instances',
                    'Azure Functions',
                    'Batch',
                    'Service Fabric',
                ],
            },
            {
                title: 'Databases & Storage',
                tools: [
                    'Azure SQL Database',
                    'Cosmos DB',
                    'Azure Table Storage',
                    'Blob Storage',
                    'Azure Database for PostgreSQL',
                    'Azure Cache for Redis',
                ],
            },
            {
                title: 'Analytics & Data',
                tools: [
                    'Azure Synapse Analytics',
                    'Data Factory',
                    'Stream Analytics',
                    'Analysis Services',
                    'Event Hubs',
                    'Data Lake Storage',
                ],
            },
            {
                title: 'AI & Machine Learning',
                tools: [
                    'Azure Machine Learning',
                    'Cognitive Services',
                    'Bot Service',
                    'Form Recognizer',
                    'Vision Services',
                    'Language Services',
                ],
            },
            {
                title: 'Integration & Messaging',
                tools: [
                    'Service Bus',
                    'Event Grid',
                    'Logic Apps',
                    'API Management',
                    'Azure Relay',
                    'Queue Storage',
                ],
            },
            {
                title: 'DevOps & Tools',
                tools: [
                    'Azure DevOps',
                    'Repos',
                    'Pipelines',
                    'Boards',
                    'Artifacts',
                    'Test Plans',
                ],
            },
            {
                title: 'Security & Governance',
                tools: [
                    'Azure Security Center',
                    'Azure Sentinel',
                    'Key Vault',
                    'Policy',
                    'Role-based Access Control (RBAC)',
                    'Azure AD',
                ],
            },
            {
                title: 'Management & Monitoring',
                tools: [
                    'Azure Monitor',
                    'Application Insights',
                    'Log Analytics',
                    'Azure Advisor',
                    'Resource Groups',
                    'Azure Portal',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Microsoft Integration',
                description:
                    'Seamless integration with Microsoft products including Office 365, Dynamics, and Windows Server.',
            },
            {
                title: 'Enterprise Compliance',
                description:
                    'Built-in compliance for HIPAA, GDPR, SOC 2, and industry-specific regulations.',
            },
            {
                title: 'Hybrid Cloud Support',
                description:
                    'Unmatched hybrid cloud capabilities with Azure Stack and Azure Arc.',
            },
            {
                title: 'Global Infrastructure',
                description:
                    'Largest global infrastructure with more regions than any other cloud provider.',
            },
            {
                title: 'DevOps Excellence',
                description:
                    'Azure DevOps provides integrated tools for complete software development lifecycle.',
            },
            {
                title: 'Cost Optimization',
                description:
                    'Reserved instances, spot VMs, and hybrid benefits reduce cloud costs significantly.',
            },
        ],
        keyFacts: [
            'Azure operates in 60+ regions worldwide with more geographic presence than competitors',
            'Trusted by 95% of Fortune 500 companies for mission-critical workloads',
            'Seamless integration with Microsoft ecosystem including Office 365 and Dynamics',
            'Azure DevOps provides complete CI/CD and project management solutions',
            'Cosmos DB offers globally distributed, multi-model database capabilities',
            'SQL Server licensing benefits reduce costs for existing Microsoft customers',
            'Azure AI services include pre-built cognitive capabilities ready to use',
            'Strong hybrid cloud support with Azure Stack and Arc',
        ],
        faqs: [
            {
                question: 'What makes Azure different from AWS?',
                answer:
                    'Azure excels in Microsoft integration, hybrid cloud, and enterprise compliance. AWS has broader service offerings. Choice depends on existing Microsoft infrastructure and compliance needs.',
            },
            {
                question: 'Can we use Azure for legacy application modernization?',
                answer:
                    'Yes. Azure provides multiple modernization paths: lift-and-shift to VMs, containerization with App Service, or refactoring to cloud-native. We guide you through the best approach for your applications.',
            },
            {
                question: 'How does Azure DevOps work?',
                answer:
                    'Azure DevOps provides integrated tools for repos, pipelines, boards, and artifacts. It enables end-to-end CI/CD with comprehensive project management and testing capabilities.',
            },
            {
                question: 'What\'s the cost of Azure compared to other clouds?',
                answer:
                    'Azure offers competitive pricing with significant discounts for existing Microsoft licenses and reserved instances. Reserved capacity can reduce costs by 40-70%.',
            },
            {
                question: 'Is Azure secure for sensitive workloads?',
                answer:
                    'Yes. Azure provides enterprise-grade security with encryption, access controls, threat detection, and compliance certifications. Azure Security Center provides comprehensive threat monitoring.',
            },
            {
                question: 'Can we deploy hybrid cloud applications?',
                answer:
                    'Yes. Azure excels at hybrid deployments with Azure Stack (on-premise), Azure Arc (multi-cloud), and hybrid networking solutions.',
            },
        ],
        caseStudies: [
            {
                title: 'Enterprise Migration to Azure',
                description:
                    'Migrated 200+ on-premise applications to Azure with zero downtime using hybrid cloud approach.',
                link: '#',
            },
            {
                title: 'CI/CD Pipeline Implementation',
                description:
                    'Implemented Azure DevOps pipelines reducing deployment time from 4 hours to 15 minutes.',
                link: '#',
            },
            {
                title: 'AI-Powered Customer Service',
                description:
                    'Built intelligent chatbot using Azure Cognitive Services handling 10K+ customer interactions daily.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Azure DevOps',
            'Cosmos DB',
            'Azure AI',
            'SQL Server',
            'Kubernetes',
            'Docker',
            'Terraform',
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
