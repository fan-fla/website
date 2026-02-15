## Why

The site needs accessibility improvements for screen reader users and keyboard navigation. Additionally, native lazy loading will improve initial page load by deferring below-fold images.

## What Changes

**Accessibility:**
- ImageModal: Add `role="dialog"`, `aria-modal="true"`, focus trap, return focus on close
- Mobile menu: Add `aria-expanded` to toggle button, close on ESC key
- Add skip-to-content link for keyboard users to bypass navigation

**Performance:**
- Add `loading="lazy"` to below-fold images (product cards, section images)
- Keep Hero image eager (above fold)

## Capabilities

### New Capabilities

- `accessibility`: Core accessibility patterns for modals, menus, and navigation

### Modified Capabilities

- `image-zoom`: ImageModal gains accessibility attributes and focus management
- `landing-page`: Header mobile menu gains accessibility improvements
- `responsive-images`: Add lazy loading support

## Impact

- **Components**: `ImageModal.tsx`, `Header.tsx`, `OptimizedImage.tsx`, `ResponsiveImage.tsx`, `layout.tsx`
- **No new dependencies**: Uses native HTML attributes and React hooks
- **Behavior**: Focus trapping, ESC key handlers, lazy loading
