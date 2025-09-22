# Implementation Plan: Order on WhatsApp

**Branch**: `015-order-on-whatsapp` | **Date**: 2025-09-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/015-order-on-whatsapp/spec.md`

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
The feature will add an "Order on WhatsApp" button to the product details page. Clicking this button will open a modal with a form for the customer to enter their details. Upon submission, the order will be saved to the MongoDB database, and a pre-formatted WhatsApp message will be generated to be sent to the merchant using the `api.whatsapp.com/send` URL.

## Technical Context
**Language/Version**: TypeScript
**Primary Dependencies**: Next.js, React, MongoDB, Mongoose, Zod
**Storage**: MongoDB
**Testing**: N/A
**Target Platform**: Web
**Project Type**: Web application
**Performance Goals**: N/A
**Constraints**: N/A
**Scale/Scope**: N/A

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1
- Using framework directly? Yes
- Single data model? Yes
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? No
- Libraries listed: N/A
- CLI per library: N/A
- Library docs: N/A

**Testing**:
- Tests are implemented only when requested or deemed necessary. - Compliant

**Observability**:
- Structured logging included? [NEEDS CLARIFICATION: Is structured logging required for this feature?]
- Frontend logs → backend? [NEEDS CLARIFICATION: Is frontend logging to backend required?]
- Error context sufficient? [NEEDS CLARIFICATION: What level of error context is needed?]

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
specs/015-order-on-whatsapp/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# The project follows a single project structure with Next.js App Router.
app/
components/
hooks/
lib/
...etc
```

**Structure Decision**: The existing project structure will be followed.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - Research structured logging requirements for the feature.
   - Research if frontend logs need to be sent to the backend.
   - Research the required level of error context for logging.
   - Research best practices for using `api.whatsapp.com/send` for pre-formatted messages.

2. **Consolidate findings** in `research.md`.

**Output**: `research.md` with all NEEDS CLARIFICATION resolved.

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - **Order**: `name` (string), `phone` (string), `address` (string), `extraDetails` (string), `product` (ObjectId, ref: 'Product'), `createdAt` (Date).

2. **Generate API contracts** from functional requirements:
   - **POST /api/orders**: Create a new order. Request body will match the Order entity. Response will be the created order or a success message.
   - Output OpenAPI schema to `/contracts/`

3. **Update agent file incrementally** (`GEMINI.md`):
   - Add `whatsapp` to the active technologies.
   - Add a new command for creating an order.

**Output**: `data-model.md`, `/contracts/openapi.json`, `quickstart.md`, `GEMINI.md`

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Create a new Zod schema for the order in `@/zod`.
- Create a new Mongoose schema for the order in `model/`.
- Create a new API route in `app/api/orders/` to handle order creation.
- Create a new form component in `components/feature/` for the order modal.
- Create a new modal component in `components/ui/` to house the form.
- Add the "Order on WhatsApp" button to the product details page.
- Implement the client-side logic to open the modal, handle form submission, and construct the WhatsApp URL.

**Ordering Strategy**:
- Backend tasks first (schemas, API route), then frontend tasks.

**Estimated Output**: 10-15 numbered, ordered tasks in `tasks.md`.

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
|           |            |                                     |

## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [X] Phase 0: Research complete (/plan command)
- [X] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [X] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v1.3.0 - See `/memory/constitution.md`*