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

	<h2 class="text-2xl font-bold tracking-[-0.03em] text-stone-950 sm:text-3xl md:text-4xl">{title}</h2>

	{#if description}
		<p class="mt-4 text-base font-medium leading-7 text-stone-600 sm:text-lg sm:leading-8">{description}</p>
	{/if}
</div>
