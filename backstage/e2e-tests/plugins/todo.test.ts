import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Todo plugin card on catalog entity', async ({ backstage }) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Filter', { exact: false })
    .fill('todo-example');

  await backstage.content.getByRole('link', { name: 'todo-example' }).click();

  await expect(backstage.header.getByText('todo-example')).toBeVisible();

  await expect(backstage.content.getByText('TODOs')).toBeVisible();
});
