<script lang="ts">
	import { education } from '$lib/data/portfolio';
	import { SectionHeading } from '$lib/components';

	const values = [
		'Building with clarity and care',
		'Learning in public through projects',
		'Designing useful experiences for real people'
	];

	const interests = ['Frontend engineering', 'Product design', 'AI-assisted workflows', 'Community'];
</script>

<svelte:head>
	<title>About Lee Jia Jing</title>
	<meta
		name="description"
		content="Learn more about Lee Jia Jing, including biography, values, interests, and education."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
	<SectionHeading
		eyebrow="About"
		title="A short introduction for Lee Jia Jing"
		description="Replace this placeholder with a personal story, career direction, and the kind of work Lee wants to be known for."
	/>

	<div class="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.4fr_1fr]">
		<article class="rounded-3xl border border-stone-200 bg-white/50 p-5 sm:p-8">
			<h2 class="text-2xl font-semibold text-stone-950">Biography</h2>
			<p class="mt-4 leading-8 text-stone-600">
				Lee Jia Jing is a developing technologist with an interest in thoughtful digital products,
				practical engineering, and continuous learning. This space can expand into a more personal
				narrative covering background, motivations, and goals.
			</p>
			<p class="mt-4 leading-8 text-stone-600">
				Use this page to describe the journey so far, the problems that feel meaningful, and the
				values that guide each project.
			</p>
		</article>

		<aside class="rounded-3xl border border-stone-200 bg-white/50 p-5 sm:p-8">
			<h2 class="text-2xl font-semibold text-stone-950">Interests</h2>
			<ul class="mt-5 space-y-3">
				{#each interests as interest (interest)}
					<li class="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-700">
						{interest}
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</section>

<section class="mx-auto max-w-5xl px-4 pb-12 sm:px-6 sm:pb-20">
	<div class="grid gap-6 sm:gap-8 lg:grid-cols-2">
		<div>
			<SectionHeading eyebrow="Values" title="What shapes the work" />
			<ul class="mt-6 space-y-4">
				{#each values as value (value)}
					<li class="rounded-2xl border border-stone-200 bg-white/50 px-5 py-4 text-stone-700">
						{value}
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<SectionHeading eyebrow="Education" title="Education preview" />
			<div class="mt-6 space-y-4">
				{#each education as item (item.organization)}
					<article class="rounded-2xl border border-stone-200 bg-white/50 px-5 py-4">
						<p class="text-sm font-semibold text-amber-800">{item.period}</p>
						<h3 class="mt-2 font-semibold text-stone-950">{item.organization}</h3>
						<p class="mt-1 text-stone-600">{item.role}</p>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
