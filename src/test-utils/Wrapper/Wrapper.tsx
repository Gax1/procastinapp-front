import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { WrapperProps } from "../../interfaces/interfaces";
import { store } from "../../store/store";
import { theme } from "../../themes/theme";
import mockStore from "../mockStore/mockStore";

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>;
      </ThemeProvider>
    </BrowserRouter>
  );
};

export const MockedWrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={mockStore}>{children}</Provider>;
      </ThemeProvider>
    </BrowserRouter>
  );
};
