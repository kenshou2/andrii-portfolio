import type { ProjectDetails } from "./AboutProject";

export const projectsDetails: ProjectDetails[] = [
    {
        tab: 'Language platform',
        usedTeck: ['React', 'TypeScript', 'Tailwind', 'React Router', 'TanStack Query'],
        usedTools: ['Git', 'GitHub', 'Figma'],
        about: {
            paragraph: '',
            list: [
                'Multi-page platform with scalable, component-based architecture',
                'Feature-based folder structure reducing code duplication (~30%) and improving maintainability',
                'TypeScript-based mock API supporting full CRUD workflows with asynchronous handling',
                'Server-state management with TanStack Query: caching, background refetch, error/loading handling',
                'Nested & dynamic routing for clean URLs and scalable navigation',
                'Responsive layout supporting multiple screen sizes',
            ],
        },
        repositoryUrl: 'https://github.com/kenshou2/react-japanese-learning-platform',
        liveDemoUrl: 'https://kenshou2.github.io/react-japanese-learning-platform/',
    },
    {
        tab: 'Photo library',
        usedTeck: ['HTML', 'CSS', 'TypeScript'],
        usedTools: ['Git', 'GitHub', 'Figma'],
        about: {
            paragraph: '',
            list: [
                'Multi-page photo library website with complex layouts and interactive UI behavior',
                'Lightweight SPA architecture built from scratch using lit-html',
                'Custom routing logic enabling smooth page transitions without external frameworks',
                'Reusable components for buttons and navigation',
                'Fluid UI interactions (hover effects, animations)',
            ],
        },
        repositoryUrl: 'https://github.com/kenshou2/vanilla-photo-library-website',
        liveDemoUrl: 'https://kenshou2.github.io/vanilla-photo-library-website/',
    },
    {
        tab: 'Business website',
        usedTeck: ['Angular', 'TypeScript', 'SCSS'],
        usedTools: ['Git', 'GitHub', 'Figma'],
        about: {
            paragraph: '',
            list: [
                'Production-ready modular Angular application with maintainable code structure',
                'Figma to code implementation, maintaining visual fidelity',
                'Component & service-based design to simplify future updates',
                'Delivered full project ownership: design - development - deployment',
            ],
        },
        repositoryUrl: 'https://github.com/kenshou2/angular-business-website',
        liveDemoUrl: 'https://kenshou2.github.io/angular-business-website/',
    },
]

export const LANGUAGE_PLATFORM_IMAGES = [
    'language-platform-1.png',
    'language-platform-2.png',
    'language-platform-3.png',
    'language-platform-4.png',
    'language-platform-5.png',
    'language-platform-6.png',
    'language-platform-7.png',
    'language-platform-8.png',
    'language-platform-9.png',
    'language-platform-10.png',
];

export const PHOTO_LIBRARY_IMAGES = [
    'photo-library-1.png',
    'photo-library-2.png',
    'photo-library-3.png',
    'photo-library-4.png',
    'photo-library-5.png',
    'photo-library-6.png',
];

export const BUSINESS_WEBSITE_IMAGES = [
    'business-website-1.png',
    'business-website-2.png',
    'business-website-3.png',    
    'business-website-4.png',    
];