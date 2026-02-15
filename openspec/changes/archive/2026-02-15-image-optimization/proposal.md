## Why

The site uses PNG images which are large and slow to load. Converting to WebP format will reduce image sizes by 60-80%, improving page load times. This is especially important for mobile users in Mozambique where bandwidth may be limited.

## What Changes

- Add `sharp` as a dev dependency for image processing
- Create a build-time script (`scripts/optimize-images.js`) that converts PNG/JPG to WebP
- Update package.json build script to run optimization before Next.js build
- Update `<picture>` elements to serve WebP with PNG/JPG fallback for 100% browser compatibility
- Keep original PNG files as fallbacks for older browsers

## Capabilities

### New Capabilities

- `build-optimization`: Build-time image conversion script and workflow

### Modified Capabilities

- `responsive-images`: Add WebP format support with PNG fallback in `<picture>` elements

## Impact

- **Dependencies**: Add `sharp` as devDependency
- **Build**: New pre-build step for image optimization
- **Components**: `ResponsiveImage.tsx`, `ProductCard.tsx`, `ImageModal.tsx` updated to use `<picture>` with WebP
- **Assets**: WebP versions generated alongside existing PNG files in `public/cookies/`
