import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Lighthouse plugin', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Lighthouse').click();

  // FIXME await expect(backstage.header.getByText('Lighthouse')).toBeVisible();
});

test('Lighthouse plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('lighthouse-example');

  await backstage.content
    .getByRole('link', { name: 'lighthouse-example' })
    .click();

  await expect(backstage.header.getByText('lighthouse-example')).toBeVisible();

  await backstage.tabs.getByText('Lighthouse').click();
});
