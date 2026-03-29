import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('GitHub Deployments plugin card on catalog entity', async ({
  backstage,
}) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Filter', { exact: false })
    .fill('github-deployments-example');

  await backstage.content
    .getByRole('link', { name: 'github-deployments-example' })
    .click();

  await expect(
    backstage.header.getByText('github-deployments-example'),
  ).toBeVisible();

  await expect(backstage.content.getByText('GitHub Deployments')).toBeVisible();
});
