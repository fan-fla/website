## ADDED Requirements

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

### Requirement: ResponsiveImage supports custom alt text

The component SHALL accept an `alt` prop for accessibility.

#### Scenario: Alt text applied

- **WHEN** alt prop is provided
- **THEN** the `<img>` element has the specified alt attribute

### Requirement: ResponsiveImage supports fill mode

The component SHALL support a fill mode for background-style images that cover their container.

#### Scenario: Fill mode styling

- **WHEN** fill prop is true
- **THEN** the image uses `object-fit: cover` and fills its container

### Requirement: Section backgrounds use responsive images

The Hero, Historia, and Gift sections SHALL use ResponsiveImage for their background images.

#### Scenario: Hero background

- **WHEN** Hero section renders
- **THEN** background uses `/cookies/HeroBg` with responsive variants

#### Scenario: Historia image

- **WHEN** Historia section renders
- **THEN** section image uses `/cookies/HistoriaImage` with responsive variants

#### Scenario: Gift image

- **WHEN** Gift section renders
- **THEN** section image uses `/cookies/GiftImage` with responsive variants

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

### Requirement: Below-fold images use lazy loading

Images that are below the initial viewport SHALL use native lazy loading.

#### Scenario: Product images lazy load

- **WHEN** a product card image is rendered
- **THEN** the `<img>` element has `loading="lazy"` attribute

#### Scenario: Section images lazy load

- **WHEN** Historia or Gift section images are rendered
- **THEN** the `<img>` elements have `loading="lazy"` attribute

### Requirement: Hero image loads eagerly

The Hero background image SHALL load immediately (no lazy loading).

#### Scenario: Hero eager loading

- **WHEN** Hero section renders
- **THEN** the image does NOT have `loading="lazy"` attribute
- **OR** has `loading="eager"` attribute
