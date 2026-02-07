import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { CTAExpertSection } from "@/components/cta-expert-section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const metadata = {
  title: "FAQ | TryQu Tech - Try Qu Solutions",
  description: "Frequently asked questions about TryQu Tech Try Qu solutions, cloud infrastructure, and digital transformation services.",
}

export default function FAQPage() {
  const faqs = [
    {
      q: "What services does TryQu Tech provide?",
      a: "TryQu Tech delivers enterprise-grade IT solutions including cloud infrastructure, custom software development, DevOps & automation, security solutions, and 24/7 managed support for businesses of all sizes.",
    },
    {
      q: "How long does it take to implement a solution?",
      a: "Implementation timelines vary based on complexity and scope. Initial assessments take 1-2 weeks, cloud migrations typically 4-8 weeks, and custom software development ranges from 8-16 weeks depending on requirements.",
    },
    {
      q: "Do you work with existing infrastructure?",
      a: "Absolutely. We can integrate with your current systems, migrate to cloud infrastructure, or help you optimize existing deployments. Our approach is always tailored to your specific environment.",
    },
    {
      q: "What are your pricing models?",
      a: "We offer flexible pricing: fixed-price projects, hourly consulting, monthly managed services, and value-based pricing for transformational solutions. Contact our sales team for a customized quote based on your needs.",
    },
    {
      q: "Is security included in your solutions?",
      a: "Security is built into every solution. We provide enterprise-grade encryption, compliance management (GDPR, HIPAA, SOC2), regular security audits, and 24/7 monitoring to protect your data.",
    },
    {
      q: "Do you provide post-deployment support?",
      a: "Yes. We offer comprehensive post-deployment support including monitoring, maintenance, optimization, and 24/7 technical support. Our SLA guarantees 99.99% uptime for critical infrastructure.",
    },
    {
      q: "Can you handle scaling for growing businesses?",
      a: "Absolutely. Our cloud-native solutions automatically scale with your business growth. We design infrastructure that handles 10x growth without performance degradation or manual intervention.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "We work with AWS, Azure, GCP, Kubernetes, Docker, CI/CD pipelines (Jenkins, GitLab), AI/ML frameworks, and modern development stacks. Our team stays current with latest enterprise technologies.",
    },
    {
      q: "Do you provide training and documentation?",
      a: "Yes. We provide comprehensive documentation, team training, knowledge transfer sessions, and runbooks to ensure your team can manage and maintain the solutions confidently.",
    },
    {
      q: "How do we get started with TryQu Tech?",
      a: "Start with a free consultation where we assess your needs, current infrastructure, and goals. We'll provide a tailored proposal with timelines and investment. Contact our team at info@tryqu.com.",
    },
  ];

  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-14 sm:py-20">
            <div className="mb-5 flex items-center gap-2">
              <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
            </div>
            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Frequently Asked <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Questions</span></span>
            </h1>
            <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">Get answers to common questions</p>
            <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">Everything you need to know about TryQu Tech's Try Qu solutions, cloud infrastructure, and digital transformation services.</p>
          </div>
        </div>
      </section>

      {/* FAQ Items Section */}
      <section className="relative isolate overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="liquid-glass border border-white/20 hover:border-lime-300/30 transition-colors">
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">{faq.q}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTAExpertSection />
      <AppverseFooter />
    </>
  )
}
