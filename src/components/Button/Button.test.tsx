import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import { Button } from "./Button";

describe("Given a button component", () => {
  describe("When render with a text", () => {
    test("Then it should show a button", () => {
      render(
        <ThemeProvider theme={theme}>
          <Button buttonText="" disabled={false} />
        </ThemeProvider>
      );

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
