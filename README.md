# E47 Performance — Project Guide

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4

---

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

---

## Entry Points

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root HTML shell — loads fonts, injects JSON-LD schemas, sets default SEO |
| `app/page.tsx` | Home page UI — renders every section (navbar → footer) |
| `app/globals.css` | Design tokens, base resets, reusable component classes |
| `app/not-found.tsx` | 404 page |

---

## What Each File Does

### App

| File | Does |
|------|------|
| `app/layout.tsx` | Wraps every page. Loads Roboto + Archivo from Google Fonts, applies body classes, outputs JSON-LD for Organization + WebSite schemas |
| `app/page.tsx` | Full home page. Pulls all content from `data/home-content.js` — no hardcoded copy here |
| `app/globals.css` | Tailwind v4 config (replaces `tailwind.config.ts`). Defines brand colours, custom breakpoints, fonts via `@theme`. Defines `.site-container`, `.display`, `.eyebrow`, `.btn`, `.mobile-overlay` component classes |
| `app/robots.ts` | Auto-generates `/robots.txt` from `siteConfig.url` |
| `app/opengraph-image.tsx` | Auto-generates the default 1200×630 OG/Twitter card image |

### Components

| File | Does |
|------|------|
| `components/e47-logo.tsx` | SVG logo — accepts `width`, `height`, `className` props |
| `components/mobile-menu.tsx` | Full-screen mobile nav overlay. Slides in from right, locks body scroll while open |

### Data

| File | Does |
|------|------|
| `data/home-content.js` | **Single source of truth for the home page.** All text, images, SEO tags, and links live here — edit this file, not `page.tsx` |
| `data/home-content.d.ts` | TypeScript types for `home-content.js` — update if you add new fields |
| `data/site.ts` | Global site config: `name`, `url`, `description`, `locale`, `contactEmail`, `social` links |

### Lib

| File | Does |
|------|------|
| `lib/seo.ts` | `createMetadata()` helper — builds the full Next.js `Metadata` object (title, description, OG, Twitter, robots, canonical URL) |
| `lib/schema.tsx` | JSON-LD structured data: `organizationSchema()`, `websiteSchema()`, and the `<JsonLd>` render component |

### Config

| File | Does |
|------|------|
| `postcss.config.js` | Wires Tailwind v4 into PostCSS via `@tailwindcss/postcss` |
| `tsconfig.json` | TypeScript config — `@/` path alias points to the project root |

---

## Where SEO Lives & How to Change It

### 1. Home page title, description, keywords → `data/home-content.js`

The `seo` block at the top of the file:

```js
seo: {
  rawTitle: "E47 - Physiotherapy & Performance | Ahmedabad",  // exact <title> tag
  description: "Movement-first physiotherapy...",             // meta description (~155 chars)
  keywords: ["physiotherapy Ahmedabad", ...]                  // keywords array
}
```

`rawTitle` outputs the title exactly as written. Use `title` instead if you want `"Page Name | E47 Performance"` auto-formatting (the site name gets appended).

### 2. Site-wide defaults → `data/site.ts`

Fallback values used on any page without its own SEO, and in the JSON-LD schemas:

```ts
export const siteConfig = {
  name: "E47 Performance",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",  // ← set in .env.local
  description: "...",
  contactEmail: "hello@example.com",
  social: { linkedin: "..." }
}
```

**Before going live:** set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the real domain.

### 3. OG share card image → `app/opengraph-image.tsx`

The auto-generated 1200×630 image used for social previews. Edit the layout and text inside this file directly.

### 4. Structured data (JSON-LD) → `lib/schema.tsx`

Organization and WebSite schemas are injected in `app/layout.tsx`. To add page-specific schemas (e.g. `LocalBusiness`, `FAQPage`), create a new function here and render `<JsonLd data={yourSchema()} />` in the relevant page.

### 5. Adding SEO to a new page

```ts
// app/your-page/page.tsx
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Page Name",       // becomes "Page Name | E47 Performance"
  description: "...",
  path: "/your-page",       // sets the canonical URL
});
```

---

## Colours & Fonts (quick reference)

Defined in `app/globals.css` under `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `teal` | `#193435` | Primary brand dark green |
| `teal-deep` | `#102728` | Darker teal for depth/images |
| `warm` | `#f0f0e5` | Off-white background |
| `gold` | `#d6b36c` | Accent, borders, CTAs |
| `charcoal` | `#2d2f2f` | Body text |
| `site-black` | `#0f0f0f` | Footer background |
| `font-display` | Archivo Black | Big headings — use `.display` class |
| `font-sans` | Roboto | Body text — default on `<body>` |

## Breakpoints

Custom breakpoints (override Tailwind defaults) — defined in `app/globals.css`:

| Name | px | Tailwind variant |
|------|----|-----------------|
| `xs` | 420px | `max-xs:` |
| `md` | 820px | `md:` / `max-md:` |
| `lg` | 1100px | `max-lg:` |
| `xl` | 1280px | `max-xl:` |

---

## Pre-launch SEO Checklist

- Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the real domain
- Update `contactEmail` and `social` links in `data/site.ts`
- Update business address and phone in `data/home-content.js` → `contact`
- Replace placeholder Medium/Instagram/YouTube links in `data/home-content.js` → `social`
- Swap Unsplash images for real photography
- Edit `app/opengraph-image.tsx` to show actual brand content
- Submit `/sitemap.xml` in Google Search Console after deploy
