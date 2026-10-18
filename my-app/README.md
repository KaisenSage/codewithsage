# Codewithsage

Codewithsage is a responsive agency website for presenting web and digital product services, selected work, pricing, and contact options. It is built with the Next.js App Router and deployed on Vercel.

## Tech stack

- Next.js 16 App Router and React
- TypeScript
- Tailwind CSS 4
- Framer Motion for UI animation
- Clerk middleware/provider integration and a Google sign-in UI using NextAuth
- Formspree for contact form submissions

## Get started

Run these commands from the `my-app` directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful commands:

```bash
npm run lint
npm run build
npm start
```

`npm start` serves the most recent production build; run `npm run build` first.

## Configuration

Create a local `.env.local` file for credentials required by the configured Clerk, NextAuth, and Formspree integrations. Do not commit secrets. The booking links use `NEXT_PUBLIC_BOOKING_URL` when set and otherwise fall back to the configured Calendly URL.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, featured work, services, pricing, testimonials, and footer |
| `/about` | Agency information |
| `/contact` | Contact form and contact details |
| `/get-started` | Project inquiry and onboarding |
| `/portfolio` | Project portfolio |
| `/privacy-policy` | Privacy policy |
| `/signin` | Google sign-in screen; excluded from indexing |
| `/robots.txt` | Crawler rules and sitemap location |
| `/sitemap.xml` | Sitemap for public pages |

## Architecture

The site uses the Next.js App Router. Route segments live in `src/app`; page and layout files compose reusable UI from `src/components`. Metadata is set per route and shared SEO helpers live in `src/lib/seo.ts`. Static portfolio and testimonial content lives in `src/data`.

`src/middleware.ts` normalizes requests to the canonical `https://www.codewithsage.com` host, removes trailing slashes, and applies Clerk route protection to routes not explicitly public. The homepage is public. `vercel.json` configures the canonical-host security headers, permits indexing of the public homepage, and redirects the apex domain. `src/app/robots.ts`, `src/app/sitemap.ts`, and route metadata provide crawler directives, public URLs, and canonical links.

The root layout wraps pages in `ClientRootWrapper`, which provides Clerk, shared navigation and footer on interior pages, cookie consent, and consent-gated chat loading. The homepage assembles its sections directly; other pages reuse shared section and layout components.

## Project structure

```text
my-app/
├── public/                  # Static images, icons, manifest, and crawler resources
├── scripts/                 # Asset-generation and image utility scripts
├── src/
│   ├── app/                 # App Router pages, layouts, metadata, robots, sitemap, styles
│   │   ├── about/
│   │   ├── contact/
│   │   ├── get-started/
│   │   ├── portfolio/
│   │   ├── privacy-policy/
│   │   └── signin/
│   ├── components/          # Shared sections, navigation, forms, consent, and UI
│   ├── data/                # Portfolio projects, testimonials, and static route data
│   ├── lib/                 # Shared helpers, including SEO metadata
│   ├── types/               # Shared TypeScript declarations
│   └── middleware.ts        # Canonical URL handling and route protection
├── next.config.ts           # Next.js image and response-header configuration
├── vercel.json              # Vercel redirects and canonical-host response headers
└── package.json             # Scripts and dependencies
```

## Deployment

The Vercel project should use `my-app` as its project root. The canonical public URL is `https://www.codewithsage.com`; requests to the apex domain redirect there. Preview deployment indexing behavior is managed by Vercel and the deployment environment.
