---
name: test-execution
description: "Use when executing, debugging, or validating OrangeHRM Playwright BDD tests, generating scenarios, investigating failures, or collecting reports and traces."
---

# Test Execution

Run the smallest useful check first and expand only when it passes or reveals a concrete adjacent issue.

## Workflow

1. Read the feature, relevant steps, Page Objects, configuration, and environment assumptions.
2. Confirm the Playwright MCP server is available. Use it to inspect the current DOM when a locator or visible behavior is uncertain.
3. Run `npm run typecheck` when TypeScript changed.
4. Run `npm run test:list` to verify BDD generation and scenario discovery.
5. Run the narrowest tag or scenario, beginning with `npm run test:smoke` when applicable.
6. On failure, capture the first actionable error, URL, DOM state, and artifact paths. Inspect the trace before changing code.
7. Fix only the controlling local defect, then rerun the same focused command.
8. Expand to `npm run test:regression` and repeat the suite when the focused check passes.

## Rules

- Never use `waitForTimeout` to mask synchronization problems.
- Never claim success without a passing command result.
- Distinguish product failures, test defects, locator drift, environment outages, and missing credentials.
- Do not retry indefinitely or change multiple unrelated slices at once.
- Report exact commands, pass/fail counts, duration when available, and artifact paths.
