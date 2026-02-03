'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`
          }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Premium Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div
            className={`transition-all duration-1000 flex flex-col items-center justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Logo Badge */}
            <div className="mb-5 flex items-center gap-2">
              <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} priority className="h-8 w-8" />
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
            </div>

            {/* Main Headline */}
            <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">IT Development & Testing</span>
              <span className="block text-lime-300">Services</span>
            </h1>

            {/* Subheading */}
            <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">
              Comprehensive solutions for modern software development
            </p>

            {/* Description */}
            <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">
              Full-stack development, quality assurance, and testing services for modern software solutions. Expert teams delivering scalable, reliable applications.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
