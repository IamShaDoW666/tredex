# Tasks: Add Related Products Component

**Input**: Design documents from `/specs/009-add-a-related/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/, quickstart.md

## Phase 3.1: Setup
- [ ] T001 Create a new API route `app/api/products/related/route.ts` to fetch related products.

## Phase 3.2: Core Implementation
- [ ] T002 Implement the logic in `app/api/products/related/route.ts` to fetch random products, excluding the `excludeId` and limiting the results to `limit` (default 10).
- [ ] T003 Create a new hook `hooks/use-related-products.ts` to fetch related products using the new API route.
- [ ] T004 Create a new component `components/feature/product-detail/RelatedProducts.tsx` to display the related products. This component should use the `use-related-products` hook.
- [ ] T005 Implement horizontal scrolling for the `RelatedProducts` component.
- [ ] T006 Modify the product detail page `app/(front)/products/[id]/page.client.tsx` to include the `RelatedProducts` component below the main product details.
- [ ] T007 Implement error handling in `RelatedProducts.tsx` to hide the section if the API fails or returns no products.

## Phase 3.3: Polish
- [ ] T008 [P] Ensure the `RelatedProducts` component is fully responsive and follows the mobile-first design principle.
- [ ] T009 [P] Manually test the feature by following the steps in `specs/009-add-a-related/quickstart.md`.

## Dependencies
- T001 must be completed before T002.
- T002 must be completed before T003.
- T003 must be completed before T004.
- T004 must be completed before T005 and T006.
- T007 depends on T004.
- T008 and T009 can be worked on in parallel after all other tasks are complete.
