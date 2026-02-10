import { convertLegacyPlugin } from '@backstage/core-compat-api';
import {
  ApiBlueprint,
  fetchApiRef,
  googleAuthApiRef,
} from '@backstage/frontend-plugin-api';

import {
  gcalendarPlugin,
  GCalendarApiClient,
  gcalendarApiRef,
} from '@backstage-community/plugin-gcalendar';

export const gcalendarApi = ApiBlueprint.make({
  name: 'gcalendarApi',
  params: defineParams =>
    defineParams({
      api: gcalendarApiRef,
      deps: {
        authApi: googleAuthApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ authApi, fetchApi }) =>
        new GCalendarApiClient({ authApi, fetchApi }),
    }),
});

// TODO: HomePageCalendar?

export default convertLegacyPlugin(gcalendarPlugin, {
  extensions: [gcalendarApi],
});
