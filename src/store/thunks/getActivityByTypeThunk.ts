import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import type { Activity } from '../../models';

type GetActivityByTypeThunkArg = Pick<Activity, 'type'>;

export default createAsyncThunk('activity/getActivityByTypeThunk', async function (arg: GetActivityByTypeThunkArg) {
  const { type } = arg;
  const request = await fetch(apiPaths.activityByKey(type).url);

  return await request.json();
});
