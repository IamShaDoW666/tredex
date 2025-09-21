import mongoose, { Schema, model, Document, Types } from 'mongoose';
import { IProduct } from './productSchema';

export interface IBrand extends Document {
  name: string;
  products: IProduct[] | [Types.ObjectId]
}

const brandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: [true, 'Brand name is required.'],
      trim: true,
      unique: true,
      maxlength: [250, 'Brand name cannot exceed 50 characters.'],
    },
  },
  { timestamps: true }
);

const Brand = mongoose.models.Brand || model<IBrand>('Brand', brandSchema);

export default Brand;
