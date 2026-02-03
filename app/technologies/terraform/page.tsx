'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Cloud } from 'lucide-react';

export default function TerraformTechPage() {
    const techData = {
        name: 'Terraform',
        emoji: '🏗️',
        icon: <Cloud className="w-6 h-6" />,
        shortDescription:
            'Infrastructure as Code with Terraform. Our experts build scalable, reproducible cloud infrastructure with nearshore expertise.',
        heroTitle: 'Enterprise Infrastructure as Code with Terraform',
        heroSubtitle:
            'Terraform enables you to define, provision, and manage infrastructure across multiple cloud providers using code. Our expert team leverages Terraform to build scalable, maintainable, and reproducible cloud environments. From AWS to Azure to GCP, we deliver production-grade infrastructure automation.',
        heroImage: '/images/tech-terraform-rich.svg',
        heroImageAlt: 'Terraform - Infrastructure as Code',
        services: [
            {
                title: 'Infrastructure Design & Architecture',
                description:
                    'Design scalable, secure cloud infrastructure architectures aligned with your business requirements.',
                details:
                    'Multi-cloud strategies, network design, security groups, and high-availability configurations.',
            },
            {
                title: 'Terraform Module Development',
                description:
                    'Build reusable, well-documented Terraform modules for consistent infrastructure deployment.',
                details:
                    'Module organization, variable management, outputs, and registry publication.',
            },
            {
                title: 'AWS/Azure/GCP Infrastructure',
                description:
                    'Provision and manage cloud resources across AWS, Azure, and Google Cloud with Terraform.',
                details:
                    'VPCs, compute, storage, databases, networking, and managed services configuration.',
            },
            {
                title: 'Infrastructure Migration',
                description:
                    'Safely migrate existing infrastructure to Terraform with import and refactoring.',
                details:
                    'State management, import strategies, and gradual infrastructure code adoption.',
            },
            {
                title: 'CI/CD Integration',
                description:
                    'Integrate Terraform with CI/CD pipelines for automated infrastructure deployments.',
                details:
                    'Terraform Cloud/Enterprise, pipeline automation, plan reviews, and change management.',
            },
            {
                title: 'Disaster Recovery & Backup',
                description:
                    'Implement automated disaster recovery and backup strategies with Terraform.',
                details:
                    'Cross-region replication, automated backups, and recovery procedures.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Infrastructure',
                tools: [
                    'Terraform',
                    'Terraform Cloud',
                    'Terraform Enterprise',
                    'State Management',
                    'Backends',
                    'Remote State',
                ],
            },
            {
                title: 'Cloud Providers',
                tools: [
                    'AWS Provider',
                    'Azure Provider',
                    'GCP Provider',
                    'Multi-cloud',
                    'Provider Plugins',
                    'Custom Providers',
                ],
            },
            {
                title: 'Modules & Registry',
                tools: [
                    'Terraform Registry',
                    'Module Publishing',
                    'Version Control',
                    'Module Testing',
                    'Community Modules',
                    'Private Registries',
                ],
            },
            {
                title: 'Testing & Validation',
                tools: [
                    'Terratest',
                    'Terraform Validate',
                    'TFLint',
                    'Policy as Code',
                    'Sentinel',
                    'OPA/Rego',
                ],
            },
            {
                title: 'Deployment & Automation',
                tools: [
                    'GitHub Actions',
                    'GitLab CI',
                    'Jenkins',
                    'CircleCI',
                    'Atlantis',
                    'Spacelift',
                ],
            },
            {
                title: 'Monitoring & Logging',
                tools: [
                    'CloudWatch',
                    'Datadog',
                    'New Relic',
                    'Prometheus',
                    'ELK Stack',
                    'Splunk',
                ],
            },
            {
                title: 'Security',
                tools: [
                    'Vault Integration',
                    'Secrets Management',
                    'Access Control',
                    'Audit Logging',
                    'Cost Analysis',
                    'Compliance',
                ],
            },
            {
                title: 'Version Control',
                tools: [
                    'Git',
                    'GitHub',
                    'GitLab',
                    'Bitbucket',
                    'VCS Integration',
                    'Webhooks',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Infrastructure as Code',
                description:
                    'Define infrastructure in version-controlled code for consistency, auditability, and repeatability.',
            },
            {
                title: 'Multi-Cloud Support',
                description:
                    'Manage resources across AWS, Azure, GCP, and 300+ other providers with unified syntax.',
            },
            {
                title: 'State Management',
                description:
                    'Advanced state management ensures infrastructure changes are tracked and reversible.',
            },
            {
                title: 'Modular Architecture',
                description:
                    'Reusable modules reduce code duplication and enable consistent infrastructure patterns.',
            },
            {
                title: 'Community & Ecosystem',
                description:
                    'Large ecosystem with proven modules, tools, and best practices from the community.',
            },
            {
                title: 'Nearshore Expertise',
                description:
                    'LATAM-based teams with timezone overlap provide seamless collaboration and quick delivery.',
            },
        ],
        keyFacts: [
            'Terraform manages infrastructure for 500+ million resources across enterprises worldwide',
            'Supports 300+ providers including AWS, Azure, GCP, Kubernetes, and many others',
            'State management enables safe, reversible infrastructure changes',
            'Terraform Cloud provides secure remote state and team collaboration',
            'Open-source with strong community contributing modules and plugins',
            'Policy as Code (Sentinel) enforces governance and compliance',
            'Workspace organization enables multi-environment management',
            'Import functionality allows gradual migration of existing infrastructure',
        ],
        faqs: [
            {
                question: 'What is Terraform and why use it?',
                answer:
                    'Terraform is an Infrastructure as Code tool that lets you define cloud infrastructure in declarative configuration files. It ensures consistency, enables version control, and automates infrastructure provisioning across multiple cloud providers.',
            },
            {
                question: 'How does Terraform state management work?',
                answer:
                    'Terraform maintains a state file tracking real infrastructure. Remote state backends (S3, Terraform Cloud) store state securely, enable team collaboration, and prevent concurrent modifications.',
            },
            {
                question: 'Can Terraform work with existing infrastructure?',
                answer:
                    'Yes! The "terraform import" command allows you to adopt existing infrastructure into Terraform management. You can gradually migrate legacy infrastructure to code.',
            },
            {
                question: 'What is the difference between modules and resources?',
                answer:
                    'Resources are individual infrastructure components (like EC2 instances). Modules are reusable collections of resources that encapsulate complexity and promote code reuse.',
            },
            {
                question: 'How do I manage secrets in Terraform?',
                answer:
                    'Use Terraform variables with sensitive flag, or integrate with HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault for secure secret management.',
            },
            {
                question: 'Should I commit terraform.tfstate to version control?',
                answer:
                    'No! Store tfstate in remote backends (S3, Terraform Cloud) with encryption and access controls. Never commit sensitive state files to git.',
            },
            {
                question: 'How does Terraform handle infrastructure updates?',
                answer:
                    'Terraform compares desired state (code) with current state (cloud) and generates a plan showing additions, modifications, and deletions before applying changes.',
            },
        ],
        caseStudies: [
            {
                title: 'Multi-Cloud Infrastructure',
                description:
                    'Deployed infrastructure across AWS and Azure using unified Terraform configuration, reducing provisioning time by 70%.',
                link: '#',
            },
            {
                title: 'Monolith to Microservices',
                description:
                    'Managed Kubernetes infrastructure migration using Terraform, enabling 50+ microservices on EKS.',
                link: '#',
            },
            {
                title: 'Disaster Recovery Setup',
                description:
                    'Implemented cross-region disaster recovery with automated failover using Terraform modules.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Kubernetes',
            'Docker',
            'AWS',
            'Jenkins',
            'Ansible',
            'CloudFormation',
            'CI/CD',
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
