
import { getCategoryById } from '@/actions/category-actions';
import { CategoryForm } from '@/components/feature/category-form';

export default async function CategoryEditPage({ params }: { params: { id: string } }) {

  const { data: category } = await getCategoryById(params.id);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <CategoryForm initialData={category} />
    </div>
  );
}
