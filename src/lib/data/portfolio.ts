export type Project = {
	title: string;
	description: string;
	details?: string;
	tech: string[];
	links?: {
		github?: string;
		demo?: string;
	};
	featured?: boolean;
};

export type TimelineEntry = {
	organization: string;
	role: string;
	period: string;
	logo?: string;
	logoFill?: boolean;
	highlights: string[];
};

export const projects: Project[] = [
	{
		title: 'Portfolio Starter',
		description: 'A personal website foundation with reusable sections, project cards, and Tailwind styling.',
		details: 'A fully responsive portfolio built from the ground up with SvelteKit and Tailwind CSS. Features smooth scroll-snap navigation, animated skill bubbles, and a timeline-based experience section. Designed with accessibility and performance in mind.',
		tech: ['SvelteKit', 'Svelte 5', 'Tailwind CSS'],
		links: {
			github: 'https://github.com/',
			demo: '/'
		},
		featured: true
	},
	{
		title: 'Campus Companion',
		description: 'A placeholder student-life product concept for organizing events, resources, and reminders.',
		details: 'A concept application designed to help students organize campus events, manage resources, and set reminders. Focused on user research and prototyping to validate the idea before development.',
		tech: ['TypeScript', 'UX Research', 'Prototyping'],
		featured: true
	},
	{
		title: 'Learning Journal',
		description: 'A lightweight writing space for documenting experiments, notes, and project reflections.',
		details: 'A minimalist journaling tool for developers to document experiments, take notes, and reflect on projects. Built with a Markdown-first approach and a clean design system for consistent styling.',
		tech: ['SvelteKit', 'Markdown', 'Design Systems'],
		featured: true
	},
	{
		title: 'Data Dashboard Concept',
		description: 'A visual dashboard placeholder for turning raw information into clear, actionable insights.',
		details: 'A dashboard concept focused on presenting complex data in an accessible, visual format. Designed with chart accessibility and responsive frontend architecture principles.',
		tech: ['Charts', 'Accessibility', 'Frontend Architecture']
	}
];

export const skills = [
	'SvelteKit',
	'TypeScript',
	'Tailwind CSS',
	'Responsive UI',
	'Accessibility',
	'Product thinking'
];

export const work: TimelineEntry[] = [
	{
		organization: 'Placeholder Company',
		role: 'Software Engineer Intern',
		period: '2024 — Present',
		highlights: [
			'Built internal tools with TypeScript and modern frontend frameworks.',
			'Collaborated with design on accessible, responsive interface patterns.',
			'Improved workflow reliability through testing and code review.'
		]
	},
	{
		organization: 'Freelance / Personal Projects',
		role: 'Frontend Developer',
		period: '2023 — Present',
		highlights: [
			'Shipped portfolio and side projects with SvelteKit and Tailwind CSS.',
			'Focused on clean layout, performance, and thoughtful interaction design.'
		]
	}
];

export const education: TimelineEntry[] = [
	{
		organization: 'Republic Polytechnic',
		role: 'Diploma in Information Technology',
		period: '2024 — 2027',
		logo: '/images/rp logo.avif',
		highlights: [
			'Coursework in web development, software engineering, and databases.',
			'Applied classroom concepts through team projects and lab work.'
		]
	},
	{
		organization: 'Institute of Technical Education',
		role: 'Higher National ITE Certificate in Cyber & Network Security',
		period: '2022 — 2023',
		logo: '/images/ite logo.png',
		logoFill: true,
		highlights: [
			'Studied network security fundamentals, threat analysis, and defence strategies.',
			'Gained hands-on experience with security tools and protocols.'
		]
	},
	{
		organization: 'Institute of Technical Education',
		role: 'National ITE Certificate in Information Technology',
		period: '2021 — 2022',
		logo: '/images/ite logo.png',
		logoFill: true,
		highlights: [
			'Built a foundation in IT fundamentals, programming, and system administration.',
			'Developed practical skills through coursework and project-based learning.'
		]
	}
];
