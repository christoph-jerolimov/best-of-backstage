import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Quay plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('quay-example');

  await backstage.content.getByRole('link', { name: 'quay-example' }).click();

  await expect(backstage.header.getByText('quay-example')).toBeVisible();

  await backstage.tabs.getByText('Quay').click();

  await expect(
    backstage.content.getByText('Quay repository: ORGANIZATION/REPOSITORY'),
  ).toBeVisible();

  // await expect(backstage.content.getByText('Tag')).toBeVisible();
  await expect(backstage.content.getByText('Last modified')).toBeVisible();
  await expect(backstage.content.getByText('Security scan')).toBeVisible();
  await expect(backstage.content.getByText('Size')).toBeVisible();
  await expect(backstage.content.getByText('Expires')).toBeVisible();
  await expect(backstage.content.getByText('Manifest')).toBeVisible();
});
