# AI Test Automation Framework — OrangeHRM Demo

This repository is a compact demonstration of an AI-oriented test automation framework built on Playwright, TypeScript, and Gherkin. It shows how to structure BDD scenarios, Page Objects, and agent skills to support lifecycle tasks such as planning, execution, refactoring, and code review.

## Tech stack

- Node.js + TypeScript
- Playwright (browser automation)
- playwright-bdd (Gherkin → Playwright test compilation)
- Gherkin feature files for scenarios

## Quick start

Install dependencies and browsers, then copy the example env:

```bash
npm install
npx playwright install chromium
cp .env.example .env
```

The public demo application uses the demo credentials; keep secrets out of the repo and configurable via the env file.

## Run tests

Common commands (defined in `package.json`):

```bash
npm run typecheck
npm run test:list
npm run test:smoke
npm run test:regression
npm run test:headed
npm run test:report
```

## Project layout

- [features/](features/) — Gherkin feature files (scenarios)
- [steps/](steps/) — step definitions and bindings
- [src/](src/) — Page Objects, fixtures, helpers (UI code under [src/ui/pages/](src/ui/pages/))
- [playwright.config.ts](playwright.config.ts) — Playwright runner config

## Agent skills and orchestrator

This workspace includes agent skills under [.github/skills/](.github/skills/) that define trusted behaviors for test-planning, execution, refactoring, and code review. The `orangehrm-test-lifecycle` skill routes requests to the appropriate phase and uses an orchestrator skill for handoffs — see [.github/skills/README.md](.github/skills/README.md) for details.

If you use agent-based automation or developer assistants, follow the handoff contract described by the skills: always list files read/changed, commands run, artifacts produced (traces/screenshots), and recommended next steps.

## Tips and conventions

- Prefer stable locators: `getByRole`, `getByLabel`, `getByPlaceholder`, and explicit test IDs.
- Keep locators and browser actions inside Page Objects; keep assertions in steps or scenario code.
- Avoid `waitForTimeout`, brittle XPaths, committed secrets, or `any` types in TypeScript.

## Contributing

See [AGENT.md](AGENT.md) for agent/workflow guidance and the skills under [.github/skills/](.github/skills/) for lifecycle rules. Open an issue or PR for improvements.

---
Small, focused demo showing how Playwright + Gherkin and agent skills can work together for automated testing.
