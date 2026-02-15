## MODIFIED Requirements

### Requirement: Product cards link to WhatsApp ordering

Each product card SHALL include a "Quero este" link that opens WhatsApp. Product card images SHALL be clickable to open a zoom modal.

#### Scenario: WhatsApp order link

- **WHEN** user clicks "Quero este →" on a product card
- **THEN** WhatsApp opens with the configured phone number

#### Scenario: Image click opens zoom modal

- **WHEN** user clicks on a product card image
- **THEN** the ImageModal opens displaying that product's image at enlarged size
