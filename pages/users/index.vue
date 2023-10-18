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
</script>

<template>
  <UsersList />
</template>
