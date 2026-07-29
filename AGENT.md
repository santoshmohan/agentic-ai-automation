# OrangeHRM Automation Instructions

Use the OrangeHRM test lifecycle skills under `.github/skills/` for planning, execution, refactoring, and review.

This repository uses Playwright, TypeScript, Gherkin, and `playwright-bdd`. Inspect the live OrangeHRM DOM with Playwright MCP before selecting locators. Keep selectors and browser actions in Page Objects, assertions in steps or scenarios, and scenarios independent. Never use `waitForTimeout`, XPath, committed credentials, or `any`.
