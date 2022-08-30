import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Given a button component", () => {
  describe("When instantiated with a text", () => {
    test("Then it should show a button", () => {
      render(<Button buttonText="" />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
