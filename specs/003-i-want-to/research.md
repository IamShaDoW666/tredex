# Research for Mobile Navigation Toggle Menu

## Unknowns from Technical Context:

### 1. How to best integrate the mobile navigation toggle into the existing `Header.tsx` or `layout.tsx` to ensure it's only visible on mobile viewports.

**Decision**: The mobile navigation toggle will be integrated into `components/feature/landing-page/Header.tsx`.

**Rationale**:
- `Header.tsx` is already responsible for the main navigation, making it a logical place for the mobile toggle.
- It allows for responsive display control using TailwindCSS utility classes (e.g., `hidden md:block` for desktop-only elements and `block md:hidden` for mobile-only elements).

**Alternatives considered**:
- Integrating into `app/layout.tsx`: While possible, `Header.tsx` is more specific to navigation concerns and keeps the layout cleaner.

### 2. Specific ShadCN component to use for the side menu (Sheet, Drawer, or custom).

**Decision**: Use ShadCN `Sheet` component.

**Rationale**:
- The `Sheet` component is specifically designed for side-sliding panels, which perfectly matches the requirement for a "navigation that comes from the side."
- It provides built-in accessibility features and handles overlay/backdrop behavior.
- It aligns with the project's constitution to use ShadCN components for UI.

**Alternatives considered**:
- `Drawer`: While similar, `Sheet` is generally preferred for navigation-like side panels.
- Custom component: Would require more development effort and might not adhere to ShadCN's design consistency.

### 3. How to manage the state of the navigation menu (open/closed).

**Decision**: Use React's `useState` hook within the `MobileNavToggle` component.

**Rationale**:
- The state (open/closed) is local to the `MobileNavToggle` component and doesn't need to be shared globally.
- `useState` is the simplest and most idiomatic way to manage local component state in React.
- The `Sheet` component from ShadCN also has its own internal state management for open/closed, which can be controlled externally via a prop.

**Alternatives considered**:
- Context API: Overkill for a simple toggle state that is not widely shared.
- Redux/Zustand: Unnecessary complexity for this specific feature.
