import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { enableMapSet } from 'immer';

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => {
        const customizedMiddleware = getDefaultMiddleware({
            serializableCheck: false,
        });

        return customizedMiddleware.concat();
        },
});

setupListeners(store.dispatch);
enableMapSet();

export default store;
