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

export type TimelineEntry = {
	organization: string;
	role: string;
	period: string;
	logo?: string;
	highlights: string[];
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
		organization: 'Placeholder University',
		role: 'B.Sc. Computer Science (or related program)',
		period: '2023 — Present',
		highlights: [
			'Coursework in web development, software engineering, and databases.',
			'Applied classroom concepts through team projects and lab work.'
		]
	},
	{
		organization: 'Relevant Coursework',
		role: 'Selected areas of study',
		period: '2024',
		highlights: [
			'Web development, human-computer interaction, and data structures.',
			'Practical focus on building usable, well-structured applications.'
		]
	},
	{
		organization: 'Self-Directed Learning',
		role: 'Independent study',
		period: 'Ongoing',
		highlights: [
			'Building projects with SvelteKit, TypeScript, and Tailwind CSS.',
			'Exploring modern frontend tooling, design systems, and UI polish.'
		]
	}
];
