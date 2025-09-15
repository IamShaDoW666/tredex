import { create } from 'zustand';

type State = {
  selectedSize: string | null;
};

type Actions = {
  setSelectedSize: (size: string | null) => void;
};

export const useProductStore = create<State & Actions>((set) => ({
  selectedSize: null,
  setSelectedSize: (size) => set({ selectedSize: size }),
}));
