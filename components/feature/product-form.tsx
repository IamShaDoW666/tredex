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
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { useRouter } from 'next/navigation';

export type ProductFormValues = z.infer<typeof productSchema>;

export function ProductForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      category: "",
      productType: "",
      price: 0,
      description: "",
      available: true,
      is_new: false,
      sex: 'Men',
      sizes: ""
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    startTransition(async () => {
      const result = await createProduct(data);
      if (result.message.includes('successfully')) {
        toast.success(result.message);
        router.push("/dashboard/products")
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
            <Label htmlFor="discountPrice">Discount Price</Label>
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

        <div>
          <FormField name="category" render={({ field }) => <FormItem>
            <Label htmlFor="category">Category</Label>
            <FormControl>
              <Input id="category" {...field} />
            </FormControl>
          </FormItem>} />
        </div>

        <div>
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
            <FormControl>
              <Checkbox id="available" {...field} defaultChecked />
            </FormControl>
            <Label htmlFor="available">Available for sale</Label>
          </FormItem>} />
        </div>

        <div className="flex items-center space-x-2">
          <FormField name="is_new" render={({ field }) => <FormItem>
            <FormControl>
              <Checkbox id="is_new" {...field} />
            </FormControl>
            <Label htmlFor="is_new">New arrival</Label>
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
          {isPending ? 'Creating...' : 'Create Product'}
        </Button>
      </form>
    </Form>
  );
}
