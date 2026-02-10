import { test, expect } from '@playwright/test';

test('Catalog', async ({ page }) => {
  await page.goto('/');

  // Guest login
  const enterButton = page.getByRole('button', { name: 'Enter' });
  await expect(enterButton).toBeVisible();
  await enterButton.click();

  await page.locator('nav').getByRole('link', { name: 'Catalog' }).click();

  await expect(page.getByText('Demo Catalog')).toBeVisible();
});
