<script lang="ts">
	import { onMount } from 'svelte';
	import { education, projects, work } from '$lib/data/portfolio';
	import { ExperienceTimeline, ProjectCard } from '$lib/components';

	const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
	const si = (slug: string, hex: string) =>
		`https://cdn.simpleicons.org/${slug}/${hex}`;

	const colorSvg = (path: string, hex: string) =>
		`data:image/svg+xml,${encodeURIComponent(`<svg fill="${hex}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${path}"/></svg>`)}`;

	const technologies = [
		{
			name: 'SvelteKit',
			icon: si('svelte', 'FF3E00'),
			x: '14%',
			y: '10%',
			delay: '0ms'
		},
		{
			name: 'TypeScript',
			icon: si('typescript', '3178C6'),
			x: '42%',
			y: '6%',
			delay: '-900ms'
		},
		{
			name: 'JavaScript',
			icon: si('javascript', 'F7DF1E'),
			x: '68%',
			y: '13%',
			delay: '-1800ms'
		},
		{
			name: 'Python',
			icon: si('python', '3776AB'),
			x: '22%',
			y: '32%',
			delay: '-2700ms'
		},
		{
			name: 'C#',
			icon: colorSvg(
				'M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z',
				'#512BD4'
			),
			x: '52%',
			y: '28%',
			delay: '-3500ms'
		},
		{
			name: 'HTML',
			icon: si('html5', 'E34F26'),
			x: '80%',
			y: '35%',
			delay: '-600ms'
		},
		{
			name: 'CSS',
			icon: colorSvg(
				'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
				'#1572B6'
			),
			x: '14%',
			y: '55%',
			delay: '-1400ms'
		},
		{
			name: 'Tailwind CSS',
			icon: si('tailwindcss', '06B6D4'),
			x: '42%',
			y: '52%',
			delay: '-2200ms'
		},
		{
			name: 'MySQL',
			icon: si('mysql', '4479A1'),
			x: '72%',
			y: '56%',
			delay: '-3100ms'
		},
		{
			name: 'MongoDB',
			icon: si('mongodb', '47A248'),
			x: '28%',
			y: '76%',
			delay: '-4000ms'
		},
		{
			name: 'AWS',
			icon: colorSvg(
				'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z',
				'#FF9900'
			),
			x: '56%',
			y: '78%',
			delay: '-4800ms'
		},
		{
			name: 'Git',
			icon: si('git', 'F05032'),
			x: '82%',
			y: '76%',
			delay: '-5500ms'
		}
	];

	const emailAddress = 'leejiajing76@gmail.com';

	const socialLinks = [
		{
			label: 'GitHub',
			href: 'https://github.com/wckipedia',
			icon: 'github'
		},
		{
			label: 'LinkedIn',
			href: 'www.linkedin.com/in/leejiajing-tech',
			icon: 'linkedin'
		}
	] as const;

	const heroActionClass =
		'flex size-11 items-center justify-center rounded-md border border-stone-300/80 bg-[#fbf7ef] text-stone-600 transition hover:border-stone-400 hover:bg-white hover:text-stone-950 active:text-stone-400 focus:outline-none';

	const heroResumeClass =
		'inline-flex h-11 items-center gap-2 rounded-md border border-stone-300/80 bg-[#fbf7ef] px-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-white hover:text-stone-950 active:text-stone-400 focus:outline-none';

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

	function easeInOutCubic(t: number) {
		return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	function smoothScrollTo(target: number, duration: number) {
		const start = window.scrollY;
		const distance = target - start;
		const startTime = performance.now();

		function step(now: number) {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			window.scrollTo(0, start + distance * easeInOutCubic(progress));
			if (progress < 1) requestAnimationFrame(step);
		}

		requestAnimationFrame(step);
	}

	onMount(() => {
		let isScrolling = false;
		let scrollTimeout: ReturnType<typeof setTimeout>;
		const SCROLL_DURATION = 900;

		function getSnapTargets(): number[] {
			const sections = document.querySelectorAll<HTMLElement>('.snap-target');
			return Array.from(sections).map((s) => {
				const offset = parseFloat(getComputedStyle(s).scrollMarginTop) || 0;
				return s.offsetTop - offset;
			});
		}

		function snapToNearest() {
			if (isScrolling) return;
			const targets = getSnapTargets();
			if (!targets.length) return;

			const scrollY = window.scrollY;
			let closest = targets[0];
			let minDist = Math.abs(scrollY - closest);

			for (const t of targets) {
				const dist = Math.abs(scrollY - t);
				if (dist < minDist) {
					minDist = dist;
					closest = t;
				}
			}

			if (minDist > 5) {
				isScrolling = true;
				smoothScrollTo(closest, SCROLL_DURATION);
				setTimeout(() => {
					isScrolling = false;
				}, SCROLL_DURATION + 50);
			}
		}

		function onScroll() {
			if (isScrolling) return;
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(snapToNearest, 120);
		}

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
			clearTimeout(scrollTimeout);
		};
	});
</script>

<svelte:head>
	<title>lee jia jing</title>
	<meta
		name="description"
		content="Personal portfolio for Lee Jia Jing"
	/>
