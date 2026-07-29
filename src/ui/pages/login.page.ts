import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly loginError: Locator;

  public constructor(private readonly page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.loginError = page.locator('.oxd-alert-content-text');
  }

  public async open(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
  }

  public async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click({ noWaitAfter: true });
  }

  public async submitEmptyForm(): Promise<void> {
    await this.loginButton.click();
  }

  public async openPasswordRecovery(): Promise<void> {
    await this.forgotPasswordLink.click();
  }

  public async expectLoginPage(): Promise<void> {
    await expect(this.page).toHaveURL(/\/auth\/login/);
  }
}
