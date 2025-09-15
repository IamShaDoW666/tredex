import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailSkeleton() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery Skeleton */}
        <div className="rounded-lg">
          <Skeleton className="md:h-[60vh] md:w-[60vh] md:mx-auto mx-0 h-[400px] w-full" />
        </div>

        {/* Product Info Skeleton */}
        <div className="space-y-8">
          <Skeleton className="h-8 w-3/4" /> {/* Product Name */}
          <Skeleton className="h-6 w-1/4" /> {/* Price */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div> {/* Description */}
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-10 w-16" />
            <Skeleton className="h-10 w-16" />
          </div> {/* Size Selector */}
          <Skeleton className="h-12 w-full" /> {/* Add to Cart Button */}
        </div>
      </div>
    </div>
  );
}
