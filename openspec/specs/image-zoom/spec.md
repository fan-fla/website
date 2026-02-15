## ADDED Requirements

### Requirement: Image modal displays enlarged product image

The ImageModal component SHALL display a product image at enlarged size in a modal overlay.

#### Scenario: Modal content display

- **WHEN** modal is open
- **THEN** displays the product image centered on screen
- **AND** displays a close button (X icon) in the top-right area
- **AND** displays a dark backdrop behind the image

### Requirement: Modal closes via multiple methods

The ImageModal SHALL support multiple ways to close.

#### Scenario: Close via button

- **WHEN** user clicks the close button (X icon)
- **THEN** modal closes with fade-out animation

#### Scenario: Close via ESC key

- **WHEN** modal is open and user presses ESC key
- **THEN** modal closes with fade-out animation

#### Scenario: Close via backdrop click

- **WHEN** user clicks the dark backdrop (outside the image)
- **THEN** modal closes with fade-out animation

### Requirement: Modal has fade animation

The ImageModal SHALL animate with a fade effect.

#### Scenario: Modal opening

- **WHEN** modal opens
- **THEN** backdrop and image fade in over 300ms

#### Scenario: Modal closing

- **WHEN** modal closes
- **THEN** backdrop and image fade out over 300ms

### Requirement: Desktop hover shows zoom indicator

On desktop viewports, product card images SHALL show a zoom indicator on hover.

#### Scenario: Hover state appears

- **WHEN** viewport width is >= 768px
- **AND** user hovers over product card image
- **THEN** a dark overlay appears over the image
- **AND** a magnifying glass (lupa) icon appears centered on the image

#### Scenario: Hover state disappears

- **WHEN** user moves mouse away from product card image
- **THEN** overlay and icon disappear

### Requirement: Mobile has no hover indicator

On mobile viewports, product card images SHALL NOT show hover indicators.

#### Scenario: Mobile image display

- **WHEN** viewport width is < 768px
- **THEN** product card image displays without overlay or icon
- **AND** tapping the image directly opens the modal
