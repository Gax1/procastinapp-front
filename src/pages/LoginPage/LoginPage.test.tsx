import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { WrapperProps } from "../../interfaces/interfaces";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import { LoginPage } from "./LoginPage";

const Wrapper = ({ children }: WrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a LoginPage component", () => {
  describe("When rendered", () => {
    test("Then it should show a header with a title", () => {
      const mainTitleText = "ProcastinapP";

      render(
        <BrowserRouter>
          <Wrapper>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
          </Wrapper>
        </BrowserRouter>
      );
      const mainTitle = screen.getByRole("heading", { name: mainTitleText });

      expect(mainTitle).toBeInTheDocument();
    });
    test("Then it should two inputs", () => {
      const inputUsernamePlaceHolder = "here goes youre username...";
      const placeHolderPassword = "here goes youre password...";
      render(
        <BrowserRouter>
          <Wrapper>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
          </Wrapper>
        </BrowserRouter>
      );
      const inputUsername = screen.getByPlaceholderText(
        inputUsernamePlaceHolder
      );
      const inputPassword = screen.getByPlaceholderText(placeHolderPassword);

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
});
