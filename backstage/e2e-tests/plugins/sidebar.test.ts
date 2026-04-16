import { test as base, expect } from '@playwright/test';

import { Backstage } from '../pages/Backstage';

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
        - /url: /
      - link "Catalog":
        - /url: /catalog
      - link "Create":
        - /url: /create

      - separator

      - link "Announcements":
        - /url: /announcements
      - link "APIs":
        - /url: /api-docs
      - link "Catalog Graph":
        - /url: /catalog-graph
      - link "Copilot":
        - /url: /copilot
      - link "Docs":
        - /url: /docs
      - link "Entity Validation":
        - /url: /entity-validation
      - link "Explore":
        - /url: /explore
      - link "Kubernetes":
        - /url: /kubernetes
      - link "Lighthouse":
        - /url: /lighthouse
      - link "MCP Chat":
        - /url: /mcp-chat
      - link "RBAC":
        - /url: /rbac
      - link "Register Existing Component":
        - /url: /catalog-import
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
