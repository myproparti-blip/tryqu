'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePageContext } from '@/hooks/use-page-context';
import {
    Database,
    Shield,
    Cpu,
    Cloud,
    Code2,
    Zap,
    Globe,
    Layers,
    Server,
    Brain,
    Lock,
    Gauge,
    TrendingUp,
} from 'lucide-react';

export function TechnologiesPanel() {
    const router = useRouter();
    const { page } = usePageContext();
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const allCategories = [
        {
            name: 'Programming Languages',
            icon: Code2,
            color: 'from-emerald-400 to-teal-500',
            techs: [
                'Python',
                'JavaScript/TypeScript',
                'Java',
                'Go',
                'Rust',
                'C++',
                'C#',
                '.NET',
                'PHP',
                'Ruby',
                'Kotlin',
                'Swift',
            ],
        },
        {
            name: 'Frontend Frameworks',
            icon: Globe,
            color: 'from-blue-400 to-cyan-500',
            techs: [
                'React',
                'Next.js',
                'Vue.js',
                'Angular',
                'Svelte',
                'Tailwind CSS',
                'TypeScript',
                'Webpack',
                'Vite',
            ],
        },
        {
            name: 'Backend & Frameworks',
            icon: Server,
            color: 'from-purple-400 to-indigo-500',
            techs: [
                'Node.js',
                'Express',
                'Django',
                'FastAPI',
                'Spring Boot',
                'ASP.NET Core',
                'Laravel',
                'Ruby on Rails',
                'GraphQL',
                'REST APIs',
            ],
        },
        {
            name: 'Cloud Infrastructure',
            icon: Cloud,
            color: 'from-blue-400 to-blue-600',
            techs: [
                'AWS',
                'Google Cloud Platform',
                'Microsoft Azure',
                'Kubernetes',
                'Docker',
                'Terraform',
                'CloudFormation',
                'Lambda',
                'Cloud Run',
            ],
        },
        {
            name: 'MERN Stack Specialization',
            icon: Zap,
            color: 'from-yellow-400 to-orange-500',
            techs: [
                'MongoDB',
                'Express.js',
                'React',
                'Node.js',
                'REST APIs',
                'Real-time Updates',
                'Authentication',
                'Database Design',
            ],
        },
        {
            name: 'Data & Analytics',
            icon: Database,
            color: 'from-rose-400 to-pink-500',
            techs: [
                'Apache Spark',
                'BigQuery',
                'Snowflake',
                'Elasticsearch',
                'MongoDB',
                'PostgreSQL',
                'Databricks',
                'Kafka',
                'Data Pipeline',
            ],
        },

        {
            name: 'DevOps & Automation',
            icon: Zap,
            color: 'from-orange-400 to-red-500',
            techs: [
                'CI/CD Pipelines',
                'GitOps',
                'Jenkins',
                'GitHub Actions',
                'GitLab CI',
                'Infrastructure as Code',
                'Prometheus',
                'ELK Stack',
                'Grafana',
            ],
        },
        {
            name: 'Mobile Development',
            icon: Gauge,
            color: 'from-violet-400 to-purple-500',
            techs: [
                'React Native',
                'Flutter',
                'iOS',
                'Android',
                'Swift',
                'Kotlin',
                'Xamarin',
                'Capacitor',
            ],
        },
        {
            name: 'Databases & Storage',
            icon: Layers,
            color: 'from-cyan-400 to-blue-500',
            techs: [
                'PostgreSQL',
                'MySQL',
                'MongoDB',
                'Redis',
                'DynamoDB',
                'Cassandra',
                'Neo4j',
                'S3',
                'Firebase',
            ],
        },

    ];

    // Filter categories based on page context - technologies page shows all, about page shows all
    const mainCategories = page === 'technologies' || page === 'about' ? allCategories : allCategories;

    const featuredTechs = [
        'React',
        'Node.js',
        'MongoDB',
        'TypeScript',
        'React Native',
        'Angular',
        'AWS',
        'Vue.js',
    ];

    return (
        <section ref={ref} className="relative py-32 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                        <span className="text-purple-300 text-sm font-semibold">Developer Expertise</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                        Full Stack to Mobile Development
                    </h1>

                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        We specialize in modern web development, mobile applications, and enterprise-grade solutions. Expert developers across React, Node.js, Flutter, and more.
                    </p>
                </div>

                {/* Featured Technologies Showcase */}
                <div className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white mb-6">Most In-Demand Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                        {featuredTechs.map((tech, idx) => (
                            <button
                                key={tech}
                                onClick={() => {
                                    const techId = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
                                    router.push(`/technologies/${techId}`);
                                }}
                                className={`px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all cursor-pointer group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                style={{
                                    transitionDelay: isInView ? `${idx * 50}ms` : '0ms',
                                }}
                            >
                                <span className="group-hover:text-purple-300">{tech}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {mainCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.name}
                                onClick={() => {
                                    // Navigate to technologies page
                                    router.push('/technologies');
                                }}
                                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-2xl text-left ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                                style={{
                                    transitionDelay: isInView ? `${index * 80}ms` : '0ms',
                                }}
                            >
                                {/* Background Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${category.color} transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center mb-6`}
                                    >
                                        <Icon className="w-8 h-8 text-white opacity-60" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                                        {category.name}
                                    </h3>

                                    {/* Technologies List */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {category.techs.map((tech, i) => (
                                            <span
                                                key={tech}
                                                className={`inline-block px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-all ${isInView
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                                    }`}
                                                style={{
                                                    transitionDelay: isInView ? `${index * 80 + i * 20}ms` : '0ms',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Line */}
                                    <div
                                        className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.color} transition-all duration-500 rounded-full`}
                                    ></div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Coverage Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: 'Technologies Covered', value: '100+' },
                        { label: 'Programming Languages', value: '15+' },
                        { label: 'Cloud Platforms', value: '10+' },
                        { label: 'Framework Expertise', value: '50+' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className={`p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 text-center transition-all duration-500 ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
                                {stat.value}
                            </div>
                            <p className="text-sm text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Why Our Tech Stack Matters */}
                <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                    <h2 className="text-4xl font-bold text-white mb-12">Why Our Tech Stack Matters</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Zap,
                                color: 'text-yellow-400',
                                title: 'Performance First',
                                description:
                                    'Every technology selected for optimal performance, scalability, and resource efficiency. We eliminate bottlenecks before they become problems.',
                            },
                            {
                                icon: Lock,
                                color: 'text-red-400',
                                title: 'Security by Design',
                                description:
                                    'Zero-trust principles integrated at every layer. Compliance with HIPAA, SOC2, ISO27001, and emerging quantum-safe standards.',
                            },
                            {
                                icon: TrendingUp,
                                color: 'text-green-400',
                                title: 'Infinite Scalability',
                                description:
                                    'Architecture designed to scale from 1 to 1 billion users. Auto-scaling, multi-region, and disaster recovery built-in.',
                            },
                            {
                                icon: Code2,
                                color: 'text-purple-400',
                                title: 'Innovation Ready',
                                description:
                                    'Constantly evaluating emerging technologies. Future-proofed with modular, loosely-coupled microservices architecture.',
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 ${isInView
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{
                                        transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
                                    }}
                                >
                                    <div className={`text-4xl mb-4 ${item.color}`}><Icon className="w-10 h-10" /></div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Stack Expertise Section */}
                <div className="mt-20 space-y-12">
                    <div className="text-center space-y-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                            <span className="text-cyan-300 text-sm font-semibold">✨ Specialized Services</span>
                        </div>
                        <h3 className="text-4xl lg:text-6xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-400 mb-6">
                            Development Services We Offer
                        </h3>
                        <p className="text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
                            Specialized development teams for every project type. From responsive web applications to native mobile apps, we deliver high-quality solutions with modern frameworks, scalable architecture, and best practices that ensure your success.
                        </p>
                    </div>

                    {/* Full Stack Development Card */}
                    <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 bg-gradient-to-br from-white/[0.02] to-white/[0.01] transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500 -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-80 lg:h-96 group/image shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                                alt="Full Stack Development"
                                className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover/image:opacity-50 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover/image:from-cyan-500/10 group-hover/image:to-blue-500/10 transition-all duration-300"></div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300">
                                    <span className="text-2xl">💻</span>
                                </div>
                                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                    Full Stack Development
                                </h4>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    Complete end-to-end solutions from user interface to database architecture. Our expert developers build robust, scalable applications that combine beautiful frontend experiences with powerful backend systems.
                                </p>
                            </div>
                            <div className="space-y-3 pt-4">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-cyan-400 font-bold">Frontend:</span> React, Vue, Angular, TypeScript, Tailwind CSS</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/5 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-blue-400 font-bold">Backend:</span> Node.js, Python, Java, Express, Django</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/5 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-purple-400 font-bold">Databases:</span> MongoDB, PostgreSQL, MySQL, Redis</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/5 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-pink-400 font-bold">APIs:</span> REST, GraphQL, WebSockets, Real-time Updates</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App Development Card */}
                    <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 bg-gradient-to-br from-white/[0.02] to-white/[0.01] transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 lg:flex-row-reverse">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-rose-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-rose-500/5 rounded-3xl transition-all duration-500 -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition-all duration-300 h-80 lg:h-96 group/image shadow-2xl lg:order-2">
                            <img
                                src="/images/archviz/client-love-1.jpg"
                                alt="Mobile App Development"
                                className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover/image:opacity-50 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-rose-500/0 group-hover/image:from-pink-500/10 group-hover/image:to-rose-500/10 transition-all duration-300"></div>
                        </div>
                        <div className="space-y-6 lg:order-1">
                            <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 group-hover:border-pink-500/60 transition-all duration-300">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                                    Mobile App Development
                                </h4>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android. From concept to App Store deployment, we handle every aspect of mobile development.
                                </p>
                            </div>
                            <div className="space-y-3 pt-4">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/5 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-pink-400 font-bold">Cross-Platform:</span> React Native, Flutter, Expo</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/5 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-purple-400 font-bold">Native:</span> Swift (iOS), Kotlin (Android), Native SDKs</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/5 border border-rose-500/30 hover:border-rose-500/60 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-rose-400 font-bold">Services:</span> UI/UX Design, App Store Optimization, App Analytics</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-rose-500/5 border border-red-500/30 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-red-400 font-bold">Deployment:</span> App Store, Google Play, Beta Testing, CI/CD</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MERN Stack Specialist Card */}
                    <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-white/10 hover:border-yellow-500/40 bg-gradient-to-br from-white/[0.02] to-white/[0.01] transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-yellow-500/5 group-hover:to-amber-500/5 rounded-3xl transition-all duration-500 -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all duration-300 h-80 lg:h-96 group/image shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                                alt="MERN Stack Development"
                                className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover/image:opacity-50 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-amber-500/0 group-hover/image:from-yellow-500/10 group-hover/image:to-amber-500/10 transition-all duration-300"></div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/20 border border-yellow-500/30 group-hover:border-yellow-500/60 transition-all duration-300">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                                    MERN Stack Specialist
                                </h4>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    Expert specialization in the MERN stack - MongoDB, Express, React, and Node.js. Perfect for building modern, real-time web applications with JavaScript across the entire stack. Fast development, unified language, rapid deployment.
                                </p>
                            </div>
                            <div className="space-y-3 pt-4">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-yellow-400 font-bold">MongoDB:</span> Database design, schema optimization, indexing strategies</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/5 border border-orange-500/30 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-orange-400 font-bold">Express.js:</span> RESTful APIs, middleware, authentication, error handling</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/5 border border-red-500/30 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-red-400 font-bold">React:</span> Component architecture, state management, performance optimization</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-red-500/5 border border-amber-500/30 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-amber-400 font-bold">Node.js:</span> Runtime optimization, async handling, scaling, deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frontend Development Card */}
                    <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border border-white/10 hover:border-emerald-500/40 bg-gradient-to-br from-white/[0.02] to-white/[0.01] transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 lg:flex-row-reverse">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-teal-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 rounded-3xl transition-all duration-500 -z-10"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 h-80 lg:h-96 group/image shadow-2xl lg:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
                                alt="Frontend Development"
                                className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover/image:opacity-50 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover/image:from-emerald-500/10 group-hover/image:to-cyan-500/10 transition-all duration-300"></div>
                        </div>
                        <div className="space-y-6 lg:order-1">
                            <div className="space-y-3">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 group-hover:border-emerald-500/60 transition-all duration-300">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                                    Frontend Development
                                </h4>
                                <p className="text-slate-300 text-base leading-relaxed">
                                    Stunning, responsive user interfaces built with modern frameworks and best practices. We create pixel-perfect designs that are fast, accessible, and provide exceptional user experiences across all devices.
                                </p>
                            </div>
                            <div className="space-y-3 pt-4">
                                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-emerald-400 font-bold">Frameworks:</span> React, Next.js, Vue.js, Angular, Svelte</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/5 border border-teal-500/30 hover:border-teal-500/60 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-teal-400 font-bold">Styling:</span> Tailwind CSS, SCSS, CSS-in-JS, Component Libraries</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/5 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-cyan-400 font-bold">Optimization:</span> Performance, SEO, Web Vitals, Lighthouse Audits</p>
                                </div>
                                <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-teal-500/5 border border-green-500/30 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group/card">
                                    <p className="text-sm text-slate-200"><span className="text-green-400 font-bold">Testing:</span> Unit, Integration, E2E Testing, Accessibility (WCAG)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Development Benefits Section */}
                    <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                                Why Choose Our Development Teams
                            </h3>
                            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
                                We combine cutting-edge technology with proven development practices to deliver solutions that exceed expectations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Rapid Deployment</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Agile development methodology ensures quick time-to-market without compromising quality or features.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/30 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Enterprise Security</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Built-in security features including authentication, encryption, and compliance with industry standards.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/5 border border-pink-500/30 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">Scalable Architecture</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Applications built to grow with your business, handling increased traffic and users seamlessly.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/30 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Dedicated Support</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Ongoing maintenance, updates, and technical support to keep your applications running smoothly.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Continuous Integration</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Automated testing and deployment pipelines ensure consistent quality and faster iteration cycles.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Custom Solutions</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Tailored development approaches that fit your specific business needs and technical requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="mt-16 space-y-8">
                        <div className="text-center">
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Our Development Process
                            </h3>
                            <p className="text-slate-300 max-w-3xl mx-auto">
                                A structured approach to deliver high-quality software solutions on time and on budget.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-center group hover:border-blue-500/60 transition-all">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                    1
                                </div>
                                <h4 className="text-lg font-bold text-white mt-6 mb-3">Discovery & Planning</h4>
                                <p className="text-sm text-slate-400">
                                    Understanding your requirements, goals, and defining project scope with clear milestones.
                                </p>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-center group hover:border-purple-500/60 transition-all">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                                    2
                                </div>
                                <h4 className="text-lg font-bold text-white mt-6 mb-3">Design & Architecture</h4>
                                <p className="text-sm text-slate-400">
                                    Creating technical specifications, wireframes, and system architecture for optimal performance.
                                </p>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center group hover:border-emerald-500/60 transition-all">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                                    3
                                </div>
                                <h4 className="text-lg font-bold text-white mt-6 mb-3">Development & Testing</h4>
                                <p className="text-sm text-slate-400">
                                    Agile development with continuous testing, code reviews, and quality assurance at every step.
                                </p>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 text-center group hover:border-orange-500/60 transition-all">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                    4
                                </div>
                                <h4 className="text-lg font-bold text-white mt-6 mb-3">Deployment & Support</h4>
                                <p className="text-sm text-slate-400">
                                    Production deployment, monitoring, maintenance, and ongoing technical support for success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Border Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </section>
    );
}
