import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { TranslationBlueprint } from '@backstage/plugin-app-react';

import { npmTranslations } from '@backstage-community/plugin-npm/alpha';

const npmTranslation = TranslationBlueprint.make({
  name: 'npmTranslation',
  params: {
    resource: npmTranslations,
  },
});

export default createFrontendModule({
  pluginId: 'app',
  extensions: [npmTranslation],
});
