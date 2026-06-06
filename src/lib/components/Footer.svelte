<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	const emailAddress = 'leejiajing76@gmail.com';

	const socials = [
		{ label: 'X', href: 'https://x.com/Wckipedia' },
		{ label: 'GitHub', href: 'https://github.com/wckipedia' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/leejiajing-tech' }
	];

	const footerLinkClass =
		'h-auto p-0 font-normal text-stone-600 hover:text-stone-950 active:text-stone-400';

	let emailCopied = $state(false);
	let emailCopyTimeout: ReturnType<typeof setTimeout> | undefined;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(emailAddress);
			emailCopied = true;
			clearTimeout(emailCopyTimeout);
			emailCopyTimeout = setTimeout(() => {
				emailCopied = false;
			}, 2400);
		} catch {
			window.location.href = `mailto:${emailAddress}`;
		}
	}
</script>

<footer class="border-t border-stone-200/70 bg-[#f8f1e7]">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 sm:flex-row sm:items-center sm:justify-between">
		<p class="flex flex-wrap items-center text-sm text-stone-600">
			<span class="font-semibold text-stone-950">Lee Jia Jing</span>
			<span class="px-2.5" aria-hidden="true">·</span>
			<span>Tech Enthusiast</span>
		</p>

		<nav aria-label="Social links" class="flex flex-wrap items-center text-sm">
			{#each socials as social, index (social.label)}
				{#if index > 0}
					<span class="px-2.5 text-stone-600" aria-hidden="true">·</span>
				{/if}
				<Button
					variant="link"
					class={footerLinkClass}
					href={social.href}
					target="_blank"
					rel="noreferrer"
				>
					{social.label}
				</Button>
			{/each}
			<span class="px-2.5 text-stone-600" aria-hidden="true">·</span>
			<Button variant="link" class={footerLinkClass} onclick={copyEmail}>Email</Button>
		</nav>
	</div>
</footer>

{#if emailCopied}
	<p
		class="copy-toast fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-sm rounded-md border border-stone-300/80 bg-[#fbf7ef] px-4 py-2 text-center text-sm font-medium text-stone-800 shadow-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-none sm:text-left"
		role="status"
		aria-live="polite"
	>
		Email copied to clipboard
	</p>
{/if}
