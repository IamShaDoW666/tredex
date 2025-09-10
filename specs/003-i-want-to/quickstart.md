# Quickstart: Mobile Navigation Toggle Menu

This document provides a quick guide to using the Mobile Navigation Toggle Menu component.

## Overview

The `MobileNavToggle` component provides a responsive navigation solution for mobile viewports, allowing users to toggle a side-sliding menu to access navigation links.

## Usage

1.  **Add ShadCN `Sheet` and `Button` components**:
    If not already present in your project, add the `Sheet` and `Button` components using the ShadCN CLI:
    ```bash
    npx shadcn-ui@latest add sheet
    npx shadcn-ui@latest add button
    ```

2.  **Create the `MobileNavToggle` component**:
    Create a new file, e.g., `components/MobileNavToggle.tsx`, with the following basic structure:

    ```typescript
    // components/MobileNavToggle.tsx
    "use client";

    import * as React from "react";
    import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
    import { Button } from "@/components/ui/button";
    import { Menu } from "lucide-react"; // Assuming lucide-react for icons

    export function MobileNavToggle() {
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-6">
              {/* Your navigation links go here */}
              <a href="#" className="text-lg font-semibold">Home</a>
              <a href="#" className="text-lg font-semibold">Products</a>
              <a href="#" className="text-lg font-semibold">About</a>
              <a href="#" className="text-lg font-semibold">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      );
    }
    ```

3.  **Integrate into `Header.tsx`**:
    Import and use the `MobileNavToggle` component within your `components/feature/landing-page/Header.tsx` (or relevant header/layout file). Ensure it's only visible on mobile viewports using TailwindCSS classes.

    ```typescript
    // components/feature/landing-page/Header.tsx
    import { MobileNavToggle } from "@/components/MobileNavToggle";
    // ... other imports

    export function Header() {
      return (
        <header>
          <nav>
            {/* Desktop navigation */}
            <div className="hidden md:flex">
              {/* ... desktop nav items */}
            </div>

            {/* Mobile navigation toggle */}
            <div className="md:hidden">
              <MobileNavToggle />
            </div>
          </nav>
        </header>
      );
    }
    ```

## Customization

-   **Navigation Links**: Replace the placeholder `<a>` tags inside `SheetContent` with your actual navigation components or links.
-   **Styling**: Apply additional TailwindCSS classes to `Button`, `SheetContent`, or the navigation `nav` element to match your application's design.
-   **Icon**: Change the `Menu` icon from `lucide-react` to any other icon library you prefer.
