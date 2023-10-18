import { UserInterface } from "~/types";

export interface CredentialsInterface {
  user: UserInterface | null;
  accessToken: string | null;
}
