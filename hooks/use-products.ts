import { useInfiniteQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { IProduct } from '@/model/productSchema';

const fetchProducts = async ({ pageParam = 1, queryKey: fullQueryKey }: { pageParam?: number, queryKey: (string | number)[] }): Promise<{ data: IProduct[], nextPage: number | null }> => {
  const [, limit, search, sort, order, category, size, color, brand, minPrice, maxPrice] = fullQueryKey;
  const params = new URLSearchParams({
    page: pageParam.toString(),
    limit: (limit as number).toString(),
    search: search as string,
    sort: sort as string,
    order: order as string,
    category: category as string,
    size: size as string,
    color: color as string,
    brand: brand as string,
    minPrice: minPrice as string,
    maxPrice: maxPrice as string,
  });
  const response = await fetch(`/api/products?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return {
    data: result.data,
    nextPage: result.totalPages > pageParam ? pageParam + 1 : null,
  };
};

const fetchProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const createProduct = async (newProduct: IProduct) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const updateProduct = async ({ id, updatedProduct }: { id: string, updatedProduct: IProduct }) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const deleteProduct = async (id: string) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProducts = (limit: number, search: string, sort: string, order: string, category: string, size: string, color: string, brand: string, minPrice: string, maxPrice: string) =>
  useInfiniteQuery({
    queryKey: ['products', limit, search, sort, order, category, size, color, brand, minPrice, maxPrice],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });
export const useProduct = (id: string) => useQuery<IProduct>({ queryKey: ['product', id], queryFn: () => fetchProduct(id), enabled: !!id });

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data: IProduct, variables: { id: string, updatedProduct: IProduct }) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['product', variables.id] });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
