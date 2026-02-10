import { test, expect } from '@playwright/test';

test('Notifications', async ({ page }) => {
  await page.goto('/');

  // Guest login
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.locator('nav').getByRole('link', { name: 'Notifications' }).click();

  await expect(page.locator('header').getByText('Notifications')).toBeVisible();
  await expect(page.locator('article').getByText('Unread notifications (0)')).toBeVisible();
});
