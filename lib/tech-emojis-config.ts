// Technology emoji mapping
export const techEmojisConfig: Record<string, string> = {
    // Frontend Frameworks
    react: '⚛️',
    'react 19': '⚛️',
    'react-19': '⚛️',
    nextjs: '▲',
    'next.js': '▲',
    'next.js 15': '▲',
    'nextjs-15': '▲',
    vuejs: '🖖',
    vue: '🖖',
    angular: '🅰️',
    svelte: '🔥',
    nuxtjs: '🌲',

    // CSS & Styling
    tailwindcss: '🎨',
    'tailwind-css': '🎨',
    'tailwind css': '🎨',
    'tailwind css 4': '🎨',
    'tailwindcss-4': '🎨',
    materialui: '🎭',
    'material-ui': '🎭',
    'chakra-ui': '💎',
    chakraui: '💎',

    // Languages
    python: '🐍',
    typescript: '💙',
    'typescript 5.9': '💙',
    'typescript-59': '💙',
    javascript: '⚡',
    java: '☕',
    go: '🐹',
    rust: '🦀',
    csharp: '#️⃣',
    'c#': '#️⃣',
    kotlin: '🎯',
    'kotlin 1.9': '🎯',
    'kotlin-19': '🎯',
    swift: '🍎',
    'swift 5.9': '🍎',
    'swift-59': '🍎',
    php: '🐘',
    ruby: '💎',

    // Backend
    nodejs: '✓',
    'node.js': '✓',
    'nodejs-16': '✓',
    'node.js-16': '✓',
    expressjs: '🚂',
    'express.js': '🚂',
    nestjs: '🪺',
    'nest.js': '🪺',
    fastapi: '⚙️',
    django: '🎸',
    springboot: '🍃',
    'spring-boot': '🍃',
    aspnetcore: '🔷',
    'asp.net': '🔷',
    laravel: '🎭',
    'ruby-on-rails': '🛤️',
    rails: '🛤️',

    // Databases
    mongodb: '🍃',
    postgresql: '🐘',
    mysql: '🐬',
    redis: '📕',
    dynamodb: '⚙️',
    firebase: '🔥',
    cassandra: '📦',
    neo4j: '🔗',
    elasticsearch: '🔍',

    // APIs & GraphQL
    graphql: '📊',
    restapis: '🌐',
    'rest-apis': '🌐',
    oauth: '🔑',
    'oauth 2.0': '🔑',
    jwt: '🎟️',

    // Security & Compliance
    'ssl/tls': '🔒',
    ssltls: '🔒',
    'ssl-tls': '🔒',
    owasp: '🛡️',
    hipaa: '🏥',
    'soc 2': '✅',
    soc2: '✅',
    'iso 27001': '📋',
    iso27001: '📋',
    encryption: '🔐',

    // Mobile
    flutter: '🦋',
    reactnative: '⚛️',
    'react-native': '⚛️',
    ionic: '⚡',
    xamarin: '🔶',
    capacitor: '📱',

    // Cloud & Infrastructure
    aws: '☁️',
    'azure': '☁️',
    'google-cloud': '☁️',
    gcp: '☁️',
    docker: '🐳',
    kubernetes: '☸️',
    terraform: '🏗️',
    cloudformation: '⛅',

    // DevOps & CI/CD
    'github-actions': '🤖',
    'gitlab-ci': '🦊',
    jenkins: '⚙️',
    'ci/cd': '🔄',
    prometheus: '📊',
    grafana: '📈',
    'elk-stack': '🔍',
    kafka: '📬',

    // Testing
    jest: '🃏',
    'jest & testing': '🃏',
    'jest-testing': '🃏',
    cypress: '🌳',
    playwright: '🎭',
    selenium: '🤖',
    vitest: '⚡',
    junit: '🧪',

    // ML & AI
    tensorflow: '🤖',

    // Architecture Patterns
    microservices: '🔗',

    // Other
    git: '🐙',
    github: '🐙',
};

export function getTechEmoji(techName: string): string {
    const lowerName = techName.toLowerCase();

    // First try exact match (including spaces and special chars)
    if (techEmojisConfig[lowerName]) {
        return techEmojisConfig[lowerName];
    }

    // Try with replacements
    const techKey = lowerName
        .replace(/\s+/g, '')
        .replace(/\.js$/i, '')
        .replace(/\.(\d)/g, '-$1') // Convert .5 to -5
        .replace(/-/g, '');

    if (techEmojisConfig[techKey]) {
        return techEmojisConfig[techKey];
    }

    return '💻';
}
