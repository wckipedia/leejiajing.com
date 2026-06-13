<script lang="ts">
	import { tick } from 'svelte';
	import type { Project } from '$lib/data/portfolio';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	let { project }: { project: Project } = $props();

	const githubButtonClass =
		'rounded-md border-stone-950 bg-stone-950 px-4 text-[#f7f0e6] hover:border-stone-800 hover:bg-stone-800 hover:text-[#f7f0e6]';
	const demoButtonClass =
		'rounded-md border-stone-300/80 bg-[#f7f0e6] px-4 text-stone-800 hover:border-stone-500/80 hover:bg-[#fbf7ef] hover:text-stone-950';

	let expanded = $state(false);
	let animating = $state(false);
	let phase = $state<'idle' | 'measure' | 'open' | 'loading' | 'close'>('idle');
	let cardEl: HTMLElement | undefined = $state();
	let measureEl: HTMLElement | undefined = $state();
	let tileStyle = $state('');
	let expandedSize = $state<{ width: number; height: number; needsScroll: boolean } | null>(null);

	const showPlaceholder = $derived(phase === 'loading' || phase === 'close');

	const CARD_ANIMATION_MS = 420;
	const LOADER_MS = 180;
	const cardEasing = 'cubic-bezier(0.22, 1, 0.36, 1)';
	const cardTransition = `transition: all 0.4s ${cardEasing};`;
	const expandedWidth = 'min(50rem, calc(100vw - 2rem))';
	const expandedViewportPadding = 16;
	const expandedHeightBuffer = 10;

	function portal(node: HTMLElement) {
		document.body.appendChild(node);

		return () => {
			node.remove();
		};
	}

	function setProjectExpanded(active: boolean) {
		document.body.classList.toggle('project-expanded', active);
	}

	function getCardRect() {
		if (!cardEl) return { top: 0, left: 0, width: 0, height: 0 };
		const r = cardEl.getBoundingClientRect();
		return { top: r.top, left: r.left, width: r.width, height: r.height };
	}

	function originStyle(r: { top: number; left: number; width: number; height: number }) {
		return `top: ${r.top}px; left: ${r.left}px; width: ${r.width}px; height: ${r.height}px;`;
	}

	function centerStyle(size: { width: number; height: number; needsScroll: boolean }) {
		const overflowY = size.needsScroll ? 'auto' : 'visible';

		return `
			top: 50%; left: 50%; width: ${size.width}px; height: ${size.height}px;
			transform: translate(-50%, -50%); overflow-y: ${overflowY};
		`;
	}

	function measureExpandedSize() {
		if (!measureEl) return null;

		const rect = measureEl.getBoundingClientRect();
		const maxViewportHeight = window.innerHeight - expandedViewportPadding * 2;
		const contentHeight = Math.ceil(rect.height) + expandedHeightBuffer;

		return {
			width: Math.ceil(rect.width),
			height: Math.min(contentHeight, maxViewportHeight),
			needsScroll: contentHeight > maxViewportHeight
		};
	}

	async function openCard() {
		if (expanded || animating) return;
		const from = getCardRect();
		tileStyle = `${originStyle(from)} transform: none; transition: none;`;
		expanded = true;
		phase = 'measure';
		expandedSize = null;
		document.body.style.overflow = 'hidden';
		setProjectExpanded(true);

		await tick();
		await tick();

		requestAnimationFrame(() => {
			const size = measureExpandedSize();
			if (!size) return;

			expandedSize = size;
			phase = 'open';
			animating = true;

			requestAnimationFrame(() => {
				tileStyle = `${centerStyle(size)} ${cardTransition}`;
				setTimeout(() => {
					animating = false;
					phase = 'loading';
					setTimeout(() => {
						phase = 'idle';
					}, LOADER_MS);
				}, CARD_ANIMATION_MS);
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
				tileStyle = `${originStyle(to)} transform: none; ${cardTransition}`;
				setTimeout(() => {
					expanded = false;
					animating = false;
					phase = 'idle';
					expandedSize = null;
					document.body.style.overflow = '';
					setProjectExpanded(false);
				}, CARD_ANIMATION_MS);
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

{#snippet projectDetails(showClose: boolean)}
	<div class="flex items-start justify-between gap-3">
		<h3
			class="flex-1 text-xl font-bold leading-[1.15] tracking-[-0.035em] text-balance text-stone-950 sm:text-[1.35rem]"
		>
			{project.title}
		</h3>
		{#if showClose}
			<button
				type="button"
				class="-mr-1 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-200/60 hover:text-stone-700 focus:outline-none active:text-stone-400"
				onclick={closeCard}
				aria-label="Close"
			>
				<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			</button>
		{:else}
			<div class="mt-0.5 size-8 shrink-0" aria-hidden="true"></div>
		{/if}
	</div>

	<p class="mt-3 text-sm leading-6 text-stone-600 sm:mt-3.5 sm:text-[0.9375rem] sm:leading-7">
		{project.description}
	</p>

	{#if project.highlights?.length}
		<section class="mt-5 space-y-3 sm:mt-6">
			<h4 class="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-amber-900/75">
				Highlights
			</h4>
			<ul class="space-y-2.5 text-sm leading-6 text-stone-600 sm:text-[0.9375rem] sm:leading-7">
				{#each project.highlights as highlight (highlight)}
					<li class="flex gap-3">
						<span class="mt-2 size-1.5 shrink-0 rounded-full bg-amber-900/55" aria-hidden="true"></span>
						<span>{highlight}</span>
					</li>
				{/each}
			</ul>
		</section>
	{/if}

	<div class="mt-6 flex flex-col gap-5 border-t border-stone-300/70 pt-5 sm:mt-7 sm:gap-6 sm:pt-6">
		{#if project.motivation}
			<section class="space-y-2.5">
				<h4 class="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-amber-900/75">
					Vision
				</h4>
				<p class="text-sm leading-6 text-stone-600 sm:text-[0.9375rem] sm:leading-7">
					{project.motivation}
				</p>
			</section>
		{/if}

		{#if project.tech.length}
			<section class="space-y-3">
				<h4 class="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-amber-900/75">
					Tech stack
				</h4>
				<ul class="flex flex-wrap gap-2">
					{#each project.tech as technology (technology)}
						<li
							class="rounded-full border border-stone-300/80 bg-[#f7f0e6] px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-stone-500"
						>
							{technology}
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if project.links?.github || project.links?.demo}
			<div class="flex flex-wrap gap-3 pt-1">
				{#if project.links?.github}
					<Button
						variant="outline"
						class={githubButtonClass}
						href={project.links.github}
						target="_blank"
						rel="noreferrer"
					>
						<svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path
								d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
							/>
						</svg>
						Github
					</Button>
				{/if}

				{#if project.links?.demo}
					<Button variant="outline" class={demoButtonClass} href={project.links.demo}>
						Live Demo
					</Button>
				{/if}
			</div>
		{/if}
	</div>
{/snippet}

{#snippet projectSkeleton()}
	<div class="flex h-full flex-col">
		<div class="flex items-start justify-between gap-3">
			<Skeleton class="h-6 w-4/5 rounded-md bg-stone-300/50" />
			<Skeleton class="size-8 shrink-0 rounded-full bg-stone-300/50" />
		</div>

		<div class="mt-3 flex flex-col gap-2 sm:mt-3.5">
			<Skeleton class="h-4 w-full rounded-md bg-stone-300/50" />
			<Skeleton class="h-4 w-full rounded-md bg-stone-300/50" />
		</div>

		<div class="mt-5 space-y-3 sm:mt-6">
			<Skeleton class="h-3 w-24 rounded-full bg-stone-300/50" />
			<Skeleton class="h-4 w-full rounded-md bg-stone-300/50" />
			<Skeleton class="h-4 w-11/12 rounded-md bg-stone-300/50" />
			<Skeleton class="h-4 w-5/6 rounded-md bg-stone-300/50" />
		</div>

		<div class="mt-6 flex flex-1 flex-col gap-5 border-t border-stone-300/70 pt-5 sm:mt-7 sm:gap-6 sm:pt-6">
			<div class="space-y-2">
				<Skeleton class="h-3 w-28 rounded-full bg-stone-300/50" />
				<Skeleton class="h-4 w-full rounded-md bg-stone-300/50" />
				<Skeleton class="h-4 w-11/12 rounded-md bg-stone-300/50" />
			</div>
			<div class="space-y-3">
				<Skeleton class="h-3 w-20 rounded-full bg-stone-300/50" />
				<div class="flex flex-wrap gap-2">
					<Skeleton class="h-7 w-16 rounded-full bg-stone-300/50" />
					<Skeleton class="h-7 w-20 rounded-full bg-stone-300/50" />
					<Skeleton class="h-7 w-14 rounded-full bg-stone-300/50" />
				</div>
			</div>
			<Skeleton class="h-9 w-28 rounded-md bg-stone-300/50" />
		</div>
	</div>
{/snippet}

<svelte:window onkeydown={handleKeydown} />

<article
	bind:this={cardEl}
	class="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/35 hover:bg-[#fffaf2] hover:shadow-md"
	class:invisible={expanded}
	onclick={openCard}
	onkeydown={(e) => e.key === 'Enter' && openCard()}
	role="button"
	tabindex="0"
>
	<div class="flex h-full flex-col px-5 py-5 sm:px-6 sm:py-6">
		<div class="flex items-start justify-between gap-3">
			<h3
				class="flex-1 text-xl font-bold leading-[1.15] tracking-[-0.035em] text-balance text-stone-950 sm:text-[1.35rem]"
			>
				{project.title}
			</h3>
			<span
				class="mt-0.5 shrink-0 font-mono text-xs text-stone-400/70 transition duration-300 group-hover:translate-x-0.5 group-hover:text-amber-900/60"
				aria-hidden="true"
			>
				↗
			</span>
		</div>

		<p class="mt-3 text-sm leading-6 text-stone-600 sm:mt-3.5 sm:text-[0.9375rem] sm:leading-7">
			{project.description}
		</p>
	</div>
</article>

{#if expanded}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="project-overlay fixed inset-0 z-[49]"
		class:overlay-in={phase !== 'close'}
		class:overlay-out={phase === 'close'}
		{@attach portal}
		onclick={handleOverlayClick}
	>
		{#if phase === 'measure'}
			<div
				bind:this={measureEl}
				class="pointer-events-none invisible fixed top-0 left-0"
				style:width={expandedWidth}
				aria-hidden="true"
			>
				<div class="px-5 pt-5 pb-3.5 sm:px-6 sm:pt-6 sm:pb-4">
					{@render projectDetails(false)}
				</div>
			</div>
		{/if}

		<div
			class="fixed z-50 overflow-y-auto rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] shadow-sm"
			style={tileStyle}
		>
			<div class="px-5 pt-5 pb-3.5 sm:px-6 sm:pt-6 sm:pb-4">
				{#if showPlaceholder}
					{@render projectSkeleton()}
				{:else if phase === 'open'}
					<div class="h-full" aria-hidden="true"></div>
				{:else if phase === 'idle'}
					<div class="expanded-content-in">
						{@render projectDetails(true)}
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
