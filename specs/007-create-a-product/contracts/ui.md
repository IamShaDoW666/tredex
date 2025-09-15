# UI Contract

## Product Detail Page

This page will display the details of a single product. It will be composed of the following components:

### 1. Product Image Gallery

- A component to display the product images. It should allow the user to view all images, possibly with a carousel or a grid of thumbnails.

### 2. Product Information

- A section to display the product's name, price, and other key details.
- It should include:
    - Product name (`h1`)
    - Product price (`p`)
    - Add to cart button (`Button`)
    - Product description (`p`)

### 3. Product Actions

- A section with actions the user can take, such as selecting a size or color, and adding the product to the cart.

## Component Breakdown

- **`ProductDetailPage`**: The main page component.
- **`ProductImageGallery`**: A client component to display product images.
- **`ProductInfo`**: A component to display product information.
- **`AddToCartButton`**: A client component button to add the product to the cart.
