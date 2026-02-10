import { compatWrapper, convertLegacyPlugin } from '@backstage/core-compat-api';

import {
  EntityContentBlueprint,
  EntityCardBlueprint,
} from '@backstage/plugin-catalog-react/alpha';

import {
  jiraPlugin,
  isJiraAvailable,
  hasJiraQuery,
} from '@roadiehq/backstage-plugin-jira';

const entityJiraOverviewContent = EntityContentBlueprint.make({
  name: 'entityJiraOverviewContent',
  params: {
    path: 'jira-overview',
    title: 'Jira Overview',
    filter: isJiraAvailable,
    // TODO: how can we show multiple cards here (via extensions, without linking theme here directly)
    loader: async () =>
      import('@roadiehq/backstage-plugin-jira').then(m =>
        compatWrapper(<m.EntityJiraOverviewCard />),
      ),
  },
});

const entityJiraQueryContent = EntityContentBlueprint.make({
  name: 'entityJiraQueryContent',
  params: {
    path: 'jira-query',
    title: 'Jira Query',
    filter: hasJiraQuery,
    // TODO: how can we show multiple cards here (via extensions, without linking theme here directly)
    loader: async () =>
      import('@roadiehq/backstage-plugin-jira').then(m =>
        compatWrapper(<m.EntityJiraQueryCard />),
      ),
  },
});

const entityJiraOverviewCard = EntityCardBlueprint.make({
  name: 'entityJiraOverviewCard',
  params: {
    filter: isJiraAvailable,
    loader: async () =>
      import('@roadiehq/backstage-plugin-jira').then(m =>
        compatWrapper(<m.EntityJiraOverviewCard />),
      ),
  },
  disabled: true,
});

const entityJiraQueryCard = EntityCardBlueprint.make({
  name: 'entityJiraQueryCard',
  params: {
    filter: hasJiraQuery,
    loader: async () =>
      import('@roadiehq/backstage-plugin-jira').then(m =>
        compatWrapper(<m.EntityJiraQueryCard />),
      ),
  },
  disabled: true,
});

export default convertLegacyPlugin(jiraPlugin, {
  extensions: [
    entityJiraOverviewContent,
    entityJiraQueryContent,
    entityJiraOverviewCard,
    entityJiraQueryCard,
  ],
});
