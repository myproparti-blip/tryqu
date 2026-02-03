'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Users } from 'lucide-react';

export function MobileSpecializations() {
    const specializations = [
        {
            title: 'Frontend Engineer',
            level: 'Intermediate',
            duration: '12 weeks',
            emoji: '⚛️',
            description: 'Master modern frontend frameworks and build interactive user interfaces',
            students: 4200,
            skills: [
                'React 19 & Next.js Mastery',
                'Vue.js & Angular Frameworks',
                'TypeScript Advanced Patterns',
                'State Management Solutions',
                'Testing & Debugging',
                'Performance Optimization',
                'CSS-in-JS & Tailwind',
                'Responsive Design',
            ],
        },
        {
            title: 'Backend Engineer',
            level: 'Intermediate',
            duration: '14 weeks',
            emoji: '🟢',
            description: 'Build scalable backend systems with modern frameworks and databases',
            students: 3800,
            skills: [
                'Node.js & Express Advanced',
                'Python Django & FastAPI',
                'PostgreSQL & MongoDB Mastery',
                'RESTful APIs & GraphQL',
                'Authentication & Security',
                'Database Optimization',
                'Caching Strategies',
                'API Documentation',
            ],
        },
        {
            title: 'Full-Stack Developer',
            level: 'Advanced',
            duration: '18 weeks',
            emoji: '🚀',
            description: 'Master complete application development from frontend to backend',
            students: 3200,
            skills: [
                'Frontend Framework Expertise',
                'Backend Development',
                'Database Design',
                'Cloud Integration',
                'DevOps Fundamentals',
                'System Architecture',
                'Testing Strategies',
                'Deployment Pipelines',
            ],
        },
        {
            title: 'Mobile App Developer',
            level: 'Advanced',
            duration: '16 weeks',
            emoji: '📱',
            description: 'Develop native and cross-platform mobile applications',
            students: 2900,
            skills: [
                'iOS & Android Development',
                'React Native & Flutter',
                'Mobile UI/UX Design',
                'App Store Publishing',
                'Performance Optimization',
                'Push Notifications',
                'Offline Capabilities',
                'Security Best Practices',
            ],
        },
        {
            title: 'DevOps Engineer',
            level: 'Advanced',
            duration: '12 weeks',
            emoji: '☸️',
            description: 'Master containerization, orchestration, and cloud deployment',
            students: 2100,
            skills: [
                'Docker & Kubernetes Mastery',
                'AWS, Azure & GCP',
                'CI/CD Pipeline Design',
                'Infrastructure as Code',
                'Monitoring & Logging',
                'Disaster Recovery',
                'Automation Scripts',
                'Cloud Architecture',
            ],
        },
        {
            title: 'Security Engineer',
            level: 'Expert',
            duration: '14 weeks',
            emoji: '🔐',
            description: 'Protect applications with enterprise-grade security practices',
            students: 1400,
            skills: [
                'Secure Coding Practices',
                'Cryptography & Hashing',
                'OAuth & JWT',
                'Vulnerability Assessment',
                'Penetration Testing',
                'OWASP Standards',
                'Compliance (GDPR, HIPAA)',
                'Security Auditing',
            ],
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
                        Specialization Paths
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Tech Career Specializations
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Choose your specialization path and master industry-demanded skills to build a successful technology career
                    </p>
                </div>

                {/* Specializations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specializations.map((spec, index) => (
                        <Card
                            key={index}
                            className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-800 hover:border-lime-400/50 transition-all duration-300 group overflow-hidden"
                        >
                            {/* Icon Container */}
                            <div className="relative w-full h-36 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                <div className="text-6xl group-hover:scale-105 transition-transform duration-300">
                                    {spec.emoji}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />
                            </div>

                            <CardHeader>
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <CardTitle className="text-xl mb-2">{spec.title}</CardTitle>
                                        <p className="text-xs text-gray-400 mb-3">{spec.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                                                {spec.level}
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {spec.duration}
                                            </Badge>

                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-2 text-xs text-gray-400 pb-3 border-b border-slate-700">
                                    <Users className="w-3 h-3 text-lime-400" />
                                    <span>{spec.students.toLocaleString()} students enrolled</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
                                            Core Skills
                                        </p>
                                        <ul className="space-y-2 max-h-64 overflow-y-auto">
                                            {spec.skills.map((skill, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                                    <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0" />
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
