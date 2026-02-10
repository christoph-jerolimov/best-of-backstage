import { test, expect } from '@playwright/test';

test('Catalog', async ({ page }) => {
  await page.goto('/');

  // Guest login
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.locator('nav').getByRole('link', { name: 'Catalog' }).click();

  await expect(page.locator('header').getByText('Demo Catalog')).toBeVisible();
});
