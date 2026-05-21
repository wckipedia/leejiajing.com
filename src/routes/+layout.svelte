<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { Footer, Header } from '$lib/components';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="flex min-h-screen flex-col bg-[#f7f0e6] text-stone-900"
	style="background-image: linear-gradient(rgba(68, 64, 60, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(68, 64, 60, 0.055) 1px, transparent 1px); background-size: 34px 34px;"
>
	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
