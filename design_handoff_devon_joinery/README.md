# Handoff: Devon Joinery Website

## Overview
A full marketing website for **Devon Joinery**, a family-run bespoke joinery company in Exeter, Devon. The site presents the company, its eight service lines, a filterable work gallery, a blog, and lead-capture forms (Contact + Free Estimate). The target build is a **lightweight Next.js (App Router) + Tailwind CSS** static/marketing site.

## About the Design Files
The `.dc.html` files in this bundle are **design references created in HTML** — prototypes that show the intended look, layout, copy, and behavior. They are **not production code to copy directly**. Each file is a self-contained page written with inline styles (plus a small custom `<image-slot>` web component for user-fillable images).

Your task is to **recreate these designs as a Next.js + Tailwind app** using idiomatic patterns: a shared layout, reusable components, a route per page, and Tailwind utility classes mapping to the tokens below. Do not ship the HTML directly and do not port the `image-slot` web component — replace it with `next/image` (see Assets).

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate the UI faithfully. The one liberty: the HTML applies a global `zoom:1.12` / `font-size:112%` scale-up on the page wrapper — **do not replicate the zoom hack**; instead treat the *rendered* sizes as the source of truth. The px values in the Design Tokens section below are already the intended on-screen values (pre-zoom authoring values × 1.12 where it matters, but for a fresh build just use the token scale as given).

## Tech Target
- **Next.js** (App Router, `app/` dir), TypeScript.
- **Tailwind CSS** for all styling. Put the palette + font in `tailwind.config`.
- **Lightweight**: no heavy UI kit, no animation library. Static pages, server components by default. Only the few interactive pieces (mobile-less nav dropdown is CSS-hover; gallery filter, accordion, and forms) need `"use client"`.
- Font: **Public Sans** via `next/font/google`.
- Icons are inline SVGs (provided in the markup) — extract them into a small `Icon` component or an `icons.tsx` module.

## Site Map / Routes
| Route | Source file | Notes |
|---|---|---|
| `/` | `Devon Joinery.dc.html` | Home |
| `/about` | `About - Devon Joinery.dc.html` | About |
| `/expertise/balustrades` | `Balustrades - Devon Joinery.dc.html` | Service |
| `/expertise/gates` | `Gates - Devon Joinery.dc.html` | Service (bulleted "Why") |
| `/expertise/doors` | `Doors - Devon Joinery.dc.html` | Service **+ FAQ accordion + Timbers section** |
| `/expertise/windows` | `Windows - Devon Joinery.dc.html` | Service **+ FAQ accordion** |
| `/expertise/media-units` | `Media Units - Devon Joinery.dc.html` | Service (two maroon panels) |
| `/expertise/receptions` | *not built yet* | Follow service template |
| `/expertise/staircases` | *not built yet* | Follow service template |
| `/expertise/wardrobes-and-storage` | *not built yet* | Follow service template |
| `/gallery` | `Gallery - Devon Joinery.dc.html` | Filterable grid (client) |
| `/blog` | `Blog - Devon Joinery.dc.html` | Post listing |
| `/blog/wood-vs-glass-balustrades` | `Wood vs Glass Balustrades - Devon Joinery.dc.html` | Article |
| `/contact` | `Contact - Devon Joinery.dc.html` | Form + map (client) |
| `/free-estimate` | `Free Estimate - Devon Joinery.dc.html` | Form (client) |
| `/privacy-policy` | `Privacy Policy - Devon Joinery.dc.html` | Legal text |

> Three service pages (Receptions, Staircases, Wardrobes & Storage) are referenced in nav/footer but not yet designed. Build their routes from the shared service template; content can be pulled from the live site or supplied later.

## Shared Layout (build these once)
Every page shares four pieces. Put them in `app/layout.tsx` + components.

