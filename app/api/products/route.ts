import dbConnect from '@/lib/db';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);
    const skip = (page - 1) * limit;

    const products = await Product.find().skip(skip).limit(limit);
    const totalProducts = await Product.countDocuments();

    return NextResponse.json({
      data: products,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: page,
    });
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
    const { name, price } = body;

    if (!name || !price) {
      return NextResponse.json({ error: { message: 'Invalid input data. Name and price are required.' } }, { status: 400 });
    }

    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();

    return NextResponse.json({ data: savedProduct }, { status: 201 });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
