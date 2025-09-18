"use server"

import dbConnect from "@/lib/db";
import Product from "@/model/productSchema";

export async function getProductById(id: string) {
  try {
    await dbConnect();
    const product = await Product.findById(id).populate('category');
    return {
      status: true,
      data: JSON.parse(JSON.stringify(product)),
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: "An error occurred while fetching the product.",
    };
  }
}

export async function getProductsWithCategories({
  page = 1,
  limit = 10,
  search,
  sort,
  order,
  category,
  size,
  color,
  brand,
  minPrice,
  maxPrice,
}: {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  order?: string;
  category?: string;
  size?: string;
  color?: string;
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
}) {
  try {
    await dbConnect();

    const query: any = {};

    // Apply search filter
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // Apply category filter
    if (category) {
      query.category = category;
    }

    // Apply size filter (assuming sizes is an array of strings)
    if (size) {
      query.sizes = size;
    }

    // Apply price range filter
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = parseFloat(minPrice);
      } 
      if (maxPrice) {
        query.price.$lte = parseFloat(maxPrice);
      }
    }

    // Apply color and brand filters (these will only work if these fields are added to the Product schema)
    if (color) {
      query.color = color;
    }
    if (brand) {
      query.brand = brand;
    }

    const skip = (page - 1) * limit;

    let productsQuery = Product.find(query).populate("category");

    // Apply sorting
    if (sort && order) {
      const sortOrder = order === 'desc' ? -1 : 1;
      productsQuery = productsQuery.sort({ [sort]: sortOrder });
    } else if (sort) {
      productsQuery = productsQuery.sort({ [sort]: 1 }); // Default to ascending if order is not specified
    }

    const products = await productsQuery.skip(skip).limit(limit);
    const totalProducts = await Product.countDocuments(query); // Count with filters
    const totalPages = Math.ceil(totalProducts / limit);

    const nextPage = page < totalPages ? page + 1 : null;

    return {
      status: true,
      data: {
        products: JSON.parse(JSON.stringify(products)),
        nextPage,
        totalPages,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      error: "An error occurred while fetching products.",
    };
  }
}
