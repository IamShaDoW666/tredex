'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function Sort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    const [sort, order] = value.split(':');
    if (sort && order) {
      params.set('sort', sort);
      params.set('order', order);
    } else {
      params.delete('sort');
      params.delete('order');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Select onValueChange={handleSort} defaultValue={searchParams.get('sort') ? `${searchParams.get('sort')}:${searchParams.get('order')}` : undefined}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price:asc">Price: Low to High</SelectItem>
        <SelectItem value="price:desc">Price: High to Low</SelectItem>
        <SelectItem value="name:asc">Name: A-Z</SelectItem>
        <SelectItem value="name:desc">Name: Z-A</SelectItem>
        <SelectItem value="createdAt:desc">Newest</SelectItem>
        <SelectItem value="createdAt:asc">Oldest</SelectItem>
      </SelectContent>
    </Select>
  );
}
