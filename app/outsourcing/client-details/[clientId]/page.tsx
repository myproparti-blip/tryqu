"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { ArrowLeft } from "lucide-react"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"

interface ClientProject {
  id: string
  name: string
  image: string
  category: string
  shortDescription: string
  fullDescription: string
  results: string[]
  technologies: string[]
  duration: string
}

export default function ClientDetailsPage({ params }: { params: { clientId: string } }) {
  const [chatModalOpen, setChatModalOpen] = useState(false)

  const clients: Record<string, ClientProject> = {
    "fintech-startup": {
      id: "fintech-startup",
      name: "Global FinTech Solutions",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop",
      category: "FinTech",
      shortDescription: "Payment Platform Development",
      fullDescription: `Global FinTech Solutions is a rapidly growing financial technology startup operating across 15 countries. They needed a robust, secure payment processing platform to handle multi-currency transactions, real-time settlements, and complex compliance requirements across different regions.

The Challenge:
The startup was facing critical challenges in their expansion strategy:
- Limited internal engineering capacity with only 4 in-house developers
- Need to scale from handling $5M to $500M in annual transaction volume
- Strict regulatory requirements (PCI-DSS, GDPR, SOX compliance)
- Time-sensitive market launch in 6 months
- Complex requirements involving microservices architecture
- 24/7 operational support needed across multiple time zones

Why They Chose Us:
- Specialized fintech expertise with 50+ completed financial projects
- Strong track record with regulatory compliance and security
- Ability to provide 24/7 support across their operating regions
- Cost-effective solution without compromising on quality

Our Solution:
We assembled a dedicated team of 10 engineers including:
- 2 Solution Architects specializing in payment systems
- 4 Full-stack developers (Node.js + React)
- 2 DevOps engineers for cloud infrastructure
- 2 QA specialists with fintech experience

The team implemented:
- Microservices-based architecture using Docker and Kubernetes
- Real-time transaction processing with event-driven design
- Multi-currency support with real-time exchange rate handling
- Comprehensive audit logging and compliance frameworks
- Advanced fraud detection using machine learning algorithms
- Mobile-first responsive design for customer apps
- 99.99% uptime SLA with automated failover mechanisms`,
      results: [
        "Launched production platform in exactly 6 months",
        "Processed $500M+ in transactions in Year 1",
        "Successfully raised Series A funding worth $25M",
        "Expanded to 25 countries within 18 months",
        "Achieved PCI-DSS Level 1 and SOX compliance",
        "Maintained 99.99% uptime across all operations",
        "Reduced transaction processing time from 2 hours to 30 seconds"
      ],
      technologies: ["Node.js", "React", "PostgreSQL", "Kubernetes", "AWS", "GraphQL", "Redis", "Elasticsearch"],
      duration: "18 months (ongoing partnership)"
    },
    "healthtech-platform": {
      id: "healthtech-platform",
      name: "HealthCare Connect",
      image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=800&h=600&fit=crop",
      category: "HealthTech",
      shortDescription: "HIPAA-Compliant Patient Platform",
      fullDescription: `HealthCare Connect is a medical technology company providing digital health management solutions to hospitals, clinics, and individual healthcare providers across North America. They needed a HIPAA-compliant platform for patient data management, telemedicine, and electronic health records (EHR) integration.

The Challenge:
The medical startup faced unique challenges:
- Strict HIPAA compliance requirements for patient data
- Integration with 20+ existing EHR systems from different vendors
- Need for secure patient-provider communication
- Real-time appointment scheduling and telemedicine capabilities
- Scalability to handle 100,000+ patient records
- 99.99% uptime SLA due to critical healthcare nature
- Complex role-based access control (patients, providers, administrators, auditors)

Why They Chose Us:
- 15+ years of healthcare software experience
- Deep expertise in HIPAA compliance and implementation
- Proven experience with EHR system integrations
- Strong security background with healthcare credentials
- Ability to handle sensitive data with institutional responsibility

Our Solution:
We built a specialized team of 8 healthcare-focused engineers:
- 1 Healthcare Solutions Architect with 20+ years experience
- 3 Full-stack developers with HIPAA compliance knowledge
- 2 Security engineers specializing in healthcare data protection
- 1 DevOps engineer with healthcare infrastructure expertise
- 1 QA specialist focused on healthcare compliance testing

Key Implementation Details:
- End-to-end encryption for all patient data (AES-256)
- Multi-factor authentication and role-based access control
- Comprehensive audit logging for all data access
- HIPAA-compliant infrastructure on AWS with dedicated VPC
- Integration layer for 20+ EHR systems (HL7 FHIR standards)
- Secure telemedicine module with encrypted video streaming
- Automated backup and disaster recovery procedures
- Regular security audits and penetration testing`,
      results: [
        "Achieved HIPAA certification in 4 months",
        "Successfully integrated 20 different EHR systems",
        "Onboarded 30+ healthcare providers in Year 1",
        "Managing 100,000+ patient records securely",
        "Achieved SOC 2 Type II compliance",
        "Maintained 99.98% platform uptime",
        "Reduced patient appointment scheduling time by 70%",
        "Enabled 50,000+ telemedicine consultations in first year"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS HIPAA", "HL7 FHIR", "WebRTC", "Docker", "Kubernetes"],
      duration: "16 months (ongoing partnership)"
    },
    "saas-modernization": {
      id: "saas-modernization",
      name: "Enterprise SaaS Corp",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      category: "Enterprise SaaS",
      shortDescription: "Legacy System Modernization",
      fullDescription: `Enterprise SaaS Corp is a Fortune 500 company providing business intelligence and analytics software to enterprise clients. They had a 15-year-old monolithic application built on older technology stack serving 20+ employees and 30+ external clients.

The Challenge:
The legacy system was becoming a liability:
- 15-year-old monolithic codebase with poor separation of concerns
- Built on outdated technology stack (older Java, JSP, legacy database patterns)
- Tight coupling between components making changes risky
- Performance degradation as data volume increased
- Difficult to onboard new developers due to complexity
- Business needed to move faster with new features
- Critical need to maintain 99.99% uptime during migration
- 20+ internal employees and 30+ external clients dependent on the system

Why They Chose Us:
- Deep expertise in large-scale system migrations
- Proven track record modernizing Fortune 500 legacy systems
- Strong ability to maintain 99.99% uptime during migrations
- Experience with phased rollout approaches
- Excellent project management for complex initiatives

Our Solution:
We assigned a dedicated team of 12 senior engineers:
- 1 Chief Architect for overall strategy and oversight
- 3 Full-stack developers for each functional domain
- 2 DevOps engineers for infrastructure and monitoring
- 2 Database engineers for data migration strategy
- 2 QA specialists for regression testing
- 1 Project Manager for coordination

Phased Migration Approach:
Phase 1 (Months 1-4): Foundation
- Set up new microservices architecture on AWS
- Implement API gateway and service mesh
- Build infrastructure for 99.99% uptime
- Parallel systems ready for gradual migration

Phase 2 (Months 5-10): Domain Migration
- Migrate authentication and user management
- Refactor reporting module to new architecture
- Migrate analytics engine with zero downtime
- Continuous testing and validation

Phase 3 (Months 11-18): Optimization
- Complete feature parity between old and new systems
- Performance optimization and tuning
- Full user migration and legacy system retirement
- Knowledge transfer and team training`,
      results: [
        "Completed migration in 18 months with 99.99% uptime maintained",
        "Reduced infrastructure costs by 45% ($2M annual savings)",
        "Improved feature deployment speed from quarterly to weekly",
        "Code maintainability score improved from D to A+",
        "System response time reduced by 60%",
        "New developers can onboard in 2 weeks (vs 3 months previously)",
        "Zero critical incidents during migration",
        "Customer satisfaction increased from 85% to 98%"
      ],
      technologies: ["Node.js", "React", "Kubernetes", "AWS", "PostgreSQL", "Elasticsearch", "Redis", "Kong API Gateway"],
      duration: "18 months (completed)"
    },
    "ecommerce-platform": {
      id: "ecommerce-platform",
      name: "Global Retail Solutions",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      category: "E-Commerce",
      shortDescription: "Multi-Tenant E-Commerce Platform",
      fullDescription: `Global Retail Solutions is a B2B2C e-commerce platform enabling thousands of small retailers to sell products online. They needed a scalable, multi-tenant platform supporting diverse product catalogs, payment processing, inventory management, and fulfillment integration.

The Challenge:
Building a platform for scale:
- Support 5,000+ concurrent retailers with isolated data
- Handle 500K+ daily active shoppers
- Process 10,000+ transactions per day
- Integrate with 15+ payment processors
- Connect with multiple shipping providers
- Real-time inventory synchronization across channels
- Complex pricing and promotional rules
- Multi-language and multi-currency support
- Performance requirements: <200ms response times

Why They Chose Us:
- Proven expertise building multi-tenant SaaS platforms
- Experience with high-traffic e-commerce systems
- Strong background in payment integrations
- Ability to handle complex scalability requirements

Our Solution:
Assembled a team of 9 specialized engineers:
- 1 Solutions Architect with SaaS platform experience
- 3 Backend developers for services and APIs
- 2 Frontend developers for retailer and customer interfaces
- 1 Database engineer for multi-tenancy architecture
- 1 DevOps engineer for scaling and performance
- 1 QA specialist for testing across tenants

Technical Architecture:
- Microservices architecture with isolated databases per tenant
- Kubernetes for auto-scaling based on traffic
- Advanced caching strategies (Redis) for performance
- GraphQL APIs for efficient data fetching
- Real-time inventory synchronization with message queues
- Comprehensive analytics and reporting engine
- Multi-tenant admin dashboard for each retailer`,
      results: [
        "Platform launched supporting 5,000+ retailers",
        "Processes 500,000+ daily active users",
        "Handles 10,000+ transactions per day with 99.95% uptime",
        "Average response time: 120ms globally",
        "Successfully processed $100M+ in GMV in first year",
        "98% customer satisfaction rating",
        "Onboarded 50+ new retailers per month",
        "Reduced platform hosting costs by 30% through optimization"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "Kubernetes", "Redis", "Stripe/PayPal APIs", "AWS"],
      duration: "12 months (ongoing)"
    }
  }

  const client = clients[params.clientId]

  if (!client) {
    return (
      <>
        <SiteHeader />
        <main className="min-h-screen bg-black text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Client Project Not Found</h1>
            <Link href="/outsourcing" className="text-purple-400 hover:text-purple-300">
              Back to Outsourcing
            </Link>
          </div>
        </main>
        <AppverseFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black px-4 py-24 pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <Link
              href="/outsourcing"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Outsourcing
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {client.name}
              </span>
            </h1>

            <div className="flex gap-4 mb-8 flex-wrap">
              <span className="bg-purple-500/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                {client.category}
              </span>
              <span className="bg-blue-500/20 border border-blue-500/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                {client.duration}
              </span>
            </div>

            <p className="text-xl text-gray-300 mb-8">{client.shortDescription}</p>
          </div>
        </section>

        {/* Client Image */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-gray-700">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Full Description */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">Project Overview</h2>
              <div className="space-y-6">
                {client.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics & Business Impact */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Key Metrics & Business Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Timeline", value: client.duration.split('(')[0] },
                { label: "Team Size", value: client.id === "fintech-startup" ? "10 Engineers" : client.id === "healthtech-platform" ? "8 Engineers" : client.id === "saas-modernization" ? "12 Engineers" : "9 Engineers" },
                { label: "Uptime SLA", value: client.id === "fintech-startup" ? "99.99%" : client.id === "healthtech-platform" ? "99.98%" : client.id === "saas-modernization" ? "99.99%" : "99.95%" },
                { label: "Code Coverage", value: "80%+" }
              ].map((metric, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
                  <p className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wide">{metric.label}</p>
                  <p className="text-3xl font-bold text-blue-400">{metric.value}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-white">Results & Impact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {client.results.map((result, i) => (
                <div key={i} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex gap-4">
                    <div className="text-green-400 text-2xl font-bold flex-shrink-0">✓</div>
                    <p className="text-gray-300 leading-relaxed">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Composition & Expertise */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Team Composition & Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {client.id === "fintech-startup" && (
                <>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Solutions Architecture (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Specialized fintech architects designing payment system architecture, microservices orchestration, and scalability planning</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Full-Stack Development (4)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Node.js backend engineers and React frontend developers implementing core platform features and APIs</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">DevOps & Infrastructure (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Cloud infrastructure specialists managing Kubernetes clusters, CI/CD pipelines, and high-availability deployments</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Quality & Security (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">QA specialists and security engineers ensuring PCI-DSS compliance, fraud detection, and system reliability</p>
                  </div>
                </>
              )}
              {client.id === "healthtech-platform" && (
                <>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Healthcare Solutions Architect (1)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">20+ years healthcare software experience, HIPAA compliance expert, EHR integration specialist</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Full-Stack Developers (3)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">React, Node.js engineers with HIPAA compliance knowledge building patient portals and provider interfaces</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Security Engineers (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Specialists in healthcare data protection, encryption, audit logging, and compliance verification</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">DevOps & QA (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Healthcare infrastructure management and compliance-focused quality assurance testing</p>
                  </div>
                </>
              )}
              {client.id === "saas-modernization" && (
                <>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Chief Architect (1)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Enterprise architecture expert overseeing system design, migration strategy, and technical decisions</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Domain-Specific Developers (9)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">3 developers per functional domain (authentication, reporting, analytics) implementing modernized services</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Infrastructure Engineers (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">DevOps specialists managing cloud migration, Kubernetes orchestration, and monitoring infrastructure</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Data & QA Specialists (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Database migration experts and QA engineers ensuring zero data loss and regression testing</p>
                  </div>
                </>
              )}
              {client.id === "ecommerce-platform" && (
                <>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">SaaS Architect (1)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Multi-tenant platform specialist designing scalable architecture for 5000+ retailers</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Backend Developers (3)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Node.js engineers building microservices, payment integrations, and inventory management</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Frontend Developers (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">React specialists creating retailer dashboard and customer-facing e-commerce interface</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">Infrastructure & QA (2)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">DevOps engineers managing Kubernetes scaling and QA specialists testing multi-tenant scenarios</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Business Metrics & ROI */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Business Metrics & ROI</h2>
            
            <div className="space-y-6">
              {client.id === "fintech-startup" && (
                <>
                  <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Financial Impact</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Initial Investment</p>
                        <p className="text-2xl font-bold text-green-400">$250K</p>
                        <p className="text-xs text-gray-500 mt-1">vs $800K+ in-house team</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Year 1 Transaction Volume</p>
                        <p className="text-2xl font-bold text-green-400">$500M+</p>
                        <p className="text-xs text-gray-500 mt-1">across 15 countries</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Series A Funding Raised</p>
                        <p className="text-2xl font-bold text-green-400">$25M</p>
                        <p className="text-xs text-gray-500 mt-1">platform as key differentiator</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Operational Improvements</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Time to Market:</strong> Delivered 6-month roadmap on schedule, enabling market entry before competitors</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Compliance Speed:</strong> Achieved PCI-DSS Level 1 certification in 4 months, fastest in company history</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Performance:</strong> Transaction processing reduced from 2 hours to 30 seconds with real-time settlements</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Reliability:</strong> 99.99% uptime maintained across global operations with zero major incidents</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {client.id === "healthtech-platform" && (
                <>
                  <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Clinical & Business Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Healthcare Providers Onboarded</p>
                        <p className="text-2xl font-bold text-green-400">30+</p>
                        <p className="text-xs text-gray-500 mt-1">in first 12 months</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Patient Records Managed</p>
                        <p className="text-2xl font-bold text-green-400">100,000+</p>
                        <p className="text-xs text-gray-500 mt-1">securely processed</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Telemedicine Consultations</p>
                        <p className="text-2xl font-bold text-green-400">50,000+</p>
                        <p className="text-xs text-gray-500 mt-1">conducted annually</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Compliance & Security Achievements</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>HIPAA Compliance:</strong> Achieved certification in 4 months with zero compliance violations</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>SOC 2 Type II:</strong> Third-party audited security compliance maintained continuously</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>EHR Integration:</strong> Successfully integrated 20 different EHR systems from major vendors</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Uptime Record:</strong> 99.98% availability - critical for patient safety and care continuity</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {client.id === "saas-modernization" && (
                <>
                  <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Cost & Performance Impact</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Infrastructure Cost Reduction</p>
                        <p className="text-2xl font-bold text-green-400">45%</p>
                        <p className="text-xs text-gray-500 mt-1">$2M annual savings</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Feature Deployment Speed</p>
                        <p className="text-2xl font-bold text-green-400">52x Faster</p>
                        <p className="text-xs text-gray-500 mt-1">quarterly → weekly</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Code Quality Improvement</p>
                        <p className="text-2xl font-bold text-green-400">D to A+</p>
                        <p className="text-xs text-gray-500 mt-1">maintainability score</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Organizational Impact</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Developer Productivity:</strong> New developers onboard in 2 weeks vs 3 months previously</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Migration Success:</strong> Zero critical incidents during 18-month migration maintaining 99.99% uptime</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>System Performance:</strong> Response times improved 60% - dramatically improved user experience</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Customer Satisfaction:</strong> Increased from 85% to 98% due to improved reliability and features</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {client.id === "ecommerce-platform" && (
                <>
                  <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Scale & Market Metrics</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Retailers on Platform</p>
                        <p className="text-2xl font-bold text-green-400">5,000+</p>
                        <p className="text-xs text-gray-500 mt-1">with isolated data</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Daily Active Users</p>
                        <p className="text-2xl font-bold text-green-400">500K+</p>
                        <p className="text-xs text-gray-500 mt-1">global shoppers</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">GMV Year 1</p>
                        <p className="text-2xl font-bold text-green-400">$100M+</p>
                        <p className="text-xs text-gray-500 mt-1">gross merchandise value</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
                    <h3 className="text-lg font-bold text-white mb-4">Performance & Growth</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Response Times:</strong> Average 120ms globally - optimized for global shopper experience</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Processing Capacity:</strong> Handles 10,000+ daily transactions with 99.95% uptime</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Retailer Growth:</strong> Onboarding 50+ new retailers monthly with seamless operations</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-blue-400 font-bold">→</span>
                        <span><strong>Cost Optimization:</strong> Reduced hosting costs 30% through infrastructure optimization</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-purple-400">Technologies & Tools</h2>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="flex flex-wrap gap-3">
                {client.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg px-4 py-2 text-gray-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border border-purple-500/30 p-12 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how we can help your organization achieve similar success.
                </p>
                <Button 
                  onClick={() => setChatModalOpen(true)}
                  className="bg-lime-400 text-black font-semibold rounded-lg px-8 py-3 text-lg hover:bg-lime-300 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppverseFooter />
      <ChatWithUsModal isOpen={chatModalOpen} onClose={() => setChatModalOpen(false)} />
    </>
  )
}
