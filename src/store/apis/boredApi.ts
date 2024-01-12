import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { apiPaths } from '../../api';
import type { Activity } from '../../models';

export const boredApi = createApi({
  reducerPath: 'boredApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints(build) {
    return {
      getActivity: build.query<Activity, unknown>({
        query() {
          return apiPaths.activity().url;
        },
      }),
    };
  },
});

export const { useLazyGetActivityQuery } = boredApi;
