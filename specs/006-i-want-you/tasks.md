# Tasks: Design a Login Page

**Input**: Design documents from `/specs/006-i-want-you/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- The project uses a Next.js App Router structure.

## Phase 3.1: Setup
- [ ] T001 Ensure `better-auth` and `better-sqlite3` are installed by running `pnpm install`.
- [ ] T002 Configure `better-auth` in `lib/auth.ts` by initializing it with the database connection from `lib/db.ts`.
- [ ] T003 Generate the database schema for `better-auth` by running the `better-auth` CLI `generate` command.
- [ ] T004 Create the `better-auth` API route at `app/api/auth/[...all]/route.ts`.

## Phase 3.2: Core Implementation
- [ ] T005 Create the login page UI at `app/login/page.tsx`. This page will contain a form with `username/email` and `password` fields.
- [ ] T006 Implement the client-side logic for the login page in `app/login/page.tsx` to use the `signIn` method from `better-auth/client`.

## Phase 3.3: Integration
- [ ] T007 Add logging for login attempts in the `better-auth` configuration in `lib/auth.ts`.

## Phase 3.4: Polish
- [ ] T008 [P] Ensure the login page is responsive and works well on mobile, tablet, and desktop screens.
- [ ] T009 Manually test the login flow following the steps in `quickstart.md`.

## Dependencies
- **T001, T002, T003, T004** must be completed before **T005, T006**.
- **T005, T006** must be completed before **T007, T008, T009**.

## Parallel Example
```
# T008 can be run in parallel with other tasks in Phase 3.4
Task: "Ensure the login page is responsive and works well on mobile, tablet, and desktop screens."
```