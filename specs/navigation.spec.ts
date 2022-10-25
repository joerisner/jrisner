import { test, expect } from '@playwright/test';
import { capitalize } from './utils/string.js';

test.describe('Navigation Links', () => {
  test('navigates to each page successfully', async ({ page }) => {
    await page.goto('/');

    const expectedLinks = ['home', 'blog', 'about', 'resume'];
    const allNavLinks = page.getByTestId('navLink');

    await expect(allNavLinks).toHaveText(expectedLinks, { ignoreCase: false });

    for (const link of expectedLinks) {
      await page.locator('[data-testid=navLink]', { hasText: link }).click();

      if (link === 'home') {
        await expect(page).toHaveTitle('Joseph Risner');
        await expect(page).toHaveURL('/');
      } else {
        await expect(page).toHaveTitle(`${capitalize(link)} | Joseph Risner`);
        await expect(page).toHaveURL(`/${link}`);
      }
    }
  });
});
