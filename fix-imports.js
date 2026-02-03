const fs = require('fs');
const path = require('path');

const techPages = [
    'nextjs',
    'kubernetes',
    'vue',
    'tailwind-css',
    'typescript',
    'terraform',
    'tensorflow',
    'swift',
    'redux',
    'svelte',
    'rxjs',
    'rest-apis',
    'python',
    'nuxtjs',
    'expressjs',
    'postgresql',
    'nestjs',
    'microservices',
    'react-native',
    'material-ui',
    'mongodb',
    'jest',
    'kotlin',
    'jenkins',
    'ionic',
    'docker',
    'django',
    'flutter',
    'graphql',
    'firebase',
    'github-actions',
    'chakra-ui',
    'gitlab-ci',
    'cypress',
    'aws',
    'angular',
    'fastapi',
];

const basePath = 'd:\\TryQ-master\\app\\technologies';

techPages.forEach(tech => {
    const filePath = path.join(basePath, tech, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if import is missing
        if (!content.includes('import { BusinessTransformHero }')) {
            // Find lucide-react import
            const lucideMatch = content.match(/import \{ ([^}]+) \} from 'lucide-react';/);
            if (lucideMatch) {
                // Replace the lucide import line with both imports
                content = content.replace(
                    /import \{ ([^}]+) \} from 'lucide-react';/,
                    `import { BusinessTransformHero } from '@/components/technologies/business-transform-hero';\nimport { $1 } from 'lucide-react';`
                );
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Fixed import for: ${tech}`);
            }
        } else {
            console.log(`Already has import: ${tech}`);
        }
    }
});

console.log('All imports fixed!');
