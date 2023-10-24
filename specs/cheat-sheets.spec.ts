import { test, expect } from '@playwright/test';

test.describe('Cheat Sheets Page', () => {
  test('displays cheat sheets with expected links', async ({ page }) => {
    const expectedCheatSheets = ['Git', 'Java Access Modifiers', 'Java Annotations', 'JavaScript Arrays'];
    const allPanelTitles = await page.getByTestId('panel-title').all();

    await page.goto('/cheat-sheets');
    await expect(page.getByTestId('panel')).toHaveCount(expectedCheatSheets.length);
    await expect(page.getByTestId('panel-body')).toHaveText(expectedCheatSheets);

    for (const panelTitle of allPanelTitles) {
      await expect(panelTitle).toHaveText('Cheat sheet');
    }

    for (const [index, feature] of expectedCheatSheets.entries()) {
      await page.getByTestId('panel').nth(index).click();
      await expect(page.getByRole('heading', { name: `${feature} Cheat Sheet` })).toBeVisible();
      await page.goto('/cheat-sheets');
    }
  });
});
