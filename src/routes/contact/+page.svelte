<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { env } from '$env/dynamic/public';
	import { SectionHeading } from '$lib/components';

	const recipientEmail = 'leejiajing76@gmail.com';

	let name = $state('');
	let title = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	const emailJsReady = $derived(
		Boolean(env.PUBLIC_EMAILJS_SERVICE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_TEMPLATE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_PUBLIC_KEY) &&
			env.PUBLIC_EMAILJS_SERVICE_ID !== 'your_service_id'
	);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!emailJsReady) {
			status = 'error';
			errorMessage =
				'Email is not configured yet. Add your EmailJS keys to a .env file (see .env.example).';
			return;
		}

		status = 'sending';
		errorMessage = '';

		try {
			await emailjs.send(
				env.PUBLIC_EMAILJS_SERVICE_ID!,
				env.PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					name: name.trim(),
					title: title.trim(),
					email: email.trim(),
					message: message.trim(),
					to_email: recipientEmail
				},
				{ publicKey: env.PUBLIC_EMAILJS_PUBLIC_KEY! }
			);

			status = 'success';
			name = '';
			title = '';
			email = '';
			message = '';
		} catch (error) {
			status = 'error';
			errorMessage =
				error instanceof Error
					? error.message
					: 'Something went wrong while sending. Please try again.';
		}
	}
</script>

<svelte:head>
	<title>Contact | Lee Jia Jing</title>
	<meta
		name="description"
		content="Contact Lee Jia Jing by sending a message through the portfolio contact form."
	/>
</svelte:head>

<section class="mx-auto max-w-2xl px-6 py-20">
	<SectionHeading
		eyebrow="Contact"
		title="Start a conversation"
		description="Send a message and it will be delivered to my inbox."
	/>

	<form
		class="mt-10 space-y-5 rounded-[1.35rem] border border-stone-300/80 bg-[#fbf7ef] p-6 sm:p-8"
		onsubmit={handleSubmit}
	>
		<div>
			<label class="sr-only" for="contact-name">Your name</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				required
				autocomplete="name"
				placeholder="Your name"
				bind:value={name}
				disabled={status === 'sending'}
				class="w-full rounded-xl border border-stone-300/80 bg-[#f7f0e6] px-4 py-3 text-stone-900 placeholder:text-stone-400 transition focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/40 disabled:opacity-60"
			/>
		</div>

		<div>
			<label class="sr-only" for="contact-title">Your title</label>
			<input
				id="contact-title"
				name="title"
				type="text"
				required
				placeholder="Your title"
				bind:value={title}
				disabled={status === 'sending'}
				class="w-full rounded-xl border border-stone-300/80 bg-[#f7f0e6] px-4 py-3 text-stone-900 placeholder:text-stone-400 transition focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/40 disabled:opacity-60"
			/>
		</div>

		<div>
			<label class="sr-only" for="contact-email">Your email</label>
			<input
				id="contact-email"
				name="email"
				type="email"
				required
				autocomplete="email"
				placeholder="your.email@example.com"
				bind:value={email}
				disabled={status === 'sending'}
				class="w-full rounded-xl border border-stone-300/80 bg-[#f7f0e6] px-4 py-3 text-stone-900 placeholder:text-stone-400 transition focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/40 disabled:opacity-60"
			/>
		</div>

		<div>
			<label class="sr-only" for="contact-message">Your message</label>
			<textarea
				id="contact-message"
				name="message"
				required
				rows="6"
				placeholder="Your message…"
				bind:value={message}
				disabled={status === 'sending'}
				class="w-full resize-y rounded-xl border border-stone-300/80 bg-[#f7f0e6] px-4 py-3 text-stone-900 placeholder:text-stone-400 transition focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400/40 disabled:opacity-60"
			></textarea>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<p class="text-sm text-stone-500">
				Messages are sent to <span class="font-semibold text-stone-700">{recipientEmail}</span>
			</p>
			<button
				type="submit"
				disabled={status === 'sending'}
				class="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-[#f8f1e7] disabled:cursor-not-allowed disabled:opacity-60"
			>
				{status === 'sending' ? 'Sending…' : 'Send email'}
			</button>
		</div>

		{#if status === 'success'}
			<p class="rounded-xl border border-stone-300/80 bg-[#f7f0e6] px-4 py-3 text-sm font-medium text-stone-800" role="status">
				Thanks — your message was sent. I will get back to you soon.
			</p>
		{:else if status === 'error'}
			<p class="rounded-xl border border-red-300/80 bg-red-50 px-4 py-3 text-sm font-medium text-red-900" role="alert">
				{errorMessage}
			</p>
		{/if}

		{#if !emailJsReady}
			<p class="text-sm text-stone-500">
				To enable sending, copy <code class="text-stone-700">.env.example</code> to
				<code class="text-stone-700">.env</code> and add your EmailJS service, template, and public key.
			</p>
		{/if}
	</form>
</section>
