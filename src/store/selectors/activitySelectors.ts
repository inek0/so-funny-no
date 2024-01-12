import { createSelector } from '@reduxjs/toolkit';

import type { Activity, RootState } from '../../models';

export const selectTypeOfActivity = (state: RootState) => state.activity.type;

export const selectStateStatus = (state: RootState) => state.activity.isLoading;

export const selectActivity = (state: RootState) => state.activity.activity;

export const selectCountOfParticipants = (state: RootState) => state.activity.participants;

export const selectIsHasApiError = createSelector([(state: RootState) => state.activity], function (activity) {
  const { error } = activity;
  const isHasError = error.length > 0;

  return { isHasError, error };
});

export const selectSearchIdx = createSelector([(state: RootState) => state.activity.idx], function (idx) {
  return Array.from(idx);
});

export const selectSearchResultByIdx = createSelector(
  [(state: RootState) => state.activity.results, (_, id: Activity['key']) => id],
  function (results, id) {
    return results[id];
  },
);

export const selectIsSearchResultKeyEqual = (id: Activity['key']) => (state: RootState) => {
  const arrOfIdx = Array.from(state.activity.idx);
  const isHasElements = arrOfIdx.length;

  return Boolean(isHasElements && arrOfIdx[0] && arrOfIdx[0] === id);
};

export const selectIsVisibleActivity = (id: Activity['key']) => (state: RootState) =>
  id !== state.activity.activity?.key;
