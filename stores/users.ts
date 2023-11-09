import { defineStore } from "pinia";
import { useApi, useApiFetch } from "~/composables";
import type { CreateUserInterface, UserInterface } from "~/types";

export const useUsersStore = defineStore("users", {

  state: () => ({
    items: [] as UserInterface[],
    pagination: {
      size: 10,
      page: 1,
      total: 0,
    },
    isFetching: false,
  }),
  getters: {

  },
  actions: {
    async fetchUsers() {
      try {
        this.isFetching = true;
        const searchParams = new URLSearchParams({
          size: this.pagination.size.toString(),
          page: this.pagination.page.toString(),
        });

        const data = await useApiFetch(["/users", searchParams.toString()].join("?"));

        if (data) {
          const { items, ...pagination } = data;
          this.items = items;
          this.pagination = pagination;
        }
      }
      catch (e) {
        console.log(e);
      }
      finally {
        this.isFetching = false;
      }
    },
    async fetchUserById(id: string) {
      return await useApiFetch(`/users/${id}`);
    },
    async updateUserById(id: string, payload: UserInterface) {
      const response = await useApiFetch(`/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      this.updateUser(id, response);

      return response;
    },
    async removeUser(id: string) {
      await useApiFetch(`/users/${id}`, {
        method: "DELETE",
      });

      const index = this.items.findIndex(item => item.id === id);

      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    addUser(payload: CreateUserInterface) {
      return useApi("/users").post(payload);
    },
    updateUser(id: string, payload: UserInterface) {
      const index = this.items.findIndex(item => item.id === id);

      if (index === -1) {
        this.items.push(payload);
        return;
      }

      this.items[index] = payload;
    },
    updatePagination(payload: Record<string, any>) {
      this.pagination = {
        ...this.pagination,
        ...payload,
      };
    },
  },
});
