import {
  convertLegacyPageExtension,
  convertLegacyPlugin,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';
import { NavItemBlueprint } from '@backstage/frontend-plugin-api';

import {
  mcpChatPlugin,
  McpChatPage,
  MCPChatIcon,
} from '@backstage-community/plugin-mcp-chat';

const mcpChatNavItem = NavItemBlueprint.make({
  params: {
    title: 'MCP Chat',
    routeRef: convertLegacyRouteRef(mcpChatPlugin.routes.root),
    icon: MCPChatIcon,
  },
});

export default convertLegacyPlugin(mcpChatPlugin, {
  extensions: [mcpChatNavItem, convertLegacyPageExtension(McpChatPage)],
});
