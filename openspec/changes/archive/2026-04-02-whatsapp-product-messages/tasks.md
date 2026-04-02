## 1. WhatsApp URL Utility

- [x] 1.1 Add `buildWhatsAppUrl(message?: string)` function to `app/data/site.ts` that returns the WhatsApp URL with optional URL-encoded `text` parameter
- [x] 1.2 Update `siteConfig.whatsapp.url` references across components to use `buildWhatsAppUrl()` instead

## 2. Product Data

- [x] 2.1 Add optional `whatsappMessage` field to the `Product` interface in `app/data/products.ts`
- [x] 2.2 Write a unique Portuguese WhatsApp message for each cookie (Lhaties, Matchies, Mifuguies, Famicookies)
- [x] 2.3 Write a unique Portuguese WhatsApp message for each barrinha/snack (Barrinha Vegan, Barrinha Frutmela, Barrinha Chocomela, Snack Caju, Mel Puro)

## 3. Component Updates

- [x] 3.1 Update `ProductCard` to pass the product's `whatsappMessage` to `buildWhatsAppUrl()` in the "Quero este →" link
- [x] 3.2 Add optional `message` prop to `WhatsAppButton` and use `buildWhatsAppUrl(message)` for the href

## 4. Section CTA Messages

- [x] 4.1 Add a generic greeting message to the Header WhatsApp button
- [x] 4.2 Add an ordering-intent message to the CTASection WhatsApp button
- [x] 4.3 Add a gift/encomenda message to the GiftSection WhatsApp button
- [x] 4.4 Review Footer WhatsApp links and add appropriate messages

## 5. Verification

- [x] 5.1 Build the project (`pnpm build`) and verify no TypeScript errors
- [x] 5.2 Manually verify each product card WhatsApp link opens with the correct pre-filled message
- [x] 5.3 Verify all generic CTA buttons open with appropriate messages
