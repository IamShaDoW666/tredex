import { NextRequest, NextResponse } from 'next/server';
import { orderSchema } from '@/zod/order-schema';
import { Order } from '@/model/orderSchema';
import dbConnect from '@/lib/db';
import Product from '@/model/productSchema';

export async function POST(req: NextRequest) {
  try {
    await dbConnect()

    const body = await req.json();
    const validation = orderSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ message: 'Invalid request body', errors: validation.error }, { status: 400 });
    }

    const { name, phone, address, extraDetails, product } = validation.data;
    const prod = await Product.findById(product)
    const newOrder = new Order({
      name,
      phone,
      address,
      extraDetails,
      product,
      amount: prod.price
    });

    const savedOrder = await newOrder.save();

    return NextResponse.json(savedOrder, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
