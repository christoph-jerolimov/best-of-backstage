import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Readme plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('readme-example');

  await backstage.content.getByRole('link', { name: 'readme-example' }).click();

  await expect(backstage.header.getByText('readme-example')).toBeVisible();

  await expect(
    backstage.content.getByText('README', { exact: true }),
  ).toBeVisible();
  await expect(
    backstage.content.getByText('Readme plugin', { exact: true }),
  ).toBeVisible();
  await expect(
    backstage.content.getByText('Welcome to the readme plugin!'),
  ).toBeVisible();
});
