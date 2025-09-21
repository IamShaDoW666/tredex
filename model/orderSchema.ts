import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  extraDetails: { type: String },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
