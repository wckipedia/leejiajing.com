export type Project = {
	title: string;
	description: string;
	details?: string;
	motivation?: string;
	highlights?: string[];
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
	/** Less inset + scale so small wordmarks read clearly in the logo box */
	logoLarge?: boolean;
	highlights: string[];
};

export const projects: Project[] = [
	{
		title: 'OCBC Virtual Teller Machine',
		description:
			'An end-to-end VTM prototype for the OCBC Ignite Innovation Challenge 2025 featuring voice-to-text, on-device intent classification via Ollama, guided banking workflows, and live-agent escalation through WebRTC with screen share, video, audio, and annotations.',
		tech: [
			'React',
			'Vite',
			'TanStack Router',
			'Zustand',
			'Tailwind CSS',
			'Transformers.js',
			'FastAPI',
			'Ollama',
			'WebRTC',
			'Express',
			'Framer Motion',
			'Lucide'
		],
		motivation:
			'We aimed to modernise in-branch banking with an AI kiosk that handles routine requests on its own, while smoothly escalating to a human agent when needed. Our goal was to run as much AI locally as possible for privacy, low latency, and offline friendly use, while keeping the experience clear and guided for common banking journeys such as payments, cards, and loans.',
		details:
			'The prototype walks users through realistic banking flows with voice input, on-device intent routing, and escalation to a live agent when confidence drops or the user asks for help. The agent session supports screen sharing, video, audio, and live annotations over a WebRTC data channel.',
		highlights: [
			'Voice-to-text capture with local Whisper transcription and optional faster-whisper ASR service',
			'Intent classification with Ollama to route users into guided banking workflows',
			'Live-agent handoff with WebRTC media, screen share, and annotation tooling',
			'Modular React frontend with TanStack Router and Zustand-backed session state'
		],
		links: {
			github: 'https://github.com/domljl/ocbc-vtm-poc'
		},
		featured: true
	},
	{
		title: 'Campus Companion',
		description: 'A placeholder student-life product concept for organizing events, resources, and reminders.',
		motivation:
			'Placeholder copy: wanted a single place where students could discover campus events, keep track of deadlines, and share useful resources without jumping between chats, PDFs, and faculty sites.',
		details:
			'Placeholder copy: this expanded view would outline the product scope, user interviews, wireframes, and the core flows for event discovery, reminders, and lightweight resource sharing.',
		highlights: [
			'Placeholder user research summary and problem framing',
			'Placeholder event feed and reminder workflow concepts',
			'Placeholder mobile-first navigation and onboarding screens'
		],
		tech: ['TypeScript', 'UX Research', 'Prototyping'],
		featured: true
	},
	{
		title: 'Learning Journal',
		description: 'A lightweight writing space for documenting experiments, notes, and project reflections.',
		motivation:
			'Placeholder copy: created to make it easier to capture what was tried, what worked, and what to revisit after labs, hackathons, and side projects.',
		details:
			'Placeholder copy: the expanded case study would cover the writing workflow, markdown structure, tagging model, and how entries tie back to portfolio projects over time.',
		highlights: [
			'Placeholder markdown-first editor flow',
			'Placeholder tagging and search concepts for past experiments',
			'Placeholder export and reflection templates for project writeups'
		],
		tech: ['SvelteKit', 'Markdown', 'Design Systems'],
		featured: true
	},
	{
		title: 'Data Dashboard Concept',
		description: 'A visual dashboard placeholder for turning raw information into clear, actionable insights.',
		motivation:
			'Placeholder copy: explored how to present operational metrics in a way that stays readable on smaller screens and remains accessible to non-technical stakeholders.',
		details:
			'Placeholder copy: this section would describe the dashboard information architecture, chart selection, filtering patterns, and responsive layout decisions.',
		highlights: [
			'Placeholder KPI summary cards and trend visualizations',
			'Placeholder filter and comparison interactions',
			'Placeholder accessibility and color-contrast considerations'
		],
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
		organization: 'Nanyang Technological University',
		role: 'Desktop Support',
		period: 'Jul 2023 — Nov 2023',
		logo: '/images/ntu logo.svg.png',
		highlights: [
			'Assisted with onboarding and offboarding of staff devices.',
			'Configured laptops with required software and set up office equipment for new users.',
			'Performed secure data wiping on decommissioned hard drives.',
			'Provided on-site technical support for hardware and software issues.'
		]
	},
	{
		organization: 'Indoguna Singapore',
		role: 'Data Entry & Desktop Support',
		period: 'May 2022 — Nov 2022',
		logo: '/images/indoguna logo.webp',
		logoLarge: true,
		highlights: [
			'Supported SAP system migration through data entry, cleansing, and validation.',
			'Joined the IT Help Desk to assist users with troubleshooting, system training, and process improvements.'
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
