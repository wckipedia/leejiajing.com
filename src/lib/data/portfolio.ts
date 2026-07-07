export type Project = {
	id: string;
	title: string;
	summary: string;
	context: string;
	problem: string;
	decisions: string[];
	result: string;
	tech: string[];
	links?: {
		github?: string;
		demo?: string;
	};
};

export type TimelineEntry = {
	id: string;
	organization: string;
	role: string;
	period: string;
	highlights: string[];
};

export const projects: Project[] = [
	{
		id: 'ocbc-virtual-teller-machine',
		title: 'OCBC Virtual Teller Machine',
		summary:
			'A guided banking prototype that combines local AI routing with a live WebRTC agent handoff.',
		context: 'OCBC Ignite Innovation Challenge 2025',
		problem:
			'Routine banking requests need a clear self-service path without removing access to a human when the request becomes uncertain or sensitive.',
		decisions: [
			'Keep intent classification local with Ollama to reduce latency and limit unnecessary data transfer.',
			'Model common banking tasks as guided workflows instead of asking a chat interface to handle every step.',
			'Use WebRTC media and data channels for video, audio, screen sharing, and live annotations during escalation.'
		],
		result:
			'A working end-to-end prototype that accepts voice input, routes common requests, and moves the customer into a live agent session when human help is needed.',
		tech: [
			'React',
			'TypeScript',
			'TanStack Router',
			'Zustand',
			'FastAPI',
			'Ollama',
			'WebRTC'
		],
		links: {
			github: 'https://github.com/domljl/ocbc-vtm-poc'
		}
	},
	{
		id: 'carbon-emissions-estimator',
		title: 'Carbon Emissions Estimator',
		summary:
			'A local-first desktop workflow that estimates supplier emissions from invoice spending data.',
		context: 'Final-year software project',
		problem:
			'Procurement teams need a practical way to turn supplier spend into comparable carbon estimates without depending on an external SaaS workflow.',
		decisions: [
			'Use Electron for a desktop workflow that can coordinate local services and data.',
			'Route renderer requests through IPC to keep the UI isolated from backend networking concerns.',
			'Convert SGD spend into inflation-adjusted 2022 USD before applying USEEIO factors by NAICS sector.'
		],
		result:
			'A usable Method 1 workflow that maps invoice categories, performs currency and inflation adjustments, and returns kgCO₂e estimates from a local FastAPI service.',
		tech: ['Electron', 'React', 'TypeScript', 'FastAPI', 'Python', 'MySQL', 'USEEIO'],
		links: {
			github: 'https://github.com/JoevinLau/C300'
		}
	},
	{
		id: 'personal-portfolio',
		title: 'Personal Portfolio Website',
		summary:
			'A fast, content-driven SvelteKit portfolio with accessible interactions and a serverless contact flow.',
		context: 'Personal portfolio',
		problem:
			'Project work, experience, and contact paths need to be easy for recruiters to scan without sacrificing technical detail or mobile usability.',
		decisions: [
			'Keep reusable portfolio content in typed data instead of duplicating it across routes.',
			'Use Svelte-native behavior and CSS for interaction rather than adding another UI framework.',
			'Use EmailJS for a contact path that does not require a custom backend.'
		],
		result:
			'A responsive portfolio that brings projects, career history, resume access, and contact into one maintainable SvelteKit application.',
		tech: ['SvelteKit', 'Svelte 5', 'TypeScript', 'Tailwind CSS', 'Vite', 'EmailJS'],
		links: {
			github: 'https://github.com/wckipedia/portfolio'
		}
	},
	{
		id: 'step-pdf',
		title: 'Step-PDF',
		summary:
			'A no-account file conversion toolkit with browser-native PDF tools and optional server processing.',
		context: 'Personal web application',
		problem:
			'Everyday document conversion tools often add paywalls, accounts, or unnecessary uploads to simple file operations.',
		decisions: [
			'Run common PDF operations in the browser so files do not need to leave the device.',
			'Keep heavier Office and advanced PDF conversions behind server routes that can call native tools.',
			'Store uploads only in temporary directories and remove them after conversion.'
		],
		result:
			'A usable conversion interface for image, text, merge, split, and rotate workflows, with optional support for Office documents and advanced PDF operations.',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'pdf-lib', 'Python', 'LibreOffice'],
		links: {
			github: 'https://github.com/wckipedia/step-pdf'
		}
	},
	{
		id: 'cvify',
		title: 'CVify',
		summary:
			'A private, client-side resume builder with live editing, flexible templates, and PDF export.',
		context: 'Personal web application',
		problem:
			'Job seekers need a polished resume builder without subscriptions, accounts, or sending personal career data to a server.',
		decisions: [
			'Keep resume data in the browser with Zustand persistence and JSON import and export.',
			'Pair a structured editor with an immediate preview so layout decisions remain visible while writing.',
			'Generate PDFs on the client with modern-screenshot and jsPDF.'
		],
		result:
			'A working split-panel builder with 11 templates, layout controls, drag-and-drop skill ordering, and local PDF export.',
		tech: ['React', 'TypeScript', 'Vite', 'Zustand', 'Radix UI', 'dnd-kit', 'jsPDF'],
		links: {
			github: 'https://github.com/wckipedia/CVify'
		}
	}
];

export const work: TimelineEntry[] = [
	{
		id: 'ntu-desktop-support-2023',
		organization: 'Nanyang Technological University',
		role: 'Desktop Support Engineer Intern',
		period: 'Jul 2023 - Nov 2023',
		highlights: [
			'Configured laptops, software, workstations, and office equipment for staff onboarding.',
			'Performed secure data sanitization on retired storage devices.',
			'Resolved hardware and software issues through on-site technical support.'
		]
	},
	{
		id: 'indoguna-support-2022',
		organization: 'Indoguna Singapore',
		role: 'Data Entry and Desktop Support Engineer Intern',
		period: 'May 2022 - Nov 2022',
		highlights: [
			'Supported an SAP migration through data validation, cleansing, and entry.',
			'Provided IT help desk support and assisted employees with new business processes.',
			'Worked with the team to identify practical workflow improvements.'
		]
	}
];

export const education: TimelineEntry[] = [
	{
		id: 'republic-polytechnic-diploma',
		organization: 'Republic Polytechnic',
		role: 'Diploma · Information Technology',
		period: '2024 - 2027',
		highlights: [
			'OCBC Ignite Innovation Challenge | 2025',
			'University of Glasgow Hackathon | 2025',
			'DSTA Brainhack CODE_EXP | 2026',
			'DSTA Brainhack CODE_EXP | 2025'
		]
	},
	{
		id: 'ite-higher-nitec',
		organization: 'Institute of Technical Education',
		role: 'Higher National ITE Certificate · Cyber & Network Security',
		period: '2022 - 2023',
		highlights: [
			"Director's List | Top 10% | 2023",
			'Edusave Certificate of Academic Achievement | Top 10% | 2024'
		]
	},
	{
		id: 'ite-nitec',
		organization: 'Institute of Technical Education',
		role: 'National ITE Certificate · Information Technology',
		period: '2020 - 2022',
		highlights: [
			'Deputy Chairman | ICT Club',
			'Edusave Skills Awards | Top 25%',
			'Edusave Certificate of Academic Achievement | Top 10% | 2022',
			'Edusave Certificate of Academic Achievement | Top 10% | 2021'
		]
	}
];
