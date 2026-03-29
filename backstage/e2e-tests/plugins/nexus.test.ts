import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Nexus Repository Manager plugin card on catalog entity', async ({
  backstage,
}) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('nexus-example');

  await backstage.content.getByRole('link', { name: 'nexus-example' }).click();

  await expect(backstage.header.getByText('nexus-example')).toBeVisible();

  await expect(
    backstage.content.getByText('Nexus Repository Manager'),
  ).toBeVisible();
});