### 1. Navbar (`<SiteHeader>`)
- Full-width bar, background `#7c1616`, inner container `max-width:1240px`, padding `16px 46px`, `flex` space-between, `align-items:center`.
- **Logo** (left): two-part lockup — `dj` at `font-weight:800; font-size:30px; letter-spacing:-1px` beside a stacked `devon / joinery` at `font-weight:600; font-size:13px; line-height:1.05`. All white. (Replace with the real logo asset if available.)
- **Links** (center): `Home, About, Expertise ▾, Gallery, Blog, Contact` — white, `font-size:14px; font-weight:500`, `gap:30px`.
- **Expertise dropdown**: hover-reveal menu (CSS `:hover`, no JS). Wrapper `position:relative`; menu `position:absolute; top:100%; left:50%; transform:translateX(-50%); padding-top:14px` (the padding keeps hover contiguous). Menu card: white bg, `min-width:210px`, `border:1px solid #e2ddce`, `box-shadow:0 14px 34px rgba(0,0,0,.18)`, `padding:4px 0`. Items: `padding:11px 18px; font-size:13px; font-weight:500; color:#20262e`, `border-bottom:1px solid #eee6d6` (except last), hover → `background:#f4efe2; color:#7c1616`. Chevron icon rotates 180° on open. Menu lists all 8 services.
- **CTA button** (right): "Free Estimate" → `/free-estimate`. White bg, `#7c1616` text, `border:1px solid rgba(255,255,255,.5)`, `padding:11px 22px; font-size:13px; font-weight:600`.

### 2. CTA Band (`<EstimateCTA>`)
- Container `max-width:1000px`, centered. Inner block: vertical maroon gradient `linear-gradient(180deg,#7c1616 0%,#6e1313 100%)`, `padding:44px 24px 40px`, centered text, white.
- Google review badge chip: white box `padding:8px 15px`, a "G", 5 gold stars (`#f4b400`), "4.9", "Top Rated Service", "verified by Trustindex".
- Heading "Get Your Free Estimate" `font-size:34px; font-weight:700`.
- Sub `max-width:520px; font-size:14px; line-height:1.6; color:rgba(255,255,255,.9)`: "Getting started with Devon Joinery is easy and hassle-free. Simply send us your requirements and we'll provide an obligation-free estimate."

### 3. Contact Strip (`<ContactStrip>`)
- Sits directly under the CTA band, visually part of it. **Full-bleed black** `#0b0b0b` background; inside, a `max-width:1000px` container with `padding:0 24px`; inside that a **darker-red** `#5e1010` box, `border-radius:0 0 8px 8px` (bottom corners only), `display:grid; grid-template-columns:repeat(3,1fr); gap:10px; padding:26px 24px`, white centered text.
- Three columns, each a stacked icon + label (`flex-direction:column; gap:9px; font-size:16px`). Icon size `26px`. Middle column has left+right hairline borders `rgba(255,255,255,.14)`.
  - Email icon → `info@devonjoinery.co.uk` (mailto)
  - Phone icon → `01395 239 049` (tel)
  - List icon (☰) → "Free Estimate Form" → `/free-estimate`
- **Note:** the maroon CTA band above and this red box share the same `1000px` width so they read as one connected card (square top corners on CTA, rounded bottom on red box).

### 4. Footer (`<SiteFooter>`)
- Full-width `#0b0b0b`, white, `padding:56px 24px 40px`. Inner `max-width:1000px`, two columns `gap:60px`.
- **Our Expertise** (`h3` 22px/700): 2-col link grid of all 8 services (underlined, `#c8c8c8`, `font-size:13px`).
- **More Details**: left sub-col "Find Us:" + address (Clyst Court / Blackmore Rd / Hill Barton Business Park / Clyst St. Mary, Exeter / Devon EX5 1SA); right sub-col links: About Us, Work Gallery, Contact Us, Free Estimate, Privacy Policy.
- Bottom bar: top border `1px solid rgba(255,255,255,.12)`, `margin-top:44px; padding-top:22px`, flex space-between, `font-size:12px; color:#9a9a9a`: "© Copyright 2025 – Devon Joinery Ltd" and "Crafted by Tango Brown".

