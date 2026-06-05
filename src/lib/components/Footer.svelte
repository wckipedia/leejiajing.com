<script lang="ts">
	const emailAddress = 'leejiajing76@gmail.com';

	const socials = [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' }
	];

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
		<p class="text-sm text-stone-600">
			<span class="font-semibold text-stone-950">Lee Jia Jing</span>
			<span aria-hidden="true"> · </span>
			<span>Tech Enthusiast</span>
		</p>

		<nav aria-label="Social links">
			<ul class="flex flex-wrap gap-3 text-sm text-stone-600">
				{#each socials as social (social.label)}
					<li>
						<a
						class="rounded-full transition hover:text-stone-950 focus:outline-none active:text-stone-400"
						href={social.href}
						target="_blank"
						rel="noreferrer"
						>
							{social.label}
						</a>
					</li>
				{/each}
				<li>
					<button
						type="button"
						class="cursor-pointer rounded-full transition hover:text-stone-950 focus:outline-none active:text-stone-400"
						onclick={copyEmail}
					>
						Email
					</button>
				</li>
			</ul>
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
