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
      - button "Search"
      - separator
      - link "Home":
        - /url: /home
      - link "Catalog":
        - /url: /catalog
      - separator
      - link "Announcements":
        - /url: /announcements
      - link "Visualizer":
        - /url: /visualizer
      - link "Create...":
        - /url: /create
      - link "Docs":
        - /url: /docs
      - link "MCP Chat":
        - /url: /mcp-chat
      - separator
      - link "DevTools":
        - /url: /devtools
      - link "Notifications":
        - /url: /notifications
      - link "Settings":
        - /url: /settings
    `);
});
