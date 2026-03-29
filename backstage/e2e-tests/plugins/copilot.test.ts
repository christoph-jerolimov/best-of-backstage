import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Copilot plugin', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Copilot').click();

  await expect(backstage.header.getByText('Copilot Dashboard')).toBeVisible();
});
