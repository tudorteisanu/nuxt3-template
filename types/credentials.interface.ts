import type { UserInterface } from "~/types/user.interface";

export interface TokensInterface {
  access: string;
  refresh: string;
}

export interface CredentialsInterface {
  tokens: TokensInterface;
  user: UserInterface;
  message: string;
}
