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
        
        // Pattern 1: BusinessTransformHero outside of main tag
        content = content.replace(
            /(\s*)<\/main>\s*<BusinessTransformHero\s*\/>/,
            '$1<BusinessTransformHero />\n            </main>'
        );
        
        // Pattern 2: Ensure proper spacing with TechDetailTemplate
        content = content.replace(
            /(<TechDetailTemplate\s+\{\.\.\.techData\}\s*\/>)\s*<\/main>\s*<BusinessTransformHero/,
            '$1\n                <BusinessTransformHero'
        );
        
        // Pattern 3: Clean up ending
        content = content.replace(
            /(<BusinessTransformHero\s*\/>\s*)<\/main>\s*<AppverseFooter/,
            '$1</main>\n            <AppverseFooter'
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${tech}`);
    }
});

console.log('All pages fixed!');
