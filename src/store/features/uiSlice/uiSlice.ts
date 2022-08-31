import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../../interfaces/interfaces";

const initialUiState: UiState = {
  registerNotification: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openRegisterNotification: (previusUi) => ({
      ...previusUi,
      registerNotification: true,
    }),
    closeRegisterNotification: (previusUi) => ({
      ...previusUi,
      registerNotification: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openRegisterNotification: openRegisterNotificationActionCreator,
  closeRegisterNotification: closeRegisterNotificationActionCreator,
} = uiSlice.actions;
