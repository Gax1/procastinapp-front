import { RegistrationUser } from "../../interfaces/interfaces";
import { UserRepository } from "../../repositories/UsersRepository";
import {
  openLoadingActionCreator,
  openNotificationActionCreator,
  showLogInActionCreator,
  showLogoutActionCreator,
} from "../features/uiSlice/uiSlice";
import {
  loginUserActionCreator,
  logOutActionCreator,
} from "../features/usersSlice/usersSlice";
import { useAppDispatch } from "./hooks";

export const useUsers = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const repoUsers = new UserRepository(url);

  const dispatch = useAppDispatch();

  const register = async (formData: FormData) => {
    const response = await repoUsers.sendRegistration(formData);
    if (response instanceof Error) {
      dispatch(openNotificationActionCreator("Error in registration"));
      return;
    }
    dispatch(openNotificationActionCreator("Succeded: user register"));
  };

  const login = async (userData: RegistrationUser) => {
    try {
      dispatch(openLoadingActionCreator());
      const { user } = await repoUsers.sendLogin(userData);
      localStorage.setItem("token", user.token);
      dispatch(showLogInActionCreator());
      dispatch(loginUserActionCreator(user));
      dispatch(openNotificationActionCreator("Succeded: youre logged in"));
    } catch (error) {
      dispatch(openNotificationActionCreator("Error in login"));
    }
  };

  const logOutUser = () => {
    dispatch(logOutActionCreator());
    dispatch(showLogoutActionCreator());
    localStorage.removeItem("token");
  };

  return { register, login, logOutUser };
};
