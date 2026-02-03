'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TrainingCourse {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    gradient: string;
    glowColor: string;
    images: string[];
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    instructor: string;
    students: number;
    rating: number;
    topics: string[];
    featured?: boolean;
}

const trainingCourses: TrainingCourse[] = [
    {
        id: 1,
        title: 'React & Next.js Professional',
        subtitle: 'Enterprise Web Development',
        description: 'Master React 19 and Next.js 15 with App Router, Server Components, API development, and production-grade patterns for scalable applications.',
        icon: '⚛️',
        gradient: 'from-cyan-500 to-blue-500',
        glowColor: 'rgba(34, 211, 238, 0.4)',
        duration: '14 weeks',
        level: 'Intermediate',
        price: 599,
        instructor: 'Alex Chen',
        students: 8540,
        rating: 4.96,
        topics: ['React Hooks', 'Server Components', 'API Routes', 'Performance Optimization', 'Deployment'],
        images: ['⚛️', '▲', '🎨'],
        featured: true,
    },
    {
        id: 2,
        title: 'Advanced TypeScript & Generics',
        subtitle: 'Type-Safe Enterprise Development',
        description: 'Deep dive into TypeScript with advanced generics, utility types, decorators, and enterprise patterns. Build robust, type-safe applications.',
        icon: '📘',
        gradient: 'from-blue-500 to-purple-500',
        glowColor: 'rgba(59, 130, 246, 0.4)',
        duration: '10 weeks',
        level: 'Advanced',
        price: 499,
        instructor: 'Sarah Williams',
        students: 6230,
        rating: 4.93,
        topics: ['Generics & Constraints', 'Advanced Types', 'Decorators', 'Utility Types', 'Real-world Patterns'],
        images: ['📘', '⚛️', '🚀'],
    },
    {
        id: 3,
        title: 'Full-Stack JavaScript Bootcamp',
        subtitle: 'Complete End-to-End Solutions',
        description: 'Build complete applications from frontend to backend using JavaScript/TypeScript. Master Node.js, databases, APIs, deployment, and DevOps.',
        icon: '🚀',
        gradient: 'from-pink-500 to-rose-500',
        glowColor: 'rgba(236, 72, 153, 0.4)',
        duration: '18 weeks',
        level: 'Advanced',
        price: 799,
        instructor: 'Michael Johnson',
        students: 9450,
        rating: 4.94,
        topics: ['Frontend Architecture', 'Node.js Backend', 'Database Design', 'Authentication', 'DevOps', 'Cloud Deployment'],
        images: ['🚀', '🟢', '🐘'],
        featured: true,
    },
    {
        id: 4,
        title: 'Web Performance & Optimization',
        subtitle: 'Building Lightning-Fast Apps',
        description: 'Master Core Web Vitals, performance metrics, image optimization, caching strategies, and monitoring tools for production-ready applications.',
        icon: '⚡',
        gradient: 'from-purple-500 to-pink-500',
        glowColor: 'rgba(168, 85, 247, 0.4)',
        duration: '8 weeks',
        level: 'Intermediate',
        price: 449,
        instructor: 'Jordan Davis',
        students: 7890,
        rating: 4.94,
        topics: ['Core Web Vitals', 'Image Optimization', 'Caching Strategies', 'Code Splitting', 'Performance Monitoring'],
        images: ['⚡', '🎨', '📊'],
    },
    {
        id: 5,
        title: 'Modern UI Design & Tailwind CSS',
        subtitle: 'Responsive & Accessible Interfaces',
        description: 'Create stunning user interfaces with Tailwind CSS 4. Build scalable design systems, component libraries, and accessible responsive designs.',
        icon: '🎨',
        gradient: 'from-cyan-400 to-teal-500',
        glowColor: 'rgba(16, 185, 129, 0.4)',
        duration: '8 weeks',
        level: 'Beginner',
        price: 399,
        instructor: 'Emma Wilson',
        students: 11230,
        rating: 4.92,
        topics: ['Tailwind CSS 4', 'Design Systems', 'Component Architecture', 'Responsive Design', 'Web Accessibility'],
        images: ['🎨', '✏️', '📐'],
    },
    {
        id: 6,
        title: 'Mobile App Development with React Native',
        subtitle: 'Cross-Platform Native Apps',
        description: 'Build native iOS and Android apps with React Native. Master Navigation, State Management, Native Modules, and App Store deployment.',
        icon: '📱',
        gradient: 'from-green-500 to-emerald-500',
        glowColor: 'rgba(16, 185, 129, 0.4)',
        duration: '12 weeks',
        level: 'Intermediate',
        price: 649,
        instructor: 'David Kumar',
        students: 7120,
        rating: 4.91,
        topics: ['React Native', 'Native Modules', 'Navigation', 'State Management', 'App Store Publishing', 'Performance Tuning'],
        images: ['📱', '⚛️', '🦋'],
    },
    {
        id: 7,
        title: 'Python Backend Development',
        subtitle: 'Build Scalable APIs & Microservices',
        description: 'Master Python with Django and FastAPI. Build RESTful APIs, implement microservices architecture, and deploy production applications.',
        icon: '🐍',
        gradient: 'from-amber-500 to-orange-500',
        glowColor: 'rgba(217, 119, 6, 0.4)',
        duration: '14 weeks',
        level: 'Intermediate',
        price: 599,
        instructor: 'Lisa Chen',
        students: 8900,
        rating: 4.95,
        topics: ['Django & FastAPI', 'RESTful APIs', 'Database Design', 'Microservices', 'Docker & Deployment', 'Testing & Debugging'],
        images: ['🐍', '🐘', '🐳'],
        featured: true,
    },
    {
        id: 8,
        title: 'Docker & Kubernetes Mastery',
        subtitle: 'Container Orchestration for DevOps',
        description: 'Master containerization with Docker and orchestration with Kubernetes. Deploy scalable microservices and manage production containers.',
        icon: '🐳',
        gradient: 'from-blue-600 to-cyan-500',
        glowColor: 'rgba(29, 78, 216, 0.4)',
        duration: '10 weeks',
        level: 'Advanced',
        price: 699,
        instructor: 'James Wilson',
        students: 5340,
        rating: 4.89,
        topics: ['Docker', 'Kubernetes', 'Container Registry', 'Helm Charts', 'Scaling & Load Balancing', 'Monitoring & Logging'],
        images: ['🐳', '☸️', '⚙️'],
    },
    {
        id: 9,
        title: 'Cloud Architecture with AWS',
        subtitle: 'Enterprise Cloud Solutions',
        description: 'Build cloud-native applications on AWS. Master EC2, Lambda, RDS, S3, and serverless architecture for scalable TryQu Tech.',
        icon: '☁️',
        gradient: 'from-orange-400 to-red-500',
        glowColor: 'rgba(245, 101, 17, 0.4)',
        duration: '12 weeks',
        level: 'Advanced',
        price: 749,
        instructor: 'Robert Martinez',
        students: 6780,
        rating: 4.92,
        topics: ['AWS Services', 'Lambda & Serverless', 'Cloud Databases', 'Scaling & Auto-Scaling', 'Security & IAM', 'Cost Optimization'],
        images: ['☁️', '🌐', '🔐'],
    },
    {
        id: 10,
        title: 'Cybersecurity & Application Security',
        subtitle: 'Protect Your Applications',
        description: 'Learn application security best practices, OWASP Top 10, encryption, authentication, and secure coding patterns for enterprise apps.',
        icon: '🔒',
        gradient: 'from-red-500 to-pink-600',
        glowColor: 'rgba(239, 68, 68, 0.4)',
        duration: '10 weeks',
        level: 'Advanced',
        price: 699,
        instructor: 'Victoria Thompson',
        students: 4560,
        rating: 4.96,
        topics: ['OWASP Top 10', 'Encryption & Hashing', 'Authentication & Authorization', 'Secure Coding', 'Penetration Testing', 'Compliance & Standards'],
        images: ['🔒', '🔐', '🛡️'],
    },
    {
        id: 11,
        title: 'JavaScript Fundamentals for Beginners',
        subtitle: 'Learn to Code with JavaScript',
        description: 'Start your coding journey with JavaScript. Master variables, functions, DOM manipulation, async operations, and ES6+ features.',
        icon: '✨',
        gradient: 'from-yellow-400 to-yellow-500',
        glowColor: 'rgba(234, 179, 8, 0.4)',
        duration: '6 weeks',
        level: 'Beginner',
        price: 299,
        instructor: 'Kevin Brown',
        students: 15640,
        rating: 4.94,
        topics: ['Variables & Data Types', 'Functions & Scope', 'DOM Manipulation', 'Async/Await', 'ES6+ Features', 'Debugging'],
        images: ['✨', '📝', '🔧'],
    },
    {
        id: 12,
        title: 'Database Design & SQL Mastery',
        subtitle: 'Master Data Management',
        description: 'Learn SQL, relational database design, normalization, indexing, and query optimization for scalable data management solutions.',
        icon: '🗄️',
        gradient: 'from-indigo-500 to-purple-600',
        glowColor: 'rgba(99, 102, 241, 0.4)',
        duration: '8 weeks',
        level: 'Intermediate',
        price: 449,
        instructor: 'Nina Patel',
        students: 6890,
        rating: 4.90,
        topics: ['SQL Fundamentals', 'Database Design', 'Normalization', 'Indexing & Performance', 'Transactions', 'Backup & Recovery'],
        images: ['🐘', '🗄️', '📊'],
        featured: true,
    },
];

