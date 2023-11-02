<script setup lang="ts">
import { headers } from "~/settings/data/users";
import { useRemoveUser } from "~/composables/users/useRemoveUser";
import useConfirmDialog from "~/composables/base/confirmDialog";
import { useUsersStore } from "~/stores/users";

const emit = defineEmits(["update:pagination"]);

const usersStore = storeToRefs(useUsersStore());
const removeUser = useRemoveUser();
const { items, pagination } = usersStore;
const { open } = useConfirmDialog();

const onPageUpdate = ({ itemsPerPage, page }): void => {
  emit("update:pagination", { size: itemsPerPage, page });
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
      :headers="headers"
      :items="items"
      :page="pagination.page"
      :page-count="3"
      :items-length="pagination.total"
      @update:options="onPageUpdate"
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
