'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Code2 } from 'lucide-react';

export default function MaterialUITechPage() {
    const techData = {
        name: 'Material-UI',
        emoji: '🎨',
        icon: <Code2 className="w-6 h-6" />,
        shortDescription: 'Comprehensive React UI component library following Material Design. Expert Material-UI development for beautiful UIs.',
        heroTitle: 'Build Material Design UIs with Material-UI',
        heroSubtitle: 'Material-UI (MUI) is the most popular React component library with production-ready components following Google\'s Material Design. Build professional, accessible applications quickly with a comprehensive set of UI components, theming system, and styling solutions.',
        heroImage: '/images/tech-material-ui-rich.svg',
        heroImageAlt: 'Material-UI - React Component Library',
        services: [
            {
                title: 'Component Development',
                description: 'Build applications using Material-UI\'s extensive component library for rapid development.',
                details: 'Leverage buttons, forms, cards, dialogs, tables, and other components for complete UIs.',
            },
            {
                title: 'Custom Theming',
                description: 'Implement custom themes aligned with your brand using Material-UI\'s powerful theming system.',
                details: 'Create color schemes, typography, spacing, and component overrides for branded applications.',
            },
            {
                title: 'Responsive Design',
                description: 'Build responsive applications that work perfectly on all devices with MUI Grid and breakpoints.',
                details: 'Use Material-UI\'s responsive utilities and Grid system for mobile-first design.',
            },
            {
                title: 'Form & Input Handling',
                description: 'Create complex forms with Material-UI form components and validation.',
                details: 'Build accessible form fields with proper error handling and validation feedback.',
            },
            {
                title: 'Data Grid & Tables',
                description: 'Implement complex data tables and grids with Material-UI DataGrid component.',
                details: 'Handle sorting, filtering, pagination, and selection in large datasets efficiently.',
            },
            {
                title: 'Styling & Customization',
                description: 'Master styled-components and sx prop for custom styling and component customization.',
                details: 'Use Material-UI styling solutions to create consistent, maintainable styles.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Core Components',
                tools: ['Button', 'TextField', 'Card', 'Dialog', 'Drawer', 'AppBar', 'Menu', 'Tooltip'],
            },
            {
                title: 'Layouts',
                tools: ['Container', 'Grid', 'Box', 'Stack', 'Paper', 'Stepper', 'Breadcrumbs', 'CssBaseline'],
            },
            {
                title: 'Data Display',
                tools: ['Table', 'DataGrid', 'List', 'Tree View', 'Pagination', 'Timeline', 'Rating', 'Chip'],
            },
            {
                title: 'Input Components',
                tools: ['TextField', 'Select', 'Checkbox', 'Radio', 'Switch', 'Autocomplete', 'Slider', 'Date Picker'],
            },
            {
                title: 'Styling System',
                tools: ['sx Prop', 'styled()', 'makeStyles', 'Theme Provider', 'CSS-in-JS', 'Emotion'],
            },
            {
                title: 'Icons & Assets',
                tools: ['Material Icons', 'SVG Icons', 'Icon Font', 'Icon Library', '@mui/icons-material'],
            },
            {
                title: 'Utilities & Hooks',
                tools: ['useTheme', 'useMediaQuery', 'useScrollTrigger', 'Breakpoints', 'Spacing System'],
            },
            {
                title: 'Related Libraries',
                tools: ['MUI X', 'MUI Base', 'Emotion', 'styled-components', 'Tailwind CSS'],
            },
        ],
        whyChoose: [
            {
                title: 'Comprehensive Component Library',
                description: 'Material-UI provides 100+ production-ready components for building complete applications.',
            },
            {
                title: 'Material Design Standard',
                description: 'Follow Google\'s Material Design guidelines ensuring professional, familiar UIs.',
            },
            {
                title: 'Powerful Theming',
                description: 'Flexible theming system enables consistent branding across your application.',
            },
            {
                title: 'Accessibility Built-in',
                description: 'Components follow WCAG standards and best practices for accessibility.',
            },
            {
                title: 'TypeScript Support',
                description: 'Full TypeScript support with excellent type definitions and IDE integration.',
            },
            {
                title: 'Enterprise Ready',
                description: 'Used by millions of developers and adopted by major companies worldwide.',
            },
        ],
        keyFacts: [
            'Material-UI is the most downloaded React UI library with millions of users',
            'Based on Google\'s Material Design system, ensuring consistent, modern aesthetics',
            'Comprehensive component library includes buttons, forms, modals, cards, and more',
            'Powerful theming system enables complete customization while maintaining consistency',
            'Emotion CSS-in-JS library provides dynamic styling and runtime theming',
            'Full accessibility built-in with ARIA attributes and keyboard navigation',
            'MUI X provides advanced data grid and date picker components for enterprise needs',
            'Excellent documentation and active community with abundant resources',
        ],
        faqs: [
            {
                question: 'Should I use Material-UI or Tailwind CSS?',
                answer: 'Material-UI is better for design system applications. Tailwind CSS is better for utility-first, custom designs. Material-UI provides components and design patterns; Tailwind provides utility classes.',
            },
            {
                question: 'Can I customize Material-UI components heavily?',
                answer: 'Yes, Material-UI is highly customizable via theming, sx prop, and styled(). You can override any style or create completely custom components.',
            },
            {
                question: 'Is Material-UI good for non-Material Design applications?',
                answer: 'Yes, you can use Material-UI and customize it for any design system. The components are functional and customizable beyond Material Design.',
            },
            {
                question: 'What is MUI X and do I need it?',
                answer: 'MUI X provides advanced components like DataGrid, Charts, and Date Pickers. Use it if you need these enterprise features. Core Material-UI is free.',
            },
            {
                question: 'Does Material-UI work with TypeScript?',
                answer: 'Excellent TypeScript support! All components are fully typed with complete type definitions and IDE autocomplete.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Emotion', 'Tailwind CSS', 'Chakra UI', 'Storybook'],
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
