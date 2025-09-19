import { IProduct } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const fetcher = async (url: string): Promise<IProduct[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch related products');
  }
  return res.json();
};

export function useRelatedProducts(excludeId: string, limit: number = 6) {
  const queryKey = ['relatedProducts', excludeId, limit];
  const queryFn = () => fetcher(`/api/products/related?excludeId=${excludeId}&limit=${limit}`);

  const { data, error, isLoading } = useQuery<IProduct[], Error>({
    queryKey,
    queryFn,
    enabled: !!excludeId, // Only run the query if excludeId is available
  });

  return {
    relatedProducts: data,
    isLoading,
    isError: !!error, // Convert error object to boolean
  };
}
