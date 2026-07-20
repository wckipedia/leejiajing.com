<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { env } from '$env/dynamic/public';
	import { routeTransition } from '$lib/routeTransition';

	const recipientEmail = 'leejiajing76@gmail.com';

	let name = $state('');
	let title = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'sending'>('idle');
	let toastMessage = $state('');
	let toastKind = $state<'success' | 'error'>('success');
	let toastLeaving = $state(false);
	let toastTimeout: ReturnType<typeof setTimeout> | undefined;

	const emailJsReady = $derived(
		Boolean(env.PUBLIC_EMAILJS_SERVICE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_TEMPLATE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_PUBLIC_KEY) &&
			env.PUBLIC_EMAILJS_SERVICE_ID !== 'your_service_id'
	);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!emailJsReady) {
			showToast('Email could not be sent', 'error');
			return;
		}

		status = 'sending';

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

			status = 'idle';
			name = '';
			title = '';
			email = '';
			message = '';
			showToast('Email sent');
		} catch {
			status = 'idle';
			showToast('Email could not be sent', 'error');
		}
	}

	function showToast(message: string, kind: 'success' | 'error' = 'success') {
		toastMessage = message;
		toastKind = kind;
		toastLeaving = false;
		clearTimeout(toastTimeout);
		toastTimeout = setTimeout(() => {
			toastLeaving = true;
			toastTimeout = setTimeout(() => {
				toastMessage = '';
				toastLeaving = false;
			}, 220);
		}, 1980);
	}

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(recipientEmail);
		} catch {
			const copyTarget = document.createElement('textarea');
			copyTarget.value = recipientEmail;
			copyTarget.setAttribute('readonly', '');
			copyTarget.style.position = 'fixed';
			copyTarget.style.opacity = '0';
			document.body.append(copyTarget);
			copyTarget.select();
			document.execCommand('copy');
			copyTarget.remove();
		}

		showToast('Email copied to clipboard');
	}

</script>

<svelte:head>
	<title>Contact | Lee Jia Jing</title>
	<meta
		name="description"
		content="Contact Lee Jia Jing about software engineering opportunities and projects."
	/>
	<link rel="canonical" href="https://leejiajing.com/contact" />
</svelte:head>

<section class="contact-page" aria-labelledby="contact-title">
	<div class="contact-page__intro">
		<a class="text-link" href="/" use:routeTransition={{ href: '/', direction: 'to-home' }}>
			Back home
		</a>
		<h1 id="contact-title">Start a conversation.</h1>
		<p>
			Use the form or email
			<button class="copy-email-button" type="button" onclick={copyEmail}>{recipientEmail}</button>.
		</p>
	</div>

	<form class="contact-form" onsubmit={handleSubmit}>
		<div class="form-field">
			<label for="contact-name">Your name</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				required
				autocomplete="name"
				bind:value={name}
				disabled={status === 'sending'}
			/>
		</div>

		<div class="form-field">
			<label for="contact-title-field">Your title</label>
			<input
				id="contact-title-field"
				name="title"
				type="text"
				required
				autocomplete="organization-title"
				bind:value={title}
				disabled={status === 'sending'}
			/>
		</div>

		<div class="form-field form-field--wide">
			<label for="contact-email">Your email</label>
			<input
				id="contact-email"
				name="email"
				type="email"
				required
				autocomplete="email"
				bind:value={email}
				disabled={status === 'sending'}
			/>
		</div>

		<div class="form-field form-field--wide">
			<label for="contact-message">Your message</label>
			<textarea
				id="contact-message"
				name="message"
				required
				rows="7"
				bind:value={message}
				disabled={status === 'sending'}
			></textarea>
		</div>

		<div class="contact-form__footer">
			<button type="submit" disabled={status === 'sending'}>
				{status === 'sending' ? 'Sending' : 'Send message'}
			</button>
		</div>

	</form>

	{#if toastMessage}
		<p
			class:contact-toast--leaving={toastLeaving}
			class:contact-toast--error={toastKind === 'error'}
			class="contact-toast"
			role={toastKind === 'error' ? 'alert' : 'status'}
		>
			{toastMessage}
		</p>
	{/if}
</section>
