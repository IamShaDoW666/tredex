# Data Model: Related Products

## Entities

### Product
Represents a product with attributes relevant for display in the related products section. This entity refers to the existing `IProduct` or `IProductData` interface defined in `model/productSchema.ts`.

**Key Attributes (for related products display)**:
- `_id`: string (unique identifier)
- `name`: string
- `images`: string[] (at least one image for display)
- `price`: number
- `discountPrice`: number (optional)

## Relationships
- Related products are a collection of `Product` entities.
