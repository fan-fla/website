## 1. Setup

- [x] 1.1 Install `sharp` as a dev dependency (`pnpm add -D sharp`)
- [x] 1.2 Create `scripts/` directory if it doesn't exist

## 2. Build Script

- [x] 2.1 Create `scripts/optimize-images.js` that finds all PNG/JPG files in `public/cookies/`
- [x] 2.2 Add WebP conversion logic using sharp (quality 80, preserve dimensions)
- [x] 2.3 Add skip logic: check if WebP exists and is newer than source
- [x] 2.4 Add console output showing which files are converted/skipped
- [x] 2.5 Update `package.json` to add `optimize-images` script
- [x] 2.6 Update `package.json` build command to run `optimize-images` before `next build`

## 3. Component Updates

- [x] 3.1 Create `OptimizedImage` component that renders `<picture>` with WebP source and PNG/JPG fallback
- [x] 3.2 Update `ResponsiveImage` to include WebP sources for each viewport size
- [x] 3.3 Update `ProductCard` to use `<picture>` pattern for product images
- [x] 3.4 Update `ImageModal` to use `<picture>` pattern for modal image

## 4. Generate WebP Files

- [x] 4.1 Run `pnpm optimize-images` to generate all WebP files
- [x] 4.2 Verify WebP files are generated in `public/cookies/`
- [x] 4.3 Compare file sizes (WebP vs original) to confirm reduction

## 5. Verification

- [x] 5.1 Run `pnpm build` to verify full build works
- [x] 5.2 Run `pnpm dev` and check product images load correctly
- [x] 5.3 Check Hero, Historia, Gift sections use WebP with responsive variants
- [x] 5.4 Test in browser DevTools: verify WebP is served (Network tab, Type column)
- [x] 5.5 Test fallback: disable WebP support in DevTools and verify PNG loads
