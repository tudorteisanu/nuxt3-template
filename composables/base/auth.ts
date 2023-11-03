import { storeToRefs } from "pinia";
import type { CreateUserInterface, UserInterface } from "~/types/user.interface";
import { useAuthStore } from "~/stores/auth";
import type { LoginInterface } from "~/types/login.interface";

interface AuthInterface {
  login: (user: LoginInterface) => void;
  logout: () => void;
  check: () => void;
  register: (data: CreateUserInterface) => Promise<void>;
}

export const useAuth = (): AuthInterface => {
  const { login: storeLogin, refresh, register: storeRegister, setTokens, logout: storeLogout } = useAuthStore();
  const accessToken = useCookie("accessToken");
  const refreshToken = useCookie("refreshToken");

  setTokens({ access: accessToken.value, refresh: refreshToken.value });

  const router = useRouter();
  const { currentUser, isLoggedIn } = storeToRefs(useAuthStore());
  const { apiUrl } = useRuntimeConfig().public;

  const login = async (user: LoginInterface): Promise<void> => {
    try {
      const { tokens } = await storeLogin(user as LoginInterface);
      accessToken.value = tokens.access;
      refreshToken.value = tokens.refresh;
      // router.push("/");
    }
    catch (e) {
      console.log(e);
    }
  };

  const register = async (user: any): Promise<void> => {
    await storeRegister(user as CreateUserInterface);
    router.push("/");
  };

  const logout = async () => {
    await storeLogout();
    accessToken.value = null;
    refreshToken.value = null;
    router.push("/login");
  };

  const check = async (): Promise<void> => {
    try {
      if (isLoggedIn.value) {
        return;
      }
      const response = await $fetch<{user: UserInterface}>(`${apiUrl}/auth/check`, {
        headers: {
          authorization: `Bearer ${accessToken.value}`,
        },
      });

      if (response?.user) {
        isLoggedIn.value = true;
        currentUser.value = response.user;
        router.push("/");
      }
    }
    catch (e: any) {
      if (e.data?.error === "token_expired") {
        await refresh();
      }
    }
  };

  return { login, logout, check, register };
};
