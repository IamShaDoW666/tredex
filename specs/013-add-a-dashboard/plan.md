# Implementation Plan: Product Edit Page

**Branch**: `013-add-a-dashboard` | **Date**: 2025-09-21 | **Spec**: [link](./spec.md)
**Input**: Feature specification from `/specs/013-add-a-dashboard/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

## Summary
The primary requirement is to create a product edit page at `dashboard/product/[id]/edit`. This page will be a clone of the create page, but it will be pre-populated with the existing data for the selected product. The user will be able to modify and update the product information.

## Technical Context
**Language/Version**: TypeScript
**Primary Dependencies**: Next.js, React, TailwindCSS, better-auth, zustand, mongoose
**Storage**: MongoDB
**Testing**: pnpm test
**Target Platform**: Web
**Project Type**: Web Application
**Performance Goals**: N/A
**Constraints**: N/A
**Scale/Scope**: N/A

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (web app)
- Using framework directly? Yes
- Single data model? Yes
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? No
- Libraries listed: N/A
- CLI per library: N/A
- Library docs: N/A

**Testing**:
- Tests are implemented only when requested or deemed necessary.

**Observability**:
- Structured logging included? No
- Frontend logs → backend? No
- Error context sufficient? Yes

**Responsiveness**:
- Mobile-first approach planned? Yes
- All UI components responsive? Yes

**Versioning**:
- Version number assigned? No
- BUILD increments on every change? No
- Breaking changes handled? N/A

## Project Structure

### Documentation (this feature)
```
specs/013-add-a-dashboard/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
app/
components/
hooks/
lib/
```

**Structure Decision**: Option 1: Single Project (Next.js App Router)

## Phase 0: Outline & Research
Research is complete. The decision is to use MongoDB for product data. See `research.md` for details.

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
Design and contracts are complete. See the generated artifacts for details.

**Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Create a new page component at `app/(admin)/dashboard/product/[id]/edit/page.tsx`.
- This page will be a copy of the `app/(admin)/dashboard/product/create/page.tsx`.
- Fetch the product data using the `id` from the URL with a Mongoose query.
- Hydrate the form with the fetched data.
- Create a server action to handle the form submission.
- The server action will validate the data and update the product in the MongoDB database using Mongoose.
- The UI will be updated to show a success or error message.

**Ordering Strategy**:
1.  Create the page component.
2.  Implement the data fetching logic using Mongoose.
3.  Implement the form hydration.
4.  Implement the server action for updating the product using Mongoose.
5.  Connect the server action to the form.

**Estimated Output**: 5-7 numbered, ordered tasks in tasks.md

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `GEMINI.md`*