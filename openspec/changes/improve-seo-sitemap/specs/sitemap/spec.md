## ADDED Requirements

### Requirement: Sitemap is generated at /sitemap.xml
The system SHALL expose a valid XML sitemap at `/sitemap.xml` listing all public routes with their canonical URLs and last-modified dates.

#### Scenario: Sitemap is accessible
- **WHEN** a crawler or user requests `/sitemap.xml`
- **THEN** the server returns a valid XML sitemap with HTTP 200 and `Content-Type: application/xml`

#### Scenario: Homepage is included
- **WHEN** the sitemap is parsed
- **THEN** it contains an entry for `https://www.fanfla.com/` with a `lastmod` date and `changefreq` of `monthly`

### Requirement: Robots.txt is generated at /robots.txt
The system SHALL expose a `/robots.txt` file that allows all crawlers and references the sitemap URL.

#### Scenario: Robots.txt is accessible
- **WHEN** a crawler or user requests `/robots.txt`
- **THEN** the server returns a plain-text robots.txt with HTTP 200

#### Scenario: Sitemap is referenced
- **WHEN** the robots.txt is parsed
- **THEN** it contains a `Sitemap: https://www.fanfla.com/sitemap.xml` directive

#### Scenario: All pages are allowed
- **WHEN** the robots.txt is parsed
- **THEN** it contains `User-agent: *` and `Allow: /`
