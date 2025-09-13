# Products API Contract

This document defines the API contract for the products endpoint.

## GET /api/products

Retrieves a list of products with filtering, sorting, and searching capabilities.

### Query Parameters

-   **`search`**: `string` (optional) - A search query to filter products by name or description.
-   **`sort`**: `string` (optional) - The field to sort by (e.g., `price`, `name`, `createdAt`).
-   **`order`**: `string` (optional) - The sort order (`asc` or `desc`).
-   **`category`**: `string` (optional) - A comma-separated list of categories to filter by.
-   **`size`**: `string` (optional) - A comma-separated list of sizes to filter by.
-   **`color`**: `string` (optional) - A comma-separated list of colors to filter by.
-   **`brand`**: `string` (optional) - A comma-separated list of brands to filter by.
-   **`minPrice`**: `number` (optional) - The minimum price for the price range filter.
-   **`maxPrice`**: `number` (optional) - The maximum price for the price range filter.
-   **`page`**: `number` (optional, default: 1) - The page number for pagination.
-   **`limit`**: `number` (optional, default: 10) - The number of products per page.

### Responses

-   **200 OK**: A successful response with a paginated list of products.
    ```json
    {
      "data": [
        {
          "id": "string",
          "name": "string",
          "price": "number",
          "..."
        }
      ],
      "pagination": {
        "currentPage": "number",
        "totalPages": "number",
        "totalProducts": "number"
      }
    }
    ```
-   **400 Bad Request**: If the request has invalid query parameters.
-   **500 Internal Server Error**: If an unexpected error occurs.
