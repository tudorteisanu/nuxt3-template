<script setup lang="ts">
import { usersHeaders } from "~/settings";
import { useConfirmDialog } from "~/composables";
import { useUsersStore } from "~/stores/users";

const { open } = useConfirmDialog();
const { items, pagination, isFetching } = storeToRefs(useUsersStore());
const { fetchUsers, updatePagination, removeUser } = useUsersStore();
const onUpdatePage = async (page: number) => {
  updatePagination({ page });
  await fetchUsers();
  return page;
};
const onUpdateItemsPerPage = async (size: number) => {
  updatePagination({ size });
  await fetchUsers();
  return size;
};
const deleteUser = (id) => {
  open(() => {
    removeUser(id);
  });
};
</script>

<template>
  <client-only>
    <v-data-table-server
      :items-per-page="pagination.size"
      :headers="usersHeaders"
      :items="items"
      :page="pagination.page"
      :items-length="pagination.total"
      :loading="isFetching"
      @update:page="onUpdatePage"
      @update:items-per-page="onUpdateItemsPerPage"
    >
      <template #item.actions="{item}">
        <v-btn
          :to="`/users/${item.raw.id}`"
          :flat="true"

          size="x-small"
        >
          <v-icon
            class="me-2"
          >
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn
          :flat="true"
          variant="plain"
          size="x-small"
          @click="deleteUser(item.raw.id)"
        >
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-data-table-server>
  </client-only>
</template>
