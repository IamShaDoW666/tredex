import { Schema, model, Document, Types } from 'mongoose';

export interface IProductData {
  _id: string; // Assuming _id is a string in mock data
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  sizes: string[]
  productType: "Sneaker" | "Watch";
  available: boolean;
  is_new: boolean;
  description?: string;
  sex: "Men" | "Women" | "Unisex";
}

export interface IProduct extends Document {
  name: string;
  images: string[];
  sizes: string[];
  price: number;
  discountPrice?: number;
  productType: "Sneaker" | "Watch";
  available: boolean;
  is_new: boolean;
  description?: string;
  sex: "Men" | "Women" | "Unisex";
}


const productSchema = new Schema<IProduct>({
  _id: Types.ObjectId,
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
  sizes: {
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
  is_new: {
    type: Boolean,
    default: false,
  },
  sex: {
    type: String,
    enum: ["Men", "Women", "Unisex"],
    default: "Men",
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

