import axios from "axios";
import { Item, IUsersRepository, LoginUser } from "../interfaces/interfaces";

export class UserRepository<T extends Item> implements IUsersRepository<T> {
  constructor(public url: string) {}

  sendRegistration = async (user: FormData) => {
    try {
      const { data } = await axios.post(`${this.url}/users/register`, user);
      return data;
    } catch (error) {
      return error;
    }
  };

  sendLogin = async (user: LoginUser) => {
    try {
      const { data } = await axios.post(`${this.url}/users/login`, user);
      return await data;
    } catch (error) {
      return await error;
    }
  };
}
