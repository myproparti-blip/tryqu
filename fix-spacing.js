const fs = require('fs');
const path = require('path');

const techPages = [
    'react',
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
    'nodejs'
];

const basePath = 'd:\\TryQ-master\\app\\technologies';

techPages.forEach(tech => {
    const filePath = path.join(basePath, tech, 'page.tsx');
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix spacing issues - ensure BusinessTransformHero is indented properly
        content = content.replace(
            /\n\s*<BusinessTransformHero\s*\/>\s*\n\s*<\/main>/,
            '\n                <BusinessTransformHero />\n            </main>'
        );
        
        // Fix if there's improper indentation in middle
        content = content.replace(
            /\n\s+<BusinessTransformHero\s*\/>\s*\n\s*<\/main>/g,
            '\n                <BusinessTransformHero />\n            </main>'
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Spacing fixed!');
