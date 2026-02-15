## Why

Product images on cards are small and don't showcase the cookies well. Users want to see product details before ordering via WhatsApp. A zoom interaction lets users inspect products closely, building confidence and appetite.

## What Changes

- Add hover interaction on product card images (desktop only): dark overlay + magnifying glass icon
- Add new `ImageModal` component for displaying enlarged product images
- Modal closes via: close button, ESC key, or backdrop click
- Mobile: tap on image directly opens modal (no hover state, no lupa icon)
- Simple fade in/out animation for modal

## Capabilities

### New Capabilities
- `image-zoom`: Product image zoom interaction with modal display, hover states, and responsive behavior

### Modified Capabilities
- `landing-page`: ProductCard component gains image zoom interaction

## Impact

- **Components**: `ProductCard.tsx` (modified), `ImageModal.tsx` (new)
- **Dependencies**: Uses existing `lucide-react` for icons (ZoomIn/Search, X)
- **State**: Local useState in ProductCard for modal visibility
- **Accessibility**: ESC key handler, focus management
