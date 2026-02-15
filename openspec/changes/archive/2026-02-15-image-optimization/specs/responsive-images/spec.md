## MODIFIED Requirements

### Requirement: ResponsiveImage component serves device-appropriate images

The ResponsiveImage component SHALL serve different image sizes based on viewport width using the `<picture>` element. The component SHALL serve WebP format with PNG fallback for browser compatibility.

#### Scenario: Mobile viewport

- **WHEN** viewport width is < 768px
- **THEN** the `-mobile` variant of the image is loaded
- **AND** WebP format is served if the browser supports it

#### Scenario: Tablet viewport

- **WHEN** viewport width is >= 768px and < 1024px
- **THEN** the `-tablet` variant of the image is loaded
- **AND** WebP format is served if the browser supports it

#### Scenario: Desktop viewport

- **WHEN** viewport width is >= 1024px
- **THEN** the base image (no suffix) is loaded
- **AND** WebP format is served if the browser supports it

#### Scenario: WebP fallback

- **WHEN** browser does not support WebP format
- **THEN** the PNG version of the image is loaded

### Requirement: ResponsiveImage derives variant paths automatically

The component SHALL derive variant paths from the base image path, including WebP versions.

#### Scenario: Path derivation with WebP

- **WHEN** basePath is `/cookies/HeroBg`
- **THEN** mobile WebP source is `/cookies/HeroBg-mobile.webp`
- **AND** mobile PNG fallback is `/cookies/HeroBg-mobile.png`
- **AND** tablet WebP source is `/cookies/HeroBg-tablet.webp`
- **AND** tablet PNG fallback is `/cookies/HeroBg-tablet.png`
- **AND** desktop WebP source is `/cookies/HeroBg.webp`
- **AND** desktop PNG fallback is `/cookies/HeroBg.png`

## ADDED Requirements

### Requirement: Product images use WebP with fallback

Product card images SHALL be served in WebP format with PNG/JPG fallback using the `<picture>` element.

#### Scenario: Product image format

- **WHEN** a product card renders
- **THEN** the image uses a `<picture>` element
- **AND** the first source is WebP format
- **AND** the fallback `<img>` uses the original PNG/JPG format

### Requirement: Modal images use WebP with fallback

The ImageModal component SHALL display images in WebP format with PNG/JPG fallback.

#### Scenario: Modal image format

- **WHEN** the ImageModal displays an image
- **THEN** WebP format is served if the browser supports it
- **AND** PNG/JPG fallback is available for older browsers
