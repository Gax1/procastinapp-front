import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../../interfaces/interfaces";

const initialTasksState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    deleteAll: (previusTasks) => [],
    uploadDayTasks: (previusTasks, action: PayloadAction<Task[]>) =>
      action.payload,
  },
});

export const taskReducer = tasksSlice.reducer;

export const {
  deleteAll: deleteAllAtcionCreator,
  uploadDayTasks: uploadDayTasksActionCreator,
} = tasksSlice.actions;
