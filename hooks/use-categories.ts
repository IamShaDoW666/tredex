/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategoryAction, getAllCategories } from '@/actions/category-actions';
import { ICategory } from '@/model/categorySchema';
import { CategoryFormValues } from '@/zod/category-schema';

const fetchCategories = async (): Promise<ICategory[]> => {
  const response = await fetch('/api/categories');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const createCategory = async (newCategory: CategoryFormValues) => {
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

export const useCategories = () => useQuery({ queryKey: ['categories'], queryFn: getAllCategories });

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCategoryAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};

const deleteCategory = async (id: string) => {
  const response = await fetch(`/api/categories/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
};
