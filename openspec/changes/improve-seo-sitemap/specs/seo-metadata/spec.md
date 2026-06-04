## ADDED Requirements

### Requirement: Page title includes brand name variants
The system SHALL include the primary brand name "Fan Fla" and the alternate variant "Fla Fla" in the page `<title>` tag so Google associates both spellings with the domain.

#### Scenario: Title contains primary brand name
- **WHEN** a search engine reads the page `<title>`
- **THEN** it contains "Fan Fla"

#### Scenario: Description naturally references brand variants
- **WHEN** a search engine reads the `<meta name="description">` tag
- **THEN** the description text contains at least one of: "Fan Fla", "Fla Fla", "FlaFla"

### Requirement: Keywords metadata covers brand name variants
The system SHALL include brand name variants ("Fan Fla", "Fla Fla", "FlaFla", "fanfla") in the `<meta name="keywords">` list.

#### Scenario: Keywords include brand variants
- **WHEN** the page `<head>` keywords meta tag is inspected
- **THEN** it includes "Fan Fla", "Fla Fla", "FlaFla", and "fanfla" as entries

### Requirement: OpenGraph metadata is complete
The system SHALL include OpenGraph tags for `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, and `og:image` so the page renders a rich preview when shared on social platforms.

#### Scenario: OpenGraph image is absolute URL
- **WHEN** the `og:image` meta tag is rendered
- **THEN** its value is an absolute URL (starts with `https://`)

#### Scenario: og:site_name reflects brand
- **WHEN** the `og:site_name` tag is read
- **THEN** its value is "Fan Fla"

### Requirement: JSON-LD LocalBusiness schema is present
The system SHALL include a `<script type="application/ld+json">` block in the `<head>` with a valid `LocalBusiness` schema describing the brand.

#### Scenario: JSON-LD script tag is present
- **WHEN** the page HTML is parsed
- **THEN** a `<script type="application/ld+json">` tag exists in the `<head>`

#### Scenario: Schema includes alternateName for brand variants
- **WHEN** the JSON-LD is parsed
- **THEN** the `alternateName` array contains "Fla Fla", "FlaFla", and "fanfla"

#### Scenario: Schema passes Google Rich Results validation
- **WHEN** the page URL is submitted to Google Rich Results Test
- **THEN** no critical errors are reported for the LocalBusiness schema

### Requirement: SEO constants are centralised in site config
The system SHALL store SEO-related constants (site URL, brand aliases, description, keywords) in `app/data/site.ts` so they are reusable and not duplicated across files.

#### Scenario: siteUrl is defined in site config
- **WHEN** `siteConfig.seo.siteUrl` is accessed
- **THEN** it returns "https://www.fanfla.com"

#### Scenario: brandAliases includes all variants
- **WHEN** `siteConfig.seo.brandAliases` is accessed
- **THEN** it returns an array containing "Fan Fla", "Fla Fla", "FlaFla", "fanfla"
