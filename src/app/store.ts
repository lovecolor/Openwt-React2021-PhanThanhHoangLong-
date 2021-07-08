import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer
  },
});
store.subscribe(() => {
  console.log(store.getState())
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
