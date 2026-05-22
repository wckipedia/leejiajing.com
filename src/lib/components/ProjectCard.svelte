<script lang="ts">
	type Project = {
		title: string;
		description: string;
		tech: string[];
		links?: {
			github?: string;
			demo?: string;
		};
		featured?: boolean;
	};

	let { project }: { project: Project } = $props();
</script>

<article class="grid gap-5 py-7 transition hover:bg-white/30 md:grid-cols-[0.9fr_1.2fr_0.8fr] md:items-start">
	<div>
		<p class="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
			{project.featured ? 'Featured' : 'Project'}
		</p>
		<h3 class="mt-2 text-2xl font-bold tracking-[-0.03em] text-stone-950">{project.title}</h3>
	</div>

	<div>
		<p class="max-w-2xl leading-7 text-stone-600">{project.description}</p>

		<p class="mt-4 font-mono text-xs leading-6 text-stone-500">
			{project.tech.join(' / ')}
		</p>
	</div>

	<div class="flex gap-4 text-sm font-semibold md:justify-end">
		{#if project.links?.github}
			<a
				class="text-stone-800 underline-offset-4 transition hover:text-stone-950 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
				href={project.links.github}
			>
				GitHub
			</a>
		{/if}
		{#if project.links?.demo}
			<a
				class="text-stone-800 underline-offset-4 transition hover:text-stone-950 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
				href={project.links.demo}
			>
				Live demo
			</a>
		{/if}
	</div>
</article>
