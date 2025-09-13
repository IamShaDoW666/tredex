'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Filter } from "./Filter";
import { PriceRangeSlider } from "./PriceRangeSlider";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import { useFilterStore } from "@/hooks/use-filter-store";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export function FilterBottomSheet() {
  const { open, setOpen, reset, toUrlParams } = useFilterStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleClearFilters = () => {
    reset();
    router.replace(pathname, { scroll: false });
    setOpen(false);
  };

  const handleApplyFilters = () => {
    const params = toUrlParams();
    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      setOpen(false);
    });
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <FilterIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filter Products</DrawerTitle>
          <DrawerDescription>
            Refine your search by selecting filters below.
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto px-4">
          <Filter />
          <div className="mt-8">
            <PriceRangeSlider />
          </div>
        </div>
        <DrawerFooter className="pt-4 flex flex-row gap-4">
          <Button onClick={handleApplyFilters} className="w-full" disabled={isPending}>
            {isPending ? 'Applying...' : 'Apply Filters'}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
