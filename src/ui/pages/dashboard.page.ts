import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly pageHeading: Locator;
  readonly userMenu: Locator;
  readonly logoutLink: Locator;

  public constructor(private readonly page: Page) {
    this.pageHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.userMenu = page.locator('.oxd-userdropdown-tab');
    this.logoutLink = page.getByText('Logout', { exact: true });
  }

  public async expectDashboard(): Promise<void> {
    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(this.pageHeading).toBeVisible();
  }

  public async openUserMenu(): Promise<void> {
    await this.userMenu.click();
  }

  public async logout(): Promise<void> {
    await this.openUserMenu();
    await this.logoutLink.click();
  }
}
