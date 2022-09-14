import { configureStore, createReducer } from "@reduxjs/toolkit";
import { LoginUser, Task, UiState } from "../../interfaces/interfaces";

const initialUiState: UiState = {
  notification: {
    open: false,
    displayText: "",
    isLoadding: true,
  },
};

const initialTasksState: Task[] = [
  {
    title: "test-title",
    description: "test-description",
    date: "8/9/2022",
    importance: "very",
    id: "test-id",
    img: "img",
    owner: "id-owner",
  },
];
const initialUser: LoginUser = {
  username: "test-username",
  id: "test-id",
  token: "test-token",
  isUserLoggedIn: true,
};

const mockUiReducer = createReducer<UiState>(initialUiState, (builder) => {
  builder.addDefaultCase((state: UiState) => state);
});

const mockTaskReducer = createReducer<Task[]>(initialTasksState, (builder) => {
  builder.addDefaultCase((state: Task[]) => state);
});

const mockUserReducer = createReducer<LoginUser>(initialUser, (builder) => {
  builder.addDefaultCase((state: LoginUser) => state);
});

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
    tasks: mockTaskReducer,
    user: mockUserReducer,
  },
});

export default mockStore;
