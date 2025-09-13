'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = ["Sneaker", "Watch"];
const sizes = ["7", "8", "9", "10", "11"];
const colors = ["Red", "Blue", "Green", "Black", "White"];
const brands = ["Nike", "Adidas", "Puma", "Reebok"];

export function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilterChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    const currentValues = params.get(type)?.split(',') || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    if (newValues.length > 0) {
      params.set(type, newValues.join(','));
    } else {
      params.delete(type);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Category</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={`category-${category}`}
              checked={searchParams.get('category')?.includes(category)}
              onCheckedChange={() => handleFilterChange('category', category)}
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
              checked={searchParams.get('size')?.includes(size)}
              onCheckedChange={() => handleFilterChange('size', size)}
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
              checked={searchParams.get('color')?.includes(color)}
              onCheckedChange={() => handleFilterChange('color', color)}
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
              checked={searchParams.get('brand')?.includes(brand)}
              onCheckedChange={() => handleFilterChange('brand', brand)}
            />
            <label htmlFor={`brand-${brand}`}>{brand}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
