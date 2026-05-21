<script lang="ts">
	import { projects } from '$lib/data/portfolio';
	import { ProjectCard, SectionHeading } from '$lib/components';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
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

<section id="about" class="scroll-mt-24">
	<div class="mx-auto max-w-6xl px-6 py-14">
		<SectionHeading
			eyebrow="About"
			title="Thoughtful engineering, quietly polished"
			description="A focused space for biography, process, and the values behind Lee Jia Jing's work."
		/>
		<a
			class="mt-7 inline-flex rounded-full text-sm font-semibold text-stone-800 underline-offset-4 transition hover:text-stone-950 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
			href="/about"
		>
			Read more about Lee
		</a>
	</div>
</section>

<section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<SectionHeading
		eyebrow="Projects"
		title="Selected work"
		description="A few understated project cards remain here as extension points for real case studies."
	/>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each featuredProjects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id="socials" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
	<div class="rounded-[2rem] border border-stone-200 bg-white/45 p-6 shadow-sm sm:p-8">
		<SectionHeading
			eyebrow="Socials"
			title="Elsewhere on the web"
			description="Quiet placeholders for profiles and contact routes while the portfolio grows."
		/>
		<ul class="mt-8 flex flex-wrap gap-3">
			{#each socials as social (social.label)}
				<li>
					<a
						class="inline-flex rounded-full border border-stone-200 bg-[#fbf7ef]/70 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
						href={social.href}
					>
						{social.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
