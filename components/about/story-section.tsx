'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Circle } from 'lucide-react';

export function StorySection() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const milestones = [
    {
      year: '2020',
      title: 'Full Stack Excellence',
      description: 'Established expertise in React, Vue, Angular for frontend. Node.js, Python, Java for backend development.',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      accentColor: '#0EA5E9',
    },
    {
      year: '2021',
      title: 'Mobile Development',
      description: 'Expanded to native iOS & Android, React Native, and Flutter for cross-platform mobile solutions.',
      icon: '📱',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      accentColor: '#A855F7',
    },
    {
      year: '2022',
      title: 'MERN Stack Mastery',
      description: 'Specialized in MongoDB, Express, React, Node.js stack with deployment expertise on AWS, Azure, GCP.',
      icon: '⚡',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      accentColor: '#10B981',
    },
    {
      year: '2023',
      title: '10+ Client Projects',
      description: 'Delivered scalable solutions across startups and enterprises with diverse technical requirements.',
      icon: '🎯',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      accentColor: '#F97316',
    },
    {
      year: '2025',
      title: 'Development Leaders',
      description: 'Trusted partners for web and mobile development with proven track records in performance and code quality.',
      icon: '⭐',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      accentColor: '#6366F1',
    },
  ];

  return (
    <section className="relative min-h-screen py-32 bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:bg-white/10 transition-all duration-300">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">Journey Through Innovation</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight">
            Our <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-2xl opacity-50"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Evolution</span>
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A remarkable journey from foundational skills to industry-leading innovation
          </p>
        </div>

        {/* Main Timeline Visual */}
        <div className="relative mb-32">
          {/* Animated Connecting Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent hidden lg:block"></div>

          {/* Hexagon Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative group h-full"
                onMouseEnter={() => {
                  setHoveredMilestone(index);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Hexagon Background with Glow */}
                <div
                  className={`relative h-full p-0.5 rounded-3xl transition-all duration-500 transform ${
                    hoveredMilestone === index ? 'scale-105 lg:scale-110' : ''
                  }`}
                  style={{
                    background:
                      hoveredMilestone === index
                        ? `linear-gradient(135deg, ${milestone.accentColor}, #8B5CF6)`
                        : 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  }}
                >
                  {/* Inner Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-black/80 backdrop-blur-xl flex flex-col overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${milestone.accentColor}15 0%, transparent 70%)`,
                      }}
                    ></div>

                    {/* Floating Orb */}
                    <div
                      className={`absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 filter blur-2xl ${
                        hoveredMilestone === index ? 'animate-pulse' : ''
                      }`}
                      style={{ backgroundColor: `${milestone.accentColor}40` }}
                    ></div>

                    {/* Timeline Node */}
                    <div className="relative mb-6 flex items-center gap-4">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-500 ${
                          hoveredMilestone === index ? 'scale-150 shadow-lg' : ''
                        }`}
                        style={{
                          backgroundColor: milestone.accentColor,
                          boxShadow:
                            hoveredMilestone === index
                              ? `0 0 20px ${milestone.accentColor}, 0 0 40px ${milestone.accentColor}80`
                              : 'none',
                        }}
                      ></div>
                      <span className={`text-xs font-black tracking-widest transition-all duration-300 ${
                        hoveredMilestone === index ? 'text-white' : 'text-slate-400'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>

                    {/* Icon with Rotation */}
                    <div className={`text-5xl mb-6 transition-transform duration-500 ${
                      hoveredMilestone === index ? 'rotate-12 scale-125' : ''
                    }`}>
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                        {milestone.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Interactive Tags */}
                    <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                      {milestone.icon && (
                        <span
                          className="px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
                          style={{
                            backgroundColor:
                              hoveredMilestone === index ? `${milestone.accentColor}40` : 'rgba(255,255,255,0.05)',
                            color:
                              hoveredMilestone === index ? 'white' : '#94A3B8',
                            border: `1px solid ${
                              hoveredMilestone === index ? `${milestone.accentColor}60` : 'rgba(255,255,255,0.1)'
                            }`,
                          }}
                        >
                          {milestone.year}
                        </span>
                      )}
                    </div>

                    {/* CTA with Animated Arrow */}
                    <button
                      className="relative z-10 inline-flex items-center gap-3 text-sm font-bold transition-all duration-300 group/btn hover:translate-x-1"
                      style={{
                        color: hoveredMilestone === index ? milestone.accentColor : '#94A3B8',
                      }}
                    >
                      Explore Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </button>

                    {/* Bottom Accent Bar */}
                    <div
                      className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                      style={{
                        width: hoveredMilestone === index ? '100%' : '0%',
                        background: `linear-gradient(90deg, ${milestone.accentColor}, transparent)`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating Particles on Hover */}
                {hoveredMilestone === index && (
                  <>
                    <div
                      className="absolute -inset-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${((mousePos.x / window.innerWidth) * 100).toFixed(0)}% ${((mousePos.y / window.innerHeight) * 100).toFixed(0)}%, ${milestone.accentColor}20 0%, transparent 70%)`,
                      }}
                    ></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section with Unique Design */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '15+', label: 'Technologies', icon: '🛠️' },
              { number: '18+', label: 'Enterprise Clients', icon: '🏆' },
              { number: '99.99%', label: 'Uptime Record', icon: '⚡' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer hover:scale-105"
              >
                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-2xl p-px transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-slate-300 font-semibold">{stat.label}</p>

                  {/* Hover Effect */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Corner Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
}
