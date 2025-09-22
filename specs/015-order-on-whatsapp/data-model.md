# Data Model: Order on WhatsApp

This document defines the data model for the entities related to the "Order on WhatsApp" feature.

## Entities

### Order

Represents a customer's order placed through the WhatsApp channel.

**Fields**:

- `name`: String, required
  - The full name of the customer.
- `phone`: String, required
  - The phone number of the customer.
- `address`: String, required
  - The shipping address of the customer.
- `extraDetails`: String, optional
  - Any extra details or notes provided by the customer.
- `product`: ObjectId, required, ref: 'Product'
  - A reference to the product being ordered.
- `createdAt`: Date, default: Date.now
  - The timestamp when the order was created.