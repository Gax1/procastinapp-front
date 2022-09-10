import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser } from "../../../interfaces/interfaces";

const initialUser: LoginUser = {
  username: "",
  id: "",
  token: "",
  isUserLoggedIn: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {
    loginUser: (previusUser, action: PayloadAction<LoginUser>) => ({
      ...previusUser,
      username: action.payload.username,
      token: action.payload.token,
      id: action.payload.id,
      isUserLoggedIn: true,
    }),
    logOut: (previusUser) => ({
      ...previusUser,
      username: "",
      id: "",
      token: "",
    }),
    showLogIn: (previusUser) => ({
      ...previusUser,
      isUserLoggedIn: true,
    }),

    showLogout: (previusUser) => ({
      ...previusUser,
      isUserLoggedIn: false,
    }),
  },
});

export const userReducer = usersSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logOut: logOutActionCreator,
  showLogout: showLogoutActionCreator,
  showLogIn: showLogInActionCreator,
} = usersSlice.actions;
