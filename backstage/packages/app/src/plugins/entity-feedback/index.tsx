import { compatWrapper, convertLegacyPlugin } from '@backstage/core-compat-api';

import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';
import { EntityContentBlueprint } from '@backstage/plugin-catalog-react/alpha';

import { entityFeedbackPlugin } from '@backstage-community/plugin-entity-feedback';

const entityLikeDislikeRatingsCard = EntityCardBlueprint.make({
  name: 'entityLikeDislikeRatingsCard',
  params: {
    loader: async () =>
      import('@backstage-community/plugin-entity-feedback').then(m =>
        compatWrapper(<m.EntityLikeDislikeRatingsCard />),
      ),
  },
});

const entityFeedbackResponseContent = EntityContentBlueprint.make({
  name: 'entityFeedbackResponseContent',
  params: {
    defaultPath: '/feedback',
    defaultTitle: 'Feedback',
    loader: async () =>
      import('@backstage-community/plugin-entity-feedback').then(m =>
        compatWrapper(<m.EntityFeedbackResponseContent />),
      ),
  },
});

export default convertLegacyPlugin(entityFeedbackPlugin, {
  extensions: [entityLikeDislikeRatingsCard, entityFeedbackResponseContent],
});
