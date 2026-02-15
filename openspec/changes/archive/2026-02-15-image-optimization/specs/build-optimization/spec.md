## ADDED Requirements

### Requirement: Build script converts images to WebP

The build process SHALL include a pre-build step that converts PNG and JPG images to WebP format.

#### Scenario: PNG to WebP conversion

- **WHEN** the optimize-images script runs
- **THEN** each PNG file in `public/cookies/` has a corresponding WebP file generated
- **AND** the WebP file is smaller than the original PNG

#### Scenario: JPG to WebP conversion

- **WHEN** the optimize-images script runs
- **THEN** each JPG file in `public/cookies/` has a corresponding WebP file generated

### Requirement: Build script skips unchanged images

The optimize-images script SHALL skip conversion for images that already have up-to-date WebP versions.

#### Scenario: Skip unchanged image

- **WHEN** a WebP file exists
- **AND** the WebP file is newer than the source PNG/JPG
- **THEN** the script skips conversion for that image

#### Scenario: Re-convert changed image

- **WHEN** a source PNG/JPG is modified after its WebP was generated
- **THEN** the script regenerates the WebP file

### Requirement: Build command runs optimization before Next.js build

The pnpm build command SHALL run image optimization before the Next.js build step.

#### Scenario: Build order

- **WHEN** `pnpm build` is executed
- **THEN** the optimize-images script runs first
- **AND** then `next build` runs
