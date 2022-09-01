import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { WrapperProps } from "../../interfaces/interfaces";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import RegisterForm from "./RegisterForm";
import userEvent from "@testing-library/user-event";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a register form component", () => {
  const inputUsernamePlaceHolder = "here goes youre name...";
  const placeHolderPassword = "here goes youre password...";
  const repetedPasswordPlaceHolder = "youre password again";

  describe("When reder", () => {
    test("Then it should show 3 inputs", () => {
      render(
        <Wrapper>
          <ThemeProvider theme={theme}>
            <RegisterForm />
          </ThemeProvider>
        </Wrapper>
      );
      const inputUsername = screen.getByPlaceholderText(
        inputUsernamePlaceHolder
      );
      const inputPassword = screen.getByPlaceholderText(placeHolderPassword);
      const inputRepetedPassword = screen.getByPlaceholderText(
        repetedPasswordPlaceHolder
      );

      expect(inputPassword).toBeInTheDocument();
      expect(inputUsername).toBeInTheDocument();
      expect(inputRepetedPassword).toBeInTheDocument();
    });
    test("Then it should show two buttons", () => {
      render(
        <Wrapper>
          <ThemeProvider theme={theme}>
            <RegisterForm />
          </ThemeProvider>
        </Wrapper>
      );
      const buttons = screen.getAllByRole("button");
      const registerButton = screen.getByText("Register");

      buttons.forEach((button) => expect(button).toBeInTheDocument());

      expect(registerButton).toBeInTheDocument();
    });
  });
  test("Then the button should be dissabled", () => {
    render(
      <Wrapper>
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      </Wrapper>
    );

    const registerButton = screen.getByText("Register");

    expect(registerButton).toBeDisabled();
  });
  test("When its submit the it should call the handleOnSubtmit function", async () => {
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
      ...jest.requireActual("react-redux"),
      useAppDispatch: () => mockDispatch,
    }));
    const mockedFile = new File([""], "");
    const mockSubmit = jest.fn();

    const mokedUser = {
      username: "mockUser",
      password: "mockPassword",
      repetedPassword: "mockPassword",
      img: mockedFile,
    };
    render(
      <Wrapper>
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      </Wrapper>
    );

    const registerForm = screen.getByTestId("formRegister");
    registerForm.onsubmit = mockSubmit;
    const inputUsername = screen.getByPlaceholderText(inputUsernamePlaceHolder);
    const inputPassword = screen.getByPlaceholderText(placeHolderPassword);
    const inputRepetedPassword = screen.getByPlaceholderText(
      repetedPasswordPlaceHolder
    );
    const inputFile = screen.getByTestId("img");
    const submitButton = screen.getByText("Register");

    await userEvent.type(inputUsername, mokedUser.username);
    await userEvent.type(inputPassword, mokedUser.password);
    await userEvent.type(inputRepetedPassword, mokedUser.repetedPassword);
    await userEvent.upload(inputFile, mockedFile);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
