## Context

The Fla Fla landing page lacks some accessibility features that screen reader and keyboard users rely on. The ImageModal has no focus trap (Tab escapes), no dialog role, and doesn't return focus. The mobile menu doesn't communicate its state. There's no way to skip navigation.

Additionally, all images load immediately even when below the fold, which isn't optimal for initial page load.

## Goals / Non-Goals

**Goals:**
- Make ImageModal accessible (focus trap, ARIA, return focus)
- Make mobile menu accessible (aria-expanded, ESC)
- Add skip-to-content link
- Add native lazy loading to below-fold images

**Non-Goals:**
- Full WCAG compliance audit
- Color contrast fixes (would need design review)
- Complex focus management library (use simple custom hook)
- IntersectionObserver-based lazy loading (native is sufficient)

## Decisions

### 1. Focus trap implementation
**Decision**: Custom `useFocusTrap` hook using `document.querySelectorAll` for focusable elements

**Rationale**: No external dependency needed. Modal has few interactive elements (close button only), making manual implementation simple.

**Alternative considered**: focus-trap-react library - adds dependency for minimal benefit in this case.

### 2. Return focus pattern
**Decision**: Store `document.activeElement` before opening, restore on close via `useRef`

**Rationale**: Standard pattern, works reliably. Focus returns to the element that opened the modal.

### 3. Skip link visibility
**Decision**: Visually hidden until focused (sr-only + focus:not-sr-only pattern)

**Rationale**: Doesn't disrupt visual design, appears on Tab key for keyboard users.

### 4. Lazy loading approach
**Decision**: Native `loading="lazy"` attribute on `<img>` elements

**Rationale**: Zero JS overhead, 95%+ browser support, graceful degradation.

### 5. Which images to lazy load
**Decision**: All images except Hero background (above fold)

**Rationale**: Hero is visible immediately, everything else can wait.

## Risks / Trade-offs

**[Risk] Focus trap edge cases**
→ Mitigation: Test with Tab and Shift+Tab, verify focus cycles within modal

**[Trade-off] No animation on skip link**
→ Accepted: Simplicity over polish for accessibility feature

**[Trade-off] Lazy loading may cause layout shift**
→ Mitigation: Images have fixed containers, no CLS expected
