'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

export function AwardsSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const awards = [
     {
       year: '2024',
       title: 'Best Web Development Agency',
       org: 'Tech Excellence Awards',
       icon: '🏆',
     },
     {
       year: '2024',
       title: 'Top MERN Stack Developer',
       org: 'Developer Community Awards',
       icon: '⚡',
     },
     {
       year: '2023',
       title: 'Mobile Development Excellence',
       org: 'Mobile App Conference',
       icon: '📱',
     },
     {
       year: '2023',
       title: 'Best Code Quality',
       org: 'Developer Forum',
       icon: '💻',
     },
     {
       year: '2023',
       title: 'Client Satisfaction Leader',
       org: 'Tech Review Platforms',
       icon: '⭐',
     },
     {
       year: '2022',
       title: 'Full Stack Solutions Provider',
       org: 'Tech Awards',
       icon: '🚀',
     },
   ];

  const partners = [
    { name: 'TechInnovate', logo: '🔵' },
    { name: 'CloudServe', logo: '🟠' },
    { name: 'DataSolutions', logo: '☁️' },
    { name: 'DevForce', logo: '🤖' },
    { name: 'InfoHub', logo: '📊' },
    { name: 'BuildTech', logo: '🏗️' },
    { name: 'SecureNet', logo: '⚡' },
    { name: 'CodeWorks', logo: '☸️' },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Neon separator top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Awards Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Recognition & Awards
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Industry recognition of our commitment to excellence, innovation, and impact.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-green-500/50 transition-all duration-500 transform ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 80}ms` : '0ms',
                }}
              >
                {/* Award Icon */}
                <div className="text-5xl mb-4">{award.icon}</div>

                {/* Year Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/50 text-xs font-semibold text-green-400 mb-3">
                  {award.year}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{award.org}</p>

                {/* Hover Line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-24">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Strategic Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500/50 transition-all duration-300 flex items-center justify-center text-center group cursor-pointer"
              >
                <div>
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <p className="text-xs font-semibold text-slate-300 group-hover:text-green-400 transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24 p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-8">Compliance & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cert: 'SOC 2 Type II', desc: 'Security, availability, integrity' },
              { cert: 'ISO 27001', desc: 'Information security management' },
              { cert: 'HIPAA', desc: 'Healthcare data protection' },
              { cert: 'PCI-DSS', desc: 'Payment card industry compliance' },
              { cert: 'GDPR', desc: 'EU data protection' },
              { cert: 'FedRAMP', desc: 'Federal cloud security' },
              { cert: 'SOC 3', desc: 'Availability & confidentiality' },
              { cert: 'ISO 9001', desc: 'Quality management system' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.cert}</h4>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
    </section>
  );
}
