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
        
        // Add import if not exists
        if (!content.includes('import { BusinessTransformHero }')) {
            content = content.replace(
                /import \{ Code2 \} from 'lucide-react';/,
                `import { BusinessTransformHero } from '@/components/technologies/business-transform-hero';\nimport { Code2 } from 'lucide-react';`
            );
        }
        
        // Clean up duplicates and fix spacing
        content = content.replace(
            /\s*<BusinessTransformHero\s*\/>\s*<\/main>/,
            '\n            <BusinessTransformHero />\n            </main>'
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${tech}`);
    } else {
        console.log(`Not found: ${filePath}`);
    }
});

console.log('All technology pages cleaned up!');
