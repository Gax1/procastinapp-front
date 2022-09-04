import {
  closeNotificationActionCreator,
  openNotificationActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its called with an initial state and an open action creator", () => {
    test("Then it should change registerNotification to true", () => {
      const initialState = {
        notification: {
          open: false,
          displayText: "",
        },
        isUserLoggedIn: false,
      };

      const displayText = "test-text";

      const expectedNotification = {
        notification: {
          open: true,
          displayText: displayText,
        },
        isUserLoggedIn: false,
      };

      const openRegisterNotificationReducerTest = uiReducer(
        initialState,
        openNotificationActionCreator(displayText)
      );

      expect(openRegisterNotificationReducerTest).toStrictEqual(
        expectedNotification
      );
    });
    describe("When its called with an initial state and an close action creator", () => {
      test("Then it should change registerNotification to false", () => {
        const displayText = "test-text";
        const initialState = {
          notification: {
            open: true,
            displayText: displayText,
          },
          isUserLoggedIn: false,
        };
        const expectedNotification = {
          notification: {
            open: false,
            displayText: "",
          },
          isUserLoggedIn: false,
        };

        const closeNotificationReducerTest = uiReducer(
          initialState,
          closeNotificationActionCreator()
        );

        expect(closeNotificationReducerTest).toStrictEqual(
          expectedNotification
        );
      });
    });
  });
});
