"use client"

import { Plug, Network, Workflow, GitBranch, Shield, BarChart3 } from "lucide-react"
import { Chip } from "@/components/ui/chip"
import { ConsultationCtaCard } from "@/components/consultation-cta-card"

export default function IntegrationDetail() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
                <p className="text-sm font-bold text-emerald-300 tracking-widest uppercase">
                  Seamless Connectivity
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-2 leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Integrate Everything
                </span>
              </h1>
              <p className="text-sm text-emerald-300/80 mb-8 font-medium">
                Unify your tech stack and accelerate time-to-value
              </p>

              <div className="mb-8 space-y-3">
                <p className="text-gray-300 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>Connect with 30+ enterprise APIs and platforms in minutes</span>
                </p>
                <p className="text-gray-300 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>Real-time data synchronization with 99.9% uptime SLA</span>
                </p>
                <p className="text-gray-300 flex items-start gap-3">
                  <span className="text-emerald-400 font-bold mt-0.5">•</span>
                  <span>Eliminate data silos and reduce manual processes</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Chip
                  variant="emerald"
                  size="lg"
                >
                  Explore Integrations →
                </Chip>
                <Chip variant="emerald" size="lg">
                  API Documentation
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "30+", label: "APIs" },
                  { value: "Real-time", label: "Sync" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-emerald-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Connecting nodes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Plug className="w-24 h-24 text-emerald-400" />
                  </div>
                  {/* Orbit circles */}
                  <div className="absolute inset-8 border border-emerald-500/20 rounded-full animate-spin" style={{ animationDuration: "8s" }} />
                  <div className="absolute inset-16 border border-teal-500/20 rounded-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-3">
              Integration Capabilities
            </h2>
            <p className="text-sm text-emerald-300/80 font-medium">
              Enterprise-grade features for seamless system connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Workflow className="w-8 h-8" />,
                title: "Workflow Automation",
                description: "Automate complex business processes across multiple systems",
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "Data Transformation",
                description: "ETL pipelines with real-time data mapping and validation",
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "API Management",
                description: "Rate limiting, versioning, and gateway management",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Connections",
                description: "OAuth 2.0, JWT, and encryption for all integrations",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-emerald-500/30 hover:bg-gradient-to-br hover:from-emerald-500/5 hover:to-teal-500/5 transition-all duration-300 group"
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Marketplace */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            30+ Integrations Available
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Salesforce",
              "HubSpot",
              "Stripe",
              "PayPal",
              "Shopify",
              "WooCommerce",
              "Slack",
              "Microsoft Teams",
              "Google Workspace",
              "Asana",
              "Jira",
              "GitHub",
              "GitLab",
              "Jenkins",
              "AWS",
              "Azure",
              "Google Cloud",
              "Datadog",
              "Segment",
              "Mixpanel",
              "Amplitude",
              "Twilio",
              "SendGrid",
              "Auth0",
            ].map((integration, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-300 text-center group"
              >
                <p className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {integration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Enterprise Integration Architecture
          </h2>

          <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
            <div className="space-y-6">
              {[
                {
                  name: "API Gateway",
                  description: "Single entry point for all integrations with rate limiting and authentication",
                },
                {
                  name: "Data Transform Layer",
                  description: "Map and transform data between systems with custom business logic",
                },
                {
                  name: "Event Bus",
                  description: "Real-time event streaming with publish-subscribe patterns",
                },
                {
                  name: "Message Queue",
                  description: "Reliable asynchronous processing with guaranteed delivery",
                },
                {
                  name: "Monitoring & Analytics",
                  description: "Real-time visibility into all integration flows and performance metrics",
                },
              ].map((arch, idx) => (
                <div key={idx} className="flex gap-4 pb-6 border-b border-white/10 last:border-b-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{arch.name}</h4>
                    <p className="text-gray-400">{arch.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card Section */}
      <ConsultationCtaCard />
      </div>
      )
      }
