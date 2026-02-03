'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export function EnhancedImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const images = [
    {
      url: '/images/archviz/client-love-1.jpg',
      title: 'Web Development',
      description: 'Responsive and performant web applications'
    },
    {
      url: '/images/archviz/client-love-2.jpg',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform app development'
    },
    {
      url: '/images/intuitive-1.png',
      title: 'Full Stack Projects',
      description: 'Complete end-to-end development'
    },
    {
      url: '/images/intuitive-2.png',
      title: 'MERN Stack',
      description: 'Modern JavaScript-based applications'
    },
    {
      url: '/images/top-rated-1.png',
      title: 'Scalable Systems',
      description: 'Enterprise-grade architecture & deployment'
    }
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || !isMounted) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, images.length, isMounted]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  if (!isMounted) {
    return (
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Our Work in Action
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore the projects, expertise, and solutions we deliver for our clients
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-black border border-white/10 aspect-video"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Our Work in Action
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore the projects, expertise, and solutions we deliver for our clients
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          className="relative rounded-3xl overflow-hidden bg-black border border-white/10 group"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Carousel Container */}
          <div className="relative aspect-video overflow-hidden">
            {/* Images */}
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ${
                  idx === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                {/* Image */}
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="space-y-3">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">{image.title}</h3>
                    <p className="text-lg text-slate-200 max-w-2xl">{image.description}</p>

                  </div>
                </div>
              </div>
            ))}

            {/* Gradient Border Animation */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors duration-300"></div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all duration-300 hover:scale-110 group-hover:block hidden border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition-all duration-300 hover:scale-110 group-hover:block hidden border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlay(false);
                }}
                className={`transition-all duration-300 rounded-full h-2 ${
                  idx === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-400'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlay(false);
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden group/thumb border-2 transition-all duration-300 ${
                  idx === currentIndex
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/30'
                    : 'border-white/10 hover:border-cyan-500/50'
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>

                {/* Current Indicator */}
                {idx === currentIndex && (
                  <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg pointer-events-none">
                    <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
