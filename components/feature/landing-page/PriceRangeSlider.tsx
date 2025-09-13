'use client';

import { Slider } from "@/components/ui/slider";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export function PriceRangeSlider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePriceChange = useDebouncedCallback(([min, max]: number[]) => {
    const params = new URLSearchParams(searchParams);
    params.set('minPrice', min.toString());
    params.set('maxPrice', max.toString());
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-2">Price Range</h3>
      <Slider
        defaultValue={[minPrice ? parseInt(minPrice) : 0, maxPrice ? parseInt(maxPrice) : 500]}
        max={500}
        step={10}
        onValueChange={handlePriceChange}
      />
      <div className="flex justify-between">
        <span>${minPrice || 0}</span>
        <span>${maxPrice || 500}</span>
      </div>
    </div>
  );
}
