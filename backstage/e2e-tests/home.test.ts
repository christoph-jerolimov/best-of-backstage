import { test, expect } from '@playwright/test';

test('Home', async ({ page }) => {
  await page.goto('/');

  // Guest login
  await page.getByRole('button', { name: 'Enter' }).click();

  await expect(page.locator('article').getByText('Recently Visited')).toBeVisible();
});
