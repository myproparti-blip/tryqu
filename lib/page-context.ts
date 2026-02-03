/**
 * Page context and type definitions for managing parent page scope
 */

export type ParentPage = 'home' | 'services' | 'solutions' | 'technologies' | 'training' | 'about' | null;

export interface PageContextType {
  currentPage: ParentPage;
  isMainPage: boolean;
}

// Define which sections are core to each parent page
export const PAGE_SECTIONS: Record<ParentPage, string[]> = {
  home: ['hero', 'team', 'features', 'services', 'technologies', 'logos', 'footer'],
  services: ['hero', 'slider', 'pillars', 'grid', 'benefits', 'technologies', 'footer'],
  solutions: ['hero', 'content', 'footer'],
  technologies: ['hero', 'categories', 'featured', 'footer'],
  training: ['hero', 'courses', 'specializations', 'tools', 'projects', 'careers', 'footer'],
  about: ['hero', 'carousel', 'mission', 'story', 'video', 'technologies', 'team', 'awards', 'footer'],
  null: [],
};

// Define which sections should be hidden on which pages
export const HIDDEN_SECTIONS: Record<ParentPage, string[]> = {
  home: [],
  services: ['cloud-detailed', 'ai-detailed', 'devops-detailed'],
  solutions: ['cloud-detailed', 'ai-detailed', 'devops-detailed'],
  technologies: ['cloud-detailed', 'ai-detailed', 'devops-detailed'],
  training: ['cloud-detailed', 'ai-detailed', 'devops-detailed'],
  about: [],
  null: [],
};

// Features and services that should be visible on each page
export const VISIBLE_FEATURES: Record<ParentPage, string[]> = {
  home: ['multi-cloud', 'lightning-fast', 'security', 'ai-analytics', 'support', 'scalability', 'data-management', 'ddos-protection', 'api-design', 'devops', 'microservices', 'workflows'],
  services: ['cloud-solutions', 'security-compliance', 'ai-ml', 'custom-development', 'data-analytics', 'infrastructure', 'identity-access', 'api-management', 'devops-cicd', 'business-intelligence', 'consulting', 'support'],
  solutions: ['cloud-solutions', 'security-compliance', 'custom-development'],
  technologies: ['all'],
  training: ['web-development', 'mobile-development', 'ai-ml', 'devops', 'cloud'],
  about: ['all'],
  null: [],
};
