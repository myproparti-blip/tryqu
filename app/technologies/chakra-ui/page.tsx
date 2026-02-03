'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function ChakraUITechPage() {
    const techData = {
        name: 'Chakra UI',
        emoji: '🎨',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription: 'Accessible React component library with simple, composable components. Expert Chakra UI development for rapid UI creation.',
        heroTitle: 'Build Accessible UIs Fast with Chakra UI',
        heroSubtitle: 'Chakra UI is a simple, accessible component library built on React that empowers developers to build beautiful, inclusive interfaces quickly. With a focus on developer experience and accessibility, Chakra UI makes it easy to build responsive applications with consistent theming and styling.',
        heroImage: '/images/tech-chakra-ui-rich.svg',
        heroImageAlt: 'Chakra UI - React Component Library',
        services: [
            {
                title: 'Component-Based Development',
                description: 'Build applications using Chakra UI\'s simple, composable component primitives.',
                details: 'Create flexible UIs with Box, Flex, Grid, and other layout components combined with form and display components.',
            },
            {
                title: 'Theme Customization',
                description: 'Implement custom themes with Chakra UI\'s token-based theming system.',
                details: 'Extend or override theme colors, typography, and component styles for your brand.',
            },
            {
                title: 'Accessible Component Building',
                description: 'Build inclusive applications with accessibility built-in to every component.',
                details: 'Chakra components include proper ARIA attributes, keyboard navigation, and screen reader support.',
            },
            {
                title: 'Responsive Design',
                description: 'Create responsive UIs easily with Chakra\'s responsive array and breakpoint syntax.',
                details: 'Use responsive props to adjust styles at different breakpoints with clean syntax.',
            },
            {
                title: 'Dark Mode Support',
                description: 'Implement dark mode and light mode switching with Chakra\'s color mode system.',
                details: 'Built-in dark mode support with easy theme switching and persistence.',
            },
            {
                title: 'Custom Hooks & Utilities',
                description: 'Leverage Chakra\'s custom hooks for common UI patterns and interactions.',
                details: 'Use hooks like useDisclosure, useToast, useClipboard for enhanced functionality.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Layout Components',
                tools: ['Box', 'Flex', 'Grid', 'Stack', 'Container', 'Spacer', 'Wrap', 'Center'],
            },
            {
                title: 'Form Components',
                tools: ['Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'Textarea', 'NumberInput', 'Slider'],
            },
            {
                title: 'Display Components',
                tools: ['Button', 'Card', 'Badge', 'Avatar', 'Image', 'Icon', 'Spinner', 'Progress'],
            },
            {
                title: 'Overlay Components',
                tools: ['Modal', 'Drawer', 'Tooltip', 'Popover', 'Toast', 'AlertDialog', 'Menu'],
            },
            {
                title: 'Styling System',
                tools: ['styled()', 'Chakra Factory', 'CSS Prop', 'Theme Provider', 'useStyleConfig'],
            },
            {
                title: 'Theme & Design',
                tools: ['Chakra Theme', 'Color Mode', 'Tokens', 'Breakpoints', 'Sizes', 'Spacing'],
            },
            {
                title: 'Custom Hooks',
                tools: ['useDisclosure', 'useToast', 'useClipboard', 'useBoolean', 'useCounter', 'usePrevious'],
            },
            {
                title: 'Related Libraries',
                tools: ['Framer Motion', 'React Query', 'Form Libraries', 'Storybook', 'Testing Library'],
            },
        ],
        whyChoose: [
            {
                title: 'Accessibility First',
                description: 'Every Chakra component is built with accessibility as a core principle, not an afterthought.',
            },
            {
                title: 'Simple & Intuitive',
                description: 'Chakra API is clean and intuitive, making it easy to learn and use.',
            },
            {
                title: 'Developer Experience',
                description: 'Great developer experience with clear documentation and helpful error messages.',
            },
            {
                title: 'Composable Components',
                description: 'Flexible component composition enables building complex UIs from simple primitives.',
            },
            {
                title: 'Dark Mode Built-in',
                description: 'Built-in dark mode support with easy theme switching and user preferences.',
            },
            {
                title: 'Active Community',
                description: 'Strong community with regular updates, good documentation, and helpful discussions.',
            },
        ],
        keyFacts: [
            'Chakra UI focuses on simplicity and accessibility, prioritizing developer and user experience',
            'Every component is built on Chakra\'s constraint-based design system using design tokens',
            'Built-in accessibility with ARIA attributes, keyboard navigation, and semantic HTML',
            'Responsive design using Chakra\'s responsive array syntax for clean, readable code',
            'Color mode system enables light and dark theme support with minimal configuration',
            'Chakra hooks provide convenient abstractions for common UI patterns like modals and toasts',
            'Emotion CSS-in-JS under the hood provides dynamic styling and theming capabilities',
            'Chakra is widely adopted with millions of downloads and strong community support',
        ],
        faqs: [
            {
                question: 'How does Chakra UI compare to Material-UI?',
                answer: 'Chakra UI is more lightweight and focuses on simplicity and accessibility. Material-UI has more components and enforces Material Design. Choose Chakra for quick development, Material-UI for comprehensive design systems.',
            },
            {
                question: 'Is Chakra UI good for production applications?',
                answer: 'Absolutely! Chakra UI is used in production by many companies. It\'s stable, well-maintained, and suitable for enterprise applications.',
            },
            {
                question: 'Can I use Chakra UI with TypeScript?',
                answer: 'Yes, Chakra UI has excellent TypeScript support with complete type definitions for all components and props.',
            },
            {
                question: 'How customizable is Chakra UI?',
                answer: 'Very customizable. Extend the theme, override component styles using the sx prop or styled(), and create custom components. Balances customization with consistency.',
            },
            {
                question: 'Can I combine Chakra UI with Tailwind CSS?',
                answer: 'Generally not recommended due to CSS conflicts. Choose one or the other. Some people use Tailwind utilities alongside Chakra, but it\'s better to pick one approach.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Emotion', 'Framer Motion', 'Material-UI', 'Storybook'],
    };

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                                <TechDetailTemplate {...techData} />
                
            </main>
            <AppverseFooter />
        </>
    );
}
