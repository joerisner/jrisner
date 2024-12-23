import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('has expected behavior for links on page', async ({ page }) => {
    const githubLink = page.getByTestId('githubLink');
    const ctaButton = page.getByTestId('cta');

    await page.goto('/');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/joerisner');
    await expect(ctaButton).toHaveText('See my latest posts');
    await expect(ctaButton).toHaveAttribute('href', '/blog');
  });
});
