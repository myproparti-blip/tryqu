'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

interface FeaturedCourse {
    id: number;
    title: string;
    category: string;
    instructor: string;
    icon: string;
    badge: string;
    description: string;
    stats: {
        students: number;
        rating: number;
        modules: number;
    };
}

const featuredCourses: FeaturedCourse[] = [
    {
        id: 1,
        title: 'React Advanced Mastery',
        category: 'Frontend Development',
        instructor: 'Alex Chen',
        icon: '⚛️',
        badge: '🔥 Trending',
        description: 'Master advanced React patterns with hooks, context, optimization techniques, and modern best practices for scalable apps.',
        stats: { students: 12450, rating: 4.96, modules: 28 },
    },
    {
        id: 2,
        title: 'Next.js 15 Full Stack',
        category: 'Full-Stack Development',
        instructor: 'Sarah Williams',
        icon: '▲',
        badge: '⭐ NEW',
        description: 'Master Next.js 15 with App Router, Server & Client Components, API routes, and production deployment strategies.',
        stats: { students: 9876, rating: 4.94, modules: 24 },
    },
    {
        id: 3,
        title: 'Advanced TypeScript',
        category: 'Programming Languages',
        instructor: 'Michael Johnson',
        icon: '📘',
        badge: '💎 Premium',
        description: 'Deep dive into TypeScript generics, advanced types, decorators, and enterprise-level type-safe development patterns.',
        stats: { students: 15234, rating: 4.92, modules: 22 },
    },
    {
        id: 4,
        title: 'Web Performance & Core Web Vitals',
        category: 'Performance & DevOps',
        instructor: 'Emma Wilson',
        icon: '⚡',
        badge: '⚡ Best Seller',
        description: 'Optimize applications for speed, Core Web Vitals, image optimization, caching strategies, and performance monitoring.',
        stats: { students: 18765, rating: 4.93, modules: 25 },
    },
    {
        id: 5,
        title: 'Full-Stack Development with Node.js',
        category: 'Full-Stack Development',
        instructor: 'Jordan Davis',
        icon: '🚀',
        badge: '🚀 Hot',
        description: 'Build scalable applications with Node.js, Express, databases, APIs, authentication, and production deployment.',
        stats: { students: 14320, rating: 4.91, modules: 30 },
    },
    {
        id: 6,
        title: 'Backend Development & Databases',
        category: 'Data & Databases',
        instructor: 'David Lee',
        icon: '🐘',
        badge: '📚 Comprehensive',
        description: 'Master SQL, NoSQL, database design, optimization, API development, and cloud database services with real projects.',
        stats: { students: 11890, rating: 4.90, modules: 26 },
    },
];

export function FeaturedCoursesCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 400;
        const newScrollLeft =
            scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);

        scrollContainerRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
        });

        setTimeout(checkScroll, 100);
    };

    const handleScroll = () => {
        checkScroll();
        if (scrollContainerRef.current) {
            const scrollPosition = scrollContainerRef.current.scrollLeft;
            const cardWidth = 320;
            const newIndex = Math.round(scrollPosition / cardWidth);
            setActiveIndex(Math.min(newIndex, featuredCourses.length - 1));
        }
    };

    return (
        <section className="relative py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                            <span className="text-sm font-black uppercase tracking-widest text-cyan-400">Featured Courses</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                            Trending <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Learning Paths</span>
                        </h2>
                        <p className="text-slate-400 mt-3">Handpicked courses from our most popular instructors</p>
                    </div>

                    {/* Scroll Controls */}
                    <div className="flex gap-3 flex-shrink-0">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`p-3 rounded-full transition-all duration-300 border ${canScrollLeft
                                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40'
                                    : 'bg-white/5 text-slate-500 border-white/10 cursor-not-allowed'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`p-3 rounded-full transition-all duration-300 border ${canScrollRight
                                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40'
                                    : 'bg-white/5 text-slate-500 border-white/10 cursor-not-allowed'
                                }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                >
                    {featuredCourses.map((course, idx) => (
                        <div
                            key={course.id}
                            className="flex-shrink-0 w-80 group cursor-pointer"
                        >
                            {/* Card Container */}
                            <div className="relative h-full rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                                {/* Icon Section */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center group-hover:from-slate-700 group-hover:to-slate-800 transition-colors duration-500">
                                    <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                                        {course.icon}
                                    </div>

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                    {/* Badge */}
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-xs font-bold backdrop-blur-sm">
                                        {course.badge}
                                    </div>

                                    {/* Category Tag */}
                                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 text-cyan-400 text-xs font-semibold border border-cyan-500/30">
                                        {course.category}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5">
                                    {/* Instructor */}
                                    <p className="text-xs text-slate-400 mb-2 font-medium">by {course.instructor}</p>

                                    {/* Title */}
                                    <h3 className="text-lg font-black text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                                        {course.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                        {course.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 mb-4 pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-400 text-sm">⭐</span>
                                            <span className="text-white font-bold text-sm">{course.stats.rating}</span>
                                        </div>
                                        <div className="text-slate-400 text-xs">
                                            {(course.stats.students / 1000).toFixed(1)}k students
                                        </div>
                                        <div className="text-slate-400 text-xs">
                                            {course.stats.modules} modules
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="block w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-105 text-center"
                                    >
                                        View Course →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 flex gap-2 justify-center">
                    {featuredCourses.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500'
                                    : 'w-2 bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
