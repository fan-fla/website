## ADDED Requirements

### Requirement: ImageModal has accessible dialog role

The ImageModal SHALL have proper ARIA attributes for screen readers.

#### Scenario: Dialog semantics

- **WHEN** ImageModal is open
- **THEN** the modal container has `role="dialog"`
- **AND** the modal has `aria-modal="true"`
- **AND** the modal has an accessible label

### Requirement: ImageModal traps focus

The ImageModal SHALL trap keyboard focus while open.

#### Scenario: Focus on open

- **WHEN** ImageModal opens
- **THEN** focus moves to the close button

#### Scenario: Focus trapped

- **WHEN** ImageModal is open
- **THEN** Tab and Shift+Tab cycle focus within the modal only

### Requirement: ImageModal returns focus on close

The ImageModal SHALL return focus to the trigger element when closed.

#### Scenario: Focus on close

- **WHEN** ImageModal closes
- **THEN** focus returns to the product image button that opened it
