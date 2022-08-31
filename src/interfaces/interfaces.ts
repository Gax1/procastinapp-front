export interface LoginUser {
  username: string;
  password: string;
  img?: string;
}

export interface Item {
  id: string;
}

export interface UiState {
  registerNotification: boolean;
}

export interface IUsersRepository<T extends Item> {
  sendRegistration: (user: FormData) => Promise<T>;
}
