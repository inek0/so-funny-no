import { createSlice } from '@reduxjs/toolkit';

import type { Activity, ActivityError } from '../../models';
import { getActivityThunk } from '../thunks';

type InitialStateType = {
  isLoading: boolean;
  type: string;
  activity: undefined | Activity;
  idx: Set<Activity['key']>;
  results: Record<Activity['key'], Activity>;
} & Pick<Activity, 'participants'> &
  ActivityError;

const initialState: InitialStateType = {
  isLoading: false,
  type: '',
  activity: undefined,
  participants: 0,
  error: '',
  idx: new Set(),
  results: {},
};

function isError(response: Activity | ActivityError): response is ActivityError {
  return 'error' in response;
}

export default createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivityType: function (state, action: { payload: string }) {
      state.type = action.payload;
    },
    setCountOfParticipants: function (state, action: { payload: number }) {
      state.participants = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(getActivityThunk.pending, function (state) {
      state.isLoading = true;
    });
    builder.addCase(getActivityThunk.fulfilled, function (state, action) {
      const { payload } = action;

      if (isError(payload)) {
        state.error = payload.error;
        state.activity = undefined;
      } else {
        state.activity = action.payload as Activity;
        const { key } = action.payload as Activity;
        state.idx.add(key);
        Object.assign(state.results, { [key]: action.payload });
      }

      state.isLoading = false;
    });
  },
});
