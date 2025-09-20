"use client"

import { useQuery } from "@tanstack/react-query"
import { getProductsWithCategories } from "@/actions/product-actions"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      const response = await getProductsWithCategories({ page, limit });
      if (!response.status) {
        throw new Error(response.error || "Failed to fetch products");
      }
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message || "An unknown error occurred"}</div>;

  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your products!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/dashboard/products/create">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
      </div>
      <DataTable columns={columns} data={products} />
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1 || isFetching}
        >
          Previous
        </Button>
        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((old) => old + 1)}
          disabled={page === totalPages || isFetching}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