## Page-Specific Structure

### Home (`/`)
1. **Hero**: full-bleed background image (dark overlay `linear-gradient(180deg,rgba(15,17,20,.62),rgba(15,17,20,.35) 40%,rgba(15,17,20,.62))`), transparent nav overlaid on top. Centered white content: eyebrow "Carpentry & Bespoke Joinery in Devon" between two hairlines; `h1` "Timeless Techniques, Flawless Finishes." at `font-size:72px; font-weight:800; letter-spacing:-1.5px`; sub paragraph; two buttons ("Our Expertise" solid maroon, "Free Estimate" translucent with border).
   - **Note:** Home's nav is transparent over the hero; all other pages use the solid `#7c1616` nav bar.
2. **Review badge + intro**: centered Google review chip, then a 20px/500 intro paragraph.
3. **Expertise grid**: 4-column grid of 8 service cards (see Service Card component).
4. **About block**: 2-col, image left / text right. Heading "Passion, Precision, Family & History at Devon Joinery" + paragraph + "More About Us" button.
5. **Meet the Family**: 2-col, text left / image right.
6. **Accreditations**: 4-col grid of logo cards (white, bordered).
7. CTA band + contact strip + footer.

### Service pages (Balustrades, Gates, Doors, Windows, Media Units, + the 3 TBD)
Shared template, top to bottom:
1. **Header**: centered `h1` `font-size:56px; font-weight:700` (e.g. "Bespoke Gates"); intro paragraph `font-size:17px; font-weight:600; line-height:1.65; color:#3a424c`. (Doors also has a "Free Estimate" button here.)
2. **Gallery**: `max-width:1000px`, 3 **square** images (`grid-template-columns:repeat(3,1fr); gap:16px`, each `aspect-ratio:1/1`), with two carousel dots below (active `#7c1616`, inactive `#cfcabb`).
3. **"Our approach…" panel**: 2-col `1fr 1fr`, image left / maroon text-card right. Card: `background:#7c1616`, white, `padding:44px 44px 40px`, `h2` `font-size:34px; font-weight:700`, body paragraphs `font-size:13.5px; line-height:1.7; color:rgba(255,255,255,.9)`, white "Free Estimate" button (white bg, maroon text). Add `padding-bottom:48px` under this section.
4. **"We'd love to hear from you…" band**: full-width tan `#e8e5d8`, `padding:56px 24px`; centered white card `max-width:800px; padding:46px 40px`, `h2` 34px, paragraph, maroon "Free Estimation" button.
   - **Doors/Windows replace this band with an FAQ accordion** (see below).
5. **"Why go for bespoke…" panel**: same 2-col maroon layout. Content is either paragraphs (Balustrades) or a bulleted list (Gates: Customisation / Enhanced Security / Aesthetic Appeal / Expert Craftsmanship; Doors/Windows: intro + "For homeowners, that means:" + 3 bullets).
6. **(Doors only) "Timbers & Materials We Work With"**: 2-col with maroon card on the **left**, image right.
7. **Intro line + Expertise grid**: 20px/500 centered paragraph ("Devon Joinery crafts bespoke kitchens…"), then the 4-col × 8 service-card grid.
8. CTA band + contact strip + footer.

**Service Card component** (used in every expertise grid):
- `position:relative; aspect-ratio:1/1.28; overflow:hidden; box-shadow:0 3px 14px rgba(0,0,0,.12)`.
- Background image, bottom gradient scrim `linear-gradient(180deg,transparent 45%,rgba(0,0,0,.72))`.
- Bottom content: title `color:#fff; font-weight:600; font-size:18px`, then full-width "More Details" button (`background:#7c1d1d; color:#fff; font-size:13px; font-weight:600; padding:8px`) with a trailing arrow icon.
- The 8 services (in card order on service pages): Balustrades, Gates, Doors, Receptions, Windows, Wardrobes & Storage, Media Units, Staircases.

