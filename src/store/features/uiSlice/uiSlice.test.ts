import {
  closeRegisterNotificationActionCreator,
  openRegisterNotificationActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its called with an initial state and an open action creator", () => {
    test("Then it should change registerNotification to true", () => {
      const initialState = {
        registerNotification: false,
        isUserLoggedIn: false,
      };
      const expectedRegisterNotification = {
        registerNotification: true,
        isUserLoggedIn: false,
      };

      const openRegisterNotificationReducerTest = uiReducer(
        initialState,
        openRegisterNotificationActionCreator
      );

      expect(openRegisterNotificationReducerTest).toStrictEqual(
        expectedRegisterNotification
      );
    });
    describe("When its called with an initial state and an close action creator", () => {
      test("Then it should change registerNotification to false", () => {
        const initialState = {
          registerNotification: true,
          isUserLoggedIn: false,
        };
        const expectedRegisterNotification = {
          registerNotification: false,
          isUserLoggedIn: false,
        };

        const closeRegisterNotificationReducerTest = uiReducer(
          initialState,
          closeRegisterNotificationActionCreator
        );

        expect(closeRegisterNotificationReducerTest).toStrictEqual(
          expectedRegisterNotification
        );
      });
    });
  });
});
