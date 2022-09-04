import {
  loginUserActionCreator,
  logOutActionCreator,
  userReducer,
} from "./usersSlice";

describe("Given a users slice", () => {
  const initialState = {
    username: "",
    token: "",
    id: "",
  };
  describe("When its called with an action and a payload", () => {
    test("Then it should change the initial state", () => {
      const expectedState = {
        username: "test-username",
        token: "test-token",
        id: "test-password",
      };

      const loadedUser = userReducer(
        initialState,
        loginUserActionCreator(expectedState)
      );

      expect(loadedUser).toStrictEqual(expectedState);
    });
    describe("When its called with a logout action", () => {
      test("Then it should changed the state to the initial state", () => {
        const state = {
          username: "test-username",
          token: "test-token",
          id: "test-id",
        };

        const loggedOut = userReducer(state, logOutActionCreator());

        expect(loggedOut).toStrictEqual(initialState);
      });
    });
  });
});
