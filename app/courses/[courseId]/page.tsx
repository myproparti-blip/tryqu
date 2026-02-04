'use client';

import React, { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { CTAExpertSection } from '@/components/cta-expert-section';
import Link from 'next/link';
import { ChevronLeft, Star, Users, BookOpen, Clock, Award, CheckCircle, Play, FileText, Code } from 'lucide-react';

// Course data structure
const coursesDatabase: Record<string, any> = {
    '1': {
        id: 1,
        title: 'React Advanced Mastery',
        category: 'Frontend Development',
        instructor: 'Alex Chen',
        icon: '⚛️',
        badge: '🔥 Trending',
        description: 'Master advanced React patterns with hooks, context, optimization techniques, and modern best practices for scalable apps.',
        fullDescription: 'Dive deep into advanced React concepts and patterns. This comprehensive course covers React hooks, context API, performance optimization, testing strategies, and best practices for building scalable, maintainable applications.',
        stats: { students: 12450, rating: 4.96, modules: 28 },
        duration: '42 hours',
        level: 'Advanced',
        highlights: [
            'Master React Hooks and Custom Hooks',
            'Advanced State Management Patterns',
            'Performance Optimization Techniques',
            'Testing React Applications',
            'Building Reusable Components',
            'Context API Deep Dive',
            'Error Handling & Debugging',
            'Production-Ready Patterns'
        ],
        curriculum: [
            {
                section: 'Module 1: React Fundamentals Deep Dive',
                lessons: ['JSX Advanced Patterns', 'Component Lifecycle', 'Props & State Management', 'Event Handling'],
                duration: '4 hours'
            },
            {
                section: 'Module 2: Hooks & Custom Hooks',
                lessons: ['useState & useEffect', 'useContext & useReducer', 'Custom Hooks Pattern', 'Performance Optimization with Hooks'],
                duration: '6 hours'
            },
            {
                section: 'Module 3: Advanced State Management',
                lessons: ['Context API Patterns', 'Redux Basics to Advanced', 'Zustand Integration', 'State Management Best Practices'],
                duration: '8 hours'
            },
            {
                section: 'Module 4: Performance & Optimization',
                lessons: ['Code Splitting', 'Lazy Loading', 'Memoization Techniques', 'Bundle Analysis'],
                duration: '5 hours'
            },
            {
                section: 'Module 5: Testing & Debugging',
                lessons: ['Jest Testing', 'React Testing Library', 'Debugging Tools', 'E2E Testing'],
                duration: '7 hours'
            },
            {
                section: 'Module 6: Real-World Projects',
                lessons: ['Build a Dashboard App', 'Social Media Clone', 'E-Commerce Platform', 'Capstone Project'],
                duration: '12 hours'
            }
        ],
        requirements: [
            'Basic JavaScript knowledge',
            'Familiarity with HTML & CSS',
            'Understanding of ES6+',
            'Node.js installed'
        ],
        outcomes: [
            'Build complex React applications',
            'Implement advanced patterns and best practices',
            'Optimize performance',
            'Write testable code',
            'Deploy production-ready apps'
        ]
    },
    '2': {
        id: 2,
        title: 'Next.js 15 Full Stack',
        category: 'Full-Stack Development',
        instructor: 'Sarah Williams',
        icon: '▲',
        badge: '⭐ NEW',
        description: 'Master Next.js 15 with App Router, Server & Client Components, API routes, and production deployment strategies.',
        fullDescription: 'Become a full-stack developer with Next.js 15. Learn server-side rendering, API development, database integration, authentication, and deployment on modern platforms.',
        stats: { students: 9876, rating: 4.94, modules: 24 },
        duration: '48 hours',
        level: 'Intermediate to Advanced',
        highlights: [
            'Next.js 15 App Router Mastery',
            'Server Components & Actions',
            'API Route Development',
            'Database Integration (PostgreSQL, MongoDB)',
            'Authentication & Authorization',
            'Real-time Features with WebSockets',
            'Performance Optimization',
            'Deployment & DevOps'
        ],
        curriculum: [
            {
                section: 'Module 1: Next.js 15 Fundamentals',
                lessons: ['Project Setup', 'File-based Routing', 'Pages & Layouts', 'Dynamic Routes'],
                duration: '5 hours'
            },
            {
                section: 'Module 2: Server & Client Components',
                lessons: ['Server Components', 'Client Components', 'Data Fetching', 'Streaming'],
                duration: '7 hours'
            },
            {
                section: 'Module 3: API Development',
                lessons: ['Route Handlers', 'Middleware', 'Request/Response', 'Error Handling'],
                duration: '6 hours'
            },
            {
                section: 'Module 4: Database Integration',
                lessons: ['PostgreSQL Setup', 'MongoDB Integration', 'ORM/ODM', 'Data Validation'],
                duration: '8 hours'
            },
            {
                section: 'Module 5: Authentication & Security',
                lessons: ['NextAuth.js', 'JWT Tokens', 'OAuth Integration', 'Security Best Practices'],
                duration: '7 hours'
            },
            {
                section: 'Module 6: Deployment & Production',
                lessons: ['Vercel Deployment', 'Docker Containerization', 'Environment Variables', 'Monitoring'],
                duration: '8 hours'
            }
        ],
        requirements: [
            'React knowledge',
            'JavaScript ES6+ proficiency',
            'Basic understanding of HTTP',
            'Node.js and npm installed'
        ],
        outcomes: [
            'Build full-stack applications with Next.js',
            'Develop robust APIs',
            'Implement authentication',
            'Deploy to production',
            'Understand server-side rendering'
        ]
    },
    '3': {
        id: 3,
        title: 'Advanced TypeScript',
        category: 'Programming Languages',
        instructor: 'Michael Johnson',
        icon: '📘',
        badge: '💎 Premium',
        description: 'Deep dive into TypeScript generics, advanced types, decorators, and enterprise-level type-safe development patterns.',
        fullDescription: 'Master TypeScript to write safer, more maintainable code. This course covers advanced types, generics, decorators, and patterns used in enterprise applications.',
        stats: { students: 15234, rating: 4.92, modules: 22 },
        duration: '38 hours',
        level: 'Advanced',
        highlights: [
            'Advanced Type System',
            'Generics & Constraints',
            'Decorators & Metadata',
            'Type Guards & Narrowing',
            'Utility Types',
            'Module System',
            'Testing with TypeScript',
            'Enterprise Patterns'
        ],
        curriculum: [
            {
                section: 'Module 1: TypeScript Basics Review',
                lessons: ['Type Annotations', 'Interfaces & Types', 'Union & Intersection', 'Type Inference'],
                duration: '4 hours'
            },
            {
                section: 'Module 2: Advanced Types',
                lessons: ['Conditional Types', 'Mapped Types', 'Template Literal Types', 'Advanced Patterns'],
                duration: '6 hours'
            },
            {
                section: 'Module 3: Generics Deep Dive',
                lessons: ['Generic Functions', 'Generic Classes', 'Generic Constraints', 'Advanced Scenarios'],
                duration: '6 hours'
            },
            {
                section: 'Module 4: Decorators & Metadata',
                lessons: ['Decorator Basics', 'Metadata Reflection', 'IoC Containers', 'NestJS Integration'],
                duration: '7 hours'
            },
            {
                section: 'Module 5: Testing & Tooling',
                lessons: ['Testing Setup', 'Type Testing', 'Linting Configuration', 'Build Tools'],
                duration: '5 hours'
            },
            {
                section: 'Module 6: Real-World Applications',
                lessons: ['Enterprise Patterns', 'Large Codebase Management', 'Type Safety Best Practices', 'Performance Tips'],
                duration: '4 hours'
            }
        ],
        requirements: [
            'Solid JavaScript knowledge',
            'Understanding of basic TypeScript',
            'Familiarity with OOP concepts',
            'Node.js environment'
        ],
        outcomes: [
            'Master advanced TypeScript features',
            'Write type-safe applications',
            'Implement enterprise patterns',
            'Debug type issues effectively',
            'Lead type-safe projects'
        ]
    },
    '4': {
        id: 4,
        title: 'Web Performance & Core Web Vitals',
        category: 'Performance & DevOps',
        instructor: 'Emma Wilson',
        icon: '⚡',
        badge: '⚡ Best Seller',
        description: 'Optimize applications for speed, Core Web Vitals, image optimization, caching strategies, and performance monitoring.',
        fullDescription: 'Learn to build lightning-fast web applications. Master performance optimization techniques, Core Web Vitals, monitoring tools, and best practices.',
        stats: { students: 18765, rating: 4.93, modules: 25 },
        duration: '40 hours',
        level: 'Intermediate',
        highlights: [
            'Core Web Vitals Optimization',
            'Image & Asset Optimization',
            'Caching Strategies',
            'Code Splitting & Lazy Loading',
            'Monitoring & Analytics',
            'CDN Integration',
            'Performance Budgeting',
            'Real-world Case Studies'
        ],
        curriculum: [
            {
                section: 'Module 1: Web Performance Fundamentals',
                lessons: ['Performance Metrics', 'Browser DevTools', 'Lighthouse', 'WebPageTest'],
                duration: '4 hours'
            },
            {
                section: 'Module 2: Core Web Vitals',
                lessons: ['LCP Optimization', 'FID & INP', 'CLS Prevention', 'Measuring Vitals'],
                duration: '6 hours'
            },
            {
                section: 'Module 3: Asset Optimization',
                lessons: ['Image Optimization', 'Video Compression', 'Font Loading', 'CSS/JS Minification'],
                duration: '7 hours'
            },
            {
                section: 'Module 4: Advanced Techniques',
                lessons: ['Code Splitting', 'Lazy Loading', 'Service Workers', 'HTTP/2 & HTTP/3'],
                duration: '8 hours'
            },
            {
                section: 'Module 5: Monitoring & Analytics',
                lessons: ['Google Analytics', 'Custom Metrics', 'Error Tracking', 'User Experience Monitoring'],
                duration: '6 hours'
            },
            {
                section: 'Module 6: Case Studies & Projects',
                lessons: ['Real-world Optimization', 'Before/After Analysis', 'Performance Budgets', 'Capstone Project'],
                duration: '9 hours'
            }
        ],
        requirements: [
            'Basic web development knowledge',
            'HTML, CSS, JavaScript proficiency',
            'Understanding of HTTP',
            'Browser development tools familiarity'
        ],
        outcomes: [
            'Identify performance bottlenecks',
            'Implement optimization strategies',
            'Achieve excellent Core Web Vitals',
            'Monitor application performance',
            'Build high-performance applications'
        ]
    },
    '5': {
        id: 5,
        title: 'Full-Stack Development with Node.js',
        category: 'Full-Stack Development',
        instructor: 'Jordan Davis',
        icon: '🚀',
        badge: '🚀 Hot',
        description: 'Build scalable applications with Node.js, Express, databases, APIs, authentication, and production deployment.',
        fullDescription: 'Master backend development with Node.js. Create robust APIs, handle databases, implement authentication, and deploy production applications.',
        stats: { students: 14320, rating: 4.91, modules: 30 },
        duration: '50 hours',
        level: 'Intermediate',
        price: '$109',
        highlights: [
            'Node.js & Express Mastery',
            'RESTful API Design',
            'Database Design & Management',
            'Authentication & Security',
            'Error Handling & Logging',
            'Scalable Architecture',
            'Deployment & DevOps',
            'Real-time Applications'
        ],
        curriculum: [
            {
                section: 'Module 1: Node.js Fundamentals',
                lessons: ['Node.js Architecture', 'Event Loop', 'Modules & NPM', 'File System Operations'],
                duration: '4 hours'
            },
            {
                section: 'Module 2: Express Framework',
                lessons: ['Routing', 'Middleware', 'Request/Response', 'Error Handling'],
                duration: '6 hours'
            },
            {
                section: 'Module 3: Database Integration',
                lessons: ['SQL Databases', 'NoSQL Databases', 'ORMs & Query Builders', 'Migrations'],
                duration: '8 hours'
            },
            {
                section: 'Module 4: Authentication & Security',
                lessons: ['JWT Tokens', 'Passwords & Hashing', 'CORS & CSRF', 'Rate Limiting'],
                duration: '7 hours'
            },
            {
                section: 'Module 5: Advanced Topics',
                lessons: ['Caching Strategies', 'Message Queues', 'WebSockets', 'Microservices'],
                duration: '10 hours'
            },
            {
                section: 'Module 6: Deployment & Operations',
                lessons: ['Docker & Containers', 'CI/CD Pipelines', 'Monitoring & Logging', 'Scaling Strategies'],
                duration: '10 hours'
            }
        ],
        requirements: [
            'JavaScript proficiency',
            'Basic database knowledge',
            'Understanding of HTTP/REST',
            'Command line experience'
        ],
        outcomes: [
            'Build production-ready APIs',
            'Design scalable databases',
            'Implement security best practices',
            'Deploy and monitor applications',
            'Architect backend systems'
        ]
    },
    '6': {
        id: 6,
        title: 'Backend Development & Databases',
        category: 'Data & Databases',
        instructor: 'David Lee',
        icon: '🐘',
        badge: '📚 Comprehensive',
        description: 'Master SQL, NoSQL, database design, optimization, API development, and cloud database services with real projects.',
        fullDescription: 'Become a database expert. Learn SQL, NoSQL, database design patterns, optimization, indexing, and integration with applications.',
        stats: { students: 11890, rating: 4.90, modules: 26 },
        duration: '45 hours',
        level: 'Intermediate to Advanced',
        price: '$99',
        highlights: [
            'SQL Mastery',
            'NoSQL Databases',
            'Database Design & Normalization',
            'Query Optimization',
            'Indexing Strategies',
            'Transactions & ACID',
            'Backup & Recovery',
            'Cloud Databases'
        ],
        curriculum: [
            {
                section: 'Module 1: SQL Fundamentals',
                lessons: ['DDL & DML', 'Queries & Joins', 'Subqueries', 'Aggregate Functions'],
                duration: '5 hours'
            },
            {
                section: 'Module 2: Advanced SQL',
                lessons: ['Window Functions', 'CTEs', 'Complex Joins', 'Performance Tuning'],
                duration: '7 hours'
            },
            {
                section: 'Module 3: Database Design',
                lessons: ['ER Models', 'Normalization', 'Relationships', 'Schema Design'],
                duration: '6 hours'
            },
            {
                section: 'Module 4: NoSQL Databases',
                lessons: ['MongoDB Basics', 'Document Databases', 'Key-Value Stores', 'Graph Databases'],
                duration: '8 hours'
            },
            {
                section: 'Module 5: Optimization & Performance',
                lessons: ['Indexing', 'Query Optimization', 'Caching', 'Scaling Databases'],
                duration: '8 hours'
            },
            {
                section: 'Module 6: Real-World Projects',
                lessons: ['E-Commerce Database', 'Analytics Platform', 'Social Media DB', 'Capstone Project'],
                duration: '11 hours'
            }
        ],
        requirements: [
            'Basic SQL knowledge helpful',
            'Programming experience',
            'Understanding of data structures',
            'Patience for optimization details'
        ],
        outcomes: [
            'Design efficient databases',
            'Write optimized queries',
            'Implement indexing strategies',
            'Manage large datasets',
            'Choose appropriate database solutions'
        ]
    }
};

interface CourseDetailsPageProps {
    params: {
        courseId: string;
    };
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
    const course = coursesDatabase[params.courseId];
    const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'requirements'>('overview');

    if (!course) {
        return (
            <div className="min-h-screen bg-black text-white">
                <SiteHeader />
                <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                        <Link href="/training" className="text-cyan-400 hover:text-cyan-300">
                            Back to Training
                        </Link>
                    </div>
                </div>
                <AppverseFooter />
            </div>
        );
    }

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/training"
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back to Training
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                {/* Badge */}
                                <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
                                    {course.badge}
                                </div>

                                {/* Title */}
                                <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                                    {course.title}
                                </h1>

                                {/* Description */}
                                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                    {course.fullDescription}
                                </p>

                                {/* Instructor Info */}
                                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl font-bold">
                                        {course.instructor[0]}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">Instructor</p>
                                        <p className="text-slate-400">{course.instructor}</p>
                                    </div>
                                </div>

                                {/* Key Stats */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star className="w-5 h-5 text-yellow-400" />
                                            <span className="text-white font-bold">{course.stats.rating}</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Rating</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5 text-cyan-400" />
                                            <span className="text-white font-bold">{(course.stats.students / 1000).toFixed(1)}k</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Students</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <BookOpen className="w-5 h-5 text-purple-400" />
                                            <span className="text-white font-bold">{course.stats.modules}</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Modules</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Clock className="w-5 h-5 text-orange-400" />
                                            <span className="text-white font-bold">{course.duration}</span>
                                        </div>
                                        <p className="text-xs text-slate-400">Duration</p>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {course.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                                <span className="text-slate-300">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar - Course Info Card */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
                                    {/* Free Chip Badge */}
                                    <div className="mb-8 flex justify-center">
                                        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold">
                                            💚 100% FREE
                                        </div>
                                    </div>

                                    {/* Course Info Section */}
                                    <div className="space-y-4">
                                         <div className="flex items-center gap-3">
                                             <Award className="w-5 h-5 text-cyan-400" />
                                             <div>
                                                 <p className="text-xs text-slate-400">Level</p>
                                                 <p className="text-white font-semibold">{course.level}</p>
                                             </div>
                                         </div>
                                         <div className="flex items-center gap-3">
                                             <Clock className="w-5 h-5 text-cyan-400" />
                                             <div>
                                                 <p className="text-xs text-slate-400">Duration</p>
                                                 <p className="text-white font-semibold">{course.duration}</p>
                                             </div>
                                         </div>
                                         <div className="flex items-center gap-3">
                                             <BookOpen className="w-5 h-5 text-cyan-400" />
                                             <div>
                                                 <p className="text-xs text-slate-400">Modules</p>
                                                 <p className="text-white font-semibold">{course.stats.modules}</p>
                                             </div>
                                         </div>
                                         <div className="flex items-center gap-3">
                                             <FileText className="w-5 h-5 text-cyan-400" />
                                             <div>
                                                 <p className="text-xs text-slate-400">Certificate</p>
                                                 <p className="text-white font-semibold">Included</p>
                                             </div>
                                         </div>
                                         <div className="flex items-center gap-3">
                                             <Users className="w-5 h-5 text-cyan-400" />
                                             <div>
                                                 <p className="text-xs text-slate-400">Students</p>
                                                 <p className="text-white font-semibold">{(course.stats.students / 1000).toFixed(1)}k+</p>
                                             </div>
                                         </div>
                                     </div>

                                    {/* Divider */}
                                    <div className="my-6 border-t border-white/10"></div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                                         <Star className="w-5 h-5 text-yellow-400" />
                                         <div>
                                             <p className="text-sm text-white font-semibold">{course.stats.rating}/5</p>
                                             <p className="text-xs text-slate-400">Course Rating</p>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
                    <div className="max-w-6xl mx-auto">
                        {/* Tab Navigation */}
                        <div className="flex gap-8 mb-12 border-b border-white/10">
                            {['overview', 'curriculum', 'requirements'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab as any)}
                                    className={`pb-4 font-semibold transition-colors relative ${
                                        activeTab === tab
                                            ? 'text-white'
                                            : 'text-slate-400 hover:text-slate-300'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div>
                            {activeTab === 'overview' && (
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-8">Course Overview</h3>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                            {course.fullDescription}
                                        </p>
                                        <p className="text-slate-400 mb-8">
                                            This comprehensive course is designed for developers who want to master {course.title.toLowerCase()}. 
                                            Throughout {course.duration} of content, you'll learn from industry experts and work on real-world projects.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'curriculum' && (
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-8">Course Curriculum</h3>
                                    <div className="space-y-6">
                                        {course.curriculum.map((module, idx) => (
                                            <div key={idx} className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors">
                                                <div className="flex items-start justify-between mb-4">
                                                    <h4 className="text-lg font-bold text-white flex-1">{module.section}</h4>
                                                    <span className="text-sm text-cyan-400 font-semibold whitespace-nowrap ml-4">{module.duration}</span>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {module.lessons.map((lesson, lessonIdx) => (
                                                        <div key={lessonIdx} className="flex items-center gap-2 text-slate-300">
                                                            <Code className="w-4 h-4 text-cyan-400" />
                                                            {lesson}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'requirements' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">Prerequisites</h3>
                                        <div className="space-y-3">
                                            {course.requirements.map((req, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-300">{req}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-6">Learning Outcomes</h3>
                                        <div className="space-y-3">
                                            {course.outcomes.map((outcome, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                                    <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-slate-300">{outcome}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Master {course.title}?</h3>
                        <p className="text-lg text-slate-300 mb-8">
                            This course is completely free and available to all learners. Start your journey today with {(course.stats.students / 1000).toFixed(1)}k+ satisfied students.
                        </p>
                        <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-base">
                            💚 100% FREE - No Cost, Full Access
                        </div>
                    </div>
                </section>

                <CTAExpertSection />
            </main>
            <AppverseFooter />
        </>
    );
}
