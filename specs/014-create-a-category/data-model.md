# Data Model: Category

## Entity

**Category**

Represents a product category in the e-commerce system.

## Fields

- `_id`: `ObjectId` (Primary Key) - Unique identifier for the category.
- `name`: `String` (Required, Unique) - The name of the category.
- `description`: `String` (Optional) - A brief description of the category.

## Validation Rules

- `name`: Must be a non-empty string and unique across all categories.
