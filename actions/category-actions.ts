
"use server";

import { z } from "zod";
import dbConnect from "@/lib/db";
import Category, { ICategory } from "@/model/categorySchema";

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required.").max(250),
  description: z.string().max(500).optional(),
});

export async function createCategoryAction(data: unknown) {
  const result = categorySchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  await dbConnect();

  try {
    const newCategory = new Category({
      name: result.data.name,
      description: result.data.description,
    });

    await newCategory.save();
    return { success: true, data: JSON.parse(JSON.stringify(newCategory)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to create category." };
  }
}

export async function getAllCategories(): Promise<{ success: boolean; data?: ICategory[]; error?: string }> {
  await dbConnect();
  try {
    const categories = await Category.find({});
    return { success: true, data: JSON.parse(JSON.stringify(categories)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to fetch categories." };
  }
}

export async function getCategoryById(id: string): Promise<{ success: boolean; data?: ICategory; error?: string }> {
  await dbConnect();

  try {
    const category = await Category.findById(id);
    if (!category) {
      return { success: false, error: "Category not found." };
    }
    return { success: true, data: JSON.parse(JSON.stringify(category)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to fetch category." };
  }
}

const updateCategorySchema = z.object({
  name: z.string().min(1, "Category name is required.").max(250).optional(),
  description: z.string().max(500).optional(),
});

export async function updateCategory(id: string, data: unknown) {
  const result = updateCategorySchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  await dbConnect();

  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, result.data, { new: true });
    if (!updatedCategory) {
      return { success: false, error: "Category not found." };
    }
    return { success: true, data: JSON.parse(JSON.stringify(updatedCategory)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to update category." };
  }
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  await dbConnect();

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return { success: false, error: "Category not found." };
    }
    return { success: true };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to delete category." };
  }
}