interface ImageCarouselProps {
    images: string[];
    courseTitle: string;
}

function ImageCarousel({ images, courseTitle }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (!isAutoPlay) return;

        autoPlayRef.current = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlay, images.length]);

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlay(false);
    };

    return (
        <div
            className="relative w-full h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 group flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Icon Carousel */}
            <div className="relative w-full h-full flex items-center justify-center">
                {images.map((emoji, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${idx === currentImageIndex
                            ? 'opacity-100 translate-x-0'
                            : idx > currentImageIndex
                                ? 'opacity-0 translate-x-full'
                                : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="text-8xl">{emoji}</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrow */}
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                            ? 'w-6 bg-white'
                            : 'w-1.5 bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

function PremiumCourseCard({ course }: { course: TrainingCourse }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Premium Card Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/15 transition-all duration-500 group-hover:border-white/30" />

            {/* Glow Effect on Hover */}
            {isHovered && (
                <div
                    className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
                    style={{
                        boxShadow: `0 0 60px ${course.glowColor}, inset 0 0 40px ${course.glowColor}`,
                    }}
                />
            )}

            {/* Featured Badge */}
            {course.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-75" />
                        <div className="relative px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-xs">
                            ⭐ Featured
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl">{course.icon}</span>
                        <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                            <span>⭐</span>
                            <span className="text-white text-xs font-bold">{course.rating}</span>
                        </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-black text-white mb-1 leading-tight">
                        {course.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">{course.subtitle}</p>
                </div>

                {/* Image Carousel */}
                <div className="mb-5 -mx-6 -mt-2">
                    <ImageCarousel images={course.images} courseTitle={course.title} />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                    {course.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.slice(0, 4).map((topic, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/10">
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Footer */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                            <div className="text-xs text-slate-400">Duration</div>
                            <div className="text-sm font-bold text-white">{course.duration}</div>
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Level</div>
                            <div className="text-xs font-bold text-cyan-400">{course.level}</div>
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Students</div>
                            <div className="text-sm font-bold text-white">{(course.students / 1000).toFixed(1)}k</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export function PremiumTrainingCarouselSection() {
    const [selectedLevel, setSelectedLevel] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');
    const sectionRef = useRef<HTMLDivElement>(null);

    const filteredCourses =
        selectedLevel === 'all'
            ? trainingCourses
            : trainingCourses.filter((c) => c.level === selectedLevel);

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                        <span className="text-sm font-black uppercase tracking-widest text-cyan-400">🎓 Premium Training Hub</span>
                        <div className="h-1 w-12 bg-gradient-to-l from-purple-500 to-transparent" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter">
                        <span className="block text-white mb-2">Transform Your</span>
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Tech Career Today
                        </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Industry-expert instructors, cutting-edge curriculum, real-world capstone projects, and career support to launch your development career.
                    </p>
                </div>

                {/* Level Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {(['all', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${selectedLevel === level
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/40'
                                : 'bg-white/10 text-slate-300 border border-white/20 hover:bg-white/15'
                                }`}
                        >
                            {level === 'all' ? '📚 All Courses' : level}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {filteredCourses.map((course) => (
                        <PremiumCourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
