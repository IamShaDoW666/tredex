import { ICategory } from "@/model/categorySchema";

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string | null | undefined;
}


export interface IProductData {
  _id: string; // Assuming _id is a string in mock data
  name: string;
  images: string[];
  price: number;
  discountPrice?: number;
  sizes: string[];
  category: string | ICategory; // Can be category ID or populated category object
  available: boolean;
  is_new: boolean;
  description?: string;
  sex: "Men" | "Women" | "Unisex";
  productType?: string;
}

