import dbConnect from '@/lib/db';
import Brand from '@/model/brandSchema';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const brand = await Brand.findById(id);
    if (!brand) {
      return NextResponse.json({ error: { message: 'Brand not found.' } }, { status: 404 });
    }
    return NextResponse.json({ data: brand });
  } catch {
    const errorMessage = 'An unexpected error occurred.';
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name is required.' } }, { status: 400 });
    }

    const updatedBrand = await Brand.findByIdAndUpdate(id, body, { new: true });
    if (!updatedBrand) {
      return NextResponse.json({ error: { message: 'Brand not found.' } }, { status: 404 });
    }

    return NextResponse.json({ data: updatedBrand });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;

    const products = await Product.find({ brand: id });
    if (products.length > 0) {
      return NextResponse.json({ error: { message: 'This brand cannot be deleted because it is associated with existing products. Please re-assign the products to another brand before deleting.' } }, { status: 400 });
    }

    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (!deletedBrand) {
      return NextResponse.json({ error: { message: 'Brand not found.' } }, { status: 404 });
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
