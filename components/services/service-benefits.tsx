"use client"

import { useState } from "react"
import { CheckCircle2, TrendingUp, Users, Award, Zap, Clock } from "lucide-react"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  stats: string
}

const benefits: Benefit[] = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Measurable Business Impact",
    description: "Demonstrate ROI through cost optimization, operational efficiency, and revenue enablement",
    stats: "3.5x ROI Avg",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Enterprise Credibility",
    description: "SOC 2 Type II, ISO 27001, and HIPAA certifications trusted by Fortune 500 enterprises",
    stats: "50+ Delivered",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Strategic Expertise",
    description: "50+ experts with 20+ years in enterprise architecture, cloud, and digital transformation",
    stats: "500+ Years Exp",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Mission-Critical Operations",
    description: "99.99% SLA-backed reliability with automated failover and continuous monitoring",
    stats: "99.99% Uptime",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Assigned CSM, 24/7 NOC support, and <15 minute response time for critical issues",
    stats: "24/7 Coverage",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Proven Success",
    description: "10+ year track record with 99.8% customer retention and 100% project delivery",
    stats: "99.8% Retention",
  },
]

export function ServiceBenefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-blue-950/20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Why Enterprises Partner With Us</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We deliver measurable business outcomes through proven expertise, strategic alignment, and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`relative h-full p-8 rounded-xl border transition-all duration-500 ${
                  hoveredIndex === index
                    ? "border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 inline-flex p-3 rounded-lg transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{benefit.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{benefit.stats}</span>
                  </div>
                </div>
              </div>

              {/* Animated border effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 rounded-xl border border-cyan-400/30 animate-pulse pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Comparison Section */}
         <div className="mt-20 rounded-xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
           <h3 className="text-3xl font-bold text-white mb-8 text-center">Enterprise Capabilities Comparison</h3>

           <div className="overflow-x-auto">
             <table className="w-full text-sm sm:text-base">
               <thead>
                 <tr className="border-b border-white/10">
                   <th className="text-left py-4 px-4 text-gray-400 font-semibold">Enterprise Requirement</th>
                   <th className="text-center py-4 px-4 text-cyan-400 font-semibold">We Deliver</th>
                   <th className="text-center py-4 px-4 text-gray-400 font-semibold">Industry Standard</th>
                 </tr>
               </thead>
              <tbody>
                {[
                   { feature: "24/7 Dedicated Support", tryq: true, comp: false },
                   { feature: "Multi-cloud Expertise", tryq: true, comp: false },
                   { feature: "Advanced Analytics", tryq: true, comp: false },
                   { feature: "Custom Development", tryq: true, comp: true },
                   { feature: "TryQu Tech", tryq: true, comp: true },
                   { feature: "SLA Guarantee", tryq: "99.99%", comp: "99%" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.tryq === "boolean" ? (
                        row.tryq ? (
                          <span className="text-cyan-400 font-bold">✓</span>
                        ) : (
                          <span className="text-gray-500">✗</span>
                        )
                      ) : (
                        <span className="text-cyan-400 font-bold">{row.tryq}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.comp === "boolean" ? (
                        row.comp ? (
                          <span className="text-gray-400">✓</span>
                        ) : (
                          <span className="text-gray-500">✗</span>
                        )
                      ) : (
                        <span className="text-gray-400">{row.comp}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
