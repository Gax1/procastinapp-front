import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a register form component", () => {
  describe("When reder", () => {
    test("Then it should show 3 inputs", () => {
      render(<RegisterForm />);
      const inputs = screen.getAllByRole("textbox");

      inputs.forEach((input) => {
        expect(input).toBeInTheDocument();
      });
    });
    test("Then it should show two buttons", () => {
      render(<RegisterForm />);
      const buttons = screen.getAllByRole("button");

      buttons.forEach((button) => expect(button).toBeInTheDocument());
    });
  });
});
