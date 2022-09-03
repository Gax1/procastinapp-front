import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../interfaces/interfaces";

const initialUiState: UiState = {
  registerNotification: false,
  isUserLoggedIn: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openNotification: (previusUi, action: PayloadAction<string>) => ({
      ...previusUi,
      registerNotification: true,
    }),
    closeNotification: (previusUi) => ({
      ...previusUi,
      registerNotification: false,
    }),
    showLogout: (previusUi) => ({
      ...previusUi,
      isUserLoggedIn: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openNotification: openRegisterNotificationActionCreator,
  closeNotification: closeRegisterNotificationActionCreator,
  showLogout: showLogoutActionCreator,
} = uiSlice.actions;
