'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Zap, Star, TrendingUp, Users, Award } from 'lucide-react';
import { getTechEmoji } from '@/lib/tech-emojis-config';

interface PremiumTechDetailProps {
    name: string;
    emoji?: string;
    icon: React.ReactNode;
    tagline: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    rating: number;
    reviewCount: number;

    // Overview section
    overviewTitle: string;
    overviewDescription: string;
    overviewHighlights: string[];

    // Services/Use Cases
    services: Array<{
        title: string;
        description: string;
        details: string;
        icon?: React.ReactNode;
    }>;

    // Key Benefits
    benefits: Array<{
        title: string;
        description: string;
        icon?: React.ReactNode;
    }>;

    // Use Cases/Industries
    useCases: Array<{
        industry: string;
        description: string;
        example: string;
    }>;

    // Ecosystem/Tools
    ecosystemCategories: Array<{
        title: string;
        tools: string[];
    }>;

    // Why Choose Us
    whyChoose: Array<{
        title: string;
        description: string;
    }>;

    // Key Facts/Statistics
    keyFacts: Array<{
        stat: string;
        description: string;
    }>;

    // Case Studies
    caseStudies: Array<{
        company: string;
        industry: string;
        challenge: string;
        solution: string;
        results: string[];
        technologies: string[];
    }>;

    // FAQs
    faqs: Array<{
        question: string;
        answer: string;
    }>;

    // Related Technologies
    relatedTechs: string[];
}

export function PremiumTechDetailTemplate({
    name,
    emoji,
    icon,
    tagline,
    heroTitle,
    heroSubtitle,
    heroDescription,
    rating,
    reviewCount,
    overviewTitle,
    overviewDescription,
    overviewHighlights,
    services,
    benefits,
    useCases,
    ecosystemCategories,
    whyChoose,
    keyFacts,
    caseStudies,
    faqs,
    relatedTechs,
}: PremiumTechDetailProps) {
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
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 py-24 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
                        <span className="text-2xl">{icon}</span>
                        <span className="text-purple-300 font-semibold">{tagline}</span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                        {emoji && <span className="mr-3">{emoji}</span>}
                        {heroTitle}
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-4">{heroSubtitle}</p>
                    <p className="text-lg text-slate-400 max-w-3xl leading-relaxed mb-8">{heroDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-slate-300 font-semibold">{rating}/5</span>
                        <span className="text-slate-400">({reviewCount} client reviews)</span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold inline-flex items-center">
                            Accelerate Your {name} Development
                        </div>
                    </div>
                </div>

                {/* Trust Section */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <p className="text-slate-300 mb-6">
                        Our {name} team is trusted by <span className="text-purple-300 font-bold">130+ companies worldwide</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
                        <span>✓ 30+ successful {name} projects</span>
                        <span>✓ 2-week team onboarding</span>
                        <span>✓ Enterprise-grade reliability</span>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-bold mb-8">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                                {overviewTitle}
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
                            {overviewDescription}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {overviewHighlights.map((highlight, idx) => (
                                <div key={idx} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                    <span className="text-slate-300">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                            alt="Cutting-edge Innovation"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Services/Use Cases Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        {name} Development Services We Provide
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2">
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
                                    {service.icon && <div className="text-3xl mb-4">{service.icon}</div>}
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
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-96">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                            alt="Professional Development Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Key Benefits of {name}
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1 rounded-2xl overflow-hidden border border-white/10 h-80">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop"
                            alt="High Performance Development"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div
                                    key={benefit.title}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                                >
                                    {benefit.icon && <div className="text-3xl mb-4">{benefit.icon}</div>}
                                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases/Industries Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Industries Using {name}
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                            alt="TryQu Tech"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 gap-4">
                            {useCases.map((useCase, idx) => (
                                <div
                                    key={useCase.industry}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all"
                                >
                                    <h3 className="text-xl font-bold mb-2 text-purple-300">{useCase.industry}</h3>
                                    <p className="text-slate-400 mb-3 text-sm">{useCase.description}</p>
                                    <p className="text-xs text-slate-500 italic border-l-2 border-purple-500/50 pl-3">
                                        "{useCase.example}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                            Hundreds of {name} Projects Delivered
                        </span>
                    </h2>
                    <p className="text-slate-300 mb-8 text-lg max-w-3xl">
                        Our track record means you get software that meets the highest technical and business standards.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-4xl font-bold text-purple-300 mb-2">30+</div>
                            <p className="text-slate-400">Successful Projects</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-4xl font-bold text-purple-300 mb-2">130+</div>
                            <p className="text-slate-400">Trusted Companies</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-4xl font-bold text-purple-300 mb-2">99.9%</div>
                            <p className="text-slate-400">Success Rate</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    {caseStudies.map((study, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
                                        {study.industry}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-purple-300 font-bold mb-2">Challenge</h4>
                                    <p className="text-slate-400">{study.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="text-purple-300 font-bold mb-2">Solution</h4>
                                    <p className="text-slate-400">{study.solution}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-purple-300 font-bold mb-3">Results</h4>
                                    <ul className="space-y-2">
                                        {study.results.map((result, i) => (
                                            <li key={i} className="text-slate-400 flex items-start gap-2">
                                                <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rounded-xl overflow-hidden h-40">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop"
                                        alt="Case Study Success"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        The {name} Ecosystem We Use
                    </span>
                </h2>

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
                <h2 className="text-4xl font-bold mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Why Choose TryQ for {name}
                    </span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                            alt="Expert Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {whyChoose.map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500/20 border border-purple-500/50">
                                                <Check className="h-5 w-5 text-purple-300" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                            <p className="text-slate-400 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Key Facts About {name}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                            alt="Analytics and Data"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {keyFacts.map((fact, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <TrendingUp className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-lg font-bold text-purple-300 mb-1">{fact.stat}</p>
                                            <p className="text-slate-400">{fact.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                                    className={`h-5 w-5 text-purple-400 transition-transform ${expandedFaq === idx ? 'rotate-90' : ''}`}
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

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
    );
}