**FAQ Accordion (Doors, Windows)** — sits on the tan `#e8e5d8` band:
- (Doors) Google review chip above the heading. Heading e.g. "The types bespoke doors that we create:" `font-size:30px; font-weight:700`.
- List of white rows (`max-width:800px`, `gap:12px`), each an expandable item: summary row `padding:16px 20px; font-size:15px; font-weight:600; color:#20262e; flex space-between` with a chevron (rotates 180° when open, color `#7c1616`); body `padding:0 20px 18px; font-size:13.5px; line-height:1.7; color:#5a636d`.
- Implement as a `"use client"` accordion (or native `<details>`). Items:
  - **Doors**: Front Entrance Doors, French Doors, Bifolding Doors, Sliding Doors, Interior Doors, Doors for Heritage & Listed Buildings.
  - **Windows**: Sliding Sash Windows, Flush Casement Windows, Stormproof Windows, Pivot Windows, Sliding Windows, Secondary Glazing.
- Body copy for each is in the source files' logic (`renderVals().faqs`). Lift it from there.

### About (`/about`)
Header "About Us" + intro; full-width image; 2-col text ("Where Tradition Meets Excellence" / "Our Approach"); accreditations grid; tan "Meet the Devon Joinery team…" band with a centered image; intro line + expertise grid; CTA + footer.

### Gallery (`/gallery`) — client component
- Header "Work Gallery" + intro.
- **Filter chips**: centered wrapping row of buttons: `All` + 8 services. Active chip → `background:#7c1616; color:#fff; border:1px solid #7c1616`; inactive → `background:#fff; color:#3a424c; border:1px solid #d8d3c4`. `padding:9px 18px; font-size:13px; font-weight:600`.
- **Grid**: `max-width:1100px`, `grid-template-columns:repeat(4,1fr); gap:14px`. Each tile: square image with a maroon category label badge bottom-left (`background:rgba(124,22,22,.92); color:#fff; font-size:11px; font-weight:600; padding:5px 10px`).
- State: `activeFilter` (default "All"); show all items or those whose `cat` matches. Seed with 2 items per category (16 total) — real photos to be supplied.
- CTA + footer.

### Blog (`/blog`)
Header "Our Thoughts" + "A collection of thoughts and tips from the Devon Joinery team". 3-col post-card grid (currently one post). Post card: white, `border:1px solid #e6e0d0`, image (`aspect-ratio:1.8/1`), body with date (`#7c1616`, 12px/600), title (19px/700), excerpt (13.5px), "Read more" + arrow. Links to `/blog/wood-vs-glass-balustrades`.

### Blog post (`/blog/wood-vs-glass-balustrades`)
Readable article column `max-width:760px`. "Back to Blog" link; `h1` `font-size:40px; font-weight:800`; meta row (category chips "Balustrades"/"Comparisons" in maroon, "By Tim · 13/06/2026 · 6 min read"); hero image (`aspect-ratio:1.7/1`); body paragraphs `font-size:16px; line-height:1.75; color:#3a424c`; section `h2` `font-size:25px; font-weight:700`; two inline image galleries (3-up, then 2-up); a bulleted "How to decide" list; inline links to `/expertise/balustrades` and `/free-estimate`. Full copy is in the source file. CTA + footer.

### Contact (`/contact`) — client component
Header "Contact Us" + intro. 2-col `1fr 1fr; gap:64px`:
- **Left**: three detail rows, each a `48px` maroon square icon tile (Phone / Email / Address SVGs) + label + value; below, an embedded Google Map iframe (`height:300px`, `border:1px solid #e2ddce`) pointed at the Exeter address.
- **Right**: "Send Message" form — Name, Email Address, Phone, Your Message (textarea), "Send Enquiry" button. Inputs: `border:1px solid #cfc9ba`, `padding:11px 12px`, focus border `#7c1616`. On submit show a success line (client state); wire to a real endpoint/route handler in production.
CTA + footer.

