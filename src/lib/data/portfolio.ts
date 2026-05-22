export type Project = {
	title: string;
	description: string;
	tech: string[];
	links?: {
		github?: string;
		demo?: string;
	};
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Portfolio Starter',
		description: 'A personal website foundation with reusable sections, project cards, and Tailwind styling.',
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
		tech: ['TypeScript', 'UX Research', 'Prototyping'],
		featured: true
	},
	{
		title: 'Learning Journal',
		description: 'A lightweight writing space for documenting experiments, notes, and project reflections.',
		tech: ['SvelteKit', 'Markdown', 'Design Systems'],
		featured: true
	},
	{
		title: 'Data Dashboard Concept',
		description: 'A visual dashboard placeholder for turning raw information into clear, actionable insights.',
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

export const education = [
	{
		school: 'Placeholder University',
		program: 'Degree or program name',
		period: '2023 - Present'
	},
	{
		school: 'Relevant Coursework',
		program: 'Web development, software engineering, databases, and human-computer interaction',
		period: '2024'
	},
	{
		school: 'Self-Directed Learning',
		program: 'Building projects with SvelteKit, TypeScript, Tailwind CSS, and modern frontend tools',
		period: 'Ongoing'
	}
];
