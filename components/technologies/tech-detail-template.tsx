'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { getTechEmoji } from '@/lib/tech-emojis-config';
import { TechPageHeader } from './tech-page-header';
import { CTAExpertSection } from '@/components/cta-expert-section';

interface TechDetailProps {
    name: string;
    emoji?: string;
    icon: React.ReactNode;
    shortDescription: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage?: string;
    heroImageAlt?: string;
    services: Array<{
        title: string;
        description: string;
        details: string;
    }>;
    ecosystemCategories: Array<{
        title: string;
        tools: string[];
    }>;
    whyChoose: Array<{
        title: string;
        description: string;
    }>;
    keyFacts: string[];
    faqs: Array<{
        question: string;
        answer: string;
    }>;
    relatedTechs: string[];
    caseStudies?: Array<{
        title: string;
        description: string;
        link: string;
    }>;
}

// Helper function to convert tech names to URL paths
function getTechPath(techName: string): string {
    return `/technologies/${techName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')}`;
}

export function TechDetailTemplate({
    name,
    emoji,
    icon,
    shortDescription,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroImageAlt,
    services,
    ecosystemCategories,
    whyChoose,
    keyFacts,
    faqs,
    relatedTechs,
    caseStudies,
}: TechDetailProps) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative bg-black text-white overflow-hidden">
            {/* Tech Page Header - Same style as home page */}
            <TechPageHeader 
                title={`Scale Your ${name} Development with Expert Nearshore Talent`}
                subtitle="Accelerate time-to-market while reducing operational complexity"
                description={shortDescription}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
                            <span className="text-2xl">{icon}</span>
                            <span className="text-purple-300 font-semibold">{name}</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                            {emoji && <span className="mr-3">{emoji}</span>}
                            {heroTitle}
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">{heroSubtitle}</p>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold inline-flex items-center">
                                Accelerate Your {name} Development
                            </div>
                        </div>
                    </div>

                    {heroImage && (
                        <div className="relative flex items-center justify-center h-96">
                            <img
                                src={heroImage}
                                alt={heroImageAlt || `${name} development`}
                                className="w-full max-w-lg h-auto rounded-2xl border border-purple-500/30 shadow-2xl transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                    const img = e.currentTarget as HTMLImageElement;
                                    img.style.display = 'none';
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Trust Section */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <p className="text-slate-300 mb-6">
                        30+ companies rely on our <span className="text-purple-300 font-bold">top 1% tech talent</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 2-week team onboarding</span>
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Proven track record</span>
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> Enterprise-grade quality</span>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            {name} Development Services We Provide
                        </span>
                    </h2>
                    <p className="text-base font-semibold text-lime-300/80">
                        Purpose-built solutions to accelerate delivery and reduce technical debt
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className={`group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{
                                transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                            <p className="text-sm text-slate-500 border-l-2 border-purple-500/50 pl-4">
                                {service.details}
                            </p>
                            <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            The {name} Ecosystem We Use
                        </span>
                    </h2>
                    <p className="text-base font-semibold text-lime-300/80">
                        Industry-standard tools that ensure quality, scalability, and maintainability
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ecosystemCategories.map((category) => (
                        <div
                            key={category.title}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <h3 className="text-lg font-bold mb-6 text-white">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            Why Choose TryQ for {name} Development
                        </span>
                    </h2>
                    <p className="text-base font-semibold text-lime-300/80">
                        Enterprise-grade expertise with proven delivery track record
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whyChoose.map((item, idx) => (
                        <div
                            key={item.title}
                            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500/20 border border-purple-500/50">
                                        <Check className="h-5 w-5 text-purple-300" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                    <h2 className="text-4xl font-bold mb-12">Key Things to Know About {name}</h2>

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-6">Key Facts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {keyFacts.map((fact, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Zap className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                                    <p className="text-slate-300">{fact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Frequently Asked Questions
                    </span>
                </h2>

                <div className="space-y-4 max-w-3xl">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition-all"
                        >
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                className="w-full px-8 py-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                            >
                                <span className="text-lg font-bold text-left text-white">{faq.question}</span>
                                <ArrowRight
                                    className={`h-5 w-5 text-purple-400 transition-transform ${expandedFaq === idx ? 'rotate-90' : ''
                                        }`}
                                />
                            </button>

                            {expandedFaq === idx && (
                                <div className="px-8 py-4 border-t border-white/10 bg-black/50">
                                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Card Section */}
            <CTAExpertSection />

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
    );
}
