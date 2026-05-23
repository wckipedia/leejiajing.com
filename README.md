# Lee Jia Jing Portfolio

A starter portfolio website built with SvelteKit and Tailwind CSS.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

## Customize

- Update placeholder content in `src/lib/data/portfolio.ts`
- Edit reusable UI sections in `src/lib/components`
- Add or change pages in `src/routes`
- Replace placeholder resume details before publishing

## Contact form (EmailJS)

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an **Email Service** connected to `leejiajing76@gmail.com`.
3. Create an **Email Template** with variables that match the form:
   - **Subject:** `Portfolio: {{title}}`
   - **Body example:**
     ```
     From: {{name}} ({{email}})
     Title: {{title}}

     {{message}}
     ```
   - Set **Reply To** to `{{email}}` in the template settings so you can reply directly.
4. Copy `.env.example` to `.env` and paste your EmailJS IDs (your real keys belong in `.env` only — not in `.env.example`).
5. **Restart the dev server** (`Ctrl+C`, then `npm run dev`) so SvelteKit loads the new env vars.
6. Open `/contact`, fill out the form, and click **Send email**. Check `leejiajing76@gmail.com` (and spam) for the message.

## Useful Scripts

```sh
npm run check
npm run build
npm run preview
```
