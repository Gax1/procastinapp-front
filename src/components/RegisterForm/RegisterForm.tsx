import { Button } from "../Button/Button";
import { RegisterFormStyled } from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const registerText = "Register";

  return (
    <RegisterFormStyled>
      <div className="register-container">
        <form className="form form-register">
          <input
            type="text"
            className="form-input register-input"
            placeholder="here goes youre name..."
          />
          <input
            type="password"
            className="form-input register-input"
            placeholder="here goes youre password..."
          />
          <input
            type="password"
            className="form-input register-input"
            placeholder="youre password again"
          />
          <input
            type="file"
            className="form-input register-input__select-image"
          />
          <Button buttonText={registerText} />
        </form>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
