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
</script>

<div class="mt-10">
	<div
		class="inline-flex overflow-hidden rounded-md border border-stone-300/80 bg-[#f7f0e6]"
		role="tablist"
		aria-label="Experience category"
	>
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === 'education'}
			class={[
				'px-5 py-2.5 text-sm font-semibold transition focus:outline-none active:scale-[0.98]',
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
				'border-l border-stone-300/80 px-5 py-2.5 text-sm font-semibold transition focus:outline-none active:scale-[0.98]',
				activeTab === 'work'
					? 'bg-stone-950 text-stone-50'
					: 'text-stone-600 hover:bg-white/60 hover:text-stone-950'
			]}
			onclick={() => (activeTab = 'work')}
		>
			Work
		</button>
	</div>

	<div class="mt-10 space-y-12" role="tabpanel">
		{#each entries as entry (entry.organization + entry.period)}
			<article class="space-y-4">
				<div class="flex items-start gap-4 sm:gap-5">
					<div
						class="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-stone-300/80 bg-[#fbf7ef] sm:size-14"
					>
						{#if entry.logo}
							<img class="size-full object-contain p-2" src={entry.logo} alt="" loading="lazy" />
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

				<ul class="space-y-2 pl-16 sm:pl-[4.75rem]">
					{#each entry.highlights as highlight (highlight)}
						<li class="flex gap-3 text-base leading-7">
							<span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-stone-400" aria-hidden="true"></span>
							<span class="text-stone-600">{highlight}</span>
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</div>
