import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test.fixme('GitHub Issues plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('github-issues-example');

  await backstage.content
    .getByRole('link', { name: 'github-issues-example' })
    .click();

  await expect(
    backstage.header.getByText('github-issues-example'),
  ).toBeVisible();

  await expect(backstage.content.getByText('GitHub Issues')).toBeVisible();
});
