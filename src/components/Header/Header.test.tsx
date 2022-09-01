import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../themes/theme";
import { Header } from "./Header";

describe("Given a header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const title = screen.getByRole("heading", { name: "ProcastinapP" });

      expect(title).toBeInTheDocument();
    });
  });
});
