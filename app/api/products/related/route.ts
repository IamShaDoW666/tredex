import { NextResponse } from 'next/server';
import Product from '@/model/productSchema';
import dbConnect from '@/lib/db';
import { sleep } from '@/lib/utils';

export async function GET(request: Request) {
  await dbConnect();
  await sleep(1500)
  const { searchParams } = new URL(request.url);
  const excludeId = searchParams.get('excludeId');
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const query: any = {};    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const products = await Product.aggregate([
      { $match: query },
      { $sample: { size: limit } },
    ]);

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching related products:', error);
    return NextResponse.json({ message: 'Error fetching related products' }, { status: 500 });
  }
}
