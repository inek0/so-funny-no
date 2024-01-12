import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { enableMapSet } from 'immer';

import { boredApi } from './apis';
import { activitySlice } from './slices';

const store = configureStore({
  reducer: {
    [boredApi.reducerPath]: boredApi.reducer,
    [activitySlice.name]: activitySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    return customizedMiddleware.concat(boredApi.middleware);
  },
});

setupListeners(store.dispatch);
enableMapSet();

export default store;
