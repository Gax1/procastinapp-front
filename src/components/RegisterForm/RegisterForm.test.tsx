import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { WrapperProps } from "../../interfaces/interfaces";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import RegisterForm from "./RegisterForm";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a register form component", () => {
  describe("When reder", () => {
    test("Then it should show 3 inputs", () => {
      render(
        <Wrapper>
          <ThemeProvider theme={theme}>
            <RegisterForm />
          </ThemeProvider>
        </Wrapper>
      );
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => expect(input).toBeInTheDocument());
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
});
