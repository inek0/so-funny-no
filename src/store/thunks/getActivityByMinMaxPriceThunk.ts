import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import type { Activity } from '../../models';

type GetActivityByMinMaxPriceThunkArg = Record<'minprice' | 'maxprice', Activity['price']>;

export default createAsyncThunk(
  'activity/getActivityByMinMaxPriceThunk',
  async function (arg: GetActivityByMinMaxPriceThunkArg) {
    const { minprice, maxprice } = arg;
    const request = await fetch(apiPaths.activityByMinMaxPrice(minprice, maxprice).url);

    return await request.json();
  },
);
