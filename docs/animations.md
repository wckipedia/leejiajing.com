# Animation Guidelines

## Purpose

Motion should clarify hierarchy, continuity, feedback, or navigation. It should
never delay access to content or compensate for weak layout.

## Preferred tools

1. CSS transitions and keyframes for simple state changes and entrance effects.
2. Svelte transitions and actions when behavior belongs to component state.
3. The existing `motion` dependency only for coordinated sequences, gesture-driven
   behavior, or spring motion that would be harder to maintain by hand.

Do not add GSAP, a smooth-scroll library, or another animation dependency without
a concrete interaction requirement and a measured performance review.

## Timing

- Direct feedback: 100–160ms
- Small state or hover transition: 160–220ms
- Component enter/exit: 200–320ms
- Section-level sequence: 320–600ms total

Avoid long stagger chains. Content should become usable immediately.

## Easing

- Standard UI: `cubic-bezier(0.2, 0, 0, 1)`
- Enter: `cubic-bezier(0.16, 1, 0.3, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`
- Linear: progress indicators and genuinely continuous values only

## Reusable patterns

- **Reveal:** small opacity/translate change for content entering the viewport.
- **Focus:** border, color, or subtle scale response on an interactive control.
- **Expand:** preserve spatial continuity when revealing project details.
- **Route change:** brief continuity cue; never block navigation.
- **Loading:** stable skeleton or progress state that prevents layout shift.

Each pattern should have a reduced-motion version that removes travel, parallax,
spring, and nonessential sequencing.

## Performance rules

- Animate `transform` and `opacity` when possible.
- Avoid continuous pointer tracking, large blurred layers, and scroll listeners
  that run outside `requestAnimationFrame`.
- Do not animate properties that repeatedly trigger layout or paint across large areas.
- Lazy-start off-screen motion and stop ambient work when it is not visible.
- Test on a throttled mobile profile before accepting animation-heavy changes.

## Accessibility and UX

- Honor `prefers-reduced-motion: reduce`.
- Never make animation the only way to understand a state change.
- Keep focus stable through expansion, overlays, and route transitions.
- Allow dismissal with keyboard where appropriate.
- Avoid flashes, large unexpected motion, scroll hijacking, and autoplay media.

## Implementation notes

Create shared motion tokens for durations and easing after the visual direction is
approved. Keep component-specific animation close to the component, and promote a
pattern to a shared utility only after it is reused.
