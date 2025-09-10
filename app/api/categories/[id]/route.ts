import dbConnect from '@/lib/db';
import Category from '@/model/categorySchema';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const category = await Category.findById(params.id);
    if (!category) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }
    return NextResponse.json({ data: category });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name is required.' } }, { status: 400 });
    }

    const updatedCategory = await Category.findByIdAndUpdate(params.id, body, { new: true });
    if (!updatedCategory) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }

    return NextResponse.json({ data: updatedCategory });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const deletedCategory = await Category.findByIdAndDelete(params.id);
    if (!deletedCategory) {
      return NextResponse.json({ error: { message: 'Category not found.' } }, { status: 404 });
    }

    // Set category to null for products that belonged to the deleted category
    await Product.updateMany({ category: params.id }, { $set: { category: null } });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}
