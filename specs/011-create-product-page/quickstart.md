# Quickstart: Create Product Page

This guide explains how to test the "Create Product Page" feature.

## Prerequisites

-   You must be logged in as an admin user.

## Steps

1.  **Navigate to the "Add Product" page**: The URL for this page will be `/admin/products/new`.
2.  **Fill out the form**: Fill in all the required fields for the new product.
3.  **Upload images**: Select one or more images for the product.
4.  **Submit the form**: Click the "Create Product" button.
5.  **Verify creation**: You should see a success message, and the new product should be visible in the product list.

## Testing Scenarios

-   **Happy Path**: All fields are filled correctly, and the product is created successfully.
-   **Invalid Data**: Try to submit the form with missing or invalid data. Verify that error messages are displayed.
-   **Unauthorized Access**: Try to access the page as a non-admin user. Verify that you are redirected or see a "permission denied" message.
