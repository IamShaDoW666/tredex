import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createBrandAction, getAllBrands, deleteBrandAction } from '@/actions/brand-actions';

export const useBrands = () => useQuery({ queryKey: ['brands'], queryFn: getAllBrands });

export const useCreateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBrandAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};

export const useDeleteBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBrandAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};
