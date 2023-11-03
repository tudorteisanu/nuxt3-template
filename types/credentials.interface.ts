import type { UserInterface } from "~/types/user.interface";

export interface TokensInterface {
  access: string | null | undefined;
  refresh: string | null | undefined;
}

export interface CredentialsInterface {
  tokens: TokensInterface;
  user: UserInterface;
  message: string;
}
