import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Nexus Repository Manager plugin card on catalog entity', async ({
  backstage,
}) => {
  await backstage.login();

  await backstage.sidebarItem('Catalog').click();
  await expect(backstage.header.getByText('Demo Catalog')).toBeVisible();

  await backstage.content
    .getByPlaceholder('Search', { exact: false })
    .fill('nexus-example');

  await backstage.content.getByRole('link', { name: 'nexus-example' }).click();

  await expect(backstage.header.getByText('nexus-example')).toBeVisible();

  await backstage.tabs.getByText('Build Artifacts').click();

  await expect(
    backstage.content.getByText(
      'Nexus Repository Manager: ORGANIZATION/REPOSITORY',
    ),
  ).toBeVisible();

  await expect(backstage.content.getByText('Version')).toBeVisible();
  await expect(backstage.content.getByText('Artifact')).toBeVisible();
  await expect(backstage.content.getByText('Repository Type')).toBeVisible();
  await expect(backstage.content.getByText('Checksum')).toBeVisible();
  await expect(backstage.content.getByText('Modified')).toBeVisible();
  await expect(backstage.content.getByText('Size')).toBeVisible();
});
