export interface LoginUser {
  username: string;
  password?: string;
  id?: string;
  img?: string;
  token?: string;
}

export interface Item {
  id: string;
}

export interface UiState {
  registerNotification: boolean;
  isUserLoggedIn: boolean;
}

export interface IUsersRepository<T extends Item> {
  sendRegistration: (user: FormData) => Promise<T>;
}

export interface RegistrationUser {
  username: string;
  password: string;
  repetedPassword?: string;
  img?: string | File;
}

export interface WrapperProps {
  children: JSX.Element;
}
