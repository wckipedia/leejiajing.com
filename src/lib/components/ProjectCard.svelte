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

<article
	class="flex h-full flex-col rounded-[1.75rem] border border-stone-200 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:border-stone-300 hover:bg-white/80 hover:shadow-md"
>
	<div class="flex items-start justify-between gap-4">
		<h3 class="text-xl font-semibold text-stone-950">{project.title}</h3>
		{#if project.featured}
			<span class="rounded-full border border-amber-200 bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-950">
				Featured
			</span>
		{/if}
	</div>

	<p class="mt-4 flex-1 leading-7 text-stone-600">{project.description}</p>

	<ul class="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used for ${project.title}`}>
		{#each project.tech as item (item)}
			<li class="rounded-full border border-stone-200 bg-[#fbf7ef]/80 px-3 py-1 text-xs font-medium text-stone-600">
				{item}
			</li>
		{/each}
	</ul>

	{#if project.links?.github || project.links?.demo}
		<div class="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
			{#if project.links.github}
				<a
					class="rounded-full text-stone-800 underline-offset-4 transition hover:text-stone-950 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
					href={project.links.github}
				>
					GitHub
				</a>
			{/if}
			{#if project.links.demo}
				<a
					class="rounded-full text-stone-800 underline-offset-4 transition hover:text-stone-950 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
					href={project.links.demo}
				>
					Live demo
				</a>
			{/if}
		</div>
	{/if}
</article>
