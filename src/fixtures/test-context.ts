import type { Page } from '@playwright/test';
import { DashboardPage } from '../ui/pages/dashboard.page';
import { LoginPage } from '../ui/pages/login.page';

export interface TestContext {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly dashboardPage: DashboardPage;
}

export function createTestContext(page: Page): TestContext {
  return {
    page,
    loginPage: new LoginPage(page),
    dashboardPage: new DashboardPage(page),
  };
}
