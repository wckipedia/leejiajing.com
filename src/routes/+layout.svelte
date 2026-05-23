<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { Footer, Header } from '$lib/components';

	let { children }: { children: Snippet } = $props();

	function gridLight(node: HTMLDivElement) {
		let frame = 0;
		let pointer: PointerEvent | null = null;

		function paintLight() {
			frame = 0;

			if (!pointer) {
				return;
			}

			const rect = node.getBoundingClientRect();
			node.style.setProperty('--grid-light-x', `${pointer.clientX - rect.left}px`);
			node.style.setProperty('--grid-light-y', `${pointer.clientY - rect.top}px`);
			node.style.setProperty('--grid-light-opacity', '1');
		}

		function handlePointerMove(event: PointerEvent) {
			pointer = event;

			if (!frame) {
				frame = requestAnimationFrame(paintLight);
			}
		}

		function clearLight() {
			if (frame) {
				cancelAnimationFrame(frame);
			}

			frame = 0;
			pointer = null;
			node.style.setProperty('--grid-light-opacity', '0');
		}

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('blur', clearLight);
		window.addEventListener('pointerleave', clearLight);

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('blur', clearLight);
			window.removeEventListener('pointerleave', clearLight);
			clearLight();
		};
	}
</script>

<div class="site-grid flex min-h-screen flex-col bg-[#f7f0e6] text-stone-900" {@attach gridLight}>
	<div class="grid-line-light" aria-hidden="true"></div>

	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
