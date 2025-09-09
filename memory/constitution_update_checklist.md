# Constitution Update Checklist

When amending the constitution (`/memory/constitution.md`), ensure all dependent documents are updated to maintain consistency.

## Templates to Update

### When adding/modifying ANY article:
- [ ] `/templates/plan-template.md` - Update Constitution Check section
- [ ] `/templates/spec-template.md` - Update if requirements/scope affected
- [ ] `/templates/tasks-template.md` - Update if new task types needed
- [ ] `/.gemini/commands/plan.toml` - Update if planning process changes
- [ ] `/.gemini/commands/specify.toml` - Update if specification process changes
- [ ] `/.gemini/commands/tasks.toml` - Update if task generation affected

### Article-specific updates:

#### Article I (Project Vision):
- [ ] Ensure templates reflect the e-commerce focus for sneakers/shoes.

#### Article II (Technology Stack):
- [ ] Verify that code generation and file templates adhere to Next.js App Router conventions.
- [ ] Add checks to prevent the creation or use of a `src/` directory.
- [ ] Ensure all examples and templates use TypeScript.

#### Article III (Design Standards):
- [ ] Update component examples in templates to use ShadCN components.
- [ ] Ensure all styling examples use TailwindCSS utility classes.

#### Article IV (Component Management):
- [ ] Add reminders to check `components.json` before adding new components.
- [ ] Update documentation on how to import/add components from the defined registries.

## Validation Steps

1. **Before committing constitution changes:**
   - [ ] All templates reference new requirements.
   - [ ] Examples updated to match new rules.
   - [ ] No contradictions between documents.

2. **After updating templates:**
   - [ ] Run through a sample implementation plan.
   - [ ] Verify all constitution requirements are addressed.
   - [ ] Check that templates are self-contained (readable without the constitution).

3. **Version tracking:**
   - [ ] Update the constitution version number.
   - [ ] Note the new version in template footers.
   - [ ] Add the amendment to the constitution's history.

## Common Misses

Watch for these often-forgotten updates:
- Command configurations (`/.gemini/commands/*.toml`)
- Checklist items in templates
- Example code/commands
- Cross-references between documents

## Template Sync Status

Last sync check: 2025-09-09
- Constitution version: 1.0.0
- Templates aligned: ✅

---

*This checklist ensures the constitution's principles are consistently applied across all project documentation.*
