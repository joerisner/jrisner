import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has expected title', async ({ page }) => {
    await expect(page).toHaveTitle('Joseph Risner');
  });

  test('has expected behavior for links on page', async ({ page }) => {
    const employerLink = page.getByTestId('employerLink');
    const githubLink = page.getByTestId('githubLink');
    const blogLink = page.getByTestId('blogLink');

    await expect(employerLink).toHaveText('Aumni');
    await expect(employerLink).toHaveAttribute('href', 'https://aumni.fund');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/joerisner');
    await expect(blogLink).toHaveText('Check out the latest blog articles');
    await expect(blogLink).toHaveAttribute('href', '/blog');

    await blogLink.click();
    await expect(page).toHaveTitle('Blog | Joseph Risner');
    await expect(page).toHaveURL('/blog');
  });
});
