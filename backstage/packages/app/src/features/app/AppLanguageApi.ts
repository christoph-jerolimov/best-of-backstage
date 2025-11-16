import { appLanguageApiRef } from "@backstage/core-plugin-api/alpha";
import { ApiBlueprint } from "@backstage/frontend-plugin-api";

import { AppLanguageSelector } from "./AppLanguageSelector";

export const AppLanguageApi = ApiBlueprint.make({
  name: 'app-language',
  params: defineParams =>
    defineParams({
      api: appLanguageApiRef,
      deps: {},
      factory: () => AppLanguageSelector.createWithStorage({
        defaultLanguage: 'de',
        availableLanguages: ['en', 'de', 'fr', 'it', 'es' ],
      }),
    }),
});
