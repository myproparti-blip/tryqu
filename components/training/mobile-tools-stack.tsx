'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Zap } from 'lucide-react';

export function MobileToolsStack() {
    const toolCategories = [
        {
            category: 'IDE & Development',
            tools: [
                { name: 'Xcode', desc: 'Official iOS development environment' },
                { name: 'Android Studio', desc: 'Official Android IDE' },
                { name: 'VS Code', desc: 'Lightweight editor for cross-platform dev' },
                { name: 'IntelliJ IDEA', desc: 'JetBrains IDE for Android' },
            ],
        },
        {
            category: 'Testing & QA',
            tools: [
                { name: 'XCTest', desc: 'iOS native testing framework' },
                { name: 'Espresso', desc: 'Android UI testing' },
                { name: 'Jest', desc: 'JavaScript testing framework' },
                { name: 'Detox', desc: 'E2E testing for React Native' },
            ],
        },
        {
            category: 'Debugging & Monitoring',
            tools: [
                { name: 'LLDB', desc: 'iOS debugger' },
                { name: 'Android Debugger', desc: 'Android debug tool' },
                { name: 'Firebase Console', desc: 'Analytics & crash reporting' },
                { name: 'Sentry', desc: 'Error tracking & monitoring' },
            ],
        },
        {
            category: 'Version Control & CI/CD',
            tools: [
                { name: 'Git', desc: 'Version control system' },
                { name: 'GitHub', desc: 'Repository hosting' },
                { name: 'GitLab CI', desc: 'Continuous integration' },
                { name: 'Fastlane', desc: 'Mobile app automation' },
            ],
        },
        {
            category: 'Backend & APIs',
            tools: [
                { name: 'Firebase', desc: 'Backend as a service' },
                { name: 'AWS Amplify', desc: 'Mobile backend services' },
                { name: 'GraphQL', desc: 'Modern API query language' },
                { name: 'REST APIs', desc: 'Traditional API architecture' },
            ],
        },
        {
            category: 'Design & Prototyping',
            tools: [
                { name: 'Figma', desc: 'Collaborative design tool' },
                { name: 'Adobe XD', desc: 'UI/UX design platform' },
                { name: 'Sketch', desc: 'Digital design tool' },
                { name: 'Zeplin', desc: 'Design collaboration' },
            ],
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-slate-900/20 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
                        Tools & Technologies
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Enterprise Development Stack
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Master industry-standard tools and frameworks used by leading development teams worldwide
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="bg-gradient-to-br from-slate-900/60 to-slate-900/20 border-slate-800 hover:border-lime-400/50 transition-all duration-300 group"
                        >
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center gap-3 text-lg">
                                    <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors">
                                        <Layers className="w-5 h-5 text-lime-400" />
                                    </div>
                                    {category.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {category.tools.map((tool, idx) => (
                                        <div key={idx} className="pb-3 border-b border-slate-800/30 last:pb-0 last:border-0 hover:bg-slate-800/20 p-2 rounded transition-colors">
                                            <p className="font-semibold text-white text-sm">{tool.name}</p>
                                            <p className="text-xs text-gray-400">{tool.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
