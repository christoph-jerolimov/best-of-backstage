import appPlugin from '@backstage/plugin-app';

import { AppLanguageApi } from './AppLanguageApi';

export const appPluginWithOverrides = appPlugin.withOverrides({
  extensions: [AppLanguageApi],
});
