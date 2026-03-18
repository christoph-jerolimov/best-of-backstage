import {
  convertLegacyPlugin,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';
import { PageBlueprint } from '@backstage/frontend-plugin-api';

import { rbacPlugin, RbacIcon } from '@backstage-community/plugin-rbac';

const rbacNavItem = PageBlueprint.make({
  params: {
    path: '/rbac',
    title: 'RBAC',
    routeRef: convertLegacyRouteRef(rbacPlugin.routes.root),
    icon: <RbacIcon />,
  },
});

export default convertLegacyPlugin(rbacPlugin, {
  extensions: [rbacNavItem],
});
