import { create } from 'zustand';

type State = {
    selectedSize: string | null;
    quantity: number;
};

type Actions = {
    setSelectedSize: (size: string | null) => void;
    incrementQuantity: () => void;
    decrementQuantity: () => void;
};

export const useProductStore = create<State & Actions>((set) => ({
    selectedSize: null,
    quantity: 1,
    setSelectedSize: (size) => set({ selectedSize: size }),
    incrementQuantity: () => set((state) => ({ quantity: state.quantity + 1 })),
    decrementQuantity: () => set((state) => ({ quantity: Math.max(1, state.quantity - 1) })),
}));
