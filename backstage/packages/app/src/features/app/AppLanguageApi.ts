import { appLanguageApiRef } from "@backstage/core-plugin-api/alpha";
import { ApiBlueprint, configApiRef } from "@backstage/frontend-plugin-api";

import { AppLanguageSelector } from "./AppLanguageSelector";

export const AppLanguageApi = ApiBlueprint.make({
  name: 'app-language',
  params: defineParams =>
    defineParams({
      api: appLanguageApiRef,
      deps: {
        configApi: configApiRef,
      },
      factory: ({ configApi }) => {
        const defaultLanguage = configApi.getOptionalString('i18n.defaultLanguage');
        const availableLanguages = configApi.getOptionalStringArray('i18n.availableLanguages');

        return AppLanguageSelector.createWithStorage({
          defaultLanguage,
          availableLanguages,
        });
      },
    }),
});
