import { defineStore } from "pinia";
import { UserInterface } from "~/types/user.interface";

interface UsersStoreStateInterface {
  items: Ref<UserInterface[]>;
  removeUser: (userId: number) => void;
  addUser: (user: UserInterface) => void;
  setUsers: (users: UserInterface[]) => void;
  updateUser: (id: number, users: UserInterface) => void;
  getUserById: (id: number) => UserInterface | undefined;
}

export const useUsersStore = defineStore("users", (): UsersStoreStateInterface => {
  const items: Ref<UserInterface[]> = ref([]);

  const addUser = (user: UserInterface) => {
    items.value.push(user);
  };

  const removeUser = (userId: number) => {
    const userIndex = items.value.findIndex(item => item.id === userId);

    if (~userIndex) {
      items.value.splice(userIndex, 1);
    }
  };

  const setUsers = (users: UserInterface[]) => {
    items.value = users;
  };

  const updateUser = (id: number, user: UserInterface) => {
    const index = items.value.findIndex(item => item.id === id);

    if (~index) {
      items.value[index] = {
        ...items.value[index],
        ...user,
      };
    }
  };

  const getUserById = (id: number) => {
    return items.value.find(item => item.id === id);
  };

  return { items, removeUser, addUser, setUsers, updateUser, getUserById };
});
