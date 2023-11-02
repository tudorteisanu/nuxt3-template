import { useUsersStore } from "~/stores/users";
import useApi from "~/composables/base/api";

interface UseFetchUsersInterface {
  fetchUsers: () => void;
}

export const useFetchUsers = (): UseFetchUsersInterface => {
  const store = useUsersStore();
  const api = useApi();

  const fetchUsers = async () => {
    const url = "/users";
    const search = new URLSearchParams({
      page: store.pagination.page.toString(),
      size: store.pagination.size.toString(),

    });
    const { data } = await api([url, search.toString()].join("?"), {
      default: {
        items: [],
        page: 1,
        size: 10,
      },
    }).json();

    if (data.value) {
      const { items, ...pagination } = data.value;
      store.setUsers(items);

      store.updatePagination(pagination);
    }
  };

  return { fetchUsers };
};
