'use client';

import { Badge } from "@/components/ui/badge";
import { useFilterStore } from "@/hooks/use-filter-store";
import { X as XIcon } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function FilterBadges() {
  const { filters, removeFilter, resetPriceFilter, toUrlParams, initializeWithUrlParams } = useFilterStore();
  const { category, size, sex, color, brand, minPrice, maxPrice } = filters;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initializeWithUrlParams(searchParams);
  }, [searchParams, initializeWithUrlParams]);

  const handleRemoveFilter = (type: 'category' | 'size' | 'color' | 'sex' | 'brand', value: string) => {
    removeFilter(type, value);
    const params = toUrlParams();
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleResetPrice = () => {
    resetPriceFilter();
    const params = toUrlParams();
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const allFilters = [
    ...category.map(c => ({ type: 'category', value: c })),
    ...size.map(s => ({ type: 'size', value: s })),
    ...color.map(c => ({ type: 'color', value: c })),
    ...brand.map(b => ({ type: 'brand', value: b })),
    ...sex.map(b => ({ type: 'sex', value: b })),
  ];

  const priceFilterApplied = minPrice !== null && maxPrice !== null;

  if (allFilters.length === 0 && !priceFilterApplied) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {allFilters.map(filter => (
        <Badge key={`${filter.type}-${filter.value}`} variant="secondary" className="flex items-center gap-1">
          {filter.value}
          <button onClick={() => handleRemoveFilter(filter.type as ('category' | 'size' | 'sex' | 'color' | 'brand'), filter.value)} className="rounded-full hover:bg-background/50">
            <XIcon className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      {priceFilterApplied && (
        <Badge variant="secondary" className="flex items-center gap-1">
          {`$${minPrice} - $${maxPrice}`}
          <button onClick={handleResetPrice} className="rounded-full hover:bg-background/50">
            <XIcon className="h-3 w-3" />
          </button>
        </Badge>
      )}
    </div>
  );
}
