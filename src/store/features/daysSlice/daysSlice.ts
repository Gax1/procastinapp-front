import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateFormater } from "../../../utils/dateFormater";

const initialDayState = dateFormater(new Date());

const daysSlice = createSlice({
  name: "days",
  initialState: initialDayState,
  reducers: {
    changeDate: (previusDay, action: PayloadAction<string>) => action.payload,
  },
});

export const dayReducer = daysSlice.reducer;

export const { changeDate: changeDateActionCreator } = daysSlice.actions;
