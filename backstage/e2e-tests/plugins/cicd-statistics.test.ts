import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('CI/CD Statistics plugin card on catalog entity', async ({
  backstage,
}) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('cicd-statistics-example');

  await backstage.content
    .getByRole('link', { name: 'cicd-statistics-example' })
    .click();

  await expect(
    backstage.header.getByText('cicd-statistics-example'),
  ).toBeVisible();

  await expect(backstage.content.getByText('CI/CD Statistics')).toBeVisible();
});
