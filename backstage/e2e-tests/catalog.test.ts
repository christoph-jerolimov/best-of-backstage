import { test as base, expect } from '@playwright/test';

import { Backstage } from './pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Catalog', async ({ backstage }) => {
  await backstage.login();

  await backstage.navLink('Catalog').click();

  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();
});
