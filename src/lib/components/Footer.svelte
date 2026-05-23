<script lang="ts">
	const socials = [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'Email', href: 'mailto:leejiajing76@gmail.com' }
	];
</script>

<footer class="border-t border-stone-200/70 bg-[#f8f1e7]">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
		<p class="text-sm text-stone-600">
			<span class="font-semibold text-stone-950">Lee Jia Jing</span>
			<span aria-hidden="true"> · </span>
			<span>Software engineer</span>
		</p>

		<nav aria-label="Social links">
			<ul class="flex flex-wrap gap-3 text-sm text-stone-600">
				{#each socials as social (social.label)}
					<li>
						<a
							class="rounded-full transition hover:text-stone-950 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7]"
							href={social.href}
						>
							{social.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
