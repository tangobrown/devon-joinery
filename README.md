# Devon Joinery

Marketing website for **Devon Joinery**, a family-run bespoke joinery company in Exeter. Built with Next.js (App Router), TypeScript and Tailwind CSS. Ready for Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel — it will detect Next.js automatically.
3. No environment variables are required for the initial static build. Forms are client-side only (they set a `submitted` flag and show a success message); wire them up to a real endpoint (Route Handler, Resend, Formspree, etc.) when ready.

## Project structure

```
app/
  layout.tsx                     # <html>, Public Sans, global metadata
  page.tsx                       # Home
  about/page.tsx
  expertise/page.tsx             # Index of all services
  expertise/[service]/page.tsx   # Data-driven service template
  gallery/page.tsx               # "use client" (filter)
  blog/page.tsx
  blog/wood-vs-glass-balustrades/page.tsx
  contact/page.tsx               # "use client" (form)
  free-estimate/page.tsx         # "use client" (form)
  privacy-policy/page.tsx
components/
  SiteHeader, SiteFooter, EstimateCTA, ContactStrip, PageShell,
  ServiceCard, ExpertiseGrid, MaroonPanel, ServicePanelContent,
  Faq, TanBand, ServiceGallery, ReviewBadge, PageHeader,
  ImagePlaceholder, Icons, Logo
lib/
  site.ts             # phone / email / address / nav
  services.ts         # the 8 services and their slugs
  service-content.ts  # copy for every service page
  blog.ts             # blog post metadata
```

## Images

Every image is currently a placeholder tile with a label describing what belongs
there (e.g. "Balustrade photo 1", "Driveway gate photo"). Replace by swapping
`<ImagePlaceholder />` for `next/image` and adding the real assets under
`public/images/`.

## Design source

The original HTML design references live in `design_handoff_devon_joinery/`
and are excluded from the TypeScript build via `tsconfig.json`.

## Design tokens

See `tailwind.config.ts` for the palette (maroon, ink, cream, tan, night) and
`app/globals.css` for base resets. Layout widths are exposed as Tailwind
`max-w-*` utilities (nav, gallery, content, privacy, band, article, form).
