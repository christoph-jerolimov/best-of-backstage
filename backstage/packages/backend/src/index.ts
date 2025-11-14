/*
 * Hi!
 *
 * Note that this is an EXAMPLE Backstage backend. Please check the README.
 *
 * Happy hacking!
 */

import { createBackend } from '@backstage/backend-defaults';

const isBackendEnabled = (plugin: string, defaultValue: boolean) => {
  const envName = `PLUGIN_${plugin.toLocaleUpperCase('en').replaceAll(/[^A-Z]/g, '_')}`;
  const envValue = process.env[envName];
  const enabled = !envValue ? defaultValue : envValue !== 'false';
  if (enabled) {
    console.log(`Enable (load) "${plugin}" plugin backend because env ${envName} is ${envValue} (default: ${defaultValue})`);
  } else {
    console.log(`SKIP "${plugin}" plugin backend because env ${envName} is ${envValue} (default: ${defaultValue})`);
  }
  return enabled;
}

const backend = createBackend();

backend.add(import('@backstage/plugin-app-backend'));
backend.add(import('@backstage/plugin-proxy-backend'));

// scaffolder plugin
backend.add(import('@backstage/plugin-scaffolder-backend'));
backend.add(import('@backstage/plugin-scaffolder-backend-module-github'));
backend.add(
  import('@backstage/plugin-scaffolder-backend-module-notifications'),
);

// techdocs plugin
backend.add(import('@backstage/plugin-techdocs-backend'));

// auth plugin
backend.add(import('@backstage/plugin-auth-backend'));
// See https://backstage.io/docs/backend-system/building-backends/migrating#the-auth-plugin
backend.add(import('@backstage/plugin-auth-backend-module-guest-provider'));
// See https://backstage.io/docs/auth/guest/provider

// catalog plugin
backend.add(import('@backstage/plugin-catalog-backend'));
backend.add(
  import('@backstage/plugin-catalog-backend-module-scaffolder-entity-model'),
);

// See https://backstage.io/docs/features/software-catalog/configuration#subscribing-to-catalog-errors
backend.add(import('@backstage/plugin-catalog-backend-module-logs'));

// permission plugin
backend.add(import('@backstage/plugin-permission-backend'));
// See https://backstage.io/docs/permissions/getting-started for how to create your own permission policy
backend.add(
  import('@backstage/plugin-permission-backend-module-allow-all-policy'),
);

// search plugin
backend.add(import('@backstage/plugin-search-backend'));
backend.add(import('@backstage/plugin-search-backend-module-pg'));
backend.add(import('@backstage/plugin-search-backend-module-catalog'));
backend.add(import('@backstage/plugin-search-backend-module-techdocs'));

// badges plugin
backend.add(import('@backstage-community/plugin-badges-backend'));

// devtools plugin
if (isBackendEnabled('devtools', true)) {
  backend.add(import('@backstage/plugin-devtools-backend'));
}

// jira plugin
if (isBackendEnabled('jira-dashboard', false)) {
  backend.add(import('@axis-backstage/plugin-jira-dashboard-backend'));
}

// kubernetes plugin
if (isBackendEnabled('kubernetes', false)) {
  backend.add(import('@backstage/plugin-kubernetes-backend'));
}

// notifications and signals plugins
if (isBackendEnabled('notifications', true)) {
  backend.add(import('@backstage/plugin-notifications-backend'));
}
if (isBackendEnabled('signals', true)) {
  backend.add(import('@backstage/plugin-signals-backend'));
}

// adr plugin
if (isBackendEnabled('adr', true)) {
  backend.add(import('@backstage-community/plugin-adr-backend'));
  backend.add(import('@backstage-community/search-backend-module-adr'));
}

// announcements plugin
if (isBackendEnabled('announcements', true)) {
  backend.add(import('@backstage-community/plugin-announcements-backend'));
  backend.add(import('@backstage-community/plugin-search-backend-module-announcements'));
}

// mcp actions plugin
if (isBackendEnabled('mcp-actions', true)) {
  backend.add(import('@backstage/plugin-mcp-actions-backend'));
}

// mcp chat plugin
if (isBackendEnabled('mcp-chat', false)) {
  backend.add(import('@backstage-community/plugin-mcp-chat-backend'));
}

// npm plugin
if (isBackendEnabled('npm', true)) {
  backend.add(import('@backstage-community/plugin-npm-backend'));
}

// playlist plugin
if (isBackendEnabled('playlist', true)) {
  backend.add(import('@backstage-community/plugin-playlist-backend'));
}

// readme plugin
if (isBackendEnabled('readme', true)) {
  backend.add(import('@axis-backstage/plugin-readme-backend'));
}

// todo plugin
if (isBackendEnabled('todo', true)) {
  backend.add(import('@backstage-community/plugin-todo-backend'));
}

backend.start();
