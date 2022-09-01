import { SyntheticEvent, useState } from "react";
import { RegistrationUser } from "../../interfaces/interfaces";
import { useUsers } from "../../store/hooks/userHook";
import { Button } from "../Button/Button";
import { RegisterFormStyled } from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { register } = useUsers();

  const initialUserState: RegistrationUser = {
    username: "",
    password: "",
    repetedPassword: "",
    img: "",
  };

  const [registerUser, setRegisterUser] = useState(initialUserState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, [event.target.id]: event.target.value });
  };

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterUser({ ...registerUser, img: event.target.files![0] });
    console.log(registerUser.img);
  };

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData();

    delete registerUser.repetedPassword;
    formData.append("username", registerUser.username);
    formData.append("password", registerUser.password);
    formData.append("img", registerUser.img as File);

    await register(formData);
  };

  const isDisable =
    registerUser.username === "" ||
    registerUser.password === "" ||
    registerUser.repetedPassword === "" ||
    registerUser.password !== registerUser.repetedPassword;

  return (
    <RegisterFormStyled>
      <div className="register-container">
        <form
          className="form form-register"
          onSubmit={handleOnSubmit}
          data-testid="formRegister"
        >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-input register-input"
            placeholder="here goes youre name..."
            value={registerUser.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input register-input"
            placeholder="here goes youre password..."
            value={registerUser.password}
            onChange={handleChange}
          />
          <label htmlFor="repetedPassword">Repeat youre Password:</label>
          <input
            type="password"
            id="repetedPassword"
            className="form-input register-input"
            placeholder="youre password again"
            value={registerUser.repetedPassword}
            onChange={handleChange}
          />
          <label htmlFor="repetedPassword">Select a file: </label>
          <input
            type="file"
            id="img"
            className="form-input register-input__select-image"
            onChange={handleChangeFile}
            data-testid="img"
          />
          <Button buttonText="Register" disabled={isDisable} />
        </form>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
