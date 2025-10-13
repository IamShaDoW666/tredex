'use client';

import { useProductStore } from '@/hooks/use-product-store';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface ProductSizeSelectorProps {
    sizes: string[];
}

export function ProductSizeSelector({ sizes }: ProductSizeSelectorProps) {
    const { selectedSize, setSelectedSize, incrementQuantity, decrementQuantity, quantity } = useProductStore();

    if (!sizes || sizes.length === 0) {
        return null;
    }

    return (
        <div className="grid gap-4">
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
            <div>
                <Label className='text-lg'>Quantity</Label>
                <div className="flex items-center gap-2 mt-4">
                    <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-semibold w-10 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={incrementQuantity}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}