### Free Estimate (`/free-estimate`) — client component
Header "Free Estimate" + intro. Centered form `max-width:780px`: Name*, Email Address*, Phone*, Address, a "What are you looking for us to do?*" checkbox group (Ballustrades, Doors, Gates, Media Unit, Reception / Kiosk, Staircase, Wardrobes or Storage, Windows, Other; checkbox `accent-color:#7c1616`), Your Requirements* textarea (placeholder "Please enter as much detail as possible"), "Send Enquiry" button, success line on submit. CTA + footer.

### Privacy Policy (`/privacy-policy`)
Header "Privacy Policy" + "Last updated: December 2025". Readable column `max-width:820px` with sections: Information Collection And Use (incl. Log Data), Communications, Cookies, Security, Changes To This Privacy Policy, Contact Us (link to `/contact`). Full copy in source. CTA + footer.

## Interactions & Behavior
- **Nav dropdown**: pure CSS hover reveal; chevron rotates 180° via `transition:transform .2s`. For mobile, add a hamburger + collapsible menu (not in the desktop mocks — implement per Tailwind best practice).
- **Gallery filter**: click chip → filter grid client-side. No animation required (a fade is optional).
- **FAQ accordion**: click row → expand one; chevron rotates. Native `<details>` is acceptable and lightest.
- **Forms**: client-side required-field validation; on submit, `preventDefault` and show an inline success message. Production should POST to a Next.js route handler / email service.
- **Card & link hovers**: service "More Details" and post cards lift shadow on hover; footer/menu links have the hover states noted above.
- **Responsive**: mocks are desktop (~1240px). Collapse the 4-col grids to 2/1, the 2-col panels to stacked, and the nav to a mobile menu at small breakpoints.

## State Management
Minimal, all local component state (`useState`):
- Gallery: `activeFilter: string`.
- FAQ: open item id (or native `<details>`).
- Contact / Free Estimate forms: field values + `submitted: boolean`.
No global store or data fetching needed for the static build (blog can be MDX/local data).

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Maroon (primary) | `#7c1616` | Nav, buttons, panels, accents |
| Maroon dark | `#6e1313` | CTA gradient bottom |
| Maroon deep | `#5e1010` | Contact strip box |
| Maroon button | `#7c1d1d` | Card "More Details" button |
| Ink | `#20262e` | Headings / dark text |
| Body grey | `#3a424c` / `#5a636d` | Body copy |
| Cream (page bg) | `#fdfbf3` (service/inner pages), `#f7f4ec` (home) | Page background |
| Tan band | `#e8e5d8` | "We'd love to hear" / accent bands |
| Black | `#0b0b0b` | Footer + contact strip bleed |
| Star gold | `#f4b400` | Review stars |
| Border cream | `#e2ddce` / `#eee6d6` / `#cfc9ba` | Dividers, inputs |
| Muted footer text | `#c8c8c8` / `#9a9a9a` | Footer links / legal |
| Success green | `#1f8a5b` | Form success message |

### Typography
- Family: **Public Sans** (Google), weights 300–900. `-webkit-font-smoothing:antialiased`.
- Scale (rendered): Hero `h1` 72px/800; page `h1` 56px/700; article `h1` 40px/800; section `h2` 34px/700 (panels) & 30px/700 (bands) & 25px/700 (article); card title 18px/600; footer `h3` 22px/700; intro lead 20px/500 & 17px/600; body 13.5–16px/400–500; small/legal 11–13px.
- Letter-spacing: large headings `-1px` to `-1.5px`.

