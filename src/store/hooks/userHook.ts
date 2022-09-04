import { RegistrationUser } from "../../interfaces/interfaces";
import { UserRepository } from "../../repositories/UsersRepository";
import { openNotificationActionCreator } from "../features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../features/usersSlice/usersSlice";
import { useAppDispatch } from "./hooks";

export const useUsers = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const repoUsers = new UserRepository(url);

  const dispatch = useAppDispatch();

  const register = async (formData: FormData) => {
    try {
      await repoUsers.sendRegistration(formData);
      dispatch(openNotificationActionCreator("user register"));
    } catch (error) {
      dispatch(openNotificationActionCreator("error in registration"));
    }
  };

  const login = async (userData: RegistrationUser) => {
    try {
      const { user } = await repoUsers.sendLogin(userData);

      localStorage.setItem("token", user.token);

      dispatch(loginUserActionCreator(user));
    } catch (error) {
      dispatch(openNotificationActionCreator("Error in login"));
    }
  };

  return { register, login };
};
