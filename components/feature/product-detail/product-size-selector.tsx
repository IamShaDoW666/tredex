'use client';

import { useProductStore } from '@/hooks/use-product-store';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';

interface ProductSizeSelectorProps {
  sizes: string[];
}

export function ProductSizeSelector({ sizes }: ProductSizeSelectorProps) {
  const { selectedSize, setSelectedSize } = useProductStore();

  if (!sizes || sizes.length === 0) {
    return null;
  }

  return (
    <>
      <Label>Sizes</Label>
      <ToggleGroup
        type="single"
        value={selectedSize ?? ''}
        onValueChange={(value) => setSelectedSize(value)}
        className="flex flex-wrap gap-2"
      >
        {sizes.map((size) => (
          <ToggleGroupItem
            key={size}
            value={size}
            className={cn(
              'border',
              selectedSize === size
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-input'
            )}
          >
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  );
}
