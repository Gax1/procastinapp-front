import { UiState } from "../../../interfaces/interfaces";
import {
  closeLoadingActionCreator,
  closeNotificationActionCreator,
  openNotificationActionCreator,
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
      };

      const displayText = "test-text";

      const expectedNotification: UiState = {
        notification: {
          open: true,
          displayText: displayText,
          isLoadding: false,
        },
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
        };
        const expectedNotification = {
          notification: {
            open: false,
            displayText: "",
            isLoadding: false,
          },
        };

        const closeNotificationReducerTest = uiReducer(
          initialState,
          closeNotificationActionCreator()
        );

        expect(closeNotificationReducerTest).toStrictEqual(
          expectedNotification
        );
      });
      test("Then it should change isLoadding to false", () => {
        const initialState: UiState = {
          notification: {
            open: false,
            displayText: "",
            isLoadding: false,
          },
        };
        const notification = uiReducer(
          initialState,
          closeLoadingActionCreator()
        );

        expect(notification.notification.isLoadding).toStrictEqual(false);
      });
    });
  });
});
