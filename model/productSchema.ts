import { Schema, model, Document } from 'mongoose';

export interface IProductData {
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  productType: "Sneaker" | "Watch";
  available: boolean;
  description?: string;
}

export interface IProduct extends IProductData, Document {
  _id: string;
  images: string[];
  price: number;
  discountPrice?: number;
  productType: "Sneaker" | "Watch"
  available: boolean;
  description?: string;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
    trim: true,
    unique: true,
    maxlength: [250, 'Product name cannot exceed 50 characters.'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters.'],
  },
  images: {
    type: [String],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
    min: [0, 'Price cannot be negative.'],
  },
  discountPrice: {
    type: Number,
    min: [0, 'Discount price cannot be negative.'],
  },
  available: {
    type: Boolean,
    default: true,
  },
  productType: {
    type: String,
    enum: ["Sneaker", "Watch"],
    default: "Sneaker",
  }
}, {
  timestamps: true,
});

const Product = model<IProduct>('Product', productSchema);

export default Product;

