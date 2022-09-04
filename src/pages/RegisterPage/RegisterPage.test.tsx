import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { WrapperProps } from "../../interfaces/interfaces";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import { RegisterPage } from "./RegisterPage";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a registerPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      const pageTitle = "Register";

      render(
        <BrowserRouter>
          <Wrapper>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
          </Wrapper>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: pageTitle });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show a header with a title", () => {
      const mainHeaderTitle = "ProcastinapP";
      render(
        <BrowserRouter>
          <Wrapper>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
          </Wrapper>
        </BrowserRouter>
      );

      const mainTitle = screen.getByRole("heading", { name: mainHeaderTitle });

      expect(mainTitle).toBeInTheDocument();
    });
    test("Then it should show a form", () => {
      const formTextId = "formRegister";

      render(
        <BrowserRouter>
          <Wrapper>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
          </Wrapper>
        </BrowserRouter>
      );

      const form = screen.getByTestId(formTextId);

      expect(form).toBeInTheDocument();
    });
  });
});
