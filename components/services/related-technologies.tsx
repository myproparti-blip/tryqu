'use client';

import Link from 'next/link';
import { usePageContext } from '@/hooks/use-page-context';
import { getTechEmoji } from '@/lib/tech-emojis-config';

interface RelatedTechnologiesProps {
    technologies: string[];
    title?: string;
    description?: string;
}

export function RelatedTechnologies({ 
    technologies, 
    title = "Explore Related Technologies", 
    description = "Discover the technologies and solutions we specialize in" 
}: RelatedTechnologiesProps) {
    const { page } = usePageContext();
    // Helper function to convert tech names to URL paths
    function getTechPath(techName: string): string {
        return `/technologies/${techName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')}`;
    }

    return (
        <section className="py-20 px-4 border-t border-gray-800">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
                    )}
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                    {technologies.map((tech) => {
                        const emoji = getTechEmoji(tech);
                        return (
                            <Link
                                key={tech}
                                href={getTechPath(tech)}
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-white font-medium hover:border-purple-400 hover:bg-purple-500/20 transition-all inline-flex items-center gap-2 group"
                            >
                                <span className="text-lg group-hover:scale-110 transition-transform">{emoji}</span>
                                <span className="group-hover:text-purple-300 transition-colors">{tech}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
