import dbConnect from '@/lib/db';
import Category from '@/model/categorySchema';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }
    return NextResponse.json({ data: category });
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

    const updatedCategory = await Category.findByIdAndUpdate(id, body, { new: true });
    if (!updatedCategory) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }

    return NextResponse.json({ data: updatedCategory });
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
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }

    // Set category to null for products that belonged to the deleted category
    await Product.updateMany({ category: id }, { $set: { category: null } });

    return new NextResponse(null, { status: 204 });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
