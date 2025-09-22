import ProductGrid from "@/components/feature/landing-page/ProductGrid"
import { Suspense } from "react"

const CollectionsPage = () => {
  return (
    <div className="py-14">
      <Suspense>
        <ProductGrid />
      </Suspense>
    </div>
  )
}

export default CollectionsPage
