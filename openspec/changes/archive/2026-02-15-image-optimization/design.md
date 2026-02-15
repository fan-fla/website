## Context

The Fla Fla landing page uses PNG images for products and backgrounds. With 18 images totaling several MB, page load is slower than necessary. The site deploys as a static export to Vercel, so server-side image optimization is not available.

Current state:
- All images are PNG format in `public/cookies/`
- `ResponsiveImage` component uses `<picture>` for responsive sizes but not format optimization
- `ProductCard` and `ImageModal` use Next.js `<Image>` component
- Build uses `next build` with `images.unoptimized: true`

## Goals / Non-Goals

**Goals:**
- Reduce image payload by 60-80% using WebP format
- Maintain 100% browser compatibility with PNG fallbacks
- Automate conversion at build time (no manual image processing)
- Keep original images in repo for source-of-truth

**Non-Goals:**
- AVIF format (lower browser support, diminishing returns after WebP)
- Lazy loading beyond what browsers provide natively
- Image CDN or external optimization service
- Changing image dimensions or quality of originals

## Decisions

### 1. Image processing library
**Decision**: Use `sharp` as a dev dependency

**Rationale**: Fast native bindings, excellent WebP support, well-maintained, commonly used in Node.js projects.

**Alternative considered**: `imagemin` - larger dependency tree, slower, less actively maintained.

### 2. When to run optimization
**Decision**: Pre-build script via npm/pnpm scripts

**Rationale**: Runs once per deploy, keeps build deterministic. WebP files committed to git for reproducibility.

**Alternative considered**: Build-time plugin - more complex, harder to debug, same result.

### 3. Output location
**Decision**: Generate WebP files alongside originals in `public/cookies/`

**Rationale**: Simple path derivation (`.png` → `.webp`), no new directories, consistent with existing pattern.

### 4. Component pattern for WebP + fallback
**Decision**: Use `<picture>` element with `<source type="image/webp">` and `<img>` fallback

**Rationale**: Native browser support, no JavaScript required, graceful degradation.

```html
<picture>
  <source srcSet="/cookies/chocomela.webp" type="image/webp" />
  <img src="/cookies/chocomela.png" alt="Chocomela" />
</picture>
```

### 5. Skip optimization for unchanged files
**Decision**: Check if WebP exists and is newer than source before converting

**Rationale**: Faster builds, avoid unnecessary work on unchanged images.

## Risks / Trade-offs

**[Risk] Sharp installation fails on some systems**
→ Mitigation: Well-tested library, CI will catch issues. Document Node.js version requirement.

**[Risk] WebP files bloat git repo**
→ Mitigation: WebP files are smaller than PNGs they replace. Net reduction in repo size.

**[Trade-off] Two files per image (PNG + WebP)**
→ Accepted: Disk space is cheap, 100% browser support is worth it.

**[Trade-off] Build is slightly slower**
→ Accepted: One-time per deploy, image conversion is fast with sharp.
