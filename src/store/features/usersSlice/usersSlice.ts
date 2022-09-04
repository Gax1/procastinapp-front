import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUser } from "../../../interfaces/interfaces";

const initialUser: LoginUser = {
  username: "",
  id: "",
  token: "",
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
    }),
    logOut: (previusUser) => (previusUser = initialUser),
  },
});

export const userReducer = usersSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logOut: logOutActionCreator,
} = usersSlice.actions;
