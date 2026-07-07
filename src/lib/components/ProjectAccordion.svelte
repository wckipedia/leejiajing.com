<script lang="ts">
	import type { Project } from '$lib/data/portfolio';

	let { projects }: { projects: Project[] } = $props();

	let openProjectId = $state<string | null>(null);

	function toggleProject(projectId: string) {
		openProjectId = openProjectId === projectId ? null : projectId;
	}
</script>

<div class="project-index">
	{#each projects as project (project.id)}
		<article class:project-entry--open={openProjectId === project.id} class="project-entry">
			<h3>
				<button
					type="button"
					aria-expanded={openProjectId === project.id}
					aria-controls={`${project.id}-details`}
					onclick={() => toggleProject(project.id)}
				>
					<span class="project-entry__title">{project.title}</span>
					<span class="project-entry__summary">{project.summary}</span>
					<span class="project-entry__control" aria-hidden="true">
						{openProjectId === project.id ? 'Close' : 'Open'}
					</span>
				</button>
			</h3>

			<div
				id={`${project.id}-details`}
				class="project-details"
				class:project-details--open={openProjectId === project.id}
			>
				<div class="project-details__overflow">
					<div class="project-details__grid">
						<section>
							<h4>Problem</h4>
							<p>{project.problem}</p>
						</section>
						<section class="project-decisions">
							<h4>Key decisions</h4>
							<ol>
								{#each project.decisions as decision (decision)}
									<li>{decision}</li>
								{/each}
							</ol>
						</section>
						<section>
							<h4>Result</h4>
							<p>{project.result}</p>
						</section>
					</div>

					<div class="project-details__footer">
						<ul aria-label={`${project.title} technologies`}>
							{#each project.tech as technology (technology)}
								<li>{technology}</li>
							{/each}
						</ul>

						<div class="project-links">
							{#if project.links?.github}
								<a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
							{/if}
							{#if project.links?.demo}
								<a href={project.links.demo} target="_blank" rel="noreferrer">Live project</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</article>
	{/each}
</div>
