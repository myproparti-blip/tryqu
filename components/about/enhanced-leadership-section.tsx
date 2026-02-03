'use client';

import React, { useState } from 'react';

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  social: { platform: string; url: string }[];
}

export function EnhancedLeadershipSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const leaders: Leader[] = [
    {
      name: 'Sarah Chen',
      title: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      bio: 'Visionary leader with 15+ years in enterprise technology',
      expertise: ['Strategy', 'Innovation', 'Enterprise'],
      social: [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'Twitter', url: '#' }
      ]
    },
    {
      name: 'Marcus Johnson',
      title: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      bio: 'Cloud architecture expert and open-source contributor',
      expertise: ['Cloud', 'DevOps', 'Architecture'],
      social: [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'GitHub', url: '#' }
      ]
    },
    {
      name: 'Emma Rodriguez',
      title: 'Chief Security Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
      bio: 'Cybersecurity pioneer with regulatory expertise',
      expertise: ['Security', 'Compliance', 'Risk'],
      social: [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'Twitter', url: '#' }
      ]
    },
    {
       name: 'David Park',
       title: 'VP Product',
       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
       bio: 'Product strategist building intuitive developer experiences',
       expertise: ['Product', 'Development', 'UX'],
       social: [
         { platform: 'LinkedIn', url: '#' },
         { platform: 'Twitter', url: '#' }
       ]
     },
    {
      name: 'Lisa Wang',
      title: 'VP Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      bio: 'Engineering leader building high-performance teams',
      expertise: ['Engineering', 'Scaling', 'Leadership'],
      social: [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'GitHub', url: '#' }
      ]
    },
    {
      name: 'James Mitchell',
      title: 'VP Business Development',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      bio: 'Strategic partnerships and enterprise growth expert',
      expertise: ['Partnership', 'Growth', 'Enterprise'],
      social: [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'Twitter', url: '#' }
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-slate-900/5 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-cyan-400">LEADERSHIP TEAM</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              Meet Our IT Elite Team
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            Experienced professionals dedicated to transforming your business through cutting-edge technology
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Glow Background */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500`}></div>

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-b from-slate-900 to-black">
                  {/* Profile Image */}
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent group-hover:via-black/20 transition-all duration-300"></div>

                  {/* Social Links - Hidden initially, shown on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {leader.social.map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all duration-300 transform scale-75 group-hover:scale-100 group-hover:translate-y-0 translate-y-4"
                          title={social.platform}
                        >
                          {social.platform === 'LinkedIn' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.816 0-9.753h3.554v1.375c.427-.659 1.191-1.597 2.898-1.597 2.117 0 3.704 1.380 3.704 4.347v5.628zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.954.768-1.715 1.959-1.715 1.188 0 1.914.761 1.938 1.715 0 .953-.75 1.715-1.982 1.715zm1.946 11.019H3.391V9.956h3.892v10.496zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                            </svg>
                          )}
                          {social.platform === 'Twitter' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 002.856-3.915 10.02 10.02 0 01-2.856.973 5 5 0 00-8.59-3.188 5.001 5.001 0 00-1.613 6.267A14.975 14.975 0 011.064 4.47a5 5 0 001.548 6.686 5 5 0 002.267-.616v.06a5 5 0 004.008 4.9 5 5 0 01-2.26.084 5.001 5.001 0 004.678 3.488 10.006 10.006 0 01-6.177 2.13c-.399 0-.779-.023-1.17-.067a14.995 14.995 0 008.134 2.39c9.772 0 15.194-8.1 15.194-15.193 0-.231-.005-.46-.015-.687a10.852 10.852 0 002.656-2.782z" />
                            </svg>
                          )}
                          {social.platform === 'GitHub' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Name */}
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm mt-1">{leader.title}</p>
                  </div>

                  {/* Bio - Hidden, shown on hover */}
                  <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-300 ${
                    hoveredId === idx ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                  }`}>
                    {leader.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {leader.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 group-hover:border-cyan-500/60 group-hover:bg-gradient-to-r group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Departments Section */}
         <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             {
               title: 'Ashish Patel',
               subtitle: 'Chief Executive Officer - India',
               description: 'Leading regional operations and market expansion across the Indian subcontinent'
             },
             {
               title: 'Divya',
               subtitle: 'Chief Executive Officer - USA',
               description: 'Driving strategic growth and market leadership across the United States region'
             },
             {
               title: 'Abhishek',
               subtitle: 'Chief Executive Officer - Canada',
               description: 'Spearheading expansion and business development across Canadian territories'
             }
           ].map((dept, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
            >
              {/* Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10"></div>

              {/* Icon */}
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-fit group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                {idx === 0 && (
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 19H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4m0 6v2m0 0v2m0-2h2m-2 0h-2" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                {dept.title}
              </h3>
              <p className="text-cyan-400 font-semibold text-sm mb-3">{dept.subtitle}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{dept.description}</p>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="mt-20 p-12 lg:p-16 rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 group">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Culture of Excellence</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Built on collaboration, continuous learning, and a commitment to pushing technological boundaries. Our team thrives on solving complex challenges and making a tangible impact on the world.
            </p>
            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              {['Innovation', 'Integrity', 'Collaboration', 'Excellence'].map((value, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 text-sm font-semibold"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
