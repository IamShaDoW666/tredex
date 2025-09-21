
import mongoose, { Schema, model, Document } from 'mongoose';
import { IProduct } from './productSchema';

export interface IBrand extends Document {
  name: string;
  products?: string[] | IProduct[]
}


const brandSchema = new Schema<IBrand>({
  name: {
    type: String,
    required: [true, 'Brand name is required.'],
    trim: true,
    unique: true,
    maxlength: [250, 'Brand name cannot exceed 50 characters.'],
  },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, {
  timestamps: true,
});

const Brand = (mongoose.models.Brand || model<IBrand>('Brand', brandSchema));

export default Brand;
