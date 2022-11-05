import { test, expect } from '@playwright/test';

test.describe('Navigation - Large Viewport', () => {
  test('navigates to each page successfully', async ({ page }) => {
    await page.goto('/');

    const expectedLinks = ['Blog', 'Projects', 'About'];
    const allNavLinks = page.getByTestId('navLink');

    await expect(page.getByTestId('mobileNavToggle')).not.toBeVisible();
    await expect(allNavLinks).toHaveText(expectedLinks, { ignoreCase: false });

    for (const link of expectedLinks) {
      await page.locator('[data-testid=navLink]', { hasText: link }).click();

      await expect(page).toHaveTitle(`${link} | Joseph Risner`);
      await expect(page).toHaveURL(`/${link.toLowerCase()}`);
    }
  });
});

test.describe('Navigation - Mobile Viewport', () => {
  test('displays navigation overlay with nav links', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 940 });
    await page.goto('/');

    const expectedLinks = ['Blog', 'Projects', 'About'];
    const navToggle = page.getByTestId('mobileNavToggle');

    await expect(navToggle).toBeVisible();
    await navToggle.click();

    for (const link of expectedLinks) {
      const el = page.locator('[data-testid=navLink]', { hasText: link });

      await expect(el).toBeVisible();
      await expect(el).toHaveAttribute('href', `/${link.toLowerCase()}`);
    }
  });
});
