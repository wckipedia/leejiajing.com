<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		description?: string;
	};

	let { eyebrow, title, description }: Props = $props();
</script>

<div class="max-w-3xl">
	{#if eyebrow}
		<p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-900/80">{eyebrow}</p>
	{/if}

	<h2 class="text-3xl font-bold tracking-[-0.03em] text-stone-950 sm:text-4xl">{title}</h2>

	{#if description}
		<p class="mt-4 text-lg font-medium leading-8 text-stone-600">{description}</p>
	{/if}
</div>
