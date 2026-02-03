"use client"

import { Activity, AlertCircle, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react"
import { Chip } from "@/components/ui/chip"

export default function ReliabilityDetail() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
                <p className="text-sm font-bold text-blue-300 tracking-widest uppercase">
                  Enterprise Reliability
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Always Available
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enterprise-grade reliability with 99.95%+ uptime guaranteed. Redundant systems, automatic failover, and 24/7 monitoring ensure your infrastructure never sleeps.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Chip
                  variant="blue"
                  size="lg"
                >
                  Start Reliable Infrastructure →
                </Chip>
                <Chip variant="blue" size="lg">
                  SLA Details
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "99.95%", label: "Uptime SLA" },
                  { value: "<1 min", label: "Recovery" },
                  { value: "24/7", label: "Monitoring" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-blue-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Heartbeat animation */}
                  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                    <polyline
                      points="30,100 60,100 70,70 80,120 90,90 110,110 120,80 140,100 170,100"
                      fill="none"
                      stroke="rgba(59, 130, 246, 1)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Activity className="w-20 h-20 text-blue-400 opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Principles */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-16 text-center">
            Built on Reliability Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Redundancy",
                description: "Multi-region deployment with automatic failover and load balancing",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Health Monitoring",
                description: "Real-time health checks and proactive alerting for all components",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Auto-Recovery",
                description: "Automatic recovery and self-healing mechanisms for resilience",
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Incident Response",
                description: "Rapid incident detection and response with documented runbooks",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Capacity Planning",
                description: "Intelligent scaling based on demand forecasting and analytics",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Testing & Validation",
                description: "Regular chaos engineering and disaster recovery drills",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-blue-500/30 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-indigo-500/5 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            SLA Guarantees
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { metric: "Uptime", value: "99.95%", description: "Less than 21 minutes downtime per month" },
              { metric: "Recovery Time", value: "<1 minute", description: "Automatic failover and recovery" },
              { metric: "Data Redundancy", value: "3+", description: "Replicated across multiple regions" },
              { metric: "Backup Frequency", value: "Hourly", description: "Point-in-time recovery available" },
              { metric: "Monitoring", value: "24/7/365", description: "Continuous health and performance tracking" },
              { metric: "Support", value: "24/7", description: "Dedicated on-call incident response team" },
            ].map((sla, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{sla.metric}</h3>
                <p className="text-4xl font-black text-white mb-2">{sla.value}</p>
                <p className="text-gray-400">{sla.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Commitment */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Our Uptime Commitment
          </h2>

          <div className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
            <div className="space-y-6">
              {[
                {
                  period: "Monthly",
                  uptime: "99.95%",
                  downtime: "21.6 minutes",
                },
                {
                  period: "Quarterly",
                  uptime: "99.95%",
                  downtime: "1.08 hours",
                },
                {
                  period: "Annual",
                  uptime: "99.95%",
                  downtime: "4.38 hours",
                },
              ].map((period, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/[0.02]">
                  <div className="flex-grow">
                    <p className="font-bold text-white text-lg">{period.period}</p>
                    <p className="text-sm text-gray-400">Maximum allowed downtime</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-blue-400">{period.uptime}</p>
                    <p className="text-xs text-gray-400">{period.downtime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
