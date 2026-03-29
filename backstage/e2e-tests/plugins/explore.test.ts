import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Explore plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Filter', { exact: false })
    .fill('explore-example');

  await backstage.content
    .getByRole('link', { name: 'explore-example' })
    .click();

  await expect(backstage.header.getByText('explore-example')).toBeVisible();
});
