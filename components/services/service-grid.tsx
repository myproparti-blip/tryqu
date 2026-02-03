"use client"

import { useState, useEffect } from "react"
import { usePageContext } from "@/hooks/use-page-context"
import {
    Zap,
    Code2,
    Database,
    Network,
    BarChart3,
    Lock,
    Globe,
    Cpu,
    Settings,
    Palette,
    Monitor,
} from "lucide-react"

interface ServiceCard {
    icon: React.ReactNode
    title: string
    description: string
    benefits: string[]
    metrics: { label: string; value: string }[]
    emoji: string
    category: "core" | "cloud" | "analytics" | "devops" | "specialty"
}

const allServices: ServiceCard[] = [
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Custom Application Development",
        description: "End-to-end enterprise software development with modern frameworks and best practices",
        benefits: ["Full-stack development", "Agile methodology", "Quality assurance", "Post-launch support"],
        metrics: [
            { label: "Projects", value: "200+" },
            { label: "Success Rate", value: "99.2%" },
        ],
        emoji: "💻",
        category: "core",
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing services including automated testing, performance testing, and UAT coordination",
        benefits: ["Test automation", "Performance testing", "Load testing", "Regression testing"],
        metrics: [
            { label: "Test Coverage", value: "90%+" },
            { label: "Bug Detection", value: "Pre-release" },
        ],
        emoji: "📊",
        category: "core",
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "DevOps & CI/CD Pipelines",
        description: "CI/CD automation, continuous integration, deployment pipelines, and infrastructure as code",
        benefits: ["Git-based workflows", "Automated deployments", "Test automation", "Pipeline monitoring"],
        metrics: [
            { label: "Deployment Frequency", value: "Daily" },
            { label: "Time to Production", value: "<1hr" },
        ],
        emoji: "⚙️",
        category: "devops",
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Backend & API Development",
        description: "Scalable backend systems with microservices, REST APIs, and GraphQL implementation",
        benefits: ["Microservices architecture", "RESTful & GraphQL APIs", "Event-driven systems", "Database optimization"],
        metrics: [
            { label: "API Endpoints", value: "500+" },
            { label: "Throughput", value: "10k req/s" },
        ],
        emoji: "🗄️",
        category: "core",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Application Development",
        description: "Responsive web applications with React, Angular, Vue, and modern JavaScript frameworks",
        benefits: ["Progressive web apps", "SEO optimization", "Performance tuning", "Accessibility compliance"],
        metrics: [
            { label: "Page Speed", value: "<2s load" },
            { label: "Lighthouse Score", value: "95+" },
        ],
        emoji: "🌐",
        category: "core",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Mobile App Development",
        description: "iOS, Android, and cross-platform mobile applications with native performance and optimization",
        benefits: ["Native & cross-platform", "App store optimization", "Push notifications", "Analytics integration"],
        metrics: [
            { label: "Apps Delivered", value: "150+" },
            { label: "Avg Rating", value: "4.8★" },
        ],
        emoji: "📱",
        category: "core",
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Application Security & Testing",
        description: "Secure coding practices, OWASP compliance, penetration testing, and vulnerability management",
        benefits: ["Code analysis", "Penetration testing", "Security audits", "Compliance frameworks"],
        metrics: [
            { label: "CVSS Score", value: "<3.0" },
            { label: "Testing Coverage", value: "100%" },
        ],
        emoji: "🔒",
        category: "core",
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Performance Testing & Optimization",
        description: "Load testing, stress testing, and performance optimization for scalable applications",
        benefits: ["Load testing", "Stress testing", "Bottleneck analysis", "Performance tuning"],
        metrics: [
            { label: "Response Time", value: "<100ms" },
            { label: "Concurrent Users", value: "100k+" },
        ],
        emoji: "⚡",
        category: "core",
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Software Architecture & Design",
        description: "Domain-driven design, design patterns, technical documentation, and system design",
        benefits: ["Architecture review", "Design patterns", "Technical specs", "Scalability planning"],
        metrics: [
            { label: "Design Review", value: "Pre-dev" },
            { label: "Technical Debt", value: "-70%" },
        ],
        emoji: "🏗️",
        category: "core",
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Legacy Code Refactoring",
        description: "Code modernization, technical debt reduction, and codebase optimization",
        benefits: ["Code cleanup", "Performance boost", "Maintainability", "Documentation"],
        metrics: [
            { label: "Cyclomatic Complexity", value: "-40%" },
            { label: "Code Quality", value: "+50%" },
        ],
        emoji: "♻️",
        category: "core",
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Database Development & Optimization",
        description: "Database design, optimization, indexing strategies, and performance tuning",
        benefits: ["Schema design", "Query optimization", "Indexing strategies", "Backup automation"],
        metrics: [
            { label: "Query Performance", value: "-60%" },
            { label: "Database Size", value: "Optimized" },
        ],
        emoji: "🐘",
        category: "specialty",
    },
    {
        icon: <Network className="w-8 h-8" />,
        title: "Microservices & Container Tech",
        description: "Docker containerization, Kubernetes orchestration, and service mesh implementation",
        benefits: ["Container optimization", "Kubernetes management", "Service mesh", "Helm charting"],
        metrics: [
            { label: "Container Density", value: "+80%" },
            { label: "Orchestration", value: "K8s native" },
        ],
        emoji: "🐳",
        category: "core",
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Unit Testing & Test Driven Development",
        description: "Comprehensive unit testing frameworks, TDD practices, and test suite management",
        benefits: ["Unit test creation", "Jest/Vitest setup", "Coverage reporting", "Mocking & stubbing"],
        metrics: [
            { label: "Test Coverage", value: "85%+" },
            { label: "Assertion Rate", value: "High" },
        ],
        emoji: "🧪",
        category: "core",
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Integration Testing",
        description: "End-to-end integration testing, API testing, and workflow validation",
        benefits: ["API testing", "Component integration", "Data flow validation", "System testing"],
        metrics: [
            { label: "Test Scenarios", value: "500+" },
            { label: "Coverage", value: "Comprehensive" },
        ],
        emoji: "🔗",
        category: "core",
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Continuous Monitoring & Logging",
        description: "Application monitoring, error tracking, and logging infrastructure setup",
        benefits: ["Log aggregation", "Error tracking", "Real-time alerts", "Performance metrics"],
        metrics: [
            { label: "Uptime", value: "99.99%" },
            { label: "Alert Response", value: "<5min" },
        ],
        emoji: "📡",
        category: "devops",
    },
    {
        icon: <Network className="w-8 h-8" />,
        title: "Cloud Infrastructure & DevOps",
        description: "Multi-cloud deployment with automated management, monitoring, and optimization",
        benefits: ["Infrastructure as Code", "CI/CD automation", "Container orchestration", "Cost optimization"],
        metrics: [
            { label: "Availability", value: "99.99%" },
            { label: "RTO", value: "<30min" },
        ],
        emoji: "☁️",
        category: "cloud",
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "API Management & Integration",
        description: "RESTful API design, documentation, versioning, and third-party integration services",
        benefits: ["API design", "OpenAPI specs", "Rate limiting", "API monitoring"],
        metrics: [
            { label: "API Availability", value: "99.95%" },
            { label: "Integration Speed", value: "Rapid" },
        ],
        emoji: "📡",
        category: "core",
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "Automated Testing & Continuous Quality",
        description: "Test automation frameworks, test data management, and quality metrics reporting",
        benefits: ["Test automation", "Test frameworks", "Quality dashboards", "Regression automation"],
        metrics: [
            { label: "Automation Rate", value: "80%+" },
            { label: "Test Execution Time", value: "-50%" },
        ],
        emoji: "🤖",
        category: "core",
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Security Testing & Compliance",
        description: "Vulnerability assessments, security testing, and compliance verification services",
        benefits: ["Penetration testing", "OWASP mapping", "Compliance audits", "Security documentation"],
        metrics: [
            { label: "Vulnerabilities Found", value: "100%" },
            { label: "Remediation Time", value: "Fast" },
        ],
        emoji: "🛡️",
        category: "core",
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Frontend Development & UI/UX",
        description: "Modern frontend frameworks, responsive design, and user experience optimization",
        benefits: ["React/Vue/Angular", "Responsive design", "Accessibility (WCAG)", "Performance optimization"],
        metrics: [
            { label: "Components Built", value: "1000+" },
            { label: "Performance Score", value: "98+" },
        ],
        emoji: "🎨",
        category: "core",
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Infrastructure as Code & Automation",
        description: "Infrastructure automation, terraform management, and configuration as code solutions",
        benefits: ["Terraform IaC", "Ansible automation", "Scripting", "Environment provisioning"],
        metrics: [
            { label: "Infrastructure Automation", value: "95%+" },
            { label: "Provisioning Time", value: "<10min" },
        ],
        emoji: "🔧",
        category: "devops",
    },
]

export function ServiceGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const { page } = usePageContext()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Filter services based on current page context
    const services = page === 'services' ? allServices : allServices

    return (
        <section className="py-24 px-4 bg-black relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black tracking-tight text-white mb-4">Our Service Offerings</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Comprehensive IT development, testing, and DevOps solutions for modern enterprises
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative p-6 rounded-xl border transition-all duration-500 overflow-hidden ${hoveredIndex === index
                                    ? "border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 shadow-lg shadow-cyan-400/20"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                }`}
                        >
                            {/* Background Emoji Icon */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                                <div className="text-9xl">{service.emoji}</div>
                            </div>

                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                            <div className="relative">
                                {/* Icon */}
                                <div className="mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                {/* Benefits - Hidden by default, shown on hover */}
                                <div
                                    className={`space-y-2 mb-4 transition-all duration-500 overflow-hidden ${hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                    {service.metrics.map((metric, i) => (
                                        <div key={i}>
                                            <p className="text-xs text-gray-500 font-semibold">{metric.label}</p>
                                            <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
