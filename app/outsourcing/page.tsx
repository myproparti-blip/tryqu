"use client"

import { useState } from "react"
import Image from "next/image"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import { useGeolocation } from "@/hooks/useGeolocation"
import {
    CheckCircle,
    TrendingUp,
    Globe,
    Code,
    Users,
    Clock,
    DollarSign,
    BarChart3,
    Zap,
    Shield,
    ChevronDown,
    ChevronUp,
    Award,
    Target,
    Briefcase,
    Sparkles,
    ArrowRight,
    MessageCircle
} from "lucide-react"

export default function OutsourcingPage() {
    const { whatsappConfig } = useGeolocation()
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
    const [chatModalOpen, setChatModalOpen] = useState(false)

    const handleChatWithUs = () => {
        window.open(`https://wa.me/${whatsappConfig.phone}?text=Hi%20TryQu%20Tech%2C%20I%20would%20like%20to%20discuss%20outsourcing%20services.`, "_blank")
    }

    const benefits = [
        {
            icon: Award,
            emoji: "✅",
            title: "Delivery Accountability",
            description: "SLA-backed delivery guarantees with measurable metrics. Get predictable results with defined timelines, transparent reporting, and quality metrics—not just promises."
        },
        {
            icon: Shield,
            emoji: "🔒",
            title: "Security & Compliance Ready",
            description: "Enterprise-grade security from day one. ISO 27001, SOC 2, GDPR, HIPAA-eligible infrastructure. Compliance-ready processes built into every project."
        },
        {
            icon: TrendingUp,
            emoji: "📈",
            title: "Scalability & Flexibility",
            description: "Scale teams up or down based on demand without hiring overhead. Add capacity in weeks, not months. Adjust resource allocation as business priorities shift."
        },
        {
            icon: Clock,
            emoji: "🕐",
            title: "24/7 Development Continuity",
            description: "Global distributed teams ensure continuous progress. Your project advances around the clock with handoff-driven development across time zones."
        },
        {
            icon: Zap,
            emoji: "⚡",
            title: "Focus on Strategic Initiatives",
            description: "Let your internal teams focus on product vision and market strategy. Outsourcing partners handle execution, infrastructure, and technical operations."
        },
        {
            icon: Users,
            emoji: "👥",
            title: "Access Specialized Expertise",
            description: "Tap into engineers with deep expertise in enterprise technologies. From cloud architecture to AI/ML, get specialists that may be unavailable or expensive locally."
        },
        {
            icon: BarChart3,
            emoji: "💰",
            title: "Predictable Cost Structure",
            description: "Fixed costs aligned with value delivered. No hidden recruitment fees, no benefits overhead, no office infrastructure—just clear, predictable monthly investment."
        },
        {
            icon: Target,
            emoji: "🎯",
            title: "Rapid Team Deployment",
            description: "From discovery to productive development in 2-4 weeks. Vetted engineers start immediately without lengthy hiring cycles or onboarding delays."
        }
    ]

    const engagementModels = [
        {
            title: "Staff Augmentation",
            icon: Users,
            emoji: "🤝",
            description: "Dedicated engineers integrated into your team",
            benefits: [
                "Dedicated engineers integrated into your team",
                "Flexible engagement with full visibility",
                "Ideal for immediate expertise and workload support"
            ],
            keyBenefit: "Speed and flexibility",
            useCase: "Best for: Short-term needs, skill gaps, rapid scaling"
        },
        {
            title: "Dedicated Development Teams",
            icon: Briefcase,
            emoji: "🎯",
            description: "Fully managed, dedicated teams aligned to your goals",
            benefits: [
                "Fully managed, dedicated teams aligned to your goals",
                "Agile delivery with regular reporting",
                "Seamless collaboration with your stakeholders"
            ],
            keyBenefit: "Consistent focus and delivery ownership",
            useCase: "Best for: Long-term initiatives, product development"
        },
        {
            title: "Full Project Outsourcing",
            icon: Globe,
            emoji: "🌍",
            description: "Complete responsibility from planning to deployment",
            benefits: [
                "Complete responsibility from planning to deployment",
                "Clear timelines, milestones, and accountability",
                "Managed delivery with risk mitigation"
            ],
            keyBenefit: "Turnkey execution with minimal oversight",
            useCase: "Best for: End-to-end project delivery"
        }
    ]

    const comparisonData = [
        {
            aspect: "Initial Investment",
            inHouse: "$300K-500K+ (recruitment, infrastructure, tools)",
            outsourcing: "$50K-150K (depends on project scope)"
        },
        {
            aspect: "Time to Productive Development",
            inHouse: "3-6 months",
            outsourcing: "2-4 weeks"
        },
        {
            aspect: "Monthly Cost (per developer)",
            inHouse: "$8K-15K (salary + benefits + overhead)",
            outsourcing: "$3K-6K (full-service engagement)"
        },
        {
            aspect: "Scalability",
            inHouse: "Slow and costly",
            outsourcing: "Rapid and flexible"
        },
        {
            aspect: "Expertise Access",
            inHouse: "Limited to local market talent",
            outsourcing: "Global access to specialized skills"
        },
        {
            aspect: "Infrastructure & Tools",
            inHouse: "Internal setup and maintenance required",
            outsourcing: "Partner-managed, included in service"
        },
        {
            aspect: "Overhead & Management",
            inHouse: "High (HR, benefits, office space, etc.)",
            outsourcing: "Low (partner manages all logistics)"
        },
        {
            aspect: "Risk & Accountability",
            inHouse: "Internal ownership",
            outsourcing: "Shared responsibility with SLAs"
        },
        {
            aspect: "Flexibility",
            inHouse: "Limited (long-term commitments)",
            outsourcing: "High (adjust resources as needed)"
        }
    ]

    const process = [
        {
            step: 1,
            title: "Discovery & Assessment",
            description: "We conduct a comprehensive analysis of your project requirements, technical stack, business goals, timeline, and budget. Our experts assess your needs and recommend the optimal engagement model tailored to your organization.",
            icon: Target
        },
        {
            step: 2,
            title: "Team Formation & Onboarding",
            description: "We handpick experienced professionals matching your project requirements. Your dedicated team undergoes full onboarding, reviews your documentation, understands your architecture, and aligns with your development methodology.",
            icon: Users
        },
        {
            step: 3,
            title: "Development & Collaboration",
            description: "Your outsourced team integrates seamlessly with your workflow using tools like Jira, GitHub, Slack, and Figma. We maintain transparent communication with daily standups, weekly reports, and continuous progress updates.",
            icon: Code
        },
        {
            step: 4,
            title: "Quality Assurance & Testing",
            description: "Rigorous QA processes ensure enterprise-grade quality. Automated testing, manual QA, security audits, and performance optimization are embedded throughout the development lifecycle.",
            icon: Shield
        },
        {
            step: 5,
            title: "Deployment & Support",
            description: "Smooth deployment to production with comprehensive documentation and knowledge transfer. Ongoing maintenance, support, and optimization ensure long-term success of your application."
        }
    ]

    const technologies = {
        "Frontend Development": ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Web3 Technologies"],
        "Backend Development": ["Node.js", "Python", "Java", "Go", "C#/.NET", "Ruby on Rails", "GraphQL"],
        "Cloud Platforms": ["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Heroku"],
        "Mobile Development": ["React Native", "Flutter", "iOS", "Android", "Kotlin", "Swift"],
        "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
        "DevOps & Infrastructure": ["Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Jenkins", "Terraform"],
        "QA & Testing": ["Selenium", "Jest", "Cypress", "JUnit", "TestNG", "Load Testing Tools"],
        "Emerging Technologies": ["AI/ML", "Blockchain", "IoT", "Microservices", "Serverless Architecture"]
    }

    const industries = [
        "FinTech & Banking",
        "Healthcare & Life Sciences",
        "E-Commerce & Retail",
        "SaaS & Cloud Services",
        "Enterprise Software",
        "EdTech & Learning Platforms",
        "InsurTech",
        "Media & Entertainment",
        "Logistics & Supply Chain",
        "Real Estate Technology",
        "Travel & Hospitality",
        "Telecommunications"
    ]

    const stats = [
        { number: "7+", label: "Startups Launched" },
        { number: "4+", label: "Funded Companies" },
        { number: "15+", label: "Expert Developers" },
        { number: "98%", label: "Client Satisfaction" }
    ]

    const caseStudies = [
        {
            title: "FinTech Startup: Multi-Currency Payment Platform",
            challenge: "Early-stage startup needed a secure, scalable payment platform to compete with established players. Limited budget and aggressive 6-month timeline.",
            solution: "Dedicated team of 8 engineers built a microservices-based platform using Node.js, React, and AWS. Implemented PCI-DSS compliance from day one.",
            result: "Launched on schedule, processed $50M+ in transactions within Year 1, raised Series A with our platform as key differentiator"
        },
        {
            title: "Enterprise SaaS: Legacy System Modernization",
            challenge: "Fortune 500 company needed to migrate 15-year-old monolithic application to cloud without disrupting operations. 20+ employees dependent on the system.",
            solution: "Phased migration approach with parallel systems. Outsourced team of 12 developers gradually refactored code to microservices using Node.js and AWS while maintaining 99.99% uptime.",
            result: "Completed in 18 months, reduced infrastructure costs by 45%, improved feature deployment speed from quarterly to weekly"
        },
        {
            title: "HealthTech Platform: HIPAA-Compliant Patient Management",
            challenge: "Medical startup required HIPAA-compliant platform for patient data management with strict security and privacy requirements.",
            solution: "Specialized healthcare tech team implemented end-to-end encryption, audit logging, and role-based access control. Built with React, Node.js, PostgreSQL, and AWS HIPAA-eligible services.",
            result: "Achieved HIPAA certification in 4 months, onboarded 30+ healthcare providers, scaled to manage 100,000+ patient records"
        }
    ]

    const faqs = [
        {
            question: "How is outsourcing different from simply hiring remote contractors?",
            answer: "This is a crucial distinction. Here's the key difference:\n\nRemote Contractors: You hire individuals directly. You're responsible for recruitment, vetting, onboarding, tax/compliance, benefits administration, and daily management. You bear all risk if they underperform or leave. Quality varies significantly between contractors.\n\nProfessional Outsourcing:\n• Managed teams with institutional accountability\n• Quality guarantees backed by SLAs (Service Level Agreements)\n• Dedicated project managers overseeing communication\n• Backup resources if someone leaves or becomes unavailable\n• Comprehensive infrastructure (security, compliance, tools)\n• Structured quality assurance processes\n• Risk mitigation and shared responsibility\n\nExample: A contractor gets sick or quits—you're stuck. An outsourcing partner provides a replacement within days from their existing team."
        },
        {
            question: "What happens if I need to change requirements mid-project?",
            answer: "This is one of the biggest advantages of modern outsourcing partnerships.\n\nHow it works:\n• Agile methodology is built into professional outsourcing engagements (Scrum sprints, sprint planning)\n• Requirements changes are documented and discussed during sprint retrospectives\n• Backlog items can be re-prioritized between sprints (1-2 week cycles)\n• Minor changes within a sprint are absorbed into workflow\n• Significant scope changes are assessed for timeline/budget impact\n\nExample: Your team realizes you need an email notification system you didn't plan. This can be added to the next sprint backlog and scheduled accordingly.\n\nKey: Changes should be documented and communicated through your project manager to avoid scope creep. While flexibility is high, completely rewriting the project mid-way will impact costs and timelines—this is handled transparently."
        },
        {
            question: "How do you ensure code quality and security?",
            answer: "Quality and security are embedded throughout the entire development lifecycle, not afterthoughts:\n\nCode Quality Measures:\n• Peer code reviews (every line reviewed before merge)\n• Automated testing (unit tests, integration tests, end-to-end tests with 80%+ coverage)\n• Static code analysis tools (SonarQube, ESLint, etc.) catching bugs before deployment\n• Continuous integration (automated builds and tests on every commit)\n• Architecture reviews ensuring scalability and maintainability\n\nSecurity Framework:\n• OWASP Top 10 compliance (preventing common vulnerabilities)\n• Penetration testing and security audits (before production launch)\n• Data encryption (at rest and in transit)\n• Secure authentication (OAuth 2.0, JWT, multi-factor authentication)\n• Regular vulnerability scanning and patch management\n• Access control (role-based, principle of least privilege)\n\nCompliance Certifications:\n• ISO 27001:2013 (Information Security Management)\n• SOC 2 Type II (Security, availability, integrity)\n• HIPAA (for healthcare data)\n• GDPR (for EU customer data)\n• PCI DSS (for payment card data)\n\nDocumentation:\n• Security incident response plan\n• Data privacy policies\n• Technical documentation for maintainability"
        },
        {
            question: "What about time zone differences and communication?",
            answer: "Time zone differences are actually a feature, not a bug, when managed properly:\n\nOur Timezone Coverage:\n• US Eastern / Pacific (EST/PST)\n• Europe Central/UK (UTC/CET)\n• India (IST—UTC+5:30)\n• Australia/Asia Pacific (AEST)\n\nHow We Bridge Time Zone Gaps:\n\n1. Overlapping Sync Hours:\n   • Identify 3-4 hour overlap window for daily standups\n   • Example: 8-11am EST = 6-9pm IST, covers both US and India teams\n   • Quick 15-minute sync to unblock and coordinate\n\n2. Asynchronous Communication:\n   • Detailed Slack messages with context (problem, attempted solutions, questions)\n   • GitHub pull requests with comprehensive commit messages\n   • Jira tickets documenting requirements and decisions\n   • Video walkthroughs for complex topics\n   • This allows teams to move forward even when colleagues sleep\n\n3. Documentation Culture:\n   • Architecture decision records explaining \"why\" not just \"what\"\n   • Code comments explaining complex logic\n   • Runbooks for operational procedures\n   • This ensures anyone can understand the system\n\n4. Dedicated Project Manager:\n   • Acts as timezone bridge, ensuring nothing falls through cracks\n   • Manages handoffs between shifts\n   • Escalates blockers immediately\n\nResult: With proper setup, you get 24-hour development velocity. US team works during their day, Asia team continues at night—project progresses continuously."
        },
        {
            question: "How is pricing structured, and can it scale with my project?",
            answer: "Pricing varies by engagement model and is transparent:\n\nStaff Augmentation (Per Developer):\n• Junior/Mid-level Developer: $3,000-4,500/month\n• Senior Developer: $5,000-7,000/month\n• Architect/Lead: $7,000-10,000/month\n• Billed monthly, scale up/down week-to-week\n• Minimum: 1 week notice for changes\n• You pay only for hours worked\n\nDedicated Teams (Monthly Retainer):\n• 3-person team: $12,000-15,000/month\n• 5-person team: $18,000-25,000/month\n• 8-person team: $28,000-35,000/month\n• Fixed monthly cost, includes all resource changes\n• Can scale team size with 2-week notice\n• Includes project manager, daily standups, weekly reports\n\nFixed-Price Projects:\n• Entire project: $50,000-$500,000+ (depends on scope)\n• Clear timeline and deliverables defined upfront\n• Payment milestones (25% on signing, 25% at design, 25% at testing, 25% on launch)\n• Partner bears execution risk\n• Less flexible but predictable cost\n\nWhat's Included:\n• Developer salaries and benefits\n• Project management and coordination\n• Infrastructure (cloud servers, databases)\n• Quality assurance and testing\n• Security and compliance\n• 24/7 support during engagement\n\nWhat's NOT Included:\n• Third-party API costs (payment processors, analytics, etc.)\n• Premium cloud infrastructure (can be included for additional cost)\n• Your internal tools/licenses you need from partners\n\nCost Comparison Example:\nBuilding a team in-house for your startup:\n• 5 developers at $120K/year = $600K\n• Benefits (30%) = $180K\n• Taxes and payroll = $50K\n• Equipment and office = $50K\n• Training = $20K\n• Total Year 1: $900K\n\nOutsourcing dedicated team:\n• 5-person team: $25,000/month × 12 = $300K/year\n• Savings: $600K+ (66% reduction)\n• Plus: No hiring hassle, immediate start, no severance if needs change"
        },
        {
            question: "What about intellectual property and confidentiality?",
            answer: "Your intellectual property is fully protected. Here's how:\n\nIP Ownership:\n• 100% ownership of all developed code belongs to you\n• All source code is delivered to you\n• No licensing or usage restrictions\n• You can use code as you see fit (modify, commercialize, etc.)\n• Documented in signed agreement\n\nConfidentiality:\n• All developers sign NDAs before starting\n• Confidentiality training mandatory for all staff\n• All code stored in encrypted, secure repositories (GitHub Enterprise, GitLab, etc.)\n• Access controls—developers only see their project code\n• Data segregation—your data never mixed with other clients\n• No code reuse from other projects\n\nData Security:\n• Encryption in transit (HTTPS/TLS)\n• Encryption at rest (AES-256)\n• Secure API communication\n• Regular security audits and penetration testing\n• Incident response plan if data breach occurs\n\nCompliance:\n• SOC 2 Type II certification (third-party audited security)\n• GDPR compliance (if handling EU customer data)\n• HIPAA eligibility (if handling healthcare data)\n• Annual security certifications\n\nExample: A FinTech startup outsources payment processing system. All code, algorithms, and data remain 100% their property. Partner cannot use code for other clients or retain copies after engagement ends.\n\nLegal Protection:\n• Master Service Agreement defining all terms\n• Confidentiality clauses with penalty clauses for breaches\n• IP assignment agreements (in writing)\n• Non-compete clauses (partner can't build same product for competitors)\n• Indemnification (partner liable if IP is violated)"
        },
        {
            question: "How do you handle project delays or quality issues?",
            answer: "Professional outsourcing partnerships use Service Level Agreements (SLAs) to ensure accountability:\n\nQuality Metrics:\n• Code review compliance: 100% of code reviewed before merge\n• Test coverage: Minimum 80% automated test coverage\n• Bug escape rate: <2% of bugs escape to production\n• Performance: 99.5%+ application uptime\n• Security: Zero critical vulnerabilities in code review\n\nTimeline Commitments:\n• Sprint velocity tracked and reported weekly\n• Sprint deadlines met 99%+ of the time\n• If slipping behind, escalation within 3 days\n• Corrective actions implemented (more resources, priority shifts, etc.)\n\nWhat Happens if Issues Occur:\n\n1. Minor Delays (< 1 week):\n   • Root cause analysis conducted\n   • Corrective action plan developed\n   • Additional resources allocated if needed\n   • No penalties, just fix and move forward\n\n2. Major Delays (> 2 weeks):\n   • Immediate escalation to leadership\n   • Root cause analysis\n   • 25-50% service credit applied to next month's invoice\n   • Detailed recovery plan with daily tracking\n   • Resource augmentation at no additional cost\n\n3. Quality Issues:\n   • Issues <2 weeks post-launch: Partner fixes at no cost\n   • Critical production bugs: 1-hour response, 4-hour fix target\n   • Security vulnerabilities: Immediate patching, notification to you\n   • Systemic quality issues: Escalation, retraining, possible team changes\n\n4. Prevention:\n   • Weekly risk review meetings\n   • Risk mitigation planning\n   • Clear escalation paths\n   • Daily transparency—no surprises\n   • Proactive communication\n\nExample: A 3-month project is running 2 weeks behind schedule. Partner immediately allocates 2 additional senior engineers (at no cost). Weekly risk meetings intensify to daily. Extra resources catch up over 2 weeks. Client receives 15% service credit on that month's invoice as gesture of good faith.\n\nContractual Protection:\n• SLAs are legally binding\n• Breach triggers automatic remedy (service credits, escalation)\n• If repeated breaches occur, client can terminate with penalty refund\n• Clear dispute resolution process"
        }
    ]

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-hidden">
                {/* Hero Section */}
                <section className="relative isolate overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
                            <div className="mb-5 flex items-center gap-2">
                                <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} priority className="h-8 w-8" />
                                <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
                            </div>
                            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                <span className="block text-white">Enterprise-Grade IT</span>
                                <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Outsourcing Services</span>
                            </h1>
                            <p className="mt-6 text-center text-xl text-gray-300 max-w-3xl leading-relaxed">
                                TryQu provides enterprise-grade IT outsourcing services designed to extend your internal capabilities while maintaining control, security, and delivery accountability. We partner with organizations to deliver scalable, secure, and outcome-driven solutions through proven outsourcing models.
                            </p>
                            <p className="mt-4 text-center text-lg text-cyan-300/90 max-w-2xl font-semibold">Scale your engineering capacity with dedicated teams, proven expertise, and SLA-backed accountability.</p>

                            {/* Service Icons Grid */}
                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                                {[
                                    { icon: Users, label: "Dedicated Teams", desc: "Full-time commitment" },
                                    { icon: TrendingUp, label: "Scalability", desc: "Grow on demand" },
                                    { icon: Shield, label: "Security", desc: "Enterprise-grade" },
                                ].map((service, i) => (
                                    <div
                                        key={i}
                                        className={`p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group`}
                                        style={{
                                            animationDelay: `${i * 100}ms`,
                                        }}
                                    >
                                        <service.icon className="w-6 h-6 text-cyan-300 mb-2 group-hover:scale-110 transition-transform" />
                                        <p className="text-sm font-semibold text-white">{service.label}</p>
                                        <p className="text-xs text-gray-400">{service.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={handleChatWithUs}
                                    className="group px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                                    Chat With Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What is Software Development Outsourcing */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Why Enterprises Choose Outsourced Development</h2>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-lime-300 bg-clip-text text-transparent">⭐ Enterprise-Grade Delivery with Proven Accountability</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Enterprise outsourcing means partnering with specialized engineering teams to accelerate your product roadmap while your internal teams focus on strategic initiatives. Benefit from proven expertise, SLA-backed accountability, and delivery ownership. Scale your capacity on demand with predictable costs and minimal operational overhead.
                                </p>
                            </div>

                            <div className="space-y-8 mb-8">
                                <div className="bg-gradient-to-r from-cyan-500/5 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-cyan-400">📈 The Evolution of Outsourcing</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Modern outsourcing has evolved dramatically over the past two decades. In the early 2000s, outsourcing was primarily about cost arbitrage—hiring cheaper labor in offshore locations like India, Philippines, or Eastern Europe. While cost savings remain important, today's outsourcing represents a fundamentally different value proposition.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Today's outsourcing partners function as strategic technology consultants—not just code factories. They provide:
                                    </p>
                                    <ul className="space-y-2 text-gray-300 ml-4">
                                        <li><span className="text-cyan-400">✓ Architectural guidance</span> - Design decisions, system design reviews, scalability planning</li>
                                        <li><span className="text-cyan-400">✓ Technical leadership</span> - Senior engineers mentoring, code quality standards, best practices</li>
                                        <li><span className="text-cyan-400">✓ Quality assurance expertise</span> - Comprehensive testing strategies, automation frameworks, quality metrics</li>
                                        <li><span className="text-cyan-400">✓ Security & compliance</span> - HIPAA, GDPR, SOC 2, PCI DSS implementation and maintenance</li>
                                        <li><span className="text-cyan-400">✓ Infrastructure management</span> - Cloud platform selection, DevOps implementation, monitoring and optimization</li>
                                        <li><span className="text-cyan-400">✓ Defined accountability</span> - Service Level Agreements, measurable metrics, transparent reporting</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-cyan-500/5 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-cyan-400">💡 Why Companies Choose Strategic Outsourcing</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Organizations globally—from ambitious startups to Fortune 500 enterprises—use outsourcing as a strategic lever to:
                                    </p>
                                    <ul className="space-y-3 text-gray-300">
                                        <li><strong className="text-white">Accelerate innovation:</strong> Move faster to market with experienced teams and proven processes. Instead of spending months building infrastructure and hiring, start productive development immediately.</li>
                                        <li><strong className="text-white">Reduce operational complexity:</strong> Outsource non-core technical operations while leadership focuses on product vision and market strategy. This separation of concerns improves organizational agility.</li>
                                        <li><strong className="text-white">Access specialized expertise:</strong> Get world-class talent in emerging technologies (AI/ML, blockchain, cloud-native architecture) that may be scarce or expensive locally.</li>
                                        <li><strong className="text-white">Scale without burden:</strong> Grow development capacity without the financial and operational burden of traditional hiring, benefits administration, office space, and infrastructure management.</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-cyan-500/5 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-cyan-400">How Outsourcing Differs from Traditional Models</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <p className="font-semibold text-white mb-2">Traditional Hiring (In-House Team)</p>
                                            <p>You recruit individuals, manage salaries/benefits, provide office space/equipment, handle HR/payroll, invest in training. High fixed costs, slower scaling, geographic limitations.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-2">Contractor Model</p>
                                            <p>You hire individual freelancers with variable quality, minimal accountability, communication overhead. Difficult to scale, quality inconsistency, limited recourse for poor performance.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-2">Professional Outsourcing</p>
                                            <p>You partner with an organization providing managed teams, quality guarantees, infrastructure, security compliance, dedicated support. Scalable, accountable, transparent, cost-predictable with SLAs and performance metrics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 right-0 -mr-60 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">Enterprise Benefits</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Why Enterprises Partner with TryQu</h2>
                            <p className="text-gray-400 text-lg">Delivery accountability, scalability, and strategic partnership for enterprise organizations</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {benefits.map((benefit, i) => {
                                const Icon = benefit.icon
                                const emoji = (benefit as any).emoji
                                const detailedBenefits: Record<number, string[]> = {
                                    0: [
                                        "Service Level Agreements with measurable metrics",
                                        "Transparent weekly reporting on progress and quality",
                                        "Defined timelines with quality guarantees and SLA credits"
                                    ],
                                    1: [
                                        "ISO 27001 and SOC 2 Type II certified infrastructure",
                                        "Built-in compliance processes for GDPR, HIPAA, PCI DSS",
                                        "Regular security audits and penetration testing"
                                    ],
                                    2: [
                                        "Add 3-5 developers in 2 weeks without hiring overhead",
                                        "Scale down with 2 weeks notice—no severance complexity",
                                        "Elastic resource allocation aligned with project needs"
                                    ],
                                    3: [
                                        "Teams across PST, EST, UTC, IST, AEST timezones",
                                        "Handoff-driven development ensures 24-hour momentum",
                                        "Progress continues while your team sleeps"
                                    ],
                                    4: [
                                        "Your team focuses on product strategy and vision",
                                        "Partners handle execution, DevOps, and infrastructure",
                                        "Clear separation of concerns improves organizational agility"
                                    ],
                                    5: [
                                        "Deep expertise in enterprise cloud platforms (AWS, Azure, GCP)",
                                        "Specialists in emerging technologies (AI/ML, blockchain, cloud-native)",
                                        "Rare skills available locally at reasonable enterprise costs"
                                    ],
                                    6: [
                                        "Fixed monthly costs with no hidden hiring or overhead fees",
                                        "No benefits, payroll, or office infrastructure costs",
                                        "Pricing aligned with value delivered—transparent and predictable"
                                    ],
                                    7: [
                                        "Discovery to productive development: 2-4 weeks",
                                        "Pre-vetted engineers with proven enterprise experience",
                                        "No lengthy recruitment cycles or multi-month ramp-up periods"
                                    ]
                                }
                                return (
                                    <div key={i} className="group relative">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/20 via-cyan-600/10 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                                        <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950/60 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full">
                                            {/* Emoji Header */}
                                            <div className="relative h-32 bg-gradient-to-br from-cyan-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden group-hover:from-cyan-500/40 group-hover:to-cyan-500/40 transition-all">
                                                <div className="text-6xl group-hover:scale-125 transition-transform duration-300">{emoji}</div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50"></div>
                                            </div>

                                            <div className="p-6">
                                                <div className="flex items-start gap-3 mb-5">
                                                    <div className="p-2.5 bg-gradient-to-br from-cyan-500/40 to-cyan-500/30 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                                                        <Icon className="w-5 h-5 text-cyan-300" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                                                </div>

                                                <p className="text-sm text-gray-300 leading-relaxed mb-5">{benefit.description}</p>

                                                <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 p-4 rounded-lg border border-cyan-500/20 space-y-2">
                                                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">In Practice:</p>
                                                    <ul className="space-y-2">
                                                        {detailedBenefits[i]?.slice(0, 3).map((point, j) => (
                                                            <li key={j} className="text-xs text-gray-300 flex items-start gap-2">
                                                                <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Enterprise Trust Signals - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    Enterprise Ready
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">What Makes Us Enterprise-Grade Partners</h2>
                            <p className="text-gray-400 text-lg">Bank-level security, compliance, and reliability standards</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                                        <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">🔒 Secure Development Practices</h3>
                                        <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> OWASP Top 10 compliance standards</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Secure code review processes</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Encryption at rest and in transit</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Regular penetration testing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                                        <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">✅ Compliance-Ready Processes</h3>
                                        <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> ISO 27001:2013 certified</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> SOC 2 Type II audited</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> GDPR & HIPAA eligible</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> PCI DSS implementation support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                                        <Users className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">👥 Scalable Team Models</h3>
                                        <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Flexible team composition</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Dedicated engineering managers</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Backup resources on-call</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> 48-hour replacement guarantee</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500/60 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                                        <Award className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">🎯 Quality Assurance & Monitoring</h3>
                                        <ul className="space-y-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Minimum 80% code test coverage</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Automated CI/CD pipelines</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> Performance monitoring & optimization</li>
                                            <li className="flex items-center gap-2"><span className="text-cyan-400">✦</span> 99.5%+ uptime commitments</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-gray-700 rounded-xl">
                            <p className="text-gray-300 text-sm text-center">
                                <span className="font-semibold text-white">Note:</span> We don't overclaim certifications. Our partnerships are built on proven practices and transparent communication, not just paperwork.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Engagement Models - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative" id="services">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    Flexible Models
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Choose Your Engagement Model</h2>
                            <p className="text-gray-400 text-lg">Select the perfect engagement style for your project needs. Full control, flexibility, or turnkey solution.</p>
                        </div>

                        <div className="space-y-12">
                            {engagementModels.map((model, i) => {
                                const Icon = model.icon
                                const emoji = (model as any).emoji
                                const detailedExplanations: Record<number, { scenarios: string[], comparison: string }> = {
                                    0: {
                                        scenarios: [
                                            "A SaaS company needs 2 senior React developers for 6 months to build a new analytics dashboard—they don't want 2 full-time hires.",
                                            "A startup team of 5 engineers needs DevOps expertise they don't have internally—they hire 1 outsourced DevOps engineer.",
                                            "A legacy codebase needs modernization—specialized architects join temporarily to guide and implement upgrades."
                                        ],
                                        comparison: "You have 60-70% control over daily work; they function like your own team members but without long-term commitment."
                                    },
                                    1: {
                                        scenarios: [
                                            "A Series A startup needs sustained growth in engineering capacity for 18+ months without the burden of scaling HR.",
                                            "A growing company needs a dedicated team focusing on mobile app development while internal teams work on core platform.",
                                            "An enterprise needs a specialized team for their AI/ML initiatives—too important to outsource, too specialized to hire internally."
                                        ],
                                        comparison: "You have 90% control; dedicated teams operate almost as internal departments with 100% focus on your goals."
                                    },
                                    2: {
                                        scenarios: [
                                            "A startup MVP needs to be built end-to-end from scratch—you provide requirements, partner handles architecture through launch.",
                                            "A company wants to launch a new product line but has zero bandwidth internally—outsourcing partner becomes the development arm.",
                                            "A business needs legacy system replacement—complex, risky project handed off with clear accountability."
                                        ],
                                        comparison: "You have minimal control but maximum peace of mind—partner owns delivery, timeline, and quality."
                                    }
                                }
                                return (
                                    <div key={i}>
                                        <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10">
                                            {/* Emoji Header */}
                                            <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-600/20 h-24 flex items-center justify-center hover:from-cyan-600/40 hover:to-cyan-600/40 transition-all">
                                                <div className="text-7xl">{emoji}</div>
                                            </div>

                                            <div className="p-8 lg:p-10">
                                                <div>
                                                    <div className="inline-flex items-center gap-3 mb-4">
                                                        <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-cyan-500/30 rounded-lg border border-cyan-500/50">
                                                            <Icon className="w-6 h-6 text-cyan-400" />
                                                        </div>
                                                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Model {i + 1}</span>
                                                    </div>
                                                    <h3 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">{model.title}</h3>
                                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{model.description}</p>
                                                </div>

                                                <div className="space-y-6">
                                                    <div>
                                                        <p className="text-xs text-cyan-400 mb-4 font-bold uppercase tracking-wider">Key Benefits</p>
                                                        <ul className="space-y-3">
                                                            {model.benefits.map((benefit, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-gray-300 group">
                                                                    <div className="p-1 bg-cyan-500/20 rounded group-hover:bg-cyan-500/40 transition-colors flex-shrink-0 mt-1">
                                                                        <CheckCircle className="w-4 h-4 text-cyan-300" />
                                                                    </div>
                                                                    <span className="text-sm group-hover:text-white transition-colors">{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                                                        <p className="text-xs text-cyan-400 font-bold mb-2 uppercase tracking-wider">Key Benefit</p>
                                                        <p className="text-gray-300 text-sm leading-relaxed">{(model as any).keyBenefit}</p>
                                                    </div>

                                                    <div className="bg-gradient-to-br from-cyan-500/5 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/50 transition-colors">
                                                        <p className="text-xs text-cyan-400 font-bold mb-2 uppercase tracking-wider">Use Case</p>
                                                        <p className="text-gray-300 text-sm leading-relaxed">{model.useCase}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expanded Scenarios */}
                                            <div className="border-t border-gray-800/50 bg-gradient-to-r from-cyan-500/5 to-cyan-500/5 px-8 lg:px-10 py-8">
                                                <p className="text-xs text-cyan-400 mb-5 font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <Sparkles className="w-4 h-4" />
                                                    Real-World Scenarios
                                                </p>
                                                <div className="grid sm:grid-cols-3 gap-6">
                                                    {detailedExplanations[i]?.scenarios.map((scenario, j) => (
                                                        <div key={j} className="bg-gray-900/50 border border-gray-700 rounded-lg p-5 hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all group">
                                                            <div className="flex gap-3 items-start">
                                                                <div className="text-cyan-400 font-bold text-lg mt-0.5 group-hover:scale-125 transition-transform">→</div>
                                                                <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-relaxed">{scenario}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Enterprise-Ready Delivery Section */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Why Enterprises Choose Outsourced Development</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                                <div className="mb-4 text-5xl">⭐</div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-lime-300 bg-clip-text text-transparent mb-4">Enterprise-Grade Delivery with Proven Accountability</h3>
                                <p className="text-gray-300 leading-relaxed">Enterprise outsourcing means partnering with specialized engineering teams to accelerate your product roadmap while your internal teams focus on strategic initiatives. Benefit from proven expertise, SLA-backed accountability, and delivery ownership. Scale your capacity on demand with predictable costs and minimal operational overhead.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/60 transition-all">
                                <div className="mb-4 text-5xl">📈</div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent mb-4">The Evolution of Outsourcing</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">Modern outsourcing has evolved dramatically over the past two decades. In the early 2000s, outsourcing was primarily about cost arbitrage—hiring cheaper labor in offshore locations. While cost savings remain important, today's outsourcing represents a fundamentally different value proposition.</p>
                                <p className="text-gray-400 text-sm">Today's outsourcing partners function as strategic technology consultants—not just code factories. They provide:</p>
                            </div>
                        </div>

                        {/* Extended content */}
                        <div className="mt-8 bg-gradient-to-br from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                    <div>
                                        <span className="text-cyan-300 font-semibold">Architectural guidance</span>
                                        <span className="text-gray-400"> - Design decisions, system design reviews, scalability planning</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                    <div>
                                        <span className="text-cyan-300 font-semibold">Technical leadership</span>
                                        <span className="text-gray-400"> - Senior engineers mentoring, code quality standards, best practices</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                    <div>
                                        <span className="text-cyan-300 font-semibold">Quality assurance expertise</span>
                                        <span className="text-gray-400"> - Comprehensive testing strategies, automation frameworks, quality metrics</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                    <div>
                                        <span className="text-cyan-300 font-semibold">Security & compliance</span>
                                        <span className="text-gray-400"> - HIPAA, GDPR, SOC 2, PCI DSS implementation and maintenance</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                                    <div>
                                        <span className="text-cyan-300 font-semibold">Infrastructure management</span>
                                        <span className="text-gray-400"> - Cloud platform selection, DevOps implementation, monitoring and optimization</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Industries We Support */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Industries We Support</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: "🏢", label: "SaaS & Technology Platforms" },
                                { icon: "⚕️", label: "Healthcare & Life Sciences" },
                                { icon: "💰", label: "FinTech & Financial Services" },
                                { icon: "🚚", label: "Logistics & Supply Chain" },
                                { icon: "🔧", label: "Enterprise IT & Digital Transformation" },
                                { icon: "📊", label: "E-Commerce & Retail" }
                            ].map((industry, i) => (
                                <div key={i} className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all hover:scale-105">
                                    <div className="text-4xl mb-3">{industry.icon}</div>
                                    <p className="text-white font-semibold">{industry.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center text-gray-300">
                            <p>Each engagement is tailored to <span className="text-white font-semibold">industry-specific requirements and compliance needs.</span></p>
                        </div>
                    </div>
                </section>

                {/* Technology Expertise Section */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Technology Expertise</h2>
                        <p className="text-gray-300 mb-12 text-lg">Our outsourced teams work across modern technology stacks, including:</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {[
                                { icon: "☁️", label: "Cloud & Infrastructure", detail: "AWS, Azure, GCP" },
                                { icon: "🔨", label: "Backend & Frontend", detail: "Full-stack development" },
                                { icon: "🤖", label: "DevOps & Automation", detail: "CI/CD pipelines" },
                                { icon: "✅", label: "QA & Test Automation", detail: "Quality assurance" },
                                { icon: "🔐", label: "Security & Compliance", detail: "Enterprise standards" },
                                { icon: "🧠", label: "AI/ML Solutions", detail: "Modern AI integration" }
                            ].map((tech, i) => (
                                <div key={i} className="group bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all hover:scale-105">
                                    <div className="text-4xl mb-3">{tech.icon}</div>
                                    <p className="text-white font-semibold mb-2">{tech.label}</p>
                                    <p className="text-gray-400 text-sm">{tech.detail}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400 italic text-center">(Linked to Technologies page)</p>
                    </div>
                </section>

                {/* How We Work Section */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">How We Work</h2>
                        <div className="space-y-6">
                            {[
                                { num: "1", icon: "📋", title: "Requirement & Scope Alignment", desc: "Understanding your project needs and defining clear objectives" },
                                { num: "2", icon: "🎯", title: "Engagement Model Selection", desc: "Choosing the right outsourcing approach for your goals" },
                                { num: "3", icon: "👥", title: "Team Onboarding & Integration", desc: "Bringing specialized teams into your workflow seamlessly" },
                                { num: "4", icon: "🚀", title: "Delivery Execution with Reporting", desc: "Building your product with transparent progress updates" },
                                { num: "5", icon: "✨", title: "Continuous Optimization & Support", desc: "Iterating and improving based on feedback and metrics" }
                            ].map((step, i) => (
                                <div key={i} className="group bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40">
                                                <span className="text-xl">{step.icon}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-cyan-400 mb-1">
                                                {step.num}. {step.title}
                                            </h3>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-gray-300 text-lg">💬 <span className="text-white font-semibold">Transparent communication at every stage.</span></p>
                        </div>
                    </div>
                </section>

                {/* Let's Build Together Section */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>
                    <div className="container mx-auto max-w-5xl">
                        <div className="bg-gradient-to-br from-cyan-500/15 to-cyan-500/15 border border-cyan-500/30 rounded-2xl p-12 text-center">
                            <div className="text-6xl mb-6">🚀</div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Let's Build Together</h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                                Whether you need to scale your team, accelerate delivery, or outsource complete projects, <span className="text-white font-semibold">TryQu is your trusted outsourcing partner.</span>
                            </p>
                            <button
                                onClick={handleChatWithUs}
                                className="group px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                                Start Your Engagement
                            </button>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 right-0 -mr-60 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-60 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">Smart Comparison</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">In-House vs. Outsourced Development</h2>
                            <p className="text-gray-400 text-lg">See exactly how outsourcing stacks up against traditional hiring</p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-gray-800 shadow-2xl">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-700 bg-gradient-to-r from-gray-900/80 to-gray-900/50">
                                        <th className="text-left py-4 px-6 font-bold text-white">Aspect</th>
                                        <th className="text-left py-4 px-6 font-bold text-gray-300">In-House</th>
                                        <th className="text-left py-4 px-6 font-bold text-cyan-300 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" /> Outsourced <span className="text-xs bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-400 ml-2">Better</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-gray-800 hover:bg-gradient-to-r hover:from-cyan-500/5 hover:to-transparent transition-colors group">
                                            <td className="py-4 px-6 font-semibold text-white">{row.aspect}</td>
                                            <td className="py-4 px-6 text-gray-400 group-hover:text-gray-300 transition-colors">{row.inHouse}</td>
                                            <td className="py-4 px-6 text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors bg-gradient-to-r from-cyan-500/5 to-transparent">{row.outsourcing}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Technologies & Tools */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">Tech Stack</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Technologies & Tools We Master</h2>
                            <p className="text-gray-400 text-lg">Expert-level proficiency across modern development stacks</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {Object.entries(technologies).map(([category, techs], i) => {
                                const categoryEmojis: Record<string, string> = {
                                    "Frontend Development": "🎨",
                                    "Backend Development": "⚙️",
                                    "Cloud Platforms": "☁️",
                                    "Mobile Development": "📱",
                                    "Databases": "🗄️",
                                    "DevOps & Infrastructure": "🔧",
                                    "QA & Testing": "✅",
                                    "Emerging Technologies": "🚀"
                                }
                                return (
                                    <div key={i} className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all group">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl">{categoryEmojis[category] || "💻"}</span>
                                            <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {techs.map((tech, j) => (
                                                <span key={j} className="bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all group/tech">
                                                    <span className="text-cyan-400 group-hover/tech:text-cyan-300 transition-colors">✦</span> {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Industries Served - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 right-0 -mr-60 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse"></div>
                        <div className="absolute top-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Industry Expertise
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Industries We Serve</h2>
                            <p className="text-gray-400 text-lg">Deep expertise across vertical markets, domain specializations, and emerging sectors</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {industries.map((industry, i) => {
                                const industryEmojis: Record<string, string> = {
                                    "FinTech & Banking": "🏦",
                                    "Healthcare & Life Sciences": "🏥",
                                    "E-Commerce & Retail": "🛍️",
                                    "SaaS & Cloud Services": "☁️",
                                    "Enterprise Software": "💼",
                                    "EdTech & Learning Platforms": "🎓",
                                    "InsurTech": "🛡️",
                                    "Media & Entertainment": "🎬",
                                    "Logistics & Supply Chain": "📦",
                                    "Real Estate Technology": "🏠",
                                    "Travel & Hospitality": "✈️",
                                    "Telecommunications": "📞"
                                }
                                const colors = [
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30",
                                    "from-cyan-600/30 to-cyan-600/30"
                                ]
                                return (
                                    <div key={i} className={`group bg-gradient-to-br ${colors[i]} border border-gray-700 rounded-lg p-5 flex items-center gap-4 hover:border-white/40 hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer`}>
                                        <span className="text-3xl group-hover:scale-125 transition-transform">{industryEmojis[industry] || "🏢"}</span>
                                        <span className="text-gray-100 font-medium group-hover:text-white transition-colors text-sm">{industry}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Client Logos - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 -mr-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Success Stories
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Trusted by Industry Leaders</h2>
                            <p className="text-gray-400 text-lg">100+ global companies and funded startups leverage our development expertise</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[
                                { name: "TechStart India", emoji: "🚀", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "Innovate Digital", emoji: "💡", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "CloudVision Labs", emoji: "☁️", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "DevHub Studios", emoji: "🛠️", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "ByteForce Solutions", emoji: "⚡", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "WebCraft India", emoji: "🌐", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "SmartTech Ventures", emoji: "🧠", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "CodeNest Pro", emoji: "🐦", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "Digital Dynamics", emoji: "🔄", color: "from-cyan-600/20 to-cyan-600/20" },
                                { name: "FutureScale Systems", emoji: "📈", color: "from-cyan-600/20 to-cyan-600/20" }
                            ].map((company, i) => (
                                <div key={i} className={`group bg-gradient-to-br ${company.color} border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center hover:border-white/40 hover:shadow-xl transition-all h-32 cursor-pointer transform hover:scale-110 hover:shadow-cyan-500/20`}>
                                    <div className="text-5xl mb-3 group-hover:scale-150 transition-transform">{company.emoji}</div>
                                    <p className="text-gray-200 text-xs font-bold text-center group-hover:text-white transition-colors">{company.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Internal Linking Section - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 -ml-40 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" />
                                    Explore More
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Discover Complementary Services</h2>
                            <p className="text-gray-400 text-lg">Expand your partnership with specialized expertise across multiple domains</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/technologies">
                                <div className="group bg-gradient-to-br from-cyan-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-xl p-8 hover:border-cyan-500/70 transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                                                <span className="text-2xl">🎨</span>
                                                Technologies
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Explore our expertise in modern development technologies, frameworks, and emerging stacks.</p>
                                </div>
                            </Link>

                            <Link href="/services">
                                <div className="group bg-gradient-to-br from-cyan-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-xl p-8 hover:border-cyan-500/70 transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                                                <span className="text-2xl">⚙️</span>
                                                DevOps & Automation
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Learn about our DevOps, infrastructure, CI/CD pipelines, and automation services.</p>
                                </div>
                            </Link>

                            <Link href="/services">
                                <div className="group bg-gradient-to-br from-cyan-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-xl p-8 hover:border-cyan-500/70 transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                                                <span className="text-2xl">☁️</span>
                                                Cloud Services
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">AWS, Azure, GCP expertise, migration planning, and optimization strategies.</p>
                                </div>
                            </Link>

                            <Link href="/services">
                                <div className="group bg-gradient-to-br from-cyan-600/20 to-cyan-600/20 border border-cyan-500/40 rounded-xl p-8 hover:border-cyan-500/70 transition-all cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                                                <span className="text-2xl">🔒</span>
                                                Security & Compliance
                                            </h3>
                                        </div>
                                        <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Security practices, compliance frameworks, audits, and GDPR/HIPAA implementation.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Enhanced */}
                <section className="py-20 px-4 border-t border-gray-800 relative">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 right-0 -mr-60 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 -ml-60 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4" />
                                    Common Questions
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">Frequently Asked Questions</h2>
                            <p className="text-gray-400 text-lg">Get clear answers to common concerns, requirements, and processes</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => {
                                const expandGradients = [
                                    "from-cyan-600/20 to-cyan-600/20",
                                    "from-cyan-600/20 to-cyan-600/20",
                                    "from-cyan-600/20 to-cyan-600/20",
                                    "from-cyan-600/20 to-cyan-600/20",
                                    "from-cyan-600/20 to-cyan-600/20",
                                    "from-cyan-600/20 to-cyan-600/20"
                                ]
                                return (
                                    <div key={i} className={`group bg-gradient-to-br ${expandGradients[i % expandGradients.length]} border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/60 transition-all hover:shadow-lg`}>
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                            className="w-full p-6 flex items-center justify-between hover:bg-cyan-500/5 transition-colors group"
                                        >
                                            <h3 className="text-lg font-semibold text-left text-white group-hover:text-lime-200 transition-colors flex items-start gap-3">
                                                <span className="text-cyan-400 flex-shrink-0 mt-1">❓</span>
                                                {faq.question}
                                            </h3>
                                            {expandedFaq === i ? (
                                                <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-4 group-hover:scale-110 transition-transform" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
                                            )}
                                        </button>

                                        {expandedFaq === i && (
                                            <div className="px-6 pb-6 border-t border-cyan-500/30 pt-4 bg-gradient-to-b from-cyan-500/5 to-transparent">
                                                <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm space-y-3">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </main>
            <CTAExpertSection />
            <AppverseFooter />
            <ChatWithUsModal isOpen={chatModalOpen} onClose={() => setChatModalOpen(false)} />
        </>
    )
}
