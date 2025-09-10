import dbConnect from '@/lib/db';
import Category from '@/model/categorySchema';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find();
    return NextResponse.json({ data: categories });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name is required.' } }, { status: 400 });
    }

    const newCategory = new Category(body);
    const savedCategory = await newCategory.save();

    return NextResponse.json({ data: savedCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: { message: 'An unexpected error occurred.' } }, { status: 500 });
  }
}
