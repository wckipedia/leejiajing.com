<script lang="ts">
	import { onMount } from 'svelte';

	let dark = $state(false);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggleTheme() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
		localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
	}
</script>

<button
	class="theme-toggle"
	type="button"
	aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
	aria-pressed={dark}
	onclick={toggleTheme}
>
	<span aria-hidden="true">{dark ? 'Light' : 'Dark'}</span>
</button>
