# Tasks: Mobile Navigation Toggle Menu

**Input**: Design documents from `/specs/003-i-want-to/`
**Prerequisites**: plan.md (required), research.md, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
   → quickstart.md: Extract usage scenarios → test/validation tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: The project already has `app/` and `components/` at the root. New components will be placed in `components/`.

## Phase 3.1: Setup
- [x] T001 Add ShadCN `Sheet` component.
    - **Description**: Install the ShadCN `Sheet` component using the ShadCN CLI.
    - **Command**: `npx shadcn-ui@latest add sheet`
    - **Dependencies**: None
    - **Notes**: This will create `components/ui/sheet.tsx`.
- [x] T002 Add ShadCN `Button` component.
    - **Description**: Install the ShadCN `Button` component using the ShadCN CLI.
    - **Command**: `npx shadcn-ui@latest add button`
    - **Dependencies**: None
    - **Notes**: This will create `components/ui/button.tsx`.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [x] T003 [P] Create a basic test file for `MobileNavToggle` component.
    - **Description**: Create a new test file `components/MobileNavToggle.test.tsx` to house tests for the `MobileNavToggle` component. Initially, add a placeholder test that asserts the component renders without crashing.
    - **File**: `components/MobileNavToggle.test.tsx`
    - **Dependencies**: T001, T002
    - **Notes**: This test should initially fail or be a simple placeholder.
- [x] T004 [P] Write an acceptance test for toggling the mobile menu.
    - **Description**: Write a test in `components/MobileNavToggle.test.tsx` that simulates tapping the toggle button and asserts that the navigation menu appears.
    - **File**: `components/MobileNavToggle.test.tsx`
    - **Dependencies**: T003
    - **Notes**: This test should fail until the toggle logic is implemented.
- [x] T005 [P] Write an acceptance test for closing the mobile menu.
    - **Description**: Write a test in `components/MobileNavToggle.test.tsx` that simulates tapping outside the menu or tapping the toggle button again, and asserts that the navigation menu disappears.
    - **File**: `components/MobileNavToggle.test.tsx`
    - **Dependencies**: T003
    - **Notes**: This test should fail until the toggle logic is implemented.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [x] T006 Create `MobileNavToggle.tsx` component file.
    - **Description**: Create a new React component file `components/MobileNavToggle.tsx` with the basic structure for the mobile navigation toggle, including `Sheet`, `SheetTrigger`, `SheetContent`, `Button`, and a placeholder for navigation links. Ensure `"use client"` directive is present.
    - **File**: `components/MobileNavToggle.tsx`
    - **Dependencies**: T001, T002, T003, T004, T005
    - **Notes**: Refer to `quickstart.md` for the initial code structure.
- [x] T007 Implement toggle logic and state management in `MobileNavToggle.tsx`.
    - **Description**: Implement the state management for opening and closing the `Sheet` using React's `useState` hook.
    - **File**: `components/MobileNavToggle.tsx`
    - **Dependencies**: T006
    - **Notes**: The `Sheet` component handles much of this internally, but ensure the trigger button correctly controls its visibility.
- [x] T008 Integrate `MobileNavToggle` into `Header.tsx`.
    - **Description**: Import and use the `MobileNavToggle` component within `components/feature/landing-page/Header.tsx`. Ensure it's only visible on mobile viewports using TailwindCSS classes (`md:hidden`).
    - **File**: `components/feature/landing-page/Header.tsx`
    - **Dependencies**: T006
    - **Notes**: Add the component to the appropriate section of the header for mobile view.
- [x] T009 Populate navigation links in `MobileNavToggle.tsx`.
    - **Description**: Replace the placeholder navigation links in `MobileNavToggle.tsx` with actual navigation links relevant to the application.
    - **File**: `components/MobileNavToggle.tsx`
    - **Dependencies**: T007
    - **Notes**: Use `<a>` tags or `Link` components from Next.js if applicable.

## Phase 3.5: Polish
- [ ] T010 Verify responsiveness and smooth animations.
    - **Description**: Manually test the mobile navigation toggle on various mobile device emulators and screen sizes to ensure it is fully responsive and animations are smooth.
    - **Dependencies**: T008, T009
    - **Notes**: Check for visual glitches, proper opening/closing, and correct navigation.

## Dependencies
- T001, T002 must be completed before T003, T006.
- T003 must be completed before T004, T005.
- T006 must be completed before T007, T008.
- T007 must be completed before T009.
- T008, T009 must be completed before T010.
- Tests (T003-T005) must be written and fail before any core implementation (T006-T009).

## Parallel Example
```
# Launch T001 and T002 together (if not already installed):
Task: "Add ShadCN `Sheet` component."
Task: "Add ShadCN `Button` component."

# Launch T003, T004, T005 together (after T001, T002):
Task: "Create a basic test file for `MobileNavToggle` component."
Task: "Write an acceptance test for toggling the mobile menu."
Task: "Write an acceptance test for closing the mobile menu."
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**: N/A
2. **From Data Model**: N/A
3. **From User Stories**:
   - Primary User Story: Covered by T004, T005, T010.
   - Acceptance Scenarios: Covered by T004, T005, T010.
   - Quickstart scenarios → validation tasks: Covered by T010.

4. **Ordering**:
   - Setup → Tests → Core Implementation → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests: N/A
- [ ] All entities have model tasks: N/A
- [ ] All tests come before implementation: Yes
- [ ] Parallel tasks truly independent: Yes
- [ ] Each task specifies exact file path: Yes
- [ ] No task modifies same file as another [P] task: Yes
