import dotenv from 'dotenv';
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

dotenv.config();

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
});

export default defineConfig({
  testDir,
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }], ['junit', { outputFile: 'test-results/results.xml' }]],
  use: {
    baseURL: process.env.ORANGEHRM_URL ?? 'https://opensource-demo.orangehrmlive.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
