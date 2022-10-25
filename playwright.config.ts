import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

// Read environment variables from file. See https://github.com/motdotla/dotenv
// require('dotenv').config();

// See https://playwright.dev/docs/test-configuration.
const config: PlaywrightTestConfig = {
  expect: {
    timeout: 6000, // Maximum time expect() should wait for the condition to be met
  },
  fullyParallel: true, // Run test blocks within files in parallel
  forbidOnly: !!process.env.CI, // Fail the build on CI for .only left in source code
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
  reporter: [['html', { open: 'never', outputFolder: './specs/report' }]], // Reporter to use. See https://playwright.dev/docs/test-reporters
  retries: process.env.CI ? 2 : 0, // Retry on CI only
  testDir: './specs',
  timeout: 30 * 1000, // Maximum time one test can run for
  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions
  use: {
    actionTimeout: 0, // Maximum time each action such as `click()` can take. Defaults to 0 (no limit)
    baseURL: 'http://localhost:4000',
    trace: 'on-first-retry', // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
  },
  // Start web server before running tests
  webServer: {
    command: 'yarn preview',
    reuseExistingServer: !process.env.CI, // Skip reusing an existing server on CI
    timeout: 120 * 1000,
    url: 'http://localhost:4000', // Waits for 2xx, 3xx, or 4xx response before running tests
  },
  workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI
};

export default config;
