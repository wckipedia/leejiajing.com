<script lang="ts">
	import { SectionHeading } from '$lib/components';

	const links = [
		{ label: 'Email', href: 'mailto:hello@example.com', value: 'hello@example.com' },
		{ label: 'GitHub', href: 'https://github.com/', value: 'github.com/leejiajing' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/', value: 'linkedin.com/in/leejiajing' }
	];
</script>

<svelte:head>
	<title>Contact | Lee Jia Jing</title>
	<meta
		name="description"
		content="Contact Lee Jia Jing through placeholder email and social profile links."
	/>
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-20">
	<SectionHeading
		eyebrow="Contact"
		title="Start a conversation"
		description="No backend form is wired up yet. Replace the placeholders below with Lee Jia Jing's preferred contact details."
	/>

	<div class="mt-10 grid gap-4">
		{#each links as link (link.label)}
			<a
				class="rounded-3xl border border-stone-200 bg-white/50 p-6 transition hover:border-stone-300 hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f7f0e6]"
				href={link.href}
				rel="noreferrer"
				target={link.href.startsWith('http') ? '_blank' : undefined}
			>
				<span class="block text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
					{link.label}
				</span>
				<span class="mt-2 block text-lg font-semibold text-stone-950">{link.value}</span>
			</a>
		{/each}
	</div>
</section>
