'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const [isHovered, setIsHovered] = useState<{ [key: number]: boolean }>({});

  const togglePlay = (id: number) => {
    setIsPlaying((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const videos = [
    {
      id: 1,
      title: 'Development Showcase',
      duration: '2:45',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop',
      alt: 'Web development showcase video preview',
    },
    {
      id: 2,
      title: 'Client Success Stories',
      duration: '3:20',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      alt: 'Client success stories video preview',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Neon separator top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              See What We Build
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Watch how we deliver powerful web and mobile solutions that drive business growth.
            </p>
          </div>

        {/* Two Video Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-3xl overflow-hidden group"
              onMouseEnter={() => setIsHovered((prev) => ({ ...prev, [video.id]: true }))}
              onMouseLeave={() => setIsHovered((prev) => ({ ...prev, [video.id]: false }))}
            >
              {/* Video Thumbnail Background */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900 to-black overflow-hidden">
                {/* Video Placeholder with Theme */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

                {/* Video Icon/Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-300">
                      <Play className={`w-16 h-16 text-cyan-400 transition-all duration-500 ${isHovered[video.id] || isPlaying[video.id] ? 'scale-110' : 'scale-100'}`} />
                    </div>
                    <p className="mt-6 text-white text-xl font-semibold">Click to play {video.title}</p>
                    <p className="text-slate-400 mt-2">Duration: {video.duration}</p>
                  </div>
                </div>

                {/* Image Container with hover zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.alt}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered[video.id] || isPlaying[video.id] ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/30 transition-all duration-500 ${
                  isHovered[video.id] || isPlaying[video.id] ? 'bg-black/40' : 'bg-black/50'
                }`}></div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Click Handler */}
              <button
                onClick={() => togglePlay(video.id)}
                className="absolute inset-0 w-full h-full cursor-pointer"
                aria-label={`Play ${video.title}`}
              ></button>
            </div>
          ))}
        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </section>
  );
}
