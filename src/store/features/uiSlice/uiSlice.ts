import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../interfaces/interfaces";

const initialUiState: UiState = {
  notification: {
    open: false,
    displayText: "",
  },
  isUserLoggedIn: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openNotification: (previusUi: UiState, action: PayloadAction<string>) => ({
      ...previusUi,
      notification: {
        open: true,
        displayText: action.payload,
      },
    }),
    closeNotification: (previusUi: UiState) => ({
      ...previusUi,
      notification: {
        open: false,
        displayText: "",
      },
    }),
    showLogout: (previusUi) => ({
      ...previusUi,
      isUserLoggedIn: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openNotification: openNotificationActionCreator,
  closeNotification: closeNotificationActionCreator,
  showLogout: showLogoutActionCreator,
} = uiSlice.actions;
