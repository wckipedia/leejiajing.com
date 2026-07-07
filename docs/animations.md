# Portfolio V2 Motion Guidelines

## Purpose

Motion reinforces identity, hierarchy, and state. Portfolio V2 spends its
motion budget in three places: the hero name, project disclosure, and the
home/contact route transition.

## Kinetic name

- Space Grotesk Variable changes its `wght` axis by character.
- A restrained horizontal scale recreates the source animation's width pressure
  because Space Grotesk does not provide a variable width axis.
- Entry begins near `wght 350` and settles at `wght 650`, matching the section
  heading weight.
- Fine-pointer proximity may move characters within `wght 500-700` and
  `scaleX(0.88-1.16)`.
- Character positions are measured after font load and resize, never on every
  animation frame.
- Pointer tracking is active only while the name is engaged.
- Animation stops when the hero leaves the viewport, the page becomes hidden,
  or the window loses focus.
- Coarse pointers receive the settled static state.

The source retains attribution to the CodePen concept that informed the
interaction.

## Project disclosure

- Only one project may be open at a time.
- Expand and collapse uses a 420ms grid-row transition so layout opens without
  measuring height in JavaScript.
- Project-title weight shifts over 260ms to communicate the selected state.
- Desktop detail dividers draw top-down before their adjacent text settles in.
- Tablet and mobile horizontal detail dividers draw left-to-right.
- Key decision separators use the same drawn-rule motion as the detail
  dividers, staggered after the Key decisions column appears.
- Detail text fades and rises in a short cascade: Problem, Key decisions,
  Result, then project links.
- Expansion never moves keyboard focus automatically.

## History tabs

- Work and Education use a keyed panel transition so the selected history set
  fades and moves in the direction of the tab change.
- Entry rows settle in a short cascade after the panel changes, reinforcing
  that the content set has changed without adding scroll-driven motion.
- The animation uses only opacity and transform.

## Home/contact route transition

- Contact and Back home links use client-side navigation only for the home and
  contact routes, so the anchors still work normally without JavaScript.
- The transition uses the native View Transitions API when available.
- When native route transitions are unavailable, a fixed snapshot of the current
  main content slides away while the incoming page settles in, avoiding a blank
  intermediate frame.
- Contact moves forward from right to left. Back home mirrors the direction.

## Direct feedback

- Links and buttons transition within 160-180ms.
- Project footer links use a transform-based underline reveal on hover and
  keyboard focus.
- Pressed actions move down by 1px.
- Theme changes are immediate so the interface never becomes temporarily unreadable.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- The hero name renders at its settled weight.
- Project content appears and disappears without meaningful travel.
- History tab changes swap content immediately without panel travel.
- Home/contact navigation falls back to immediate route changes.
- Smooth scrolling and nonessential transitions are disabled.

## Performance rules

- Do not add global scroll listeners.
- Animate transforms, opacity, and variable-font axes only.
- Do not continuously measure layout.
- Stop requestAnimationFrame work when the interaction is inactive.
- Do not add GSAP, smooth scrolling, WebGL, or another motion dependency.
