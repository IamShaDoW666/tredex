import mongoose, { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description?: string;
  products?: string[]; // products can be an array of product IDs
}


const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: [true, 'Category name is required.'],
    trim: true,
    unique: true,
    maxlength: [250, 'Category name cannot exceed 50 characters.'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters.'],
  },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, {
  timestamps: true,
});

const Category = (mongoose.models.Category || model<ICategory>('Category', categorySchema));

export default Category;
