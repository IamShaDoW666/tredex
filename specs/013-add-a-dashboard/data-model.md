# Data Model for Product

The data model for a product will be defined using a Mongoose schema.

## Entity: Product

- **Source File**: `model/productSchema.ts` (This file will be updated)
- **Description**: Represents a product in the system.

### Mongoose Schema

```typescript
import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
}, { timestamps: true });

const Product = models.Product || model('Product', productSchema);

export default Product;
```

### Relationships

- Belongs to a `Brand` via `brand` field (ObjectId).
- Belongs to a `Category` via `category` field (ObjectId).