# API Contract: Products

**Version**: 1.0
**Base Path**: `/api/products`

This document defines the contract for the Products API, which provides CRUD functionality for product data.

---

### GET /api/products

-   **Description**: Retrieves a paginated list of all products.
-   **Query Parameters**:
    -   `page` (number, optional, default: 1): The page number to retrieve.
    -   `limit` (number, optional, default: 20): The number of items per page.
-   **Success Response (200 OK)**:
    ```json
    {
      "data": [
        {
          "_id": "60d5f1b3e6b3f3b3e8b3f8b3",
          "name": "Nike Air Max 90",
          "images": ["url1", "url2"],
          "price": 120,
          "productType": "Sneaker",
          "available": true,
          "description": "...",
          "category": "60d5f1b3e6b3f3b3e8b3f8b4"
        }
      ],
      "totalPages": 5,
      "currentPage": 1
    }
    ```
-   **Error Response (500 Internal Server Error)**:
    ```json
    { "error": { "message": "An unexpected error occurred." } }
    ```

### GET /api/products/{id}

-   **Description**: Retrieves a single product by its unique ID.
-   **Success Response (200 OK)**:
    ```json
    {
      "data": {
        "_id": "60d5f1b3e6b3f3b3e8b3f8b3",
        "name": "Nike Air Max 90",
        // ... other fields
      }
    }
    ```
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Product not found." } }
    ```

### POST /api/products

-   **Description**: Creates a new product.
-   **Request Body**:
    ```json
    {
      "name": "New Balance 550",
      "price": 110,
      "description": "A retro basketball sneaker.",
      "images": ["url1"],
      "category": "60d5f1b3e6b3f3b3e8b3f8b4"
      // ... other fields
    }
    ```
-   **Success Response (201 Created)**:
    ```json
    { "data": { "_id": "newly_created_id", ... } }
    ```
-   **Error Response (400 Bad Request)**:
    ```json
    { "error": { "message": "Invalid input data." } }
    ```

### PUT /api/products/{id}

-   **Description**: Updates an existing product.
-   **Request Body**: Same as POST.
-   **Success Response (200 OK)**:
    ```json
    { "data": { "_id": "updated_id", ... } }
    ```
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Product not found." } }
    ```

### DELETE /api/products/{id}

-   **Description**: Deletes a product.
-   **Success Response (204 No Content)**.
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Product not found." } }
    ```