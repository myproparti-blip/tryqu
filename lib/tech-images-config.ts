// Technology-specific image configuration
export const techImageConfig: Record<string, { image: string; alt: string }> = {
  react: {
    image: '/images/tech-react-rich.svg',
    alt: 'React JavaScript Library - Interactive UI Development',
  },
  typescript: {
    image: '/images/tech-typescript-rich.svg',
    alt: 'TypeScript - Type-Safe JavaScript Development',
  },
  python: {
    image: '/images/tech-python-rich.svg',
    alt: 'Python Programming - AI & Data Science',
  },
  nodejs: {
    image: '/images/tech-nodejs-rich.svg',
    alt: 'Node.js - Server-Side JavaScript Runtime',
  },
  docker: {
    image: '/images/tech-docker-rich.svg',
    alt: 'Docker - Container & Deployment Platform',
  },
  aws: {
    image: '/images/tech-aws-rich.svg',
    alt: 'AWS - Cloud Infrastructure & Services',
  },
  angular: {
    image: '/images/tech-angular-rich.svg',
    alt: 'Angular - Enterprise-Grade Framework',
  },
  expressjs: {
    image: '/images/tech-expressjs-rich.svg',
    alt: 'Express.js - Web Application Framework',
  },
  firebase: {
    image: '/images/tech-firebase-rich.svg',
    alt: 'Firebase - Backend as a Service Platform',
  },
  flutter: {
    image: '/images/tech-flutter-rich.svg',
    alt: 'Flutter - Cross-Platform Mobile Development',
  },
  graphql: {
    image: '/images/tech-graphql-rich.svg',
    alt: 'GraphQL - Query Language for APIs',
  },
  ionic: {
    image: '/images/tech-ionic-rich.svg',
    alt: 'Ionic - Hybrid Mobile App Framework',
  },
  kubernetes: {
    image: '/images/tech-kubernetes-rich.svg',
    alt: 'Kubernetes - Container Orchestration Platform',
  },
  microservices: {
    image: '/images/tech-microservices-rich.svg',
    alt: 'Microservices - Distributed Architecture Pattern',
  },
  mongodb: {
    image: '/images/tech-mongodb-rich.svg',
    alt: 'MongoDB - NoSQL Database',
  },
  nestjs: {
    image: '/images/tech-nestjs-rich.svg',
    alt: 'NestJS - Progressive Node.js Framework',
  },
  nextjs: {
    image: '/images/tech-nextjs-rich.svg',
    alt: 'Next.js - React Framework with SSR',
  },
  nuxtjs: {
    image: '/images/tech-nuxtjs-rich.svg',
    alt: 'Nuxt.js - Vue Framework with SSR',
  },
  postgresql: {
    image: '/images/tech-postgresql-rich.svg',
    alt: 'PostgreSQL - Advanced Relational Database',
  },
  tensorflow: {
    image: '/images/tech-tensorflow-rich.svg',
    alt: 'TensorFlow - Machine Learning Platform',
  },
  vue: {
    image: '/images/tech-vue-rich.svg',
    alt: 'Vue.js - Progressive JavaScript Framework',
  },
  reactnative: {
    image: '/images/tech-react-native-rich.svg',
    alt: 'React Native - Native Mobile Development',
  },
  tailwindcss: {
    image: '/images/tech-tailwind-css-rich.svg',
    alt: 'Tailwind CSS - Utility-First CSS Framework',
  },
};

export function getTechImage(techName: string): { image: string; alt: string } {
  // Normalize tech name: remove hyphens, spaces, dots, and lowercase
  const techKey = techName
    .toLowerCase()
    .replace(/\s+/g, '') // remove spaces
    .replace(/\.js$/i, '') // remove .js suffix
    .replace(/-/g, ''); // remove hyphens
  
  return (
    techImageConfig[techKey] || {
      image: '/images/tech-react-rich.svg',
      alt: 'Technology Development',
    }
  );
}