</svelte:head>

<section class="snap-target relative -mt-[4.5rem] flex min-h-[100dvh] items-start justify-center overflow-hidden pt-[max(5rem,16dvh)] sm:-mt-20 sm:pt-[max(6rem,20dvh)] md:-mt-24">
	<div
		class="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16"
	>
		<div class="mx-auto flex w-full max-w-xl justify-center lg:mx-0 lg:justify-start">
			<img
				class="w-full max-w-[16rem] object-contain sm:max-w-[28rem] lg:max-w-[32rem]"
				src="/images/personal%20logo.svg"
				alt="Lee Jia Jing personal logo"
			/>
		</div>

		<div class="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
			<p class="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-900/80 sm:text-sm sm:tracking-[0.35em]">
				Personal Portfolio
			</p>
			<h1 class="text-4xl font-bold tracking-[-0.045em] text-stone-950 sm:text-5xl md:text-6xl lg:text-7xl">
				Lee Jia Jing
			</h1>
			<p class="mt-5 text-base font-medium leading-7 text-stone-600 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
				I’m an IT student at Republic Polytechnic, still exploring my career path with curiosity. 
				I enjoy learning, and when I’m not building or discovering, I play video games and do photography.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
					<a
						class={heroResumeClass}
						href="/resume.pdf"
						download="Lee_Jia_Jing_Resume.pdf"
					>
						<svg
							class="size-4 shrink-0"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
							/>
						</svg>
						Resume
					</a>

					{#each socialLinks as link (link.label)}
						<a
							class={heroActionClass}
							href={link.href}
							aria-label={link.label}
							target="_blank"
							rel="noreferrer"
						>
							{#if link.icon === 'github'}
								<svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
									/>
								</svg>
							{:else}
								<svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{/if}
						</a>
					{/each}

					<button
						type="button"
						class={heroActionClass}
						aria-label="Copy email address"
						onclick={copyEmail}
					>
						<svg
							class="size-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.75"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 6h16v12H4V6zm0 0 8 7 8-7"
							/>
						</svg>
					</button>
			</div>
		</div>
	</div>
</section>

{#if emailCopied}
	<p
		class="copy-toast fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-sm rounded-md border border-stone-300/80 bg-[#fbf7ef] px-4 py-2 text-center text-sm font-medium text-stone-800 shadow-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-none sm:text-left"
		role="status"
		aria-live="polite"
	>
		Email copied to clipboard
	</p>
{/if}

<section id="skills" class="snap-target mx-auto max-w-6xl scroll-mt-[4.5rem] px-4 py-12 sm:scroll-mt-20 sm:px-6 sm:py-16 md:scroll-mt-24">
	<h2 class="text-3xl font-bold tracking-[-0.04em] text-stone-950 sm:text-4xl md:text-5xl">Skills</h2>

	<ul class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:hidden">
		{#each technologies as technology (technology.name)}
			<li
				class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-stone-300/80 bg-[#fbf7ef] px-3 py-4 text-center shadow-sm transition hover:border-stone-500 hover:bg-white hover:shadow-md"
			>
				<img class="size-7 shrink-0 sm:size-8" src={technology.icon} alt="" loading="lazy" />
				<p class="text-xs font-bold leading-tight tracking-[-0.02em] text-stone-950">
					{technology.name}
				</p>
			</li>
		{/each}
	</ul>

	<div class="relative mt-12 hidden min-h-[44rem] md:block lg:min-h-[48rem]">
		<ul class="relative h-[44rem] lg:h-[48rem]">
			{#each technologies as technology (technology.name)}
				<li
					class="tech-bubble group flex flex-col items-center justify-center gap-2 rounded-full border border-stone-300/80 bg-[#f7f0e6] p-4 text-center shadow-sm transition hover:z-10 hover:border-stone-500 hover:bg-[#fbf7ef] hover:shadow-md"
					style={`--x: ${technology.x}; --y: ${technology.y}; animation-delay: ${technology.delay};`}
				>
					<img class="size-8 shrink-0" src={technology.icon} alt="" loading="lazy" />
					<p class="max-w-24 text-xs font-bold leading-tight tracking-[-0.02em] text-stone-950">
						{technology.name}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="experience" class="snap-target mx-auto max-w-6xl scroll-mt-[4.5rem] px-4 py-12 sm:scroll-mt-20 sm:px-6 sm:py-16 md:scroll-mt-24">
	<h2 class="text-3xl font-bold tracking-[-0.04em] text-stone-950 sm:text-4xl md:text-5xl">Experience</h2>

	<ExperienceTimeline {work} {education} />
</section>

<section id="projects" class="snap-target mx-auto max-w-6xl scroll-mt-[4.5rem] px-4 pb-24 pt-20 sm:scroll-mt-20 sm:px-6 sm:pb-40 sm:pt-32 md:scroll-mt-24 md:pb-52 md:pt-52">
	<h2 class="text-3xl font-bold tracking-[-0.04em] text-stone-950 sm:text-4xl md:text-5xl">Projects</h2>
	<div class="mt-8 grid items-stretch gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
		{#each featuredProjects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
