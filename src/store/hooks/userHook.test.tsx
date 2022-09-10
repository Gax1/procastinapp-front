import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { UserRepository } from "../../repositories/UsersRepository";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { openNotificationActionCreator } from "../features/uiSlice/uiSlice";
import { logOutActionCreator } from "../features/usersSlice/usersSlice";
import { useUsers } from "./userHook";

jest.mock("../../repositories/UsersRepository");
UserRepository as jest.Mock;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a user hook register function", () => {
  describe("When its called with a valid user", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    test("Then it should call the dispatch method", async () => {
      UserRepository.prototype.sendRegistration = jest
        .fn()
        .mockResolvedValue("");
      const post = jest.fn().mockResolvedValueOnce("");
      axios.post = post;
      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      const userData = new FormData();

      await register(userData);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          openNotificationActionCreator("Succeded: user register")
        );
      });
    });
    test("Then it shoud call the dispatch", async () => {
      UserRepository.prototype.sendRegistration = jest
        .fn()
        .mockResolvedValue(new Error());

      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      const dataUser = new FormData();

      await register(dataUser);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          openNotificationActionCreator("Error in registration")
        );
      });
    });
  });
});

describe("Given a custom hook login function", () => {
  const validUser = {
    username: "test-username",
    password: "user-password",
  };
  describe("When its called with a valid user", () => {
    test("Then iot should call the method set item of the local store", async () => {
      const response = {
        user: {
          username: "test-username",
          token: "test-token",
          id: "test-id",
        },
      };
      UserRepository.prototype.sendLogin = jest
        .fn()
        .mockResolvedValueOnce(response);

      jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
      Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      await login(validUser);

      await waitFor(() => {
        expect(window.localStorage.setItem).toHaveBeenCalledWith(
          "user",
          JSON.stringify(response.user)
        );
      });
    });
  });
  describe("When it receives an error", () => {
    test("Then it should call the dipsatch method", async () => {
      UserRepository.prototype.sendLogin = jest.fn().mockRejectedValue("error");

      jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
      Object.setPrototypeOf(window.localStorage.setItem, jest.fn());
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      await login(validUser);

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          openNotificationActionCreator("Error in login")
        );
      });
    });
  });
});

describe("Given a useUsers hook logOutUser function", () => {
  describe("When its called", () => {
    test("Then it should call the removeItem of the local storage", () => {
      const {
        result: {
          current: { logOutUser },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      jest.spyOn(Object.getPrototypeOf(window.localStorage), "removeItem");
      Object.setPrototypeOf(window.localStorage.removeItem, jest.fn());

      logOutUser();

      expect(window.localStorage.removeItem).toHaveBeenCalledWith("user");
    });
    test("Then it shoul call the dispatch with a logout action creator", () => {
      const {
        result: {
          current: { logOutUser },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      jest.spyOn(Object.getPrototypeOf(window.localStorage), "removeItem");
      Object.setPrototypeOf(window.localStorage.removeItem, jest.fn());

      logOutUser();

      expect(mockDispatch).toHaveBeenCalledWith(logOutActionCreator());
    });
  });
});
