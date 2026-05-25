<script lang="ts">
	const links = [
		{ href: '/#skills', label: 'Skills' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#projects', label: 'Projects' }
	];

	function easeInOutCubic(t: number) {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	function smoothScrollTo(target: number, duration: number) {
		const start = window.scrollY;
		const distance = target - start;
		const startTime = performance.now();

		function step(now: number) {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			window.scrollTo(0, start + distance * easeInOutCubic(progress));
			if (progress < 1) requestAnimationFrame(step);
		}

		requestAnimationFrame(step);
	}

	function handleNavClick(e: MouseEvent) {
		const anchor = (e.target as HTMLElement).closest('a');
		if (!anchor) return;
		const href = anchor.getAttribute('href');
		if (!href?.startsWith('/#')) return;

		const id = href.slice(2);
		const section = document.getElementById(id);
		if (!section) return;

		e.preventDefault();
		const offset = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
		smoothScrollTo(section.offsetTop - offset, 900);
	}
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#f8f1e7]/90 backdrop-blur">
	<nav
		class="mx-auto grid max-w-6xl gap-5 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
		aria-label="Primary navigation"
		onclick={handleNavClick}
	>
		<a
			class="justify-self-start rounded-full text-base font-semibold tracking-tight text-stone-950 transition hover:text-stone-700 focus:outline-none active:text-stone-500"
			href="/"
		>
			Lee Jia Jing
		</a>

		<ul class="flex flex-wrap gap-1 text-sm font-medium text-stone-600 md:justify-center">
			{#each links as link (link.href)}
				<li>
					<a
						class="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-stone-950 focus:outline-none active:text-stone-400"
						href={link.href}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center md:justify-self-end">
			<a
				class="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white focus:outline-none active:text-stone-500"
				href="/contact"
			>
				Contact me
			</a>
		</div>
	</nav>
</header>
