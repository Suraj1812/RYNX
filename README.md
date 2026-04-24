# RYNX

Production marketing site and lead-intake flow for `RYNX`, built with React + Vite and prepared for deployment on Vercel.

## What Changed

- Shifted the frontend to a dependency-driven UI system using `shadcn`, `radix-ui`, `lucide-react`, and `@fontsource-variable/geist`.
- Reworked the full visual system for a more premium, less template-like brand presence.
- Added both light mode and dark mode with persisted theme preference.
- Rebuilt the page content and information architecture across Home, Services, Work, About, and Contact.
- Added production-grade metadata, Open Graph tags, manifest, robots, and sitemap assets.
- Replaced the placeholder contact setup with a Vercel-compatible API endpoint designed for Resend.
- Removed the older unused handcrafted sections and legacy dependencies from the active app path.
- Added deployment documentation, environment variable guidance, and Vercel routing config.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- shadcn/ui
- Radix UI
- lucide-react
- Geist via `@fontsource-variable/geist`
- Framer Motion
- Vercel Functions for the contact endpoint
- Resend API for email delivery in production

## Local Development

```bash
npm install
npm run dev
```

The app runs as a Vite frontend. During local development the contact endpoint is also available at `/api/contact` through a Vite middleware so the form can be tested without deploying first.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run verify
```

`npm run verify` runs linting and the production build together.

## Environment Variables

Create a `.env.local` file from `.env.example`.

```bash
cp .env.example .env.local
```

Required for live contact delivery:

- `RESEND_API_KEY`: Resend API key
- `CONTACT_TO_EMAIL`: inbox that should receive new enquiries
- `CONTACT_FROM_EMAIL`: sender identity used by Resend

Recommended:

- `VITE_SITE_URL`: production site URL used for canonical and metadata defaults

## Contact Form Behaviour

### Development

- Form submissions are validated locally.
- If Resend variables are missing, the API returns a development success message instead of silently failing.

### Production on Vercel

- `/api/contact` runs as a serverless function.
- If `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are configured, the function sends a formatted email through Resend.
- If those variables are missing, the API returns a `503` so the issue is visible before launch.

## Vercel Deployment

1. Import the repo into Vercel.
2. Set the framework preset to `Vite` if Vercel does not auto-detect it.
3. Add the environment variables from `.env.example`.
4. Deploy.

`vercel.json` already includes:

- `buildCommand: npm run build`
- `outputDirectory: dist`
- SPA rewrites for React Router
- pass-through handling for `/api/*`

## SEO and Metadata

The project includes:

- canonical metadata
- Open Graph and Twitter card tags
- JSON-LD organization metadata
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `og-card.svg`
- theme-color updates tied to light/dark mode

If you deploy on a domain other than `https://rynx.dev`, update:

- `VITE_SITE_URL`
- `index.html` default canonical/OG URL values
- `public/robots.txt`
- `public/sitemap.xml`

## Project Structure

```text
api/contact.js              Vercel serverless contact endpoint
server/contact-handler.js   Shared validation and email delivery logic
src/components/ui/*         shadcn and Radix-based UI primitives
src/context/ThemeContext.jsx
src/hooks/usePageMeta.js
src/data/site.js
src/pages/*
public/*
vercel.json
```

## Pre-Launch Checklist

- Set real production domain values
- Configure Resend environment variables
- Verify all contact emails arrive in the target inbox
- Replace placeholder repo/social links if needed
- Run `npm run verify`
