# Data Model

The data model for the product detail page is based on the existing `IProduct` interface defined in `model/productSchema.ts`.

## Product

- **`name`**: `string` - The name of the product.
- **`images`**: `string[]` - An array of URLs for the product images.
- **`price`**: `number` - The price of the product.
- **`discountPrice`**: `number` (optional) - The discounted price of the product.
- **`productType`**: `"Sneaker" | "Watch"` - The type of the product.
- **`available`**: `boolean` - Whether the product is available for purchase.
- **`is_new`**: `boolean` - Whether the product is new.
- **`description`**: `string` (optional) - A detailed description of the product.
- **`sex`**: `"Men" | "Women" | "Unisex"` - The intended gender for the product.
