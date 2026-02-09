import {
  CatalogIcon,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarScrollWrapper,
  SidebarSpace,
} from '@backstage/core-components';
import { compatWrapper } from '@backstage/core-compat-api';
import { Sidebar } from '@backstage/core-components';
import { NavContentBlueprint } from '@backstage/frontend-plugin-api';

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
    component: ({ items }) =>
      compatWrapper(
        <Sidebar>
          <SidebarLogo />
          <SidebarGroup label="Search" icon={<SearchIcon />} to="/search">
            <SidebarSearchModal />
          </SidebarGroup>
          <SidebarDivider />
          <SidebarGroup label="Menu" icon={<MenuIcon />}>
            {/* Global nav, not org-specific */}
            <SidebarItem icon={HomeIcon} to="home" text="Home" />
            <SidebarItem icon={CatalogIcon} to="catalog" text="Catalog" />
            {/* End global nav */}
            <SidebarDivider />
            <SidebarScrollWrapper>
              {/* Items in this group will be scrollable if they run out of space */}
              {items.map((item, index) => (
                <SidebarItem {...item} key={index} />
              ))}
            </SidebarScrollWrapper>
          </SidebarGroup>
          <SidebarSpace />
          <SidebarDivider />
          <SidebarItem icon={BuildIcon} to="devtools" text="DevTools" />
          <SidebarGroup
            label="Settings"
            icon={<UserSettingsSignInAvatar />}
            to="/settings"
          >
            <NotificationsSidebarItem />
            <SettingsSidebarItem />
          </SidebarGroup>
        </Sidebar>,
      ),
  },
});
