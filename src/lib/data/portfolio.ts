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
		title: 'Carbon Emissions Estimator',
		description:
			'An Electron desktop app for estimating supplier carbon emissions from invoice spend, with USEEIO-based Method 1 calculations, NAICS sector mapping, and a local FastAPI service backed by MySQL emission and FX data.',
		tech: [
			'React',
			'Electron',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'Radix UI',
			'FastAPI',
			'MySQL',
			'Python',
			'Lucide'
		],
		motivation:
			'Built as a final-year project to help teams estimate portfolio carbon footprint from procurement data without relying on external SaaS tools. We wanted a local-first workflow that converts SGD spend into inflation-adjusted USD emissions using USEEIO factors, with room to grow into fuller NAICS mapping and additional calculation methods.',
		details:
			'Method 1 splits invoice spend across raw material, fabrication, and surface treatment, converts SGD to 2022 USD using FX and inflation tables, and applies kgCO₂e/USD factors per NAICS code. The Electron client routes API calls through IPC to avoid renderer CORS issues, with dev fallbacks when MySQL is unavailable.',
		highlights: [
			'USEEIO Method 1 pipeline with SGD-to-2022-USD conversion and kgCO₂e/USD factors per NAICS sector',
			'Electron + React desktop UI with IPC-backed API calls and offline-friendly dev data fallbacks',
			'FastAPI calculation service with shared TypeScript types across the renderer and API layer',
			'Home hub and NAICS mapping scaffolds for upcoming Method 2 and Method 3 modules'
		],
		links: {
			github: 'https://github.com/JoevinLau/C300'
		},
		featured: true
	},
	{
		title: 'Personal Portfolio Website',
		description:
			'A responsive personal portfolio built with SvelteKit 5 featuring an animated tech stack, expandable project cards, work and education timelines, and an EmailJS-powered contact form with no backend required.',
		tech: [
			'SvelteKit',
			'Svelte 5',
			'TypeScript',
			'Tailwind CSS',
			'Vite',
			'EmailJS',
			'Lucide',
			'shadcn-svelte'
		],
		motivation:
			'Built to present my projects, experience, and skills in one cohesive site while learning modern Svelte patterns. The goal was a fast, content-driven portfolio that is easy to update from a single data file and works well on both desktop and mobile without needing a custom backend.',
		details:
			'Site content lives in `portfolio.ts` and renders across home, projects, about, and contact routes. The home page includes an animated skills visualization, featured project grid with expand-in-place cards, and a combined work and education timeline. Contact submissions route through EmailJS when credentials are configured.',
		highlights: [
			'Data-driven content model with featured projects, experience, education, and skills in one file',
			'Expandable project cards with animated transitions and detailed case-study views',
			'Animated desktop tech stack and responsive mobile skills grid on the home page',
			'EmailJS contact form with environment-based configuration and graceful fallback messaging'
		],
		links: {
			github: 'https://github.com/wckipedia/portfolio'
		},
		featured: true
	},
	{
		title: 'Step-PDF',
		description:
			'A free PDF and file conversion toolkit built with Next.js — drop a file, pick a tool, and download the result with no accounts or paywalls. Browser tools run entirely on-device, while server routes handle Office and advanced PDF workflows.',
		tech: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'pdf-lib',
			'JSZip',
			'Python',
			'LibreOffice',
			'Ghostscript',
			'Poppler',
			'qpdf'
		],
		motivation:
			'Built to make everyday file conversions fast and accessible without sign-ups or paid tiers. The goal was a simple drop-in workflow that works immediately in the browser for common PDF tasks, with optional server-side tooling for Office formats and heavier conversions when native binaries are available.',
		details:
			'Browser tools cover image, text, merge, split, and rotate PDF flows using pdf-lib and JSZip, so they work after `pnpm dev` and deploy cleanly to Vercel. Server routes under `/api/convert` handle Word, PowerPoint, Excel, compression, protection, and PDF-to-image conversions via LibreOffice, Ghostscript, Poppler, qpdf, and pdf2docx, with uploads stored in a temporary directory and deleted after each request.',
		highlights: [
			'Client-side PDF tools for image, text, merge, split, and rotate with no file upload required',
			'Server conversion API for Office documents, PDF compression, protection, and PDF-to-Word or image exports',
			'Temporary-only upload handling so converted files are not stored permanently',
			'Deployable as a static-friendly Next.js app with optional native binary support for advanced tools'
		],
		links: {
			github: 'https://github.com/wckipedia/step-pdf'
		},
		featured: true
	},
	{
		title: 'CVify',
		description:
			'A free, client-side resume builder with live preview, 11 design templates, and PDF export. Edit on the left, see changes instantly on the right — no account, no backend, with data saved locally in the browser.',
		tech: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'Zustand',
			'React Router',
			'Radix UI',
			'dnd-kit',
			'jsPDF',
			'modern-screenshot'
		],
		motivation:
			'Built to give job seekers a polished resume builder without paywalls, sign-ups, or sending personal data to a server. The goal was a fast editor-to-preview workflow with multiple template styles — from ATS-safe layouts to more visual designs — and reliable PDF export entirely in the browser.',
		details:
			'The builder at `/builder` pairs a structured editor with a live preview panel, covering personal info, summary, skills, experience, education, projects, and certifications. Users can switch between 11 templates, tune font size and spacing, pick accent colors where supported, reorder skill categories via drag-and-drop, and export to PDF or JSON. Resume data autosaves to `localStorage` and never leaves the device.',
		highlights: [
			'Live split-panel editor with 11 templates ranging from ATS-friendly to multi-column magazine layouts',
			'Drag-and-drop skill reordering, layout controls, and section toggles for summary, projects, and certifications',
			'Client-side PDF export via modern-screenshot and jsPDF with JSON import/export for portable backups',
			'Fully static deployment with Zustand-backed persistence and no backend required'
		],
		links: {
			github: 'https://github.com/wckipedia/CVify'
		},
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
		role: 'Desktop Support Engineer | Intern',
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
		role: 'Data Entry & Desktop Support Engineer | Intern',
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
