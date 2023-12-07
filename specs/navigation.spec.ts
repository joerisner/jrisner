import { test, expect } from '@playwright/test';

test.describe('Navigation - Large Viewport', () => {
  test('navigates to each page successfully', async ({ page }) => {
    const expectedLinks = ['Home', 'Cheat Sheets', 'About'];
    const allNavLinks = page.getByTestId('navLink');

    await page.goto('/');
    await expect(page).toHaveTitle('Joseph Risner');
    await expect(page.getByTestId('mobileNavToggle')).not.toBeVisible();
    await expect(allNavLinks).toHaveText(expectedLinks, { ignoreCase: false });

    for (const link of expectedLinks) {
      await page.locator('[data-testid=navLink]', { hasText: link }).click();

      if (link === 'Home') {
        await expect(page).toHaveTitle('Joseph Risner');
        await expect(page).toHaveURL('/');
      } else {
        await expect(page).toHaveTitle(`${link} | Joseph Risner`);
        await expect(page).toHaveURL(`/${link.toLowerCase().replace(' ', '-')}`);
      }
    }
  });
});

test.describe('Navigation - Mobile Viewport', () => {
  test('displays navigation overlay with nav links', async ({ page }) => {
    const expectedLinks = ['Home', 'Cheat Sheets', 'About'];
    const navToggle = page.getByTestId('mobileNavToggle');

    await page.setViewportSize({ width: 767, height: 940 });
    await page.goto('/');
    await expect(navToggle).toBeVisible();
    await navToggle.click();

    for (const link of expectedLinks) {
      const el = page.locator('[data-testid=navLink]', { hasText: link });

      await expect(el).toBeVisible();

      if (link === 'Home') {
        await expect(el).toHaveAttribute('href', '/');
      } else {
        await expect(el).toHaveAttribute('href', `/${link.toLowerCase().replace(' ', '-')}`);
      }
    }
  });
});
