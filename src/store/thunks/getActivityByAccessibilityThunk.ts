import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import type { Activity } from '../../models';

type GetActivityByAccessibilityThunkArg = Pick<Activity, 'accessibility'>;

export default createAsyncThunk(
  'activity/getActivityByAccessibilityThunk',
  async function (arg: GetActivityByAccessibilityThunkArg) {
    const { accessibility } = arg;
    const request = await fetch(apiPaths.activityByAccessibility(accessibility).url);

    return await request.json();
  },
);
