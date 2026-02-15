## 1. Focus Management Hook

- [x] 1.1 Create `app/hooks/useFocusTrap.ts` that traps Tab/Shift+Tab within a container
- [x] 1.2 Create `app/hooks/useReturnFocus.ts` that stores and restores focus on mount/unmount

## 2. ImageModal Accessibility

- [x] 2.1 Add `role="dialog"` and `aria-modal="true"` to modal container
- [x] 2.2 Add `aria-label` or `aria-labelledby` for accessible name
- [x] 2.3 Apply `useFocusTrap` hook to modal when open
- [x] 2.4 Apply `useReturnFocus` hook to restore focus on close
- [x] 2.5 Move focus to close button when modal opens

## 3. Mobile Menu Accessibility

- [x] 3.1 Add `aria-expanded` attribute to hamburger button (false when closed, true when open)
- [x] 3.2 Add ESC key listener to close mobile menu when open
- [x] 3.3 Return focus to hamburger button when menu closes via ESC

## 4. Skip-to-Content Link

- [x] 4.1 Add skip link to `layout.tsx` before Header
- [x] 4.2 Style skip link: visually hidden, visible on focus
- [x] 4.3 Add `id="main-content"` to main content area
- [x] 4.4 Verify skip link works with keyboard navigation

## 5. Lazy Loading

- [x] 5.1 Add `loading="lazy"` prop to `OptimizedImage` component
- [x] 5.2 Add `loading` prop to `ResponsiveImage` component (default: "lazy")
- [x] 5.3 Update Hero section to use `loading="eager"` for above-fold image
- [x] 5.4 Product cards use default lazy loading

## 6. Verification

- [x] 6.1 Test ImageModal: Tab cycles within modal, focus returns on close
- [x] 6.2 Test mobile menu: aria-expanded updates, ESC closes
- [x] 6.3 Test skip link: visible on Tab, navigates to content
- [x] 6.4 Test lazy loading: check Network tab, below-fold images defer
- [x] 6.5 Run `pnpm build` to verify no errors
