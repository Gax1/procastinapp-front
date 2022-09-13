import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../interfaces/interfaces";

const initialTask = {};

const detailTaskSlice = createSlice({
  name: "task",
  initialState: initialTask,
  reducers: {
    uploadTask: (previusDetail, action: PayloadAction<Task>) => action.payload,
  },
});

export const detailsTaskReducer = detailTaskSlice.reducer;

export const { uploadTask: uploadTaskActionCreator } = detailTaskSlice.actions;
