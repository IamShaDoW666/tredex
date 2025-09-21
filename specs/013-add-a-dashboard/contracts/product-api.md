# Product API Contract

## Update Product

- **Endpoint**: `PATCH /api/products/[id]`
- **Method**: `PATCH`
- **Description**: Updates an existing product.
- **Authentication**: Admin role required.

### Request Body

```json
{
  "name": "string (optional)",
  "description": "string (optional)",
  "price": "number (optional)",
  "brandId": "string (optional)",
  "categoryId": "string (optional)",
  "images": "array of strings (optional)"
}
```

### Responses

- **200 OK**: Product updated successfully.
  ```json
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": "number",
    "brandId": "string",
    "categoryId": "string",
    "images": "array of strings",
    "createdAt": "string",
    "updatedAt": "string"
  }
  ```
- **400 Bad Request**: Invalid data provided.
- **401 Unauthorized**: Not authenticated.
- **403 Forbidden**: Not an admin.
- **404 Not Found**: Product not found.