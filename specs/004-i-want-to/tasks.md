# Tasks: Filter, Sort, and Search Functionality

**Input**: Design documents from `/specs/004-i-want-to/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/

## Phase 3.1: Backend Implementation
- [x] T001: Update the product schema in `model/productSchema.ts` to include `createdAt` field.
- [x] T002: Modify the `GET` function in `app/api/products/route.ts` to handle search, sort, filter, and pagination query parameters.
- [x] T003: Implement the logic in `app/api/products/route.ts` to filter products based on the `category`, `size`, `color`, `brand`, and price range.
- [x] T004: Implement the logic in `app/api/products/route.ts` to sort products based on the `sort` and `order` query parameters.
- [x] T005: Implement the logic in `app/api/products/route.ts` to search products based on the `search` query parameter.
- [x] T006: Implement pagination logic in `app/api/products/route.ts` using the `page` and `limit` query parameters.

## Phase 3.2: Frontend Implementation
- [x] T007: [P] Create a new `Search` component in `components/feature/landing-page/Search.tsx` for the search bar.
- [x] T008: [P] Create a new `Sort` component in `components/feature/landing-page/Sort.tsx` for the sort dropdown.
- [x] T009: [P] Create a new `Filter` component in `components/feature/landing-page/Filter.tsx` for the filter panel, including checkboxes for category, size, color, and brand.
- [x] T010: [P] Create a new `PriceRangeSlider` component in `components/feature/landing-page/PriceRangeSlider.tsx`.
- [x] T011: Modify the `ProductGrid` component in `components/feature/landing-page/ProductGrid.tsx` to include the `Search`, `Sort`, `Filter`, and `PriceRangeSlider` components.
- [x] T012: In `hooks/use-products.ts`, update the `useProducts` hook to accept filter, sort, search, and pagination parameters and pass them to the API call.
- [x] T013: Implement infinite scroll functionality in the `ProductGrid` component.
- [x] T014: Update the main page `app/page.tsx` to manage the state of filters, sorting, and search, and pass them down to the `ProductGrid` component.

## Phase 3.3: Testing
- [x] T015: [P] Write unit tests for the `Search` component.
- [x] T016: [P] Write unit tests for the `Sort` component.
- [x] T017: [P] Write unit tests for the `Filter` component.
- [x] T018: [P] Write unit tests for the `PriceRangeSlider` component.
- [ ] T019: Write integration tests for the product filtering, sorting, and searching functionality. (Skipped)

## Phase 3.4: Polish
- [x] T020: Review and refactor the code for clarity, performance, and adherence to coding standards.
- [x] T021: Update the `README.md` file with information about the new functionality, if necessary.

## Dependencies
- T001 must be done before T002, T003, T004, T005, T006.
- Backend implementation (Phase 3.1) should be done before frontend implementation (Phase 3.2).
- Frontend implementation (Phase 3.2) should be done before testing (Phase 3.3).

## Parallel Example
```
# Launch T007-T010 together:
Task: "Create a new `Search` component in `components/feature/landing-page/Search.tsx` for the search bar."
Task: "Create a new `Sort` component in `components/feature/landing-page/Sort.tsx` for the sort dropdown."
Task: "Create a new `Filter` component in `components/feature/landing-page/Filter.tsx` for the filter panel, including checkboxes for category, size, color, and brand."
Task: "Create a new `PriceRangeSlider` component in `components/feature/landing-page/PriceRangeSlider.tsx`."
```
