import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('npm plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  // Navigate to the Catalog
  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  // Search for the npm-example entity
  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('npm-example');

  // Click on the npm-example entity to open its page
  await backstage.content.getByRole('link', { name: 'npm-example' }).click();

  // Verify the entity page loaded
  await expect(backstage.header.getByText('npm-example')).toBeVisible();

  // Verify the npm card is present
  await expect(backstage.content.getByText('NPM')).toBeVisible();
});
