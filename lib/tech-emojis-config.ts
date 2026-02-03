// Technology emoji mapping
export const techEmojisConfig: Record<string, string> = {
  // Frontend Frameworks
  react: '⚛️',
  nextjs: '▲',
  vuejs: '🖖',
  vue: '🖖',
  angular: '🅰️',
  svelte: '🔥',
  nuxtjs: '🌲',
  
  // CSS & Styling
  tailwindcss: '🎨',
  'tailwind-css': '🎨',
  materialui: '🎭',
  'material-ui': '🎭',
  'chakra-ui': '💎',
  chakraui: '💎',
  
  // Languages
  python: '🐍',
  typescript: '💙',
  javascript: '⚡',
  java: '☕',
  go: '🐹',
  rust: '🦀',
  csharp: '#️⃣',
  'c#': '#️⃣',
  kotlin: '🎯',
  swift: '🍎',
  php: '🐘',
  ruby: '💎',
  
  // Backend
  nodejs: '✓',
  'node.js': '✓',
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
  const techKey = techName
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\.js$/i, '')
    .replace(/-/g, '');
  
  return techEmojisConfig[techKey] || '💻';
}
