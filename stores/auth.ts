import { defineStore } from "pinia";
import { UserInterface } from "~/types/user.interface";
import type { CredentialsInterface } from "~/types";

interface AuthStoreStateInterface {
  isLoggedIn: Ref<boolean>;
  currentUser: Ref<UserInterface | null>;
  token: Ref<string | null | undefined>;
  login: (payload: CredentialsInterface) => void;
  logout: () => void;
}

export const useAuthStore = defineStore("auth", (): AuthStoreStateInterface => {
  const isLoggedIn: Ref<boolean> = ref(false);
  const currentUser = useState<UserInterface | null>("user", () => null);
  const token: Ref<string | null> = ref(null);

  const login = ({ user, accessToken }: CredentialsInterface) => {
    const token = useCookie("token");
    token.value = accessToken;
    currentUser.value = user;
    isLoggedIn.value = true;
  };

  const logout = () => {
    const token = useCookie("token");
    token.value = null;
    currentUser.value = null;
    isLoggedIn.value = false;
  };

  return { isLoggedIn, currentUser, login, logout, token };
});
