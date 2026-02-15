## ADDED Requirements

### Requirement: CSS variables define brand colors

The design system SHALL define CSS custom properties for all brand colors in `:root`.

#### Scenario: Brand color variables available

- **WHEN** globals.css is loaded
- **THEN** the following variables are defined:
  - `--flafla-orange: #f46535`
  - `--flafla-gold: #E8A832`
  - `--flafla-green: #3F8C4A`
  - `--flafla-terracotta: #D4451A`
  - `--flafla-dark-brown: #2D1B14`
  - `--bg-cream: #F5E6D0`
  - `--bg-white: #FFFFFF`
  - `--text-dark: #3E2723`
  - `--text-body: #5C3D2E`
  - `--text-muted: #8B6F5E`

### Requirement: Typography uses Poppins and Inter fonts

The design system SHALL load Poppins (headings) and Inter (body) fonts via Next.js font optimization.

#### Scenario: Font loading

- **WHEN** the app loads
- **THEN** Poppins font is available with weights 400, 500, 600, 700
- **AND** Inter font is available with weights 400, 500, 600, 700
- **AND** CSS variables `--font-poppins` and `--font-inter` are set

#### Scenario: Font utility classes

- **WHEN** `.font-poppins` class is applied
- **THEN** element uses Poppins font family

- **WHEN** `.font-inter` class is applied
- **THEN** element uses Inter font family

### Requirement: Smooth scroll behavior enabled

The design system SHALL enable smooth scrolling for anchor link navigation.

#### Scenario: Smooth scroll active

- **WHEN** user clicks an anchor link
- **THEN** page scrolls smoothly to the target section

### Requirement: Metadata reflects brand identity

The root layout SHALL define metadata for SEO and social sharing.

#### Scenario: Page title and description

- **WHEN** page loads
- **THEN** document title is "Fla Fla - Cookies Artesanais de Moçambique"
- **AND** meta description describes artisanal cookies from Maputo
- **AND** Open Graph tags are present for social sharing
