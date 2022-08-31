import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import RegisterForm from "./RegisterForm";

describe("Given a register form component", () => {
  describe("When reder", () => {
    test("Then it should show 3 inputs", () => {
      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const inputs = screen.getAllByRole("textbox");
      inputs.forEach((input) => expect(input).toBeInTheDocument());
    });
    test("Then it should show two buttons", () => {
      render(
        <ThemeProvider theme={theme}>
          <RegisterForm />
        </ThemeProvider>
      );
      const buttons = screen.getAllByRole("button");
      const registerButton = screen.getByText("Register");

      buttons.forEach((button) => expect(button).toBeInTheDocument());

      expect(registerButton).toBeInTheDocument();
    });
  });
});
