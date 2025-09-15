import ProductDetailClient from './page.client';

const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  return (
    <main className='py-24'>
      <ProductDetailClient id={id} />
    </main>
  )
};

export default ProductDetailPage;
