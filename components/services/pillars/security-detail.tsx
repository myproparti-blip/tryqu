"use client"

import { Lock, Shield, AlertTriangle, Key, Eye, CheckCircle2 } from "lucide-react"
import { Chip } from "@/components/ui/chip"
import { ConsultationCtaCard } from "@/components/consultation-cta-card"

export default function SecurityDetail() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <p className="text-sm font-bold text-cyan-300 tracking-widest uppercase">
                  Enterprise Infrastructure
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Enterprise Reliability
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Mission-critical uptime. Enterprise-grade infrastructure. Automated failover. Sub-100ms response times. Keep your operations running smoothly with highly reliable systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Chip
                  variant="cyan"
                  size="lg"
                >
                  Performance Assessment →
                </Chip>
                <Chip variant="cyan" size="lg">
                  Infrastructure Docs
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "99.99%", label: "Availability" },
                  { value: "<100ms", label: "Response Time" },
                  { value: "Auto", label: "Failover" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  {/* Shield layers */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full" />
                  <div className="absolute inset-6 border-2 border-blue-500/30 rounded-full" />
                  <div className="absolute inset-12 border-2 border-cyan-400/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-20 h-20 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Pillars */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-16 text-center">
            Five Pillars of Reliability
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Redundancy",
                items: ["Multi-region", "Backup systems", "Load balancing", "Failover"],
              },
              {
                icon: <Key className="w-8 h-8" />,
                title: "Performance",
                items: ["CDN distribution", "Caching layer", "Optimization", "Monitoring"],
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Observability",
                items: ["Real-time metrics", "Log analysis", "Alerts", "Dashboards"],
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Maintenance",
                items: ["Zero downtime", "Planned updates", "Testing", "Scaling"],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Recovery",
                items: ["RTO", "RPO", "Disaster recovery", "Backups"],
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-blue-500/5 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-white mb-3">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Performance Optimization Strategies
          </h2>

          <div className="space-y-4">
            {[
              {
                threat: "Latency Reduction",
                protection: "CDN distribution, edge caching, request optimization, compression",
              },
              {
                threat: "Scalability",
                protection: "Auto-scaling, load balancing, microservices, horizontal expansion",
              },
              {
                threat: "Database Performance",
                protection: "Query optimization, indexing, replication, read replicas",
              },
              {
                threat: "Resource Management",
                protection: "Container orchestration, resource allocation, monitoring, tuning",
              },
              {
                threat: "Availability Assurance",
                protection: "Multi-region deployment, failover automation, health checks, recovery",
              },
              {
                threat: "Cost Efficiency",
                protection: "Resource optimization, reserved capacity, auto-shutdown, monitoring",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white mb-1">{item.threat}</h4>
                    <p className="text-sm text-gray-400">{item.protection}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Standards */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Industry-Standard Infrastructure
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                cert: "99.99% Availability",
                description: "Guaranteed uptime SLA with multi-region redundancy and automatic failover",
              },
              {
                cert: "Global CDN",
                description: "Content delivery from 100+ edge locations worldwide",
              },
              {
                cert: "Enterprise Support",
                description: "24/7/365 dedicated support with sub-15 minute response time",
              },
              {
                cert: "Auto-Scaling",
                description: "Automatic resource scaling based on demand patterns",
              },
              {
                cert: "Advanced Monitoring",
                description: "Real-time analytics and performance monitoring dashboard",
              },
              {
                cert: "Disaster Recovery",
                description: "Comprehensive backup and recovery procedures",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.cert}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Support Team */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Dedicated Expert Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                service: "Infrastructure Management 24/7",
                description: "Round-the-clock monitoring and operational support team",
              },
              {
                service: "Performance Optimization",
                description: "Regular optimization reviews and efficiency recommendations",
              },
              {
                service: "Technical Training",
                description: "Team training on best practices and platform expertise",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{item.service}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Card Section */}
      <ConsultationCtaCard />
      </div>
      )
      }
