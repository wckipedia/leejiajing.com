<script lang="ts">
	import { tick } from 'svelte';

	type Project = {
		title: string;
		description: string;
		details?: string;
		tech: string[];
		links?: {
			github?: string;
			demo?: string;
		};
		featured?: boolean;
	};

	let { project }: { project: Project } = $props();

	let expanded = $state(false);
	let animating = $state(false);
	let phase = $state<'idle' | 'open' | 'close'>('idle');
	let cardEl: HTMLElement | undefined = $state();
	let tileStyle = $state('');

	function getCardRect() {
		if (!cardEl) return { top: 0, left: 0, width: 0, height: 0 };
		const r = cardEl.getBoundingClientRect();
		return { top: r.top, left: r.left, width: r.width, height: r.height };
	}

	function originStyle(r: { top: number; left: number; width: number; height: number }) {
		return `top: ${r.top}px; left: ${r.left}px; width: ${r.width}px; height: ${r.height}px;`;
	}

	const centerStyle = `
		top: 50%; left: 50%; width: min(42rem, calc(100vw - 2rem)); max-height: calc(100dvh - 2rem); height: auto;
		transform: translate(-50%, -50%); overflow-y: auto;
	`;

	const openTransition = `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);`;
	const closeTransition = `transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);`;

	async function openCard() {
		if (expanded || animating) return;
		const from = getCardRect();
		tileStyle = `${originStyle(from)} transform: none; transition: none;`;
		expanded = true;
		animating = true;
		phase = 'open';
		document.body.style.overflow = 'hidden';

		await tick();
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				tileStyle = `${centerStyle} ${openTransition}`;
				setTimeout(() => { animating = false; phase = 'idle'; }, 620);
			});
		});
	}

	async function closeCard() {
		if (!expanded || animating) return;
		const to = getCardRect();
		animating = true;
		phase = 'close';

		await tick();
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				tileStyle = `${originStyle(to)} transform: none; ${closeTransition}`;
				setTimeout(() => {
					expanded = false;
					animating = false;
					phase = 'idle';
					document.body.style.overflow = '';
				}, 620);
			});
		});
	}

	function handleOverlayClick(e: MouseEvent) {
		if ((e.target as HTMLElement).classList.contains('project-overlay')) closeCard();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && expanded && !animating) closeCard();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<article
	bind:this={cardEl}
	class="group relative flex h-full min-h-[20rem] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/35 hover:bg-[#fffaf2] hover:shadow-md sm:min-h-[24rem] sm:p-6"
	class:invisible={expanded}
	onclick={openCard}
	onkeydown={(e) => e.key === 'Enter' && openCard()}
	role="button"
	tabindex="0"
>
	<div class="flex flex-1 flex-col">
		<p class="font-mono text-xs uppercase tracking-[0.25em] text-amber-900/75">
			{project.featured ? 'Featured' : 'Project'}
		</p>
		<h3 class="mt-3 text-xl font-bold tracking-[-0.035em] text-stone-950 sm:text-2xl">
			{project.title}
		</h3>

		<p class="mt-4 leading-7 text-stone-600">{project.description}</p>

		<ul class="mt-6 flex flex-wrap gap-2">
			{#each project.tech as technology (technology)}
				<li
					class="rounded-full border border-stone-300/80 bg-[#f7f0e6] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone-500 transition group-hover:border-stone-400/80 group-hover:text-stone-700"
				>
					{technology}
				</li>
			{/each}
		</ul>

		<div class="mt-auto flex justify-end border-t border-stone-300/70 pt-5">
			{#if project.links?.github}
				<a
					class="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6] px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-500/80 hover:bg-[#fbf7ef] hover:text-stone-950 focus:outline-none active:text-stone-400"
					href={project.links.github}
					onclick={(e) => e.stopPropagation()}
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

{#if expanded}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="project-overlay fixed inset-0 z-50"
		class:overlay-in={phase !== 'close'}
		class:overlay-out={phase === 'close'}
		onclick={handleOverlayClick}
	>
		<div
			class="fixed z-50 overflow-hidden rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] shadow-sm"
			style={tileStyle}
		>
			<div class="p-5 sm:p-6">
				<div class="flex items-start justify-between gap-4">
					<p class="font-mono text-xs uppercase tracking-[0.25em] text-amber-900/75">
						{project.featured ? 'Featured' : 'Project'}
					</p>
					<button
						type="button"
						class="flex size-8 shrink-0 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-200/60 hover:text-stone-700 focus:outline-none active:text-stone-400"
						onclick={closeCard}
						aria-label="Close"
					>
						<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<h3 class="mt-3 text-xl font-bold tracking-[-0.035em] text-stone-950 sm:text-2xl">
					{project.title}
				</h3>

				<p class="mt-4 leading-7 text-stone-600">{project.description}</p>

				<div
					class="expanded-extra overflow-hidden"
					class:expanded-extra-in={phase !== 'close'}
					class:expanded-extra-out={phase === 'close'}
				>
					{#if project.details && project.details !== project.description}
						<p class="mt-4 leading-7 text-stone-600">{project.details}</p>
					{/if}
				</div>

				<ul class="mt-6 flex flex-wrap gap-2">
					{#each project.tech as technology (technology)}
						<li
							class="rounded-full border border-stone-300/80 bg-[#f7f0e6] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone-500"
						>
							{technology}
						</li>
					{/each}
				</ul>

				<div class="mt-6 flex justify-end border-t border-stone-300/70 pt-5">
					{#if project.links?.github || project.links?.demo}
						<div class="flex flex-wrap gap-3">
							{#if project.links?.github}
								<a
									class="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6] px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-500/80 hover:bg-[#fbf7ef] hover:text-stone-950 focus:outline-none active:text-stone-400"
									href={project.links.github}
									target="_blank"
									rel="noreferrer"
								>
									GitHub
									<span class="font-mono text-xs text-stone-400" aria-hidden="true">-></span>
								</a>
							{/if}
							{#if project.links?.demo}
								<a
									class="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6] px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-500/80 hover:bg-[#fbf7ef] hover:text-stone-950 focus:outline-none active:text-stone-400"
									href={project.links.demo}
								>
									Live Demo
									<span class="font-mono text-xs text-stone-400" aria-hidden="true">-></span>
								</a>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
