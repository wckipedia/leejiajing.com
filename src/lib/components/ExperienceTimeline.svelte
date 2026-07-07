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

	let activeTab = $state<Tab>('work');
	let tabDirection = $state<1 | -1>(1);
	const entries = $derived(activeTab === 'work' ? work : education);

	function selectTab(tab: Tab) {
		if (tab === activeTab) return;

		tabDirection = tab === 'education' ? 1 : -1;
		activeTab = tab;
		requestAnimationFrame(() => {
			document.getElementById(`${tab}-tab`)?.focus();
		});
	}

	function handleTabKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault();
			selectTab(activeTab === 'work' ? 'education' : 'work');
		}

		if (event.key === 'Home') {
			event.preventDefault();
			selectTab('work');
		}

		if (event.key === 'End') {
			event.preventDefault();
			selectTab('education');
		}
	}
</script>

<div class="history">
	<div class="history-tabs" role="tablist" aria-label="Career history">
		<button
			id="work-tab"
			type="button"
			role="tab"
			aria-selected={activeTab === 'work'}
			aria-controls="history-panel"
			tabindex={activeTab === 'work' ? 0 : -1}
			onclick={() => selectTab('work')}
			onkeydown={handleTabKeydown}
		>
			Work
		</button>
		<button
			id="education-tab"
			type="button"
			role="tab"
			aria-selected={activeTab === 'education'}
			aria-controls="history-panel"
			tabindex={activeTab === 'education' ? 0 : -1}
			onclick={() => selectTab('education')}
			onkeydown={handleTabKeydown}
		>
			Education
		</button>
	</div>

	{#key activeTab}
		<div
			id="history-panel"
			class="history-panel"
			class:history-panel--forward={tabDirection === 1}
			class:history-panel--backward={tabDirection === -1}
			role="tabpanel"
			aria-labelledby={`${activeTab}-tab`}
		>
			{#each entries as entry (entry.id)}
				<article class="history-entry">
					<div class="history-entry__heading">
						<div>
							<h3>{entry.organization}</h3>
							<p>{entry.role}</p>
						</div>
						<p class="history-entry__period">{entry.period}</p>
					</div>
					<ul>
						{#each entry.highlights as highlight (highlight)}
							<li>{highlight}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	{/key}
</div>
