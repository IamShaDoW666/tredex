# Tasks: API Endpoints & Frontend Integration

**Input**: Design documents from `/Users/milan/Desktop/Work/tredex/specs/002-add-api-endpoints/`

## Phase 1: Backend Setup & Implementation

- [ ] **T001**: Create the API directory structure: `app/api/products/[id]` and `app/api/categories/[id]`.
- [ ] **T002** [P]: Implement `GET /api/products` and `POST /api/products` in `app/api/products/route.ts`. Include manual validation for the POST request.
- [ ] **T003** [P]: Implement `GET /api/categories` and `POST /api/categories` in `app/api/categories/route.ts`. Include manual validation for the POST request.
- [ ] **T004**: Implement `GET /api/products/{id}`, `PUT /api/products/{id}`, and `DELETE /api/products/{id}` in `app/api/products/[id]/route.ts`. Include manual validation for the PUT request. (Depends on T002)
- [ ] **T005**: Implement `GET /api/categories/{id}`, `PUT /api/categories/{id}`, and `DELETE /api/categories/{id}` in `app/api/categories/[id]/route.ts`. Include manual validation for the PUT request. (Depends on T003)

## Phase 2: Frontend Setup & Integration

- [ ] **T006**: Verify `@tanstack/react-query` is installed and set up the `QueryClientProvider` in `app/layout.tsx` within a new client-side provider component.
- [ ] **T007** [P]: Create `hooks/use-products.ts` and implement all related hooks (`useProducts`, `useProduct`, `useCreateProduct`, `useUpdateProduct`, `useDeleteProduct`) using `useQuery` and `useMutation`.
- [ ] **T008** [P]: Create `hooks/use-categories.ts` and implement all related hooks for categories, following the same pattern as the product hooks.
- [ ] **T009**: Refactor `components/feature/landing-page/ProductGrid.tsx` to replace mock data with the `useProducts` hook. Implement loading and error states. (Depends on T007)
- [ ] **T010**: Refactor any other components that consume mock product or category data to use the new hooks. (Depends on T007, T008)

## Phase 3: Verification & Polish

- [ ] **T011** [P]: Manually test all `Product` API endpoints using a tool like `curl` or Postman to verify they match the `products-api.md` contract.
- [ ] **T012** [P]: Manually test all `Category` API endpoints to verify they match the `categories-api.md` contract.
- [ ] **T013**: Manually test the entire frontend user flow: viewing products, filtering, and interacting with any data-driven components to ensure they work correctly.
- [ ] **T014**: Create a pull request for the `002-add-api-endpoints` branch and conduct a final code review.

## Dependencies

- **Backend**: T002 and T003 can run in parallel. T004 depends on T002. T005 depends on T003.
- **Frontend**: T007 and T008 can run in parallel after T006 is complete. T009 and T010 depend on the completion of T007 and T008.
- **Verification**: Can begin once the relevant implementation tasks are complete.

## Parallel Execution Example

```bash
# The following backend and frontend setup tasks can be initiated in parallel:
gemini task "Implement GET /api/products and POST /api/products in app/api/products/route.ts" &
gemini task "Implement GET /api/categories and POST /api/categories in app/api/categories/route.ts" &
gemini task "Create hooks/use-products.ts and implement all related hooks" &
gemini task "Create hooks/use-categories.ts and implement all related hooks"
```
