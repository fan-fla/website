## ADDED Requirements

### Requirement: Skip-to-content link allows bypassing navigation

The page SHALL include a skip-to-content link that allows keyboard users to bypass navigation.

#### Scenario: Skip link visibility

- **WHEN** user presses Tab on page load
- **THEN** a "Skip to content" link becomes visible
- **AND** the link is visually positioned at the top of the page

#### Scenario: Skip link activation

- **WHEN** user activates the skip link
- **THEN** focus moves to the main content area
- **AND** the navigation is bypassed

### Requirement: Focus trap keeps focus within modal

When a modal is open, focus SHALL be trapped within the modal until it is closed.

#### Scenario: Tab cycling forward

- **WHEN** modal is open
- **AND** user presses Tab on the last focusable element
- **THEN** focus moves to the first focusable element in the modal

#### Scenario: Tab cycling backward

- **WHEN** modal is open
- **AND** user presses Shift+Tab on the first focusable element
- **THEN** focus moves to the last focusable element in the modal

### Requirement: Modal returns focus on close

When a modal closes, focus SHALL return to the element that opened it.

#### Scenario: Focus restoration

- **WHEN** user closes a modal
- **THEN** focus returns to the button/element that triggered the modal opening
