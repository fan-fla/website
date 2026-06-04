## Why

The site does not consistently appear in Google results when users search "fan fla" (with a space), losing potential customers who misspell or space the brand name. Strengthening metadata, adding structured data, and generating a sitemap will improve crawlability, keyword coverage, and brand discoverability.

## What Changes

- Add `app/sitemap.ts` — dynamic sitemap generation (Next.js built-in)
- Add `app/robots.ts` — robots.txt with sitemap reference
- Improve `<title>` and `<meta description>` in `app/layout.tsx` to include brand name variants ("Fla Fla", "FlaFla", "Fan Fla", "cookies moçambicanos")
- Add OpenGraph and Twitter card metadata for social sharing previews
- Add JSON-LD structured data (LocalBusiness + Product schema) for Google rich results
- Update `app/data/site.ts` with SEO-relevant constants (site URL, description, keywords)

## Capabilities

### New Capabilities
- `sitemap`: Generates `/sitemap.xml` and `/robots.txt` so Google can discover and crawl all pages
- `seo-metadata`: Title tags, meta descriptions, OpenGraph, Twitter cards, and JSON-LD structured data covering brand name variants and product keywords

### Modified Capabilities
<!-- none -->

## Impact

- `app/layout.tsx` — metadata export updated with full SEO fields
- `app/data/site.ts` — new SEO constants (siteUrl, description, keywords, brandAliases)
- New files: `app/sitemap.ts`, `app/robots.ts`
- No breaking changes, no new dependencies (Next.js built-ins only)
