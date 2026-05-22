<script lang="ts">
	import { projects } from '$lib/data/portfolio';
	import { ProjectCard, SectionHeading } from '$lib/components';
</script>

<svelte:head>
	<title>Projects | Lee Jia Jing</title>
	<meta
		name="description"
		content="Browse placeholder portfolio projects for Lee Jia Jing, ready to be replaced with real case studies."
	/>
</svelte:head>

<section class="mx-auto max-w-6xl px-6 py-20">
	<SectionHeading
		eyebrow="Projects"
		title="Work in progress"
		description="This page lists all portfolio projects. Swap these placeholders with live projects, case studies, and technical writeups."
	/>

	<div class="mt-10 divide-y divide-stone-300/80 border-y border-stone-300/80">
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
