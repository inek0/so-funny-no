import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiPaths } from '../../api';
import { Activity } from '../../models';

type GetActivityByParticipantsThunkArg = Pick<Activity, 'participants'>;

export default createAsyncThunk(
  'activity/getActivityByParticipantsThunk',
  async function (arg: GetActivityByParticipantsThunkArg) {
    const { participants } = arg;
    const request = await fetch(apiPaths.activityByParticipants(participants).url);

    return await request.json();
  },
);
