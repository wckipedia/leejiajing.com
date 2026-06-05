<script lang="ts">
	import type { TimelineEntry } from '$lib/data/portfolio';

	let {
		work,
		education
	}: {
		work: TimelineEntry[];
		education: TimelineEntry[];
	} = $props();

	type Tab = 'work' | 'education';

	let activeTab = $state<Tab>('education');

	const entries = $derived(activeTab === 'work' ? work : education);

	/** Tile / line durations — match `app.css` */
	const TILE_SEC = 0.42;
	const LINE_SEC = 0.18;
	/** All tiles in sequence, then all connector lines. */
	const TILE_STAGGER = 0.16;
	const LINE_STAGGER = 0.1;
	const SEED_SEC = 0.06;
	const PHASE_GAP = 0.1;

	let panelEl: HTMLDivElement | undefined = $state();
	let panelInView = $state(false);

	function checkPanelInViewport() {
		if (!panelEl) return false;
		const r = panelEl.getBoundingClientRect();
		const vh = window.innerHeight;
		return r.top < vh * 0.88 && r.bottom > vh * 0.12;
	}

	$effect(() => {
		if (!panelEl) return;
		const io = new IntersectionObserver(
			([e]) => {
				if (e?.isIntersecting) panelInView = true;
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);
		io.observe(panelEl);
		return () => io.disconnect();
	});

	$effect(() => {
		void activeTab;
		if (checkPanelInViewport()) panelInView = true;
	});
</script>

<div class="mt-8 sm:mt-10">
	<div
		class="inline-flex w-full overflow-hidden rounded-md border border-stone-300/80 bg-[#f7f0e6] sm:w-auto"
		role="tablist"
		aria-label="Experience category"
	>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'education'}
			class={[
				'flex-1 px-4 py-2.5 text-sm font-semibold transition focus:outline-none active:scale-[0.98] sm:flex-none sm:px-5',
				activeTab === 'education'
					? 'bg-stone-950 text-stone-50'
					: 'text-stone-600 hover:bg-white/60 hover:text-stone-950'
			]}
			onclick={() => (activeTab = 'education')}
		>
			Education
		</button>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'work'}
			class={[
				'flex-1 border-l border-stone-300/80 px-4 py-2.5 text-sm font-semibold transition focus:outline-none active:scale-[0.98] sm:flex-none sm:px-5',
				activeTab === 'work'
					? 'bg-stone-950 text-stone-50'
					: 'text-stone-600 hover:bg-white/60 hover:text-stone-950'
			]}
			onclick={() => (activeTab = 'work')}
		>
			Work
		</button>
	</div>

	<div
		bind:this={panelEl}
		class="mt-10"
		class:timeline-panel-inview={panelInView}
		role="tabpanel"
	>
		{#key activeTab}
			{#each entries as entry, i (entry.organization + entry.period)}
			<article
				class="timeline-tile rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-900/35 hover:bg-[#fffaf2] hover:shadow-md sm:p-6"
				style="--tile-delay: {SEED_SEC + i * TILE_STAGGER}s;"
			>
				<div class="flex items-start gap-4 sm:gap-5">
					<div
						class="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-stone-300/80 sm:size-14"
						class:bg-[#fbf7ef]={!entry.logoFill}
					>
						{#if entry.logo}
							<img
								class={entry.logoFill
									? 'size-full object-cover'
									: entry.logoLarge
										? 'size-full object-contain p-0.5 scale-[1.45]'
										: 'size-full object-contain p-1.5'}
								src={entry.logo}
								alt=""
								loading="lazy"
							/>
						{:else}
							<span class="text-lg font-bold text-stone-700 sm:text-xl">
								{entry.organization.charAt(0)}
							</span>
						{/if}
					</div>

					<div class="min-w-0 flex-1">
						<div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
							<div>
								<h3 class="text-xl font-bold tracking-[-0.03em] text-stone-950 sm:text-2xl">
									{entry.organization}
								</h3>
								<p class="mt-1 text-base font-medium text-stone-600">{entry.role}</p>
							</div>
							<p
								class="shrink-0 text-sm font-semibold uppercase tracking-[0.18em] text-amber-900/80 sm:pt-1 sm:text-right"
							>
								{entry.period}
							</p>
						</div>
					</div>
				</div>

				<ul class="mt-4 space-y-2 pl-0 sm:pl-[4.75rem]">
					{#each entry.highlights as highlight (highlight)}
						<li class="flex gap-3 text-base leading-7">
							<span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden="true"></span>
							<span class="text-stone-600">{highlight}</span>
						</li>
					{/each}
				</ul>
			</article>

			{#if i < entries.length - 1}
				<div class="py-1 pl-[1.375rem] sm:pl-[3.25rem]">
					<div
						class="timeline-connector h-10 w-1 rounded-full bg-stone-950"
						style="--connector-delay: {SEED_SEC + (entries.length - 1) * TILE_STAGGER + TILE_SEC + PHASE_GAP + i * LINE_STAGGER}s;"
					></div>
				</div>
			{/if}
			{/each}
		{/key}
	</div>
</div>
