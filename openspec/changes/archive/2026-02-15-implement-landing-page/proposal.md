## Why

The Fla Fla Next.js app currently shows the default starter template, while complete landing page designs exist in `pencil_exports/`. We need to implement the real website with clean architecture, reusable components, and static export capability for deployment.

## What Changes

- **Replace default template** with the Fla Fla artisanal cookies landing page
- **Implement full architecture** with separated data layer (`/data/`), UI primitives (`/components/ui/`), page sections (`/components/sections/`), and brand components (`/components/brand/`)
- **Extract hardcoded content** from components into typed data files for maintainability
- **Add responsive image system** using `<picture>` elements with mobile/tablet/desktop variants
- **Configure static export** with `output: 'export'` for deployment flexibility
- **Update design system** with Fla Fla brand colors, fonts (Poppins/Inter), and CSS variables

## Capabilities

### New Capabilities

- `landing-page`: Complete single-page landing site with Header, Hero, Soul, Sabores (products), Barrinhas, Historia, Gift, Testimonials, CTA, and Footer sections
- `design-system`: CSS custom properties for brand colors, typography utilities, and Tailwind configuration
- `responsive-images`: Reusable component for serving device-appropriate image variants (mobile/tablet/desktop)

### Modified Capabilities

<!-- None - this is a greenfield implementation replacing the starter template -->

## Impact

**Files created:**
- `fanfla/app/layout.tsx` — Root layout with Poppins/Inter fonts, metadata
- `fanfla/app/page.tsx` — Landing page composing all sections
- `fanfla/app/globals.css` — Design system CSS variables
- `fanfla/app/data/*.ts` — Products, navigation, testimonials, site config
- `fanfla/app/components/ui/*.tsx` — Button, SectionHeader, ProductCard, ResponsiveImage
- `fanfla/app/components/sections/*.tsx` — 10 page sections
- `fanfla/app/components/brand/*.tsx` — FlaFlaLogo, CapulanaStrip
- `fanfla/next.config.ts` — Static export configuration

**Files modified:**
- None (replacing default template entirely)

**Dependencies:**
- `lucide-react` — Icon library (may need to install)

**Assets:**
- `/public/cookies/` — 9 product images + 3 section images with responsive variants
