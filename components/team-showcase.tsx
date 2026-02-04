"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Code, Zap, Shield, ArrowRight } from "lucide-react"

export function TeamShowcase() {
    const teamMembers = [
        {
            id: 1,
            name: "Ashish Patel",
            role: "Chief Executive Officer - India Region",
            icon: Users,
            description: "Enterprise strategy and operations across Asia Pacific. 15+ years in IT transformation and cloud infrastructure.",
            image: "/images/boss.jpeg",
            email: "ashish.patel@tryqu.com",
        },
        {
            id: 2,
            name: "Abhishek",
            role: "Chief Executive Officer - America",
            icon: Users,
            description: "Strategic leadership for North American market. Expertise in enterprise architecture and digital modernization.",
            image: "/images/teammembe.jpeg",
            email: "abhishek@tryqu.com",
        },
        {
            id: 3,
            name: "Divaya",
            role: "Chief Executive Officer - Europe",
            icon: Users,
            description: "Regional expansion and regulatory compliance. Specializes in GDPR, enterprise governance, and cloud operations.",
            image: "/images/member.jpeg",
            email: "divaya@tryqu.com",
        },
        
    ]

    return (
        <section>
            {/* Hero Header */}
            <div className="relative isolate overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-14 sm:py-20">
                        <div className="mb-5 flex items-center gap-2">
                            <img src="/icons/skitbit-white.svg" alt="TryQu Tech logo" className="h-8 w-8" />
                            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
                        </div>
                        <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="block text-white">Enterprise <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Leadership</span></span>
                        </h1>
                        <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">Strategic executives with 20+ years in digital transformation, cloud architecture, and TryQu Tech</p>
                        <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">Meet the visionary leaders driving innovation and excellence across our global organization. Our executive team brings decades of combined experience in enterprise solutions and digital transformation.</p>
                    </div>
                </div>
            </div>

            {/* Team Members Grid */}
            <section className="container mx-auto px-4 py-20">
                <div className="mb-16"></div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => {
                    const Icon = member.icon
                    return (
                        <div key={member.id} className="h-full">
                            <Link href={`/team/${member.id}`} className="h-full block">
                                <div
                                    className="group relative overflow-hidden border border-lime-400/30 bg-gradient-to-b from-white/5 to-white/2 hover:border-lime-300 transition-all hover:shadow-xl hover:shadow-lime-400/15 backdrop-blur-sm cursor-pointer h-full rounded-xl"
                                >
                                    <div className="p-0 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-lime-900/40 to-black/80 group-hover:from-lime-900/60 group-hover:to-black/60 transition-all duration-500">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="flex items-center gap-2 text-lime-400">
                                                    <span className="text-sm font-semibold">View Profile</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Icon className="h-5 w-5 text-lime-400" />
                                                    <h3 className="font-bold text-white">{member.name}</h3>
                                                </div>
                                                <p className="text-sm text-lime-300/90 font-medium mb-2">{member.role}</p>
                                                <span 
                                                    className="text-xs text-white/60 hover:text-lime-400 transition-colors duration-200 inline-block mb-3"
                                                >
                                                    {member.email}
                                                </span>
                                                <p className="text-sm text-white/70 leading-relaxed">{member.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
            </section>
        </section>
    )
}
