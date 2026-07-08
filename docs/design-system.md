# Portfolio V2 Design System

Status: approved and implemented.

## Direction

Portfolio V2 is an airy, asymmetric, typography-led engineering portfolio. It
uses monochrome contrast, large variable type, flat surfaces, and generous
spacing instead of card-heavy layouts or decorative media.

The visual system should help recruiters scan the work quickly while giving
technical readers expandable detail.

## Typography

| Role | Family | Use |
| --- | --- | --- |
| Display | Space Grotesk Variable | Hero name, section headings, project titles |
| Body | Space Grotesk Variable | Paragraphs, navigation, form controls |
| Utility | IBM Plex Mono | Labels, dates, interaction states, metadata |

- Self-host the Latin font subsets with `font-display: swap`.
- Body copy remains at least 16px where it carries meaningful information.
- Project summaries and expanded project details use larger body sizes than
  default paragraph copy so technical evidence stays readable inside the dense
  accordion layout.
- Display type may change weight, but paragraph typography remains stable.
- Use sentence case and direct language.

## Color and themes

### Light

- Background: `#fafafa`
- Foreground: `#1c1f21`
- Muted text: `#5e6264`
- Surface: `#f0f0ed`

### Dark

- Background: `#111315`
- Foreground: `#f4f4f0`
- Muted text: `#b0b2ae`
- Surface: `#191b1d`

The site has no accent color. Hierarchy comes from type, spacing, and
foreground/background inversion. Theme selection follows the operating system
until the visitor makes a stored manual choice.

## Background

Light mode repeats a 48px square SVG tile with a soft white ground and a single
3px near-black square at 15% opacity. Dark mode uses a solid background with no
pattern.

The background is static. Do not add pointer lighting, parallax, or continuous
ambient animation.

## Layout

- Maximum content width: 90rem.
- Gutters scale fluidly from 16px to 64px.
- Desktop composition may be offset and asymmetric.
- The hero name is centered; directly below it, the capability statement anchors
  left while primary links anchor right.
- The hero name keeps natural word spacing and scales its font size to align its
  rendered left and right edges with the supporting row below.
- A small optical correction compensates for the display font's left side bearing.
- Layouts collapse to one readable column below 768px.
- Section spacing is intentionally generous, but the hero and primary actions
  remain within the first viewport.

## Shapes and surfaces

- Use whitespace and typography before containers or decorative divider lines.
- Buttons and inputs are rectangular, borderless, and use surface contrast.
- Expanded project details use restrained dividers to separate Problem, Key
  decisions, and Result.
- Key decisions are presented as a semantic ordered list, visually expressed as
  separated editorial text blocks instead of filled bullets or visible numbers.
- Projects keep additional bottom spacing so the final accordion item can expand
  without its links sitting against the viewport edge.
- Cards, shadows, glass panels, and floating status pills are not part of V2.
- Experience and education use the same flat surface as Projects, with a compact
  tab rail and typographic rows instead of separate cards. The tab rail aligns
  with the first entry title, and history detail copy matches expanded project
  detail sizing. History highlights use standard disc bullets for scan clarity.
- Contact uses the same flat surface language as Projects and Experience. Form
  labels, controls, helper text, and status messages stay close to expanded
  project detail sizing so the page does not feel like a separate template.
- Focus rings use the current foreground color and remain visible in both themes.
- Theme control uses a compact two-state pill with an active foreground thumb,
  preserving a 44px hit target while staying aligned with the flat header system.

## Media

Project screenshots, stock photography, diagrams, and decorative illustrations
are intentionally excluded.

## Core patterns

- Header: theme control, centered anchor navigation, and Contact action.
- Hero: kinetic name, one capability statement, and direct actions.
- Homepage sequence: hero, How I work, Experience and education, Projects, and
  resume CTA.
- History: Work-first accessible tabs inside a shared surface.
- Projects: equal-weight, single-open accordion.
- Contact: visible labels and complete EmailJS states.
