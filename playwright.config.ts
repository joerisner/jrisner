import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  expect: {
    timeout: 6000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  outputDir: './specs/artifacts',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
  reporter: [['dot'], ['html', { open: 'never', outputFolder: './specs/report' }]],
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  testDir: './specs',
  timeout: 30 * 1000, // Maximum time one test can run
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions
  use: {
    actionTimeout: 0, // 0 = no limit
    baseURL: 'http://localhost:4000',
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    trace: 'on-first-retry',
  },
  // Start web server before running tests
  webServer: {
    command: 'yarn preview',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
    url: 'http://localhost:4000', // Waits for 2xx, 3xx, or 4xx response before running tests
  },
  workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI
};

export default config;
