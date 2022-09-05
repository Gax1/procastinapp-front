import { render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a LoginForm component", () => {
  const inputUsernamePlaceHolder = "here goes youre username...";
  const placeHolderPassword = "here goes youre password...";
  describe("When its rendered", () => {
    test("Then it should show two inputs and a button", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const usernameInput = screen.getByPlaceholderText(
        inputUsernamePlaceHolder
      );
      const passwordInput = screen.getByPlaceholderText(placeHolderPassword);
      const button = screen.getByRole("button", { name: "Login" });

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });
  describe("When the user fill the inputs and click in the button", () => {
    test("Then should call the function handleOnSubmit", async () => {
      const mockonSubmit = jest.fn();

      const userData = {
        username: "username-test",
        password: "password-test",
      };

      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const loginForm = screen.getByTestId("loginForm");
      loginForm.onsubmit = mockonSubmit;
      const usernameInput = screen.getByPlaceholderText(
        inputUsernamePlaceHolder
      );
      const passwordInput = screen.getByPlaceholderText(placeHolderPassword);
      const button = screen.getByRole("button", { name: "Login" });

      await userEvent.type(usernameInput, userData.username);
      await userEvent.type(passwordInput, userData.password);
      await userEvent.click(button);

      await waitFor(() => {
        expect(mockonSubmit).toHaveBeenCalled();
      });
    });
  });
});
