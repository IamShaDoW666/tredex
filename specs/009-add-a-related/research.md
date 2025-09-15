# Research: Related Products Component

## Fetching Related Products

### Decision
We will implement a new API endpoint or modify an existing one to fetch a list of random products, excluding the currently viewed product. This endpoint should also allow specifying the number of products to return (up to 10).

### Rationale
- The user specified that related products should be random and exclude the current product.
- A dedicated API endpoint ensures separation of concerns and allows for future expansion (e.g., adding filtering by category, brand, etc.).

### Alternatives Considered
- **Client-side filtering**: Fetch all products and filter on the client. This is inefficient and would load unnecessary data.
- **Existing API modification**: If an API for fetching multiple products already exists, it could be modified to include parameters for exclusion and randomness.

## Horizontal Scrolling

### Decision
We will use Tailwind CSS utility classes for implementing horizontal scrolling. Specifically, `overflow-x-auto` and `whitespace-nowrap` (or similar flexbox/grid configurations) will be used on the container of the product cards.

### Rationale
- Tailwind CSS is already part of the project's technology stack.
- It provides simple and effective utility classes for managing overflow and scrolling behavior.

### Alternatives Considered
- **Custom CSS**: Not preferred as it deviates from the project's design standards (Tailwind CSS).
- **Third-party libraries**: Overkill for a simple horizontal scroll.
