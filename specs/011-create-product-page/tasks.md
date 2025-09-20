# Tasks: Create Product Page

**Input**: Design documents from `/specs/011-create-product-page/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Phase 3.1: Setup
- [ ] T001 [P] Install `react-hook-form`, `zod`, and `browser-image-compression` dependencies using pnpm.

## Phase 3.2: Backend
- [ ] T002 Create a new file `app/api/products/route.ts` to handle product creation. This will be the API endpoint.
- [ ] T003 Implement the `POST` handler in `app/api/products/route.ts` to receive product data and images.
- [ ] T004 Create a new file `actions/product-actions.ts` to contain the server action for creating a product.
- [ ] T005 Implement the `createProduct` server action in `actions/product-actions.ts`. This action will handle form data, file uploads, and saving the product to the database. It should also perform validation using Zod.

## Phase 3.3: Frontend
- [ ] T006 [P] Create the Zod schema for the product form in a new file `lib/product-schema.ts`.
- [ ] T007 Create a new component file `components/feature/product-form.tsx`.
- [ ] T008 Implement the product form in `components/feature/product-form.tsx` using `react-hook-form` and `shadcn/ui` components. The form should include all fields from the `productSchema.ts` and a file input for images.
- [ ] T009 Implement client-side image compression in `components/feature/product-form.tsx` using `browser-image-compression` before uploading.
- [ ] T010 Create the new page for adding products at `app/(admin)/dashboard/products/new/page.tsx`.
- [ ] T011 Render the `ProductForm` component in `app/(admin)/dashboard/products/new/page.tsx`.

## Phase 3.4: Integration
- [ ] T012 Connect the `ProductForm` component to the `createProduct` server action. On form submission, the data should be passed to the server action.
- [ ] T013 Implement logic to protect the `app/(admin)/dashboard/products/new/page.tsx` route, ensuring only admin users can access it.
- [ ] T014 Display success or error notifications to the user after form submission using `sonner`.

## Phase 3.5: Polish
- [ ] T015 [P] Review the code for any necessary refactoring and to ensure it adheres to the project's coding standards.
- [ ] T016 [P] Add comments where necessary to clarify complex logic.
- [ ] T017 Verify that the new page is fully responsive and works well on all screen sizes.

## Dependencies
- T001 must be completed before T007 and T009.
- T006 must be completed before T008.
- T004 and T005 must be completed before T012.
- T008 and T010 must be completed before T011.
- T011 and T012 must be completed before T014.

## Parallel Example
```
# The following tasks can be run in parallel:
Task: "T001 [P] Install `react-hook-form`, `zod`, and `browser-image-compression` dependencies using pnpm."
Task: "T006 [P] Create the Zod schema for the product form in `lib/auth-schema.ts` or a new file `lib/product-schema.ts`."
```
