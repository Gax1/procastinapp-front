import React from "react";
// import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
// import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes> */}
      <LoginForm />
    </>
  );
}

export default App;
