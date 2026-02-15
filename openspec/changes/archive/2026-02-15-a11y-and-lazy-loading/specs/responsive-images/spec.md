## ADDED Requirements

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
