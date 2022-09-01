import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import { RegisterPage } from "./RegisterPage";

describe("Given a registerPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      const pageTitle = "Register";

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RegisterPage />
          </ThemeProvider>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: pageTitle });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show a header with a title", () => {
      const mainHeaderTitle = "ProcastinapP";
      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RegisterPage />
          </ThemeProvider>
        </Provider>
      );

      const mainTitle = screen.getByRole("heading", { name: mainHeaderTitle });

      expect(mainTitle).toBeInTheDocument();
    });
    test("Then it should show a form", () => {
      const formTextId = "formRegister";

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RegisterPage />
          </ThemeProvider>
        </Provider>
      );

      const form = screen.getByTestId(formTextId);

      expect(form).toBeInTheDocument();
    });
  });
});
