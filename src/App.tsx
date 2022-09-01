import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RegisterPage />
      </ThemeProvider>
    </>
  );
}

export default App;
