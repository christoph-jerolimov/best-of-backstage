import {
  convertLegacyPageExtension,
  convertLegacyPlugin,
  convertLegacyRouteRef,
} from '@backstage/core-compat-api';
import { PageBlueprint } from '@backstage/frontend-plugin-api';

import {
  mcpChatPlugin,
  McpChatPage,
  MCPChatIcon,
} from '@backstage-community/plugin-mcp-chat';

const mcpChatNavItem = PageBlueprint.make({
  params: {
    path: 'mcp-chat',
    title: 'MCP Chat',
    routeRef: convertLegacyRouteRef(mcpChatPlugin.routes.root),
    icon: <MCPChatIcon />,
  },
});

export default convertLegacyPlugin(mcpChatPlugin, {
  extensions: [mcpChatNavItem, convertLegacyPageExtension(McpChatPage)],
});
