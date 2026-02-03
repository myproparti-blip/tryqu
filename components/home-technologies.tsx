'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePageContext } from '@/hooks/use-page-context';
import { getTechEmoji } from '@/lib/tech-emojis-config';

export function HomeTechnologies() {
    const { page } = usePageContext();
    const [animatingEmojis, setAnimatingEmojis] = useState<Record<string, boolean>>({});

    const technologies = [
        'React',
        'Node.js',
        'Python',
        'AWS',
        'Kubernetes',
        'Docker',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'GraphQL',
        'Next.js',
        'Vue.js',
        'Angular',
        'FastAPI',
        'Terraform',
        'Microservices',
    ];

    const frontendTech = [
        'React',
        'Vue.js',
        'Angular',
        'TypeScript',
        'Next.js',
    ];

    const backendTech = [
        'Node.js',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
    ];

    function getTechPath(techName: string): string {
        return `/technologies/${techName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')}`;
    }

    function handleEmojiClick(tech: string) {
        setAnimatingEmojis(prev => ({
            ...prev,
            [tech]: true
        }));

        setTimeout(() => {
            setAnimatingEmojis(prev => ({
                ...prev,
                [tech]: false
            }));
        }, 600);
    }

    // Only show on home page
    if (page !== 'home') {
        return null;
    }

    return (
        <section className="py-20 px-4 border-t border-gray-800/50 bg-gradient-to-b from-black via-purple-950/10 to-black">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">
                        Cutting-Edge Technology Expertise
                    </h2>
                    <p className="text-base font-semibold text-lime-300/80 mb-4">
                        Build with proven, production-grade technologies
                    </p>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Master modern development with our comprehensive technology stack and expert guidance across 100+ platforms
                    </p>
                </div>

                {/* First Two Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Popular Technologies */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-purple-300">Popular Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.slice(0, 8).map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-purple-400 hover:bg-purple-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span 
                                            className={`group-hover:scale-110 transition-transform inline-block cursor-pointer ${
                                                animatingEmojis[tech] ? 'animate-bounce' : ''
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEmojiClick(tech);
                                            }}
                                        >
                                            {emoji}
                                        </span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Infrastructure & DevOps */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-blue-300">Infrastructure & DevOps</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.slice(8).map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-blue-400 hover:bg-blue-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span 
                                            className={`group-hover:scale-110 transition-transform inline-block cursor-pointer ${
                                                animatingEmojis[tech] ? 'animate-bounce' : ''
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEmojiClick(tech);
                                            }}
                                        >
                                            {emoji}
                                        </span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Additional Two Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend Technologies */}
                    <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-pink-300">Frontend Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {frontendTech.map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-pink-400 hover:bg-pink-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span 
                                            className={`group-hover:scale-110 transition-transform inline-block cursor-pointer ${
                                                animatingEmojis[tech] ? 'animate-bounce' : ''
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEmojiClick(tech);
                                            }}
                                        >
                                            {emoji}
                                        </span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-emerald-300">Backend Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {backendTech.map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-emerald-400 hover:bg-emerald-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span 
                                            className={`group-hover:scale-110 transition-transform inline-block cursor-pointer ${
                                                animatingEmojis[tech] ? 'animate-bounce' : ''
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleEmojiClick(tech);
                                            }}
                                        >
                                            {emoji}
                                        </span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-bounce {
                    animation: bounce 0.6s ease-in-out;
                }
            `}</style>
        </section>
    );
}
