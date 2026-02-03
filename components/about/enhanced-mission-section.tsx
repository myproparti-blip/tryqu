'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MissionCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  features?: string[];
  stat?: { label: string; value: string };
}

export function EnhancedMissionSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false, false, false, false, false, false, false]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const missionCards: MissionCard[] = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end solutions with React, Vue, Angular on frontend. Node.js, Python, Java on backend. Real-time databases and scalable APIs.',
      icon: '💻',
      color: 'cyan',
      bgGradient: 'from-cyan-500/20 to-blue-500/10',
      features: ['Frontend & Backend', 'Microservices', 'Real-time Database'],
      stat: { label: 'Projects', value: '200+' }
    },
    {
      title: 'Mobile App Development',
      description: 'Native iOS & Android development. React Native & Flutter expertise. Cross-platform apps that perform flawlessly.',
      icon: '📱',
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-pink-500/10',
      features: ['iOS & Android', 'Cross-platform', 'App Store Ready'],
      stat: { label: 'Apps Built', value: '150+' }
    },
    {
      title: 'MERN & Modern Web',
      description: 'MongoDB, Express, React, Node.js specialization. Cloud deployment on AWS, Azure, GCP. DevOps & CI/CD pipelines.',
      icon: '⚡',
      color: 'blue',
      bgGradient: 'from-blue-500/20 to-cyan-500/10',
      features: ['MongoDB', 'Express & Node', 'Cloud Ready'],
      stat: { label: 'Uptime', value: '99.9%' }
    },
    {
      title: 'Frontend Excellence',
      description: 'Responsive design, performance optimization, accessibility standards. State management, testing, and production-ready code.',
      icon: '🎨',
      color: 'pink',
      bgGradient: 'from-pink-500/20 to-purple-500/10',
      features: ['Responsive Design', 'WCAG Accessible', 'Performance First'],
      stat: { label: 'Page Speed', value: '<2s' }
    },
    {
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive QA testing including unit tests, integration tests, and end-to-end testing. Automated testing frameworks and manual testing expertise.',
      icon: '✅',
      color: 'green',
      bgGradient: 'from-green-500/20 to-emerald-500/10',
      features: ['Automated Testing', 'Performance QA', 'UAT Coordination'],
      stat: { label: 'Coverage', value: '90%+' }
    },
    {
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, GCP cloud infrastructure. Docker containerization, Kubernetes orchestration. CI/CD pipelines and infrastructure as code.',
      icon: '☁️',
      color: 'blue',
      bgGradient: 'from-blue-500/20 to-indigo-500/10',
      features: ['AWS & Azure', 'Kubernetes', 'Infrastructure Code'],
      stat: { label: 'Deployment', value: '<1hr' }
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful API design, GraphQL implementation. Third-party integrations, webhook management. API documentation and versioning strategies.',
      icon: '🔗',
      color: 'orange',
      bgGradient: 'from-orange-500/20 to-yellow-500/10',
      features: ['REST & GraphQL', 'Third-party APIs', 'API Management'],
      stat: { label: 'Endpoints', value: '500+' }
    },
    {
      title: 'Database Design & Optimization',
      description: 'PostgreSQL, MongoDB, MySQL expertise. Database schema design, query optimization, and performance tuning. Data modeling and indexing strategies.',
      icon: '🗄️',
      color: 'indigo',
      bgGradient: 'from-indigo-500/20 to-purple-500/10',
      features: ['PostgreSQL & MongoDB', 'Query Optimization', 'Indexing Strategy'],
      stat: { label: 'Performance', value: '-60%' }
    },
    {
      title: 'Security & Compliance',
      description: 'Application security best practices, OWASP compliance. Penetration testing, vulnerability assessments. Data privacy and regulatory compliance.',
      icon: '🔐',
      color: 'red',
      bgGradient: 'from-red-500/20 to-pink-500/10',
      features: ['OWASP Compliance', 'Penetration Testing', 'Data Privacy'],
      stat: { label: 'Vulnerabilities', value: '0' }
    },
    {
      title: 'Legacy Modernization',
      description: 'Code refactoring and technical debt reduction. Legacy system updates and migrations. Performance improvements and codebase optimization.',
      icon: '🔄',
      color: 'violet',
      bgGradient: 'from-violet-500/20 to-purple-500/10',
      features: ['Code Refactoring', 'Migration', 'Tech Debt Removal'],
      stat: { label: 'Code Quality', value: '+50%' }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('[data-mission-card]');
            cards.forEach((card, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[idx] = true;
                  return newState;
                });
              }, idx * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-slate-900/10 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={mounted ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative px-6 py-3 rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase">
                ✨ What We Specialize In
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-5xl lg:text-7xl font-black mb-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              Development Services
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              for Every Project
            </span>
          </motion.h2>

          {/* Business Value Subheading */}
          <motion.p 
            className="text-base font-semibold text-lime-300/80 mb-8"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Comprehensive solutions designed for operational efficiency and faster time-to-market
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Expert developers in web, mobile, and full stack development. Delivering high-quality code and scalable solutions for startups to enterprises.
          </motion.p>
        </motion.div>

        {/* Mission Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {missionCards.map((card, idx) => (
            <motion.div
              key={idx}
              data-mission-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full cursor-pointer"
            >
              {/* Enhanced Background Glow */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-br ${card.bgGradient} rounded-2xl opacity-0 blur-2xl transition-all duration-500`}
                animate={{
                  opacity: hoveredCard === idx ? 0.8 : 0,
                  scale: hoveredCard === idx ? 1.05 : 1,
                }}
              />

              {/* Card Container */}
              <motion.div 
                className="relative h-full p-7 rounded-2xl border bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-500"
                animate={{
                  borderColor: hoveredCard === idx ? 'rgba(34, 211, 238, 0.6)' : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredCard === idx ? '0 20px 40px rgba(34, 211, 238, 0.3)' : '0 0px 0px rgba(0, 0, 0, 0)',
                  y: hoveredCard === idx ? -8 : 0,
                }}
              >
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 transition-opacity duration-500`}
                  animate={{ opacity: hoveredCard === idx ? 0.05 : 0 }}
                />

                {/* Content */}
                <div className="relative space-y-5 h-full flex flex-col">
                  {/* Icon Container */}
                  <motion.div 
                    className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center text-5xl shadow-lg transition-all duration-300`}
                    animate={{
                      scale: hoveredCard === idx ? 1.1 : 1,
                      rotate: hoveredCard === idx ? 5 : 0,
                    }}
                  >
                    <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg font-bold text-white transition-all duration-300"
                    animate={{
                      color: hoveredCard === idx ? 'rgba(34, 211, 238, 1)' : 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    {card.title}
                  </motion.h3>

                  {/* Features (Hidden by default, shown on hover) */}
                  <motion.div
                    className="space-y-2"
                    animate={{ 
                      opacity: hoveredCard === idx ? 1 : 0,
                      height: hoveredCard === idx ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    {card.features?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-cyan-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </motion.div>

                  {/* Description - Shorter on Hover */}
                  <motion.p 
                    className="text-slate-400 transition-all duration-300 leading-relaxed text-sm flex-1"
                    animate={{
                      color: hoveredCard === idx ? 'rgba(203, 213, 225, 1)' : 'rgba(148, 163, 184, 1)',
                      fontSize: hoveredCard === idx ? '0.8rem' : '0.875rem',
                    }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Stat */}
                  <motion.div 
                    className="pt-4 border-t border-white/10"
                    animate={{
                      opacity: hoveredCard === idx ? 1 : 0.5,
                    }}
                  >
                    <div className="text-xs text-slate-500 font-semibold mb-1">{card.stat?.label}</div>
                    <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                      {card.stat?.value}
                    </div>
                  </motion.div>

                  {/* Interactive Line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    animate={{
                      width: hoveredCard === idx ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15" />

          {/* Animated Borders */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-transparent to-purple-500/50 opacity-40" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-transparent to-cyan-500/50 opacity-40" />
          </div>

          {/* Floating background elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
          </div>

          {/* Content */}
          <div className="relative p-12 lg:p-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.p 
                className="text-2xl lg:text-3xl font-bold leading-relaxed text-white"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We deliver <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">high-quality development solutions</span> across all platforms. From responsive web applications to native mobile apps, we build products that users love.
              </motion.p>
              
              <motion.p
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our developers combine modern best practices with proven methodologies to create scalable, maintainable, and efficient code that drives real business results.
              </motion.p>

              {/* Decorative Elements */}
              <motion.div 
                className="flex justify-center gap-3 pt-8"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div className="h-2 w-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.div className="h-2 w-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} />
                <motion.div className="h-2 w-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
