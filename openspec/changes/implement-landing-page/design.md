## Context

The `pencil_exports/` folder contains a complete landing page design exported from Pencil with 13 React components. The current `fanfla/app/` has the default Next.js starter template. Images are ready in `/public/cookies/` with responsive variants (mobile/tablet/desktop) for section backgrounds.

**Current state of pencil_exports:**
- Components have hardcoded data inline (products, nav links, testimonials)
- Flat component structure (`components/*.tsx`)
- Uses CSS variables for brand colors
- Uses `lucide-react` for icons
- Responsive design with Tailwind breakpoints (md, lg)

## Goals / Non-Goals

**Goals:**
- Clean architecture with separated concerns (data, UI, sections, brand)
- Type-safe data layer for easy content updates
- Reusable UI primitives that sections compose
- Static export for flexible deployment (Vercel, Netlify, S3, etc.)
- Responsive images that load appropriate sizes per device

**Non-Goals:**
- CMS integration (data files are sufficient for now)
- Internationalization (Portuguese only)
- E-commerce/cart functionality (WhatsApp ordering)
- Dark mode (single light theme)
- Server-side features (pure static site)

## Decisions

### Decision 1: Directory Structure

```
fanfla/app/
├── data/           ← Content layer
├── components/
│   ├── ui/         ← Reusable primitives
│   ├── sections/   ← Page sections
│   └── brand/      ← Logo, decorative elements
```

**Rationale:** Separates concerns clearly. UI primitives are reusable across sections. Brand components are specific to Fla Fla but reused across sections.

**Alternatives considered:**
- Flat structure (current pencil_exports) — rejected: harder to maintain as site grows
- Feature-based folders — rejected: overkill for single-page site

### Decision 2: Data Layer Pattern

```ts
// data/products.ts
export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const cookies: Product[] = [...];
export const barrinhas: Product[] = [...];
```

**Rationale:** TypeScript interfaces provide type safety. Centralized data makes content updates trivial. Components receive data as props, making them testable.

**Alternatives considered:**
- JSON files — rejected: loses type safety without extra tooling
- Inline data — rejected: current pencil_exports approach, harder to maintain

### Decision 3: Responsive Images with `<picture>`

```tsx
// components/ui/ResponsiveImage.tsx
<picture>
  <source media="(max-width: 767px)" srcSet={`${basePath}-mobile.png`} />
  <source media="(max-width: 1023px)" srcSet={`${basePath}-tablet.png`} />
  <img src={`${basePath}.png`} alt={alt} />
</picture>
```

**Rationale:** Native browser feature, no JavaScript required. Serves appropriately sized images based on viewport. Works with static export.

**Alternatives considered:**
- Next.js Image with `sizes` prop — rejected: requires `unoptimized: true` for static export, loses benefits
- CSS background-image with media queries — rejected: less semantic, harder to manage

### Decision 4: Static Export Configuration

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
```

**Rationale:** Enables deployment anywhere (not just Vercel). `trailingSlash: true` for cleaner URLs on static hosts. `unoptimized: true` required since no server-side image optimization.

### Decision 5: CSS Variables in globals.css

Keep the design system variables from `pencil_exports/globals.css`:

```css
:root {
  --flafla-orange: #f46535;
  --flafla-gold: #E8A832;
  --bg-cream: #F5E6D0;
  --text-dark: #3E2723;
  /* ... */
}
```

**Rationale:** Single source of truth for brand colors. Components reference variables, making theme updates trivial.

### Decision 6: Image Path Convention

All images live in `/public/cookies/` with this naming:
- Product images: `{product-name}.png` (e.g., `lhaties.png`)
- Section images: `{SectionName}.png` with variants `{SectionName}-tablet.png`, `{SectionName}-mobile.png`

**Rationale:** Consistent, predictable paths. ResponsiveImage component can derive variant paths from base path.

## Risks / Trade-offs

**[No image optimization]** → Acceptable for now; images are pre-optimized. Can add CDN/image service later.

**[Client-side navigation]** → Not needed for single-page site. Anchor links with smooth scroll are sufficient.

**[Hardcoded WhatsApp number]** → Extract to `data/site.ts` for single point of change.

**[Lucide icons CDN vs npm]** → Use `lucide-react` npm package for tree-shaking and type safety. Remove CDN link from layout.
