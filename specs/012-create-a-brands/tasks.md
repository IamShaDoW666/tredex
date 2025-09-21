# Tasks: Create a Brands Page

**Input**: Design documents from `/specs/012-create-a-brands/`
**Prerequisites**: plan.md (required), research.md, data-model.md, quickstart.md

## Phase 3.1: Setup
- [ ] T001 [P] Create the file `/model/brandSchema.ts` and define the `Brand` schema based on `data-model.md`.

## Phase 3.2: Core Implementation
- [ ] T002 Create the API route file `/app/api/brands/route.ts` to handle GET and POST requests for brands.
- [ ] T003 Implement the GET request in `/app/api/brands/route.ts` to fetch all brands from the database.
- [ ] T004 Implement the POST request in `/app/api/brands/route.ts` to create a new brand, including validation to prevent duplicate brand names.
- [ ] T005 Create the API route file `/app/api/brands/[id]/route.ts` to handle GET, PUT, and DELETE requests for a single brand.
- [ ] T006 Implement the GET request in `/app/api/brands/[id]/route.ts` to fetch a single brand by its ID.
- [ ] T007 Implement the PUT request in `/app/api/brands/[id]/route.ts` to update a brand's information.
- [ ] T008 Implement the DELETE request in `/app/api/brands/[id]/route.ts` to delete a brand, including a check to prevent deletion if the brand is associated with any products.

## Phase 3.3: Frontend Implementation
- [ ] T009 Create the file `/app/(admin)/dashboard/brands/page.tsx` to display the brands datatable.
- [ ] T010 Create the file `/components/feature/brand-form.tsx` for the brand creation and editing form.
- [ ] T011 Implement the brands datatable in `/app/(admin)/dashboard/brands/page.tsx` using the ShadCN datatable component, fetching data from the API.
- [ ] T012 Add the "Add Brand" button to `/app/(admin)/dashboard/brands/page.tsx` which should open a dialog containing the `brand-form.tsx` component.
- [ ] T013 Implement the create brand functionality in `brand-form.tsx` to submit the new brand data to the API.
- [ ] T014 Implement the edit brand functionality, so that clicking the "Edit" button on a brand in the datatable opens a dialog with the `brand-form.tsx` component, pre-filled with the brand's data.
- [ ] T015 Implement the delete brand functionality, so that clicking the "Delete" button on a brand in the datatable shows a confirmation dialog before calling the delete API.

## Phase 3.4: Polish
- [ ] T016 [P] Ensure the brands page is responsive and displays correctly on mobile, tablet, and desktop screen sizes.
- [ ] T017 [P] Add a link to the new brands page in the admin sidebar.

## Dependencies
- T001 must be completed before T002, T003, T004, T005, T006, T007, T008.
- T002, T003, T004, T005, T006, T007, T008 must be completed before T009, T010, T011, T012, T013, T014, T015.

## Parallel Example
```
# T001 and T016, T017 can be run in parallel after the main implementation is done.
Task: "[P] Create the file `/model/brandSchema.ts` and define the `Brand` schema based on `data-model.md`."
Task: "[P] Ensure the brands page is responsive and displays correctly on mobile, tablet, and desktop screen sizes."
Task: "[P] Add a link to the new brands page in the admin sidebar."
```
