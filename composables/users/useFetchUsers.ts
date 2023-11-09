import { useUsersStore } from "~/stores";

export const useFetchUsers = (): void => {
  definePageMeta({
    middleware: ["auth"],
  });
  useHead({
    title: "Users",
  });
  const { fetchUsers } = useUsersStore();

  onBeforeMount(async () => {
    await fetchUsers();
  });
};
