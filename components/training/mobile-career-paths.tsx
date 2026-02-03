'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Briefcase, Target } from 'lucide-react';

export function MobileCareerPaths() {
    const careerPaths = [
        {
            title: 'Frontend Engineer',
            demand: 'Very High',
            description: 'Specialize in building interactive web interfaces with modern JavaScript frameworks',
            jobMarket: 'Hot Demand',
            responsibilities: [
                'Develop responsive web applications',
                'Implement modern UI frameworks',
                'Optimize performance and user experience',
                'Collaborate with designers and backend teams',
                'Test and debug frontend code',
            ],
            nextSteps: ['Senior Frontend Engineer', 'Tech Lead', 'Engineering Manager'],
        },
        {
            title: 'Backend Engineer',
            demand: 'Very High',
            description: 'Create robust backend systems using Node.js, Python with modern databases and APIs',
            jobMarket: 'Hot Demand',
            responsibilities: [
                'Build scalable backend systems',
                'Design and manage databases',
                'Develop REST APIs and GraphQL',
                'Implement authentication and security',
                'Conduct testing and monitoring',
            ],
            nextSteps: ['Senior Backend Engineer', 'Engineering Manager', 'Architect'],
        },
        {
            title: 'Full-Stack Developer',
            demand: 'High',
            description: 'Develop complete applications from frontend to backend with cloud integration',
            jobMarket: 'Premium Demand',
            responsibilities: [
                'Build complete web applications',
                'Manage frontend and backend development',
                'Design database schemas',
                'Implement end-to-end solutions',
                'Deploy and maintain applications',
            ],
            nextSteps: ['Senior Full-Stack Developer', 'Tech Lead', 'CTO'],
        },
        {
            title: 'Mobile Developer',
            demand: 'High',
            description: 'Create native and cross-platform mobile applications for iOS and Android',
            jobMarket: 'Growing Demand',
            responsibilities: [
                'Develop native mobile apps',
                'Build cross-platform applications',
                'Optimize app performance',
                'Integrate with backend services',
                'Publish to app stores',
            ],
            nextSteps: ['Senior Mobile Developer', 'Mobile Architect', 'Technical Lead'],
        },
        {
            title: 'DevOps Engineer',
            demand: 'High',
            description: 'Manage infrastructure and deploy applications using Docker, Kubernetes, and cloud platforms',
            jobMarket: 'Premium Demand',
            responsibilities: [
                'Design infrastructure solutions',
                'Implement CI/CD pipelines',
                'Manage containerization and orchestration',
                'Monitor and maintain systems',
                'Ensure reliability and security',
            ],
            nextSteps: ['Senior DevOps Engineer', 'Infrastructure Architect', 'Engineering Manager'],
        },
        {
            title: 'Security Engineer',
            demand: 'Medium-High',
            description: 'Protect applications and infrastructure against threats and ensure compliance standards',
            jobMarket: 'Specialized Demand',
            responsibilities: [
                'Conduct security audits',
                'Implement encryption protocols',
                'Test for vulnerabilities',
                'Ensure compliance requirements',
                'Document security practices',
            ],
            nextSteps: ['Security Architect', 'CISO', 'Compliance Officer'],
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-slate-900/20 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
                        Career Opportunities
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        High-Demand Tech Careers
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore in-demand technology careers with competitive salaries, growth opportunities, and remote work options
                    </p>
                </div>

                {/* Career Paths Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {careerPaths.map((path, index) => (
                        <Card
                            key={index}
                            className="bg-slate-900/50 border-slate-800 hover:border-lime-400/50 transition-all duration-300"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl mb-2">{path.title}</CardTitle>
                                <p className="text-xs text-gray-400 mb-3">{path.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
    
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-xs font-semibold">{path.demand} Demand</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-purple-400">
                                        <Target className="w-4 h-4" />
                                        <span className="text-xs font-semibold">{path.jobMarket}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                                        Key Responsibilities
                                    </p>
                                    <ul className="space-y-2">
                                        {path.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-lime-400/50 mt-1.5 flex-shrink-0" />
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                                        Growth Opportunities
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {path.nextSteps.map((step, idx) => (
                                            <Badge key={idx} variant="outline" className="text-xs bg-slate-800 text-lime-300">
                                                {step}
                                            </Badge>
                                        ))}
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
