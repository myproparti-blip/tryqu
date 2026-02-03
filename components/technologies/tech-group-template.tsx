'use client';

import React from 'react';
import Link from 'next/link';
import { getTechEmoji } from '@/lib/tech-emojis-config';

interface TechGroupTemplateProps {
    groupTitle: string;
    groupSubtitle: string;
    businessValue: string;
    technologies: { name: string; path: string }[];
    keyBenefits: string[];
}

export function TechGroupTemplate({
    groupTitle,
    groupSubtitle,
    businessValue,
    technologies,
    keyBenefits,
}: TechGroupTemplateProps) {

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-20 -z-10">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    {/* Main Heading */}
                    <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                        {groupTitle}
                    </h1>

                    {/* Business Value Subheading */}
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mb-8">
                        {businessValue}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-lg max-w-2xl">
                        {groupSubtitle}
                    </p>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-white">Key Technologies</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {technologies.map((tech) => {
                        const emoji = getTechEmoji(tech.name);
                        return (
                            <Link
                                key={tech.name}
                                href={tech.path}
                                className="group p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{emoji}</div>
                                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-sm">
                                    {tech.name}
                                </h3>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-white">Enterprise Value</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {keyBenefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-400/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-2xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent flex-shrink-0">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="text-gray-300 leading-relaxed">{benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
}
