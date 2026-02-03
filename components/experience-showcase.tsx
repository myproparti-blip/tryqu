"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Briefcase, Award, TrendingUp } from "lucide-react"

export function ExperienceShowcase() {
    const experiences = [
        {
            id: 1,
            title: "Global Infrastructure",
            subtitle: "Multi-Region Operations",
            icon: Globe,
            description: "Enterprise-grade operations in 5+ regions with 24/7 NOC support and local compliance expertise",
            gradient: "from-blue-600/20 to-blue-900/20",
            imageUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            title: "Enterprise Deployment",
            subtitle: "Proven Success",
            icon: Briefcase,
            description: "Delivered 50+ critical infrastructure projects and digital transformation initiatives for Fortune 500 enterprises",
            gradient: "from-purple-600/20 to-purple-900/20",
            imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 3,
            title: "Industry Leadership",
            subtitle: "SOC 2 & ISO Certified",
            icon: Award,
            description: "Recognized for cloud modernization, cybersecurity excellence, and enterprise architecture best practices",
            gradient: "from-yellow-600/20 to-yellow-900/20",
            imageUrl: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 4,
            title: "Business Impact",
            subtitle: "Measurable ROI",
            icon: TrendingUp,
            description: "Average 3.5x ROI through cost optimization, automation, and performance improvements",
            gradient: "from-green-600/20 to-green-900/20",
            imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16 text-center">
                <p className="text-lime-300 font-semibold mb-4">WHY ENTERPRISES CHOOSE US</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Proven Enterprise Capabilities
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Mission-critical infrastructure, global operations, and strategic partnership for digital transformation success
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {experiences.map((exp) => {
                    const Icon = exp.icon
                    return (
                        <Card
                            key={exp.id}
                            className="group relative overflow-hidden border border-lime-400/30 hover:border-lime-300 transition-all backdrop-blur-sm shadow-lg shadow-lime-400/5 hover:shadow-lime-400/20"
                        >
                            <CardContent className="p-0">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden bg-gradient-to-br from-black/80 to-black/60 group-hover:from-black/60 group-hover:to-black/40 transition-all duration-500">
                                        <Image
                                            src={exp.imageUrl}
                                            alt={exp.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent">
                                        <div>
                                            <p className="text-sm text-lime-300 font-semibold tracking-widest mb-2">
                                                {exp.subtitle}
                                            </p>
                                            <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                                <Icon className="h-6 w-6 text-lime-400" />
                                                {exp.title}
                                            </h3>
                                            <p className="text-white/70">{exp.description}</p>
                                        </div>

                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
