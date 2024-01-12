import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import type { Activity } from '../../models';

type GetActivityByKeyThunkArg = Pick<Activity, 'key'>;

export default createAsyncThunk('activity/getActivityByKeyThunk', async function (arg: GetActivityByKeyThunkArg) {
  const { key } = arg;
  const request = await fetch(apiPaths.activityByKey(key).url);

  return await request.json();
});
