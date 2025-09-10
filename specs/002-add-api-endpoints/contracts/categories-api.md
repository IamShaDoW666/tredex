# API Contract: Categories

**Version**: 1.0
**Base Path**: `/api/categories`

This document defines the contract for the Categories API, which provides CRUD functionality for category data.

---

### GET /api/categories

-   **Description**: Retrieves a list of all categories.
-   **Success Response (200 OK)**:
    ```json
    {
      "data": [
        {
          "_id": "60d5f1b3e6b3f3b3e8b3f8b4",
          "name": "Running",
          "description": "Shoes for running"
        }
      ]
    }
    ```
-   **Error Response (500 Internal Server Error)**:
    ```json
    { "error": { "message": "An unexpected error occurred." } }
    ```

### GET /api/categories/{id}

-   **Description**: Retrieves a single category by its unique ID.
-   **Success Response (200 OK)**:
    ```json
    {
      "data": {
        "_id": "60d5f1b3e6b3f3b3e8b3f8b4",
        "name": "Running",
        "description": "Shoes for running"
      }
    }
    ```
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Category not found." } }
    ```

### POST /api/categories

-   **Description**: Creates a new category.
-   **Request Body**:
    ```json
    {
      "name": "Lifestyle",
      "description": "Everyday shoes"
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

### PUT /api/categories/{id}

-   **Description**: Updates an existing category.
-   **Request Body**: Same as POST.
-   **Success Response (200 OK)**:
    ```json
    { "data": { "_id": "updated_id", ... } }
    ```
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Category not found." } }
    ```

### DELETE /api/categories/{id}

-   **Description**: Deletes a category.
-   **Success Response (204 No Content)**.
-   **Error Response (404 Not Found)**:
    ```json
    { "error": { "message": "Category not found." } }
    ```