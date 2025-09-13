import { create } from 'zustand';

type Filters = {
  category: string[];
  size: string[];
  color: string[];
  brand: string[];
  minPrice: number | null;
  maxPrice: number | null;
};

type PriceBounds = {
  min: number;
  max: number;
};

type FilterStore = {
  filters: Filters;
  priceBounds: PriceBounds;
  open: boolean;
  setOpen: (open: boolean) => void;
  setFilter: (type: 'category' | 'size' | 'color' | 'brand', value: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setPriceBounds: (bounds: PriceBounds) => void;
  initializeWithUrlParams: (params: URLSearchParams) => void;
  toUrlParams: () => URLSearchParams;
  reset: () => void;
};

const initialFilters: Filters = {
  category: [],
  size: [],
  color: [],
  brand: [],
  minPrice: null,
  maxPrice: null,
};

const initialPriceBounds: PriceBounds = {
  min: 0,
  max: 1000,
};

export const useFilterStore = create<FilterStore>((set, get) => ({
  filters: initialFilters,
  priceBounds: initialPriceBounds,
  open: false,
  setOpen: (open) => set({ open }),

  setFilter: (type, value) => {
    set((state) => {
      const currentValues = state.filters[type];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return {
        filters: {
          ...state.filters,
          [type]: newValues,
        },
      };
    });
  },

  setPriceRange: (range) => {
    set((state) => ({
      filters: {
        ...state.filters,
        minPrice: range[0],
        maxPrice: range[1],
      },
    }));
  },

  setPriceBounds: (bounds) => {
    set((state) => {
      if (state.filters.minPrice === null && state.filters.maxPrice === null) {
        return {
          priceBounds: bounds,
          filters: {
            ...state.filters,
            minPrice: bounds.min,
            maxPrice: bounds.max,
          },
        };
      }
      return { priceBounds: bounds };
    });
  },

  initializeWithUrlParams: (params) => {
    const category = params.get('category')?.split(',') || [];
    const size = params.get('size')?.split(',') || [];
    const color = params.get('color')?.split(',') || [];
    const brand = params.get('brand')?.split(',') || [];
    const minPrice = params.has('minPrice') ? Number(params.get('minPrice')) : null;
    const maxPrice = params.has('maxPrice') ? Number(params.get('maxPrice')) : null;

    set((state) => ({
      filters: {
        ...state.filters,
        category,
        size,
        color,
        brand,
        minPrice: minPrice ?? state.priceBounds.min,
        maxPrice: maxPrice ?? state.priceBounds.max,
      },
    }));
  },

  toUrlParams: () => {
    const { filters, priceBounds } = get();
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'category' || key === 'size' || key === 'color' || key === 'brand') {
        if (Array.isArray(value) && value.length > 0) {
          params.set(key, value.join(','));
        }
      } else if (key === 'minPrice' && value !== null && value !== priceBounds.min) {
        params.set(key, value.toString());
      } else if (key === 'maxPrice' && value !== null && value !== priceBounds.max) {
        params.set(key, value.toString());
      }
    });
    return params;
  },

  reset: () => {
    set((state) => ({
      filters: {
        ...initialFilters,
        minPrice: state.priceBounds.min,
        maxPrice: state.priceBounds.max,
      },
    }));
  },
}));
