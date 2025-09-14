import dbConnect from '@/lib/db';
import Product from '@/model/productSchema';
import NextNodeServer from 'next/dist/server/next-server';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }
    return NextResponse.json({ data: product });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const body = await request.json();
    const { name, price } = body;
    if (!id) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name and price are required.' } }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    if (!updatedProduct) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }

    return NextResponse.json({ data: updatedProduct });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ error: { message: 'Product not found.' } }, { status: 404 });
    }
    return new NextResponse(null, { status: 204 });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
