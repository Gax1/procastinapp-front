import { Header } from "../../components/Header/Header";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { LoginPageStyled } from "./LoginPageStyled";

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <LoginPageStyled>
        <Header />
        <div className="login-text-container">
          <span className="text-container">
            We are here to help you do stuff
          </span>
          <span className="text-container">
            Just do the taks you write here, Is better for you!{" "}
          </span>
          <span className="text-container">And dont forget take a rest!</span>
        </div>
        <LoginForm />
        <footer className="login-footer">
          <span className="text-container">You don`t have an account yet?</span>
          <span className="text-container register-text">Click Here!</span>
        </footer>
      </LoginPageStyled>
    </>
  );
};
