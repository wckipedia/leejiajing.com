<script lang="ts">
	import { education, projects, work } from '$lib/data/portfolio';
	import { ExperienceTimeline, KineticName, ProjectAccordion } from '$lib/components';

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Lee Jia Jing',
		url: 'https://leejiajing.com',
		jobTitle: 'Software Developer',
		sameAs: [
			'https://github.com/wckipedia',
			'https://www.linkedin.com/in/leejiajing-tech'
		]
	};
</script>

<svelte:head>
	<title>Lee Jia Jing</title>
	<meta
		name="description"
		content="Lee Jia Jing is a software developer building usable, end-to-end products across interfaces, services, data, and local tools."
	/>
	<link rel="canonical" href="https://leejiajing.com/" />
	<meta property="og:title" content="Lee Jia Jing | Software Developer" />
	<meta
		property="og:description"
		content="Software projects, technical decisions, experience, and contact information for Lee Jia Jing."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://leejiajing.com/" />
	<script type="application/ld+json">{JSON.stringify(personSchema)}</script>
</svelte:head>

<section class="hero" aria-labelledby="hero-name">
	<div class="hero__inner">
		<KineticName id="hero-name" text="Lee Jia Jing" />

		<div class="hero__support">
			<p class="hero__statement">
				Aspiring software developer who enjoys building useful things for real people.
			</p>

			<div class="hero__actions" aria-label="Primary links">
				<a class="action-link action-link--primary" href="/resume.pdf" download="Lee_Jia_Jing_Resume.pdf">
					Download resume
				</a>
				<a class="action-link" href="https://github.com/wckipedia" target="_blank" rel="noreferrer">
					GitHub
				</a>
				<a
					class="action-link"
					href="https://www.linkedin.com/in/leejiajing-tech"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</div>
		</div>

	</div>
</section>

<section id="about" class="page-section about-section" aria-labelledby="about-title">
	<div class="about-section__heading">
		<h2 id="about-title">How I work</h2>
	</div>
	<div class="about-section__copy">
		<p>
			I like building things that start from a real need and become easier to use with each
			iteration. I care about the small decisions that make software feel clear, useful, and
			dependable.
		</p>
		<p>
            I’m still early in my career, and I treat every project as an opportunity to learn new technologies, refine my skills, and stay current with the latest trends in software development.
		</p>
	</div>
</section>

<section id="experience" class="page-section page-section--history" aria-labelledby="experience-title">
	<div class="section-heading section-heading--narrow">
		<h2 id="experience-title">Experience and education</h2>
	</div>
	<ExperienceTimeline {work} {education} />
</section>

<section id="projects" class="page-section page-section--projects" aria-labelledby="projects-title">
	<div class="section-heading">
		<h2 id="projects-title">Projects</h2>
	</div>
	<ProjectAccordion {projects} />
</section>
