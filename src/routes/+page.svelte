<script lang="ts">
	import { education, projects, work } from '$lib/data/portfolio';
	import { ExperienceTimeline, ProjectCard, SectionHeading } from '$lib/components';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
	const technologies = [
		{
			name: 'SvelteKit',
			icon: 'https://cdn.simpleicons.org/svelte/FF3E00',
			x: '14%',
			y: '18%',
			delay: '0ms'
		},
		{
			name: 'TypeScript',
			icon: 'https://cdn.simpleicons.org/typescript/3178C6',
			x: '78%',
			y: '16%',
			delay: '-900ms'
		},
		{
			name: 'Tailwind CSS',
			icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
			x: '50%',
			y: '42%',
			delay: '-1600ms'
		},
		{
			name: 'JavaScript',
			icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
			x: '20%',
			y: '78%',
			delay: '-2400ms'
		},
		{
			name: 'HTML',
			icon: 'https://cdn.simpleicons.org/html5/E34F26',
			x: '58%',
			y: '78%',
			delay: '-3200ms'
		},
		{
			name: 'Git',
			icon: 'https://cdn.simpleicons.org/git/F05032',
			x: '84%',
			y: '62%',
			delay: '-4200ms'
		}
	];

	const emailAddress = 'leejiajing76@gmail.com';

	const socialLinks = [
		{
			label: 'GitHub',
			href: 'https://github.com/',
			icon: 'github'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/',
			icon: 'linkedin'
		}
	] as const;

	const heroActionClass =
		'flex size-11 items-center justify-center rounded-md border border-stone-300/80 bg-[#fbf7ef] text-stone-600 transition hover:border-stone-400 hover:bg-white hover:text-stone-950 active:scale-95 focus:outline-none';

	const heroResumeClass =
		'inline-flex h-11 items-center gap-2 rounded-md border border-stone-300/80 bg-[#fbf7ef] px-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-white hover:text-stone-950 active:scale-[0.98] focus:outline-none';

	let emailCopied = $state(false);
	let emailCopyTimeout: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(emailAddress);
			emailCopied = true;
			clearTimeout(emailCopyTimeout);
			emailCopyTimeout = setTimeout(() => {
				emailCopied = false;
			}, 2400);
		} catch {
			window.location.href = `mailto:${emailAddress}`;
		}
	}
</script>

<svelte:head>
	<title>lee jia jing</title>
	<meta
		name="description"
		content="Personal portfolio for Lee Jia Jing, a software engineer building simple, thoughtful web experiences."
	/>
</svelte:head>

<section class="relative overflow-hidden">
	<div
		class="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16"
	>
		<div class="mx-auto flex w-full max-w-xl justify-center lg:mx-0 lg:justify-start">
			<img
				class="w-full max-w-[20rem] object-contain sm:max-w-[28rem] lg:max-w-[32rem]"
				src="/images/personal%20logo.svg"
				alt="Lee Jia Jing personal logo"
			/>
		</div>

		<div class="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
			<p class="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-900/80">
				Personal Portfolio
			</p>
			<h1 class="text-5xl font-bold tracking-[-0.045em] text-stone-950 sm:text-7xl">
				Lee Jia Jing
			</h1>
			<p class="mt-6 text-lg font-medium leading-8 text-stone-600 sm:text-xl">
				Software engineer building simple, thoughtful web experiences with a focus on clear
				interfaces, useful systems, and polished details.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
					<a
						class={heroResumeClass}
						href="/resume.pdf"
						download="Lee_Jia_Jing_Resume.pdf"
					>
						<svg
							class="size-4 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
							/>
						</svg>
						Download resume
					</a>

					{#each socialLinks as link (link.label)}
						<a
							class={heroActionClass}
							href={link.href}
							aria-label={link.label}
							target="_blank"
							rel="noreferrer"
						>
							{#if link.icon === 'github'}
								<svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
									/>
								</svg>
							{:else}
								<svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{/if}
						</a>
					{/each}

					<button
						type="button"
						class={heroActionClass}
						aria-label="Copy email address"
						onclick={copyEmail}
					>
						<svg
							class="size-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 6h16v12H4V6zm0 0 8 7 8-7"
							/>
						</svg>
					</button>
			</div>
		</div>
	</div>
</section>

{#if emailCopied}
	<p
		class="copy-toast fixed bottom-6 left-6 z-[60] rounded-md border border-stone-300/80 bg-[#fbf7ef] px-4 py-2 text-sm font-medium text-stone-800 shadow-md"
		role="status"
		aria-live="polite"
	>
		Email copied to clipboard
	</p>
{/if}

<section id="skills" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
		<SectionHeading
			eyebrow="Skills"
			title="Technologies I work with"
			description="A visual index of the languages, frameworks, and tools I reach for when building web experiences."
		/>

		<div class="relative min-h-[34rem] overflow-hidden">
			<ul class="relative h-[34rem]">
				{#each technologies as technology (technology.name)}
					<li
						class="tech-bubble group flex flex-col items-center justify-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6] p-4 text-center shadow-sm transition hover:z-10 hover:border-stone-500 hover:bg-[#fbf7ef] hover:shadow-md"
						style={`--x: ${technology.x}; --y: ${technology.y}; animation-delay: ${technology.delay};`}
					>
						<img class="size-9 shrink-0" src={technology.icon} alt="" loading="lazy" />
						<p class="max-w-24 text-sm font-bold leading-tight tracking-[-0.02em] text-stone-950">
							{technology.name}
						</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section id="experience" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<SectionHeading
		eyebrow="Experience"
		title="Work and education"
		description="A timeline of roles, studies, and the work that shaped how I build software."
	/>

	<ExperienceTimeline {work} {education} />
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<SectionHeading
		eyebrow="Projects"
		title="Selected work"
		description="A small edit of project work, presented as quiet tiles with room for the details to breathe."
	/>
	<div class="mt-10 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
		{#each featuredProjects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
