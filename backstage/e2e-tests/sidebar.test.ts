import { test as base, expect } from '@playwright/test';

import { Backstage } from './pages/Backstage';

const test = base.extend<{ backstage: Backstage }>({
  backstage: ({ page }, use) => use(new Backstage(page)),
});

test('Sidebar', async ({ backstage }) => {
  await backstage.login();

  await expect(backstage.sidebar).toMatchAriaSnapshot(`
    - navigation "sidebar nav":
      - link "Home":
        - /url: /
        - img
      - button "Search"
      - separator
      - link "Home":
        - /url: /home
      - link "Catalog":
        - /url: /catalog
      - link "Create...":
        - /url: /create
      - separator
      - link "Announcements":
        - /url: /announcements
      - link "APIs":
        - /url: /api-docs
      - link "Docs":
        - /url: /docs
      - link "MCP Chat":
        - /url: /mcp-chat
      - link "Visualizer":
        - /url: /visualizer
      - separator
      - link "DevTools":
        - /url: /devtools
      - link "Notifications":
        - /url: /notifications
      - link "Settings":
        - /url: /settings
    `);
});
