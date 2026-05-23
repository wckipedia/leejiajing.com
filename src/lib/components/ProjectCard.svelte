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
	class="group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef]/70 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/35 hover:bg-[#fffaf2]/90 hover:shadow-md sm:p-6"
>
	<div
		class="pointer-events-none absolute inset-x-6 top-0 h-px bg-stone-950/50 opacity-0 transition duration-300 group-hover:opacity-100"
		aria-hidden="true"
	></div>

	<div class="flex flex-1 flex-col">
		<p class="font-mono text-xs uppercase tracking-[0.25em] text-amber-900/75">
			{project.featured ? 'Featured' : 'Project'}
		</p>
		<h3 class="mt-3 text-2xl font-bold tracking-[-0.035em] text-stone-950">
			{project.title}
		</h3>

		<p class="mt-4 leading-7 text-stone-600">{project.description}</p>

		<ul class="mt-6 flex flex-wrap gap-2">
			{#each project.tech as technology (technology)}
				<li
					class="rounded-full border border-stone-300/80 bg-[#f7f0e6]/80 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone-500 transition group-hover:border-stone-400/80 group-hover:text-stone-700"
				>
					{technology}
				</li>
			{/each}
		</ul>

		<div class="mt-auto flex justify-end border-t border-stone-300/70 pt-5">
			{#if project.links?.github}
				<a
					class="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6]/70 px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-500/80 hover:bg-[#fbf7ef] hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
					href={project.links.github}
				>
					GitHub
					<span
						class="font-mono text-xs text-stone-400 transition group-hover:translate-x-1 group-hover:text-stone-700"
						aria-hidden="true"
					>
						->
					</span>
				</a>
			{/if}
		</div>
	</div>
</article>
