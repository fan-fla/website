## Context

All WhatsApp links currently point to `siteConfig.whatsapp.url` (`wa.me/258840000000`) with no `?text=` parameter. This means every click — whether from a product card, the CTA section, or the header — opens an empty WhatsApp chat. The user has to manually type what they want.

There are two categories of WhatsApp entry points:
1. **Product-specific** — the "Quero este →" link in `ProductCard`, tied to a specific cookie/barrinha/snack
2. **Generic CTAs** — `WhatsAppButton` used in Header, CTASection, GiftSection, and Footer for general enquiries or ordering

## Goals / Non-Goals

**Goals:**
- Every WhatsApp link opens with a friendly, context-appropriate pre-filled message
- Product-specific links include the product name and a natural ordering phrase
- Generic CTA links include a warm greeting appropriate to the section context
- Keep the message strategy easy to update (data-driven, not hardcoded in components)

**Non-Goals:**
- Analytics or click tracking on WhatsApp links (future work)
- Multi-language message support (site is Portuguese only)
- WhatsApp Business API integration (we use simple `wa.me` deep links)

## Decisions

### 1. WhatsApp URL builder utility

**Decision**: Create a `buildWhatsAppUrl(message?: string)` helper in `app/data/site.ts`.

**Rationale**: The WhatsApp number lives in `siteConfig` already. Co-locating the URL builder there keeps the WhatsApp config centralized. Components import one function instead of manually constructing URLs with `encodeURIComponent`.

**Alternatives considered**:
- Inline `encodeURIComponent` in each component — rejected because it duplicates logic and is easy to get wrong
- Separate `utils/whatsapp.ts` file — overkill for a single function; `site.ts` is the natural home

### 2. Product messages via a `whatsappMessage` field on `Product`

**Decision**: Add an optional `whatsappMessage` field to the `Product` interface. Each product in `products.ts` gets a hand-crafted message.

**Rationale**: Hand-crafted messages feel more personal than template-generated ones ("Olá! Gostaria de encomendar {name}"). Each product has a unique personality (e.g., Lhaties = batata-doce, Matchies = mandioca), and the message can reflect that.

**Alternatives considered**:
- Template-based message from product name — simpler but generic, loses the artisanal brand feel
- Message function that takes product — unnecessary complexity for static data

### 3. Generic CTA messages as string props

**Decision**: Each section passes a `message` string to `WhatsAppButton`. The messages are defined inline in each section component since they're one-off and tied to the section's context.

**Rationale**: Generic messages like "Olá! Quero saber mais sobre as bolachas Fla Fla" don't need a data layer — they're part of the section's copy, just like headings and descriptions.

### 4. Backward-compatible component API

**Decision**: The `message` prop on `WhatsAppButton` and the `whatsappMessage` field on `Product` are both optional. When omitted, the link falls back to the base WhatsApp URL with no message.

**Rationale**: Ensures no breaking changes and allows incremental adoption.

## Risks / Trade-offs

- **Message encoding edge cases** → Mitigated by using `encodeURIComponent` which handles Portuguese characters (á, ã, ç, etc.) correctly
- **Messages get stale if products change** → Low risk since products rarely change; messages live next to product data so they're updated together
- **Long messages get truncated on some devices** → Keep messages under ~150 characters to stay safe across all WhatsApp clients
