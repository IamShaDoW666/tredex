# Quickstart Guide

This guide provides the essential steps to get started with implementing the product detail page.

## 1. Create the Route

Create a new file at `app/products/[id]/page.tsx`. This will be the main component for the product detail page.

## 2. Fetch Product Data

In `app/products/[id]/page.tsx`, use the `useProduct` hook from `hooks/use-products.ts` to fetch the product data. The product ID can be extracted from the URL parameters.

## 3. Build the UI

Use the ShadCN components from `components/ui` to build the UI as described in the UI Contract. Create the necessary components like `ProductImageGallery` and `ProductInfo` inside the `components/feature/product-detail` directory.

## 4. Update Product Cards

Modify the `ProductCard` component to link to the new product detail page. The link should pass the product ID in the URL.
