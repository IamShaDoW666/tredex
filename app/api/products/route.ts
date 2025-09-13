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

    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const order = searchParams.get('order');
    const category = searchParams.get('category');
    const size = searchParams.get('size');
    const color = searchParams.get('color');
    const brand = searchParams.get('brand');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    const filter: any = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) {
      filter.category = { $in: category.split(',') };
    }

    if (size) {
      filter.size = { $in: size.split(',') };
    }

    if (color) {
      filter.color = { $in: color.split(',') };
    }

    if (brand) {
      filter.brand = { $in: brand.split(',') };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) {
        filter.price.$gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        filter.price.$lte = parseFloat(maxPrice);
      }
    }

    const sortOrder: any = {};
    if (sort) {
      sortOrder[sort] = order === 'desc' ? -1 : 1;
    }

    const products = await Product.find(filter).sort(sortOrder).skip(skip).limit(limit);
    const totalProducts = await Product.countDocuments(filter);

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
