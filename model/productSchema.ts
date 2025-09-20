import mongoose, { Schema, model, Document, Types } from 'mongoose';
import { ICategory } from './categorySchema';

export interface IProduct extends Document {
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  sizes: string[];
  category: Types.ObjectId | ICategory // Can be category ID or populated category object
  available: boolean;
  is_new: boolean;
  description?: string;
  sex: "Men" | "Women" | "Unisex";
  productType?: string;
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
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  productType: { type: String },
}, {
  timestamps: true,
});

const Product = (mongoose.models.Product || model('Product', productSchema));

export default Product;
