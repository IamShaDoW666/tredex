# Data Model: Product

## Entity: Product

-   **Description**: Represents an item for sale in the e-commerce store.
-   **Source**: `model/productSchema.ts`

### Fields

| Field           | Type                | Description                               |
| --------------- | ------------------- | ----------------------------------------- |
| `name`          | `string`            | The name of the product.                  |
| `description`   | `string`            | A description of the product.             |
| `images`        | `string[]`          | A list of URLs to product images.         |
| `price`         | `number`            | The price of the product.                 |
| `discountPrice` | `number`            | The discounted price of the product.      |
| `sizes`         | `string[]`          | A list of available sizes.                |
| `category`      | `Types.ObjectId`    | The category the product belongs to.      |
| `available`     | `boolean`           | Whether the product is available for sale.|
| `is_new`        | `boolean`           | Whether the product is a new arrival.     |
| `sex`           | `"Men" \| "Women" \| "Unisex"` | The target gender for the product. |
| `productType`   | `string`            | The type of product.                      |
