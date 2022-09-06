import { UiState } from "../../../interfaces/interfaces";
import {
  closeNotificationActionCreator,
  openNotificationActionCreator,
  showLogInActionCreator,
  showLogoutActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When its called with an initial state and an open action creator", () => {
    test("Then it should change registerNotification to true", () => {
      const initialState: UiState = {
        notification: {
          open: false,
          displayText: "",
          isLoadding: false,
        },
        isUserLoggedIn: false,
      };

      const displayText = "test-text";

      const expectedNotification: UiState = {
        notification: {
          open: true,
          displayText: displayText,
          isLoadding: false,
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
        const initialState: UiState = {
          notification: {
            open: true,
            displayText: displayText,
            isLoadding: false,
          },
          isUserLoggedIn: false,
        };
        const expectedNotification = {
          notification: {
            open: false,
            displayText: "",
            isLoadding: false,
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
      test("Then it should the isUserLoggedIn to true", () => {
        const initialState: UiState = {
          notification: {
            open: false,
            displayText: "",
            isLoadding: false,
          },
          isUserLoggedIn: false,
        };

        const showLoginTest = uiReducer(initialState, showLogInActionCreator());

        expect(showLoginTest.isUserLoggedIn).toStrictEqual(true);
      });
      test("The it should change the isUserLogged in to false", () => {
        const initialState: UiState = {
          notification: {
            open: false,
            displayText: "",
            isLoadding: false,
          },
          isUserLoggedIn: true,
        };
        const showLogoutTest = uiReducer(
          initialState,
          showLogoutActionCreator()
        );

        expect(showLogoutTest.isUserLoggedIn).toStrictEqual(false);
      });
    });
  });
});
