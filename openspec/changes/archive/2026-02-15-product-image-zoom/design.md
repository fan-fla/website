## Context

The Fla Fla landing page displays product cards with small images (180-220px height). Users cannot inspect product details before ordering. Adding a zoom interaction allows users to view products at full size, building confidence before WhatsApp ordering.

Current state:
- `ProductCard.tsx` renders product image, name, description, price, and WhatsApp link
- Images use Next.js `Image` component with `object-cover`
- No modal system exists in the codebase

## Goals / Non-Goals

**Goals:**
- Add image zoom capability to product cards
- Desktop: hover reveals overlay + lupa icon, click opens modal
- Mobile: tap image directly opens modal (no hover state)
- Modal: fade animation, closes via button/ESC/backdrop

**Non-Goals:**
- Image gallery or carousel (single image only)
- Pinch-to-zoom gesture on mobile
- Image preloading or lazy loading optimization
- Product info in modal (image only)

## Decisions

### 1. Modal as separate component vs inline in ProductCard
**Decision**: Create `ImageModal.tsx` as a reusable component

**Rationale**: Separation of concerns. The modal can be reused elsewhere (Historia section, Gift section). Keeps ProductCard focused on card layout.

**Alternative considered**: Inline modal markup in ProductCard - rejected because it would bloat the component and prevent reuse.

### 2. State management approach
**Decision**: Local `useState` in ProductCard, modal receives `isOpen` and `onClose` props

**Rationale**: Simple, no global state needed. Each card manages its own modal independently.

**Alternative considered**: Context or global modal state - overkill for this use case.

### 3. Icon choice for zoom indicator
**Decision**: Use `ZoomIn` from lucide-react

**Rationale**: Clear visual meaning (magnifying glass with +). Already using lucide-react in the project.

### 4. Animation approach
**Decision**: Tailwind CSS transitions (`transition-opacity duration-300`)

**Rationale**: Consistent with existing Tailwind usage. No additional animation library needed. Simple fade is performant.

### 5. Mobile interaction pattern
**Decision**: No hover state, no lupa icon. Tap on image opens modal directly.

**Rationale**: Hover doesn't exist on touch devices. Showing lupa always would add visual noise. Direct tap is intuitive for mobile users.

**Implementation**: Use Tailwind responsive prefixes (`hidden md:flex`) to hide hover overlay on mobile.

## Risks / Trade-offs

**[Risk] Modal z-index conflicts with sticky header**
→ Mitigation: Use high z-index (z-50) for modal backdrop and content

**[Risk] Large images may load slowly in modal**
→ Mitigation: Acceptable for MVP. Images are already loaded in cards. Could add loading spinner later.

**[Risk] Focus trap not implemented**
→ Mitigation: ESC key closes modal. Full a11y focus trap is a non-goal for MVP.

**[Trade-off] No image preloading**
→ Accepted: Images are already in browser cache from card display. Preloading adds complexity without clear benefit.
