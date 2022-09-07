import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../interfaces/interfaces";

const initialUiState: UiState = {
  notification: {
    open: false,
    displayText: "",
    isLoadding: false,
  },
  isUserLoggedIn: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openLoading: (previusUi: UiState) => ({
      ...previusUi,
      notification: {
        open: false,
        displayText: "",
        isLoadding: true,
      },
    }),
    closeLoading: (previusUi: UiState) => ({
      ...previusUi,
      notification: {
        open: false,
        displayText: "",
        isLoadding: false,
      },
    }),
    openNotification: (previusUi: UiState, action: PayloadAction<string>) => ({
      ...previusUi,
      notification: {
        open: true,
        displayText: action.payload,
        isLoadding: false,
      },
    }),
    closeNotification: (previusUi: UiState) => ({
      ...previusUi,
      notification: {
        open: false,
        displayText: "",
        isLoadding: false,
      },
    }),
    showLogIn: (previusUi) => ({
      ...previusUi,
      isUserLoggedIn: true,
    }),

    showLogout: (previusUi) => ({
      ...previusUi,
      isUserLoggedIn: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openLoading: openLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
  openNotification: openNotificationActionCreator,
  closeNotification: closeNotificationActionCreator,
  showLogout: showLogoutActionCreator,
  showLogIn: showLogInActionCreator,
} = uiSlice.actions;