### Spacing / layout
- Content widths: `1240px` (nav), `1100px` (gallery), `1000px` (CTA/footer/panels), `820px` (privacy), `800px` (bands/accordion), `760–780px` (article/forms/headers).
- Section vertical padding ≈ `40–60px`; panel card padding `44px 44px 40px`; standard gutter `24px`.

### Radius / shadow / borders
- **Border radius: 0 everywhere** — the design is deliberately square. The only exception is the contact-strip red box's **bottom** corners `8px` (to nest under the square-bottomed CTA band). Do not add radii to cards, images, buttons, or inputs.
- Shadows: cards `0 3px 14px rgba(0,0,0,.12)`; menus `0 14px 34px rgba(0,0,0,.18)`; hover lift `0 8px 26px rgba(0,0,0,.12)`.

## Assets
- **Images**: the prototypes use a custom `<image-slot>` placeholder web component (drag-to-fill) — **do not port it**. Replace every slot with `next/image` and real photography. Placeholder captions in the mocks indicate what each image should be (e.g. "Driveway gate photo", "Front door photo", gallery "<Service> photo N"). Real images to be supplied by the client (source: the live site's `wp-content/uploads`, or new photography).
- **Logo**: recreate the `dj / devon joinery` text lockup, or swap in the real logo asset if provided.
- **Icons**: inline SVGs are embedded in the markup — Email, Phone, Address (map-pin), chevron-down (nav), and an arrow (buttons/links). Extract to a shared `icons.tsx`. The "G" Google mark and stars in the review chip are simple text/inline; use a real Google logo asset if desired.
- **Map**: Google Maps embed iframe on Contact, centered on "Devon Joinery, Clyst Court, Hill Barton Business Park, Exeter EX5 1SA".
- **Fonts**: Public Sans via `next/font/google`.

## Files
The HTML design references are bundled alongside this README:
- `Devon Joinery.dc.html` — Home
- `About - Devon Joinery.dc.html`
- `Balustrades - Devon Joinery.dc.html`, `Gates - Devon Joinery.dc.html`, `Doors - Devon Joinery.dc.html`, `Windows - Devon Joinery.dc.html`, `Media Units - Devon Joinery.dc.html` — service pages
- `Gallery - Devon Joinery.dc.html`
- `Blog - Devon Joinery.dc.html`, `Wood vs Glass Balustrades - Devon Joinery.dc.html`
- `Contact - Devon Joinery.dc.html`, `Free Estimate - Devon Joinery.dc.html`
- `Privacy Policy - Devon Joinery.dc.html`
- `image-slot.js` — the placeholder component used by the prototypes (reference only; replace with `next/image`)

Each `.dc.html` is a full page: markup lives between `<x-dc>…</x-dc>`; interactive pages have a `class Component extends DCLogic` block near the bottom whose `renderVals()` holds data arrays (nav services, gallery items, FAQ Q&A, blog posts) — lift copy and lists from there.

## Recommended structure
```
app/
  layout.tsx            # <html>, Public Sans, <SiteHeader/> {children} <EstimateCTA/> <ContactStrip/> <SiteFooter/>
  page.tsx              # Home
  about/page.tsx
  expertise/[service]/page.tsx   # data-driven service template
  gallery/page.tsx      # "use client"
  blog/page.tsx
  blog/[slug]/page.tsx
  contact/page.tsx      # "use client"
  free-estimate/page.tsx# "use client"
  privacy-policy/page.tsx
components/
  SiteHeader.tsx  EstimateCTA.tsx  ContactStrip.tsx  SiteFooter.tsx
  ServiceCard.tsx  MaroonPanel.tsx  Faq.tsx  GalleryGrid.tsx  icons.tsx
lib/
  services.ts           # the 8 services (name, slug, card image)
  site.ts               # phone, email, address, nav, footer links
```
Drive the expertise grid, nav dropdown, and footer from a single `services.ts` so they stay in sync.
