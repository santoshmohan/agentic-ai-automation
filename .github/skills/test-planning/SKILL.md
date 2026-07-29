---
name: test-planning
description: "Use when creating a test plan, Gherkin scenarios, coverage matrix, acceptance criteria, or BDD test cases for OrangeHRM. Planning produces scenarios only and does not write automation code."
---

# Test Planning

Create an automation-ready plan for the requested OrangeHRM workflow.

## Workflow

1. Identify the feature boundary, user goal, risk, and out-of-scope behavior.
2. Use Playwright MCP to navigate the live application and inspect DOM snapshots. Confirm labels, roles, URLs, validation text, and visible state before describing locators or expected results.
3. Separate happy path, validation, negative, navigation, authorization, and recovery scenarios.
4. Choose `@smoke`, `@regression`, and feature tags deliberately. Use a Scenario Outline only when examples share the same behavior.
5. Define preconditions, test data source, browser-state requirements, expected URL/state, and cleanup needs.
6. Record environment risks such as public-demo instability, rate limiting, reset data, and unavailable email delivery.

## Output

Provide:

- Scope and assumptions
- Coverage matrix
- Gherkin-ready scenarios
- Tags and priority
- Test data and state strategy
- Observable assertions
- Risks and open questions
- Handoff for execution

Do not create `.ts` files, Page Objects, step definitions, or generated tests during planning. Do not invent UI text, endpoints, validations, or credentials that were not confirmed by the live DOM or supplied by the user.
