import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Bookmarks plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('bookmarks-example');

  await backstage.content
    .getByRole('link', { name: 'bookmarks-example' })
    .click();

  await expect(backstage.header.getByText('bookmarks-example')).toBeVisible();

  await expect(backstage.content.getByText('Bookmarks')).toBeVisible();
});
