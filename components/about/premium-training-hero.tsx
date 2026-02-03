'use client';

import React from 'react';
import Image from 'next/image';

export function PremiumTrainingHero() {

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">Master Modern <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Software Development</span></span>
          </h1>
          <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">Position yourself for high-value roles and accelerate your career advancement</p>
          <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">Unlock your potential with cutting-edge training programs. Learn from industry experts, build portfolio projects, and accelerate your tech career with hands-on experience.</p>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              { number: '50K+', label: 'Successful Graduates', icon: '👨‍💻' },
              { number: '4.95/5', label: 'Student Rating', icon: '⭐' },
              { number: '150+', label: 'Live Courses', icon: '📚' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 pt-6 border-t border-white/10">
            {[
              { icon: '✓', text: 'Industry-certified instructors' },
              { icon: '✓', text: 'Lifetime course access' },
              { icon: '✓', text: 'Job placement assistance' },
              { icon: '✓', text: 'Community support' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-lime-300 font-bold">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
