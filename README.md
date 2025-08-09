
# Juan Portfolio (Next.js + Tailwind)

Minimalist, bilingual (EN/ID) portfolio for Juan Antonio Nainggolan.
- App Router (Next.js 14)
- SEO metadata (Open Graph, Twitter), hreflang alternates, robots & sitemap
- JSON-LD Person schema
- Email-only contact (phone hidden)
- Tailwind CSS
- Easy EN/ID toggle

## Quick start
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Customize
- Edit content: `lib/data.ts`
- Domain: `app/layout.tsx` (siteUrl) + `app/robots.ts` + `app/sitemap.ts`
- Form endpoint: `app/page.tsx` (`action` attribute)
