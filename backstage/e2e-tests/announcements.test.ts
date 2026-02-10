import { test, expect } from '@playwright/test';

test('Announcements', async ({ page }) => {
  await page.goto('/');

  // Guest login
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.locator('nav').getByRole('link', { name: 'Announcements' }).click();

  await expect(page.locator('.bui-HeaderPage').getByText('Announcements')).toBeVisible();
  await expect(page.locator('.bui-HeaderPage + *').getByText('No announcements found.')).toBeVisible();
});
