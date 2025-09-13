'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from '@/hooks/use-filter-store';
import { useEffect } from 'react';

const categories = ["Sneaker", "Watch"];
const sizes = ["7", "8", "9", "10", "11"];
const colors = ["Red", "Blue", "Green", "Black", "White"];
const brands = ["Nike", "Adidas", "Puma", "Reebok"];

export function Filter() {
  const searchParams = useSearchParams();
  const { filters, setFilter, initializeWithUrlParams } = useFilterStore();

  useEffect(() => {
    initializeWithUrlParams(searchParams);
  }, [searchParams, initializeWithUrlParams]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.category.includes(category)}
                onCheckedChange={() => setFilter('category', category)}
                className="h-5 w-5"
              />
              <label htmlFor={`category-${category}`}>{category}</label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Size</h3>
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={filters.size.includes(size)}
                onCheckedChange={() => setFilter('size', size)}
                className="h-5 w-5"
              />
              <label htmlFor={`size-${size}`}>{size}</label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Color</h3>
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={filters.color.includes(color)}
                onCheckedChange={() => setFilter('color', color)}
                className="h-5 w-5"
              />
              <label htmlFor={`color-${color}`}>{color}</label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Brand</h3>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brand.includes(brand)}
                onCheckedChange={() => setFilter('brand', brand)}
                className="h-5 w-5"
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}