## ADDED Requirements

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
