import { test as base, expect } from '@playwright/test';

import { Backstage } from './pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Notifications', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Notifications').click();

  await expect(backstage.header.getByText('Notifications')).toBeVisible();
  await expect(backstage.content.getByText('Unread notifications (0)')).toBeVisible();
});
