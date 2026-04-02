## ADDED Requirements

### Requirement: WhatsApp URL builder utility
The system SHALL provide a `buildWhatsAppUrl(message?: string)` function that constructs a complete WhatsApp deep link. When a message is provided, it SHALL be appended as a URL-encoded `text` query parameter. When no message is provided, the function SHALL return the base WhatsApp URL without a `text` parameter.

#### Scenario: URL with message
- **WHEN** `buildWhatsAppUrl("Olá! Quero encomendar Lhaties")` is called
- **THEN** the function returns `https://wa.me/258840000000?text=Ol%C3%A1!%20Quero%20encomendar%20Lhaties`

#### Scenario: URL without message
- **WHEN** `buildWhatsAppUrl()` is called with no argument
- **THEN** the function returns `https://wa.me/258840000000` with no `text` parameter

#### Scenario: Portuguese special characters are preserved
- **WHEN** `buildWhatsAppUrl("Olá! Informação sobreração")` is called
- **THEN** all characters (á, ã, ç) SHALL be correctly encoded via `encodeURIComponent`

### Requirement: Product-specific WhatsApp messages
Each product in the data layer SHALL have a `whatsappMessage` field containing a pre-written Portuguese message. The message SHALL include the product name and a friendly ordering phrase. Messages MUST be under 150 characters.

#### Scenario: Cookie product card WhatsApp link
- **WHEN** a user clicks "Quero este →" on the Lhaties product card
- **THEN** WhatsApp opens with a pre-filled message specific to Lhaties (e.g., "Olá! Gostaria de encomendar os cookies Lhaties de batata-doce 🍠")

#### Scenario: Barrinha product card WhatsApp link
- **WHEN** a user clicks "Quero este →" on the Barrinha Chocomela product card
- **THEN** WhatsApp opens with a pre-filled message specific to Barrinha Chocomela

#### Scenario: Each product has a unique message
- **WHEN** all products are listed
- **THEN** every product (cookies, barrinhas, snacks, mel) SHALL have a distinct `whatsappMessage` that references its unique characteristics

### Requirement: Generic CTA WhatsApp messages
WhatsApp buttons that are not tied to a specific product SHALL open with a context-appropriate generic greeting message. Each section's CTA SHALL use a message that matches the section's intent.

#### Scenario: Header CTA button
- **WHEN** a user clicks the WhatsApp button in the site header
- **THEN** WhatsApp opens with a general enquiry message (e.g., "Olá! Quero saber mais sobre as bolachas Fla Fla 🍪")

#### Scenario: CTA section button
- **WHEN** a user clicks the WhatsApp button in the CTA section
- **THEN** WhatsApp opens with an ordering-intent message

#### Scenario: Gift section button
- **WHEN** a user clicks the WhatsApp button in the gift section
- **THEN** WhatsApp opens with a gift/encomenda-focused message

### Requirement: Backward compatibility
The `message` parameter on `WhatsAppButton` and `whatsappMessage` on `Product` SHALL be optional. When omitted, the component SHALL fall back to the base WhatsApp URL with no pre-filled message.

#### Scenario: WhatsAppButton without message prop
- **WHEN** `WhatsAppButton` is rendered without a `message` prop
- **THEN** the button links to the base WhatsApp URL with no `text` parameter

#### Scenario: Product without whatsappMessage field
- **WHEN** a product has no `whatsappMessage` field
- **THEN** the "Quero este →" link SHALL use the base WhatsApp URL with no pre-filled message
