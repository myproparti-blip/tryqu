'use client';

import { usePathname } from 'next/navigation';
import { ParentPage } from '@/lib/page-context';

/**
 * Hook to determine the current parent page from the URL
 */
export function usePageContext(): { page: ParentPage; isHomePage: boolean } {
  const pathname = usePathname();

  let page: ParentPage = null;

  if (pathname === '/' || pathname === '') {
    page = 'home';
  } else if (pathname.startsWith('/services')) {
    page = 'services';
  } else if (pathname.startsWith('/solutions')) {
    page = 'solutions';
  } else if (pathname.startsWith('/technologies')) {
    page = 'technologies';
  } else if (pathname.startsWith('/training')) {
    page = 'training';
  } else if (pathname.startsWith('/About') || pathname.startsWith('/about')) {
    page = 'about';
  }

  return {
    page,
    isHomePage: page === 'home',
  };
}

/**
 * Helper to check if a section should be visible on the current page
 */
export function shouldShowSection(currentPage: ParentPage, sectionName: string): boolean {
  if (!currentPage) return true;
  
  // Always show on home and about pages
  if (currentPage === 'home' || currentPage === 'about') return true;
  
  // Hide detailed sections on other pages
  if (['cloud-detailed', 'ai-detailed', 'devops-detailed'].includes(sectionName)) {
    return false;
  }
  
  return true;
}
