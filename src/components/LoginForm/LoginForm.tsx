import { SyntheticEvent, useState } from "react";
import { useUsers } from "../../store/hooks/userHook";
import { Button } from "../Button/Button";
import { LoginFormStyled } from "./LoginFormStyled";

export const LoginForm = (): JSX.Element => {
  const initialUserState = {
    username: "",
    password: "",
  };
  const { login } = useUsers();

  const [loginUser, setLoginUser] = useState(initialUserState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({
      ...loginUser,
      [event.target.id]: event.target.value,
    });
  };

  const disableButton = loginUser.password === "" || loginUser.username === "";

  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    await login(loginUser);
    setLoginUser(initialUserState);
  };

  return (
    <LoginFormStyled data-testid="loginForm" onSubmit={handleOnSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        className="form-input login-input"
        id="username"
        placeholder="here goes youre username..."
        onChange={handleChange}
        value={loginUser.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        className="form-input login-input"
        id="password"
        placeholder="here goes youre password..."
        onChange={handleChange}
        value={loginUser.password}
      />
      <Button buttonText="Login" disabled={disableButton} />
    </LoginFormStyled>
  );
};
