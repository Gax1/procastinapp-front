import { dateFormater } from "../../../utils/dateFormater";
import { changeDateActionCreator, dayReducer } from "./daysSlice";

describe("Given a daysSlice", () => {
  describe("When its called with and initial state and an action creator", () => {
    test("Then it shold return a new state", () => {
      const initialState = dateFormater(new Date());
      const newDate = dateFormater(new Date("20/07/2021"));

      const changedDate = dayReducer(
        initialState,
        changeDateActionCreator(newDate)
      );

      expect(changedDate).toStrictEqual(newDate);
    });
  });
});
