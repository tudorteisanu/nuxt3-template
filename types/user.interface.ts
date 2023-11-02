export interface UserInterface {
  id: number;
  username: string;
  password: string;
  email: string;
  createdOn: string;
  updatedOn: string;
}

export interface CreateUserInterface {
  username: string;
  bio: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
