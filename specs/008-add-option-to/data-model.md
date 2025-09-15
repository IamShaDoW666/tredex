# Data Model: Product Variants

## Entities

### Product
Represents a sneaker available for purchase.

**Fields**:
- `id`: string (unique identifier)
- `name`: string
- `description`: string
- `price`: number
- `images`: string[] (URLs to product images)
- `sizes`: ProductVariant[] (Array of available sizes)

### ProductVariant
Represents a specific size of a product.

**Fields**:
- `size`: string (e.g., "9", "10.5")
- `stock_status`: string (e.g., "in_stock", "out_of_stock")

## Relationships
- A `Product` has many `ProductVariants`.
