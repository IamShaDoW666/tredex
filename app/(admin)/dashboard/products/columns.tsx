"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { IProduct } from "@/model/productSchema"
import { ICategory } from "@/model/categorySchema"
import { deleteProductById } from "@/actions/product-actions"
import { toast } from "sonner"
import { useQueryClient } from "@tanstack/react-query"
import { IBrand } from "@/model/brandSchema"

export const columns: ColumnDef<IProduct>[] = [
  {
    id: "index",
    header: "#",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ row }) => {
      return <p>₹{row.original.price}</p>
    }
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.original.category;
      return <p>{typeof category === 'object' && category !== null ? (category as ICategory).name : '-'}</p>
    }
  },
  {
    accessorKey: "brand",
    header: (({ column }) => {
      return (
        <Button
          variant="ghost"
          className="p-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brand
        </Button>
      )
    }),
    cell: ({ row }) => {
      const brand = row.original.brand as IBrand;
      return <p>{typeof brand === 'object' && brand !== null ? (brand as IBrand).name : '-'}</p>
    }
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => {
      return <Badge className={row.original.available ? 'bg-primary text-foreground' : 'bg-destructive text-foreground'}>{row.original.available ? "Yes" : "No"}</Badge>
    },
  },
  {
    accessorKey: "is_new",
    cell: ({ row }) => {
      return <Badge className={row.original.is_new ? 'bg-primary text-foreground' : 'bg-secondary text-foreground'}>{row.original.is_new ? "Yes" : "No"}</Badge>
    },
    header: "New",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      const queryClient = useQueryClient()
      return (
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product._id as string)}
              >
                Copy ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>
                  <span>Delete</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                product.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  await deleteProductById(product._id as string)
                  queryClient.invalidateQueries({ queryKey: ["products"] })
                  toast.success("Product has been deleted successfully!")
                }}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )
    },
  },
]
