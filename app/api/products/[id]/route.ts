import dbConnect from '@/lib/db';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }
    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const body = await request.json();
    const { name, price } = body;

    if (!name || !price) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name and price are required.' } }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedProduct) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }

    return NextResponse.json({ data: updatedProduct });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const deletedProduct = await Product.findByIdAndDelete(params.id);
    if (!deletedProduct) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}
