# Quickstart Guide: API and Frontend Integration (Revised)

**Date**: 2025-09-10

This guide provides a high-level overview of how to implement the new API endpoints and integrate them with the frontend, strictly adhering to the project's existing structure and dependencies.

## 1. Backend: API Route Implementation

All API logic will reside in the `app/api/` directory, using the standard Next.js App Router configuration. No changes to the project structure are required.

**File Structure**:
```
app/
└── api/
    ├── categories/
    │   ├── [id]/
    │   │   ├── route.ts  // Handles GET (one), PUT, DELETE
    │   └── route.ts      // Handles GET (all), POST
    └── products/
        ├── [id]/
        │   ├── route.ts  // Handles GET (one), PUT, DELETE
        └── route.ts      // Handles GET (all), POST
```

**Implementation Steps**:

1.  **Create the `route.ts` files** as shown above.
2.  **Import necessary modules**: `dbConnect` from `lib/db`, Mongoose models from `model/`, and `NextResponse` from `next/server`.
3.  **Implement route handlers** for each HTTP method defined in the API contracts.
4.  **Perform basic validation**: For `POST` and `PUT` requests, manually check for the presence and correct type of required fields within the route handler before processing. Do not add any new validation libraries.
5.  **Use Mongoose models** for all database interactions.
6.  **Return JSON responses** using `NextResponse.json()` with appropriate HTTP status codes.

## 2. Frontend: Tanstack Query Integration

We will use the already installed `@tanstack/react-query` library to manage data fetching.

**File Structure**:
```
hooks/
├── use-products.ts
└── use-categories.ts
```

**Implementation Steps**:

1.  **Create custom hooks** (`use-products.ts`, `use-categories.ts`) to encapsulate `useQuery` and `useMutation` logic for products and categories.
2.  **Refactor Components**: Update existing components like `ProductGrid.tsx` to use these new hooks instead of mock data.
3.  **Handle UI States**: Use the `isLoading` and `isError` states returned by the hooks to render loading indicators (e.g., `Skeleton` components) or error messages.
4.  **Provider Setup**: Ensure the `QueryClientProvider` is configured correctly in `app/layout.tsx` to make it available throughout the application.