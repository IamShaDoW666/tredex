# Tasks: Product Edit Page

**Input**: Design documents from `/specs/013-add-a-dashboard/`

## Phase 3.1: Setup
- [x] T001: No setup needed, project is already initialized.

## Phase 3.2: Core Implementation
- [x] T002: [P] Create the edit page component at `app/(admin)/dashboard/product/[id]/edit/page.tsx`. This should be a copy of the existing create page at `app/(admin)/dashboard/product/create/page.tsx`.
- [x] T003: In `app/(admin)/dashboard/product/[id]/edit/page.tsx`, implement the data fetching logic to retrieve the product data using the `id` from the URL. Use Mongoose to query the database.
- [x] T004: In `app/(admin)/dashboard/product/[id]/edit/page.tsx`, hydrate the form with the product data fetched in the previous task.
- [x] T005: In `actions/product-actions.ts`, create a new server action named `updateProduct` that takes the product data as an argument and updates the product in the MongoDB database using Mongoose.
- [x] T006: In `app/(admin)/dashboard/product/[id]/edit/page.tsx`, connect the `updateProduct` server action to the form submission.

## Phase 3.3: Polish
- [x] T007: [P] In the `updateProduct` server action in `actions/product-actions.ts`, add validation using Zod to ensure the data is correct before updating the database.
- [x] T008: [P] In `app/(admin)/dashboard/product/[id]/edit/page.tsx`, add success and error notifications (e.g., using `sonner`) to provide feedback to the user after the form submission.

## Phase 3.4: Testing
- [ ] T009: Manually test the entire feature by following the steps outlined in `specs/013-add-a-dashboard/quickstart.md` to ensure it works as expected.

## Dependencies
- T002 must be completed before T003 and T004.
- T003 and T004 can be worked on in parallel.
- T005 must be completed before T006.
- T006 depends on T002, T003, T004, and T005.
- T007 and T008 can be worked on in parallel after T006 is complete.
- T009 is the final testing task.

## Parallel Example
```
# T007 and T008 can be executed in parallel:
Task: "[P] In the `updateProduct` server action in `actions/product-actions.ts`, add validation using Zod to ensure the data is correct before updating the database."
Task: "[P] In `app/(admin)/dashboard/product/[id]/edit/page.tsx`, add success and error notifications (e.g., using `sonner`) to provide feedback to the user after the form submission."
```