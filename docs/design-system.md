# Design System

Status: foundational brief. The redesign's visual direction has not been selected.
Record approved choices here before they are implemented.

## Principles

- Present engineering work with confidence, clarity, and evidence.
- Use a small, coherent visual vocabulary instead of a collection of effects.
- Make hierarchy obvious within a quick recruiter scan.
- Keep interaction behavior predictable and accessible.
- Prefer durable tokens and reusable components over one-off values.

## Typography

The final display and body families are intentionally undecided until design
exploration. Font selection must preserve legibility, load efficiently, and include
the weights actually used.

Working type scale:

| Token | Size | Typical use |
| --- | ---: | --- |
| `text-xs` | 0.75rem | Metadata and compact labels |
| `text-sm` | 0.875rem | Secondary copy |
| `text-base` | 1rem | Body copy |
| `text-lg` | 1.125rem | Introductory copy |
| `text-xl` | 1.25rem | Small headings |
| `text-2xl` | 1.5rem | Component headings |
| `text-3xl` | 1.875rem | Section headings |
| `text-4xl+` | Fluid | Page and hero display type |

- Body text should remain comfortable at 16px or larger.
- Keep body line length near 60–75 characters.
- Use monospace only when it communicates technical meaning.
- Avoid downloading unused font weights or character sets.

## Color palette

The brand palette is pending design exploration. Implement it through semantic
tokens rather than component-specific colors:

- `background`, `surface`, and `surface-elevated`
- `text-primary`, `text-secondary`, and `text-muted`
- `border` and `border-strong`
- `accent` and `accent-contrast`
- `success`, `warning`, and `error`
- `focus-ring`

Every approved foreground/background pair must meet WCAG AA contrast. Color must
not be the only signal for state, validation, or navigation.

## Spacing scale

Use a 4px base grid:

`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

Prefer consistent section rhythms and container gutters. Break the scale only
when optical alignment or responsive content requires it, and document repeated
exceptions as a token.

## Border radius

Working scale:

- `radius-sm`: 4px
- `radius-md`: 8px
- `radius-lg`: 12px
- `radius-xl`: 16px
- `radius-round`: 9999px for circular controls and intentional pills only

Choose a restrained subset after the visual direction is approved. Avoid making
every container a rounded card.

## Shadows

Use elevation sparingly:

- `shadow-subtle`: separates an interactive surface from its background.
- `shadow-raised`: supports temporary or floating UI.
- `shadow-overlay`: reserved for dialogs and other modal layers.

Borders, contrast, and spacing should establish hierarchy before shadows do.

## Animation principles

- Motion must explain entry, exit, hierarchy, or direct manipulation.
- Prefer opacity and transform; avoid animating layout-heavy properties.
- Provide immediate feedback and keep common interactions under 250ms.
- Respect `prefers-reduced-motion`.
- See `animations.md` for implementation guidance and reusable patterns.

## Responsive breakpoints

Use Tailwind's default breakpoints unless content testing proves a different
threshold is needed:

| Name | Minimum width |
| --- | ---: |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

Start from the smallest layout. Add a breakpoint because the content needs it,
not because a specific device was named.

## Component design language

- Components should have one clear purpose and a small, typed interface.
- Project work should lead with outcomes, role, constraints, and technical decisions.
- Reuse primitives for buttons, links, tags, section headings, media, and focus states.
- Preserve semantic elements even when the visual treatment is unconventional.
- Make hover an enhancement; essential information and actions must remain available
  to keyboard and touch users.
- Use progressive disclosure for detail without hiding the evidence needed for a
  fast first scan.
