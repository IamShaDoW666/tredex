
"use server";

import { z } from "zod";
import dbConnect from "@/lib/db";
import Brand from "@/model/brandSchema";
import { IBrand } from "@/model/brandSchema";

const brandSchema = z.object({
  name: z.string().min(1, "Brand name is required.").max(250),
  description: z.string().max(500).optional(),
});

export async function createBrandAction(data: unknown) {
  const result = brandSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  await dbConnect();

  try {
    const newBrand = new Brand({
      name: result.data.name,
      description: result.data.description,
    });

    await newBrand.save();
    return { success: true, data: JSON.parse(JSON.stringify(newBrand)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to create brand." };
  }
}

export async function getAllBrands(): Promise<{ success: boolean; data?: IBrand[]; error?: string }> {
  await dbConnect();
  try {
    const brands = await Brand.find({});
    return { success: true, data: JSON.parse(JSON.stringify(brands)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to fetch brands." };
  }
}

export async function getBrandById(id: string): Promise<{ success: boolean; data?: IBrand; error?: string }> {
  await dbConnect();

  try {
    const brand = await Brand.findById(id);
    if (!brand) {
      return { success: false, error: "Brand not found." };
    }
    return { success: true, data: JSON.parse(JSON.stringify(brand)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to fetch brand." };
  }
}

const updateBrandSchema = z.object({
  name: z.string().min(1, "Brand name is required.").max(250).optional(),
  description: z.string().max(500).optional(),
});

export async function updateBrandAction(id: string, data: unknown) {
  const result = updateBrandSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  await dbConnect();

  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, result.data, { new: true });
    if (!updatedBrand) {
      return { success: false, error: "Brand not found." };
    }
    return { success: true, data: JSON.parse(JSON.stringify(updatedBrand)) };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to update brand." };
  }
}

export async function deleteBrandAction(id: string): Promise<{ success: boolean; error?: string }> {
  await dbConnect();

  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (!deletedBrand) {
      return { success: false, error: "Brand not found." };
    }
    return { success: true };
  } catch (error) {
    console.log(error)
    return { success: false, error: "Failed to delete brand." };
  }
}
