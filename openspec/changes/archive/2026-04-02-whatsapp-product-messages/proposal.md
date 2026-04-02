## Why

Currently, all WhatsApp buttons across the site link to `wa.me/258840000000` with no pre-filled message. When a user clicks "Quero este →" on a specific product (e.g., Lhaties cookies), WhatsApp opens with an empty chat — the user has to type what they want from scratch. Pre-filling a friendly, product-specific message reduces friction, improves conversion, and gives the Fla Fla team immediate context about what the customer is interested in.

## What Changes

- Add a `whatsappMessage` field to each product in the data layer (cookies, barrinhas, snacks, mel)
- Update `ProductCard` to pass the product-specific message as a URL-encoded `text` parameter in the WhatsApp link
- Update `WhatsAppButton` to accept an optional `message` prop that gets appended to the WhatsApp URL
- Add sensible default messages for generic WhatsApp CTAs (Header, CTA section, Gift section) that aren't tied to a specific product
- Centralize WhatsApp URL generation (with optional message) in a helper to keep it DRY

## Capabilities

### New Capabilities
- `whatsapp-messages`: Defines the WhatsApp message strategy — per-product messages, generic CTA messages, URL encoding, and the helper utility for building WhatsApp links with pre-filled text

### Modified Capabilities
_(none — existing specs don't define WhatsApp message behavior at the requirement level)_

## Impact

- **Data**: `app/data/products.ts` — new `whatsappMessage` field on `Product` interface
- **Components**: `app/components/ui/ProductCard.tsx`, `app/components/ui/Button.tsx` — consume message prop
- **Sections**: `Header`, `CTASection`, `GiftSection`, `Footer` — pass appropriate messages to WhatsApp buttons
- **Utility**: New helper function for building WhatsApp URLs with encoded messages
- **No breaking changes** — WhatsApp number and base URL remain the same
