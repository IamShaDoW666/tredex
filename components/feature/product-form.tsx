'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { productSchema } from '@/zod/product-schema';
import { createProduct, updateProduct } from '@/actions/product-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { useRouter } from 'next/navigation';
import { useCategories } from '@/hooks/use-categories';
import { useBrands } from '@/hooks/use-brands';
import { ICategory } from '@/model/categorySchema';
import { IProduct } from '@/model/productSchema';
import { IBrand } from '@/model/brandSchema';

export type ProductFormValues = z.infer<typeof productSchema>;

interface ProductFormProps {
  product?: IProduct;
}

export function ProductForm({ product }: ProductFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const { data: categories } = useCategories()
  const { data: brands } = useBrands()
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: product?.name || "",
      category: (product?.category as ICategory)?._id as string || "",
      productType: product?.productType || "",
      brand: (product?.brand as IBrand)?._id as string || "",
      price: product?.price || 0,
      discountPrice: product?.discountPrice || undefined,
      description: product?.description || "",
      available: product?.available ?? true,
      is_new: product?.is_new ?? false,
      sex: product?.sex || 'Men',
      sizes: product?.sizes.join(',') || ""
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    startTransition(async () => {
      if (product) {
        const result = await updateProduct(product._id as string, data);
        if (result.message.includes('successfully')) {
          toast.success(result.message);
          router.push("/dashboard/products")
        } else {
          toast.error(result.message);
        }
      } else {
        const result = await createProduct(data);
        if (result.message.includes('successfully')) {
          toast.success(result.message);
          router.push("/dashboard/products")
        } else {
          toast.error(result.message);
        }
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <FormField name="name" render={({ field }) => <FormItem>
            <Label htmlFor="name">Name</Label>
            <FormControl>
              <Input id="name" {...field} />
            </FormControl>
          </FormItem>} />
        </div>
        <div>
          <FormField name="description" render={({ field }) => <FormItem>
            <Label htmlFor="description">Description</Label>
            <FormControl>
              <Textarea id="description" {...field} />
            </FormControl>
          </FormItem>} />
        </div>
        <div>
          <FormField name="price" render={({ field }) => <FormItem>
            <Label htmlFor="price">Price</Label>
            <FormControl>
              <Input id="price" {...field} value={field.value ?? ''} />
            </FormControl>
          </FormItem>} />
        </div>
        <div>
          <FormField name="discountPrice" render={({ field }) => <FormItem>
            <Label htmlFor="discountPrice">Pre-Discount</Label>
            <FormControl>
              <Input id="discountPrice" {...field} value={field.value ?? ''} />
            </FormControl>
          </FormItem>} />
        </div>
        <div>
          <FormField name="sizes" render={({ field }) => <FormItem>
            <Label htmlFor="sizes">Sizes (comma-separated)</Label>
            <FormControl>
              <Input id="sizes" {...field} />
            </FormControl>
          </FormItem>} />
        </div>

        <div className='flex justify-between md:justify-start space-x-4'>
          <FormField name="category" render={({ field }) => <FormItem>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories?.data?.map((category) => <SelectItem value={category._id as string} key={category._id as string}>{category.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </FormItem>} />
          <FormField name="brand" render={({ field }) => <FormItem>
            <Label htmlFor="brand">Brand</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {brands?.data?.map((brand) => <SelectItem value={brand._id as string} key={brand._id as string}>{brand.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </FormItem>} />
          <FormField name="sex" render={({ field }) => <FormItem>
            <Label htmlFor="sex">Sex</Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select sex" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Unisex">Unisex</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>} />
        </div>

        <div>
          <FormField name="productType" render={({ field }) => <FormItem>
            <Label htmlFor="productType">Product Type</Label>
            <FormControl>
              <Input id="productType" {...field} />
            </FormControl>
          </FormItem>} />
        </div>

        <div className="flex items-center space-x-2">
          <FormField name="available" render={({ field }) => <FormItem>
            <div className='flex items-center gap-x-2'>
              <FormControl>
                <Checkbox id="available" {...field} checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <Label htmlFor="available">Available for sale</Label>
            </div>
          </FormItem>} />
        </div>

        <div className="flex items-center space-x-2">
          <FormField name="is_new" render={({ field }) => <FormItem>
            <div className='flex items-center gap-x-2'>
              <FormControl>
                <Checkbox id="is_new" {...field} checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <Label htmlFor="is_new">New arrival</Label>
            </div>
          </FormItem>} />
        </div>

        <div>
          <FormField name="images" render={({ field }) => <FormItem>
            <Label htmlFor="images">Images</Label>
            <FormControl>
              <Input id="images" type="file" multiple onChange={async (e) => {
                field.onChange(Array.from(e.target.files!))
              }} />
            </FormControl>
            <p className="text-sm text-muted-foreground">
              For demonstration, image compression is done in the browser. In a real app, you would upload to a storage service.
            </p>
          </FormItem>} />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? (product ? 'Updating...' : 'Creating...') : (product ? 'Update Product' : 'Create Product')}
        </Button>
      </form>
    </Form>
  );
}
