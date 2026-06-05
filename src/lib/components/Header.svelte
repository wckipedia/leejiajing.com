<script lang="ts">
	const links = [
		{ href: '/#skills', label: 'Skills' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#projects', label: 'Projects' }
	];

	let mobileMenuOpen = $state(false);

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

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
		closeMobileMenu();
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') closeMobileMenu();
	}}
/>

<header class="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#f8f1e7]/90 backdrop-blur">
	<nav
		class="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4 md:py-5"
		aria-label="Primary navigation"
		onclick={handleNavClick}
	>
		<div class="flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
			<a
				class="rounded-full text-base font-semibold tracking-tight text-stone-950 transition hover:text-stone-700 focus:outline-none active:text-stone-500"
				href="/"
				onclick={closeMobileMenu}
			>
				Lee Jia Jing
			</a>

			<ul class="hidden gap-1 text-sm font-medium text-stone-600 md:flex md:justify-center">
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

			<div class="flex items-center gap-2 md:justify-self-end">
				<a
					class="hidden items-center justify-center rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white focus:outline-none active:text-stone-500 sm:inline-flex"
					href="/contact"
				>
					Contact me
				</a>

				<button
					type="button"
					class="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white/70 text-stone-700 transition hover:border-stone-300 hover:bg-white focus:outline-none active:text-stone-400 md:hidden"
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-nav"
					aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
					onclick={toggleMobileMenu}
				>
					{#if mobileMenuOpen}
						<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>

		{#if mobileMenuOpen}
			<div
				id="mobile-nav"
				class="mt-3 rounded-2xl border border-stone-200/80 bg-white/80 p-3 shadow-sm md:hidden"
			>
				<ul class="space-y-1 text-sm font-medium text-stone-600">
					{#each links as link (link.href)}
						<li>
							<a
								class="block rounded-xl px-3 py-2.5 transition hover:bg-white hover:text-stone-950 focus:outline-none active:text-stone-400"
								href={link.href}
							>
								{link.label}
							</a>
						</li>
					{/each}
					<li class="border-t border-stone-200/80 pt-1 sm:hidden">
						<a
							class="block rounded-xl px-3 py-2.5 font-semibold text-stone-800 transition hover:bg-white focus:outline-none active:text-stone-400"
							href="/contact"
							onclick={closeMobileMenu}
						>
							Contact me
						</a>
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</header>
