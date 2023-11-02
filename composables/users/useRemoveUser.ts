import useApi from "~/composables/base/api";

export const useRemoveUser = (): (id: number) => void => {
  const api = useApi();
  const store = useUsersStore();

  return async (id: number) => {
    await api(`/users/${id}`).delete();
    store.removeUser(id);
  };
};
