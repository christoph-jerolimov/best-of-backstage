import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Linkerd plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('linkerd-example');

  await backstage.content
    .getByRole('link', { name: 'linkerd-example' })
    .click();

  await expect(backstage.header.getByText('linkerd-example')).toBeVisible();

  await expect(backstage.content.getByText('Linkerd')).toBeVisible();
});
