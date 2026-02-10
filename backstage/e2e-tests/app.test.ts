import { test, expect } from '@playwright/test';

test('App', async ({ page }) => {
  await page.goto('/');

  // Guest login
  const enterButton = page.getByRole('button', { name: 'Enter' });
  await expect(enterButton).toBeVisible();
  await enterButton.click();

  await expect(page.getByText('Recently Visited')).toBeVisible();
});
