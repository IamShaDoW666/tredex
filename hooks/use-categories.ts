import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ICategory } from '@/model/categorySchema';

const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await fetch('/api/categories');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const createCategory = async (newCategory: ICategory) => {
  const response = await fetch('/api/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCategory),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useCategories = () => useQuery<ICategory[]>({ queryKey: ['categories'], queryFn: fetchCategories });

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};
