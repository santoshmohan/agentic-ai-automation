---
name: orangehrm-test-lifecycle
description: "Use when planning, executing, refactoring, or reviewing OrangeHRM Playwright BDD tests in this workspace. Route the request to the matching lifecycle phase and preserve the handoff context."
---

# OrangeHRM Test Lifecycle

Use this skill as the entry point for work on the OrangeHRM Playwright + TypeScript + Gherkin automation framework.

## Route the request

- Test scenarios, coverage, acceptance criteria, or Gherkin design: follow `.github/skills/test-planning/SKILL.md`.
- Running tests, diagnosing a failure, or validating a change: follow `.github/skills/test-execution/SKILL.md`.
- Improving structure without changing behavior: follow `.github/skills/test-refactoring/SKILL.md`.
- Reviewing test code or a pull request: follow `.github/skills/test-code-review/SKILL.md`.
- If multiple phases are requested, complete them in this order: plan, execute, refactor, review.

## Shared rules

- Use Playwright with TypeScript and `playwright-bdd`.
- Inspect the live OrangeHRM DOM with Playwright MCP before choosing or changing locators.
- Prefer `getByRole`, `getByLabel`, `getByPlaceholder`, and stable test IDs. Avoid XPath, brittle CSS chains, `nth-child`, and `waitForTimeout`.
- Keep selectors and browser actions in Page Objects or components. Keep assertions in step definitions or scenario-level test code.
- Keep scenarios independent and isolate browser state. Never commit `.env`, credentials, cookies, or storage state.
- Use strict TypeScript and explicit types. Do not add `any`.
- Preserve the existing architecture: Gherkin in `features/`, bindings in `steps/`, reusable code in `src/`.

## Handoff contract

Every completed phase must report:

- Feature/scenario scope
- Files read or changed
- Exact command(s) run
- Result and, for failures, the first actionable error
- Report, trace, screenshot, or video artifact paths
- Known limitations and environment assumptions
- Recommended next phase

Do not claim that a test passes without showing the command result. Do not hide an unverified locator or an unexecuted scenario behind a confident summary.
