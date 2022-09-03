import { LoginUser } from "../../interfaces/interfaces";
import { UserRepository } from "../../repositories/UsersRepository";
import { closeRegisterNotificationActionCreator } from "../features/uiSlice/uiSlice";
import { useAppDispatch } from "./hooks";

export const useUsers = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const repoUsers = new UserRepository(url);

  const dispatch = useAppDispatch();

  const register = async (formData: FormData) => {
    await repoUsers.sendRegistration(formData);
    dispatch(closeRegisterNotificationActionCreator);
  };

  const login = async (user: LoginUser) => {
    try {
      const { token } = await repoUsers.sendLogin(user);
    } catch (error) {
      return error;
    }
  };

  return { register };
};
