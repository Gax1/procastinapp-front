import { useNavigate } from "react-router-dom";
import { RegistrationUser } from "../../interfaces/interfaces";
import { UserRepository } from "../../repositories/UsersRepository";
import {
  closeNotificationActionCreator,
  openLoadingActionCreator,
  openNotificationActionCreator,
} from "../features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logOutActionCreator,
  showLogInActionCreator,
  showLogoutActionCreator,
} from "../features/usersSlice/usersSlice";
import { useAppDispatch } from "./hooks";

export const useUsers = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const repoUsers = new UserRepository(url);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const register = async (formData: FormData) => {
    dispatch(openLoadingActionCreator());
    const response = await repoUsers.sendRegistration(formData);
    if (response instanceof Error) {
      dispatch(openNotificationActionCreator("Error in registration"));
      return;
    }
    dispatch(openNotificationActionCreator("Succeded: user register"));
    navigate("/login");
  };

  const login = async (userData: RegistrationUser) => {
    try {
      dispatch(openLoadingActionCreator());
      const { user } = await repoUsers.sendLogin(userData);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(showLogInActionCreator());
      dispatch(loginUserActionCreator(user));
      dispatch(closeNotificationActionCreator());
      navigate("/my-day");
    } catch (error) {
      dispatch(openNotificationActionCreator("Error in login"));
    }
  };

  const logOutUser = () => {
    dispatch(logOutActionCreator());
    dispatch(showLogoutActionCreator());
    localStorage.removeItem("token");
    navigate("/login");
  };

  return { register, login, logOutUser };
};
