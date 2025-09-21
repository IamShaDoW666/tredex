"use client"

import { CategoryForm } from "@/components/feature/category-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CreateCategoryPage() {
  return (
    <div className="py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Category</CardTitle>
          <CardDescription>Fill in the details to create a new category.</CardDescription>
        </CardHeader>
        <CardContent>
          <CategoryForm />
        </CardContent>
      </Card>
    </div>
  )
}
