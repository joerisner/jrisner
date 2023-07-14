import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('has expected behavior for links on page', async ({ page }) => {
    const githubLink = page.getByTestId('githubLink');
    const blogLink = page.getByTestId('blogLink');

    await page.goto('/');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/joerisner');
    await expect(blogLink).toHaveText('View my latest blog articles');
    await expect(blogLink).toHaveAttribute('href', '/blog');
  });
});
