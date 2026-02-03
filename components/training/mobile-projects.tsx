'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Award, GitBranch } from 'lucide-react';

export function MobileProjects() {
    const projects = [
        {
            difficulty: 'Beginner',
            color: 'bg-green-500/20 text-green-300 border-green-500/30',
            projects: [
                {
                    title: 'To-Do List Application',
                    description: 'Simple task management app with local storage',
                    emoji: '✅',
                    skills: ['UI Basics', 'Local Storage', 'List Management'],
                },
                {
                    title: 'Weather App',
                    description: 'Fetch and display weather data from API',
                    emoji: '⛅',
                    skills: ['API Integration', 'JSON Parsing', 'UI Design'],
                },
                {
                    title: 'Calculator App',
                    description: 'Build a functional calculator with basic operations',
                    emoji: '🧮',
                    skills: ['State Management', 'User Input', 'Calculation Logic'],
                },
            ],
        },
        {
            difficulty: 'Intermediate',
            color: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            projects: [
                {
                    title: 'Social Media Feed',
                    description: 'Dynamic feed with infinite scroll and user interactions',
                    emoji: '📱',
                    skills: ['Data Binding', 'Pagination', 'User Authentication'],
                },
                {
                    title: 'E-Commerce App',
                    description: 'Shopping cart with product filtering and checkout',
                    emoji: '🛒',
                    skills: ['Shopping Cart', 'Payment Integration', 'Database'],
                },
                {
                    title: 'Real-time Chat Application',
                    description: 'Messaging app with real-time notifications',
                    emoji: '💬',
                    skills: ['WebSocket', 'Push Notifications', 'Database Design'],
                },
            ],
        },
        {
            difficulty: 'Advanced',
            color: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            projects: [
                {
                    title: 'Ride Sharing App',
                    description: 'Complete platform with maps, payments, and real-time tracking',
                    emoji: '🚗',
                    skills: ['Geolocation', 'Maps API', 'Real-time Database', 'Payment Gateway'],
                },
                {
                    title: 'Video Streaming Platform',
                    description: 'Streaming service with content management and analytics',
                    emoji: '🎬',
                    skills: ['Video Codec', 'CDN Integration', 'Analytics', 'Security'],
                },
                {
                    title: 'AR Shopping Experience',
                    description: 'Augmented reality app for virtual product try-on',
                    emoji: '🎮',
                    skills: ['AR Kit', 'Camera Integration', 'Machine Learning', '3D Rendering'],
                },
            ],
        },
    ];

    return (
        <section className="w-full py-20 px-4 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
                        Capstone Projects
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Build Production-Ready Applications
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Build progressive real-world projects from ideation to deployment, creating a professional portfolio of applications
                    </p>
                </div>

                {/* Projects by Difficulty */}
                <div className="space-y-12">
                    {projects.map((level, levelIdx) => (
                        <div key={levelIdx}>
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-6 h-6 text-lime-400" />
                                <h3 className="text-2xl font-bold">{level.difficulty} Level</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {level.projects.map((project, projIdx) => (
                                    <Card
                                        key={projIdx}
                                        className="bg-slate-900/50 border-slate-800 hover:border-lime-400/50 transition-all duration-300 group overflow-hidden"
                                    >
                                        {/* Icon Container */}
                                        <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                            <div className="text-6xl group-hover:scale-105 transition-transform duration-300">
                                                {project.emoji}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                        </div>

                                        <CardHeader>
                                            <Badge
                                                className={`w-fit mb-2 text-xs ${level.color}`}
                                                variant="outline"
                                            >
                                                {level.difficulty}
                                            </Badge>
                                            <CardTitle className="text-lg">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-sm text-gray-400">{project.description}</p>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                                                    Key Skills
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.skills.map((skill, idx) => (
                                                        <Badge
                                                            key={idx}
                                                            variant="secondary"
                                                            className="text-xs bg-slate-800 text-gray-300"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
