// import useApi from '~/composables/api';
import { useUsersStore } from "~/stores/users";
import { users } from "~/settings/data/users";

interface UseFetchUsersInterface {
  fetchUsers: () => void;
}

export const useFetchUsers = (): UseFetchUsersInterface => {
  const store = useUsersStore();

  // const api = useApi();

  const fetchUsers = () => {
    // const { data, error } =  await api.get('/users');

    // if (data.value) {
    //   store.setUsers(data.value);
    //   return;
    // }
    store.setUsers(users);
  };

  return { fetchUsers };
};
