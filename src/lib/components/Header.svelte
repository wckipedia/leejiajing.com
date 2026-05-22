<script lang="ts">
	const links = [
		{ href: '/#skills', label: 'Skills' },
		{ href: '/#education', label: 'Education' },
		{ href: '/#projects', label: 'Projects' },
		{ href: '/#socials', label: 'Socials' }
	];
</script>

<header class="border-b border-stone-200/70 bg-[#f8f1e7]/90 backdrop-blur">
	<nav
		class="mx-auto grid max-w-6xl gap-5 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:items-center"
		aria-label="Primary navigation"
	>
		<a
			class="justify-self-start rounded-full text-base font-semibold tracking-tight text-stone-950 transition hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
			href="/"
		>
			Lee Jia Jing
		</a>

		<ul class="flex flex-wrap gap-1 text-sm font-medium text-stone-600 md:justify-center">
			{#each links as link (link.href)}
				<li>
					<a
						class="rounded-full px-3 py-2 transition hover:bg-white/70 hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
						href={link.href}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3 md:justify-self-end">
			<span
				class="rounded-full border border-stone-200 bg-white/65 px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm"
			>
				Software Engineer
			</span>
			<a
				class="inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white/70 text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
				href="/contact"
				aria-label="Get in touch with Lee Jia Jing"
			>
				<svg
					aria-hidden="true"
					class="size-4"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 12h14m0 0-5-5m5 5-5 5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
	</nav>
</header>
