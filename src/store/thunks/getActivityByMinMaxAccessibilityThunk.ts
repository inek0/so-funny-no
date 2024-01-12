import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import { Activity } from '../../models';

type GetActivityByMinMaxAccessibilityThunkArg = Record<
  'minaccessibility' | 'maxaccessibility',
  Activity['accessibility']
>;

export default createAsyncThunk(
  'activity/getActivityByMinMaxAccessibilityThunk',
  async function (arg: GetActivityByMinMaxAccessibilityThunkArg) {
    const { minaccessibility, maxaccessibility } = arg;
    const request = await fetch(apiPaths.activityByMinMaxAccessibility(minaccessibility, maxaccessibility).url);

    return await request.json();
  },
);
