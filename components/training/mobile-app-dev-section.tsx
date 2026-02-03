'use client';

import React, { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Smartphone,
    Code2,
    Zap,
    Users,
    TrendingUp,
    Shield,
    Layers,
    Cpu,
    Database,
    Cloud,
    Lock,
} from 'lucide-react';

export function MobileAppDevSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const mobileDevAreas = [
        {
            id: 'frontend',
            icon: <Code2 className="w-8 h-8" />,
            title: 'Frontend Development',
            description: 'Master React, Next.js, Vue, and Angular to build dynamic, responsive web applications with modern JavaScript frameworks',
            emoji: '⚛️',
            topics: [
                'React 19 & Next.js 15',
                'Vue.js & Angular Frameworks',
                'TypeScript Advanced Patterns',
                'State Management (Redux, Context)',
                'Component Design Systems',
                'Performance Optimization',
            ],
            highlights: ['20+ projects included', 'Industry mentorship', 'Portfolio building'],
        },
        {
            id: 'backend',
            icon: <Layers className="w-8 h-8" />,
            title: 'Backend Development',
            description: 'Build scalable backend systems using Node.js, Python, and modern databases with REST APIs and GraphQL',
            emoji: '🔗',
            topics: [
                'Node.js & Express',
                'Python Django & FastAPI',
                'Database Design (PostgreSQL, MongoDB)',
                'RESTful APIs & GraphQL',
                'Authentication & Authorization',
                'Microservices Architecture',
            ],
            highlights: ['Real-world APIs', 'Database mastery', 'Scalability focus'],
        },
        {
            id: 'mobile',
            icon: <Smartphone className="w-8 h-8" />,
            title: 'Mobile App Development',
            description: 'Develop native and cross-platform mobile apps for iOS and Android using Swift, Kotlin, React Native, and Flutter',
            emoji: '📱',
            topics: [
                'iOS Development (Swift)',
                'Android Development (Kotlin)',
                'React Native & Flutter',
                'Mobile UI/UX Design',
                'App Store Deployment',
                'Performance & Security',
            ],
            highlights: ['Multi-platform', 'App deployment', 'Native integration'],
        },
        {
            id: 'fullstack',
            icon: <Cpu className="w-8 h-8" />,
            title: 'Full-Stack Development',
            description: 'Become a complete developer mastering both frontend and backend technologies with cloud infrastructure integration',
            emoji: '🚀',
            topics: [
                'Frontend Frameworks',
                'Backend Development',
                'Database Management',
                'Cloud Services (AWS, Azure)',
                'DevOps & CI/CD',
                'System Design & Architecture',
            ],
            highlights: ['End-to-end projects', 'Cloud deployment', 'Career advancement'],
        },
        {
            id: 'devops',
            icon: <Cloud className="w-8 h-8" />,
            title: 'DevOps & Cloud Engineering',
            description: 'Master containerization, orchestration, and cloud platforms to deploy and manage scalable applications',
            emoji: '🐳',
            topics: [
                'Docker & Kubernetes',
                'AWS, Azure & GCP',
                'CI/CD Pipelines',
                'Infrastructure as Code',
                'Monitoring & Logging',
                'Security Best Practices',
            ],
            highlights: ['Enterprise tools', 'Infrastructure focus', 'Demand-high'],
        },
        {
            id: 'security',
            icon: <Lock className="w-8 h-8" />,
            title: 'Cybersecurity & Compliance',
            description: 'Learn to secure applications against vulnerabilities and implement enterprise security protocols for data protection',
            emoji: '🔐',
            topics: [
                'Application Security',
                'OAuth 2.0 & JWT',
                'Data Encryption',
                'OWASP Top 10',
                'Penetration Testing',
                'Compliance (GDPR, HIPAA)',
            ],
            highlights: ['Security audits', 'Compliance expertise', 'Premium salaries'],
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-slate-900/20 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
                        Comprehensive Training
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Professional Development Tracks
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Master modern development with training in frontend, backend, mobile, full-stack, DevOps, and cybersecurity disciplines
                    </p>
                </div>

                {/* Main Grid - 2x3 layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {mobileDevAreas.map((area) => (
                        <div
                            key={area.id}
                            onMouseEnter={() => setHoveredId(area.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`relative h-full rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer ${hoveredId === area.id
                                ? 'bg-gradient-to-br from-lime-500/10 to-green-500/10 border-lime-400/60 shadow-lg shadow-lime-500/20'
                                : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/70'
                                } border`}
                        >
                            {/* Animated background gradient */}
                            <div
                                className={`absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-lime-500/5 to-green-500/5 ${hoveredId === area.id ? 'opacity-100' : ''
                                    }`}
                            />

                            {/* Glowing border effect */}
                            <div
                                className={`absolute -inset-0.5 opacity-0 transition-opacity duration-300 rounded-xl blur bg-gradient-to-r from-lime-400 to-green-500 ${hoveredId === area.id ? 'opacity-30' : ''
                                    }`}
                                style={{ filter: 'blur(8px)' }}
                            />

                            <Card className="relative z-10 h-full bg-transparent border-0 shadow-none flex flex-col">
                                {/* Icon Container */}
                                <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                    <div className={`text-7xl transition-transform duration-300 ${hoveredId === area.id ? 'scale-110' : 'scale-100'
                                        }`}>
                                        {area.emoji}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                </div>

                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className={`transition-all duration-300 ${hoveredId === area.id
                                                ? 'text-lime-300 scale-110'
                                                : 'text-lime-400 scale-100'
                                                }`}
                                        >
                                            {area.icon}
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={`text-xs transition-colors duration-300 ${hoveredId === area.id
                                                ? 'bg-lime-500/10 text-lime-300 border-lime-500/30'
                                                : 'bg-slate-700/50 text-gray-300 border-slate-600'
                                                }`}
                                        >
                                            Course Track
                                        </Badge>
                                    </div>
                                    <CardTitle
                                        className={`text-xl transition-colors duration-300 ${hoveredId === area.id ? 'text-lime-300' : 'text-white'
                                            }`}
                                    >
                                        {area.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <p
                                        className={`text-sm transition-colors duration-300 ${hoveredId === area.id ? 'text-gray-300' : 'text-gray-400'
                                            }`}
                                    >
                                        {area.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2">
                                        {area.highlights.map((highlight, idx) => (
                                            <Badge
                                                key={idx}
                                                className={`text-xs transition-all duration-300 ${hoveredId === area.id
                                                    ? 'bg-lime-500/20 text-lime-200 border-lime-500/40'
                                                    : 'bg-lime-500/10 text-lime-300 border-lime-500/20'
                                                    }`}
                                                variant="outline"
                                            >
                                                {highlight}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="space-y-2 flex-grow">
                                        <p
                                            className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${hoveredId === area.id ? 'text-lime-300' : 'text-gray-300'
                                                }`}
                                        >
                                            Topics Covered
                                        </p>
                                        <ul className="space-y-2">
                                            {area.topics.map((topic, idx) => (
                                                <li
                                                    key={idx}
                                                    className={`flex items-center gap-2 text-sm transition-colors duration-300 ${hoveredId === area.id ? 'text-gray-300' : 'text-gray-400'
                                                        }`}
                                                >
                                                    <span
                                                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hoveredId === area.id ? 'bg-lime-300' : 'bg-lime-400/50'
                                                            }`}
                                                    />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
