# Tasks: Order on WhatsApp

**Input**: Design documents from `/specs/015-order-on-whatsapp/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- The project follows a single project structure with Next.js App Router.

## Phase 3.1: Setup
- [x] T001 [P] Create a new Zod schema for order validation in `zod/order-schema.ts`.
- [x] T002 [P] Create a new Mongoose schema for the Order model in `model/orderSchema.ts`.

## Phase 3.2: Core Implementation (Backend)
- [x] T003 Create a new API route handler for POST `/api/orders` in `app/api/orders/route.ts`. This will handle order creation.
- [x] T004 Implement the logic in the API route to validate the request body using the Zod schema, save the order to the database using the Mongoose model, and return the created order.

## Phase 3.3: Core Implementation (Frontend)
- [x] T005 Create a new component for the "Order on WhatsApp" button in `components/feature/whatsapp-order-button.tsx`.
- [x] T006 Create a new component for the order form in `components/feature/whatsapp-order-form.tsx`. This form will be displayed in a modal.
- [x] T007 Create a new component for the order modal in `components/feature/whatsapp-order-modal.tsx`, which will include the form and handle modal state.
- [x] T008 Add the `WhatsappOrderButton` to the product details page at `app/(front)/products/[id]/page.tsx`.
- [x] T009 Implement the client-side logic in the `WhatsappOrderModal` component to handle form submission. This includes making a POST request to the `/api/orders` endpoint.
- [x] T010 Upon successful order creation, implement the logic to construct the WhatsApp message URL and open it in a new tab.

## Phase 3.4: Polish
- [x] T011 [P] Add form validation and error handling to the `WhatsappOrderForm` component.
- [x] T012 [P] Ensure the `WhatsappOrderModal` is responsive and works well on mobile devices.
- [x] T013 [P] Add loading states to the `WhatsappOrderButton` and `WhatsappOrderForm` to provide user feedback during form submission.

## Dependencies
- T001 and T002 must be completed before T004.
- T003 must be completed before T009.
- T005, T006, and T007 must be completed before T008.

## Parallel Example
```
# Launch T001 and T002 together:
Task: "Create a new Zod schema for order validation in `zod/order-schema.ts`."
Task: "Create a new Mongoose schema for the Order model in `model/orderSchema.ts`."

# Launch T011, T012, and T013 together:
Task: "Add form validation and error handling to the `WhatsappOrderForm` component."
Task: "Ensure the `WhatsappOrderModal` is responsive and works well on mobile devices."
Task: "Add loading states to the `WhatsappOrderButton` and `WhatsappOrderForm` to provide user feedback during form submission."
```
