export interface LoginUser extends Item {
  username: string;
  id: string;
  token: string;
}

export interface Item {
  id: string;
}

export interface UiState {
  notification: {
    open: boolean;
    displayText: string;
    isLoadding: boolean;
  };
  isUserLoggedIn: boolean;
}

export interface IUsersRepository<T extends Item> {
  sendRegistration: (user: FormData) => Promise<T>;
  sendLogin: (user: RegistrationUser) => Promise<T>;
}

export interface ITasksRepository<T extends Item> {
  getDay: (id: string, date: string) => Promise<T[]>;
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

export interface Task {
  id: string;
  title: string;
  description: string;
  importance: string;
  date: string;
  img: string;
  owner: string;
}
