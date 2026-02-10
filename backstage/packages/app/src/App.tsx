import { createApp } from '@backstage/frontend-defaults';

import homePlugin from '@backstage/plugin-home/alpha';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { navModule } from './modules/nav';
import { customHomePageModule } from './modules/homepage/module';
import appTranslationModule from './modules/translations';

import codeClimatePlugin from './plugins/code-climate';
import gcalendarPlugin from './plugins/gcalendar';
import jiraPlugin from './plugins/jira';
// import playlistPlugin from './plugins/playlist';
import mcpChatPlugin from './plugins/mcp-chat';
import quayPlugin from './plugins/quay';
import wheelOfNamesPlugin from './plugins/wheel-of-names';

export default createApp({
  features: [
    appTranslationModule,
    navModule,
    homePlugin,
    customHomePageModule,
    catalogPlugin,

    codeClimatePlugin,
    gcalendarPlugin,
    jiraPlugin,
    // playlistPlugin, // FIXME(christoph-jerolimov): playlist plugin integration doesn't work so far,
    mcpChatPlugin,
    quayPlugin,
    wheelOfNamesPlugin,
  ],
});
