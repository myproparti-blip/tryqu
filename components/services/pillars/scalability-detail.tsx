"use client"

import { TrendingUp, Database, Zap, Globe, BarChart3, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Chip } from "@/components/ui/chip"
import { CTAExpertSection } from "@/components/cta-expert-section"

export default function ScalabilityDetail() {
  const router = useRouter()

  const handleStartScaling = () => {
    router.push("/checkout")
  }

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                <p className="text-sm font-bold text-amber-300 tracking-widest uppercase">
                  Scalability Excellence
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Scale Without Limits
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Enterprise-grade infrastructure that effortlessly handles 10M+ concurrent users while maintaining sub-500ms response times and 99.99% uptime SLA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Chip
                  onClick={handleStartScaling}
                  variant="amber"
                  size="lg"
                >
                  Start Scaling →
                </Chip>
                <Chip variant="amber" size="lg">
                  View Architecture
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "10M+", label: "Users" },
                  { value: "99.99%", label: "Uptime" },
                  { value: "500ms", label: "Response Time" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-amber-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated circles */}
                  <div className="absolute inset-0 border-2 border-amber-500/30 rounded-full animate-spin" style={{ animationDuration: "10s" }} />
                  <div className="absolute inset-6 border-2 border-orange-500/20 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                  <div className="absolute inset-12 border-2 border-yellow-500/10 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-24 h-24 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-16 text-center">
            Why Choose Our Scalability Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Distributed Architecture",
                description: "Microservices, containerization, and database sharding for horizontal scaling",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning-Fast Caching",
                description: "Redis, Memcached, and CDN integration for sub-50ms response times",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Distribution",
                description: "Multi-region deployment with automatic failover and load balancing",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Real-time Monitoring",
                description: "Advanced metrics, alerts, and performance tracking 24/7",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-amber-500/30 hover:bg-gradient-to-br hover:from-amber-500/5 hover:to-orange-500/5 transition-all duration-300 group"
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Technologies Section */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Our Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Kubernetes",
              "Docker",
              "Terraform",
              "AWS Auto Scaling",
              "PostgreSQL",
              "Redis",
              "Elasticsearch",
              "Kafka",
              "Nginx",
              "HAProxy",
              "CloudFlare",
              "Datadog",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-amber-500/30 hover:bg-amber-500/[0.03] transition-all duration-300 text-center group"
              >
                <p className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                company: "E-commerce Platform",
                challenge: "Needed to scale from 100K to 5M daily users",
                solution: "Implemented Kubernetes orchestration with auto-scaling",
                result: "Reduced infrastructure costs by 40%, maintained <200ms latency",
              },
              {
                company: "SaaS Provider",
                challenge: "Database bottleneck at 10M queries/day",
                solution: "Database sharding + caching layer + read replicas",
                result: "Achieved 100M queries/day capacity, zero downtime migration",
              },
            ].map((story, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <h3 className="text-lg font-bold text-amber-400 mb-2">{story.company}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold mb-1">CHALLENGE</p>
                    <p className="text-gray-300">{story.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold mb-1">SOLUTION</p>
                    <p className="text-gray-300">{story.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold mb-1">RESULT</p>
                    <p className="text-gray-300 text-amber-200">{story.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Expert Section */}
      <CTAExpertSection />
      </div>
      )
      }
