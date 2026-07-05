# Portfolio Engineering Guide

## Product intent

This portfolio is for recruiters, engineering managers, and technical interviewers.
It should present Lee Jia Jing as a software engineering student who builds
high-quality, production-ready software.

Optimize decisions for a software engineering portfolio, not a marketing website.
Project evidence, technical judgment, usability, and clarity matter more than
promotional copy or decorative spectacle.

## Technology

- SvelteKit
- TypeScript
- Tailwind CSS

Use the repository's existing stack and conventions. Avoid adding a dependency
when the platform, Svelte, or CSS can solve the problem clearly.

## Product goals

- Premium, modern UI
- Excellent UX
- Fast performance and high Lighthouse scores
- Accessible interactions and content
- Responsive behavior on all supported device sizes
- Clean, maintainable architecture

## Engineering principles

- Prefer focused, reusable components over duplicated markup.
- Prioritize readability, locality, and maintainability.
- Explain significant architectural changes and their tradeoffs before implementing them.
- Never trade meaningful performance for a purely visual effect.
- Keep animation subtle, purposeful, interruptible, and respectful of reduced-motion preferences.
- Preserve semantic HTML, metadata, crawlability, and other SEO best practices.
- Treat keyboard access, visible focus, contrast, and screen-reader behavior as acceptance criteria.
- Keep content and presentation cleanly separated when content is reused.
- Do not silently broaden a task into a framework migration or large dependency change.

## Workflow

- `main` represents the currently deployed site. Perform redesign and feature work on a separate branch.
- Do not merge, deploy, or modify production configuration without explicit approval.
- Before changing a shared interface or application structure, describe the proposed seam and migration impact.
- Update `docs/roadmap.md` when a planned feature is completed, added, removed, or materially changed.
- Put unscheduled concepts in `docs/ideas.md`; do not implement them merely because they are recorded.
- Record durable visual decisions in `docs/design-system.md` and motion decisions in `docs/animations.md`.

## Implementation guidance

- Use semantic Svelte components with explicit TypeScript types.
- Keep route files focused on composition; extract reusable behavior only when it creates a clearer interface.
- Prefer CSS and Svelte-native transitions for simple visual behavior.
- Use client-side JavaScript only where it adds real interaction value.
- Avoid layout shifts, unnecessary hydration, oversized media, and continuous main-thread animation.
- Design mobile-first and verify at content-driven breakpoints rather than one desktop viewport.
- Preserve working resume, contact, and external-link behavior unless a task explicitly changes them.

## Verification

Run the checks relevant to the change. For a normal application change, the minimum is:

```sh
npm run check
npm run build
```

For UI work, also verify keyboard navigation, reduced motion, responsive layouts,
and browser console output. Use Lighthouse when a change can affect performance,
accessibility, SEO, or best-practice scores.

## Agent skills

Repo-scoped skills live in `.agents/skills/`.

- `$frontend-design` — establish a distinctive visual direction and implement polished frontend UI.
- `$design-taste-frontend` — audit or redesign portfolio UI with anti-template design discipline.
- `$grill-me` — stress-test an idea or plan through a one-question-at-a-time interview.
- `$prototype` — create a clearly throwaway UI or logic prototype to answer one design question.
- `$improve-codebase-architecture` — find and explain deepening opportunities before refactoring.
- `$code-review` — review a branch or diff against both repository standards and its specification.
- `$diagnose` — run the requested systematic debugging loop.
- `$diagnosing-bugs` — current upstream evolution of the diagnosis workflow.

Supporting skills installed for those workflows are `$grilling`,
`$codebase-design`, `$domain-modeling`, and `$setup-matt-pocock-skills`.

Engineering-skill configuration is documented in `docs/agents/`.
