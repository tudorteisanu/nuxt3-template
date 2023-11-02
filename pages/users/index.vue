<script setup>
import { useFetchUsers } from "~/composables/users/useFetchUsers";

definePageMeta({
  middleware: ["auth"],
});
useHead({
  title: "Users",
});
const { fetchUsers } = useFetchUsers();

onBeforeMount(async () => {
  await fetchUsers();
});

const store = useUsersStore();

const updateUsersList = async (pagination) => {
  store.updatePagination(pagination);
  await fetchUsers();
};
</script>

<template>
  <v-card flat="">
    <v-card-title>
      <v-btn color="primary" to="/users/add">
        Add user
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-card>
        <v-card-text>
          <UsersList @update:pagination="updateUsersList" />
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>
