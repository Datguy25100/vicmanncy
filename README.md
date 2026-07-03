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