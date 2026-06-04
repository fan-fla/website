## Context

Fan Fla is a Next.js 16 (App Router) landing page hosted at fanfla.com. The site currently has basic metadata in `app/layout.tsx` (title, description, keywords, OpenGraph, Twitter cards) but is missing:
- A `sitemap.xml` for Google to discover pages
- A `robots.txt` pointing to the sitemap
- JSON-LD structured data for rich results
- Brand name variant signals ("fla fla", "flafla", "fanfla") that help Google resolve the spaced variant "fan fla"

The symptom: searching "fan fla" returns no results, while "fanfla" and "fan fla cookies" do. This suggests Google has indexed the page but its keyword signals are too weak to rank for the short, ambiguous two-word query.

## Goals / Non-Goals

**Goals:**
- Add `/sitemap.xml` so all routes are crawlable and re-indexing is triggered
- Add `/robots.txt` pointing to sitemap
- Strengthen brand signals in metadata to cover "fan fla", "fla fla", "fanfla", "flafla" variants
- Add JSON-LD `LocalBusiness` schema to qualify for Google rich results
- Keep implementation zero-dependency (Next.js App Router built-ins only)

**Non-Goals:**
- Multi-language SEO / hreflang
- Server-side search analytics or tracking
- Blog or content marketing pages
- Performance or Core Web Vitals improvements

## Decisions

### Sitemap: `app/sitemap.ts` (Next.js built-in)
Next.js 13+ supports a `sitemap.ts` file that auto-generates `/sitemap.xml` at build time. This is the idiomatic approach — no external library needed. The site is a single-page landing page, so the sitemap will contain one entry (the homepage).

**Alternative considered**: Static `public/sitemap.xml` — rejected because it would not auto-update if routes are added later.

### Robots: `app/robots.ts` (Next.js built-in)
Same pattern as sitemap — `robots.ts` generates `/robots.txt` with `Allow: /` and a `Sitemap:` pointer to the full URL.

### JSON-LD: inline `<script>` in `layout.tsx`
Next.js App Router recommends injecting JSON-LD as a `<script type="application/ld+json">` tag directly in the layout. We'll use `LocalBusiness` schema with `name`, `alternateName` (brand variants), `url`, `telephone`, `address`, and `image`.

**Why LocalBusiness over Organization**: The brand sells directly to consumers in Maputo — LocalBusiness triggers map and contact rich results that Organization does not.

### Brand variant keywords
The current `keywords` array in `layout.tsx` does not include the brand name itself. We'll add "Fan Fla", "Fla Fla", "FlaFla", "fanfla", "fan fla cookies" to the keywords array and include them in the `description` naturally.

We'll also update `app/data/site.ts` with a `seo` block containing `siteUrl`, `description`, `brandAliases`, and `keywords` so they're centralised and reusable.

### `metadataBase`
Already set to `https://www.fanfla.com` — no change needed.

## Risks / Trade-offs

- [Google re-indexing delay] Submitting sitemap via Google Search Console speeds this up, but is a manual step outside the codebase — document it in the tasks. → Mitigation: note it in tasks.
- [JSON-LD markup errors] Invalid schema silently fails. → Mitigation: validate with Google's Rich Results Test after deploy.
- [Keyword stuffing risk] Listing too many brand variants in keywords meta can look spammy. → Mitigation: keep to 3–4 natural variants, rely on JSON-LD `alternateName` for the rest.

## Migration Plan

1. Deploy changes (Vercel auto-deploys on push to main)
2. Visit `https://www.fanfla.com/sitemap.xml` to verify it renders
3. Visit `https://www.fanfla.com/robots.txt` to verify it points to sitemap
4. Submit sitemap URL in Google Search Console → Sitemaps
5. Validate JSON-LD with Google Rich Results Test
6. Monitor Search Console impressions for "fan fla" query over 2–4 weeks

## Open Questions

- Does the site have a Google Search Console property already set up? (needed for sitemap submission)
- Should the sitemap include the Instagram/Facebook profile URLs as related links? (probably not — out of scope)
