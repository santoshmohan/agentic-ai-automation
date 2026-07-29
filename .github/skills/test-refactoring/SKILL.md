---
name: test-refactoring
description: "Use when refactoring OrangeHRM Playwright BDD tests, extracting Page Objects or fixtures, removing duplication, improving locators, or stabilizing test structure without changing behavior."
---

# Test Refactoring

Refactor in small, behavior-preserving slices.

## Workflow

1. Establish a baseline with the narrowest relevant test command and `npm run typecheck`.
2. Identify the owning abstraction: feature, step binding, Page Object, component, fixture, or utility.
3. Move selectors and browser actions out of steps into the nearest Page Object or reusable component.
4. Extract fixtures only when setup/state is genuinely shared and scenario isolation remains clear.
5. Replace brittle selectors and fixed waits with semantic locators and web-first assertions after confirming the live DOM with Playwright MCP.
6. Keep Gherkin business-readable and avoid moving implementation details into feature files.
7. Rerun the same focused test and type check immediately after the slice.
8. Expand to the related regression tag only after the focused check passes.

## Invariants

- Scenario behavior and coverage remain unchanged unless the request explicitly changes them.
- Assertions stay outside Page Objects.
- No secrets, shared mutable state, `any`, XPath, or `waitForTimeout` are introduced.
- Do not refactor unrelated files or report improved quality without executable validation.

Report the baseline, each refactoring slice, validation commands, results, and any residual risk.
