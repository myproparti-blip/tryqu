'use client';

import React from 'react';
import Image from 'next/image';

interface TechPageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export function TechPageHeader({ title, subtitle, description }: TechPageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          {/* Logo and Label */}
          <div className="mb-5 flex items-center gap-2">
            <Image 
              src="/icons/skitbit-white.svg" 
              alt="TryQu Tech logo" 
              width={32} 
              height={32} 
              className="h-8 w-8" 
            />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
          </div>

          {/* Main Title with Green Highlight */}
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">
              {title.split(' ').map((word, idx, arr) => {
                // Highlight the last 3 words in green
                const isLastThreeWords = idx >= arr.length - 3;
                return (
                  <span key={idx}>
                    {isLastThreeWords ? (
                      <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                        {word}
                        {idx < arr.length - 1 ? ' ' : ''}
                      </span>
                    ) : (
                      <>
                        {word}
                        {idx < arr.length - 1 ? ' ' : ''}
                      </>
                    )}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-center text-base font-semibold text-lime-300/80 max-w-2xl">
            {subtitle}
          </p>

          {/* Description */}
          <p className="mt-4 text-center text-lg text-gray-300 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
