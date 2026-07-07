<script lang="ts">
	import { onMount } from 'svelte';

	// Interaction concept adapted from https://codepen.io/JuanFuentes/full/rgXKGQ
	let {
		text,
		id,
		class: className = ''
	}: {
		text: string;
		id?: string;
		class?: string;
	} = $props();

	let container: HTMLHeadingElement;
	let characters: HTMLSpanElement[] = [];

	const words = $derived(text.split(' '));
	const baseWeight = 650;
	const baseWidthScale = 1;

	onMount(() => {
		characters = Array.from(container.querySelectorAll<HTMLSpanElement>('.kinetic-name__character'));
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const coarsePointer = window.matchMedia('(pointer: coarse)');
		let centers: { x: number; y: number }[] = [];
		let target = { x: 0, y: 0 };
		let cursor = { x: 0, y: 0 };
		let animationFrame = 0;
		let visible = true;
		let interactive = !reduceMotion.matches && !coarsePointer.matches;
		let interactionBounds: DOMRect | null = null;
		let pointerTracking = false;

		function applyBaseState() {
			for (const character of characters) {
				character.style.fontVariationSettings = `'wght' ${baseWeight}`;
				character.style.transform = `scaleX(${baseWidthScale})`;
			}
		}

		function measureCharacters() {
			centers = characters.map((character) => {
				const rect = character.getBoundingClientRect();
				return {
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2
				};
			});
		}

		function stopAnimation() {
			if (animationFrame) cancelAnimationFrame(animationFrame);
			animationFrame = 0;
		}

		function animate() {
			if (!interactive || !visible || document.hidden) {
				stopAnimation();
				return;
			}

			cursor.x += (target.x - cursor.x) * 0.16;
			cursor.y += (target.y - cursor.y) * 0.16;

			const containerRect = container.getBoundingClientRect();
			const influence = Math.max(containerRect.width * 0.34, 180);

			characters.forEach((character, index) => {
				const center = centers[index];
				if (!center) return;

				const distance = Math.hypot(cursor.x - center.x, cursor.y - center.y);
				const proximity = Math.max(0, 1 - distance / influence);
				const weight = 500 + proximity * 200;
				const widthScale = 0.88 + proximity * 0.28;

				character.style.fontVariationSettings = `'wght' ${weight.toFixed(0)}`;
				character.style.transform = `scaleX(${widthScale.toFixed(3)})`;
			});

			animationFrame = requestAnimationFrame(animate);
		}

		function startAnimation() {
			if (!animationFrame && interactive && visible && !document.hidden) {
				animationFrame = requestAnimationFrame(animate);
			}
		}

		function handlePointerEnter(event: PointerEvent) {
			measureCharacters();
			interactionBounds = container.getBoundingClientRect();
			cursor = { x: event.clientX, y: event.clientY };
			target = { ...cursor };
			if (!pointerTracking) {
				pointerTracking = true;
				window.addEventListener('pointermove', handleWindowPointerMove);
			}
			startAnimation();
		}

		function handlePointerMove(event: PointerEvent) {
			target.x = event.clientX;
			target.y = event.clientY;
			startAnimation();
		}

		function handleWindowPointerMove(event: PointerEvent) {
			if (
				interactionBounds &&
				(event.clientX < interactionBounds.left ||
					event.clientX > interactionBounds.right ||
					event.clientY < interactionBounds.top ||
					event.clientY > interactionBounds.bottom)
			) {
				handlePointerLeave();
				return;
			}

			handlePointerMove(event);
		}

		function handlePointerLeave() {
			stopAnimation();
			if (pointerTracking) {
				pointerTracking = false;
				window.removeEventListener('pointermove', handleWindowPointerMove);
			}
			applyBaseState();
		}

		function handleVisibilityChange() {
			if (document.hidden) {
				handlePointerLeave();
			}
		}

		function handleMotionPreference() {
			interactive = !reduceMotion.matches && !coarsePointer.matches;
			if (!interactive) {
				stopAnimation();
				applyBaseState();
			}
		}

		const resizeObserver = new ResizeObserver(measureCharacters);
		resizeObserver.observe(container);

		const intersectionObserver = new IntersectionObserver(
			([entry]) => {
				visible = Boolean(entry?.isIntersecting);
				if (!visible) stopAnimation();
			},
			{ threshold: 0.05 }
		);
		intersectionObserver.observe(container);

		container.addEventListener('pointerenter', handlePointerEnter);
		container.addEventListener('pointermove', handlePointerMove);
		container.addEventListener('pointerleave', handlePointerLeave);
		container.addEventListener('mouseleave', handlePointerLeave);
		reduceMotion.addEventListener('change', handleMotionPreference);
		coarsePointer.addEventListener('change', handleMotionPreference);
		window.addEventListener('blur', handlePointerLeave);
		document.addEventListener('visibilitychange', handleVisibilityChange);

		document.fonts.ready.then(measureCharacters);
		measureCharacters();

		return () => {
			stopAnimation();
			resizeObserver.disconnect();
			intersectionObserver.disconnect();
			container.removeEventListener('pointerenter', handlePointerEnter);
			container.removeEventListener('pointermove', handlePointerMove);
			container.removeEventListener('pointerleave', handlePointerLeave);
			container.removeEventListener('mouseleave', handlePointerLeave);
			window.removeEventListener('pointermove', handleWindowPointerMove);
			reduceMotion.removeEventListener('change', handleMotionPreference);
			coarsePointer.removeEventListener('change', handleMotionPreference);
			window.removeEventListener('blur', handlePointerLeave);
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	});
</script>

<h1 {id} bind:this={container} class={`kinetic-name ${className}`} aria-label={text}>
	<span class="sr-only">{text}</span>
	<span class="kinetic-name__visual" aria-hidden="true">
		{#each words as word, wordIndex (`${word}-${wordIndex}`)}
			<span class="kinetic-name__word">
				{#each [...word] as character, characterIndex (`${wordIndex}-${characterIndex}`)}
					<span
						class="kinetic-name__character"
						style={`--character-index: ${wordIndex * 4 + characterIndex}`}
					>
						{character}
					</span>
				{/each}
			</span>
		{/each}
	</span>
</h1>
