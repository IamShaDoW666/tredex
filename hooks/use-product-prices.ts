import { useQuery } from '@tanstack/react-query';

const fetchProductPrices = async (queryKey: [string, string, string, string, string, string]): Promise<{ minPrice: number, maxPrice: number }> => {
  const [, search, category, size, color, brand] = queryKey;
  const params = new URLSearchParams({
    search: search as string,
    category: category as string,
    size: size as string,
    color: color as string,
    brand: brand as string,
  });

  const response = await fetch(`/api/products/prices?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProductPrices = (search: string, category: string, size: string, color: string, brand: string) =>
  useQuery({
    queryKey: ['productPrices', search, category, size, color, brand],
    queryFn: () => fetchProductPrices(['productPrices', search, category, size, color, brand]),
  });
