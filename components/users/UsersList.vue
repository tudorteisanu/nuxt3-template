<script setup lang="ts">
import { headers } from "~/settings/data/users";
const isRemovingUser = false;
const usersStore = useUsersStore();
const removeUser = (data) => {
  console.log(data);
};
const itemsPerPage = ref(10);
</script>

<template>
  <client-only>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="usersStore.items"
      :loading="isRemovingUser"
    >
      <template #item.actions="{item}">
        <v-btn
          :to="`/users/${item.raw.id}`"
          :flat="true"
        >
          <v-icon
            size="small"
            class="me-2"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-icon
          size="small"
          @click="removeUser(item.raw)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </client-only>
</template>
