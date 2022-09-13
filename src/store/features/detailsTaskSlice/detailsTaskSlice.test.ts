import {
  detailsTaskReducer,
  uploadTaskActionCreator,
} from "./detailsTaskSlice";

describe("Given a detailsTask reducer", () => {
  describe("When its called with an initial state and a action with payload", () => {
    test("Then it should return the payload", () => {
      const initialState = {};
      const payloadAction = {
        title: "test-title",
        date: "02/07/2022",
        description: "test-description",
        id: "test-id",
        img: "test-img",
        importance: "test-importance",
        owner: "test-idOwner",
      };
      const result = detailsTaskReducer(
        initialState,
        uploadTaskActionCreator(payloadAction)
      );

      expect(result).toStrictEqual(payloadAction);
    });
  });
});
