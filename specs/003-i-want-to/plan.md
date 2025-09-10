# Implementation Plan: Mobile Navigation Toggle Menu

**Branch**: `003-i-want-to` | **Date**: Wednesday, September 10, 2025 | **Spec**: /specs/003-i-want-to/spec.md
**Input**: Feature specification from `/specs/003-i-want-to/spec.md`

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

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
This feature will implement a mobile navigation toggle menu. Users will be able to toggle a side-sliding navigation menu to view and access navigation links. The implementation will leverage Next.js, TypeScript, TailwindCSS, and ShadCN UI components, adhering to a mobile-first responsive design.

## Technical Context
**Language/Version**: TypeScript, React (Next.js App Router)
**Primary Dependencies**: Next.js, React, TailwindCSS, ShadCN UI
**Storage**: N/A (UI component)
**Testing**: Manual testing on various mobile viewports.
**Target Platform**: Web (responsive for mobile and desktop browsers)
**Project Type**: Web application (frontend)
**Performance Goals**: Smooth animations (60fps), minimal impact on page load time.
**Constraints**: Must be fully responsive, adhere to existing design system (ShadCN, TailwindCSS).
**Scale/Scope**: Single UI component, integrated into existing header/layout.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (web application)
- Using framework directly? Yes (Next.js, React)
- Single data model? N/A (UI component)
- Avoiding patterns? Yes (no unnecessary patterns)

**Architecture**:
- EVERY feature as library? No (integrated into existing app structure)
- Libraries listed: N/A (using existing project structure)
- CLI per library: N/A
- Library docs: N/A

**Testing**:
- Tests are implemented only when requested or deemed necessary. (Will rely on manual testing for this UI component unless issues arise).

**Observability**:
- Structured logging included? N/A (UI component)
- Frontend logs → backend? N/A
- Error context sufficient? N/A

**Responsiveness**:
- Mobile-first approach planned? Yes
- All UI components responsive? Yes

**Versioning**:
- Version number assigned? (Handled at project level)
- BUILD increments on every change? (Handled by CI/CD)
- Breaking changes handled? (N/A for this component)

## Project Structure

### Documentation (this feature)
```
specs/003-i-want-to/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
```

**Structure Decision**: Web application (frontend) - The project already has `app/` and `components/` at the root, which aligns with a Next.js frontend structure without a separate `src/` or `frontend/` directory. New components will be placed in `components/`.

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - How to best integrate the mobile navigation toggle into the existing `Header.tsx` or `layout.tsx` to ensure it's only visible on mobile viewports.
   - Specific ShadCN component to use for the side menu (Sheet, Drawer, or custom).
   - How to manage the state of the navigation menu (open/closed).

2. **Generate and dispatch research agents**:
   - Task: "Research best practices for integrating mobile-specific UI components in Next.js with TailwindCSS."
   - Task: "Investigate ShadCN UI components (Sheet, Drawer) for suitability as a side-sliding navigation menu."
   - Task: "Determine optimal state management for a simple UI toggle in React."

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - N/A (No new data entities for this UI component)

2. **Generate API contracts** from functional requirements:
   - N/A (No new API contracts for this UI component)

3. **Update agent file incrementally** (O(1) operation):
   - Run `/scripts/update-agent-context.sh gemini`
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md (empty or N/A), /contracts/* (empty or N/A), quickstart.md, agent-specific file

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (quickstart) and the feature specification.
- Tasks will cover:
    - Adding ShadCN components (Sheet, Button).
    - Creating a new `MobileNavToggle.tsx` component.
    - Implementing toggle logic and state management.
    - Integrating the component into `Header.tsx` or `layout.tsx`.
    - Styling with TailwindCSS.
    - Populating navigation links.

**Ordering Strategy**:
- Dependency order: Add ShadCN components first, then create the new component, then integrate.
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 5-10 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

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
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*