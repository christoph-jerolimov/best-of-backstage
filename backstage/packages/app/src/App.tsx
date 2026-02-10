import { createApp } from '@backstage/frontend-defaults';

import homePlugin from '@backstage/plugin-home/alpha';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { appPluginWithOverrides } from './features/app/plugin';
import { navModule } from './modules/nav';
import { customHomePageModule } from './modules/homepage/module';

import gcalendarPlugin from './plugins/gcalendar';
import jiraPlugin from './plugins/jira';
// import playlistPlugin from './plugins/playlist';
import mcpChatPlugin from './plugins/mcp-chat';
import wheelOfNamesPlugin from './plugins/wheel-of-names';

export default createApp({
  features: [
    appPluginWithOverrides,
    navModule,
    homePlugin,
    customHomePageModule,
    catalogPlugin,

    gcalendarPlugin,
    jiraPlugin,
    // playlistPlugin, // FIXME(christoph-jerolimov): playlist plugin integration doesn't work so far,
    mcpChatPlugin,
    wheelOfNamesPlugin,
  ],
});
