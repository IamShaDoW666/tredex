# Data Model Specification

**Date**: 2025-09-10

This document outlines the data structures for the `Product` and `Category` entities, based on the existing Mongoose schemas found in the `model/` directory.

## 1. Product Entity

Represents an item available for sale in the store.

**Source Schema**: `model/productSchema.ts`

| Attribute     | Type                | Description                                                                 |
|---------------|---------------------|-----------------------------------------------------------------------------|
| `name`        | String              | The name of the product.                                                    |
| `images`      | Array of Strings    | A list of URLs pointing to the product images.                              |
| `price`       | Number              | The price of the product.                                                   |
| `productType` | String              | The type of product (e.g., "Sneaker").                                      |
| `available`   | Boolean             | Indicates if the product is currently in stock and available for purchase.  |
| `description` | String              | A detailed description of the product.                                      |
| `category`    | ObjectId (ref: 'Category') | A reference to the `Category` this product belongs to. Can be null if uncategorized. |

**Relationships**:
-   A `Product` has a many-to-one relationship with a `Category` (many products can belong to one category).

## 2. Category Entity

Represents a category used to group products.

**Source Schema**: `model/categorySchema.ts`

| Attribute     | Type   | Description                                         |
|---------------|--------|-----------------------------------------------------|
| `name`        | String | The name of the category (e.g., "Running", "Lifestyle"). |
| `description` | String | A short description of the category.                |

**Relationships**:
-   A `Category` has a one-to-many relationship with `Product` (one category can have many products).

## 3. Uncategorized Products

As per the clarified specification, if a `Category` is deleted, any `Product` associated with it will have its `category` field set to `null`. This ensures that products are not inadvertently deleted when a category is removed.