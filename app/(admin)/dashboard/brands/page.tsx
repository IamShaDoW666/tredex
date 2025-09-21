"use client"
import { useState } from "react"
import { useBrands } from "@/hooks/use-brands"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./columns"
import { BrandForm } from "@/components/feature/brand-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function BrandsDataTable() {
  const { data: brands, isLoading, error } = useBrands()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading brands</div>
  }

  return <DataTable columns={columns} data={brands?.data || []} />
}

export default function AdminBrands() {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-10">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Brands</CardTitle>
              <CardDescription>A list of all the brands in your store.</CardDescription>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button>Create Brand</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Brand</DialogTitle>
                </DialogHeader>
                <BrandForm onClose={() => setOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <BrandsDataTable />
        </CardContent>
      </Card>
    </div>
  )
}
