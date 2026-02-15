## 1. Project Configuration

- [x] 1.1 Update `next.config.ts` with static export settings (`output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`)
- [x] 1.2 Install `lucide-react` dependency if not already installed

## 2. Design System

- [x] 2.1 Update `fanfla/app/globals.css` with brand CSS variables and font utilities
- [x] 2.2 Update `fanfla/app/layout.tsx` with Poppins/Inter fonts, metadata, and lang="pt"

## 3. Data Layer

- [x] 3.1 Create `fanfla/app/data/site.ts` with WhatsApp number and social links config
- [x] 3.2 Create `fanfla/app/data/navigation.ts` with nav links array
- [x] 3.3 Create `fanfla/app/data/products.ts` with Product interface, cookies array, and barrinhas array
- [x] 3.4 Create `fanfla/app/data/testimonials.ts` with Testimonial interface and testimonials array

## 4. UI Components

- [x] 4.1 Create `fanfla/app/components/ui/ResponsiveImage.tsx` with picture element and variant path derivation
- [x] 4.2 Create `fanfla/app/components/ui/SectionHeader.tsx` for consistent section titles
- [x] 4.3 Create `fanfla/app/components/ui/ProductCard.tsx` with typed props from data layer
- [x] 4.4 Create `fanfla/app/components/ui/Button.tsx` for WhatsApp CTA buttons

## 5. Brand Components

- [x] 5.1 Create `fanfla/app/components/brand/FlaFlaLogo.tsx` from pencil_exports
- [x] 5.2 Create `fanfla/app/components/brand/CapulanaStrip.tsx` from pencil_exports

## 6. Section Components

- [x] 6.1 Create `fanfla/app/components/sections/Header.tsx` with sticky nav and mobile menu
- [x] 6.2 Create `fanfla/app/components/sections/HeroSection.tsx` with ResponsiveImage background
- [x] 6.3 Create `fanfla/app/components/sections/SoulSection.tsx`
- [x] 6.4 Create `fanfla/app/components/sections/SaboresSection.tsx` consuming products data
- [x] 6.5 Create `fanfla/app/components/sections/BarrinhasSection.tsx` consuming barrinhas data
- [x] 6.6 Create `fanfla/app/components/sections/HistoriaSection.tsx` with ResponsiveImage
- [x] 6.7 Create `fanfla/app/components/sections/GiftSection.tsx` with ResponsiveImage
- [x] 6.8 Create `fanfla/app/components/sections/TestimonialsSection.tsx` consuming testimonials data
- [x] 6.9 Create `fanfla/app/components/sections/CTASection.tsx` with WhatsApp button
- [x] 6.10 Create `fanfla/app/components/sections/Footer.tsx` with social links from site data

## 7. Page Assembly

- [x] 7.1 Update `fanfla/app/page.tsx` to compose all sections in correct order

## 8. Verification

- [x] 8.1 Run `pnpm build` to verify static export works
- [ ] 8.2 Run `pnpm dev` and visually verify all sections render correctly
- [ ] 8.3 Test responsive behavior at mobile, tablet, and desktop breakpoints
- [ ] 8.4 Test all WhatsApp links open correctly
- [ ] 8.5 Test anchor navigation and smooth scrolling
