# Data Model

This document outlines the data entities for the filter, sort, and search functionality.

## Entities

### Product

Represents a product in the system.

-   **name**: `string` - The name of the product.
-   **description**: `string` - A description of the product.
-   **price**: `number` - The price of the product.
-   **category**: `string` - The category of the product.
-   **size**: `string` - The size of the product.
-   **color**: `string` - The color of the product.
-   **brand**: `string` - The brand of the product.
-   **createdAt**: `Date` - The date the product was created.

### FilterCriteria

Represents the selected filter options.

-   **category**: `string[]` - An array of selected categories.
-   **size**: `string[]` - An array of selected sizes.
-   **color**: `string[]` - An array of selected colors.
-   **brand**: `string[]` - An array of selected brands.
-   **priceRange**: `{ min: number; max: number }` - The selected price range.

### SortCriteria

Represents the selected sort option.

-   **field**: `'name' | 'price' | 'createdAt'` - The field to sort by.
-   **order**: `'asc' | 'desc'` - The sort order.

### SearchQuery

Represents the text entered by the user in the search bar.

-   **query**: `string` - The search query.
