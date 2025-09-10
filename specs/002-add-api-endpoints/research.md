# Research & Analysis for API Endpoints (Revised)

**Date**: 2025-09-10

## 1. Core Feature Analysis

The user wants to replace mock data with dynamic data from a database. This requires:
1.  **Backend**: Public RESTful API endpoints for CRUD operations on `Product` and `Category` data.
2.  **Frontend**: Integration of these endpoints using the existing Tanstack Query library.

## 2. Technical Constraints & Adherence

Based on the user's explicit instructions, the following constraints are critical:

*   **No New Libraries/Plugins**: The implementation will not introduce any new dependencies, plugins, or external libraries. We will rely exclusively on the existing project stack.
*   **Next.js App Router APIs**: All API endpoints will be built using Next.js Route Handlers within the `app/api/` directory, as is standard for the App Router. This adheres to the project's technology stack and structure.
*   **No Project Structure Changes**: The existing folder structure will be preserved. New API routes will be added within the established `app/api/` path.
*   **No Python or Other Languages**: The implementation will be done entirely in TypeScript, consistent with the project's language.

## 3. Implementation Strategy

1.  **API Endpoint Development (Backend)**:
    *   API routes will be created as `route.ts` files within `app/api/products/` and `app/api/categories/`.
    *   Each route handler will use the established `dbConnect` utility and Mongoose models to interact with the database.
    *   Responses will be sent using the standard `NextResponse.json()` method.
    *   Basic input validation will be performed within each route handler for `POST` and `PUT` requests without adding new dependencies.

2.  **Client-Side Integration (Frontend)**:
    *   The existing `@tanstack/react-query` library will be used for all data fetching.
    *   Custom hooks will be created to abstract the API calls.
    *   Components currently using mock data will be refactored to use these hooks, including handling for loading and error states.

This revised plan ensures strict adherence to the user's constraints while fulfilling the feature requirements.