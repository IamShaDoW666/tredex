# Data Model: Brand

## Entity: Brand

Represents a product brand.

### Fields

*   `id`: `string` (Primary Key, UUID)
*   `name`: `string` (Unique, Not Null)
*   `description`: `string` (Optional)
*   `createdAt`: `datetime` (Not Null)
*   `updatedAt`: `datetime` (Not Null)

### Relationships

*   **Has many**: `Product`s