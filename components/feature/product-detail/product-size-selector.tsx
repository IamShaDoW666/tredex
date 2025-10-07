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
      <div>
        <Label className='text-lg'>Sizes</Label>
        <p className='text-muted-foreground mb-4'>ALL LISTED SIZES FOLLOW UK AND EUROPE SIZING STANDARD</p>
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
      </div>
    </>
  );
}
