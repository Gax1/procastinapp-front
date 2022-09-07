import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { dayReducer } from "./features/daysSlice/daysSlice";
import { taskReducer } from "./features/tasksSlice/tasksSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { userReducer } from "./features/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: userReducer,
    tasks: taskReducer,
    days: dayReducer,
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
