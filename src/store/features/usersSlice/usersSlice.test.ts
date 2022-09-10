import {
  loginUserActionCreator,
  logOutActionCreator,
  showLogInActionCreator,
  showLogoutActionCreator,
  userReducer,
} from "./usersSlice";

describe("Given a users slice", () => {
  const initialState = {
    username: "",
    token: "",
    id: "",
    isUserLoggedIn: false,
  };
  describe("When its called with an action and a payload", () => {
    test("Then it should change the initial state", () => {
      const expectedState = {
        username: "test-username",
        token: "test-token",
        id: "test-password",
        isUserLoggedIn: true,
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
          isUserLoggedIn: false,
        };

        const loggedOut = userReducer(state, logOutActionCreator());

        expect(loggedOut).toStrictEqual(initialState);
      });
      test("Then it should the isUserLoggedIn to true", () => {
        const initialState = {
          username: "",
          token: "",
          id: "",
          isUserLoggedIn: false,
        };

        const showLoginTest = userReducer(
          initialState,
          showLogInActionCreator()
        );

        expect(showLoginTest.isUserLoggedIn).toStrictEqual(true);
      });
      test("The it should change the isUserLogged in to false", () => {
        const initialState = {
          username: "",
          token: "",
          id: "",
          isUserLoggedIn: true,
        };
        const showLogoutTest = userReducer(
          initialState,
          showLogoutActionCreator()
        );

        expect(showLogoutTest.isUserLoggedIn).toStrictEqual(false);
      });
    });
  });
});
