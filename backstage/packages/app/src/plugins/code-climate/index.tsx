import { compatWrapper, convertLegacyPlugin } from '@backstage/core-compat-api';

import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';

import { codeClimatePlugin } from '@backstage-community/plugin-code-climate';

const entityCodeClimateCard = EntityCardBlueprint.make({
  name: 'entityCodeClimateCard',
  params: {
    filter: {
      'annotations.codeclimate.com/repo-id': '$exists',
    },
    loader: async () =>
      import('@backstage-community/plugin-code-climate').then(m =>
        compatWrapper(<m.EntityCodeClimateCard />),
      ),
  },
});

export default convertLegacyPlugin(codeClimatePlugin, {
  extensions: [entityCodeClimateCard],
});
