import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import { Activity } from '../../models';

type GetActivityByPriceThunkArg = Pick<Activity, 'price'>;

export default createAsyncThunk('activity/getActivityByPriceThunk', async function (arg: GetActivityByPriceThunkArg) {
  const { price } = arg;
  const request = await fetch(apiPaths.activityByPrice(price).url);

  return await request.json();
});
