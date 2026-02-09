import { Navigate } from 'react-router';

import {
  coreExtensionData,
  createExtension,
  createFrontendModule,
  NavItemBlueprint,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';
import homePagePlugin from '@backstage/plugin-home/alpha';

import HomeIcon from '@material-ui/icons/Home';

import { homePage } from './HomePage';

const homePageNavItem = NavItemBlueprint.make({
  params: {
    title: 'Home',
    routeRef: homePagePlugin.routes.root,
    icon: HomeIcon,
  },
});

const homePageRedirect = PageBlueprint.make({
  name: 'homePage',
  params: {
    path: '/',
    loader: () => Promise.resolve(<Navigate to="home" />),
  },
});

const customizedHomePage = createExtension({
  name: 'my-home-page',
  attachTo: { id: 'page:home', input: 'props' },
  output: [coreExtensionData.reactElement],
  factory() {
    return [coreExtensionData.reactElement(homePage)];
  },
});

export const customHomePageModule = createFrontendModule({
  pluginId: 'home',
  extensions: [homePageNavItem, homePageRedirect, customizedHomePage],
});
