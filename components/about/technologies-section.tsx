'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Database, Shield, Cpu, Cloud, Code2, Zap } from 'lucide-react';

export function TechnologiesSection() {
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

  const technologies = [
     {
       category: 'Frontend Development',
       icon: Code2,
       color: 'from-cyan-400 to-blue-500',
       techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'],
     },
     {
       category: 'Backend Development',
       icon: Cloud,
       color: 'from-purple-400 to-indigo-500',
       techs: ['Node.js', 'Python', 'Java', 'Express.js', 'Django', 'GraphQL'],
     },
     {
       category: 'Mobile Development',
       icon: Shield,
       color: 'from-pink-400 to-rose-500',
       techs: ['React Native', 'Flutter', 'iOS', 'Android', 'Kotlin', 'Swift'],
     },
     {
       category: 'Databases & APIs',
       icon: Database,
       color: 'from-green-400 to-emerald-500',
       techs: ['MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Firebase', 'MySQL'],
     },
     {
       category: 'MERN Stack',
       icon: Cpu,
       color: 'from-yellow-400 to-orange-500',
       techs: ['MongoDB', 'Express', 'React', 'Node.js', 'Real-time Data', 'Full Stack'],
     },
     {
       category: 'DevOps & Cloud',
       icon: Zap,
       color: 'from-blue-400 to-cyan-500',
       techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Git', 'GitHub Actions'],
     },
   ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Technologies We Master
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leveraging the world's most advanced frameworks, platforms, and tools to architect your future.
          </p>
        </div>

        {/* Technologies Grid - Spaceless Rich Interface */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
           {technologies.map((tech, index) => {
             const Icon = tech.icon;
             return (
               <div
                 key={index}
                 className={`group relative p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-white/30 hover:bg-white/10 transition-all duration-300 overflow-hidden cursor-pointer ${
                   isInView
                     ? 'opacity-100 translate-y-0'
                     : 'opacity-0 translate-y-10'
                 }`}
                 style={{
                   transitionDelay: isInView ? `${index * 80}ms` : '0ms',
                 }}
               >
                 {/* Background Gradient */}
                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${tech.color} transition-opacity duration-300`}></div>

                 <div className="relative z-10">
                   {/* Icon + Title Compact */}
                   <div className="flex items-center gap-2 mb-3">
                     <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex-shrink-0 flex items-center justify-center`}>
                       <Icon className={`w-4 h-4 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`} />
                     </div>
                     <h3 className="text-sm font-bold text-white truncate">{tech.category}</h3>
                   </div>

                   {/* Tech Tags Compact */}
                   <div className="space-y-1">
                     {tech.techs.map((t, i) => (
                       <div
                         key={i}
                         className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-300 py-0.5 px-2 rounded-md hover:bg-white/5 truncate"
                       >
                         {t}
                       </div>
                     ))}
                   </div>

                   {/* Accent Line */}
                   <div className={`mt-2 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${tech.color} transition-all duration-300`}></div>
                 </div>
               </div>
             );
           })}
         </div>

        {/* Tech Stack Info */}
        <div className="mt-20 p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Why Our Tech Stack Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Performance First</h4>
                <p className="text-sm leading-relaxed">
                  Every technology selected for optimal performance, scalability, and resource efficiency. 
                  We eliminate bottlenecks before they become problems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Security by Design</h4>
                <p className="text-sm leading-relaxed">
                  Zero-trust principles integrated at every layer. Compliance with HIPAA, SOC2, ISO27001, 
                  and emerging quantum-safe standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Infinite Scalability</h4>
                <p className="text-sm leading-relaxed">
                  Architecture designed to scale from 1 to 1 billion users. Auto-scaling, multi-region, 
                  and disaster recovery built-in.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Innovation Ready</h4>
                <p className="text-sm leading-relaxed">
                  Constantly evaluating emerging technologies. Future-proofed with modular, loosely-coupled 
                  microservices architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </section>
  );
}
