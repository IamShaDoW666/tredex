import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { IProduct } from '@/model/productSchema';

const fetchProducts = async (page = 1, limit = 20): Promise<{ data: IProduct[] }> => {
  const response = await fetch(`/api/products?page=${page}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
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

export const useProducts = (page: number, limit: number) => useQuery<{ data: IProduct[] }>({ queryKey: ['products', page, limit], queryFn: () => fetchProducts(page, limit) });
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
