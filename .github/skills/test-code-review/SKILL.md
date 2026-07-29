---
name: test-code-review
description: "Use when reviewing OrangeHRM Playwright BDD test code, pull requests, Page Objects, step definitions, fixtures, or CI configuration for bugs, flakiness, and maintainability risks."
---

# Test Code Review

Review as a defect-finding exercise. Read the feature, steps, Page Objects, fixtures, configuration, and relevant test output before forming conclusions.

## Review order

1. Correctness and missing coverage
2. Authentication, secrets, and unsafe state handling
3. Flakiness, synchronization, retries, and scenario independence
4. Locator resilience and live-DOM alignment
5. Assertion strength and URL/authentication-state verification
6. BDD readability and step reuse
7. Type safety, architecture, reporting, and CI behavior

## Required finding format

For each finding, report:

- Severity: critical, high, medium, or low
- File reference
- Problem
- Why it matters
- Concrete remediation, preferably with a before/after example

Findings come before summaries. Do not say “looks good.” If no findings exist, say so clearly and list remaining test gaps or residual risk.

## Rules

- Use Playwright MCP to confirm questionable locators or UI assumptions against the live DOM.
- Flag `waitForTimeout`, XPath, brittle CSS chains, hidden hardcoded credentials, shared mutable browser state, assertions inside Page Objects, and tests that pass without asserting the user-visible outcome.
- Do not request unrelated refactors. Keep recommendations tied to observed behavior and repository conventions.
