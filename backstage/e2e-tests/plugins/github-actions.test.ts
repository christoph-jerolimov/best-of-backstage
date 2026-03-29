import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('GitHub Actions plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('github-actions-example');

  await backstage.content
    .getByRole('link', { name: 'github-actions-example' })
    .click();

  await expect(
    backstage.header.getByText('github-actions-example'),
  ).toBeVisible();

  await expect(backstage.content.getByText('GitHub Actions')).toBeVisible();
});
