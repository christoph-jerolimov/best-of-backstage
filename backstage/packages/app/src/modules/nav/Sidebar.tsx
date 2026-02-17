import {
  Sidebar,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { compatWrapper } from '@backstage/core-compat-api';
import { NavContentBlueprint } from '@backstage/plugin-app-react';

import { SidebarSearchModal } from '@backstage/plugin-search';
import { NotificationsSidebarItem } from '@backstage/plugin-notifications';
import {
  UserSettingsSignInAvatar,
  Settings as SettingsSidebarItem,
} from '@backstage/plugin-user-settings';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';

import { SidebarLogo } from './SidebarLogo';

export const SidebarContent = NavContentBlueprint.make({
  params: {
    component: ({ navItems }) => {
      const nav = navItems.withComponent(item => (
        <SidebarItem icon={() => item.icon} to={item.href} text={item.title} />
      ));
      return compatWrapper(
        <Sidebar>
          <SidebarLogo />
          <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
            <SidebarSearchModal />
          </SidebarGroup>
          <SidebarDivider />
          <SidebarGroup label="Menu" icon={<MenuIcon />}>
            <SidebarItem icon={HomeIcon} to="home" text="Home" />
            {nav.take('page:home')}
            {nav.take('page:catalog')}
            {nav.take('page:scaffolder')}
            {/* End global nav */}
            <SidebarDivider />
            <SidebarScrollWrapper>
              {nav.rest({ sortBy: 'title' })}
            </SidebarScrollWrapper>
          </SidebarGroup>
          <SidebarSpace />
          <SidebarDivider />
          <SidebarItem icon={BuildIcon} to="devtools" text="DevTools" />
          <NotificationsSidebarItem />
          <SidebarGroup
            label="Settings"
            icon={<UserSettingsSignInAvatar />}
            to="/settings"
          >
            <SettingsSidebarItem />
          </SidebarGroup>
        </Sidebar>,
      );
    },
  },
});
