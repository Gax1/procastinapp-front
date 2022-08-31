import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../../interfaces/interfaces";

const initialUser: LoginUser = {
  username: "",
  password: "",
  img: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUser,
  reducers: {},
});

export const userReducer = usersSlice.reducer;

export const {} = usersSlice.actions;
