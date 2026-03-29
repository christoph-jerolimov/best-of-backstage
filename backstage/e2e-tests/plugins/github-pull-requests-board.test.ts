import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('GitHub Pull Requests Board plugin card on catalog entity', async ({
  backstage,
}) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Filter', { exact: false })
    .fill('github-pull-requests-board-example');

  await backstage.content
    .getByRole('link', { name: 'github-pull-requests-board-example' })
    .click();

  await expect(
    backstage.header.getByText('github-pull-requests-board-example'),
  ).toBeVisible();

  await expect(backstage.content.getByText('Pull Requests')).toBeVisible();
});
