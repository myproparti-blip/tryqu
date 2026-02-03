"use client"

import Image from "next/image"
import { Code2, Shield, Zap } from "lucide-react"

export function ServicesHero() {

    return (
        <>
            <section className="relative isolate overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center py-14 sm:py-20">
                        <div className="mb-5 flex items-center gap-2">
                            <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} priority className="h-8 w-8" />
                            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
                        </div>
                        <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="block text-white">IT Development & Testing <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Services</span></span>
                        </h1>
                        <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">Comprehensive solutions for modern software development</p>
                        <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">Full-stack development, quality assurance, and testing services for modern software solutions. Expert teams delivering scalable, reliable applications.</p>

                        {/* Service Icons Grid */}
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                            {[
                                { icon: Code2, label: "Full-Stack Development", desc: "End-to-end solutions" },
                                { icon: Shield, label: "Quality Assurance", desc: "Comprehensive testing" },
                                { icon: Zap, label: "CI/CD & DevOps", desc: "Automation & deployment" },
                            ].map((service, i) => (
                                <div
                                    key={i}
                                    className={`p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group`}
                                    style={{
                                        animationDelay: `${i * 100}ms`,
                                    }}
                                >
                                    <service.icon className="w-6 h-6 text-lime-300 mb-2 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm font-semibold text-white">{service.label}</p>
                                    <p className="text-xs text-gray-400">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
