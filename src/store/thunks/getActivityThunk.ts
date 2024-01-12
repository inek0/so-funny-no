import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { apiPaths } from '../../api';
import type { Activity, ActivityError, RootState } from '../../models';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default createAsyncThunk<Activity | ActivityError, unknown, { state: RootState }>(
  'activity/getActivityThunk',
  async function (_, thunkAPI) {
    const { activity } = thunkAPI.getState();

    const type = activity.type.length ? activity.type : null;
    const participants = activity.participants > 0 ? activity.participants : null;

    const url = apiPaths.activity().url;
    const request = await instance.get(url, { params: { type, participants } });

    return await request.data;
  },
);
