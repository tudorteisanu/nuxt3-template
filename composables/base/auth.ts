import { storeToRefs } from "pinia";
import { useFetch } from "@vueuse/core";
import useApi from "./api";
import type { CreateUserInterface, UserInterface } from "~/types/user.interface";
import type { CredentialsInterface } from "~/types";
import { useAuthStore } from "~/stores/auth";

interface AuthInterface {
  login: (user: UserInterface) => void;
  logout: () => void;
  check: (token: string) => void;
  register: (data: CreateUserInterface) => Promise<void>;
}

export const useAuth = (): AuthInterface => {
  const authStore = useAuthStore();
  const router = useRouter();
  const api = useApi();
  const { currentUser } = storeToRefs(useAuthStore());
  const { apiUrl } = useRuntimeConfig().public;
  const login = async (user: any): Promise<void> => {
    const { data } = await api.post("/login", {
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
    try {
      const { user } = await $fetch<CredentialsInterface>(`${apiUrl}/auth/check`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      authStore.isLoggedIn = true;
      authStore.token = token;
      currentUser.value = user;
    }
    catch (e) {
      authStore.isLoggedIn = false;
      authStore.token = null;
      currentUser.value = null;
    }
  };

  return { login, logout, check, register };
};
