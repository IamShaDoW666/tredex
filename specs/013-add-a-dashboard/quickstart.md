# Quickstart for Product Edit Page

## Testing the Feature

1.  **Navigate to the product edit page**:
    - Go to `http://localhost:3000/dashboard/products`. You should see a list of products.
    - Click on the "Edit" button for a product. This will take you to `http://localhost:3000/dashboard/product/<product-id>/edit`.

2.  **Verify the form is hydrated**:
    - The form fields (name, description, price, etc.) should be pre-filled with the data of the product you selected.

3.  **Update the product**:
    - Change some of the values in the form.
    - Click the "Update Product" button.

4.  **Verify the update**:
    - You should see a success message.
    - You should be redirected to the product list page, where you should see the updated information for the product.

5.  **Test validation**:
    - Try to submit the form with invalid data (e.g., an empty name or a negative price).
    - You should see an error message, and the form should not submit.