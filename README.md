# LandShare — Verified Property Opportunities

Premium, curated property opportunity platform for Bangladesh.

**Not an open marketplace.** Only the internal team publishes verified property shares and flats after review.

## Features

- Verified Property Shares (primary focus) with clear land / share / availability data
- Flats for Sale (price on request via WhatsApp)
- Search & filter by type, location, availability
- Contextual WhatsApp CTAs
- Property submission form (for owners/developers to request listing)
- Fully responsive, editorial design (Navy + Copper + Warm off-white)
- SEO-ready pages

## Tech Stack

- **Frontend:** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animation-ready:** GSAP
- **Deploy:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit `src/lib/whatsapp.ts` and set your real WhatsApp number:

```ts
export const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // country code + number, no + or spaces
```

Update office address, phone and map embed in:
- `src/components/Footer.tsx`
- Homepage office section (`src/app/page.tsx`)

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Framework Preset: **Next.js** (auto-detected)
4. Deploy

No extra config required.

## Project Structure

```
src/
  app/                  # App Router pages
    page.tsx            # Homepage
    property-shares/    # Share listings + detail
    flats/              # Flat listings + detail
    list-property/      # Submission form
    how-it-works/
    locations/
  components/           # Reusable UI
  data/properties.ts    # Sample property data
  lib/whatsapp.ts       # WhatsApp helpers
```

## License

Private project.
