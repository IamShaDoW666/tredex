# Tasks: Create Category Edit Page

**Input**: Design documents from `/specs/014-create-a-category/`

## Phase 3.1: Setup
- [ ] T001: Create the directory structure for the category edit page at `app/(admin)/dashboard/categories/edit/[id]/`.

## Phase 3.2: Backend Implementation
- [ ] T002: In `actions/category-actions.ts`, create a new server action `getCategoryById(id: string)` that fetches a single category from the database.
- [ ] T003: In `actions/category-actions.ts`, create a new server action `updateCategory(id: string, data: Category)` that updates a category in the database.

## Phase 3.3: Frontend Implementation
- [ ] T004: Create the category edit page component at `app/(admin)/dashboard/categories/edit/[id]/page.tsx`. This will be a client component that fetches the category data using the `getCategoryById` action and pre-fills the form.
- [ ] T005: Create a reusable `CategoryForm` component in `components/feature/category-form.tsx`. This form will be used for both creating and editing categories. It will take an optional `initialData` prop.
- [ ] T006: Modify the existing category create page to use the new `CategoryForm` component.

## Phase 3.4: Integration
- [ ] T007: In the categories list page (`app/(admin)/dashboard/categories/page.tsx`), add an "Edit" button to each row that links to the corresponding category's edit page.

## Dependencies
- T002 must be completed before T004.
- T003 must be completed before T004.
- T005 must be completed before T004 and T006.
