import dbConnect from '@/lib/db';
import Brand from '@/model/brandSchema';
import { NextResponse } from 'next/server';

export async function GET() {
  await dbConnect();

  try {
    const brands = await Brand.find();
    return NextResponse.json({ data: brands });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(error)
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

    const newBrand = new Brand(body);
    const savedBrand = await newBrand.save();

    return NextResponse.json({ data: savedBrand }, { status: 201 });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
