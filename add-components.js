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
        
        // Check if file has the hero component
        const hasHero = content.includes('<BusinessTransformHero />');
        const hasImport = content.includes('import { BusinessTransformHero }');
        
        if (!hasHero && hasImport) {
            // Add the components - before TechDetailTemplate and after it
            content = content.replace(
                /(<main[^>]*>\s*)(<TechDetailTemplate)/,
                '$1<BusinessTransformHero />\n                $2'
            );
            
            content = content.replace(
                /(<\/TechDetailTemplate>\s*)(<\/main>)/,
                '$1\n            <BusinessTransformHero />\n            $2'
            );
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Added components to: ${tech}`);
        } else if (!hasImport) {
            console.log(`MISSING IMPORT: ${tech}`);
        } else {
            console.log(`Already has components: ${tech}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
});

console.log('Done!');
