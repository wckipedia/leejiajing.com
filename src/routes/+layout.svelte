<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { Footer, Header } from '$lib/components';

	let { children }: { children: Snippet } = $props();
</script>

<div class="site-shell">
	<a class="skip-link" href="#main-content">Skip to content</a>
	<Header />
	<main id="main-content">
		{@render children()}
	</main>
	<Footer />
</div>
