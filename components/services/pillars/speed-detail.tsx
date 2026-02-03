"use client"

import { Zap, Gauge, Rocket, Code2, Layers, Activity } from "lucide-react"
import { useRouter } from "next/navigation"
import { Chip } from "@/components/ui/chip"
import { ConsultationCtaCard } from "@/components/consultation-cta-card"

export default function SpeedDetail() {
  const router = useRouter()

  const handleOptimizeNow = () => {
    router.push("/checkout")
  }

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30">
                <p className="text-sm font-bold text-yellow-300 tracking-widest uppercase">
                  Performance Optimization
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Blazing Fast
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sub-50ms latency with 95+ Lighthouse scores. Optimized for every millisecond to deliver exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Chip
                  onClick={handleOptimizeNow}
                  variant="yellow"
                  size="lg"
                >
                  Optimize Now →
                </Chip>
                <Chip variant="yellow" size="lg">
                  Performance Report
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "<50ms", label: "Latency" },
                  { value: "95+", label: "Lighthouse" },
                  { value: "2x", label: "Faster Deploys" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-yellow-300">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-amber-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Speed lines */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-yellow-400/30 rounded-full animate-pulse"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        transform: `scale(${1 - i * 0.2})`,
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-20 h-20 text-yellow-300 animate-pulse" />
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
            Performance Engineering
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Code Optimization",
                description: "Bundle size reduction, tree-shaking, code splitting, and lazy loading",
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Core Web Vitals",
                description: "LCP, FID, CLS optimization for Google's ranking algorithm",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Asset Optimization",
                description: "Image compression, WebP conversion, font optimization, and minification",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Network Optimization",
                description: "HTTP/2, compression, caching strategies, and CDN integration",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-yellow-500/30 hover:bg-gradient-to-br hover:from-yellow-500/5 hover:to-amber-500/5 transition-all duration-300 group"
              >
                <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Optimization Techniques */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Speed Optimization Techniques
          </h2>

          <div className="space-y-6">
            {[
              {
                technique: "Frontend Optimization",
                items: ["Code splitting", "Dynamic imports", "Image optimization", "Font optimization", "CSS-in-JS minification"],
              },
              {
                technique: "Backend Optimization",
                items: ["Query optimization", "Caching strategies", "Connection pooling", "Compression", "Load balancing"],
              },
              {
                technique: "Infrastructure",
                items: ["CDN deployment", "Edge computing", "Database indexing", "Server-side rendering", "API rate limiting"],
              },
            ].map((section, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">{section.technique}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Performance Benchmarks
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: "Page Load", value: "<1.5s", improvement: "3x faster" },
              { metric: "Time to Interactive", value: "<2.3s", improvement: "2.5x faster" },
              { metric: "First Contentful Paint", value: "<0.8s", improvement: "4x faster" },
              { metric: "Largest Contentful Paint", value: "<2.0s", improvement: "3.2x faster" },
              { metric: "Cumulative Layout Shift", value: "0.05", improvement: "98% reduction" },
              { metric: "First Input Delay", value: "<50ms", improvement: "10x faster" },
            ].map((bench, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-yellow-500/30 hover:bg-yellow-500/[0.03] transition-all duration-300">
                <p className="text-sm text-gray-400 font-semibold mb-2">{bench.metric}</p>
                <p className="text-3xl font-black text-yellow-300 mb-2">{bench.value}</p>
                <p className="text-xs text-green-400 font-semibold">{bench.improvement}</p>
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
