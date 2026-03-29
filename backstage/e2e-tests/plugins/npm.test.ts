import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('npm plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('npm-example');

  await backstage.content.getByRole('link', { name: 'npm-example' }).click();

  await expect(backstage.header.getByText('npm-example')).toBeVisible();

  await expect(
    backstage.content.getByText('NPM package @backstage/catalog-model'),
  ).toBeVisible();
  await expect(backstage.content.getByText('Current Tags')).toBeVisible();

  await backstage.tabs.getByText('npm releases').click();

  await expect(backstage.content.getByText('Current Tags')).toBeVisible();
  await expect(backstage.content.getByText('Version History')).toBeVisible();
});
