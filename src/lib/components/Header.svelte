<script lang="ts">
	import { onMount } from 'svelte';
	import { routeTransition } from '$lib/routeTransition';
	import ThemeToggle from './ThemeToggle.svelte';

	const links = [
		{ href: '/#about', label: 'How I work' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#projects', label: 'Projects' }
	];

	let mobileMenuOpen = $state(false);

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeMenu();
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<header class="site-header">
	<nav class="site-header__inner" aria-label="Primary navigation">
		<a class="brand-mark" href="/" aria-label="Lee Jia Jing, home" onclick={closeMenu}>
			<img src="/images/personal%20logo.svg" alt="" />
		</a>

		<ul class="desktop-nav">
			{#each links as link (link.href)}
				<li><a href={link.href}>{link.label}</a></li>
			{/each}
		</ul>

		<div class="header-actions">
			<ThemeToggle />
			<a class="header-cta" href="/contact" use:routeTransition={{ href: '/contact', direction: 'to-contact' }}>
				Contact
			</a>
			<button
				class="menu-toggle"
				type="button"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-navigation"
				aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<span aria-hidden="true">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
			</button>
		</div>
	</nav>

	{#if mobileMenuOpen}
		<nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
			<ul>
				{#each links as link (link.href)}
					<li><a href={link.href} onclick={closeMenu}>{link.label}</a></li>
				{/each}
				<li>
					<a
						href="/contact"
						use:routeTransition={{
							href: '/contact',
							direction: 'to-contact',
							beforeNavigate: closeMenu
						}}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
