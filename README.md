# RYNX

Premium marketing site and lead-intake flow for `RYNX`, built with React + Vite and prepared for Vercel deployment.

## Overview

This project has been rebuilt as a high-end brand and product website with:

- a premium, handcrafted visual system across Home, Services, Work, About, Contact, and 404
- responsive layouts tuned for mobile, tablet, and desktop
- both light mode and dark mode with persisted preference
- smooth motion and scroll behavior powered by modern frontend libraries
- a Vercel-compatible contact endpoint with local development fallback behavior
- production-ready metadata, social previews, robots, sitemap, and manifest assets

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- shadcn/ui
- Radix UI primitives
- lucide-react
- Framer Motion
- Lenis
- Embla Carousel
- react-countup
- react-intersection-observer
- Geist via `@fontsource-variable/geist`
- Manrope via `@fontsource-variable/manrope`
- Vercel Functions for `/api/contact`
- Resend for production email delivery

## Experience Layers

- Premium homepage with motion-led hero, proof sections, service lanes, case study previews, and credibility carousel
- Services page with structured delivery lanes, capability framing, and FAQ
- Work page with featured case study, filtered project cards, and expandable detail sheet
- About page with principles, metrics, and workflow narrative
- Contact page with improved intake framing and validated project brief form
- Shared premium shell across navbar, footer, theme system, loading state, and 404 route

## Local Development

Install dependencies and run the app:

```bash
npm install
npm run dev
```

The default Vite app runs locally, and the contact endpoint is also available at `/api/contact` during development.

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

Copy the example file before configuring production values:

```bash
cp .env.example .env.local
```

Required for live contact delivery:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Recommended:

- `VITE_SITE_URL` for canonical metadata and production URLs

## Contact Form Behavior

### Development

- Request payloads are validated locally.
- If Resend variables are missing, the endpoint returns a development success message instead of failing silently.

### Production

- `/api/contact` runs as a Vercel serverless function.
- When `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are present, the function sends the enquiry through Resend.
- If production email variables are missing, the endpoint returns a `503` so the issue is visible before launch.

## Vercel Deployment

1. Import the repository into Vercel.
2. Confirm the framework is detected as `Vite`.
3. Add the environment variables from `.env.example`.
4. Deploy.

`vercel.json` already includes:

- `buildCommand: npm run build`
- `outputDirectory: dist`
- React Router SPA rewrites
- pass-through handling for `/api/*`

## SEO and Metadata

The project already includes:

- page-level metadata via `usePageMeta`
- canonical URLs
- Open Graph and Twitter card tags
- JSON-LD organization metadata
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- `og-card.svg`
- theme-color handling for light and dark mode

If the production domain changes from `https://rynx.dev`, update:

- `VITE_SITE_URL`
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## Project Structure

```text
api/contact.js                         Vercel serverless contact endpoint
server/contact-handler.js              Shared validation and delivery logic
src/components/common/*                Motion, scroll, metrics, carousel, and shared visuals
src/components/layout/*                Navbar, footer, shell, theme controls
src/components/ui/*                    shadcn/ui and Radix-based primitives
src/context/*                          Theme and smooth-scroll context
src/data/site.js                       Central site content and structured data
src/hooks/*                            Metadata and shared hooks
src/pages/*                            Route-level pages
public/*                               Static assets, metadata files, animated SVG visuals
vercel.json                            Vercel config
```

## Verification

Latest verification completed successfully with:

- `npm run lint`
- `npm run build`
- `npm run verify`
- local `POST /api/contact` success response in development mode

## Pre-Launch Checklist

- Set the real production domain
- Configure Resend environment variables in Vercel
- Verify enquiry delivery in the live inbox
- Replace placeholder brand/contact details if they change
- Run `npm run verify`
