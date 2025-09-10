import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description?: string;
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
}, {
  timestamps: true,
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;

