import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import { Header } from "./Header";

describe("Given a header component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Header />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByRole("heading", { name: "ProcastinapP" });

      expect(title).toBeInTheDocument();
    });
  });
});
