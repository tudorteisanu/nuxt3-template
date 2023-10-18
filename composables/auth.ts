import { storeToRefs } from "pinia";
import useApi from "./api";
import { CreateUserInterface, UserInterface } from "~/types/user.interface";
import type { CredentialsInterface } from "~/types";
import { useAuthStore } from "~/stores/auth";

interface AuthInterface {
  login: (user: UserInterface) => void;
  logout: () => void;
  check: (token: string) => Promise<void>;
  register: (data: CreateUserInterface) => Promise<void>;
}

export const useAuth = (): AuthInterface => {
  const authStore = useAuthStore();
  const router = useRouter();
  const api = useApi();

  const login = async (user: any): Promise<void> => {
    const { data } = await useFetch<CredentialsInterface>("https://shoply-api.nanoit.dev/api/auth/login", {
      body: user,
      method: "POST",
    });

    authStore.login(data.value as CredentialsInterface);
    router.push("/");
  };

  const register = async (user: any): Promise<void> => {
    const { data } = await api.post("/register", user);

    authStore.login(data.value as CredentialsInterface);
    router.push("/");
  };

  const logout = () => {
    authStore.logout();
    router.push("/login");
  };

  const check = async (token: string): Promise<void> => {
    const { data, error } = await useFetch<UserInterface>("https://shoply-api.nanoit.dev/api/auth/user-info", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const { currentUser } = storeToRefs(useAuthStore());

    if (error.value) {
      authStore.isLoggedIn = false;
      authStore.token = null;
      currentUser.value = null;
      return;
    }

    authStore.isLoggedIn = true;
    authStore.token = token;
    currentUser.value = data.value;
  };

  return { login, logout, check, register };
};
