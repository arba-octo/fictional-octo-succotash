import { configureStore } from '@reduxjs/toolkit';
import uploadReducer from './uploadSlice';

const store = configureStore({
  reducer: {
    upload: uploadReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
