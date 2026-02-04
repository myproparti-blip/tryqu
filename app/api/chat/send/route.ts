import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { Message } from "@/lib/models/Message"
import { Chat } from "@/lib/models/Chat"

// Import the broadcast function - if file doesn't exist, this will be a no-op
let broadcastUpdate: (visitorId: string, update: any) => void = () => { }

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase()

        const body = await request.json()
        const { content, visitorId, adminId, isAdmin, adminToken } = body

        if (!content?.trim()) {
            return NextResponse.json({ error: "Message content is required" }, { status: 400 })
        }

        if (!visitorId) {
            return NextResponse.json({ error: "Visitor ID is required" }, { status: 400 })
        }

        // Verify admin token if admin is sending
        if (isAdmin && adminToken) {
            const tokenData = verifyAdminToken(adminToken)
            if (!tokenData) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
            }
            // Verify adminId matches
            if (tokenData.adminId !== adminId) {
                return NextResponse.json({ error: "Admin ID mismatch" }, { status: 401 })
            }
        }

        // Create message
        const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        const newMessage = await Message.create({
            id: messageId,
            content,
            sender: isAdmin ? "admin" : "user",
            visitorId,
            adminId: isAdmin ? adminId : undefined,
            timestamp: new Date(),
            isRead: false, // New messages are unread by default
            readBy: undefined,
        })

        // Update or create chat
        let chat = await Chat.findOne({ visitorId })

        if (!chat) {
            // Create new chat
            // unreadCount = 0 always on creation because:
            // - If user sends first message: admin hasn't replied yet (nothing to read)
            // - If admin sends first message: it will be marked unread by user's hook
            chat = await Chat.create({
                visitorId,
                messages: [newMessage._id],
                lastMessage: content.substring(0, 100),
                lastMessageTime: new Date(),
                lastMessageSender: isAdmin ? "admin" : "user",
                unreadCount: 0, // Always 0 on creation - only increments when admin receives user message
            })
        } else {
            // Update existing chat
            chat.messages.push(newMessage._id)
            chat.lastMessage = content.substring(0, 100)
            chat.lastMessageTime = new Date()
            chat.lastMessageSender = isAdmin ? "admin" : "user"

            // Update chat metadata
            if (isAdmin) {
                // Admin sending message - assign to this admin
                chat.assignedTo = adminId
            }
            // IMPORTANT: Do NOT modify unreadCount here!
            // unreadCount is only tracked via the useUnreadCount hook
            // which counts actual unread messages in the database

            await chat.save()
        }

        // Send auto-response for user messages (skip if admin)
        let botResponse = ""

        if (!isAdmin) {
            // Only send auto-response if user is not admin
            const lowerContent = content.toLowerCase().trim()

            // Check for specific keywords and send relevant responses
            if (lowerContent === "services") {
                botResponse = "📌 TryQu Tech delivers comprehensive enterprise IT solutions:\n\n☁️ Cloud & Infrastructure Management\n   • Multi-cloud architecture for scalability and reliability\n   • 99.99% uptime with automated failover & disaster recovery\n   • Cost optimization and resource governance\n\n🔧 DevOps & Automation\n   • Automated CI/CD pipelines for faster deployments\n   • Infrastructure as Code using Terraform and modern tooling\n   • Monitoring, alerting, and real-time performance tracking\n\n📊 Data & Analytics\n   • Advanced analytics platforms for business insights\n   • Data engineering and pipeline support\n   • Secure storage, processing, and visualization\n\n💻 App Development & Integration\n   • Frontend and backend development with React, Vue, Python, Node.js\n   • API design, microservices, and seamless system integration\n   • Modern workflows with Next.js, FastAPI, PostgreSQL, MongoDB\n\n🔒 Security & Compliance\n   • Zero-trust architecture and compliance alignment\n   • SOC 2, ISO 27001, HIPAA alignment\n   • Continuous monitoring and threat detection frameworks\n\n✨ Tailored to startups, SMEs, product companies, and enterprise teams!"
            } else if (lowerContent === "about") {
                botResponse = "🧑‍💼 About TryQu Tech:\n\nTryQu Tech is an enterprise-focused IT consultancy that enables organizations to modernize their technology stack, reduce complexity, and deliver high-impact results.\n\n✨ Our Mission:\nEmpower businesses to innovate with scalable, secure, and future-ready technology solutions.\n\n🌍 Who We Are:\n   • Decades of experience in digital transformation, cloud architecture, and DevOps\n   • Global presence with a track record of driving measurable value\n   • Partners with startups, SMEs, product companies, and global IT teams\n\n🎯 What We Deliver:\n   • Real results — fast deployments, operational efficiency\n   • Resilient systems that scale as you grow\n   • Reduced operational risk and modernization with confidence\n\n💼 Ready to transform your tech stack?\nLet's build something remarkable together!"
            } else if (lowerContent === "faq") {
                botResponse = "❓ Frequently Asked Questions:\n\n❔ What types of businesses do you serve?\n✓ Startups, small-to-medium enterprises, product companies, and global enterprise teams seeking cloud, infrastructure, and DevOps modernization.\n\n❔ How quickly can you start a project?\n✓ Projects typically begin with a discovery call followed by a scoped proposal. Many clients see initial deliverables within weeks.\n\n❔ Do you provide ongoing support?\n✓ Yes — we offer 24/7 monitoring, maintenance, and dedicated support packages for long-term system health.\n\n❔ How do you ensure security and compliance?\n✓ Security is built in by default. We follow zero-trust principles and align with SOC 2, ISO 27001, and other major compliance standards.\n\n❔ What technologies do you specialize in?\n✓ We work with React, Node.js, Python, Kubernetes, AWS (and other cloud providers), Docker, Terraform, PostgreSQL, GraphQL, and more.\n\n💬 Have more questions? Ask away!"
            } else if (lowerContent === "pricing") {
                botResponse = "💼 TryQu Tech Pricing — Structured for Your Needs\n\nOur pricing supports project-based engagements and ongoing managed services. Final quotes depend on your requirements.\n\n🔹 Starter (Small Projects)\n✓ Ideal for MVPs or initial cloud setup\n✓ Fixed-fee project scope\n✓ Baseline infrastructure & automation\n\n🔹 Growth (Mid-Sized Teams)\n✓ For expanding systems or operational improvement\n✓ Hybrid project + retainer model\n✓ CI/CD automation and integrations\n✓ Advanced monitoring and performance tuning\n\n🔹 Enterprise (Full Managed Services)\n✓ Comprehensive coverage for large systems\n✓ Monthly retainer support\n✓ 24/7 monitoring & SLA commitments\n✓ Security & compliance audits included\n\n👉 Custom Pricing Available\nWe recommend a free discovery call to understand your scale, goals, and technical context so we can tailor a precise quote."
            } else if (lowerContent === "contact") {
                botResponse = "📞 Contact TryQu Tech:\n\n📧 Email: tryq@gmail.com\n💬 Chat: You're using it now!\n📅 Book Meeting: Click calendar icon above\n🌐 WhatsApp: Available (click icon above)\n\n🕐 SUPPORT HOURS\n   Monday - Friday: 9 AM - 6 PM IST\n   Weekend: Limited support\n   Urgent: Available on request\n\n🌍 LOCATION\n   Global presence & worldwide reach\n\n💼 SPECIALTIES\n   ✓ Cloud & Infrastructure\n   ✓ DevOps & Automation\n   ✓ Data & Analytics\n   ✓ App Development\n   ✓ Security & Compliance\n\nLet's modernize your tech stack! 🚀"
            } else if (lowerContent === "what solutions does tryqu offer?") {
                botResponse = "📌 TryQu Tech Services:\n\n☁️ Cloud & Infrastructure Management\n   Multi-cloud architecture, 99.99% uptime\n   Automated failover & disaster recovery\n\n🔧 DevOps & Automation\n   Automated CI/CD pipelines\n   Infrastructure as Code (Terraform)\n   Real-time monitoring & alerting\n\n📊 Data & Analytics\n   Advanced analytics platforms\n   Data engineering & pipeline support\n\n💻 App Development & Integration\n   React, Vue, Python, Node.js\n   Microservices & API design\n\n🔒 Security & Compliance\n   Zero-trust architecture\n   SOC 2, ISO 27001, HIPAA aligned\n\nReady to modernize? Let's talk!"
            } else if (lowerContent === "how can tryqu help my business grow?") {
                botResponse = "🚀 How TryQu Helps Your Business:\n\n⚡ Operational Efficiency\n   Streamlined infrastructure & automated workflows\n   Reduce complexity, optimize costs\n\n📈 Fast Deployments\n   Accelerated delivery timelines\n   CI/CD automation & rapid scaling\n\n💪 Resilient Systems\n   99.99% uptime with disaster recovery\n   Systems that scale as you grow\n\n🔒 Security & Compliance\n   Zero-trust architecture built-in\n   Enterprise-grade protection\n\n🎯 Digital Transformation\n   Modernize your tech stack\n   Future-ready technology solutions\n\nPartner with us for measurable results!"
            } else if (lowerContent === "what are tryqu's pricing plans?") {
                botResponse = "💼 TryQu Tech Pricing:\n\n🔹 Starter (Small Projects)\n   Ideal for MVPs or cloud setup\n   Fixed-fee project scope\n   Baseline infrastructure & automation\n\n🔹 Growth (Mid-Sized Teams)\n   Expanding systems or operational improvement\n   Hybrid project + retainer\n   CI/CD automation & integrations\n   Advanced monitoring\n\n🔹 Enterprise (Full Managed Services)\n   Comprehensive coverage\n   Monthly retainer support\n   24/7 monitoring & SLA commitments\n   Security & compliance audits\n\n👉 Custom pricing available!\nBook a free discovery call for a tailored quote."
            } else if (lowerContent === "how do i get started with tryqu?") {
                botResponse = "🚀 Getting Started with TryQu:\n\n📋 DISCOVERY CALL\n   Understand your needs, goals & tech context\n   Free consultation with our team\n\n📊 SCOPED PROPOSAL\n   Detailed timeline & deliverables\n   Custom pricing based on requirements\n\n⚡ PROJECT KICKOFF\n   Initial deliverables within weeks\n   Ongoing support & monitoring\n\n✨ Ready to start?\n   👉 Book a consultation (Calendar button)\n   👉 Chat with us (message above)\n   👉 Email: tryq@gmail.com\n\nLet's modernize your infrastructure! 🎯"
            } else if (lowerContent === "what features are included in tryqu?") {
                botResponse = "✨ TryQu Tech Capabilities:\n\n☁️ CLOUD & INFRASTRUCTURE\n   Multi-cloud architecture\n   Auto-scaling & load balancing\n   Disaster recovery & failover\n\n🔧 DEVOPS & AUTOMATION\n   CI/CD pipelines (GitHub Actions, GitLab)\n   Infrastructure as Code (Terraform)\n   Monitoring & alerting systems\n\n💻 DEVELOPMENT STACK\n   React, Vue, Python, Node.js\n   Next.js, FastAPI frameworks\n   PostgreSQL, MongoDB, GraphQL\n\n📊 DATA & ANALYTICS\n   Real-time data processing\n   Advanced dashboards\n\n🔒 SECURITY\n   Zero-trust architecture\n   Compliance audits & monitoring\n\nCustomized to your needs! 🎯"
            } else if (lowerContent === "does tryqu offer customer support?") {
                botResponse = "🤝 TryQu Tech Support:\n\n📞 SUPPORT CHANNELS\n   ✓ Live Chat (this window)\n   ✓ Email: tryq@gmail.com\n   ✓ WhatsApp Messaging\n   ✓ Scheduled Consultations\n\n🕐 SUPPORT HOURS\n   Monday - Friday: 9 AM - 6 PM IST\n   Weekend: Limited support\n   Urgent: Available on request\n\n✅ SUPPORT PACKAGES\n   ✓ 24/7 monitoring & alerts\n   ✓ Dedicated support team\n   ✓ Maintenance & updates\n   ✓ Performance optimization\n   ✓ SLA commitments\n\n🌟 YOUR SUCCESS IS OUR PRIORITY\n   Long-term partnerships & ongoing support\n\nQuestions? We're here to help! 💬"
            } else if (lowerContent === "can i integrate tryqu with my existing tools?") {
                botResponse = "🔗 TryQu Integration & Compatibility:\n\n✅ CLOUD PLATFORMS\n   AWS, Azure, GCP integration\n   Multi-cloud orchestration\n\n✅ DEVELOPMENT TOOLS\n   GitHub, GitLab, Bitbucket\n   Jenkins, CircleCI, GitHub Actions\n\n✅ MONITORING & OBSERVABILITY\n   Datadog, New Relic, Prometheus\n   ELK Stack, Grafana\n\n✅ DATABASES & STORAGE\n   PostgreSQL, MongoDB, Redis\n   S3, Cloud Storage compatibility\n\n💡 API & INTEGRATION SUPPORT\n   Custom integrations available\n   Seamless system connectivity\n   Minimal workflow disruption\n\n📋 CUSTOM SOLUTIONS\n   Tailored to your tech stack\n   Technical consultation included\n\nWe work with YOUR tools! 🎯"
            } else if (lowerContent === "how secure is tryqu?") {
                botResponse = "🔒 TryQu Security & Compliance:\n\n🛡️ ARCHITECTURE\n   Zero-trust security model\n   End-to-end encryption\n   Regular security audits\n\n✅ COMPLIANCE STANDARDS\n   SOC 2 aligned\n   ISO 27001 ready\n   HIPAA compliant solutions\n\n📊 MONITORING & THREAT DETECTION\n   24/7 threat detection\n   Real-time alert systems\n   Incident response protocols\n\n🔐 DATA PROTECTION\n   Secure file transfers\n   Encrypted storage\n   Access control & authentication\n\n💼 ENTERPRISE STANDARDS\n   Reliable infrastructure\n   Backup & disaster recovery\n   99.99% uptime SLA\n\n🌟 Your data, your security\n   Best practices for enterprise protection\n\nAsk us about your compliance needs! 🔐"
            } else if (lowerContent === "what solutions does tryqu offer?") {
                botResponse = "🎯 TryQu Solutions:\n\n✅ 3D Product Rendering\n   High-quality 3D visualization & product design\n\n✅ 3D Architecture Visualization\n   Professional ArchViz & building visualizations\n\n✅ IT Training & Certification\n   Comprehensive training courses & certifications\n\n✅ Technical Consulting\n   Expert guidance for your projects\n\nNeed more details? Just ask!"
            } else if (lowerContent === "how can tryqu help my business grow?") {
                botResponse = "📈 How TryQu Helps Your Business:\n\n💡 Enhanced Visuals\n   Stunning 3D renders increase product appeal & conversions\n\n📊 Professional Presence\n   Architecture visualization builds client confidence\n\n🎓 Skilled Team\n   IT training creates competent workforce\n\n🚀 Technical Excellence\n   Expert consulting solves complex challenges\n\n💰 ROI Growth\n   Quality solutions lead to better business outcomes\n\nLet's grow together! 🌟"
            } else if (lowerContent === "what are tryqu's pricing plans?") {
                botResponse = "💰 TryQu Pricing Tiers:\n\n🎨 3D RENDERING PACKAGES\n📦 Basic 3D - $500-1,500\n   Single product visualization\n📦 Pro 3D - $2,000-5,000\n   Complex product renderings\n📦 Enterprise 3D - Custom pricing\n   Full product line visualization\n\n🏗️ ARCHITECTURE VISUALIZATION\n📦 Standard ArchViz - $1,500-3,000\n📦 Premium ArchViz - $3,500-8,000\n📦 Complete Project - Custom quote\n\n🎓 IT TRAINING\n📦 Individual Courses - $200-500\n📦 Certification Programs - $1,000-3,000\n📦 Corporate Training - Custom pricing\n\nClick calendar to book consultation! 📅"
            } else if (lowerContent === "how do i get started with tryqu?") {
                botResponse = "🚀 Getting Started with TryQu:\n\n📋 SIMPLE 3-STEP PROCESS\n\n1️⃣ CONSULTATION\n   Discuss your project needs & goals\n   Use chat or book meeting above\n\n2️⃣ PROPOSAL\n   Receive detailed quote & timeline\n   50% upfront, 50% on completion\n\n3️⃣ DELIVERY\n   Professional execution & revisions\n   Fast turnaround guaranteed\n\n✨ Ready to start?\n   👉 Book Consultation (Calendar button)\n   👉 Chat with us (message now)\n   👉 Email: tryq@gmail.com\n\nLet's bring your vision to life! 🎯"
            } else if (lowerContent === "what features are included in tryqu?") {
                botResponse = "✨ TryQu Features:\n\n🎨 3D RENDERING\n   ✓ Photorealistic product visualization\n   ✓ Multiple angle renderings\n   ✓ Custom lighting & materials\n   ✓ Quick revisions & iterations\n\n🏗️ ARCHITECTURE VISUALIZATION\n   ✓ Building design visualization\n   ✓ Interior space planning\n   ✓ Landscape integration\n   ✓ Client presentations\n\n🎓 IT TRAINING\n   ✓ Certified instructors\n   ✓ Hands-on learning\n   ✓ Industry-standard courses\n   ✓ Job placement support\n\n💼 CONSULTING\n   ✓ Technical expertise\n   ✓ Project guidance\n   ✓ Problem solving\n   ✓ Strategy planning\n\nAll backed by quality & support! 🌟"
            } else if (lowerContent === "does tryqu offer customer support?") {
                botResponse = "🤝 TryQu Customer Support:\n\n📞 SUPPORT CHANNELS\n   ✓ Live Chat Support (this window)\n   ✓ WhatsApp Messaging\n   ✓ Email: tryq@gmail.com\n   ✓ Scheduled Consultations\n\n🕐 SUPPORT HOURS\n   Monday - Friday: 9 AM - 6 PM IST\n   Weekend: Limited support available\n   Urgent requests: Available on demand\n\n✅ WHAT WE OFFER\n   ✓ Quick response times\n   ✓ Project updates & progress\n   ✓ Technical assistance\n   ✓ Unlimited revisions\n   ✓ Post-delivery support\n\n🌟 YOUR SUCCESS IS OUR PRIORITY\n   We're here to help every step of the way!\n\nAny questions? Ask away! 💬"
            } else if (lowerContent === "can i integrate tryqu with my existing tools?") {
                botResponse = "🔗 TryQu Integration Capabilities:\n\n✅ COMPATIBLE WITH\n   ✓ Major design software (Adobe, AutoCAD)\n   ✓ Project management tools\n   ✓ CRM systems\n   ✓ Email & collaboration platforms\n   ✓ Cloud storage services\n   ✓ Custom API integrations\n\n🔄 WORKFLOW INTEGRATION\n   ✓ Seamless file transfers\n   ✓ Automated reporting\n   ✓ Real-time project updates\n   ✓ Team collaboration features\n\n💡 FLEXIBLE SOLUTIONS\n   ✓ Custom integration setup\n   ✓ Technical support included\n   ✓ Smooth transition process\n   ✓ Minimal workflow disruption\n\n📋 NEED CUSTOM INTEGRATION?\n   Contact us for technical consultation\n   👉 Book a meeting above or chat now\n\nWe work with YOUR tools! 🎯"
            } else if (["hi", "hello", "hey", "hii", "hiii", "hey there", "greetings", "yo", "halo"].includes(lowerContent)) {
                // Basic greeting
                botResponse = "👋 Hi there! Welcome to TryQu Tech!\n\nI'm here to help answer any questions about our services, pricing, or how we can help your business.\n\n💡 Quick options:\n   • Ask about our services\n   • Learn how we can help your business\n   • Check our pricing\n   • Get started with us\n   • Ask about customer support\n   • Any other questions?\n\nFeel free to ask anything! 😊"
            } else if (["tech", "technology", "technologies", "tech stack", "what tech", "technical"].some(keyword => lowerContent.includes(keyword))) {
                // Tech-related questions
                botResponse = "🖥️ TryQu Tech Stack & Expertise:\n\n☁️ CLOUD PLATFORMS\n   AWS, Azure, Google Cloud\n   Multi-cloud orchestration\n\n🔧 DEVOPS & INFRASTRUCTURE\n   Kubernetes, Docker, Terraform\n   CI/CD pipelines & automation\n   Infrastructure as Code\n\n💻 DEVELOPMENT\n   Frontend: React, Vue, Next.js\n   Backend: Python, Node.js, FastAPI\n   Databases: PostgreSQL, MongoDB\n\n📊 DATA & ANALYTICS\n   Real-time processing\n   Data engineering pipelines\n\n🔒 SECURITY\n   Zero-trust architecture\n   Compliance & auditing\n\nWant to know more about a specific technology? Just ask! 🚀"
            } else if (["thanks", "thank you", "thank u", "thankyou", "thx", "ty", "appreciate", "appreciated"].includes(lowerContent)) {
                // Gratitude
                botResponse = "🙏 Thank you! We appreciate your interest in TryQu Tech.\n\nIf you have any other questions or need more information, feel free to ask. Our team is here to help!\n\n💼 Ready to get started? Book a consultation or continue chatting! 😊"
            } else if (["ok", "okay", "sure", "sounds good", "got it", "understood", "alright", "yep", "yes"].includes(lowerContent)) {
                // Acknowledgment
                botResponse = "✅ Great! Is there anything else you'd like to know about TryQu Tech?\n\n📋 Some popular topics:\n   • Services & Solutions\n   • Pricing & Plans\n   • How to Get Started\n   • Customer Support\n   • Integration Capabilities\n   • Security & Compliance\n\nLet me know how we can help! 🚀"
            } else if (["help", "support", "assist", "need help", "i need", "how to", "how do i"].some(keyword => lowerContent.includes(keyword))) {
                // Help/Support request
                botResponse = "🤝 How can we help you today?\n\n📚 POPULAR TOPICS:\n   ✓ Services & Solutions\n   ✓ Pricing & Plans\n   ✓ Getting Started with TryQu\n   ✓ Integration & Tools\n   ✓ Security & Compliance\n   ✓ Customer Support Options\n\n💬 Feel free to ask specific questions or choose any topic above.\n\n📞 Need immediate support?\n   • Live Chat: You're using it now!\n   • WhatsApp: Click icon above\n   • Email: tryq@gmail.com\n   • Book a call: Click calendar\n\nWhat can we help with? 😊"
            } else if (["demo", "demo request", "see it in action", "show me", "trial", "try it"].some(keyword => lowerContent.includes(keyword))) {
                // Demo request
                botResponse = "🎬 Demo & Trial Request\n\nWe'd love to show you TryQu Tech in action!\n\n📅 BOOK A DEMO:\n   Click the Calendar icon above to schedule a demo call with our team.\n\n✨ In the demo, we'll cover:\n   • Your business needs & goals\n   • Tailored solutions for your use case\n   • Technology stack & integration\n   • Pricing & timeline\n   • Next steps\n\n⏱️ Time commitment: 30-45 minutes\n\n👉 Ready? Book a slot above or chat with us for more info! 🚀"
            } else {
                // No bot response for other messages - let admin handle them
                botResponse = ""
            }

            // Only create bot message if there's a response
            if (botResponse) {
                const botMessage = await Message.create({
                    id: `bot_${Date.now()}`,
                    content: botResponse,
                    sender: "bot",
                    visitorId,
                    timestamp: new Date(),
                })

                // Add bot message to chat
                chat.messages.push(botMessage._id)
                chat.lastMessage = botResponse.substring(0, 100)
                chat.lastMessageTime = new Date()
                chat.lastMessageSender = "bot"
                await chat.save()
            }

            console.log(`[CHAT] New user message from ${visitorId}: ${content}`)
        } else {
            console.log(`[CHAT] Admin message from ${adminId}: ${content}`)
        }

        // Broadcast real-time update to subscribers
        // User sends message -> notify admin (and all listeners for this conversation)
        // Admin sends message -> notify user (and all listeners for this conversation)
        broadcastUpdate(visitorId, {
            type: "new_message",
            visitorId,
            sender: isAdmin ? "admin" : "user",
            content: content.substring(0, 100),
            timestamp: new Date().toISOString(),
            adminId: isAdmin ? adminId : undefined,
        })

        return NextResponse.json({
            success: true,
            messageId: newMessage.id,
            botResponse,
        })
    } catch (error) {
        console.error("Chat send error:", error)
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }
}

// Token verification
function verifyAdminToken(token: string): { adminId: string } | null {
    try {
        if (!token) return null
        const decoded = JSON.parse(Buffer.from(token, "base64").toString("utf-8"))

        // Check token expiration
        if (decoded.exp && decoded.exp < Date.now()) {
            return null
        }

        return { adminId: decoded.adminId }
    } catch (error) {
        console.error("Token verification error:", error)
        return null
    }
}
