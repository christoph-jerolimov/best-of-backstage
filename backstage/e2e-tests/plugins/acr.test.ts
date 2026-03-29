import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('ACR plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('acr-example');

  await backstage.content.getByRole('link', { name: 'acr-example' }).click();

  await expect(backstage.header.getByText('acr-example')).toBeVisible();

  await expect(
    backstage.content.getByText('Azure Container Registry'),
  ).toBeVisible();
});
