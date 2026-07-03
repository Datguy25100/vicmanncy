# Vicmanny Integrated Technology Services Limited — Website

A production-grade marketing site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS,
for a company offering off-grid solar, inverter systems, solar boreholes, CCTV & smart security,
telecommunications infrastructure, and industrial cabling (RC 8754036).

## Stack

- Next.js 14 (App Router, Server Components by default)
- TypeScript (strict mode)
- Tailwind CSS — theme tokens in `tailwind.config.ts` (`primary`, `secondary`, `accent`, `surface`, `ink`)
- Framer Motion (installed, ready for additional scroll animations)
- React Hook Form + Zod for form validation
- Resend for contact/quote form email delivery
- lucide-react for icons

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev
```

The site runs at `http://localhost:3000`.

## Environment variables

See `.env.example`. None are required for local development — if `RESEND_API_KEY`
is unset, form submissions are logged to the server console instead of emailed,
so you can test the full flow without an email provider.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for [Resend](https://resend.com) email delivery |
| `CONTACT_TO_EMAIL` | Inbox that receives contact/quote submissions |
| `CONTACT_FROM_EMAIL` | Verified sending address in Resend |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID (optional) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID (optional) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata/sitemap |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Number (no `+` or spaces) for the floating WhatsApp button |
| `CRM_WEBHOOK_URL` | Optional webhook fired after a successful form submission |

## Project structure

```
/app            Routes (App Router) — one folder per page, plus /api/contact
/components/ui         Reusable primitives (Button, Card, form fields)
/components/sections    Page sections (Hero, ServicesGrid, Calculator, etc.)
/components/layout      Navbar, Footer, WhatsApp button, sticky mobile CTA
/lib            Utils, constants, Zod schemas
/data           Typed content: services, projects, testimonials, blog, FAQ
```

## Content

All copy and content lives in `/data/*.ts` as typed arrays — edit those files directly
to add/remove services, projects, blog posts, testimonials, or FAQ entries. No CMS
is wired up; the structure is CMS-ready if you later want to swap these for a
headless CMS fetch.

## Images

Hero and section images currently point to Unsplash placeholder URLs so the site
renders immediately. Replace the `src` values in `/components/sections/*` and
`/app/**/*` with real photography before launch, and add them to `next.config.mjs`
`remotePatterns` if hosted elsewhere, or drop files into `/public/images` and use
local paths instead.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — `next build` runs automatically.

## Notes

- Lighthouse targets (90+ Performance, 95+ SEO/Accessibility) assume real,
  optimized images are swapped in — Unsplash placeholders are heavier and
  external, so replace them before a production launch.
- The solar savings calculator (`components/sections/solar-calculator.tsx`) uses
  a simplified estimation model in `lib/utils.ts` (`estimateSolarSavings`) — swap
  in your real pricing/production model when available.
