import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
