# Research & Discovery

## 1. Routing

The project uses the Next.js App Router. The file structure in the `app` directory dictates the routes. A new route for the product detail page can be created by adding a new directory structure like `app/products/[id]/page.tsx`. The `[id]` part will be a dynamic segment representing the product ID.

## 2. Data Fetching

The `hooks/use-products.ts` file already contains a hook `useProduct(id: string)` which uses React Query to fetch a single product from the API endpoint `/api/products/${id}`. This hook can be used directly in the product detail page component to fetch the required data.

## 3. UI Components

The `components/ui` directory contains a rich set of ShadCN components that can be used to build the product detail page. This includes components for layout, typography, image display, and more. Reusing these components will ensure consistency with the existing design. The `app/page.tsx` uses a `ProductGrid` component, which likely contains `ProductCard` components. The click handler on these cards will need to be updated to navigate to the new product detail page.

## 4. Product Schema

The `model/productSchema.ts` file defines the `IProduct` interface, which details the structure of the product data. The key fields for the product detail page are:
- `name` (string)
- `images` (array of strings)
- `price` (number)
- `description` (string)
- `sex` (string)
- `productType` (string)

This information is sufficient to design the data display on the product detail page.
