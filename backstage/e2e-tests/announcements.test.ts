import { test as base, expect } from '@playwright/test';

import { Backstage } from './pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Announcements', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Announcements').click();

  await expect(backstage.header.getByText('Announcements')).toBeVisible();
  await expect(
    backstage.content.getByText('No announcements found.'),
  ).toBeVisible();
});
