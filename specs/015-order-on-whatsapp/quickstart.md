# Quickstart: Order on WhatsApp

This document provides instructions on how to test and validate the "Order on WhatsApp" feature.

## Testing Steps

1.  **Navigate to a Product Page**:
    -   Start the application and go to any product details page.

2.  **Open the Order Modal**:
    -   Click on the "Order on WhatsApp" button.
    -   **Expected**: A modal window should appear with a form.

3.  **Submit the Form with Valid Data**:
    -   Fill in all the required fields: Name, Phone, and Address.
    -   Click the "Submit" button.
    -   **Expected**: The modal should close, and a new tab or WhatsApp application should open with a pre-filled message.

4.  **Verify the Order in the Database**:
    -   Connect to the MongoDB database.
    -   Check the `orders` collection.
    -   **Expected**: A new document should exist with the details submitted in the form.

5.  **Test Form Validation**:
    -   Open the order modal again.
    -   Try to submit the form with empty required fields.
    -   **Expected**: An error message should be displayed for each invalid field, and the form should not submit.