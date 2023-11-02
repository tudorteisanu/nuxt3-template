import { defineStore } from "pinia";
import type { CredentialsInterface, UserInterface } from "~/types";

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

  const login = (payload: CredentialsInterface) => {
    const { tokens, user } = payload;
    const cookieToken = useCookie("token");
    cookieToken.value = tokens.access;
    token.value = tokens.access;
    currentUser.value = user;
    isLoggedIn.value = true;
  };

  const logout = () => {
    const cookieToken = useCookie("token");
    cookieToken.value = null;
    token.value = null;
    currentUser.value = null;
    isLoggedIn.value = false;
  };

  return { isLoggedIn, currentUser, login, logout, token };
});
