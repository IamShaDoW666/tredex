# Tasks: Add Product Variant Selection

**Input**: Design documents from `/specs/008-add-option-to/`
**Prerequisites**: plan.md (required), research.md, data-model.md, quickstart.md

## Phase 3.1: Setup
- [ ] T001 [P] Install `zustand` dependency using `pnpm add zustand`.

## Phase 3.2: Core Implementation
- [ ] T002 Create a new Zustand store for managing product selection state in `hooks/use-product-store.ts`. The store should include the selected size.
- [ ] T003 Create a new component `components/feature/product-detail/product-size-selector.tsx` to display the available sizes for a product. This component should use the `use-product-store` hook to update the selected size.
- [ ] T004 Modify the product detail page `app/(front)/products/[slug]/page.tsx` to include the `ProductSizeSelector` component.
- [ ] T005 Update the "Add to Cart" button on the product detail page to be disabled until a size is selected. If a product has no sizes, the button should be enabled by default.
- [ ] T006 When the "Add to Cart" button is clicked, the selected size from the `use-product-store` should be included in the data sent to the cart.

## Phase 3.3: Polish
- [ ] T007 [P] Ensure the `ProductSizeSelector` component is fully responsive and follows the mobile-first design principle.
- [ ] T008 [P] Manually test the feature by following the steps in `specs/008-add-option-to/quickstart.md`.

## Dependencies
- T001 must be completed before T002.
- T002 must be completed before T003.
- T003 must be completed before T004.
- T004 and T005 can be worked on in parallel.
- T006 depends on T005.
- T007 and T008 can be worked on in parallel after all other tasks are complete.
