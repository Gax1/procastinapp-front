import { configureStore, createReducer } from "@reduxjs/toolkit";
import { UiState } from "../../interfaces/interfaces";

const initialUiState: UiState = {
  notification: {
    open: false,
    displayText: "",
    isLoadding: false,
  },
  isUserLoggedIn: true,
};

const mockUiReducer = createReducer<UiState>(initialUiState, (builder) => {
  builder.addDefaultCase((state: UiState) => state);
});

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
  },
});

export default mockStore;
