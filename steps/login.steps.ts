import { expect } from '@playwright/test';
import { createBdd, test as bddTest } from 'playwright-bdd';
import { demoCredentials, invalidCredentials } from '../src/data/auth.data';
import { createTestContext, type TestContext } from '../src/fixtures/test-context';

const { Given, When, Then } = createBdd(bddTest);

function context(world: { page: Parameters<typeof createTestContext>[0] }): TestContext {
  return createTestContext(world.page);
}

Given('I am on the OrangeHRM login page', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.open();
});

When('I log in with the demo credentials', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.login(demoCredentials.username, demoCredentials.password);
});

When('I log in with invalid credentials', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.login(invalidCredentials.username, invalidCredentials.password);
});

When('I submit the login form with the username missing', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.passwordInput.fill(demoCredentials.password);
  await testContext.loginPage.submitEmptyForm();
});

When('I submit the login form with the password missing', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.usernameInput.fill(demoCredentials.username);
  await testContext.loginPage.submitEmptyForm();
});

When('I submit the login form with both fields missing', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.submitEmptyForm();
});

Then('I should see the OrangeHRM dashboard', async ({ page }) => {
  await context({ page }).dashboardPage.expectDashboard();
});

Then('I should remain on the OrangeHRM login page', async ({ page }) => {
  await context({ page }).loginPage.expectLoginPage();
});

Then('I should see the invalid credentials message', async ({ page }) => {
  await expect(context({ page }).loginPage.loginError).toContainText('Invalid credentials');
});

Then('I should see a required field validation message', async ({ page }) => {
  await expect(page.getByText('Required', { exact: true }).first()).toBeVisible();
});

When('I open the password recovery page', async ({ page }) => {
  await context({ page }).loginPage.openPasswordRecovery();
});

Then('I should see the password recovery form', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /reset password/i })).toBeVisible();
  await expect(page.getByPlaceholder('Username')).toBeVisible();
});

Given('I am logged in with the demo credentials', async ({ page }) => {
  const testContext = context({ page });
  await testContext.loginPage.open();
  await testContext.loginPage.login(demoCredentials.username, demoCredentials.password);
  await testContext.dashboardPage.expectDashboard();
});

When('I log out from the dashboard', async ({ page }) => {
  await context({ page }).dashboardPage.logout();
});
