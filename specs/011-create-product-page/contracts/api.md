# API Contract: Product Creation

## Endpoint: `POST /api/products`

-   **Description**: Creates a new product.
-   **Authentication**: Admin only.

### Request Body

-   **Content-Type**: `multipart/form-data` (to handle image uploads)
-   The request body will contain the fields defined in the `Product` data model.

### Responses

-   **201 Created**: The product was created successfully.
    ```json
    {
      "message": "Product created successfully",
      "product": {
        // The created product object
      }
    }
    ```
-   **400 Bad Request**: The request body is invalid.
    ```json
    {
      "error": "Invalid request body",
      "details": {
        // Details about the validation errors
      }
    }
    ```
-   **401 Unauthorized**: The user is not authenticated.
-   **403 Forbidden**: The user is not an admin.
