'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { productSchema } from '@/lib/product-schema';
import { createProduct } from '@/actions/product-actions';
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
import { IProduct } from '@/model/productSchema';
import { Form, FormField, FormItem } from '../ui/form';

export type ProductFormValues = z.infer<typeof productSchema>;

export function ProductForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      productType: "",
      price: 0,
      description: "",
      discountPrice: 0,
      available: true,
      is_new: false,
      sex: 'Men',
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    startTransition(async () => {
      const result = await createProduct(data);
      if (result.message.includes('successfully')) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <FormField name="name" render={({ field }) => <FormItem>
            <Label htmlFor="name">Name</Label>
            <Input id="price" {...field} />
          </FormItem>} />
        </div>
        <div>
          <FormField name="description" render={({ field }) => <FormItem>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...field} />
          </FormItem>} />
        </div>
        <div>
          <FormField name="price" render={({ field }) => <FormItem>
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" {...field} />
          </FormItem>} />
        </div>
        <div>
          <FormField name="discountPrice" render={({ field }) => <FormItem>
            <Label htmlFor="discountPrice">Discount Price</Label>
            <Input id="discountPrice" type="number" {...field} />
          </FormItem>} />
        </div>
        <div>
          <FormField name="sizes" render={({ field }) => <FormItem>
            <Label htmlFor="sizes">Sizes (comma-separated)</Label>
            <Input id="sizes" {...field} />
          </FormItem>} />
        </div>

        <div>
          <FormField name="category" render={({ field }) => <FormItem>
            <Label htmlFor="category">Category</Label>
            <Input id="category" {...field} />
          </FormItem>} />
        </div>

        <div>
          <FormField name="sex" render={({ field }) => <FormItem>
            <Label htmlFor="sex">Sex</Label>
            <Select onValueChange={(value: IProduct['sex']) => form.setValue('sex', value)} defaultValue="Men">
              <SelectTrigger>
                <SelectValue placeholder="Select sex" />
              </SelectTrigger>
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
            <Input id="productType" {...field} />
          </FormItem>} />
        </div>

        <div className="flex items-center space-x-2">
          <FormField name="available" render={({ field }) => <FormItem>
            <Checkbox id="available" {...field} defaultChecked />
            <Label htmlFor="available">Available for sale</Label>
          </FormItem>} />
        </div>

        <div className="flex items-center space-x-2">
          <FormField name="is_new" render={({ field }) => <FormItem>
            <Checkbox id="is_new" {...field} />
            <Label htmlFor="is_new">New arrival</Label>
          </FormItem>} />
        </div>

        <div>
          <FormField name="images" render={({ field }) => <FormItem>
            <Label htmlFor="images">Images</Label>
            <Input id="images" type="file" multiple onChange={async (e) => {
              field.onChange(Array.from(e.target.files!))
            }} />
            <p className="text-sm text-muted-foreground">
              For demonstration, image compression is done in the browser. In a real app, you would upload to a storage service.
            </p>
          </FormItem>} />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Creating...' : 'Create Product'}
        </Button>
      </form>
    </Form>
  );
}
