import mongoose, { Document, Schema, Types } from 'mongoose';
import { IProduct } from './productSchema';
export interface IOrder extends Document {
  name: string
  phone: string
  address: string
  extraDetails: string
  product: IProduct | Types.ObjectId
  amount: number
}
const orderSchema = new Schema<IOrder>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  extraDetails: { type: String },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  amount: { type: Number, required: [true, "Amount is required"] },
}, { timestamps: true });

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
