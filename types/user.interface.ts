export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CreateUserInterface {
  firstName: string;
  lastName: string;
  email: string;
  roles: Array<string>;
  password: string;
  passwordConfirm: string;
}
