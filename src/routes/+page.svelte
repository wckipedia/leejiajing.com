<script lang="ts">
	import { education, projects } from '$lib/data/portfolio';
	import { ProjectCard, SectionHeading } from '$lib/components';

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
	const socials = [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'Email', href: 'mailto:hello@example.com' }
	];
</script>

<svelte:head>
	<title>lee jia jing</title>
	<meta
		name="description"
		content="Personal portfolio for Lee Jia Jing, a software engineer building simple, thoughtful web experiences."
	/>
</svelte:head>

<section class="relative overflow-hidden">
	<div class="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/55 to-transparent"></div>
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
			<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
				<a
					href="/#projects"
					class="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
				>
					View Projects
				</a>
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/55 px-6 py-3 text-sm font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
				>
					Get in Touch
				</a>
			</div>
		</div>
	</div>
</section>

<section id="skills" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
		<SectionHeading
			eyebrow="Skills"
			title="Technologies I work with"
			description="A visual index of the languages, frameworks, and tools I reach for when building web experiences."
		/>

		<div class="relative min-h-[34rem] overflow-hidden border-b border-stone-300/80">
			<div
				class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-stone-300/80"
				aria-hidden="true"
			></div>
			<div
				class="absolute left-[15%] right-[15%] top-1/2 border-t border-dashed border-stone-300/70"
				aria-hidden="true"
			></div>
			<div
				class="absolute bottom-[18%] left-1/2 top-[18%] border-l border-dashed border-stone-300/70"
				aria-hidden="true"
			></div>

			<ul class="relative h-[34rem]">
				{#each technologies as technology (technology.name)}
					<li
						class="tech-bubble group flex flex-col items-center justify-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6]/80 p-4 text-center shadow-sm backdrop-blur-sm transition hover:z-10 hover:border-stone-500 hover:bg-[#fbf7ef] hover:shadow-md"
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

<section id="education" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<SectionHeading
		eyebrow="Education"
		title="Learning timeline"
		description="A simple timeline for education, coursework, and the experiences shaping Lee Jia Jing's work."
	/>

	<div class="relative mt-12">
		<div class="absolute bottom-0 left-4 top-0 w-px bg-stone-300 sm:left-1/2 sm:-translate-x-1/2"></div>

		<div class="space-y-10">
			{#each education as item, index (item.school)}
				<article class="relative grid gap-5 sm:grid-cols-2 sm:gap-10">
					<div
						class={[
							'pl-12 sm:pl-0',
							index % 2 === 0 ? 'sm:text-right' : 'sm:col-start-2'
						]}
					>
						<p class="text-sm font-semibold uppercase tracking-[0.25em] text-amber-900/80">
							{item.period}
						</p>
						<h3 class="mt-3 text-2xl font-bold tracking-[-0.03em] text-stone-950">
							{item.school}
						</h3>
						<p class="mt-3 text-base font-medium leading-7 text-stone-600">{item.program}</p>
					</div>

					<span
						class="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-[#f7f0e6] bg-stone-950 sm:left-1/2"
						aria-hidden="true"
					></span>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<SectionHeading
		eyebrow="Projects"
		title="Selected work"
		description="A few understated project cards remain here as extension points for real case studies."
	/>
	<div class="mt-10 divide-y divide-stone-300/80 border-y border-stone-300/80">
		{#each featuredProjects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id="socials" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<div class="grid gap-10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
		<SectionHeading
			eyebrow="Socials"
			title="Elsewhere on the web"
			description="Quiet placeholders for profiles and contact routes while the portfolio grows."
		/>

		<ul class="divide-y divide-stone-300/80">
			{#each socials as social, index (social.label)}
				<li class="grid grid-cols-[3rem_1fr] items-center gap-4 py-4">
					<span class="font-mono text-xs text-stone-400">
						{String(index + 1).padStart(2, '0')}
					</span>
					<a
						class="group flex items-center justify-between gap-4 text-sm font-semibold text-stone-700 transition hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
						href={social.href}
					>
						{social.label}
						<span class="font-mono text-xs text-stone-400 transition group-hover:translate-x-1 group-hover:text-stone-700">
							->
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
