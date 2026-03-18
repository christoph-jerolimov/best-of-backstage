import {
  ApiBlueprint,
  discoveryApiRef,
  fetchApiRef,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';
import {
  convertLegacyPageExtension,
  convertLegacyPlugin,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';

import {
  playlistPlugin,
  PlaylistIndexPage,
  playlistApiRef,
  PlaylistClient,
  PlaylistPage,
} from '@backstage-community/plugin-playlist';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const playlistNavItem = PageBlueprint.make({
  params: {
    path: '/playlists',
    title: 'Playlists',
    routeRef: convertLegacyRouteRef(playlistPlugin.routes.root),
    icon: <PlaylistPlayIcon />,
  },
});

export const playlistServiceApi = ApiBlueprint.make({
  name: 'playlistServiceApi',
  params: defineParams =>
    defineParams({
      api: playlistApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ discoveryApi, fetchApi }) =>
        new PlaylistClient({ discoveryApi, fetchApi }),
    }),
});

export default convertLegacyPlugin(playlistPlugin, {
  extensions: [
    playlistNavItem,
    convertLegacyPageExtension(PlaylistIndexPage),
    convertLegacyPageExtension(PlaylistPage),
    playlistServiceApi,
  ],
});
