import { ProductForm } from '@/components/feature/product-form';

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Add New Product</h3>
        <p className="text-sm text-muted-foreground">
          Fill in the details below to create a new product.
        </p>
      </div>
      <ProductForm />
    </div>
  );
}
