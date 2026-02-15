## ADDED Requirements

### Requirement: ResponsiveImage component serves device-appropriate images

The ResponsiveImage component SHALL serve different image sizes based on viewport width using the `<picture>` element.

#### Scenario: Mobile viewport

- **WHEN** viewport width is < 768px
- **THEN** the `-mobile` variant of the image is loaded

#### Scenario: Tablet viewport

- **WHEN** viewport width is >= 768px and < 1024px
- **THEN** the `-tablet` variant of the image is loaded

#### Scenario: Desktop viewport

- **WHEN** viewport width is >= 1024px
- **THEN** the base image (no suffix) is loaded

### Requirement: ResponsiveImage derives variant paths automatically

The component SHALL derive variant paths from the base image path.

#### Scenario: Path derivation

- **WHEN** basePath is `/cookies/HeroBg`
- **THEN** mobile source is `/cookies/HeroBg-mobile.png`
- **AND** tablet source is `/cookies/HeroBg-tablet.png`
- **AND** desktop source is `/cookies/HeroBg.png`

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
