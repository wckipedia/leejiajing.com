<script lang="ts">
	import { education } from '$lib/data/portfolio';
	import { SectionHeading } from '$lib/components';

	const experience = [
		{
			role: 'Frontend Developer',
			company: 'Placeholder Studio',
			period: '2025 - Present',
			summary: 'Describe project work, measurable impact, and technologies used.'
		},
		{
			role: 'Student Project Lead',
			company: 'Campus Initiative',
			period: '2024 - 2025',
			summary: 'Highlight teamwork, delivery, and learning outcomes from a meaningful project.'
		}
	];
</script>

<svelte:head>
	<title>Resume | Lee Jia Jing</title>
	<meta
		name="description"
		content="Placeholder resume page for Lee Jia Jing with education, experience, and PDF resume link."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-20">
	<div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
		<SectionHeading
			eyebrow="Resume"
			title="Experience and education"
			description="A structured resume page ready for real details."
		/>
		<a
			class="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f7f0e6]"
			href="/resume.pdf"
		>
			Download PDF
		</a>
	</div>

	<div class="mt-12 grid gap-10 lg:grid-cols-2">
		<section aria-labelledby="experience-heading">
			<h2 id="experience-heading" class="text-2xl font-semibold text-stone-950">Experience</h2>
			<div class="mt-6 space-y-4">
				{#each experience as item (item.role)}
					<article class="rounded-3xl border border-stone-200 bg-white/50 p-6">
						<p class="text-sm font-semibold text-amber-800">{item.period}</p>
						<h3 class="mt-2 text-xl font-semibold text-stone-950">{item.role}</h3>
						<p class="mt-1 text-stone-500">{item.company}</p>
						<p class="mt-4 text-stone-600">{item.summary}</p>
					</article>
				{/each}
			</div>
		</section>

		<section aria-labelledby="education-heading">
			<h2 id="education-heading" class="text-2xl font-semibold text-stone-950">Education</h2>
			<div class="mt-6 space-y-4">
				{#each education as item (item.organization)}
					<article class="rounded-3xl border border-stone-200 bg-white/50 p-6">
						<p class="text-sm font-semibold text-amber-800">{item.period}</p>
						<h3 class="mt-2 text-xl font-semibold text-stone-950">{item.organization}</h3>
						<p class="mt-2 text-stone-600">{item.role}</p>
					</article>
				{/each}
			</div>
		</section>
	</div>
</section>
