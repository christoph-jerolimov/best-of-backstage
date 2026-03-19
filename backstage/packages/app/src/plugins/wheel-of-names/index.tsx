import {
  convertLegacyPageExtension,
  convertLegacyPlugin,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';
import { PageBlueprint } from '@backstage/frontend-plugin-api';

import RouletteIcon from '@mui/icons-material/Casino';

import {
  wheelOfNamesPlugin,
  WheelOfNamesPage,
} from '@backstage-community/plugin-wheel-of-names';

const wheelOfNamesNavItem = PageBlueprint.make({
  params: {
    path: 'wheel-of-names',
    title: 'Wheel of names',
    routeRef: convertLegacyRouteRef(wheelOfNamesPlugin.routes.root),
    icon: <RouletteIcon />,
  },
  disabled: true,
});

export default convertLegacyPlugin(wheelOfNamesPlugin, {
  extensions: [
    wheelOfNamesNavItem,
    convertLegacyPageExtension(WheelOfNamesPage),
  ],
});
