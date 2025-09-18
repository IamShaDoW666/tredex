"use client"

import { useCategories } from "@/hooks/use-categories"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { ICategory } from "@/lib/types"

function CategoriesDataTable() {
  const { data: categories, isLoading, error } = useCategories()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading categories</div>
  }

  return <DataTable columns={columns} data={categories || []} />
}

export default function AdminCategories() {
  return (
    <div className="py-10">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Categories</CardTitle>
              <CardDescription>A list of all the categories in your store.</CardDescription>
            </div>
            <Button asChild>
              <Link href="/dashboard/categories/create">Create Category</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <CategoriesDataTable />
        </CardContent>
      </Card>
    </div>
  )
}
