import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Jenkins plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('jenkins-example');

  await backstage.content
    .getByRole('link', { name: 'jenkins-example' })
    .click();

  await expect(backstage.header.getByText('jenkins-example')).toBeVisible();

  await expect(backstage.content.getByText('Jenkins')).toBeVisible();
});
