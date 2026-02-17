import { test as base, expect } from '@playwright/test';

import { Backstage } from './pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Home', async ({ backstage }) => {
  await backstage.login();

  await expect(backstage.content.getByText("No widgets added. Start by clicking the 'Add widget' button.")).toBeVisible();
});
