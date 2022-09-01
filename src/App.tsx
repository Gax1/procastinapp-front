import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RegisterForm />
      </ThemeProvider>
    </>
  );
}

export default App;
