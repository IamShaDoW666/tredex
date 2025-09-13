# Tredex Constitution

## Core Principles

### I. Project Vision
Tredex is a modern E-commerce web application for sneakers and shoes. The primary goal is to provide a seamless and visually appealing user experience for browsing and purchasing footwear.

### II. Technology Stack
The project is built using Next.js (with the App Router) and TypeScript. To maintain a flat and accessible project structure, we will not use a `src/` directory.

### III. Design Standards
A consistent and high-quality design is paramount. All styling must be implemented using TailwindCSS. The UI will be constructed using components from the ShadCN library to ensure visual and functional consistency across the application.

### IV. Component Management
To promote reusability and maintain a single source of truth, all UI components must be sourced from the registries defined in `components.json`. Before creating a new component, always check if a suitable one already exists in the ShadCN registry.

### V. Client and Server Components
To ensure optimal performance and correct behavior with Next.js App Router, all components that use client-side interactivity (e.g., hooks, event listeners) MUST include the `"use client"` directive at the top of the file. Server components should be used for fetching data and rendering static content whenever possible.

### VI. Mobile-First Design
The design must be focused on mobile UI/UX, as the web application will be primarily used by mobile users. All components and layouts must be designed and built with a mobile-first approach. The user experience on mobile devices is of the utmost importance. Designs should be fully responsive and adapt gracefully to all screen sizes, from small mobile phones to large desktop displays.

## Development Workflow

- **Version Control:** All development must follow a standard Git flow using feature branches. Changes are merged into the main branch via pull requests.
- **Code Reviews:** All pull requests require at least one approval from another team member. Reviews should focus on code quality, adherence to the constitution, and functionality.
- **Component Addition:** When adding new components from ShadCN, use the appropriate CLI commands to ensure they are correctly integrated and tracked in `components.json`.

### V. Testing
Testing is an important part of our development process. However, we do not follow a strict Test-Driven Development (TDD) approach. Tests should be implemented when requested or deemed necessary for the stability of the feature.

## Governance
This constitution is the foundational document for the Tredex project. All development practices, code contributions, and architectural decisions must align with these principles. Amendments to this constitution require team consensus and must be documented.

**Version**: 1.2.0 | **Ratified**: 2025-09-09 | **Last Amended**: 2025-09-13
