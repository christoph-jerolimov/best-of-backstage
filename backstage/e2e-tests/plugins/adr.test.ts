import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('ADR plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('adr-example');

  await backstage.content.getByRole('link', { name: 'adr-example' }).click();

  await expect(backstage.header.getByText('adr-example')).toBeVisible();

  await backstage.tabs.getByText('ADRs').click();

  await expect(
    backstage.content.getByText('Architecture Decision Records'),
  ).toBeVisible();
});
