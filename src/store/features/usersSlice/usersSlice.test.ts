import { loginUserActionCreator, userReducer } from "./usersSlice";

describe("Given a users slice", () => {
  describe("When its called with an action and a payload", () => {
    test("Then it should change the initial state", () => {
      const initialState = {
        username: "",
        password: "",
        token: "",
        id: "",
      };
      const expectedState = {
        username: "test-username",
        password: "",
        token: "test-token",
        id: "test-password",
      };

      const loadedUser = userReducer(
        initialState,
        loginUserActionCreator(expectedState)
      );

      expect(loadedUser).toStrictEqual(expectedState);
    });
  });
});
