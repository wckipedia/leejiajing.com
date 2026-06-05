# Lee Jia Jing Portfolio

Personal portfolio site built with SvelteKit 5, TypeScript, and Tailwind CSS v4.

## Features

- **Home** — Hero, animated tech stack, featured projects, and work experience timeline
- **Projects** — Full project grid with tech tags and external links
- **About** — Bio, values, interests, and education history
- **Contact** — Form powered by [EmailJS](https://www.emailjs.com/) (no backend required)
- Responsive layout with reusable components (`Header`, `Footer`, `ProjectCard`, `ExperienceTimeline`, etc.)

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | SvelteKit 2, Svelte 5 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Contact | EmailJS |
| Build | Vite 7 |

## Getting started

**Prerequisites:** Node.js 18+ and npm

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Svelte/TypeScript type checks |

## Configuration

### Content

Most site content lives in a single data file:

```
src/lib/data/portfolio.ts
```

Update `projects`, `work`, `education`, and `skills` there. Featured projects on the home page are filtered by the `featured` flag.

Page copy (hero text, about bio, etc.) is in the route files under `src/routes/`.

### Resume

Replace `static/resume.pdf` with your own PDF. Links to it are wired through the header and footer.

### Contact form (EmailJS)

Copy the example env file and fill in your EmailJS credentials:

```sh
cp .env.example .env
```

Create an EmailJS service linked to your inbox, then a template with these variables:

- `{{name}}`
- `{{title}}`
- `{{email}}`
- `{{message}}`

Set the values in `.env`:

```
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact page checks for valid keys before sending. Without them, the form shows a configuration message instead of submitting.

## Project structure

```
src/
├── app.css                 # Global styles and Tailwind theme
├── lib/
│   ├── components/         # Shared UI components
│   └── data/
│       └── portfolio.ts    # Projects, experience, education, skills
└── routes/
    ├── +layout.svelte      # Site shell (header, footer)
    ├── +page.svelte        # Home
    ├── about/
    ├── contact/
    └── projects/
static/
├── images/                 # Logos and assets
└── resume.pdf
```

## Deployment

The project uses `@sveltejs/adapter-auto`, which picks a deployment adapter based on your hosting platform. Run `npm run build` and deploy the generated output according to your provider's SvelteKit docs.
