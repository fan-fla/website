## 1. Site Config

- [x] 1.1 Add `seo` block to `siteConfig` in `app/data/site.ts` with `siteUrl`, `description`, `brandAliases`, and `keywords`

## 2. Sitemap & Robots

- [x] 2.1 Create `app/sitemap.ts` using Next.js `MetadataRoute.Sitemap` — return homepage entry with `lastModified`, `changefreq: 'monthly'`, `priority: 1`
- [x] 2.2 Create `app/robots.ts` using Next.js `MetadataRoute.Robots` — allow all, reference `https://www.fanfla.com/sitemap.xml`

## 3. Metadata & Brand Signals

- [x] 3.1 Update `keywords` array in `app/layout.tsx` to include brand variants: "Fan Fla", "Fla Fla", "FlaFla", "fanfla", "fan fla cookies"
- [x] 3.2 Update `description` in `app/layout.tsx` to naturally mention "Fan Fla" / "Fla Fla" brand name
- [x] 3.3 Confirm `og:image` uses absolute URL (prefixed with `https://www.fanfla.com`)

## 4. JSON-LD Structured Data

- [x] 4.1 Add `<script type="application/ld+json">` in `app/layout.tsx` `<head>` with `LocalBusiness` schema
- [x] 4.2 Include `name: "Fan Fla"`, `alternateName: ["Fla Fla", "FlaFla", "fanfla"]`, `url`, `telephone`, `address` (Maputo, Mozambique), and `image` fields in the JSON-LD

## 5. Verification

- [x] 5.1 Run `pnpm build` and confirm no TypeScript/build errors
- [ ] 5.2 Visit `/sitemap.xml` on deployed site and confirm it renders valid XML
- [ ] 5.3 Visit `/robots.txt` and confirm it contains `Sitemap:` directive
- [ ] 5.4 Validate JSON-LD using Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] 5.5 Submit `https://www.fanfla.com/sitemap.xml` in Google Search Console → Sitemaps
