## ADDED Requirements

### Requirement: Page displays all sections in correct order

The landing page SHALL render all sections in this order: Header, Hero, Soul, Sabores, Barrinhas, Historia, Gift, Testimonials, CTA, Footer.

#### Scenario: Full page load

- **WHEN** user navigates to the homepage
- **THEN** all 10 sections render in the specified order
- **AND** the page background is cream color (`--bg-cream`)

### Requirement: Header provides navigation

The Header SHALL be sticky at the top of the viewport and provide navigation links to page sections.

#### Scenario: Desktop navigation

- **WHEN** viewport width is >= 1024px
- **THEN** Header displays logo, navigation links (Início, Sabores, A Nossa História, Presente, Contacto), and WhatsApp CTA button

#### Scenario: Mobile navigation

- **WHEN** viewport width is < 1024px
- **THEN** Header displays logo and hamburger menu button
- **AND** clicking the hamburger reveals a mobile menu with all navigation links

#### Scenario: Anchor link navigation

- **WHEN** user clicks a navigation link
- **THEN** page smoothly scrolls to the corresponding section

### Requirement: Hero section displays brand message

The Hero section SHALL display the main tagline and value proposition over a background image.

#### Scenario: Hero content display

- **WHEN** Hero section renders
- **THEN** displays "Um Gosto de Quero Mais" as the main heading
- **AND** displays the value proposition text below
- **AND** shows a scroll hint indicator

### Requirement: Sabores section displays cookie products

The Sabores section SHALL display all cookie products from the data layer in a responsive grid.

#### Scenario: Product grid layout

- **WHEN** viewport width is >= 1024px
- **THEN** products display in a 3-column grid

#### Scenario: Product grid tablet

- **WHEN** viewport width is >= 768px and < 1024px
- **THEN** products display in a 2-column grid

#### Scenario: Product grid mobile

- **WHEN** viewport width is < 768px
- **THEN** products display in a single column

### Requirement: Barrinhas section displays specialty products

The Barrinhas section SHALL display specialty products (bars, snacks, honey) from the data layer.

#### Scenario: Barrinhas products display

- **WHEN** Barrinhas section renders
- **THEN** displays all specialty products with images, names, descriptions, and prices

### Requirement: Product cards link to WhatsApp ordering

Each product card SHALL include a "Quero este" link that opens WhatsApp. Product card images SHALL be clickable to open a zoom modal.

#### Scenario: WhatsApp order link

- **WHEN** user clicks "Quero este →" on a product card
- **THEN** WhatsApp opens with the configured phone number

#### Scenario: Image click opens zoom modal

- **WHEN** user clicks on a product card image
- **THEN** the ImageModal opens displaying that product's image at enlarged size

### Requirement: Footer displays brand and social links

The Footer SHALL display the logo, navigation links, social media links, and copyright.

#### Scenario: Footer content

- **WHEN** Footer renders
- **THEN** displays Fla Fla logo
- **AND** displays navigation links
- **AND** displays Instagram, Facebook, and WhatsApp icons with links
- **AND** displays copyright text

### Requirement: CTA section promotes WhatsApp ordering

The CTA section SHALL encourage users to order via WhatsApp with a prominent button.

#### Scenario: CTA button action

- **WHEN** user clicks the WhatsApp button in the CTA section
- **THEN** WhatsApp opens with the configured phone number

### Requirement: Mobile menu communicates expanded state

The mobile menu toggle button SHALL communicate its expanded/collapsed state to assistive technology.

#### Scenario: Collapsed state

- **WHEN** mobile menu is closed
- **THEN** the toggle button has `aria-expanded="false"`

#### Scenario: Expanded state

- **WHEN** mobile menu is open
- **THEN** the toggle button has `aria-expanded="true"`

### Requirement: Mobile menu closes on ESC key

The mobile menu SHALL close when the user presses the ESC key.

#### Scenario: ESC closes menu

- **WHEN** mobile menu is open
- **AND** user presses ESC key
- **THEN** the menu closes
- **AND** focus returns to the toggle button
