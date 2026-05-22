<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { Footer, Header } from '$lib/components';

	let { children }: { children: Snippet } = $props();

	const gridSize = 56;
	const gridCells = Array.from({ length: 1400 }, (_, index) => index);

	function gridTrail(node: HTMLDivElement) {
		let frame = 0;
		let lastCell = -1;
		let pointer: PointerEvent | null = null;

		function clearCell(cell: number) {
			node.children.item(cell)?.classList.remove('is-active');
		}

		function paintCell() {
			frame = 0;

			if (!pointer) {
				return;
			}

			const rect = node.getBoundingClientRect();
			const columns = Math.max(1, Math.floor(node.clientWidth / gridSize));
			const column = Math.floor((pointer.clientX - rect.left) / gridSize);
			const row = Math.floor((pointer.clientY - rect.top) / gridSize);
			const cell = row * columns + column;

			if (column < 0 || column >= columns || cell < 0 || cell >= gridCells.length || cell === lastCell) {
				return;
			}

			clearCell(lastCell);
			lastCell = cell;
			node.children.item(cell)?.classList.add('is-active');
		}

		function handlePointerMove(event: PointerEvent) {
			pointer = event;

			if (!frame) {
				frame = requestAnimationFrame(paintCell);
			}
		}

		function clearTrail() {
			if (frame) {
				cancelAnimationFrame(frame);
			}

			frame = 0;
			clearCell(lastCell);
			lastCell = -1;
			pointer = null;
		}

		window.addEventListener('pointermove', handlePointerMove);
		window.addEventListener('blur', clearTrail);

		return () => {
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('blur', clearTrail);
			clearTrail();
		};
	}
</script>

<div class="site-grid flex min-h-screen flex-col bg-[#f7f0e6] text-stone-900">
	<div class="grid-hover-cells" aria-hidden="true" {@attach gridTrail}>
		{#each gridCells as cell (cell)}
			<span></span>
		{/each}
	</div>

	<Header />

	<main class="flex-1">
		{@render children()}
	</main>

	<Footer />
</div>
