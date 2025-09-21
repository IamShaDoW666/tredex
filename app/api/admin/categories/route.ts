import dbConnect from '@/lib/db';
import Category from '@/model/categorySchema';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find();
    return NextResponse.json({ data: categories });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
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
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
