import dbConnect from '@/lib/db';
import Brand from '@/model/brandSchema';
import Category from '@/model/categorySchema';
import Product from '@/model/productSchema';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const size = searchParams.get('size');
    const color = searchParams.get('color');
    const brand = searchParams.get('brand');
    const search = searchParams.get('search');

    interface ProductFilter {
      $or?: Array<{ name?: { $regex: string; $options: string }; description?: { $regex: string; $options: string } }>;
      category?: { $in: string[] };
      size?: { $in: string[] };
      color?: { $in: string[] };
      brand?: { $in: string[] };
    }

    const filter: ProductFilter = {};

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }
    if (category) {
      const categories = await Category.find({ name: { $in: category.split(',') } })
      filter.category = { $in: categories.map((cat) => cat._id) };
    }
    if (size) filter.size = { $in: size.split(',') };
    if (color) filter.color = { $in: color.split(',') };
    if (brand) {
      const brands = await Brand.find({ name: { $in: brand.split(',') } })
      filter.brand = { $in: brands.map((brand) => brand._id) };
    }
    const result = await Product.aggregate([
      { $match: filter },
      {
        $group: {
          _id: null,
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
    ]);

    const prices = result[0] || { minPrice: 0, maxPrice: 1000 };

    return NextResponse.json({
      minPrice: prices.minPrice,
      maxPrice: prices.maxPrice,
    });
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
