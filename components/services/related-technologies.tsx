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

    // Mapping for technologies with multiple words or special naming
    const techMapping: Record<string, string> = {
        'react native': 'react-native',
        'react-native': 'react-native',
        'material-ui': 'material-ui',
        'materialui': 'material-ui',
        'chakra-ui': 'chakra-ui',
        'chakraui': 'chakra-ui',
        'rest apis': 'rest-apis',
        'rest-apis': 'rest-apis',
        'ssl/tls': 'ssl-tls',
        'ssl tls': 'ssl-tls',
        'load-testing': 'load-testing',
        'load testing': 'load-testing',
        'github-actions': 'github-actions',
        'github actions': 'github-actions',
        'gitlab-ci': 'gitlab-ci',
        'gitlab ci': 'gitlab-ci',
        'google-cloud': 'google-cloud',
        'google cloud': 'google-cloud',
        'iso 27001': 'iso27001',
        'iso27001': 'iso27001',
        'soc 2': 'soc2',
        'soc2': 'soc2',
        'jest & testing': 'jest',
        'jest testing': 'jest',
        'tailwind css': 'tailwind-css',
        'tailwindcss': 'tailwind-css',
    };

    // Helper function to convert tech names to URL paths
    function getTechPath(techName: string): string {
        const lowerName = techName.toLowerCase();

        // Check if we have a direct mapping
        if (techMapping[lowerName]) {
            return `/technologies/${techMapping[lowerName]}`;
        }

        // Extract base technology name before version or special text
        // "React 19" → "react", "TypeScript 5.9" → "typescript", "Node.js" → "nodejs"
        let baseTech = lowerName
            .split(/\s+/)[0]                 // Get first word only
            .replace(/\.js$/i, '')            // Remove .js suffix
            .replace(/&.*$/i, '')             // Remove & and everything after
            .replace(/\./g, '')               // Remove dots
            .replace(/[^\w-]/g, '');          // Remove special chars

        // Special case: Node.js → nodejs, Next.js → nextjs
        if (baseTech === 'node') baseTech = 'nodejs';
        if (baseTech === 'next') baseTech = 'nextjs';

        return `/technologies/${baseTech}`;
    }

    return (
        <section className="py-20 px-4 border-t border-gray-800">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-lime-300 to-white bg-clip-text text-transparent">
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
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/30 text-white font-medium hover:border-cyan-400 hover:bg-cyan-500/20 transition-all inline-flex items-center gap-2 group"
                            >
                                <span className="text-lg group-hover:scale-110 transition-transform">{emoji}</span>
                                <span className="group-hover:text-cyan-300 transition-colors">{tech}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
