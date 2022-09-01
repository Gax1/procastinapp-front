import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { WrapperProps } from "../../interfaces/interfaces";
import { UserRepository } from "../../repositories/UsersRepository";
import { store } from "../store";
import { useUsers } from "./userHook";

jest.mock("../../repositories/UsersRepository");
UserRepository as jest.Mock;
UserRepository.prototype.sendRegistration = jest.fn().mockResolvedValue("");

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given userHook with a registration function", () => {
  const Wrapper = ({ children }: WrapperProps) => {
    return <Provider store={store}>{children}</Provider>;
  };
  describe("When its called with a formData object", () => {
    test("Then it should call the sendRegistration method", async () => {
      const data = new FormData();
      const user = {
        username: "user",
        password: "password",
      };
      data.append("user", JSON.stringify(user));

      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUsers(), { wrapper: Wrapper });

      await register(data);

      await waitFor(() => {
        expect(UserRepository.prototype.sendRegistration).toHaveBeenCalled();
      });
    });
  });
});
