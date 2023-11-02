import useApi from "~/composables/base/api";

export const useLogout = (): any => {
  const api = useApi();
  const router = useRouter();
  const { logout } = useAuthStore();

  return async () => {
    await api("/auth/logout");
    logout();
    await router.push("/login");
  };
};
