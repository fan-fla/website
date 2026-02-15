## 1. ImageModal Component

- [x] 1.1 Create `app/components/ui/ImageModal.tsx` with props: `isOpen`, `onClose`, `imageSrc`, `imageAlt`
- [x] 1.2 Add dark backdrop with click-to-close handler
- [x] 1.3 Add centered image display with max-width/max-height constraints
- [x] 1.4 Add close button (X icon from lucide-react) in top-right
- [x] 1.5 Add ESC key listener with useEffect cleanup
- [x] 1.6 Add fade in/out animation with Tailwind transitions (duration-300)

## 2. ProductCard Updates

- [x] 2.1 Add `useState` for modal open/close state in ProductCard
- [x] 2.2 Make image container clickable (button or clickable div with cursor-pointer)
- [x] 2.3 Add hover overlay (dark, ~40% opacity) visible only on md+ screens
- [x] 2.4 Add ZoomIn icon centered on hover overlay
- [x] 2.5 Import and render ImageModal with product image props
- [x] 2.6 Hide hover overlay and icon on mobile (hidden md:flex)

## 3. Verification

- [x] 3.1 Test desktop hover: overlay and lupa icon appear on image hover
- [x] 3.2 Test desktop click: modal opens with enlarged image
- [x] 3.3 Test modal close: button, ESC key, and backdrop click all close modal
- [x] 3.4 Test mobile: no hover state, tap opens modal directly
- [x] 3.5 Test animation: fade in/out is smooth
- [x] 3.6 Run `pnpm build` to verify no build errors
