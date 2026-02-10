import { compatWrapper, convertLegacyPlugin } from '@backstage/core-compat-api';

import { EntityContentBlueprint } from '@backstage/plugin-catalog-react/alpha';

import { quayPlugin, isQuayAvailable } from '@backstage-community/plugin-quay';

const entityQuayContent = EntityContentBlueprint.make({
  name: 'entityQuayContent',
  params: {
    path: 'quay',
    title: 'Quay',
    routeRef: quayPlugin.routes.root,
    filter: isQuayAvailable,
    // TODO: how can we show multiple cards here (via extensions, without linking theme here directly)
    loader: async () =>
      import('@backstage-community/plugin-quay').then(m =>
        compatWrapper(<m.QuayPage />),
      ),
  },
});

export default convertLegacyPlugin(quayPlugin, {
  extensions: [entityQuayContent],
});
