<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { env } from '$env/dynamic/public';
	import { routeTransition } from '$lib/routeTransition';
	import { tick } from 'svelte';

	const recipientEmail = 'leejiajing76@gmail.com';
	type FieldName = 'name' | 'title' | 'email' | 'message';

	let name = $state('');
	let title = $state('');
	let email = $state('');
	let message = $state('');
	let status = $state<'idle' | 'sending'>('idle');
	let toastMessage = $state('');
	let toastKind = $state<'success' | 'error'>('success');
	let toastLeaving = $state(false);
	let toastTimeout: ReturnType<typeof setTimeout> | undefined;
	let errors = $state<Record<FieldName, string>>({ name: '', title: '', email: '', message: '' });

	const emailJsReady = $derived(
		Boolean(env.PUBLIC_EMAILJS_SERVICE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_TEMPLATE_ID) &&
			Boolean(env.PUBLIC_EMAILJS_PUBLIC_KEY) &&
			env.PUBLIC_EMAILJS_SERVICE_ID !== 'your_service_id'
	);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;

		if (!validateForm()) {
			await tick();
			form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
			return;
		}

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

	function validateForm() {
		const trimmedEmail = email.trim();
		errors.name = name.trim() ? '' : 'Enter your name';
		errors.title = title.trim() ? '' : 'Enter your title';
		errors.email = !trimmedEmail
			? 'Enter your email'
			: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
				? ''
				: 'Check the email address';
		errors.message = message.trim() ? '' : 'Write a message';

		return !Object.values(errors).some(Boolean);
	}

	function clearFieldError(field: FieldName) {
		errors[field] = '';
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

	<form class="contact-form" onsubmit={handleSubmit} novalidate>
		<div class="form-field">
			<label for="contact-name">Your name</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				required
				autocomplete="name"
				bind:value={name}
				oninput={() => clearFieldError('name')}
				aria-invalid={Boolean(errors.name)}
				aria-describedby={errors.name ? 'contact-name-error' : undefined}
				disabled={status === 'sending'}
			/>
			{#if errors.name}
				<p class="field-error" id="contact-name-error">{errors.name}</p>
			{/if}
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
				oninput={() => clearFieldError('title')}
				aria-invalid={Boolean(errors.title)}
				aria-describedby={errors.title ? 'contact-title-error' : undefined}
				disabled={status === 'sending'}
			/>
			{#if errors.title}
				<p class="field-error" id="contact-title-error">{errors.title}</p>
			{/if}
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
				oninput={() => clearFieldError('email')}
				aria-invalid={Boolean(errors.email)}
				aria-describedby={errors.email ? 'contact-email-error' : undefined}
				disabled={status === 'sending'}
			/>
			{#if errors.email}
				<p class="field-error" id="contact-email-error">{errors.email}</p>
			{/if}
		</div>

		<div class="form-field form-field--wide">
			<label for="contact-message">Your message</label>
			<textarea
				id="contact-message"
				name="message"
				required
				rows="7"
				bind:value={message}
				oninput={() => clearFieldError('message')}
				aria-invalid={Boolean(errors.message)}
				aria-describedby={errors.message ? 'contact-message-error' : undefined}
				disabled={status === 'sending'}
			></textarea>
			{#if errors.message}
				<p class="field-error" id="contact-message-error">{errors.message}</p>
			{/if}
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
