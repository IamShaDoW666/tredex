import { ProductForm } from "@/components/feature/product-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProductById } from "@/actions/product-actions";

interface ProductEditPageProps {
  params: {
    id: string;
  };
}

export default async function ProductEditPage({ params }: ProductEditPageProps) {
  const productId = params.id;
  const { data: product, error } = await getProductById(productId);
  console.log(product)
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Edit product</CardTitle>
        <CardDescription>Edit your product details</CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm product={product} />
      </CardContent>
    </Card>
  );
}
